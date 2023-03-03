'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4e9ba82822b61878f489cd2e457b45cd",
"index.html": "2f509376e0425b391dacc3111fcf1025",
"/": "2f509376e0425b391dacc3111fcf1025",
"main.dart.js": "670578018819243b8e0b97ea179b8d32",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "61bfcb308b855369bcd995bdd7ec8a56",
"icons/Icon-192.png": "167f1086bb50ce8e847de593b5f9d3bb",
"icons/Icon-maskable-192.png": "167f1086bb50ce8e847de593b5f9d3bb",
"icons/Icon-maskable-512.png": "c02a59252f6775ddfd38febe4a8918fe",
"icons/Icon-512.png": "c02a59252f6775ddfd38febe4a8918fe",
"manifest.json": "d4597416cedcf02dc3c35d0ecaf1ed62",
"assets/AssetManifest.json": "c9763180f3396227300ac2140ac1afc0",
"assets/NOTICES": "eff3749387124a198becde8d04871083",
"assets/FontManifest.json": "279ebc45e8e9d4ae6240038980aab66c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/explore1.jpg": "cae0645ad9f510cee983986ca8f9f09d",
"assets/assets/images/zaralogo.jpg": "6416502e8a6f965ca43fd0c8629f8807",
"assets/assets/images/nikelogo.jpg": "4a2be6b6c4f4a54cdbe4e4ea37cc2074",
"assets/assets/images/explore2.jpg": "33d3e829e1f6e9d8ebd659ef5f204fde",
"assets/assets/images/collab.json": "ea25baf6fe7364114ca3d4e5c0b3b038",
"assets/assets/images/guccilogo.jpg": "af52cdc959d413a487536eaae59d39e6",
"assets/assets/images/explore3.jpg": "835465b520e116ed2b960e1ac5a5c920",
"assets/assets/images/explore7.jpg": "05955645fabd733cb8f116e7e1dbc41c",
"assets/assets/images/background2.jpg": "da6933314c1edf61865bfce17a4b4661",
"assets/assets/images/nikehoodie.jpg": "a8eeb8d541403af27a5ddde49c0db935",
"assets/assets/images/explore6.jpg": "baf8d0459aa50e4389d5bbb16e864f60",
"assets/assets/images/explore4.jpg": "cd8a3f3723d9ff32e66e4e6c6127b329",
"assets/assets/images/nikegrey.jpg": "f5090687cd04ae82f09af367ff4964af",
"assets/assets/images/explore5.jpg": "095b37dc5bd68cc0650a8b6720a81542",
"assets/assets/images/adidasjacket.jpg": "a7e62f4d5a645e5be20e9d8722093543",
"assets/assets/images/background.jpg": "2269777832199c846217562ae6986dc1",
"assets/assets/images/background.png": "17d20559ee1c8977cb33e4f2227e7524",
"assets/assets/images/search/searchitem3.jpg": "a9842e8ae0c84bc00ef63209500432d7",
"assets/assets/images/search/searchitem2.jpg": "1cd0eb567eb513c4f9f49a344f5ac46b",
"assets/assets/images/search/searchitem1.jpg": "506c1e50bd66e012cc00ece9b77277c3",
"assets/assets/images/search/searchitem5.jpg": "fb598a7ace53d253a1525e8877b69edf",
"assets/assets/images/search/searchitem4.jpg": "0468c45ee799d9fa18ab401386351918",
"assets/assets/images/search/searchitem6.jpg": "810cfc591db2fa4471c28b073ae4a98a",
"assets/assets/images/search/popularsearchitem7.jpg": "8fde1db734bc1fa5ff25d461afb526da",
"assets/assets/images/search/popularsearchitem6.jpg": "bd5778915eb3917bfbc9049e1a8fa7e5",
"assets/assets/images/search/popularsearchitem4.jpg": "75872fc119c75a0ee5c4a93005996a12",
"assets/assets/images/search/popularsearchitem5.jpg": "e5616a133d8afd0f11c378ed7679ff18",
"assets/assets/images/search/popularsearchitem1.jpg": "f25aba81798a5efbc0bc1689fbc0bda6",
"assets/assets/images/search/popularsearchitem2.jpg": "bbf00096720629b53013272224d5a081",
"assets/assets/images/search/popularsearchitem3.jpg": "3cee3170421b6b62ad0594706a18afa5",
"assets/assets/images/search/popularsearchitem8.jpg": "5148dde74c0989e68d03962fd8630be3",
"assets/assets/images/pp.jpg": "ce08d63ced0e8acc1ddd3bb2a0ed053b",
"assets/assets/images/avatar3.jpg": "7b61a497d520eca7565bca7baf0068c4",
"assets/assets/images/avatar2.jpg": "f167b97223b6459bc48f64e2df09338e",
"assets/assets/images/adidaslogo.jpg": "c8c72ca9a9a78fd652ece2cb6d748a12",
"assets/assets/images/avatar1.jpg": "c4ada2073ea0b7bc7a897ab95085091c",
"assets/assets/images/explore8.jpg": "93b4a08547926cbc5d931c40eee2bff8",
"assets/assets/images/update2.jpg": "307fa8f4afcc5fcc941ebfe610e68994",
"assets/assets/images/explore9.jpg": "fcf18fdfe06ba0d1564c540a4bd1a920",
"assets/assets/images/explore16.jpg": "b4e6b0f1523bd517a46cd99aa2336e02",
"assets/assets/images/explore14.jpg": "e549b01fb85c52f5acb22469252c9c60",
"assets/assets/images/update1.jpg": "3217f4826928cc6feee5fcd59a844935",
"assets/assets/images/explore15.jpg": "52fa5c40d9a9c124cf86811d143eca4b",
"assets/assets/images/explore11.jpg": "61ecbd31be708f423f8e5aab039cd940",
"assets/assets/images/nikeblack.jpg": "af2dde7f63b5188929da3639a98d5d86",
"assets/assets/images/explore10.jpg": "df47a6fa56aa5168509c9e483925555c",
"assets/assets/images/explore12.jpg": "b010913474fe1b93ff0dfda61715719c",
"assets/assets/images/explore13.jpg": "3cc2a99b4769c04ae72a889452cd0c55",
"assets/assets/icons/Log%2520Out.svg": "10ec1035444bf03dbe619777df8b63b1",
"assets/assets/icons/Search.svg": "a9e302ad596e2e96d45f14d1d9e3faea",
"assets/assets/icons/High-heels.svg": "772df342cfafd757a2c642fee831393e",
"assets/assets/icons/CourseBubble.png": "9950998cd630f3c5d3c30dab329e2ea0",
"assets/assets/icons/Home.svg": "edec7ca4818325b957c6a580877f201f",
"assets/assets/icons/Time%2520Circle.svg": "6261512ddefaced9048ef9941a37794e",
"assets/assets/icons/Woman-dress.svg": "d4064eb8184f1a7bea5d79e1e1f8edef",
"assets/assets/icons/Show.svg": "10ce96742cc9fe6eaa764c6126b8dd38",
"assets/assets/icons/Man-Pants.svg": "22baab6d09161d9d81a68fa6c2907be2",
"assets/assets/icons/Paper%2520Bag.svg": "e3107081c5e5c69b89751419736b11a4",
"assets/assets/icons/Profile-active.svg": "426edeb1c28e6f8c3ac9366e98d190f9",
"assets/assets/icons/Lock.svg": "ad36ea973feaec8bd3ef50874e5edfa2",
"assets/assets/icons/Discount.svg": "86af5c5951ae555d1065b018903455f8",
"assets/assets/icons/Man-Shoes.svg": "69e1256db7abbf861fcee360b5c5d164",
"assets/assets/icons/clemson.png": "da9164ba4e45be9229ddfea427eead6c",
"assets/assets/icons/clemsonlight.png": "ed5acbde001771ce01e6a8bc277fe597",
"assets/assets/icons/Home-active.svg": "e1b4cd7fa8054dc62935300061325c68",
"assets/assets/icons/Wallet.svg": "acbde0ef8ea29c525f939d0f4751f020",
"assets/assets/icons/Category.svg": "6a739cee920ba46fe4203d5071105f11",
"assets/assets/icons/Star-active.svg": "be89a612c4e61aec2288129f07f5bf5a",
"assets/assets/icons/Info%2520Square.svg": "80c5c4b5efdce37e56af4b22e03d18f3",
"assets/assets/icons/Bag.svg": "559b7b5b0ace127ada2087a72357cc76",
"assets/assets/icons/Hide.svg": "893540164a6d835ffe79e4677d102254",
"assets/assets/icons/Category-active.svg": "3a316ab85e554794c04bd76ec053e394",
"assets/assets/icons/Message.svg": "744816e3882cbc0a9b02a89b96c752cc",
"assets/assets/icons/Man-Clothes.svg": "8ea77db9660f70d9b3eed3a950656273",
"assets/assets/icons/Chat.svg": "1d37c91488282a3a84c8c6ed7612a5d5",
"assets/assets/icons/Notification.svg": "0a719e457d32102e8d165b3e5d89e65f",
"assets/assets/icons/Google.svg": "0c0e90b2d7c1110f60073a0594bee169",
"assets/assets/icons/More.svg": "4e8312dda7c42b1af55c0f851bbb8727",
"assets/assets/icons/Star.svg": "27dfdef97553aeb7fbd74a0bc851f85a",
"assets/assets/icons/Pencil.svg": "9fb1499acc6c71dc67e54cab5856260e",
"assets/assets/icons/Success.svg": "31a2291f004c8e8738f8bd004b9c2a41",
"assets/assets/icons/Call.svg": "af8bd7cb364eb77922e2b53bc2bbda3a",
"assets/assets/icons/Location.svg": "b054987bce5834b8bdfafd42867b30ad",
"assets/assets/icons/Profile.svg": "e93c3d32f46408f99e2cb4d430b2c829",
"assets/assets/icons/Filter.svg": "c80591c9d0b9409a7b80f5a7fbe52644",
"assets/assets/icons/Arrow-left.svg": "74e0c05c8511878e085b346a6f1c3f48",
"assets/assets/icons/Notification-active.svg": "20742cb094572035a597cbf9622506f2",
"assets/assets/icons/Bookmark.svg": "9ef4705fc51a83733408eef82d5b9b21",
"assets/assets/icons/Bookmark-active.svg": "6dacb9f3576b8ca4804b03b30fa8243f",
"assets/assets/icons/shopping%2520illustration.svg": "8f712c73421febd0e193c9f0761bcd14",
"assets/assets/icons/Heart.svg": "7468b79916a27274981c7a0b97d86c7a",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
