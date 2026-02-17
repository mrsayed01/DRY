import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import { getAudioFile } from "../utils/audioStorage";
import "../css/mediaPage.css";

export default function MoaVoiceNotes() {
  const [items, setItems] = useState([]);
  const [playingItem, setPlayingItem] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("dry_moa_audios");
    if (saved) {
      const parsed = JSON.parse(saved);
      parsed.sort((a, b) => (a.partNumber || 0) - (b.partNumber || 0));
      setItems(parsed);
    }
  }, []);

  const handlePlay = async (item) => {
    setPlayingItem(item);
    if (item.hasLocalAudio) {
      const file = await getAudioFile(item.id);
      if (file) {
        const url = URL.createObjectURL(file);
        setAudioSrc(url);
      }
    } else if (item.audioSource) {
      setAudioSrc(item.audioSource);
    }
  };

  const closeModal = () => {
    setPlayingItem(null);
    setAudioSrc(null);
  };

  return (
    <div className="media-page-body">
      <Navbar />
      <PageHeader title="MOA's Voice Note" path="/history/voice-notes" name="MOA's Voice Note" />

      <div className="media-hero">
        <div className="container media-hero-content">
          <h1>Voice of MOA</h1>
          <p>
            Listen to the declarations, guidance and reflections of Modupeola Onitiri-Abiola arranged
            in a simple sequence of parts.
          </p>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h2 className="display-6">Audio Parts</h2>
            <div className="bg-primary mx-auto" style={{ width: "80px", height: "4px", borderRadius: "2px" }} />
            <p className="mt-3 mb-0">
              Audio files and part numbers are managed from the Admin dashboard. Parts are auto-numbered
              but can be edited manually.
            </p>
          </div>

          <div className="row moa-audio-list">
            {items.map((item, index) => (
              <div className="col-md-6" key={item.id || index}>
                <div className="audio-list-item moa-audio-item">
                  <div className="audio-index">Part {item.partNumber || index + 1}</div>
                  <div className="audio-icon-small">
                    <i className="fa fa-microphone" />
                  </div>
                  <div className="audio-info">
                    <h5 className="audio-title">
                      {item.title || `Part ${item.partNumber || index + 1}`}
                    </h5>
                    {item.desc && (
                      <p className="audio-artist" style={{ marginBottom: 0 }}>
                        {item.desc}
                      </p>
                    )}
                    {item.uploadedAt && (
                      <p
                        style={{
                          marginBottom: 0,
                          marginTop: 4,
                          fontSize: "0.8rem",
                          color: "#94a3b8",
                        }}
                      >
                        Uploaded: {item.uploadedAt}
                      </p>
                    )}
                  </div>
                  <button className="btn-play-mini" onClick={() => handlePlay(item)}>
                    <i className="fa fa-play" />
                  </button>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-12">
                <p style={{ textAlign: "center", color: "#64748b" }}>
                  No voice notes have been uploaded yet. Use the Admin dashboard to add MOA&apos;s voice notes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {playingItem && audioSrc && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div
            className="video-modal-content audio-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "500px", textAlign: "center", padding: "2rem" }}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  background: "#f1f5f9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "3rem",
                  color: "#64748b",
                }}
              >
                <i className="fa fa-microphone" />
              </div>
              <div className="moa-modal-part-pill">
                Part {playingItem.partNumber || ""}
              </div>
            </div>
            <audio controls autoPlay style={{ width: "100%" }}>
              <source src={audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
