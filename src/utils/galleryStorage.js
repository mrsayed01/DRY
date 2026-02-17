
import img1 from '../assets/carousel-1.jpg';
import img2 from '../assets/carousel-2.jpg';
import img3 from '../assets/carousel-3.jpg';
import img4 from '../assets/hero.jpg';
import img5 from '../assets/donate.jpg';
import img6 from '../assets/facts.jpg';

const GALLERY_DB_NAME = 'DRY_Gallery_DB';
const GALLERY_STORE_NAME = 'gallery';
const DB_VERSION = 1;

// Initialize DB
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(GALLERY_DB_NAME, DB_VERSION);

        request.onerror = (event) => reject("IndexedDB error: " + event.target.error);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(GALLERY_STORE_NAME)) {
                db.createObjectStore(GALLERY_STORE_NAME, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
    });
};

const DEFAULT_GALLERY_ITEMS = [
    { id: 'def-1', img: img1, title: "Cultural Festival", desc: "Celebrating our heritage" },
    { id: 'def-2', img: img2, title: "Youth Empowerment", desc: "Future leaders" },
    { id: 'def-3', img: img3, title: "Community Meeting", desc: "Building consensus" },
    { id: 'def-4', img: img4, title: "National Landmarks", desc: "Pride of the nation" },
    { id: 'def-5', img: img5, title: "Social Initiatives", desc: "Helping the community" },
    { id: 'def-6', img: img6, title: "Historical Archives", desc: "Remembering our past" },
    { id: 'def-7', img: img1, title: "Traditional Dance", desc: "Art in motion" },
    { id: 'def-8', img: img2, title: "Education Drive", desc: "Knowledge is power" },
    { id: 'def-9', img: img3, title: "Public Address", desc: "Leadership in action" }
];

// Helper to initialize defaults if empty
const initDefaults = async (db) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([GALLERY_STORE_NAME], 'readonly');
        const store = transaction.objectStore(GALLERY_STORE_NAME);
        const countRequest = store.count();

        countRequest.onsuccess = () => {
            if (countRequest.result === 0) {
                const writeTx = db.transaction([GALLERY_STORE_NAME], 'readwrite');
                const writeStore = writeTx.objectStore(GALLERY_STORE_NAME);
                DEFAULT_GALLERY_ITEMS.forEach(item => writeStore.add(item));
                writeTx.oncomplete = () => resolve(DEFAULT_GALLERY_ITEMS);
                writeTx.onerror = (e) => reject(e);
            } else {
                resolve(null);
            }
        };
        countRequest.onerror = (e) => reject(e);
    });
};

export const getGalleryItems = async () => {
    try {
        const db = await openDB();
        await initDefaults(db);
        
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([GALLERY_STORE_NAME], 'readonly');
            const store = transaction.objectStore(GALLERY_STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                // Return reversed to show newest first if we add timestamps, but for now just as is
                // Or maybe reverse to show added ones first?
                // The user said "backend dashboard side bar sai costomize huna chiye"
                resolve(request.result);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error getting gallery items:", err);
        return DEFAULT_GALLERY_ITEMS;
    }
};

export const saveGalleryItem = async (item) => {
    try {
        const db = await openDB();
        const newItem = {
            ...item,
            id: item.id || Date.now().toString(),
        };

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([GALLERY_STORE_NAME], 'readwrite');
            const store = transaction.objectStore(GALLERY_STORE_NAME);
            const request = store.put(newItem);

            request.onsuccess = async () => {
                const all = await getGalleryItems();
                resolve(all);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error saving gallery item:", err);
        throw err;
    }
};

export const deleteGalleryItem = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([GALLERY_STORE_NAME], 'readwrite');
            const store = transaction.objectStore(GALLERY_STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = async () => {
                const all = await getGalleryItems();
                resolve(all);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error deleting gallery item:", err);
        throw err;
    }
};
