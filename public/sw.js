const staticCacheName = 'site-static-v1'
const assets = [
    '/offline.html',
    '/css/offline.css'
]
const self = this

// install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName)
        .then( cache => {
            return cache.addAll(assets)
        })
    )
})