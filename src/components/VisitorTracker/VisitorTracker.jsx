import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_BASE =
  process.env.REACT_APP_API_BASE_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://travel-backend-pearl.vercel.app");

function getOrCreateVisitorId() {
  const STORAGE_KEY = "bbp_vid";
  try {
    let vid = localStorage.getItem(STORAGE_KEY);
    if (!vid) {
      vid = `v_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem(STORAGE_KEY, vid);
    }
    return vid;
  } catch {
    return `v_temp_${Math.random().toString(36).substring(2, 9)}`;
  }
}

export default function VisitorTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname;

    // Avoid double-logging identical route in quick succession
    if (lastTrackedPath.current === currentPath) return;
    lastTrackedPath.current = currentPath;

    const trackImpression = async () => {
      try {
        const visitorId = getOrCreateVisitorId();
        await axios.post(
          `${API_BASE}/api/analytics/track`,
          {
            visitorId,
            path: currentPath,
            referrer: document.referrer || "direct",
          },
          {
            headers: { "Content-Type": "application/json" },
            timeout: 5000,
          }
        );
      } catch (err) {
        // Analytics failure should never disrupt the visitor experience
      }
    };

    trackImpression();
  }, [location.pathname]);

  return null;
}

