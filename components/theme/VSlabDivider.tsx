"use client";

import React, { useId } from "react";

export type VSlabVariant =
  | "v-down-deep"
  | "v-up-asymmetric"
  | "v-down-sculpted"
  | "v-up-steep"
  | "v-down-carved"
  | "v-up-wide"
  | "v-chevron-horizon";

interface VSlabDividerProps {
  variant?: VSlabVariant;
  topColor?: string;
  bottomColor?: string;
  glowIntensity?: "subtle" | "medium" | "vibrant";
  className?: string;
}

export const VSlabDivider: React.FC<VSlabDividerProps> = ({
  variant = "v-down-deep",
  topColor = "#0A0E17",
  bottomColor = "#0A0E17",
  glowIntensity = "medium",
  className = "",
}) => {
  const rawId = useId();
  // Sanitize React useId for valid SVG attribute IDs
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const isTopLight = topColor === "#ffffff" || topColor === "#F3EFE7" || topColor.startsWith("#f");
  const isBottomLight = bottomColor === "#ffffff" || bottomColor === "#F3EFE7" || bottomColor.startsWith("#f");

  // Determine bevel colors based on top/bottom luminescence
  const leftBevelFill = isTopLight
    ? `url(#bevelLightLeft-${id})`
    : `url(#bevelDarkLeft-${id})`;
  const rightBevelFill = isTopLight
    ? `url(#bevelLightRight-${id})`
    : `url(#bevelDarkRight-${id})`;

  const glowOpacity =
    glowIntensity === "vibrant" ? 0.7 : glowIntensity === "subtle" ? 0.25 : 0.45;
  const rimOpacity =
    glowIntensity === "vibrant" ? 0.95 : glowIntensity === "subtle" ? 0.6 : 0.85;

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none z-20 -my-px block ${className}`}
      style={{
        // Maintain architectural presence across screen sizes
        height: "clamp(90px, 12vw, 210px)",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan Glow Filter */}
          <filter id={`cyanGlow-${id}`} x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="3" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Apex Jewel Flare */}
          <radialGradient id={`apexGlow-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#52ffcb" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#18cb96" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#18cb96" stopOpacity="0" />
          </radialGradient>

          {/* Cyan Rim Laser Stroke Gradient */}
          <linearGradient id={`rimGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18cb96" stopOpacity="0.15" />
            <stop offset="20%" stopColor="#18cb96" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#52ffcb" stopOpacity="1" />
            <stop offset="80%" stopColor="#18cb96" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#18cb96" stopOpacity="0.15" />
          </linearGradient>

          {/* Dark Slab Bevel Left (Directional light source from top-left) */}
          <linearGradient id={`bevelDarkLeft-${id}`} x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#17263b" />
            <stop offset="50%" stopColor="#101c2c" />
            <stop offset="100%" stopColor="#0a121d" />
          </linearGradient>

          {/* Dark Slab Bevel Right (Ambient shadow side) */}
          <linearGradient id={`bevelDarkRight-${id}`} x1="30%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1724" />
            <stop offset="60%" stopColor="#080e18" />
            <stop offset="100%" stopColor="#04070c" />
          </linearGradient>

          {/* Light Slab Bevel Gradients */}
          <linearGradient id={`bevelLightLeft-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e4ede8" />
            <stop offset="100%" stopColor="#cedad3" />
          </linearGradient>
          <linearGradient id={`bevelLightRight-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbe5df" />
            <stop offset="100%" stopColor="#c2d0c8" />
          </linearGradient>

          {/* Cast Ambient Occlusion Shadow */}
          <linearGradient id={`castShadow-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={isBottomLight ? "rgba(0,0,0,0.32)" : "rgba(0,0,0,0.8)"}
            />
            <stop
              offset="45%"
              stopColor={isBottomLight ? "rgba(0,0,0,0.14)" : "rgba(0,0,0,0.4)"}
            />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* ── Variant 1: Deep Asymmetrical Downward V Cut ── */}
        {variant === "v-down-deep" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 75 L 520 195 L 0 45 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 45 L 520 195 L 520 220 L 0 70 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 520 195 L 1440 75 L 1440 100 L 520 220 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 70 L 520 220 L 1440 100 L 1440 135 L 520 240 L 0 100 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 70 L 520 220 L 1440 100 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 45 L 520 195 L 1440 75"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 45 L 520 195 L 1440 75"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="520"
              cy="195"
              r="18"
              fill={`url(#apexGlow-${id})`}
              opacity="0.9"
            />
          </g>
        )}

        {/* ── Variant 2: Inverted Asymmetrical Upward Chevron ── */}
        {variant === "v-up-asymmetric" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 165 L 920 45 L 0 185 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 185 L 920 45 L 920 70 L 0 210 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 920 45 L 1440 165 L 1440 190 L 920 70 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 210 L 920 70 L 1440 190 L 1440 225 L 920 105 L 0 240 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 210 L 920 70 L 1440 190 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 185 L 920 45 L 1440 165"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 185 L 920 45 L 1440 165"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="920"
              cy="45"
              r="18"
              fill={`url(#apexGlow-${id})`}
              opacity="0.9"
            />
          </g>
        )}

        {/* ── Variant 3: Sculpted Multi-Facet Asymmetric Downward V ── */}
        {variant === "v-down-sculpted" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 65 L 1080 125 L 640 192 L 320 115 L 0 55 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Facets */}
            <path
              d="M 0 55 L 320 115 L 320 137 L 0 77 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 320 115 L 640 192 L 640 214 L 320 137 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 640 192 L 1080 125 L 1080 147 L 640 214 Z"
              fill={rightBevelFill}
            />
            <path
              d="M 1080 125 L 1440 65 L 1440 87 L 1080 147 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 77 L 320 137 L 640 214 L 1080 147 L 1440 87 L 1440 120 L 1080 177 L 640 240 L 320 165 L 0 105 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 77 L 320 137 L 640 214 L 1080 147 L 1440 87 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 55 L 320 115 L 640 192 L 1080 125 L 1440 65"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 55 L 320 115 L 640 192 L 1080 125 L 1440 65"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="640"
              cy="192"
              r="18"
              fill={`url(#apexGlow-${id})`}
              opacity="0.9"
            />
          </g>
        )}

        {/* ── Variant 4: Sharp DevCraft Chevron Crest (Upward V) ── */}
        {variant === "v-up-steep" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 175 L 740 38 L 0 190 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 190 L 740 38 L 740 60 L 0 212 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 740 38 L 1440 175 L 1440 197 L 740 60 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 212 L 740 60 L 1440 197 L 1440 230 L 740 92 L 0 240 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 212 L 740 60 L 1440 197 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 190 L 740 38 L 1440 175"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 190 L 740 38 L 1440 175"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="740"
              cy="38"
              r="20"
              fill={`url(#apexGlow-${id})`}
              opacity="0.95"
            />
          </g>
        )}

        {/* ── Variant 5: Asymmetric Carved Shelf V Cut ── */}
        {variant === "v-down-carved" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 68 L 1040 118 L 460 188 L 0 48 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 48 L 460 188 L 460 212 L 0 72 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 460 188 L 1040 118 L 1040 142 L 460 212 Z"
              fill={rightBevelFill}
            />
            <path
              d="M 1040 118 L 1440 68 L 1440 92 L 1040 142 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 72 L 460 212 L 1040 142 L 1440 92 L 1440 128 L 1040 175 L 460 240 L 0 108 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 72 L 460 212 L 1040 142 L 1440 92 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 48 L 460 188 L 1040 118 L 1440 68"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 48 L 460 188 L 1040 118 L 1440 68"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="460"
              cy="188"
              r="18"
              fill={`url(#apexGlow-${id})`}
              opacity="0.9"
            />
          </g>
        )}

        {/* ── Variant 6: Inverted Broad Asymmetric V ── */}
        {variant === "v-up-wide" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 155 L 960 48 L 0 180 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 180 L 960 48 L 960 70 L 0 202 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 960 48 L 1440 155 L 1440 177 L 960 70 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 202 L 960 70 L 1440 177 L 1440 212 L 960 105 L 0 238 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 202 L 960 70 L 1440 177 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 180 L 960 48 L 1440 155"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 180 L 960 48 L 1440 155"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="960"
              cy="48"
              r="18"
              fill={`url(#apexGlow-${id})`}
              opacity="0.9"
            />
          </g>
        )}

        {/* ── Variant 7: Wide Horizon Chevron V (Final CTA Gate) ── */}
        {variant === "v-chevron-horizon" && (
          <g>
            {/* Upper Slab */}
            <path
              d="M 0 0 L 1440 0 L 1440 75 L 1180 110 L 720 178 L 260 110 L 0 75 Z"
              fill={topColor}
            />

            {/* 3D Chiseled Bevel Shelf */}
            <path
              d="M 0 75 L 260 110 L 260 132 L 0 97 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 260 110 L 720 178 L 720 200 L 260 132 Z"
              fill={leftBevelFill}
            />
            <path
              d="M 720 178 L 1180 110 L 1180 132 L 720 200 Z"
              fill={rightBevelFill}
            />
            <path
              d="M 1180 110 L 1440 75 L 1440 97 L 1180 132 Z"
              fill={rightBevelFill}
            />

            {/* Cast Occlusion Shadow */}
            <path
              d="M 0 97 L 260 132 L 720 200 L 1180 132 L 1440 97 L 1440 130 L 1180 165 L 720 235 L 260 165 L 0 130 Z"
              fill={`url(#castShadow-${id})`}
            />

            {/* Lower Slab */}
            <path
              d="M 0 97 L 260 132 L 720 200 L 1180 132 L 1440 97 L 1440 240 L 0 240 Z"
              fill={bottomColor}
            />

            {/* Cyan Ambient Glow */}
            <path
              d="M 0 75 L 260 110 L 720 178 L 1180 110 L 1440 75"
              fill="none"
              stroke="#18cb96"
              strokeWidth="6"
              strokeOpacity={glowOpacity}
              filter={`url(#cyanGlow-${id})`}
            />

            {/* Crisp Rim Laser Highlight */}
            <path
              d="M 0 75 L 260 110 L 720 178 L 1180 110 L 1440 75"
              fill="none"
              stroke={`url(#rimGrad-${id})`}
              strokeWidth="1.75"
              strokeOpacity={rimOpacity}
              strokeLinecap="round"
            />

            {/* Apex Vertex Flare */}
            <circle
              cx="720"
              cy="178"
              r="22"
              fill={`url(#apexGlow-${id})`}
              opacity="0.95"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
