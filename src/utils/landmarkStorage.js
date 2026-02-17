// Importing Landmark Images
import adoAwaye from '../assets/landmarks/ado_awaye.jpg';
import agbeleRock from '../assets/landmarks/agbele_rock.jpg';
import barBeach from '../assets/landmarks/bar_beach.jpg';
import ebomiLake from '../assets/landmarks/ebomi_lake.jpg';
import ikogosiWarmSpring from '../assets/landmarks/ikogosi_warm_spring.jpg';
import iyaleSuspended from '../assets/landmarks/iyale_suspended.jpg';
import okeIdanre from '../assets/landmarks/oke_idanre.jpg';
import okutaGbokuta from '../assets/landmarks/okuta_gbokuta_lori.jpg';
import olumoRock from '../assets/landmarks/olumo_rock.jpg';
import osunRiver from '../assets/landmarks/osun_river.jpg';
import osuuruSpring from '../assets/landmarks/osuuru_water_spring.jpg';
import owuWaterfall from '../assets/landmarks/owu_waterfall.jpg';
import sobiHill from '../assets/landmarks/sobihill.jpg';

const LANDMARKS_STORAGE_KEY = 'ngo_landmarks_data';
const DB_NAME = 'dry_landmarks_db';
const DB_VERSION = 1;
const STORE_NAME = 'landmark_images';

// --- IndexedDB Utilities ---

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("IndexedDB error:", event.target.error);
            reject("Could not open landmarks database");
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

export const saveLandmarkImage = async (id, image) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            
            // We store an object with id and the image (base64 or blob)
            const request = store.put({ id: String(id), image: image, timestamp: Date.now() });

            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Error saving landmark image:", error);
        throw error;
    }
};

export const getLandmarkImage = async (id) => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(String(id));

            request.onsuccess = () => {
                const result = request.result;
                resolve(result ? result.image : null);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Error retrieving landmark image:", error);
        return null;
    }
};

export const deleteLandmarkImage = async (id) => {
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
        console.error("Error deleting landmark image:", error);
    }
};

// --- LocalStorage Utilities ---

export const DEFAULT_LANDMARKS = [
    {
        id: 1,
        title: "OWU WATERFALL",
        location: "OLD OYO EMPIRE",
        desc: "The highest waterfall in West Africa, cascading down 120 meters into a pool of ice-cold water.",
        img: owuWaterfall
    },
    {
        id: 2,
        title: "SOBI HILL",
        location: "OLD OYO EMPIRE",
        desc: "A scenic hill offering hiking trails and panoramic views, a favorite spot for nature lovers and adventurers.",
        img: sobiHill
    },
    {
        id: 3,
        title: "OLUMO ROCK",
        location: "ABEOKUTA",
        desc: "The historic fortress of Abeokuta, providing refuge during inter-tribal wars and offering panoramic views of the city.",
        img: olumoRock
    },
    {
        id: 4,
        title: "OSUURU WATER SPRING ABEOKUTA",
        location: "ABEOKUTA",
        desc: "A refreshing natural spring in Abeokuta, known for its purity and continuous flow through the seasons.",
        img: osuuruSpring
    },
    {
        id: 5,
        title: "OKE IDANRE",
        location: "IDANRE",
        desc: "The magnificent Idanre Hills, a UNESCO World Heritage candidate, featuring ancient settlements and diverse ecosystems.",
        img: okeIdanre
    },
    {
        id: 6,
        title: "EBOMI LAKE",
        location: "IDANRE",
        desc: "A pristine body of water located in the heart of our land, known for its mysterious depth and cultural importance.",
        img: ebomiLake
    },
    {
        id: 7,
        title: "ADO AWAYE",
        location: "IBADAN",
        desc: "Home to one of the only two suspended lakes in the world, the Iyake Lake, offering breathtaking views and spiritual significance.",
        img: adoAwaye
    },
    {
        id: 8,
        title: "OKUTA GBOKUTA LORI",
        location: "OROLE",
        desc: "The 'Stone upon Stone' formation, a marvelous balancing rock structure that has stood the test of time.",
        img: okutaGbokuta
    },
    {
        id: 9,
        title: "IKOGOSI WARM SPRING",
        location: "EKITI",
        desc: "A geological wonder where warm and cold springs meet, flowing side by side without mixing.",
        img: ikogosiWarmSpring
    },
    {
        id: 10,
        title: "BAR BEACH",
        location: "EKO",
        desc: "A historic coastal stretch that has witnessed the evolution of our great nation, offering serenity and ocean views.",
        img: barBeach
    },
    {
        id: 11,
        title: "OSUN RIVER",
        location: "OSUN",
        desc: "The sacred river dedicated to the river goddess Osun, flowing through the UNESCO World Heritage Sacred Grove.",
        img: osunRiver
    },
    {
        id: 12,
        title: "AGBELE ROCK, IGBETI",
        location: "STATE OF IBADAN",
        desc: "A natural masterpiece in the Yoruba land, standing as a symbol of resilience and natural beauty.",
        img: agbeleRock
    },
    {
        id: 13,
        title: "IYALE SUSPENDED LAKE ON THE OKE ADO MOUNTAIN IN ADO AWAYE,",
        location: "STATE OF IBADAN",
        desc: "A rare geographical phenomenon, this suspended lake sits atop the mountains, defying gravity and logic.",
        img: iyaleSuspended
    }
];

export const getLandmarks = () => {
    const stored = localStorage.getItem(LANDMARKS_STORAGE_KEY);
    if (!stored) {
        // Initialize with default data if empty
        localStorage.setItem(LANDMARKS_STORAGE_KEY, JSON.stringify(DEFAULT_LANDMARKS));
        return DEFAULT_LANDMARKS;
    }
    return JSON.parse(stored);
};

export const saveLandmark = (landmark) => {
    const landmarks = getLandmarks();
    
    // Check if it really exists
    const index = landmarks.findIndex(l => l.id === landmark.id);
    
    if (index !== -1) {
        // Update existing
        landmarks[index] = landmark;
    } else {
        // Add new
        const newLandmark = {
            ...landmark,
            id: landmark.id || Date.now()
        };
        landmarks.push(newLandmark);
    }
    
    localStorage.setItem(LANDMARKS_STORAGE_KEY, JSON.stringify(landmarks));
    return landmarks;
};

export const deleteLandmark = (id) => {
    const landmarks = getLandmarks();
    const filtered = landmarks.filter(l => l.id !== id);
    localStorage.setItem(LANDMARKS_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
};
