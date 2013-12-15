

var exec = require('cordova/exec');

module.exports = {
    // searchText is required.
    // If nearToCoords is null, the map will search near to the current location
    searchNear:function(searchTerm, nearToCoords ) {
        exec(null,null,"MapLauncher","searchNear", [{
            searchTerm:searchTerm,
            center:nearToCoords
        }]);
    },

    // toLabeledLocation is required
    // if fromLabeledLocation is null, the current location will be used
    getDirections:function(toLabeledLocation,fromLabeledLocation) {
        exec(null,null,"MapLauncher","getDirections", [{
            startPosition:fromLabeledLocation,
            endPosition  :toLabeledLocation
        }]);
    },

    LabeledLocation:function(label,lat,lon) {
        this.label = label;
        if(lat && lon) {
            this.coordinates = {"latitude":lat,"longitude":lon};
        }
    }
};
