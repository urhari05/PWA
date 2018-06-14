self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service worker", event);
});

self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service worker", event);
  return self.clients.claim();
});
