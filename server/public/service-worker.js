importScripts("/precache-manifest.57a39a9c7d9db24e84bfa011fa011268.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/employees',
    new workbox.strategies.NetworkFirst({
      cacheName: 'roberts-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

