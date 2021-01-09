const staticCacheName = 'site-static-v1'
const assets = [
    '/',
    'index.html',
    'offline.html',
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

// listen for requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then( () => {
            return fetch(event.request)
            .catch( () => caches.match('offline.html'))
        })
    )
})

// activate the service worker
self.addEventListener('activate', event => {
    const cacheWhiteList = []
    cacheWhiteList.push(staticCacheName)

    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map( cacheName => {
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})