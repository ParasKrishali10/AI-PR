"use client";

import React from "react";

type ToggleProps = {
checked: boolean;
onChange: (value: boolean) => void;
};

export default function Toggle({ checked, onChange }: ToggleProps) {
const id = React.useId();

return (
<div className="neo-toggle-container">
<input
id={id}
type="checkbox"
className="neo-toggle-input"
checked={checked}
onChange={(e) => onChange(e.target.checked)}
/>
  {/* ✅ label linked to unique id */}
  <label className="neo-toggle" htmlFor={id}>
    <div className="neo-track">
      <div className="neo-background-layer"></div>
      <div className="neo-grid-layer"></div>

      <div className="neo-spectrum-analyzer">
        <div className="neo-spectrum-bar"></div>
        <div className="neo-spectrum-bar"></div>
        <div className="neo-spectrum-bar"></div>
        <div className="neo-spectrum-bar"></div>
        <div className="neo-spectrum-bar"></div>
      </div>

      <div className="neo-track-highlight"></div>
    </div>

    <div className="neo-thumb">
      <div className="neo-thumb-ring"></div>
      <div className="neo-thumb-core">
        <div className="neo-thumb-icon">
          <div className="neo-thumb-wave"></div>
          <div className="neo-thumb-pulse"></div>
        </div>
      </div>
    </div>

    <div className="neo-gesture-area"></div>

    <div className="neo-interaction-feedback">
      <div className="neo-ripple"></div>
      <div className="neo-progress-arc"></div>
    </div>

    <div className="neo-status">
      <div className="neo-status-indicator">
        <div className="neo-status-dot"></div>
        <div className="neo-status-text"></div>
      </div>
    </div>
  </label>
</div>
);
}
