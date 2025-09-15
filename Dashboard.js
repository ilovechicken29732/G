const STORAGE_KEY = "dashboard";

// Helpers
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

// Theme
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.style.setProperty('--nc-tx-1', '#fff');
    root.style.setProperty('--nc-bg-1', '#000');
  } else {
    root.style.setProperty('--nc-tx-1', '#000');
    root.style.setProperty('--nc-bg-1', '#fff');
  }
  saveJSON(STORAGE_KEY, { theme: mode });
}

document.addEventListener("DOMContentLoaded", () => {
  const state = loadJSON(STORAGE_KEY, { theme: "light" });
  const darkToggle = document.getElementById("darkModeInput");
  const openMode = document.getElementById("openMode");

  if (darkToggle) {
    darkToggle.checked = state.theme === "dark";
    applyTheme(state.theme);
    darkToggle.addEventListener("change", () =>
      applyTheme(darkToggle.checked ? "dark" : "light")
    );
  }

  if (openMode) {
    const options = [
      { v: "embed", t: "In this tab" },
      { v: "new", t: "In new tab" },
      { v: "blank", t: "In about:blank tab" },
      { v: "replace", t: "Replace this tab" },
      { v: "raw", t: "Raw link" }
    ];
    options.forEach(opt => {
      const o = document.createElement("option");
      o.value = opt.v;
      o.textContent = opt.t;
      if (state.openMode === opt.v) o.selected = true;
      openMode.appendChild(o);
    });
    openMode.addEventListener("change", () =>
      saveJSON(STORAGE_KEY, { ...state, openMode: openMode.value })
    );
  }
});
