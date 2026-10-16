/**
 * Smoothly scrolls to the very top of the page.
 * Used instead of an in-page "#hero" anchor: the anchor is offset by the fixed header
 * (scroll-padding) and can stop short or do nothing when the hash is already "#hero".
 */
export function scrollToTop(event?: { preventDefault(): void }) {
  event?.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  // Clear any stale #section from the URL.
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
