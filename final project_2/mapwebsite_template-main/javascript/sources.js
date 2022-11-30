// zoomed in line
// zoomed out fill with 1 opacity
// add in hover box
// slider for hover




// Adding Sources
function load_layers() {
    // Results
    // blkgrp_exp
/*    map.addLayer({
        id:'education',
        type:'symbol',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.075ktki3'
        },
        'source-layer': 'Education-98krso',

});

    map.addLayer({
        id:'health',
        type:'symbol',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.cma49xue'
        },
        'source-layer': 'health-2uy1h1',
    });


    map.addLayer({
        id:'trade',
        type:'symbol',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.3qju3t2l'
        },
        'source-layer': 'Tradecentre-4rn07x',
    });
*/

    map.addLayer({
        id:'access',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.1zwxpzmc'
        },
        'source-layer': 'Accessibility-aexffp',
        'paint': {
            'fill-color': [
               "step",
                ["get", "k_complexity"],
                "#fcfdbf",
                3,
                "#fe9f6d",
                5,
                "#de4968",
                10,
                "#8c2981",
                15,
                "#3b0f70",
                20,
                "#000004"
              ],
              'fill-opacity': 0.5
        },
        'layout': {
            'visibility': 'none',
        }
    });

    
    map.addLayer({
        id:'floodzone',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.brylfns0'
        },
              'source-layer': 'Flood_Risk_Areas-1jjt6w',

            'paint': {
            'fill-opacity': 0.5,
            'fill-color': [
               "step",
                ["get", "gridcode"],
                "#ADD8E6",
                2,
                "#ADD8E6",
                3,
                "#ADD8E6",
                4,
                "#ADD8E6"
              ],
        },
        
        'layout': {
            'visibility': 'none',
        }
    });

        map.addLayer({
        id:'slope',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.5wi8ayv1'
        },
        'source-layer': 'Slope_2008_f-cfz0jz',

            'paint': {
            'fill-color': [
               "step",
                ["get", "gridcode"],
                "#FFCE03",
                10,
                "#FD9A01",
                20,
                "#FD6104",
                30,
                "#FF2C05",
              ],
            'fill-opacity': 0.5
        },
        
        'layout': {
            'visibility': 'none',
        }
    });
        map.addLayer({
        id:'informal',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.1tiuk55k'
        },
        'source-layer': 'informal_merged-cfkjgp',

            'paint': {
            'fill-color': [
               "step",
                ["get", "gridcode"],
                "#F7D6D0",
                3,
                "#F7D6D0",
                5,
                "#F7D6D0"
              ],
            'fill-opacity': 0.5
        },
        
        'layout': {
            'visibility': 'none',
        }
    });

/*    map.addLayer({
        id:'road',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.0nxloer5'
        },
      'source-layer': 'Road_network-92m4hn',
          'paint': {
      'fill-color': [
               "step",
                ["get", "status"],
                "#F7D6D0",
                "paved",
                "#F7D6D0",
                "unpaved",
                "#F7D6D0"
              ],
      'fill-opacity': 0.5
    },
        'layout': {
            'visibility': 'none',
        }
    });
*/
    map.addLayer({
        id:'water',
        type:'fill',
        source:{
            'type':'vector',
            'url':'jm2369.9sqwz8a5'
        },
      'source-layer': 'Waterbodies-7rb0f5',
          'paint': {
      'fill-color': [
               "step",
                ["get", "objectid"],
                "#F7D6D0",
                3,
                "#F7D6D0",
                5,
                "#F7D6D0"
              ],
      'fill-opacity': 0.5
    },
        'layout': {
            'visibility': 'none',
        }
    });
                map.addLayer({
        id:'landslide',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.7exvs94a'
        },
      'source-layer': 'Landslide_Risk_Areas-cj9lr6',
                'paint': {
      'fill-color': [
               "step",
                ["get", "gridcode"],
                "#964B00",
                3,
                "#964B00",
                5,
                "#964B00"
              ],
      'fill-opacity': 0.5
    },
        'layout': {
            'visibility': 'none',
        }
    })
}
