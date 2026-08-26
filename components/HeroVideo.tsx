"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => void;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => void;
};

// iPhone Safari refuses fullscreen on containers and only exposes it on the
// video itself, which opens the native player instead.
type IosVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Browsers only allow autoplay with sound when the user already has a
    // history of interacting with the site, so try it and fall back to a
    // muted autoplay when it gets blocked.
    video.muted = false;
    video.play().then(
      () => setMuted(false),
      () => {
        video.muted = true;
        setMuted(true);
        video.play().catch(() => {});
      }
    );
  }, []);

  useEffect(() => {
    const doc = document as FullscreenDocument;
    const onChange = () => {
      setFullscreen(
        Boolean(doc.fullscreenElement ?? doc.webkitFullscreenElement)
      );
    };

    doc.addEventListener("fullscreenchange", onChange);
    doc.addEventListener("webkitfullscreenchange", onChange);
    return () => {
      doc.removeEventListener("fullscreenchange", onChange);
      doc.removeEventListener("webkitfullscreenchange", onChange);
    };
  }, []);

  const toggleSound = () => {
    const video = ref.current;
    if (!video) return;

    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  };

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current as FullscreenElement | null;
    const video = ref.current as IosVideoElement | null;
    const doc = document as FullscreenDocument;
    if (!container || !video) return;

    if (doc.fullscreenElement ?? doc.webkitFullscreenElement) {
      if (doc.exitFullscreen) doc.exitFullscreen().catch(() => {});
      else doc.webkitExitFullscreen?.();
      return;
    }

    if (container.requestFullscreen) {
      container.requestFullscreen().catch(() => {});
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else {
      video.webkitEnterFullscreen?.();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${
        fullscreen
          ? "w-full h-full flex items-center justify-center bg-black"
          : "w-full max-w-[260px] md:max-w-[340px]"
      }`}
    >
      <video
        ref={ref}
        className={`cursor-pointer ${
          fullscreen
            ? "w-full h-full object-contain"
            : "w-full h-auto rounded-3xl drop-shadow-[0_20px_50px_rgba(0,153,255,0.2)]"
        }`}
        src="/promo.mp4"
        width={480}
        height={832}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onClick={toggleSound}
        onDoubleClick={toggleFullscreen}
        aria-label="فيديو تعريفي بتطبيق دوس لتحويل صوت سيارتك إلى سيارة خارقة"
      >
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "تشغيل صوت الفيديو" : "كتم صوت الفيديو"}
          aria-pressed={muted}
          className="w-12 h-12 rounded-full bg-surface/70 backdrop-blur-sm border border-outline-variant text-on-surface flex items-center justify-center hover:bg-surface hover:scale-105 transition-all"
        >
          <span className="material-symbols-outlined">
            {muted ? "volume_off" : "volume_up"}
          </span>
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "إنهاء وضع ملء الشاشة" : "عرض ملء الشاشة"}
          aria-pressed={fullscreen}
          className="w-12 h-12 rounded-full bg-surface/70 backdrop-blur-sm border border-outline-variant text-on-surface flex items-center justify-center hover:bg-surface hover:scale-105 transition-all"
        >
          <span className="material-symbols-outlined">
            {fullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
        </button>
      </div>
    </div>
  );
}
