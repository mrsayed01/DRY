// Utility to handle large audio file storage using IndexedDB
// This bypasses the 5MB localStorage limit and supports up to hundreds of MBs (browser dependent)

const DB_NAME = 'dry_audio_db';
const DB_VERSION = 1;
const STORE_NAME = 'audios';

/**
 * Opens the IndexedDB database
 * @returns {Promise<IDBDatabase>}
 */
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("IndexedDB error:", event.target.error);
            reject("Could not open audio database");
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
 * Save an audio file to IndexedDB
 * @param {string|number} id - The unique ID of the audio
 * @param {Blob|File} file - The audio file object
 * @returns {Promise<void>}
 */
export const saveAudioFile = async (id, file) => {
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
    } catch (err) {
        console.error("Error saving audio:", err);
        throw err;
    }
};

/**
 * Retrieve an audio file from IndexedDB
 * @param {string|number} id - The unique ID of the audio
 * @returns {Promise<Blob|null>} - Returns the file blob or null if not found
 */
export const getAudioFile = async (id) => {
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
    } catch (err) {
        console.error("Error retrieving audio:", err);
        return null;
    }
};

/**
 * Delete an audio file from IndexedDB
 * @param {string|number} id - The unique ID of the audio
 * @returns {Promise<void>}
 */
export const deleteAudioFile = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(String(id));

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (err) {
        console.error("Error deleting audio:", err);
        throw err;
    }
};
