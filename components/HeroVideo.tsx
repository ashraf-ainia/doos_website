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

const controlClassName =
  "w-10 h-10 rounded-full border border-white/20 bg-canvas/70 backdrop-blur-md text-ink inline-flex items-center justify-center cursor-pointer hover:bg-canvas transition-colors";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
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

  const togglePlay = () => {
    const video = ref.current;
    if (!video) return;

    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

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
          : "w-[340px] max-w-full aspect-[9/16] rounded-3xl overflow-hidden border border-line-strong bg-canvas-deep shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]"
      }`}
    >
      <video
        ref={ref}
        className={`cursor-pointer block ${
          fullscreen ? "w-full h-full object-contain" : "w-full h-full object-cover"
        }`}
        src="/promo.mp4"
        width={480}
        height={832}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="فيديو تعريفي بتطبيق دوس لتحويل صوت سيارتك إلى سيارة أسطورية"
      >
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-center gap-2 pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "إيقاف الفيديو" : "تشغيل الفيديو"}
            aria-pressed={!playing}
            className={controlClassName}
          >
            <span className="material-symbols-rounded text-[22px]">
              {playing ? "pause" : "play_arrow"}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "تشغيل صوت الفيديو" : "كتم صوت الفيديو"}
            aria-pressed={muted}
            className={controlClassName}
          >
            <span className="material-symbols-rounded text-[22px]">
              {muted ? "volume_off" : "volume_up"}
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? "إنهاء وضع ملء الشاشة" : "عرض ملء الشاشة"}
          aria-pressed={fullscreen}
          className={`${controlClassName} pointer-events-auto`}
        >
          <span className="material-symbols-rounded text-[22px]">
            {fullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
        </button>
      </div>
    </div>
  );
}
