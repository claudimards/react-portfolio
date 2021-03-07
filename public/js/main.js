// verifica se o navegador é compativel com service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then( reg => {
        //console.log('Service worker registered', reg)
    })
    .catch( error => {
        //console.log('service work not registered', error)
    })
}