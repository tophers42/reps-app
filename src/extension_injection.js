// Here You can type your custom JavaScript...
var $head = window.jQuery('head')
//Don't need this when live app is running om home page
//$head.prepend("<link href='https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css' rel='stylesheet' />")
//$head.prepend("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />")

//inject('https://maps.googleapis.com/maps/api/js?key=[GOOGLE_MAPS_KEY_HERE]&libraries=places')
//inject('https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js')
function inject (src) {
  var s = document.createElement('script')
    s.src = src
    s.type = "text/javascript"
    s.async = true
    s.defer = true
  $head.prepend(s)
}
var interval = setInterval(function () {
    if (window.google && L.mapbox) {
        clearInterval(interval)
        inject('https://localhost:9000/dist/bundle.js')
    }
}, 10)
