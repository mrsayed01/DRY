import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import { getVideoFile } from "../utils/videoStorage";
import "../css/mediaPage.css";

export default function MoaVideos() {
  const [items, setItems] = useState([]);
  const [playingId, setPlayingId] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [previewUrls, setPreviewUrls] = useState({});
  const objectUrlsRef = useRef([]);

  const getCanonicalKey = (item) => {
    const raw = item.sessionDate || item.uploadedAt || "";
    if (!raw) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
    return raw;
  };

  useEffect(() => {
    const saved = localStorage.getItem("dry_moa_videos");
    if (!saved) return;

    const parsed = JSON.parse(saved);
    parsed.sort((a, b) => {
      const keyA = getCanonicalKey(a);
      const keyB = getCanonicalKey(b);
      if (keyA === keyB) {
        return (Number(a.partNumber) || 0) - (Number(b.partNumber) || 0);
      }
      return keyA.localeCompare(keyB);
    });
    setItems(parsed);

    const loadPreviews = async () => {
      const previews = {};

      for (const item of parsed) {
        if (item.hasLocalVideo) {
          const blob = await getVideoFile(item.id);
          if (!blob) continue;
          const url = URL.createObjectURL(blob);
          objectUrlsRef.current.push(url);
          previews[item.id] = url;
        } else if (item.videoSource) {
          previews[item.id] = item.videoSource;
        }
      }

      setPreviewUrls(previews);
    };

    loadPreviews();

    return () => {
      objectUrlsRef.current.forEach((url) => {
        if (url && url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
      objectUrlsRef.current = [];
    };
  }, []);

  const handlePlay = async (item) => {
    setPlayingId(item.id);
    setVideoUrl(null);
    if (item.hasLocalVideo) {
      if (previewUrls[item.id]) {
        setVideoUrl(previewUrls[item.id]);
      } else {
        const blob = await getVideoFile(item.id);
        if (blob) {
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
        }
      }
    } else if (item.videoSource) {
      setVideoUrl(item.videoSource);
    }
  };

  const closeModal = () => {
    setPlayingId(null);
    setVideoUrl(null);
  };

  return (
    <div className="media-page-body">
      <Navbar />
      <PageHeader title="MOA's Videos" path="/history/videos" name="MOA's Videos" />

      <div className="media-hero">
        <div className="container media-hero-content">
          <h1>MOA Historical Address Series</h1>
          <p>
            Watch the recorded messages and declarations of Modupeola Onitiri-Abiola arranged
            in clear parts for easy following.
          </p>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h2 className="display-6">Video Parts</h2>
            <div className="bg-primary mx-auto" style={{ width: "80px", height: "4px", borderRadius: "2px" }} />
            <p className="mt-3 mb-0">
              Content is managed from the Executive Admin dashboard. Parts are numbered automatically but can
              be renamed from the control panel.
            </p>
          </div>

          {items.length === 0 && (
            <p style={{ textAlign: "center", color: "#64748b" }}>
              No videos have been uploaded yet. Use the Admin dashboard to add MOA&apos;s videos.
            </p>
          )}

          {items.length > 0 && (() => {
            const map = {};
            items.forEach((item) => {
              const canonical = getCanonicalKey(item) || "Other";
              const label = item.uploadedAt || canonical;
              if (!map[canonical]) {
                map[canonical] = { key: canonical, label, items: [] };
              }
              map[canonical].items.push(item);
            });
            const groups = Object.values(map);

            return groups.map((group) => (
              <div key={group.key} style={{ marginBottom: "2.5rem" }}>
                <h4 style={{ marginBottom: "1.25rem", color: "#0f172a" }}>
                  Uploaded: {group.label}
                </h4>
                <div className="row g-4">
                  {group.items.map((item, index) => {
                    const partIndex = index + 1;
                    return (
                      <div className="col-md-6 col-lg-4" key={item.id || `${group.key}-${index}`}>
                        <div className="cinematic-card" onClick={() => handlePlay(item)}>
                          <div className="thumbnail-wrapper">
                            {previewUrls[item.id] && (
                              <video
                                className="thumbnail-video"
                                src={previewUrls[item.id]}
                                muted
                                playsInline
                                preload="metadata"
                              />
                            )}
                            <div className="play-overlay">
                              <div className="play-circle">
                                <i className="fa fa-play" />
                              </div>
                            </div>
                          </div>
                          <div className="video-info">
                            <div className="video-meta">
                              <span className="text-primary fw-bold">
                                Part {partIndex}
                              </span>
                            </div>
                            <h5 className="video-title">
                              {item.title || `Part ${partIndex}`}
                            </h5>
                            {item.desc && (
                              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                                {item.desc}
                              </p>
                            )}
                            {group.label && (
                              <p
                                style={{
                                  marginBottom: 0,
                                  marginTop: 4,
                                  fontSize: "0.8rem",
                                  color: "#94a3b8",
                                }}
                              >
                                Uploaded: {group.label}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ));
          })()}
        </div>
      </div>

      {playingId && videoUrl && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <video src={videoUrl} controls autoPlay style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
