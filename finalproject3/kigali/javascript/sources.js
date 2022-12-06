// zoomed in line
// zoomed out fill with 1 opacity
// add in hover box
// slider for hover




// Adding Sources
function load_layers() {

    map.addLayer({
          id:'road',
          type:'line',
          source:{
              'type':'vector',
              'url':'mapbox://jm2369.0nxloer5'
          },
        'source-layer': 'Road_network-92m4hn',
            'paint': {
        'line-color': [
                 "match",
                  ["get", "status"],
                  "Paved",
                  "#f0ead6",
                  "Unpaved",
                  "#b7c8c2",/* other */ '#ccc'
                ],
        'line-width': [
                 "match",
                  ["get", "status"],
                  "Paved",
                  3,
                  "Unpaved",
                  1,/* other */ 1
                ],

        'line-opacity': 0.7
      },
          'layout': {
          'visibility': 'none',
           }
      });
    // Results
    // blkgrp_exp
    map.addLayer({
        id:'education',
        type:'circle',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.075ktki3'
        },
        'source-layer': 'Education-98krso',
        'paint': {
        'circle-color':'#ff8882',
        },
             'layout': {
            'visibility': 'none',
        }

});

    map.addLayer({
        id:'health',
        type:'circle',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.cma49xue'
        },
        'source-layer': 'health-2uy1h1',
        'paint': {
        'circle-color':'#e4e69b',
        },
             'layout': {
            'visibility': 'none',
        }   
    });


    map.addLayer({
        id:'trade',
        type:'circle',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.3qju3t2l'
        },
        'source-layer': 'Tradecentre-4rn07x',
        'paint': {
        'circle-color':'#74bdcb',
        },
             'layout': {
            'visibility': 'none',
        }
    });


    map.addLayer({
        id:'water',
        type:'fill',
        source:{
            'type':'vector',
            'url':'jm2369.9sqwz8a5'
        },
      'source-layer': 'Waterbodies-7rb0f5',
          'paint': {
      'fill-color': "#F7D6D0",
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
                "#922c40",
                3,
                "#922c40",
                5,
                "#922c40"
              ],
      'fill-opacity': 0.8
    },
        'layout': {
            'visibility': 'none',
        }
    });

        map.addLayer({
        id:'access1',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.8gj7t9e5'
        },
        'source-layer': 'Accessibility_1-45hiww',
        'paint': {
            'fill-color':
            [
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
              'fill-opacity': 0.4
        },
        'layout': {
            'visibility': 'none',
        }
    });
        map.addLayer({
        id:'access2',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.95h1htzm'
        },
        'source-layer': 'Accessibility_2-cd82gq',
        'paint': {
            'fill-color':
            [
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
        id:'access3',
        type:'fill',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.3qq5mdb6'
        },
        'source-layer': 'Accessibility_3-c4l8bv',
        'paint': {
            'fill-color':
            [
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
        type:'line',
        source:{
            'type':'vector',
            'url':'mapbox://jm2369.1tiuk55k'
        },
        'source-layer': 'informal_merged-cfkjgp',

            'paint': {
            'line-color': '#0b1c47',
            'line-width': 2,
            'line-opacity': 0.7
        },

        'layout': {
            'visibility': 'none',
        }
    });
    }
