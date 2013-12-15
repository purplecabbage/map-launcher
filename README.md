MapLauncher plugin usage:
===============


The MapLauncher plugin allows you to launch the Windows Phone Map application in a defined state.
You can either open maps in Directions view, or Map view, depending on the calls you make.
The user will need to press the back button to return to your app.

Somewhere in your code :
---

    // Search near the current location using a keyword :
    MapLauncher.searchNear("Malaysian Food");

    // Search for a keyword near a specific location :
    MapLauncher.searchNear("Wedding Chapel",{latitude:36.111224, longitude:-115.172194});

    // Get directions from the current location to a nearby keyword :
    MapLauncher.getDirections({label:"Malaysian Food"});

    // Get directions from a specific location to a nearby keyword :
    MapLauncher.getDirections({label:"Malaysian Food"},{coordinates:{latitude:36.111224, longitude:-115.172194}});
    
    