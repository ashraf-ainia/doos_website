"use client";

import { useEffect, useState } from "react";

const faults = [
  { code: "P0301", label: "اختلال احتراق الأسطوانة 1" },
  { code: "P0420", label: "كفاءة المحول الحفاز" },
];

const tabs = [
  { icon: "volume_up", label: "الصوت", active: false },
  { icon: "build", label: "الفحص", active: true },
  { icon: "local_gas_station", label: "الوقود", active: false },
];

/** Simulated live readings so the mockup feels like a connected device. */
function readingsAt(t: number) {
  return {
    rpm: String(2200 + Math.round(Math.sin(t / 2) * 900 + Math.sin(t * 1.7) * 200)),
    speed: String(78 + Math.round(Math.sin(t / 3) * 14)),
    temp: String(88 + (t % 3)),
    volt: (14.1 + Math.sin(t) * 0.15).toFixed(1),
  };
}

export default function DiagnosticsPhone() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 900);
    return () => clearInterval(timer);
  }, []);

  const readings = readingsAt(tick);
  const metrics = [
    { label: "دورات المحرك", value: readings.rpm, unit: "RPM" },
    { label: "السرعة", value: readings.speed, unit: "km/h" },
    { label: "حرارة المحرك", value: readings.temp, unit: "°C" },
    { label: "جهد البطارية", value: readings.volt, unit: "V" },
  ];

  return (
    <div
      className="w-[300px] max-w-full bg-canvas border border-line-bright rounded-[36px] p-3.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]"
      aria-hidden
    >
      <div className="bg-panel rounded-[26px] px-[18px] py-[22px] min-h-[540px] flex flex-col gap-[18px]">
        <div className="flex items-center justify-between">
          <div className="font-bold text-base">فحص السيارة</div>
          <div className="flex items-center gap-1.5 text-xs text-mint">
            <span className="w-[7px] h-[7px] rounded-full bg-mint inline-block" />
            متصل
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-3.5 rounded-[14px] bg-canvas border border-line-soft"
            >
              <div className="text-[11px] text-ink-dim mb-1.5">{metric.label}</div>
              <div className="text-[22px] font-bold tabular-nums" dir="ltr">
                {metric.value}
                <span className="text-[11px] text-ink-dim ms-1">{metric.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-[14px] bg-canvas border border-line-soft">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[13px] font-semibold">رموز الأعطال</div>
            <div className="text-[11px] px-2 py-[3px] rounded-full bg-accent-deep text-accent font-semibold">
              {faults.length} أعطال
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {faults.map((fault) => (
              <div
                key={fault.code}
                className="flex justify-between gap-2 text-xs"
              >
                <span dir="ltr" className="font-bold text-accent">
                  {fault.code}
                </span>
                <span className="text-ink-muted">{fault.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3.5 p-[11px] rounded-[10px] bg-accent text-on-accent font-bold text-[13px] text-center">
            مسح الأعطال
          </div>
        </div>

        <div className="mt-auto flex justify-around pt-2 border-t border-line-soft text-ink-faint text-[11px]">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`flex flex-col items-center gap-[3px] ${
                tab.active ? "text-accent" : ""
              }`}
            >
              <span className="material-symbols-rounded text-[20px]">
                {tab.icon}
              </span>
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
