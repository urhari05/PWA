var deferredprompt;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service Worker Registered");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  deferredprompt = event;
  return false;
});
