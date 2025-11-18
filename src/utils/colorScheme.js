// Source - https://stackoverflow.com/a/68824350
// Posted by mdcq, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-12, License - CC BY-SA 4.0

const DEBUG = false;

export function initColorScheme() {
    // Initial state => set based on user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        DEBUG && console.log("Initial setting color scheme to dark");
        document.documentElement.classList.add("dark");
        return "dark";
    } else {
        DEBUG && console.log("Initial setting color scheme to light");
        document.documentElement.classList.add("light");
        return "light";
    }
}

export function toggleColorScheme(mode) {
    // Using "light" color scheme => switch to dark
    if (document.documentElement.classList.contains("light") && mode === "dark") {
        DEBUG && console.log("Using light color scheme => switching to dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        return "dark";
    }

    // Using "dark" color scheme => switch to light
    if (document.documentElement.classList.contains("dark") && mode === "light") {
        DEBUG && console.log("Using dark color scheme => switching to light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        return "light";
    }
}