'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "79f2dd82e6f6898853545b581b4fb4d7",
"splash/img/light-2x.png": "3eefcf350a37a305967ee32c4a0f2e23",
"splash/img/dark-4x.png": "c75d5d51ad1aad3be7576c93490c2b00",
"splash/img/light-3x.png": "0a6b9290025a7c1ca654d4ea28b5ce48",
"splash/img/dark-3x.png": "0a6b9290025a7c1ca654d4ea28b5ce48",
"splash/img/light-4x.png": "c75d5d51ad1aad3be7576c93490c2b00",
"splash/img/dark-2x.png": "3eefcf350a37a305967ee32c4a0f2e23",
"splash/img/dark-1x.png": "ed367eb1bab3cffc24f4b1300d393ae8",
"splash/img/light-1x.png": "ed367eb1bab3cffc24f4b1300d393ae8",
"index.html": "55fed0d9d9fed5d54103d4ef05d3ecbc",
"/": "55fed0d9d9fed5d54103d4ef05d3ecbc",
"main.dart.js": "8b51cc26dff5cb9f7c891673da177312",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "40ba5c3e470f357ac0319f41a3d173bf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a591df6e66f23a00021d35fa5923ac95",
"assets/AssetManifest.json": "f7e584e1ce170445c0c5679d320ee0d0",
"assets/NOTICES": "3b7b973b948af0f0ef1b82bcb9206792",
"assets/FontManifest.json": "f477ffc5a4f1828ffbe010aa4eb65b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "8378a29d4672a0e03abde4c926aa6d8b",
"assets/fonts/MaterialIcons-Regular.otf": "6e271c610c70cdedd251c221d024298c",
"assets/assets/images/ciko.png": "32edf4356856f20edf8bb10581e08cda",
"assets/assets/images/Laundry.in.jpg": "16b9b715b097c7599aee0b663fe91018",
"assets/assets/images/splash.png": "0c7087725e82d1645ddb25033df4c2f6",
"assets/assets/images/GoNime.jpg": "16b0f8faf21835ea947f5bc41e8615fb",
"assets/assets/images/Hi-Farm.jpg": "f835131e112c76369bd6046fd0779d0e",
"assets/assets/images/UniTea.png": "1ad785d7729baa7c28828a8466af7aa7",
"assets/assets/images/UniTea.jpg": "e410eabc972883aefed7e303c290a9a3",
"assets/assets/images/AyamKita.jpg": "d7f283d31d6576686712154e1cf25a16",
"assets/assets/images/Marvelous.jpg": "6912987702d38aef79d4dde81ad8a97d",
"assets/assets/images/Locad.in.jpg": "ea7d4528f98703f144021b62acef251f",
"assets/assets/images/HiFarm.jpg": "f835131e112c76369bd6046fd0779d0e",
"assets/assets/logos/flutter.png": "c265d74cc3ed336c06bbae18c4b6124b",
"assets/assets/logos/firebase.png": "c313b1c7658686966a82473bfaf92aa0",
"assets/assets/logos/js.png": "55ca8535da9ad979e178cf8e041e16c6",
"assets/assets/logos/mysql.png": "bab2c760c60f17191cb3a002e08a3dbf",
"assets/assets/logos/swift.png": "23cc6c7046217d8c37bf7c1e7ab6092b",
"assets/assets/logos/php.png": "3faea63afe7015af0fedd5ccc3a2e707",
"assets/assets/logos/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/logos/sqlite.png": "fe3d64425ebe99561df9c18bdf83c023",
"assets/assets/logos/laravel.png": "c839e1ed048eee27877c8b2b91560937",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/Poppins-Thin.ttf": "010bf26d1f08aa72a7993f1e50bc0a66",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
