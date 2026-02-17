// Utility to handle large video file storage using IndexedDB
// This bypasses the 5MB localStorage limit and supports up to hundreds of MBs (browser dependent)

const DB_NAME = 'dry_media_db';
const DB_VERSION = 1;
const STORE_NAME = 'videos';

/**
 * Opens the IndexedDB database
 * @returns {Promise<IDBDatabase>}
 */
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("IndexedDB error:", event.target.error);
            reject("Could not open video database");
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
    });
};

/**
 * Save a video file to IndexedDB
 * @param {string|number} id - The unique ID of the video
 * @param {Blob|File} file - The video file object
 * @returns {Promise<void>}
 */
export const saveVideoFile = async (id, file) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            
            // We store an object with id and the file blob
            const request = store.put({ id: String(id), file: file, timestamp: Date.now() });

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Error saving video:", error);
        throw error;
    }
};

/**
 * Retrieve a video file from IndexedDB
 * @param {string|number} id - The unique ID of the video
 * @returns {Promise<Blob|null>} - The video blob or null if not found
 */
export const getVideoFile = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(String(id));

            request.onsuccess = () => {
                const result = request.result;
                resolve(result ? result.file : null);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Error retrieving video:", error);
        return null;
    }
};

/**
 * Delete a video file from IndexedDB
 * @param {string|number} id - The unique ID of the video
 * @returns {Promise<void>}
 */
export const deleteVideoFile = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(String(id));

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Error deleting video:", error);
    }
};
