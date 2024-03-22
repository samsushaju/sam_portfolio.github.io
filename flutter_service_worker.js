'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83bfe5425e3ec58505984ccaf7746e04",
"assets/AssetManifest.bin.json": "4337077f737022e4bcf7a8c9b8d64612",
"assets/AssetManifest.json": "22798c77042e7a7c89fada10abe8b80d",
"assets/assets/3d-rendered-fish-bowl-with-goldfish-it.png": "47ca125c41be816916167f61437fcc92",
"assets/assets/3d_laptop_student%2520copy.png": "eadf188bbef468efced93580c726b3df",
"assets/assets/3d_laptop_student1%2520copy.png": "6e35598a75723a95353ea9369e5cbb76",
"assets/assets/3d_laptop_student2%2520copy.png": "1307f8cda90866f6e568e6657e5fd5b5",
"assets/assets/3d_laptop_student3%2520copy.png": "7e0d177e0d3424f6f4be85fcd9c12a50",
"assets/assets/Blank%2520doc.png": "10ccd3b8a91247fa3ababca05a5d483b",
"assets/assets/book.png": "986351c4aa4d7769250d80ab594be5c0",
"assets/assets/coffee.png": "c893891e7f4118856a37c6af53a2ffe1",
"assets/assets/document.png": "4ae40701877a0bcc51e93161ad69d88e",
"assets/assets/freelancer_sitting_on_laptop%2520copy.png": "1a56d2dcd346f91644a098baf312e811",
"assets/assets/hansome_boy_33%2520copy.png": "1076f933b5373579cc92f4941313f4aa",
"assets/assets/Hrblusky.png": "84b2c72819773e9ecda4d2fb8a93eada",
"assets/assets/iphone-mockup-003.png": "7625051fd2f26e17904beeb2f6ab4dae",
"assets/assets/laptop.png": "cf20894a41c1955764d5a35e49ecea29",
"assets/assets/Mobile.png": "3a0c23906e44562a8d0993e287fe6880",
"assets/assets/MobileArtboard%25203@2x.png": "54312c1c69957d1d66049df0fa0f23d1",
"assets/assets/Mteamz.png": "777dd9a70d1c7ec3cc8e714fe6008327",
"assets/assets/mteamzlogo.png": "7257892450f3da2e914b286aec99959b",
"assets/assets/notepad.png": "3c1420b9148dde2c804b58653675ce8e",
"assets/assets/plant.png": "ed7a8760506642335212ee41cf1f3fa9",
"assets/assets/Sam%2520CV%2520-%2520March-2024.pdf": "f7f976fd24145dd7e1e0fcf6200fec3c",
"assets/assets/tablewood.png": "29b645b4084821e92f12d2b93b40309e",
"assets/assets/Tracker.png": "1f7a48d99cc56e292b1a8952765b87d1",
"assets/assets/workSpaceArtboard%252015.png": "ea78b75f36f82316c398d80019964927",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dd31736b522210308d57f5d312754f59",
"assets/Loading.png": "e0a4130d9a9056f357efd7d34a12b2de",
"assets/NOTICES": "ffeb66b37fe6addd5cc1b3c67efff2ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "06e3cb2624db08b9c889e70fdc20e0bd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efd8b05dcb3b52ba07eda66114c208b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e3a1382248f1481f85c8df41542f0179",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a740984797c19324d86be12082f20c82",
"/": "a740984797c19324d86be12082f20c82",
"main.dart.js": "a74c863ef24a5ef0f4f8aa6044059303",
"manifest.json": "01dd59f21aa6f181c40338248238a741",
"version.json": "9a0432c153bd1c329f552e27d310cb6c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
