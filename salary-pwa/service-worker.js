const CACHE_NAME = "salary-v1";

const FILES = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/data.js",
    "./js/calculator.js",
    "./js/app.js",
    "./manifest.json"
];

self.addEventListener("install", event => {

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );

});

self.addEventListener("fetch", event => {

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );

});