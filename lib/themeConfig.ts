export type ThemeMode = "dark" | "light";

export interface ThemeColors {
  background: string;
  foreground: string;
  heading: string;
  body: string;
  muted: string;
  accent: string;
  border: string;
  borderStrong: string;
  surface: string;
  surfaceHover: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  colors: ThemeColors;
  particleColor: string;
  particleCount: number;
}

export const themes: Record<string, ThemeConfig> = {
  dark: {
    mode: "dark",
    colors: {
      background: "#07070A",
      foreground: "#F6F6F8",
      heading: "#FFFFFF",
      body: "#D6D9EA",
      muted: "#A4A2B2",
      accent: "#18CB96",
      border: "rgba(255,255,255,0.08)",
      borderStrong: "rgba(255,255,255,0.15)",
      surface: "rgba(255,255,255,0.03)",
      surfaceHover: "rgba(255,255,255,0.06)",
    },
    particleColor: "24, 203, 150",
    particleCount: 80,
  },
  light: {
    mode: "light",
    colors: {
      background: "#F4F5F7",
      foreground: "#1A1924",
      heading: "#0E0E12",
      body: "#3A3A4A",
      muted: "#6B697D",
      accent: "#18CB96",
      border: "rgba(0,0,0,0.08)",
      borderStrong: "rgba(0,0,0,0.15)",
      surface: "rgba(0,0,0,0.03)",
      surfaceHover: "rgba(0,0,0,0.06)",
    },
    particleColor: "24, 203, 150",
    particleCount: 40,
  },
};

export const themeModeFromClass = (className: string): ThemeMode => {
  if (className.includes("theme-light")) return "light";
  return "dark";
};
