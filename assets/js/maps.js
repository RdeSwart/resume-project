function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    const locations = [{
            lat: 40.785091,
            lng: -73.968285
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        }
    ];


    // NOTE: this map method here is a built-in JavaScript method.
    // Don't get it confused with the Google Map that we're working with.
    // The map method in JavaScript works similar to a forEach() function.
    // The difference is that this returns an array with the results of looping through each item in our locations array.
    // The map method can take up to three arguments.
    // We're going to use two in our example here:
    // The first argument that we're going to pass into our function is location, which is the current value of where we are in the array as we're looping through.
    // The second one is i, which is the index number of where we currently are in the array.
    const markers = locations.map(function (location, i) {
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const markerClusterer = new markerClusterer.MarkerClusterer({
        map,
        markers
    });
}

// Need to come back to this to get the cluster locations working!!