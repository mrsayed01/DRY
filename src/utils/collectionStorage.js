const DB_NAME = 'DRY_Collections_DB';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME);
    request.onerror = (event) => reject(event.target.error);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      // No predefined stores; created lazily per collection
    };
    request.onsuccess = (event) => resolve(event.target.result);
  });
};

const ensureStore = (db, storeName) => {
  return new Promise((resolve, reject) => {
    if (db.objectStoreNames.contains(storeName)) {
      resolve(db);
      return;
    }
    // Need to close and reopen with higher version to create new store
    const newVersion = db.version + 1;
    db.close();
    const req = indexedDB.open(DB_NAME, newVersion);
    req.onupgradeneeded = (e) => {
      const upgraded = e.target.result;
      if (!upgraded.objectStoreNames.contains(storeName)) {
        upgraded.createObjectStore(storeName, { keyPath: 'id' });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
};

export const getItems = async (collection) => {
  const db = await openDB();
  const readyDb = await ensureStore(db, collection);
  return new Promise((resolve, reject) => {
    const tx = readyDb.transaction([collection], 'readonly');
    const store = tx.objectStore(collection);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = (e) => reject(e.target.error);
  });
};

export const saveItem = async (collection, item) => {
  const db = await openDB();
  const readyDb = await ensureStore(db, collection);
  const newItem = { 
    id: item.id || Date.now().toString(), 
    title: item.title || '', 
    content: item.content || '', 
    img: item.img || null 
  };
  return new Promise((resolve, reject) => {
    const tx = readyDb.transaction([collection], 'readwrite');
    const store = tx.objectStore(collection);
    const req = store.put(newItem);
    req.onsuccess = async () => {
      const all = await getItems(collection);
      resolve(all);
    };
    req.onerror = (e) => reject(e.target.error);
  });
};

export const deleteItem = async (collection, id) => {
  const db = await openDB();
  const readyDb = await ensureStore(db, collection);
  return new Promise((resolve, reject) => {
    const tx = readyDb.transaction([collection], 'readwrite');
    const store = tx.objectStore(collection);
    const req = store.delete(id);
    req.onsuccess = async () => {
      const all = await getItems(collection);
      resolve(all);
    };
    req.onerror = (e) => reject(e.target.error);
  });
};

export const clearCollection = async (collection) => {
  const db = await openDB();
  const readyDb = await ensureStore(db, collection);
  return new Promise((resolve, reject) => {
    const tx = readyDb.transaction([collection], 'readwrite');
    const store = tx.objectStore(collection);
    const req = store.clear();
    req.onsuccess = () => resolve([]);
    req.onerror = (e) => reject(e.target.error);
  });
};

export const saveItems = async (collection, items) => {
  const db = await openDB();
  const readyDb = await ensureStore(db, collection);
  return new Promise((resolve, reject) => {
    const tx = readyDb.transaction([collection], 'readwrite');
    const store = tx.objectStore(collection);
    items.forEach((item) => {
      const payload = {
        id: item.id || Date.now().toString() + Math.random().toString(16).slice(2),
        title: item.title || '',
        content: item.content || '',
        img: item.img || null
      };
      store.put(payload);
    });
    tx.oncomplete = async () => {
      const all = await getItems(collection);
      resolve(all);
    };
    tx.onerror = (e) => reject(e.target.error);
  });
};
