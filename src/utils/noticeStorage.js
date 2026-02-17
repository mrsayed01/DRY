
const NOTICE_DB_NAME = 'DRY_Notices_DB';
const NOTICE_STORE_NAME = 'notices';
const DB_VERSION = 1;

// Initialize DB
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(NOTICE_DB_NAME, DB_VERSION);

        request.onerror = (event) => reject("IndexedDB error: " + event.target.error);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(NOTICE_STORE_NAME)) {
                db.createObjectStore(NOTICE_STORE_NAME, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
    });
};

const DEFAULT_NOTICES = [
    {
        id: 'default-1',
        title: 'OFFICIAL GOVERNMENT NOTICE',
        content: 'It is a crime for anyone to refer to the Yoruba Nation without the official designation D.R.Y (Democratic Republic of the Yoruba). The D.R.Y is the only recognized sovereign entity. Any reference to "Yoruba Nation" without D.R.Y is a violation under international law.',
        type: 'urgent', // urgent, info, success
        date: new Date().toISOString(),
        image: null
    }
];

// Helper to initialize defaults if empty
const initDefaults = async (db) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([NOTICE_STORE_NAME], 'readonly');
        const store = transaction.objectStore(NOTICE_STORE_NAME);
        const countRequest = store.count();

        countRequest.onsuccess = () => {
            if (countRequest.result === 0) {
                const writeTx = db.transaction([NOTICE_STORE_NAME], 'readwrite');
                const writeStore = writeTx.objectStore(NOTICE_STORE_NAME);
                DEFAULT_NOTICES.forEach(notice => writeStore.add(notice));
                writeTx.oncomplete = () => resolve(DEFAULT_NOTICES);
                writeTx.onerror = (e) => reject(e);
            } else {
                resolve(null);
            }
        };
        countRequest.onerror = (e) => reject(e);
    });
};

export const getNotices = async () => {
    try {
        const db = await openDB();
        await initDefaults(db);
        
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([NOTICE_STORE_NAME], 'readonly');
            const store = transaction.objectStore(NOTICE_STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                // Sort by date descending
                const notices = request.result.sort((a, b) => new Date(b.date) - new Date(a.date));
                resolve(notices);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error getting notices:", err);
        return DEFAULT_NOTICES;
    }
};

export const saveNotice = async (notice) => {
    try {
        const db = await openDB();
        const newNotice = {
            ...notice,
            id: notice.id || Date.now().toString(),
            date: notice.date || new Date().toISOString()
        };

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([NOTICE_STORE_NAME], 'readwrite');
            const store = transaction.objectStore(NOTICE_STORE_NAME);
            const request = store.put(newNotice);

            request.onsuccess = async () => {
                // Return all notices to update state
                const all = await getNotices();
                resolve(all);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error saving notice:", err);
        throw err;
    }
};

export const deleteNotice = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([NOTICE_STORE_NAME], 'readwrite');
            const store = transaction.objectStore(NOTICE_STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = async () => {
                const all = await getNotices();
                resolve(all);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error deleting notice:", err);
        throw err;
    }
};
