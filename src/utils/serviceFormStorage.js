
const DB_NAME = 'DRY_Services_DB';
const STORE_NAME = 'submissions';
const DB_VERSION = 1;

// Initialize DB
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => reject("IndexedDB error: " + event.target.error);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
    });
};

export const saveServiceSubmission = async (submission) => {
    try {
        const db = await openDB();
        const newSubmission = {
            ...submission,
            id: Date.now().toString(),
            submittedAt: new Date().toISOString(),
            status: 'new' // new, read, contacted
        };

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.add(newSubmission);

            request.onsuccess = () => resolve(newSubmission);
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error saving submission:", err);
        throw err;
    }
};

export const getServiceSubmissions = async () => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                // Sort by date descending
                const submissions = request.result.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
                resolve(submissions);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error getting submissions:", err);
        return [];
    }
};

export const updateSubmissionStatus = async (id, status) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const getRequest = store.get(id);

            getRequest.onsuccess = () => {
                const data = getRequest.result;
                if (data) {
                    data.status = status;
                    store.put(data);
                    resolve(data);
                } else {
                    reject("Submission not found");
                }
            };
        });
    } catch (err) {
        console.error("Error updating status:", err);
        throw err;
    }
};
