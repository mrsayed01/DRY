import React, { useState, useEffect } from "react";
import '../css/admin.css';
import { useNavigate } from "react-router-dom";
import { saveVideoFile, deleteVideoFile } from "../utils/videoStorage";
import { saveAudioFile, deleteAudioFile } from "../utils/audioStorage";
import { getNotices, saveNotice, deleteNotice as removeNotice } from '../utils/noticeStorage';
import { getServiceSubmissions, updateSubmissionStatus } from '../utils/serviceFormStorage';
import { getGalleryItems, saveGalleryItem, deleteGalleryItem } from '../utils/galleryStorage';
import { getItems as getCollectionItems, saveItem as saveCollectionItem, saveItems as saveCollectionItems, deleteItem as deleteCollectionItem, clearCollection } from '../utils/collectionStorage';
import { getLandmarks, saveLandmark, deleteLandmark, saveLandmarkImage, deleteLandmarkImage, getLandmarkImage } from '../utils/landmarkStorage';
import logo from '../assets/logo.png';
import img1 from '../assets/carousel-1.jpg';
import img2 from '../assets/carousel-2.jpg';
import img3 from '../assets/carousel-3.jpg';

// Mock Data for Government Dashboard
const mockStats = [
    { title: "Total Population", value: "45.2M", icon: "fa-users", color: "bg-green" },
    { title: "National Treasury", value: "₦ 85.4B", icon: "fa-landmark", color: "bg-gold" },
    { title: "Pending Applications", value: "1,245", icon: "fa-file-signature", color: "bg-orange" },
    { title: "Digital Portal Visits", value: "3.2M", icon: "fa-globe", color: "bg-blue" },
];

const mockApplications = [
    { id: "APP-2025-001", name: "Adeola Ogunleye", type: "Passport Renewal", date: "Oct 24, 2025", status: "Approved" },
    { id: "APP-2025-002", name: "Chinedu Okeke", type: "Business Registration", date: "Oct 23, 2025", status: "Pending" },
    { id: "APP-2025-003", name: "Fatima Yusuf", type: "Land Title Deed", date: "Oct 22, 2025", status: "Processing" },
    { id: "APP-2025-004", name: "Babajide Sanwo", type: "Tax Clearance", date: "Oct 21, 2025", status: "Rejected" },
    { id: "APP-2025-005", name: "N Ngozi Iweala", type: "Foundation Permit", date: "Oct 20, 2025", status: "Approved" },
];

// Default Video Data (Must match VideoPage.jsx default)
const DEFAULT_FEATURED = {
    title: "The Rise of D.R.Y: A Journey of Sovereignty",
    desc: "An exclusive documentary covering the historic events that led to the formation of the Democratic Republic of the Yoruba. Witness the passion, the struggle, and the victory.",
    thumbnail: img3,
    duration: "45:00",
    views: "1.5M views"
};

const DEFAULT_VIDEOS = [
    { id: 1, title: "Independence Day Parade 2025", thumbnail: img1, duration: "10:30", views: "1.2k views", date: "Oct 12, 2025", category: "Event" },
    { id: 2, title: "Cultural Dance Performance", thumbnail: img2, duration: "5:45", views: "850 views", date: "Sep 25, 2025", category: "Culture" },
    { id: 3, title: "Development Projects Update", thumbnail: img3, duration: "8:20", views: "2.5k views", date: "Aug 10, 2025", category: "News" },
    { id: 4, title: "Interview with Elders", thumbnail: img1, duration: "25:00", views: "3.1k views", date: "Jul 05, 2025", category: "History" },
    { id: 5, title: "Youth Sports Festival Highlights", thumbnail: img2, duration: "12:15", views: "900 views", date: "Jun 20, 2025", category: "Sports" },
    { id: 6, title: "Tourism Showcase: Hidden Gems", thumbnail: img3, duration: "4:50", views: "5.6k views", date: "May 15, 2025", category: "Travel" },
    { id: 7, title: "Tech Summit Lagos", thumbnail: img1, duration: "18:00", views: "1.1k views", date: "Apr 22, 2025", category: "Technology" },
    { id: 8, title: "Agricultural Revolution", thumbnail: img2, duration: "14:30", views: "2.8k views", date: "Mar 10, 2025", category: "Economy" },
];

const CATEGORIES = [
    "General", "Event", "Culture", "News", "History", "Sports", "Travel", "Technology", "Economy", "Education", "Health",
    "Anthem", "Speech", "Storytelling", "Music", "Ambient", "Instrumental"
];

// Default Audio Data (Must match AudioPage.jsx default)
const DEFAULT_FEATURED_AUDIO = { 
    title: "National Anthem of D.R.Y", 
    artist: "The Royal Choir & Orchestra", 
    duration: "3:45", 
    desc: "Experience the pride and glory of our nation through this symphonic masterpiece.",
    category: "Anthem"
};

const DEFAULT_AUDIOS = [
    { id: 1, title: "Cultural Rhythms", artist: "Traditional Drummers", duration: "4:20", category: "Culture" },
    { id: 2, title: "Presidential Address 2025", artist: "H.E. Mobolaji Olawale", duration: "15:00", category: "Speech" },
    { id: 3, title: "Tales by Moonlight", artist: "Heritage Group", duration: "12:10", category: "Storytelling" },
    { id: 4, title: "Unity Song", artist: "Youth Voice", duration: "3:30", category: "Music" },
    { id: 5, title: "Market Day Sounds", artist: "Ambient", duration: "2:50", category: "Ambient" },
    { id: 6, title: "The Talking Drum", artist: "Master Percussionists", duration: "6:15", category: "Instrumental" },
    { id: 7, title: "Voices of Tomorrow", artist: "Children's Choir", duration: "3:45", category: "Music" },
    { id: 8, title: "Elder's Wisdom", artist: "Council of Chiefs", duration: "18:20", category: "Speech" },
];

