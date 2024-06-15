'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6bae26890069fe2ddefd73d777eb8122",
"assets/AssetManifest.bin.json": "c8f59eb16c6ccd5d7337799e763edcc6",
"assets/AssetManifest.json": "89494e16e291e8031fa2086fae421543",
"assets/assets/fonts/JogumanOksusu-Color.otf": "5f3a777b151c08a77a358ab4bbf27fab",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/SUIT-Bold.otf": "7ae1273a03489307427e1e726c6bc5fc",
"assets/assets/img/0.png": "edba6980d8c1c21c1340c22b34aa5048",
"assets/assets/img/1.png": "9e1839dbc31ba967085a26bc3efd306f",
"assets/assets/img/2.png": "490516e1f5d8a382e5e734e8808335d7",
"assets/assets/img/3.png": "aeb97f66c329d973e3294f4bef3e6854",
"assets/assets/img/4.png": "cadd8e1765b772e208997a2bf5888e24",
"assets/assets/img/5.png": "d84c8294949c7bc1d3465dce145a8eab",
"assets/assets/img/6.png": "21a2d68ff37366adaf6ee9d5e378e4cf",
"assets/assets/img/7.png": "dadd91b578eb9e88b5740dab45745d9c",
"assets/assets/img/8.png": "bff31ef7e1ec7b3ecfbee3698411da09",
"assets/assets/img/9.png": "e8fbef5fb3cd9bbba89182011d3dcd6c",
"assets/assets/img/big_brachio_body.png": "9cad5a36aa981ee01f634c68f234fab0",
"assets/assets/img/big_brachio_hand.png": "4903e8cd86c66683ecb9f44b3001a7d5",
"assets/assets/img/brachio_8.png": "aa62c65d08cad7b7429c2de3d866e70d",
"assets/assets/img/brachio_8_body.png": "cb81598940a28512381dc9a1596985ee",
"assets/assets/img/brachio_8_hand.png": "4fb5a5779074963a38ba4650d3e6d63c",
"assets/assets/img/brachio_body.png": "82b440a53de32452ca34cd41e175e025",
"assets/assets/img/brachio_bodytail.png": "2027bb42f0f7724db1c6ac8aae1263a4",
"assets/assets/img/brachio_hand.png": "192d491e15664bdaf676d14ea70751da",
"assets/assets/img/brachio_tail.png": "bfb0f76386d0628f0cadafd425fdb20c",
"assets/assets/img/clear.png": "b75d5ce193ff4eed6448dfc626f338df",
"assets/assets/img/delete.png": "5000a36e164b6d98a97b9ba6cc492b61",
"assets/assets/img/division.png": "16bc1dda052cb71213652d518a07f82e",
"assets/assets/img/dot.png": "0d6da0937ae080cf07aff5c1de6b6e44",
"assets/assets/img/equal.png": "7b9033c190c705081a66521520b1e8af",
"assets/assets/img/equal_icon.png": "ff2177512f22c573987346a168fa7be2",
"assets/assets/img/minus.png": "612d9079091bd8b3d43987e39e006b76",
"assets/assets/img/multiple.png": "6119ca0bb6e3fc098c6f14ad7e7575c4",
"assets/assets/img/percent.png": "5b435c32207ab22e123acf01d78130e1",
"assets/assets/img/plus.png": "c3e256184af89501cc0e3b16797f883e",
"assets/assets/sounds/typewriter_snippet_02.wav": "0047cd02d984c7ae0736d859a7ac0a23",
"assets/FontManifest.json": "4d2f13675d63799da46a11491579f02f",
"assets/fonts/MaterialIcons-Regular.otf": "6f0ae34bdcad22f8932e0c24b8400301",
"assets/NOTICES": "63fe5f27ecc92c109ef508a49ecccd6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3db8eb358faf28f72a9050b0e927509e",
"/": "3db8eb358faf28f72a9050b0e927509e",
"main.dart.js": "20ff136f9eb802bc1d1fcb1fcf14d3a4",
"manifest.json": "75ee4d7df7310e304ab0db7c1ac1cab3",
"version.json": "bbfe66aaeb73d5bb8be140269d74efbe"};
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