function Admin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState("dashboard");
    const [collectionsOpen, setCollectionsOpen] = useState(true);
    const [galleryCollectionsOpen, setGalleryCollectionsOpen] = useState(true);
    const [historyMediaOpen, setHistoryMediaOpen] = useState(true);
    const COLLECTION_TABS = [
        'resources','territories','barracks','seaport','airports','borders','secretariats','properties',
        'culture_drums','culture_tribal_marks','culture_games','culture_beauty_hair','culture_artifacts','culture_music',
        'culture_greetings','culture_dancing','culture_masquerade','culture_costumes','culture_profession','culture_trades',
        'culture_tools','culture_fashion','culture_food','culture_festivals','culture_marriage','culture_naming',
        'gallery_stickers','gallery_flyers'
    ];
    const navigate = useNavigate();

    // Video Management State
    const [videos, setVideos] = useState(DEFAULT_VIDEOS);
    const [featuredVideo, setFeaturedVideo] = useState(DEFAULT_FEATURED);
    const [editingVideo, setEditingVideo] = useState(null); // If null, adding new. If set, editing.
    const [showVideoForm, setShowVideoForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        duration: "",
        views: "0 views",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        thumbnail: img1,
        desc: "",
        videoSource: "" // URL or Base64
    });

    // Audio Management State
    const [audios, setAudios] = useState(DEFAULT_AUDIOS);
    const [featuredAudio, setFeaturedAudio] = useState(DEFAULT_FEATURED_AUDIO);
    const [editingAudio, setEditingAudio] = useState(null);
    const [showAudioForm, setShowAudioForm] = useState(false);
    const [audioFormData, setAudioFormData] = useState({
        title: "",
        artist: "",
        category: "",
        duration: "",
        desc: "",
        audioSource: "" // URL or Base64
    });

    // Authorized Management State
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [passwordMsg, setPasswordMsg] = useState({ type: "", text: "" });

    // Notice Management State
    const [notices, setNotices] = useState([]);
    const [showNoticeForm, setShowNoticeForm] = useState(false);
    const [noticeFormData, setNoticeFormData] = useState({
        title: "",
        content: "",
        type: "urgent",
        image: null
    });

    // Service Submissions State
    const [serviceSubmissions, setServiceSubmissions] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [showSubmissionModal, setShowSubmissionModal] = useState(false);

    // Gallery Management State
    const [galleryItems, setGalleryItems] = useState([]);
    const [showGalleryForm, setShowGalleryForm] = useState(false);
    const [editingGalleryItem, setEditingGalleryItem] = useState(null);
    const [galleryFormData, setGalleryFormData] = useState({
        title: "",
        desc: "",
        img: null
    });

    // Landmarks Management State
    const [landmarks, setLandmarks] = useState([]);
    const [showLandmarkForm, setShowLandmarkForm] = useState(false);
    const [editingLandmark, setEditingLandmark] = useState(null);
    const [landmarkFormData, setLandmarkFormData] = useState({
        title: "",
        location: "",
        desc: "",
        img: null
    });

    // Generic Collection Management State
    const [collectionItems, setCollectionItems] = useState([]);
    const [showCollectionForm, setShowCollectionForm] = useState(false);
    const [editingCollectionItem, setEditingCollectionItem] = useState(null);
    const [collectionFormData, setCollectionFormData] = useState({
        title: "",
        content: "",
        img: null,
        imgs: []
    });

    const [moaVideos, setMoaVideos] = useState([]);
    const [moaAudios, setMoaAudios] = useState([]);
    const [editingMoaVideo, setEditingMoaVideo] = useState(null);
    const [editingMoaAudio, setEditingMoaAudio] = useState(null);
    const [moaVideoForm, setMoaVideoForm] = useState({
        partNumber: "",
        title: "",
        desc: "",
        uploadedAt: ""
    });
    const [moaAudioForm, setMoaAudioForm] = useState({
        partNumber: "",
        title: "",
        desc: "",
        uploadedAt: ""
    });
    const [moaSessionDate, setMoaSessionDate] = useState(() => {
        const today = new Date();
        return today.toISOString().slice(0, 10);
    });

    const renderSubmissionValue = (key, value) => {
        if (value === null || value === undefined || value === '') return <span style={{color: '#94a3b8'}}>N/A</span>;
        
        if (typeof value === 'object' && value.data) {
            // File handling
            if (value.type && value.type.startsWith('image/')) {
                return (
                    <div style={{marginTop: '5px'}}>
                        <img src={value.data} alt={value.name} style={{maxWidth: '150px', maxHeight: '150px', borderRadius: '4px', border: '1px solid #e2e8f0'}} />
                        <div style={{marginTop: '5px'}}>
                            <a href={value.data} download={value.name} style={{color: '#3b82f6', fontSize: '0.8rem', textDecoration: 'none'}}>
                                <i className="fa fa-download"></i> Download Image
                            </a>
                        </div>
                    </div>
                );
            }
            return (
                 <a href={value.data} download={value.name} style={{display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f1f5f9', borderRadius: '4px', color: '#0f172a', textDecoration: 'none', fontSize: '0.9rem'}}>
                    <i className="fa fa-file-alt" style={{color: '#ef4444'}}></i> {value.name}
                 </a>
            );
        }
        
        if (typeof value === 'boolean') {
            return value ? <span style={{color: '#16a34a', fontWeight: 'bold'}}>Yes</span> : <span style={{color: '#64748b'}}>No</span>;
        }

        return <span style={{color: '#334155'}}>{value}</span>;
    };

    const loadNoticesData = async () => {
        const data = await getNotices();
        setNotices(data);
    };

    const loadGalleryData = async () => {
        const data = await getGalleryItems();
        setGalleryItems(data);
    };

    const loadLandmarksData = async () => {
        const data = getLandmarks();
        const enriched = await Promise.all(data.map(async (item) => {
            if (item.hasLocalImage) {
                const img = await getLandmarkImage(item.id);
                return { ...item, img: img || item.img };
            }
            return item;
        }));
        setLandmarks(enriched);
    };

    const loadServiceSubmissions = async () => {
        const data = await getServiceSubmissions();
        setServiceSubmissions(data);
    };

    const loadCurrentCollection = async () => {
        if (COLLECTION_TABS.includes(activeTab)) {
            const items = await getCollectionItems(activeTab);
            setCollectionItems(items);
        }
    };

    useEffect(() => {
        const init = async () => {
            try {
                if (!localStorage.getItem('DRY_FLYERS_RESET_V1')) {
                    await clearCollection('gallery_flyers');
                    localStorage.setItem('DRY_FLYERS_RESET_V1', 'true');
                }
            } catch (err) {
                console.error('Failed to run flyers cleanup', err);
            }

            loadNoticesData();
            loadGalleryData();
            loadLandmarksData();
            loadCurrentCollection();
        };

        init();
    }, []);

    useEffect(() => {
        if (activeTab === 'services') {
            loadServiceSubmissions();
        } else if (activeTab === 'notices') {
            loadNoticesData();
        } else if (activeTab === 'gallery') {
            loadGalleryData();
        } else if (COLLECTION_TABS.includes(activeTab)) {
            loadCurrentCollection();
        }
    }, [activeTab]);

    const handleSubmissionStatus = async (id, status) => {
        try {
            await updateSubmissionStatus(id, status);
            loadServiceSubmissions();
        } catch (err) {
            console.error(err);
        }
    };

    // Gallery CRUD Handlers
    const handleGalleryImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                alert("File is too large. Max 5MB allowed.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setGalleryFormData({ ...galleryFormData, img: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGallerySubmit = async (e) => {
        e.preventDefault();
        try {
            const itemToSave = {
                ...galleryFormData,
                id: editingGalleryItem ? editingGalleryItem.id : undefined
            };
            
            const updated = await saveGalleryItem(itemToSave);
            setGalleryItems(updated);
            setGalleryFormData({ title: "", desc: "", img: null });
            setShowGalleryForm(false);
            setEditingGalleryItem(null);
            alert("Gallery item saved successfully!");
        } catch (err) {
            console.error("Failed to save gallery item", err);
            alert("Failed to save gallery item. Please try again.");
        }
    };

    const handleDeleteGalleryItem = async (id) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            const updated = await deleteGalleryItem(id);
            setGalleryItems(updated);
        }
    };

    const handleAddGalleryClick = () => {
        setEditingGalleryItem(null);
        setGalleryFormData({ title: "", desc: "", img: null });
        setShowGalleryForm(true);
    };

    const handleEditGalleryClick = (item) => {
        setEditingGalleryItem(item);
        setGalleryFormData({ ...item });
        setShowGalleryForm(true);
    };

    // Landmark CRUD Handlers
    const handleLandmarkImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 20 * 1024 * 1024) { // 20MB limit
                alert("File is too large. Max 20MB allowed.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setLandmarkFormData({ ...landmarkFormData, img: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLandmarkSubmit = async (e) => {
        e.preventDefault();
        try {
            let itemToSave = {
                ...landmarkFormData,
                id: editingLandmark ? editingLandmark.id : Date.now()
            };
            
            // Handle Image Storage (IndexedDB for large files)
            if (itemToSave.img && itemToSave.img.startsWith('data:image')) {
                await saveLandmarkImage(itemToSave.id, itemToSave.img);
                itemToSave.img = null; // Don't store heavy string in localStorage
                itemToSave.hasLocalImage = true;
            } else if (editingLandmark && editingLandmark.hasLocalImage && !itemToSave.img) {
                // Keep flag if editing other fields but image preserved (loaded from IDB into state?)
                // Actually if loaded from IDB, it is in state as base64, so startsWith data:image is true.
                // If it is from assets, it is a path string.
                itemToSave.hasLocalImage = true;
            }
            
            const updated = saveLandmark(itemToSave);
            await loadLandmarksData(); // Reload to get images back
            
            setLandmarkFormData({ title: "", location: "", desc: "", img: null });
            setShowLandmarkForm(false);
            setEditingLandmark(null);
            alert("Landmark saved successfully!");
        } catch (err) {
            console.error("Failed to save landmark", err);
            alert("Failed to save landmark. Please try again.");
        }
    };

    const handleDeleteLandmark = async (id) => {
        if (window.confirm("Are you sure you want to delete this landmark?")) {
            await deleteLandmarkImage(id);
            const updated = deleteLandmark(id);
            setLandmarks(updated);
        }
    };

    const handleAddLandmarkClick = () => {
        setEditingLandmark(null);
        setLandmarkFormData({ title: "", location: "", desc: "", img: null });
        setShowLandmarkForm(true);
    };

    const handleEditLandmarkClick = (item) => {
        setEditingLandmark(item);
        setLandmarkFormData({ ...item });
        setShowLandmarkForm(true);
    };

    // Collection CRUD Handlers (image + name only)
    const handleCollectionImageChange = (e) => {
        let files = Array.from(e.target.files || []);
        if (!files.length) return;

        const maxCount = activeTab === 'gallery_flyers' ? 800 : 100;

        if (files.length > maxCount) {
            alert(`You selected more than ${maxCount} images. Only the first ${maxCount} will be used.`);
            files = files.slice(0, maxCount);
        }
        const tooLarge = files.some(f => f.size > 20 * 1024 * 1024);
        if (tooLarge) {
            alert("One or more files exceed 20MB.");
            return;
        }

        const readers = files.map(f => {
            if (activeTab === 'gallery_flyers') {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = new Image();
                        img.onload = () => {
                            let width = img.width;
                            let height = img.height;
                            const maxSize = 1400;
                            if (width > height && width > maxSize) {
                                height = Math.round(height * (maxSize / width));
                                width = maxSize;
                            } else if (height >= width && height > maxSize) {
                                width = Math.round(width * (maxSize / height));
                                height = maxSize;
                            }
                            const canvas = document.createElement("canvas");
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0, width, height);
                            const compressed = canvas.toDataURL("image/jpeg", 0.7);
                            resolve(compressed);
                        };
                        img.onerror = () => resolve(reader.result);
                        img.src = event.target.result;
                    };
                    reader.onerror = () => resolve("");
                    reader.readAsDataURL(f);
                });
            }

            return new Promise((resolve, reject) => {
                const r = new FileReader();
                r.onloadend = () => resolve(r.result);
                r.onerror = reject;
                r.readAsDataURL(f);
            });
        });

        Promise.all(readers).then(results => {
            const valid = results.filter(Boolean);
            if (valid.length > 1) {
                setCollectionFormData({ ...collectionFormData, img: null, imgs: valid });
            } else if (valid.length === 1) {
                setCollectionFormData({ ...collectionFormData, img: valid[0], imgs: [] });
            }
        });
    };

    const handleCollectionSubmit = async (e) => {
        e.preventDefault();
        try {
            if (collectionFormData.imgs && collectionFormData.imgs.length > 1) {
                const batch = collectionFormData.imgs.map(b64 => ({ img: b64 }));
                const updated = await saveCollectionItems(activeTab, batch);
                setCollectionItems(updated);
                setCollectionFormData({ title: "", content: "", img: null, imgs: [] });
                setShowCollectionForm(false);
                setEditingCollectionItem(null);
                alert("Images saved successfully!");
                return;
            }
            if (!collectionFormData.img) {
                alert("Please choose an image file before saving.");
                return;
            }
            const itemToSave = {
                ...collectionFormData,
                id: editingCollectionItem ? editingCollectionItem.id : undefined
            };
            const updated = await saveCollectionItem(activeTab, itemToSave);
            setCollectionItems(updated);
            setCollectionFormData({ title: "", content: "", img: null, imgs: [] });
            setShowCollectionForm(false);
            setEditingCollectionItem(null);
            alert("Image saved successfully!");
        } catch (err) {
            console.error("Failed to save item", err);
            alert("Failed to save item. Please try again.");
        }
    };

    const handleDeleteCollectionItem = async (id) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            const updated = await deleteCollectionItem(activeTab, id);
            setCollectionItems(updated);
        }
    };

    const handleAddCollectionClick = () => {
        setEditingCollectionItem(null);
        setCollectionFormData({ title: "", img: null });
        setShowCollectionForm(true);
    };

    const handleEditCollectionClick = (item) => {
        setEditingCollectionItem(item);
        setCollectionFormData({ ...item, imgs: [] });
        setShowCollectionForm(true);
    };

    // Helper to generate thumbnail from video
    const generateThumbnail = (file) => {
        return new Promise((resolve) => {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = URL.createObjectURL(file);
            video.muted = true;
            video.playsInline = true;
            
            video.onloadeddata = () => {
                video.currentTime = 1; // Seek to 1s
            };

            video.onseeked = () => {
                const canvas = document.createElement("canvas");
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                resolve(dataUrl);
                URL.revokeObjectURL(video.src);
            };

            video.onerror = () => {
                resolve(null);
            };
        });
    };

    // Handle File Upload
    const handleFileChange = async (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        // Size Validation (100MB limit for IndexedDB)
        const limit = 100 * 1024 * 1024; // 100MB
        if (file.size > limit) {
            alert("File is too large! Please choose a file under 100MB.");
            return;
        }

        if (type === 'videoSource') {
            // Generate thumbnail automatically
            const generatedThumb = await generateThumbnail(file);

            setFormData(prev => ({ 
                ...prev, 
                videoFile: file, 
                videoSource: URL.createObjectURL(file),
                thumbnail: generatedThumb || prev.thumbnail // Use generated or keep default if fail
            }));
        } else {
            // For images (thumbnails), we still use Base64 for localStorage
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, [type]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const getMoaCanonicalKey = (item) => {
        const raw = item.sessionDate || item.uploadedAt || "";
        if (!raw) return "";
        if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
        const parsed = new Date(raw);
        if (!Number.isNaN(parsed.getTime())) {
            return parsed.toISOString().slice(0, 10);
        }
        return raw;
    };

    const sortMoaItems = (items) => {
        const arr = [...(items || [])];
        arr.sort((a, b) => {
            const keyA = getMoaCanonicalKey(a);
            const keyB = getMoaCanonicalKey(b);
            if (keyA === keyB) {
                return (Number(a.partNumber) || 0) - (Number(b.partNumber) || 0);
            }
            return keyA.localeCompare(keyB);
        });
        return arr;
    };

    const getNextPartNumber = (items, sessionDateKey) => {
        if (!items || items.length === 0) return 1;
        const scoped = sessionDateKey
            ? items.filter(i => getMoaCanonicalKey(i) === sessionDateKey)
            : items;
        if (!scoped.length) return 1;
        const nums = scoped.map(i => Number(i.partNumber) || 0);
        return Math.max(...nums, 0) + 1;
    };

    useEffect(() => {
        const user = localStorage.getItem("DRY_ADMIN_USER");
        if (user === "true") {
            setIsLoggedIn(true);
        }

        // Load Videos
        const savedFeatured = localStorage.getItem('dry_featured_video');
        const savedVideos = localStorage.getItem('dry_videos');
        if (savedFeatured) setFeaturedVideo(JSON.parse(savedFeatured));
        if (savedVideos) setVideos(JSON.parse(savedVideos));

        // Load Audios
        const savedFeaturedAudio = localStorage.getItem('dry_featured_audio');
        const savedAudios = localStorage.getItem('dry_audios');
        if (savedFeaturedAudio) setFeaturedAudio(JSON.parse(savedFeaturedAudio));
        if (savedAudios) setAudios(JSON.parse(savedAudios));

        const savedMoaVideos = localStorage.getItem("dry_moa_videos");
        const savedMoaAudios = localStorage.getItem("dry_moa_audios");
        if (savedMoaVideos) setMoaVideos(sortMoaItems(JSON.parse(savedMoaVideos)));
        if (savedMoaAudios) setMoaAudios(sortMoaItems(JSON.parse(savedMoaAudios)));

    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Get stored credentials or use defaults
        const storedEmail = localStorage.getItem("DRY_ADMIN_EMAIL") || "dry@gmail.com";
        const storedPassword = localStorage.getItem("DRY_ADMIN_PASSWORD") || "admin";

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("DRY_ADMIN_USER", "true");
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("DRY_ADMIN_USER");
        setIsLoggedIn(false);
        setEmail("");
        setPassword("");
        navigate("/"); 
    };

    // Video CRUD Handlers
    const handleDeleteVideo = async (id) => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            // Delete from state and local storage
            const updatedVideos = videos.filter(v => v.id !== id);
            setVideos(updatedVideos);
            localStorage.setItem('dry_videos', JSON.stringify(updatedVideos));
            
            // Delete from IndexedDB if it exists there
            await deleteVideoFile(id);
        }
    };

    const handleEditClick = (video) => {
        setEditingVideo(video);
        setFormData({ ...video });
        setShowVideoForm(true);
    };

    const handleAddNewClick = () => {
        setEditingVideo(null);
        setFormData({
            title: "",
            category: "General",
            duration: "00:00",
            views: "0 views",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            thumbnail: img1,
            desc: "",
            videoSource: ""
        });
        setShowVideoForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let updatedVideos;
        let videoId;
        
        if (editingVideo) {
            // Update Existing
            videoId = editingVideo.id;
        } else {
            // Add New
            videoId = Date.now();
        }

        // If a new video file was selected, save it to IndexedDB
        if (formData.videoFile) {
            await saveVideoFile(videoId, formData.videoFile);
        }

        // Prepare data for LocalStorage (exclude heavy video file)
        const videoDataToSave = {
            ...formData,
            id: videoId,
            videoSource: formData.videoFile ? null : formData.videoSource, // Don't save URL/Blob to LS
            hasLocalVideo: !!formData.videoFile || formData.hasLocalVideo // Flag to check DB
        };

        // Remove temporary file object before saving to state/LS
        delete videoDataToSave.videoFile;

        if (editingVideo) {
             updatedVideos = videos.map(v => v.id === videoId ? videoDataToSave : v);
        } else {
             updatedVideos = [videoDataToSave, ...videos];
        }

        setVideos(updatedVideos);
        localStorage.setItem('dry_videos', JSON.stringify(updatedVideos));
        setShowVideoForm(false);
    };

    const handleSetFeatured = (video) => {
        if (window.confirm(`Set "${video.title}" as the Featured Video?`)) {
            const newFeatured = { ...video, desc: video.desc || "No description available." };
            setFeaturedVideo(newFeatured);
            localStorage.setItem('dry_featured_video', JSON.stringify(newFeatured));
        }
    };

    // Audio CRUD Handlers
    const handleAudioFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const limit = 50 * 1024 * 1024; // 50MB for Audio
        if (file.size > limit) {
            alert("File is too large! Please choose a file under 50MB.");
            return;
        }

        setAudioFormData(prev => ({ 
            ...prev, 
            audioFile: file, 
            audioSource: URL.createObjectURL(file) 
        }));
    };

    const handleDeleteAudio = async (id) => {
        if (window.confirm("Are you sure you want to delete this audio track?")) {
            const updatedAudios = audios.filter(a => a.id !== id);
            setAudios(updatedAudios);
            localStorage.setItem('dry_audios', JSON.stringify(updatedAudios));
            await deleteAudioFile(id);
        }
    };

    const handleEditAudioClick = (audio) => {
        setEditingAudio(audio);
        setAudioFormData({ ...audio });
        setShowAudioForm(true);
    };

    const handleAddAudioClick = () => {
        setEditingAudio(null);
        setAudioFormData({
            title: "",
            artist: "",
            category: "Music",
            duration: "00:00",
            desc: "",
            audioSource: ""
        });
        setShowAudioForm(true);
    };

    const handleAudioSubmit = async (e) => {
        e.preventDefault();
        let updatedAudios;
        let audioId;

        if (editingAudio) {
            audioId = editingAudio.id;
        } else {
            audioId = Date.now();
        }

        if (audioFormData.audioFile) {
            await saveAudioFile(audioId, audioFormData.audioFile);
        }

        const audioDataToSave = {
            ...audioFormData,
            id: audioId,
            audioSource: audioFormData.audioFile ? null : audioFormData.audioSource,
            hasLocalAudio: !!audioFormData.audioFile || audioFormData.hasLocalAudio
        };
        delete audioDataToSave.audioFile;

        if (editingAudio) {
            updatedAudios = audios.map(a => a.id === audioId ? audioDataToSave : a);
        } else {
            updatedAudios = [audioDataToSave, ...audios];
        }

        setAudios(updatedAudios);
        localStorage.setItem('dry_audios', JSON.stringify(updatedAudios));
        setShowAudioForm(false);
    };

    const handleMoaVideoFilesChange = async (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        const baseIso = moaSessionDate || new Date().toISOString().slice(0, 10);
        const baseDate = new Date(baseIso);
        const safeDate = Number.isNaN(baseDate.getTime()) ? new Date() : baseDate;
        const day = String(safeDate.getDate()).padStart(2, '0');
        const month = safeDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = safeDate.getFullYear();
        const uploadedAt = `${day}-${month}-${year}`;
        const sessionKey = safeDate.toISOString().slice(0, 10);
        let nextPart = getNextPartNumber(moaVideos, sessionKey);
        const updated = [...moaVideos];
        for (let index = 0; index < files.length; index += 1) {
            const file = files[index];
            const limit = 200 * 1024 * 1024;
            if (file.size > limit) {
                alert(`"${file.name}" is too large. Maximum size per video is 200MB.`);
                continue;
            }
            const id = `moa-video-${Date.now()}-${index}`;
            await saveVideoFile(id, file);
            const partNumber = nextPart;
            nextPart += 1;
            updated.push({
                id,
                partNumber,
                title: `Part ${partNumber}`,
                desc: "",
                hasLocalVideo: true,
                uploadedAt,
                sessionDate: sessionKey
            });
        }
        const sorted = sortMoaItems(updated);
        setMoaVideos(sorted);
        localStorage.setItem("dry_moa_videos", JSON.stringify(sorted));
        e.target.value = "";
    };

    const handleMoaAudioFilesChange = async (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        const baseIso = moaSessionDate || new Date().toISOString().slice(0, 10);
        const baseDate = new Date(baseIso);
        const safeDate = Number.isNaN(baseDate.getTime()) ? new Date() : baseDate;
        const day = String(safeDate.getDate()).padStart(2, '0');
        const month = safeDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = safeDate.getFullYear();
        const uploadedAt = `${day}-${month}-${year}`;
        const sessionKey = safeDate.toISOString().slice(0, 10);
        let nextPart = getNextPartNumber(moaAudios, sessionKey);
        const updated = [...moaAudios];
        for (let index = 0; index < files.length; index += 1) {
            const file = files[index];
            const limit = 50 * 1024 * 1024;
            if (file.size > limit) {
                continue;
            }
            const id = `moa-audio-${Date.now()}-${index}`;
            await saveAudioFile(id, file);
            const partNumber = nextPart;
            nextPart += 1;
            updated.push({
                id,
                partNumber,
                title: `Part ${partNumber}`,
                desc: "",
                hasLocalAudio: true,
                uploadedAt,
                sessionDate: sessionKey
            });
        }
        const sorted = sortMoaItems(updated);
        setMoaAudios(sorted);
        localStorage.setItem("dry_moa_audios", JSON.stringify(sorted));
        e.target.value = "";
    };

    const handleMoaVideoEditChange = (field, value) => {
        setMoaVideoForm(prev => ({ ...prev, [field]: value }));
    };

    const handleMoaAudioEditChange = (field, value) => {
        setMoaAudioForm(prev => ({ ...prev, [field]: value }));
    };

    const startEditMoaVideo = (item) => {
        setEditingMoaVideo(item);
        setMoaVideoForm({
            partNumber: item.partNumber || "",
            title: item.title || "",
            desc: item.desc || "",
            uploadedAt: item.uploadedAt || ""
        });
    };

    const startEditMoaAudio = (item) => {
        setEditingMoaAudio(item);
        setMoaAudioForm({
            partNumber: item.partNumber || "",
            title: item.title || "",
            desc: item.desc || "",
            uploadedAt: item.uploadedAt || ""
        });
    };

    const saveMoaVideoEdit = () => {
        if (!editingMoaVideo) return;
        const updated = moaVideos.map(item =>
            item.id === editingMoaVideo.id
                ? {
                    ...item,
                    partNumber: Number(moaVideoForm.partNumber) || item.partNumber,
                    title: moaVideoForm.title || item.title,
                    desc: moaVideoForm.desc,
                    uploadedAt: moaVideoForm.uploadedAt || item.uploadedAt || ""
                }
                : item
        );
        const sorted = sortMoaItems(updated);
        setMoaVideos(sorted);
        localStorage.setItem("dry_moa_videos", JSON.stringify(sorted));
        setEditingMoaVideo(null);
    };

    const saveMoaAudioEdit = () => {
        if (!editingMoaAudio) return;
        const updated = moaAudios.map(item =>
            item.id === editingMoaAudio.id
                ? {
                    ...item,
                    partNumber: Number(moaAudioForm.partNumber) || item.partNumber,
                    title: moaAudioForm.title || item.title,
                    desc: moaAudioForm.desc,
                    uploadedAt: moaAudioForm.uploadedAt || item.uploadedAt || ""
                }
                : item
        );
        const sorted = sortMoaItems(updated);
        setMoaAudios(sorted);
        localStorage.setItem("dry_moa_audios", JSON.stringify(sorted));
        setEditingMoaAudio(null);
    };

    const deleteMoaVideo = async (id) => {
        const filtered = moaVideos.filter(item => item.id !== id);
        setMoaVideos(filtered);
        localStorage.setItem("dry_moa_videos", JSON.stringify(filtered));
        await deleteVideoFile(id);
    };

    const deleteMoaAudio = async (id) => {
        const filtered = moaAudios.filter(item => item.id !== id);
        setMoaAudios(filtered);
        localStorage.setItem("dry_moa_audios", JSON.stringify(filtered));
        await deleteAudioFile(id);
    };

    const handleSetFeaturedAudio = (audio) => {
        if (window.confirm(`Set "${audio.title}" as the Featured Audio?`)) {
            const newFeatured = { ...audio, desc: audio.desc || "Experience the pride and glory of our nation." };
            setFeaturedAudio(newFeatured);
            localStorage.setItem('dry_featured_audio', JSON.stringify(newFeatured));
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const storedPassword = localStorage.getItem("DRY_ADMIN_PASSWORD") || "admin";

        if (passwordData.currentPassword !== storedPassword) {
            setPasswordMsg({ type: "error", text: "Current password is incorrect." });
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setPasswordMsg({ type: "error", text: "New password must be at least 6 characters." });
            return;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordMsg({ type: "error", text: "New passwords do not match." });
            return;
        }

        localStorage.setItem("DRY_ADMIN_PASSWORD", passwordData.newPassword);
        setPasswordMsg({ type: "success", text: "Password updated successfully!" });
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    };

    const handleNoticeSubmit = async (e) => {
        e.preventDefault();
        try {
            const updated = await saveNotice(noticeFormData);
            setNotices(updated);
            setNoticeFormData({ title: "", content: "", type: "urgent", image: null });
            setShowNoticeForm(false);
            alert("Notice published successfully!");
        } catch (err) {
            console.error("Failed to save notice", err);
            alert("Failed to save notice. Please try again.");
        }
    };

    const handleDeleteNotice = async (id) => {
        if (window.confirm("Are you sure you want to delete this notice?")) {
            const updated = await removeNotice(id);
            setNotices(updated);
        }
    };

    const handleNoticeImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                alert("File is too large. Max 5MB allowed.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setNoticeFormData({ ...noticeFormData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>D.R.Y Govt. Portal</h2>
                        <p>Secure Access for Government Officials</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="form-label">Official Email</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="official@dry.gov.ng"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Secure Access Key</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                        <button type="submit" className="btn-login">Authenticate Access</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="Coat of Arms" style={{ width: '80px', height: 'auto', marginBottom: '10px' }} />
                    <h2 style={{color: 'white', fontSize: '1.2rem', margin: 0}}>Republic of Yoruba</h2>
                    <span style={{fontSize: '0.8rem', opacity: 0.7, letterSpacing: '2px'}}>ADMINISTRATION</span>
                </div>
                <div className="sidebar-menu">
                    <button 
                        className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <i className="fa fa-th-large"></i> Overview
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('videos')}
                    >
                        <i className="fa fa-video"></i> Video Gallery
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'audios' ? 'active' : ''}`}
                        onClick={() => setActiveTab('audios')}
                    >
                        <i className="fa fa-music"></i> Audio Gallery
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'gallery' ? 'active' : ''}`}
                        onClick={() => setActiveTab('gallery')}
                    >
                        <i className="fa fa-images"></i> Image Gallery
                    </button>
                    <div className="menu-group">
                        <button 
                            className="menu-item" 
                            onClick={() => setGalleryCollectionsOpen(!galleryCollectionsOpen)}
                        >
                            <i className="fa fa-sticky-note"></i> Stickers & Flyers
                            <i className={`fa fa-chevron-${galleryCollectionsOpen ? 'down' : 'right'}`} style={{ float: 'right' }}></i>
                        </button>
                        {galleryCollectionsOpen && (
                            <div style={{ paddingLeft: '20px' }}>
                                <button className={`menu-item ${activeTab === 'gallery_stickers' ? 'active' : ''}`} onClick={() => setActiveTab('gallery_stickers')}>Stickers</button>
                                <button className={`menu-item ${activeTab === 'gallery_flyers' ? 'active' : ''}`} onClick={() => setActiveTab('gallery_flyers')}>Flyers</button>
                            </div>
                        )}
                    </div>
                    <div className="menu-group">
                        <button 
                            className="menu-item" 
                            onClick={() => setHistoryMediaOpen(!historyMediaOpen)}
                        >
                            <i className="fa fa-history"></i> History Media
                            <i className={`fa fa-chevron-${historyMediaOpen ? 'down' : 'right'}`} style={{ float: 'right' }}></i>
                        </button>
                        {historyMediaOpen && (
                            <div style={{ paddingLeft: '20px' }}>
                                <button className={`menu-item ${activeTab === 'moa_voice' ? 'active' : ''}`} onClick={() => setActiveTab('moa_voice')}>MOA Voice Notes</button>
                                <button className={`menu-item ${activeTab === 'moa_videos' ? 'active' : ''}`} onClick={() => setActiveTab('moa_videos')}>MOA Videos</button>
                            </div>
                        )}
                    </div>
                    <button 
                        className={`menu-item ${activeTab === 'landmarks' ? 'active' : ''}`}
                        onClick={() => setActiveTab('landmarks')}
                    >
                        <i className="fa fa-map-marked-alt"></i> Landmarks
                    </button>
                    <div className="menu-group">
                        <button 
                            className="menu-item" 
                            onClick={() => setCollectionsOpen(!collectionsOpen)}
                        >
                            <i className="fa fa-folder-open"></i> Possessions Images
                            <i className={`fa fa-chevron-${collectionsOpen ? 'down' : 'right'}`} style={{ float: 'right' }}></i>
                        </button>
                        {collectionsOpen && (
                            <div style={{ paddingLeft: '20px' }}>
                                <button className={`menu-item ${activeTab === 'resources' ? 'active' : ''}`} onClick={() => setActiveTab('resources')}>Resources</button>
                                <button className={`menu-item ${activeTab === 'territories' ? 'active' : ''}`} onClick={() => setActiveTab('territories')}>Territories</button>
                                <button className={`menu-item ${activeTab === 'barracks' ? 'active' : ''}`} onClick={() => setActiveTab('barracks')}>Barracks</button>
                                <button className={`menu-item ${activeTab === 'seaport' ? 'active' : ''}`} onClick={() => setActiveTab('seaport')}>Seaport</button>
                                <button className={`menu-item ${activeTab === 'airports' ? 'active' : ''}`} onClick={() => setActiveTab('airports')}>Airports</button>
                                <button className={`menu-item ${activeTab === 'borders' ? 'active' : ''}`} onClick={() => setActiveTab('borders')}>Borders</button>
                                <button className={`menu-item ${activeTab === 'secretariats' ? 'active' : ''}`} onClick={() => setActiveTab('secretariats')}>Secretariats</button>
                                <button className={`menu-item ${activeTab === 'properties' ? 'active' : ''}`} onClick={() => setActiveTab('properties')}>Government Properties</button>
                            </div>
                        )}
                    </div>
                    <div className="menu-group">
                        <button 
                            className="menu-item" 
                            onClick={() => setCollectionsOpen(!collectionsOpen)}
                        >
                            <i className="fa fa-folder-open"></i> Culture Images
                            <i className={`fa fa-chevron-${collectionsOpen ? 'down' : 'right'}`} style={{ float: 'right' }}></i>
                        </button>
                        {collectionsOpen && (
                            <div style={{ paddingLeft: '20px' }}>
                                <button className={`menu-item ${activeTab === 'culture_drums' ? 'active' : ''}`} onClick={() => setActiveTab('culture_drums')}>Drums</button>
                                <button className={`menu-item ${activeTab === 'culture_tribal_marks' ? 'active' : ''}`} onClick={() => setActiveTab('culture_tribal_marks')}>Tribal Marks</button>
                                <button className={`menu-item ${activeTab === 'culture_games' ? 'active' : ''}`} onClick={() => setActiveTab('culture_games')}>Games</button>
                                <button className={`menu-item ${activeTab === 'culture_beauty_hair' ? 'active' : ''}`} onClick={() => setActiveTab('culture_beauty_hair')}>Beauty - Hair</button>
                                <button className={`menu-item ${activeTab === 'culture_artifacts' ? 'active' : ''}`} onClick={() => setActiveTab('culture_artifacts')}>Artifacts</button>
                                <button className={`menu-item ${activeTab === 'culture_music' ? 'active' : ''}`} onClick={() => setActiveTab('culture_music')}>Music</button>
                                <button className={`menu-item ${activeTab === 'culture_greetings' ? 'active' : ''}`} onClick={() => setActiveTab('culture_greetings')}>Greetings</button>
                                <button className={`menu-item ${activeTab === 'culture_dancing' ? 'active' : ''}`} onClick={() => setActiveTab('culture_dancing')}>Dancing</button>
                                <button className={`menu-item ${activeTab === 'culture_masquerade' ? 'active' : ''}`} onClick={() => setActiveTab('culture_masquerade')}>Masquerade</button>
                                <button className={`menu-item ${activeTab === 'culture_costumes' ? 'active' : ''}`} onClick={() => setActiveTab('culture_costumes')}>Costumes</button>
                                <button className={`menu-item ${activeTab === 'culture_profession' ? 'active' : ''}`} onClick={() => setActiveTab('culture_profession')}>Profession</button>
                                <button className={`menu-item ${activeTab === 'culture_trades' ? 'active' : ''}`} onClick={() => setActiveTab('culture_trades')}>Trades</button>
                                <button className={`menu-item ${activeTab === 'culture_tools' ? 'active' : ''}`} onClick={() => setActiveTab('culture_tools')}>Tools</button>
                                <button className={`menu-item ${activeTab === 'culture_fashion' ? 'active' : ''}`} onClick={() => setActiveTab('culture_fashion')}>Fashion</button>
                                <button className={`menu-item ${activeTab === 'culture_food' ? 'active' : ''}`} onClick={() => setActiveTab('culture_food')}>Food</button>
                                <button className={`menu-item ${activeTab === 'culture_festivals' ? 'active' : ''}`} onClick={() => setActiveTab('culture_festivals')}>Festivals</button>
                                <button className={`menu-item ${activeTab === 'culture_marriage' ? 'active' : ''}`} onClick={() => setActiveTab('culture_marriage')}>Marriage Ceremony</button>
                                <button className={`menu-item ${activeTab === 'culture_naming' ? 'active' : ''}`} onClick={() => setActiveTab('culture_naming')}>Naming Ceremony</button>
                            </div>
                        )}
                    </div>
                    <button 
                        className={`menu-item ${activeTab === 'notices' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notices')}
                    >
                        <i className="fa fa-bullhorn"></i> Notices
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'services' ? 'active' : ''}`}
                        onClick={() => setActiveTab('services')}
                    >
                        <i className="fa fa-envelope-open-text"></i> Service Forms
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'authorized' ? 'active' : ''}`}
                        onClick={() => setActiveTab('authorized')}
                    >
                        <i className="fa fa-user-shield"></i> Authorized
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'departments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('departments')}
                    >
                        <i className="fa fa-building"></i> Departments
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'finance' ? 'active' : ''}`}
                        onClick={() => setActiveTab('finance')}
                    >
                        <i className="fa fa-coins"></i> Treasury
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <i className="fa fa-cogs"></i> System Config
                    </button>
                </div>
                <div className="sidebar-footer">
                    <button className="menu-item logout" onClick={handleLogout}>
                        <i className="fa fa-sign-out-alt"></i> Secure Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-title">
                        <h1>{activeTab === 'videos' ? 'Media Management' : 'Executive Dashboard'}</h1>
                        <p style={{margin: 0, color: '#718096', fontSize: '0.9rem'}}>Welcome back, Administrator</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-icon">
                            <i className="fa fa-bell"></i>
                            <span style={{position: 'absolute', top: '5px', right: '5px', width: '10px', height: '10px', background: 'red', borderRadius: '50%', border: '2px solid white'}}></span>
                        </button>
                        <div className="user-profile">
                            <div className="avatar">A</div>
                            <div>
                                <span style={{display: 'block', fontWeight: 'bold', fontSize: '0.9rem'}}>Admin Official</span>
                                <span style={{display: 'block', fontSize: '0.75rem', color: '#64748b'}}>Executive Office</span>
                            </div>
                            <i className="fa fa-chevron-down" style={{fontSize: '0.8rem', color: '#64748b'}}></i>
                        </div>
                    </div>
                </header>

                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                    <div className="dashboard-content">
                        {/* Stats Grid */}
                        <div className="stats-grid">
                            {mockStats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-info">
                                        <h3>{stat.title}</h3>
                                        <p>{stat.value}</p>
                                    </div>
                                    <div className={`stat-icon ${stat.color}`}>
                                        <i className={`fa ${stat.icon}`}></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Applications */}
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>Recent Citizen Applications</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Latest submissions requiring review</p>
                                </div>
                                <button className="btn-link">View All Applications</button>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Application ID</th>
                                            <th>Citizen Name</th>
                                            <th>Application Type</th>
                                            <th>Submission Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockApplications.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{fontWeight: 'bold', color: '#0f172a'}}>{item.id}</td>
                                                <td>
                                                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                        <div style={{width: '30px', height: '30px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: '#4a5568'}}>
                                                            {item.name.charAt(0)}
                                                        </div>
                                                        {item.name}
                                                    </div>
                                                </td>
                                                <td>{item.type}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Generic Collection Management Tab */}
                {COLLECTION_TABS.includes(activeTab) && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Images</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Add images with names only</p>
                                </div>
                                <div style={{display: 'flex', gap: '0.75rem'}}>
                                    {activeTab === 'gallery_flyers' && (
                                        <button 
                                            className="btn-login" 
                                            style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0, background: '#ef4444'}}
                                            onClick={async () => {
                                                if (window.confirm("Are you sure you want to delete ALL flyers images? This cannot be undone.")) {
                                                    try {
                                                        await clearCollection('gallery_flyers');
                                                        setCollectionItems([]);
                                                        alert("All flyers images have been cleared.");
                                                    } catch (err) {
                                                        console.error("Failed to clear flyers collection", err);
                                                        alert("Failed to clear flyers images. Please try again.");
                                                    }
                                                }
                                            }}
                                        >
                                            <i className="fa fa-trash-alt" style={{marginRight: '6px'}}></i> Clear Flyers
                                        </button>
                                    )}
                                    <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0}} onClick={handleAddCollectionClick}>
                                        <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Add Image
                                    </button>
                                </div>
                            </div>
                            {showCollectionForm && (
                                <div style={{padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '1rem'}}>{editingCollectionItem ? 'Edit Image' : 'Add New Image'}</h4>
                                    <form onSubmit={handleCollectionSubmit}>
                                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                            <div className="form-group">
                                                <label className="form-label">Image Title</label>
                                                <input className="form-input" value={collectionFormData.title} onChange={e => setCollectionFormData({...collectionFormData, title: e.target.value})} placeholder="Optional" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Text Content</label>
                                                <input className="form-input" value={collectionFormData.content} onChange={e => setCollectionFormData({...collectionFormData, content: e.target.value})} placeholder="Optional description..." />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Image File</label>
                                                <input type="file" className="form-input" accept="image/*" multiple onChange={handleCollectionImageChange} />
                                                {Array.isArray(collectionFormData.imgs) && collectionFormData.imgs.length > 1 && <span style={{color: 'green', fontSize: '0.85rem'}}>{collectionFormData.imgs.length} images selected</span>}
                                                {collectionFormData.img && <span style={{color: 'green', fontSize: '0.85rem'}}>Image loaded (max 20MB)</span>}
                                                <div style={{fontSize: '0.8rem', color: '#64748b', marginTop: '6px'}}>Multiple selection supported. For multiple, title and text are ignored.</div>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                            <button type="submit" className="btn-login" style={{width: 'auto', margin: 0}}>Save Image</button>
                                            <button type="button" className="btn-login" style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}} onClick={() => setShowCollectionForm(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {collectionItems.map((item) => (
                                            <tr key={item.id}>
                                                <td style={{width: '120px'}}>
                                                    <img src={item.img} alt={item.title} style={{width: '100px', height: '70px', objectFit: 'cover', borderRadius: '6px'}} />
                                                </td>
                                                <td>
                                                    <span className="video-title">{item.title}</span>
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        <button className="action-btn edit" title="Edit" onClick={() => handleEditCollectionClick(item)}>
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button className="action-btn delete" title="Delete" onClick={() => handleDeleteCollectionItem(item.id)}>
                                                            <i className="fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {/* Video Management Tab */}
                {activeTab === 'videos' && (
                    <div className="dashboard-content">
                         {/* Featured Video Section */}
                         <div className="content-card">
                            <div className="card-header">
                                <h3>Current Featured Video (Frontend Hero)</h3>
                            </div>
                            <div style={{padding: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
                                <img src={featuredVideo.thumbnail} alt="Featured" style={{width: '300px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}} onError={(e) => {e.target.onerror = null; e.target.src = img1}} />
                                <div>
                                    <h2 style={{marginTop: 0, fontSize: '1.5rem', color: '#0f172a'}}>{featuredVideo.title}</h2>
                                    <p style={{color: '#64748b'}}>{featuredVideo.desc}</p>
                                    <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                        <span className="status-badge processing">{featuredVideo.duration}</span>
                                        <span className="status-badge pending">{featuredVideo.views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video List */}
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>Video Library</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Manage videos displayed on the public gallery</p>
                                </div>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0}} onClick={handleAddNewClick}>
                                    <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Add New Video
                                </button>
                            </div>
                            
                            {/* Add/Edit Form */}
                            {showVideoForm && (
                                <div style={{padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '1rem'}}>{editingVideo ? 'Edit Video' : 'Add New Video'}</h4>
                                    <form onSubmit={handleFormSubmit}>
                                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                            <div className="form-group">
                                                <label className="form-label">Video Title</label>
                                                <input className="form-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Category</label>
                                                <select 
                                                    className="form-input" 
                                                    value={formData.category} 
                                                    onChange={e => setFormData({...formData, category: e.target.value})} 
                                                    required
                                                >
                                                    <option value="" disabled>Select Category</option>
                                                    {CATEGORIES.filter(cat => !['Anthem', 'Speech', 'Storytelling', 'Music', 'Ambient', 'Instrumental'].includes(cat)).map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Duration (MM:SS)</label>
                                                <input className="form-input" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Description (for Featured)</label>
                                                <input className="form-input" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="Optional description..." />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Video File (Upload)</label>
                                                <input 
                                                    type="file" 
                                                    className="form-input" 
                                                    accept="video/*"
                                                    onChange={(e) => handleFileChange(e, 'videoSource')} 
                                                />
                                                {formData.videoSource && <span style={{color: 'green', fontSize: '0.8rem'}}>Video loaded successfully</span>}
                                                {/* Preview Generated Thumbnail */}
                                                {formData.thumbnail && formData.thumbnail !== img1 && (
                                                    <div style={{marginTop: '10px'}}>
                                                        <span style={{fontSize: '0.8rem', display: 'block', marginBottom: '5px'}}>Auto-Generated Thumbnail:</span>
                                                        <img src={formData.thumbnail} alt="Preview" style={{height: '60px', borderRadius: '4px'}} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                            <button type="submit" className="btn-login" style={{width: 'auto', margin: 0}}>Save Video</button>
                                            <button type="button" className="btn-login" style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}} onClick={() => setShowVideoForm(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Media</th>
                                            <th>Details</th>
                                            <th>Stats</th>
                                            <th>Status</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {videos.map((video) => (
                                            <tr key={video.id} className="video-row">
                                                <td style={{width: '120px'}}>
                                                    <div className="video-thumbnail-wrapper">
                                                        <img src={video.thumbnail} alt="thumb" className="video-thumbnail" onError={(e) => {e.target.onerror = null; e.target.src = img1}} />
                                                        <div className="play-icon-overlay">
                                                            <i className="fa fa-play"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="video-info">
                                                        <span className="video-title">{video.title}</span>
                                                        <span className="video-meta">
                                                            <i className="fa fa-calendar-alt"></i> {video.date}
                                                            <span className="separator">•</span>
                                                            <i className="fa fa-clock"></i> {video.duration}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="video-stats">
                                                        <span className="stat-pill">
                                                            <i className="fa fa-eye"></i> {video.views}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`category-badge ${video.category.toLowerCase()}`}>{video.category}</span>
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        <button className="action-btn edit" title="Edit Video" onClick={() => handleEditClick(video)}>
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button className="action-btn feature" title="Set as Featured" onClick={() => handleSetFeatured(video)}>
                                                            <i className="fa fa-star"></i>
                                                        </button>
                                                        <button className="action-btn delete" title="Delete Video" onClick={() => handleDeleteVideo(video.id)}>
                                                            <i className="fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Audio Management Tab */}
                {activeTab === 'audios' && (
                    <div className="dashboard-content">
                        {/* Featured Audio Section */}
                        <div className="content-card">
                            <div className="card-header">
                                <h3>Current Featured Audio (Frontend Hero)</h3>
                            </div>
                            <div style={{padding: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center'}}>
                                <div style={{width: '100px', height: '100px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#64748b'}}>
                                    <i className="fa fa-music"></i>
                                </div>
                                <div>
                                    <h2 style={{marginTop: 0, fontSize: '1.5rem', color: '#0f172a'}}>{featuredAudio.title}</h2>
                                    <h4 style={{marginTop: '0.5rem', fontSize: '1.1rem', color: '#475569', fontWeight: 'normal'}}>{featuredAudio.artist}</h4>
                                    <p style={{color: '#64748b'}}>{featuredAudio.desc}</p>
                                    <span className="status-badge processing">{featuredAudio.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Audio List */}
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>Audio Library</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Manage audio tracks displayed on the public gallery</p>
                                </div>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0}} onClick={handleAddAudioClick}>
                                    <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Add New Track
                                </button>
                            </div>

                            {/* Add/Edit Form */}
                            {showAudioForm && (
                                <div style={{padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '1rem'}}>{editingAudio ? 'Edit Track' : 'Add New Track'}</h4>
                                    <form onSubmit={handleAudioSubmit}>
                                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                            <div className="form-group">
                                                <label className="form-label">Track Title</label>
                                                <input className="form-input" value={audioFormData.title} onChange={e => setAudioFormData({...audioFormData, title: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Artist / Performer</label>
                                                <input className="form-input" value={audioFormData.artist} onChange={e => setAudioFormData({...audioFormData, artist: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Category</label>
                                                <select 
                                                    className="form-input" 
                                                    value={audioFormData.category} 
                                                    onChange={e => setAudioFormData({...audioFormData, category: e.target.value})} 
                                                    required
                                                >
                                                    <option value="" disabled>Select Category</option>
                                                    {CATEGORIES.map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Duration (MM:SS)</label>
                                                <input className="form-input" value={audioFormData.duration} onChange={e => setAudioFormData({...audioFormData, duration: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Description (for Featured)</label>
                                                <input className="form-input" value={audioFormData.desc} onChange={e => setAudioFormData({...audioFormData, desc: e.target.value})} placeholder="Optional description..." />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Audio File (Upload)</label>
                                                <input 
                                                    type="file" 
                                                    className="form-input" 
                                                    accept="audio/*"
                                                    onChange={handleAudioFileChange} 
                                                />
                                                {audioFormData.audioSource && <span style={{color: 'green', fontSize: '0.8rem'}}>Audio loaded successfully</span>}
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                            <button type="submit" className="btn-login" style={{width: 'auto', margin: 0}}>Save Track</button>
                                            <button type="button" className="btn-login" style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}} onClick={() => setShowAudioForm(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Details</th>
                                            <th>Artist</th>
                                            <th>Duration</th>
                                            <th>Category</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {audios.map((audio) => (
                                            <tr key={audio.id} className="video-row">
                                                <td>
                                                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                                                        <div style={{width: '40px', height: '40px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b'}}>
                                                            <i className="fa fa-music"></i>
                                                        </div>
                                                        <span className="video-title">{audio.title}</span>
                                                    </div>
                                                </td>
                                                <td>{audio.artist}</td>
                                                <td>{audio.duration}</td>
                                                <td>
                                                    <span className={`category-badge ${audio.category.toLowerCase()}`}>{audio.category}</span>
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        <button className="action-btn edit" title="Edit Track" onClick={() => handleEditAudioClick(audio)}>
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button className="action-btn feature" title="Set as Featured" onClick={() => handleSetFeaturedAudio(audio)}>
                                                            <i className="fa fa-star"></i>
                                                        </button>
                                                        <button className="action-btn delete" title="Delete Track" onClick={() => handleDeleteAudio(audio.id)}>
                                                            <i className="fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'moa_voice' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>MOA Voice Notes</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>
                                        Upload and arrange MOA audio messages. Parts are numbered automatically.
                                    </p>
                                </div>
                                <label className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0, cursor: 'pointer'}}>
                                    <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Upload Audio Parts
                                    <input type="file" accept="audio/*" multiple style={{display: 'none'}} onChange={handleMoaAudioFilesChange} />
                                </label>
                            </div>
                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th style={{width: '80px'}}>Part</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Uploaded</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {moaAudios.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    {editingMoaAudio && editingMoaAudio.id === item.id ? (
                                                        <input 
                                                            type="number" 
                                                            className="form-input" 
                                                            value={moaAudioForm.partNumber} 
                                                            onChange={e => handleMoaAudioEditChange('partNumber', e.target.value)} 
                                                            style={{width: '80px'}}
                                                        />
                                                    ) : (
                                                        <span className="moa-part-pill">Part {item.partNumber}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaAudio && editingMoaAudio.id === item.id ? (
                                                        <input 
                                                            className="form-input" 
                                                            value={moaAudioForm.title} 
                                                            onChange={e => handleMoaAudioEditChange('title', e.target.value)} 
                                                        />
                                                    ) : (
                                                        <span>{item.title}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaAudio && editingMoaAudio.id === item.id ? (
                                                        <input 
                                                            className="form-input" 
                                                            value={moaAudioForm.desc} 
                                                            onChange={e => handleMoaAudioEditChange('desc', e.target.value)} 
                                                            placeholder="Optional summary" 
                                                        />
                                                    ) : (
                                                        <span style={{color: '#64748b'}}>{item.desc}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaAudio && editingMoaAudio.id === item.id ? (
                                                        <input
                                                            className="form-input"
                                                            value={moaAudioForm.uploadedAt}
                                                            onChange={e => handleMoaAudioEditChange('uploadedAt', e.target.value)}
                                                            placeholder="Upload date / time"
                                                        />
                                                    ) : (
                                                        <span style={{color: '#64748b', fontSize: '0.85rem'}}>
                                                            {item.uploadedAt || '—'}
                                                        </span>
                                                    )}
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        {editingMoaAudio && editingMoaAudio.id === item.id ? (
                                                            <>
                                                                <button className="action-btn edit" title="Save" onClick={saveMoaAudioEdit}>
                                                                    <i className="fa fa-save"></i>
                                                                </button>
                                                                <button className="action-btn delete" title="Cancel" onClick={() => setEditingMoaAudio(null)}>
                                                                    <i className="fa fa-times"></i>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button className="action-btn edit" title="Edit" onClick={() => startEditMoaAudio(item)}>
                                                                    <i className="fa fa-pen"></i>
                                                                </button>
                                                                <button className="action-btn delete" title="Delete" onClick={() => deleteMoaAudio(item.id)}>
                                                                    <i className="fa fa-trash-alt"></i>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {moaAudios.length === 0 && (
                                            <tr>
                                                <td colSpan={5} style={{textAlign: 'center', color: '#64748b'}}>
                                                    No MOA voice notes yet. Use Upload Audio Parts to add files.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'moa_videos' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>MOA Videos</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>
                                        Upload MOA video parts. Parts are auto-numbered per selected session date.
                                    </p>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                                    <div>
                                        <label className="form-label" style={{fontSize: '0.8rem', marginBottom: '0.15rem'}}>Session date</label>
                                        <input
                                            type="date"
                                            className="form-input"
                                            style={{padding: '0.35rem 0.5rem', fontSize: '0.85rem'}}
                                            value={moaSessionDate}
                                            onChange={(e) => setMoaSessionDate(e.target.value)}
                                        />
                                    </div>
                                    <label className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0, cursor: 'pointer'}}>
                                        <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Upload Video Parts
                                        <input type="file" accept="video/*" multiple style={{display: 'none'}} onChange={handleMoaVideoFilesChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th style={{width: '80px'}}>Part</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Uploaded</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {moaVideos.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    {editingMoaVideo && editingMoaVideo.id === item.id ? (
                                                        <input 
                                                            type="number" 
                                                            className="form-input" 
                                                            value={moaVideoForm.partNumber} 
                                                            onChange={e => handleMoaVideoEditChange('partNumber', e.target.value)} 
                                                            style={{width: '80px'}}
                                                        />
                                                    ) : (
                                                        <span className="moa-part-pill">Part {item.partNumber}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaVideo && editingMoaVideo.id === item.id ? (
                                                        <input 
                                                            className="form-input" 
                                                            value={moaVideoForm.title} 
                                                            onChange={e => handleMoaVideoEditChange('title', e.target.value)} 
                                                        />
                                                    ) : (
                                                        <span>{item.title}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaVideo && editingMoaVideo.id === item.id ? (
                                                        <input 
                                                            className="form-input" 
                                                            value={moaVideoForm.desc} 
                                                            onChange={e => handleMoaVideoEditChange('desc', e.target.value)} 
                                                            placeholder="Optional summary" 
                                                        />
                                                    ) : (
                                                        <span style={{color: '#64748b'}}>{item.desc}</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {editingMoaVideo && editingMoaVideo.id === item.id ? (
                                                        <input
                                                            className="form-input"
                                                            value={moaVideoForm.uploadedAt}
                                                            onChange={e => handleMoaVideoEditChange('uploadedAt', e.target.value)}
                                                            placeholder="Upload date / time"
                                                        />
                                                    ) : (
                                                        <span style={{color: '#64748b', fontSize: '0.85rem'}}>
                                                            {item.uploadedAt || '—'}
                                                        </span>
                                                    )}
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        {editingMoaVideo && editingMoaVideo.id === item.id ? (
                                                            <>
                                                                <button className="action-btn edit" title="Save" onClick={saveMoaVideoEdit}>
                                                                    <i className="fa fa-save"></i>
                                                                </button>
                                                                <button className="action-btn delete" title="Cancel" onClick={() => setEditingMoaVideo(null)}>
                                                                    <i className="fa fa-times"></i>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button className="action-btn edit" title="Edit" onClick={() => startEditMoaVideo(item)}>
                                                                    <i className="fa fa-pen"></i>
                                                                </button>
                                                                <button className="action-btn delete" title="Delete" onClick={() => deleteMoaVideo(item.id)}>
                                                                    <i className="fa fa-trash-alt"></i>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {moaVideos.length === 0 && (
                                            <tr>
                                                <td colSpan={5} style={{textAlign: 'center', color: '#64748b'}}>
                                                    No MOA videos yet. Use Upload Video Parts to add files.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Authorized / Security Tab */}
                {activeTab === 'authorized' && (
                    <div className="dashboard-content">
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem'}}>
                            
                            {/* Left Column: Profile & Security */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                                {/* Profile Card */}
                                <div className="content-card" style={{textAlign: 'center', padding: '2rem'}}>
                                    <div style={{width: '100px', height: '100px', background: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#64748b'}}>
                                        <i className="fa fa-user-tie"></i>
                                    </div>
                                    <h3 style={{margin: '0.5rem 0', color: '#0f172a'}}>Admin Official</h3>
                                    <p style={{color: '#64748b', margin: 0}}>Executive Office</p>
                                    <div style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
                                        <span className="status-badge processing">Active</span>
                                        <span className="status-badge pending">Level 1 Clearance</span>
                                    </div>
                                </div>

                                {/* Change Password */}
                                <div className="content-card">
                                    <div className="card-header">
                                        <h3>Security Settings</h3>
                                    </div>
                                    <div style={{padding: '1.5rem'}}>
                                        <form onSubmit={handlePasswordSubmit}>
                                            <div className="form-group">
                                                <label className="form-label">Current Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-input"
                                                    value={passwordData.currentPassword}
                                                    onChange={e => setPasswordData({...passwordData, currentPassword: e.target.value})}
                                                    required 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">New Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-input"
                                                    value={passwordData.newPassword}
                                                    onChange={e => setPasswordData({...passwordData, newPassword: e.target.value})}
                                                    placeholder="Min. 6 characters"
                                                    required 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Confirm New Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-input"
                                                    value={passwordData.confirmPassword}
                                                    onChange={e => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                                                    required 
                                                />
                                            </div>
                                            
                                            {passwordMsg.text && (
                                                <div style={{
                                                    padding: '10px', 
                                                    borderRadius: '4px', 
                                                    marginBottom: '1rem',
                                                    background: passwordMsg.type === 'error' ? '#fee2e2' : '#dcfce7',
                                                    color: passwordMsg.type === 'error' ? '#b91c1c' : '#15803d',
                                                    fontSize: '0.9rem'
                                                }}>
                                                    {passwordMsg.text}
                                                </div>
                                            )}

                                            <button type="submit" className="btn-login" style={{width: '100%', margin: 0}}>Update Password</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Authorized Directory & Logs */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                                
                                {/* Official Directory */}
                                <div className="content-card">
                                    <div className="card-header">
                                        <div>
                                            <h3>Authorized Officials</h3>
                                            <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Personnel with dashboard access</p>
                                        </div>
                                        <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1rem', margin: 0, fontSize: '0.8rem'}}>
                                            <i className="fa fa-plus"></i> Add Official
                                        </button>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table modern-table">
                                            <thead>
                                                <tr>
                                                    <th>Official</th>
                                                    <th>Role</th>
                                                    <th>Last Active</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                            <div style={{width: '32px', height: '32px', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'}}>A</div>
                                                            <span style={{fontWeight: 500}}>Admin Official</span>
                                                        </div>
                                                    </td>
                                                    <td>Super Admin</td>
                                                    <td>Just Now</td>
                                                    <td><span className="status-badge processing">Online</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                            <div style={{width: '32px', height: '32px', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'}}>M</div>
                                                            <span style={{fontWeight: 500}}>Ministry Head</span>
                                                        </div>
                                                    </td>
                                                    <td>Editor</td>
                                                    <td>2 hours ago</td>
                                                    <td><span className="status-badge pending">Offline</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                            <div style={{width: '32px', height: '32px', background: '#cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'}}>S</div>
                                                            <span style={{fontWeight: 500}}>System Support</span>
                                                        </div>
                                                    </td>
                                                    <td>Tech Lead</td>
                                                    <td>1 day ago</td>
                                                    <td><span className="status-badge pending">Offline</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* System Logs */}
                                <div className="content-card">
                                    <div className="card-header">
                                        <h3>System Access Logs</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table modern-table" style={{fontSize: '0.9rem'}}>
                                            <thead>
                                                <tr>
                                                    <th>Event</th>
                                                    <th>User</th>
                                                    <th>IP Address</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{color: '#64748b'}}>
                                                <tr>
                                                    <td><i className="fa fa-check-circle" style={{color: 'green', marginRight: '5px'}}></i> Login Success</td>
                                                    <td>Admin Official</td>
                                                    <td>192.168.1.1</td>
                                                    <td>Just Now</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-edit" style={{color: 'blue', marginRight: '5px'}}></i> Video Updated</td>
                                                    <td>Admin Official</td>
                                                    <td>192.168.1.1</td>
                                                    <td>10 mins ago</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-upload" style={{color: 'orange', marginRight: '5px'}}></i> Audio Uploaded</td>
                                                    <td>Admin Official</td>
                                                    <td>192.168.1.1</td>
                                                    <td>1 hour ago</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fa fa-check-circle" style={{color: 'green', marginRight: '5px'}}></i> Login Success</td>
                                                    <td>Ministry Head</td>
                                                    <td>10.0.0.45</td>
                                                    <td>2 hours ago</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Notices Tab */}
                {activeTab === 'notices' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <h3>Official Notices</h3>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1rem', margin: 0}} onClick={() => setShowNoticeForm(!showNoticeForm)}>
                                    <i className={`fa ${showNoticeForm ? 'fa-minus' : 'fa-plus'}`}></i> {showNoticeForm ? 'Close' : 'Add New Notice'}
                                </button>
                            </div>

                            {showNoticeForm && (
                                <div className="video-form-container" style={{background: '#f8fafc', padding: '20px', margin: '20px', borderRadius: '8px', border: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginBottom: '1rem'}}>Create Public Announcement</h4>
                                    <form onSubmit={handleNoticeSubmit}>
                                        <div className="form-group">
                                            <label className="form-label">Title</label>
                                            <input 
                                                type="text" 
                                                className="form-input" 
                                                value={noticeFormData.title}
                                                onChange={e => setNoticeFormData({...noticeFormData, title: e.target.value})}
                                                placeholder="e.g., OFFICIAL GOVERNMENT NOTICE"
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Content</label>
                                            <textarea 
                                                className="form-input" 
                                                style={{height: '100px'}}
                                                value={noticeFormData.content}
                                                onChange={e => setNoticeFormData({...noticeFormData, content: e.target.value})}
                                                placeholder="Enter the full text of the notice..."
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Priority Type</label>
                                            <select 
                                                className="form-input"
                                                value={noticeFormData.type}
                                                onChange={e => setNoticeFormData({...noticeFormData, type: e.target.value})}
                                            >
                                                <option value="urgent">Urgent (Red Alert)</option>
                                                <option value="info">Information (Blue)</option>
                                                <option value="success">Success (Green)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Notice Image (Optional)</label>
                                            <div className="file-upload-container">
                                                <input 
                                                    type="file" 
                                                    id="notice-image-upload" 
                                                    accept="image/*"
                                                    onChange={handleNoticeImageChange}
                                                    className="file-input"
                                                />
                                                <label htmlFor="notice-image-upload" className="file-label">
                                                    <i className="fa fa-image"></i>
                                                    {noticeFormData.image ? "Change Image" : "Upload Image"}
                                                </label>
                                                {noticeFormData.image && (
                                                    <div className="preview-container" style={{marginTop: '10px'}}>
                                                        <img src={noticeFormData.image} alt="Preview" style={{maxHeight: '100px', borderRadius: '4px', border: '1px solid #ddd'}} />
                                                        <button 
                                                            type="button" 
                                                            className="remove-btn" 
                                                            onClick={() => setNoticeFormData({...noticeFormData, image: null})}
                                                            style={{marginLeft: '10px', padding: '5px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn-login" style={{width: 'auto', marginTop: '10px'}}>
                                            Publish Notice
                                        </button>
                                    </form>
                                </div>
                            )}

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Content Preview</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {notices.map(notice => (
                                            <tr key={notice.id}>
                                                <td style={{fontWeight: 600}}>{notice.title}</td>
                                                <td style={{color: '#64748b'}}>{notice.content.substring(0, 60)}...</td>
                                                <td>
                                                    <span className={`status-badge ${notice.type === 'urgent' ? 'rejected' : notice.type === 'success' ? 'approved' : 'pending'}`} 
                                                          style={{textTransform: 'capitalize'}}>
                                                        {notice.type}
                                                    </span>
                                                </td>
                                                <td>{new Date(notice.date).toLocaleDateString()}</td>
                                                <td>
                                                    <button 
                                                        className="action-btn delete-btn" 
                                                        onClick={() => handleDeleteNotice(notice.id)}
                                                        title="Delete Notice"
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {notices.length === 0 && (
                                            <tr>
                                                <td colSpan="5" style={{textAlign: 'center', padding: '2rem', color: '#64748b'}}>
                                                    No notices found. Add one to display on the home page.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <h3>Service Form Submissions</h3>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1rem', margin: 0}} onClick={loadServiceSubmissions}>
                                    <i className="fa fa-sync"></i> Refresh
                                </button>
                            </div>

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Service</th>
                                            <th>Applicant</th>
                                            <th>Email</th>
                                            <th>Submitted</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {serviceSubmissions.map(sub => (
                                            <tr key={sub.id}>
                                                <td style={{fontWeight: 600}}>{sub.serviceTitle}</td>
                                                <td>
                                                    <div style={{fontWeight: 500}}>
                                                        {sub.formData.firstName} {sub.formData.lastName}
                                                    </div>
                                                    <div style={{fontSize: '0.8rem', color: '#64748b'}}>{sub.formData.title}</div>
                                                </td>
                                                <td>{sub.formData.email}</td>
                                                <td>{new Date(sub.submittedAt).toLocaleDateString()}</td>
                                                <td>
                                                    <span className={`status-badge ${sub.status === 'new' ? 'pending' : sub.status === 'read' ? 'processing' : 'approved'}`} 
                                                          style={{textTransform: 'capitalize'}}>
                                                        {sub.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div style={{display: 'flex', gap: '5px'}}>
                                                        <button 
                                                            className="action-btn" 
                                                            style={{background: '#3b82f6', color: 'white'}}
                                                            onClick={() => {
                                                                setSelectedSubmission(sub);
                                                                setShowSubmissionModal(true);
                                                                if(sub.status === 'new') handleSubmissionStatus(sub.id, 'read');
                                                            }}
                                                            title="View Full Details"
                                                        >
                                                            <i className="fa fa-eye"></i>
                                                        </button>
                                                        <button 
                                                            className="action-btn" 
                                                            style={{background: '#22c55e', color: 'white'}}
                                                            onClick={() => handleSubmissionStatus(sub.id, 'contacted')}
                                                            title="Mark as Contacted"
                                                        >
                                                            <i className="fa fa-check"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {serviceSubmissions.length === 0 && (
                                            <tr>
                                                <td colSpan="6" style={{textAlign: 'center', padding: '2rem', color: '#64748b'}}>
                                                    No submissions found yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Submission Details Modal */}
                        {showSubmissionModal && selectedSubmission && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000
                            }}>
                                <div style={{
                                    background: 'white',
                                    width: '90%',
                                    maxWidth: '800px',
                                    maxHeight: '90vh',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                }}>
                                    <div style={{
                                        padding: '1.5rem', 
                                        borderBottom: '1px solid #e2e8f0', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        background: '#f8fafc',
                                        borderTopLeftRadius: '8px',
                                        borderTopRightRadius: '8px'
                                    }}>
                                        <div>
                                            <h3 style={{margin: 0, color: '#0f172a'}}>Submission Details</h3>
                                            <p style={{margin: '5px 0 0', color: '#64748b', fontSize: '0.9rem'}}>
                                                {selectedSubmission.serviceTitle} • {new Date(selectedSubmission.submittedAt).toLocaleString()}
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => setShowSubmissionModal(false)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                fontSize: '1.5rem',
                                                cursor: 'pointer',
                                                color: '#64748b'
                                            }}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div style={{padding: '2rem', overflowY: 'auto'}}>
                                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
                                            {Object.entries(selectedSubmission.formData).map(([key, value]) => (
                                                <div key={key} style={{breakInside: 'avoid'}}>
                                                    <strong style={{
                                                        display: 'block', 
                                                        textTransform: 'capitalize', 
                                                        color: '#64748b', 
                                                        fontSize: '0.8rem', 
                                                        marginBottom: '5px',
                                                        letterSpacing: '0.5px'
                                                    }}>
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </strong>
                                                    <div style={{fontSize: '1rem', color: '#0f172a'}}>
                                                        {renderSubmissionValue(key, value)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '1.5rem', 
                                        borderTop: '1px solid #e2e8f0', 
                                        display: 'flex', 
                                        justifyContent: 'flex-end',
                                        gap: '1rem',
                                        background: '#f8fafc',
                                        borderBottomLeftRadius: '8px',
                                        borderBottomRightRadius: '8px'
                                    }}>
                                        <button 
                                            className="btn-login" 
                                            style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}}
                                            onClick={() => setShowSubmissionModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button 
                                            className="btn-login" 
                                            style={{width: 'auto', margin: 0, background: '#22c55e'}}
                                            onClick={() => {
                                                handleSubmissionStatus(selectedSubmission.id, 'contacted');
                                                setShowSubmissionModal(false);
                                            }}
                                        >
                                            <i className="fa fa-check" style={{marginRight: '5px'}}></i> Mark as Contacted
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Gallery Management Tab */}
                {activeTab === 'gallery' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>Image Gallery</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Manage images displayed on the public gallery</p>
                                </div>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0}} onClick={handleAddGalleryClick}>
                                    <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Add New Image
                                </button>
                            </div>

                            {/* Add/Edit Form */}
                            {showGalleryForm && (
                                <div style={{padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '1rem'}}>{editingGalleryItem ? 'Edit Image' : 'Add New Image'}</h4>
                                    <form onSubmit={handleGallerySubmit}>
                                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                            <div className="form-group">
                                                <label className="form-label">Title</label>
                                                <input className="form-input" value={galleryFormData.title} onChange={e => setGalleryFormData({...galleryFormData, title: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Description</label>
                                                <input className="form-input" value={galleryFormData.desc} onChange={e => setGalleryFormData({...galleryFormData, desc: e.target.value})} />
                                            </div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}>
                                                <label className="form-label">Image File (Max 5MB)</label>
                                                <input 
                                                    type="file" 
                                                    className="form-input" 
                                                    accept="image/*"
                                                    onChange={handleGalleryImageChange}
                                                    required={!editingGalleryItem} 
                                                />
                                                {galleryFormData.img && (
                                                    <div style={{marginTop: '10px'}}>
                                                        <img src={galleryFormData.img} alt="Preview" style={{height: '100px', borderRadius: '4px', border: '1px solid #ddd'}} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                            <button type="submit" className="btn-login" style={{width: 'auto', margin: 0}}>Save Image</button>
                                            <button type="button" className="btn-login" style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}} onClick={() => setShowGalleryForm(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title & Description</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {galleryItems.map((item) => (
                                            <tr key={item.id}>
                                                <td style={{width: '120px'}}>
                                                    <img src={item.img} alt={item.title} style={{width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} onError={(e) => {e.target.onerror = null; e.target.src = img1}} />
                                                </td>
                                                <td>
                                                    <div style={{fontWeight: 600}}>{item.title}</div>
                                                    <div style={{color: '#64748b', fontSize: '0.9rem'}}>{item.desc}</div>
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        <button className="action-btn edit" title="Edit Image" onClick={() => handleEditGalleryClick(item)}>
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button className="action-btn delete" title="Delete Image" onClick={() => handleDeleteGalleryItem(item.id)}>
                                                            <i className="fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {galleryItems.length === 0 && (
                                            <tr>
                                                <td colSpan="3" style={{textAlign: 'center', padding: '2rem', color: '#64748b'}}>
                                                    No images found. Add some to the gallery.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Landmarks Management Tab */}
                {activeTab === 'landmarks' && (
                    <div className="dashboard-content">
                        <div className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3>Landmarks Management</h3>
                                    <p style={{color: '#718096', fontSize: '0.9rem', margin: 0}}>Manage indigenous landmarks</p>
                                </div>
                                <button className="btn-login" style={{width: 'auto', padding: '0.5rem 1.5rem', margin: 0}} onClick={handleAddLandmarkClick}>
                                    <i className="fa fa-plus" style={{marginRight: '8px'}}></i> Add New Landmark
                                </button>
                            </div>

                            {/* Add/Edit Form */}
                            {showLandmarkForm && (
                                <div style={{padding: '1.5rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '1rem'}}>{editingLandmark ? 'Edit Landmark' : 'Add New Landmark'}</h4>
                                    <form onSubmit={handleLandmarkSubmit}>
                                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                            <div className="form-group">
                                                <label className="form-label">Title</label>
                                                <input className="form-input" value={landmarkFormData.title} onChange={e => setLandmarkFormData({...landmarkFormData, title: e.target.value})} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Location</label>
                                                <input className="form-input" value={landmarkFormData.location} onChange={e => setLandmarkFormData({...landmarkFormData, location: e.target.value})} required />
                                            </div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}>
                                                <label className="form-label">Description</label>
                                                <textarea className="form-input" value={landmarkFormData.desc} onChange={e => setLandmarkFormData({...landmarkFormData, desc: e.target.value})} rows="3" required />
                                            </div>
                                            <div className="form-group" style={{gridColumn: '1 / -1'}}>
                                                <label className="form-label">Image File (Max 5MB)</label>
                                                <input 
                                                    type="file" 
                                                    className="form-input" 
                                                    accept="image/*"
                                                    onChange={handleLandmarkImageChange}
                                                    required={!editingLandmark} 
                                                />
                                                {landmarkFormData.img && (
                                                    <div style={{marginTop: '10px'}}>
                                                        <img src={landmarkFormData.img} alt="Preview" style={{height: '100px', borderRadius: '4px', border: '1px solid #ddd'}} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                                            <button type="submit" className="btn-login" style={{width: 'auto', margin: 0}}>Save Landmark</button>
                                            <button type="button" className="btn-login" style={{width: 'auto', margin: 0, background: '#cbd5e1', color: '#334155'}} onClick={() => setShowLandmarkForm(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="table-responsive">
                                <table className="table modern-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title & Location</th>
                                            <th>Description</th>
                                            <th style={{textAlign: 'right'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {landmarks.map((item) => (
                                            <tr key={item.id}>
                                                <td style={{width: '120px'}}>
                                                    <img src={item.img} alt={item.title} style={{width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} onError={(e) => {e.target.onerror = null; e.target.src = img1}} />
                                                </td>
                                                <td>
                                                    <div style={{fontWeight: 600}}>{item.title}</div>
                                                    <div style={{color: '#64748b', fontSize: '0.9rem'}}><i className="fa fa-map-marker-alt"></i> {item.location}</div>
                                                </td>
                                                <td>
                                                    <div style={{color: '#64748b', fontSize: '0.9rem', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.desc}</div>
                                                </td>
                                                <td style={{textAlign: 'right'}}>
                                                    <div className="action-buttons">
                                                        <button className="action-btn edit" title="Edit Landmark" onClick={() => handleEditLandmarkClick(item)}>
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button className="action-btn delete" title="Delete Landmark" onClick={() => handleDeleteLandmark(item.id)}>
                                                            <i className="fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {landmarks.length === 0 && (
                                            <tr>
                                                <td colSpan="4" style={{textAlign: 'center', padding: '2rem', color: '#64748b'}}>
                                                    No landmarks found. Add some to the database.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Admin;
