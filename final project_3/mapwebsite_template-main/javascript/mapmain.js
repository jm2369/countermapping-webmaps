mapboxgl.accessToken = 'pk.eyJ1Ijoiam0yMzY5IiwiYSI6ImNsOHg2NTQzdzAzZXMzbm1mMmZpZGl3MnYifQ.s7yHMqaaZCz4CNsHlMxioQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jm2369/clal7z7u1000915phlkmidhka',
    center: [30.12733, -1.92971],
    zoom: 11,
    projection:{name:'mercator'}
});

var active_layer = "slum";


// Adjusts the borders of the active layer when it is clicked
function adjust_active_layer(clickedLayer, property_types) {

    console.log(clickedLayer);

    map.on('mousemove', (event) => {
        const boundaries = map.queryRenderedFeatures(event.point, {
        layers: [clickedLayer]
        });
        document.getElementById('hover').innerHTML = boundaries.length
        ? `<p><strong><em>${boundaries[0].properties[property_types[clickedLayer]]}</strong> units</em></p>`
        : `<p>Hover over an area!</p>`;
        });
}

// Checks to see if the layers in the array were properly loaded on the map
function layers_exist(layer_list) {
    for (i = 0; i < layer_list.length; i++) {
        if (!map.getLayer(layer_list[i])) {
            return false;
        }
    }

    return true;
}

// given a group, makes that group visible and the others invisible
function make_visible(group, result_layers) {

    to_remove = []

    for (let i = 0; i < result_layers.length; i++) {
        let layer = result_layers[i];
        let visibility = map.getLayoutProperty(
            layer,
            'visibility'
        );

        if(visibility != 'none') {
            to_remove.push(layer);
        }
    }
    make_invisible(to_remove);

    for (let i = 0; i < group.length; i++) {
        let layer = group[i];

        map.setLayoutProperty(
            layer,
            'visibility',
            'visible'
        );
        map.moveLayer(
            layer,
            'informal'
        );
    }
}

// given a group, makes that group invisible
function make_invisible(group) {
    for (let i = 0; i < group.length; i++) {
        map.setLayoutProperty(
            group[i],
            'visibility',
            'none'
        );
    }
}

// Wait until the map has finished loading.
map.on('load', () => {
    load_layers();

    const situational = ['access1', 'access2', 'access3', 'road'];
    array = []

    make_visible(situational, array)


//     Load layers of data
    map.setLayoutProperty('water', 'visibility', 'none');
    map.setLayoutProperty('landslide', 'visibility', 'none');
    // map.setLayoutProperty('access', 'visibility', 'none');
    map.setLayoutProperty('floodzone', 'visibility', 'none');
    map.setLayoutProperty('slope', 'visibility', 'none');

    map.getCanvas().style.cursor = 'default';
});



// After the last frame rendered before the map enters an "idle" state.
 map.on('idle', () => {
     // Enumerate ids of the layers.
    const situational = ['access1', 'access2', 'access3', 'road'];
    const site = ['water', 'slope'];
    const results_layers = [].concat(situational, site);
    const slum = ['informal']
    const flood = ['floodzone']
    const land = ['landslide']


     const property_types = {
        'water' : 'objectid',
        'landslide' : 'gridcode',
        'access1': 'k_complexity',
        'informal': 'gridcode',
        'floodzone' : 'gridcode',
        'slope' : 'gridcode',
     };

     const layer_mapping = {
         'site': site,
         'situational': situational,
         'slum': slum,
         'flood': flood,
         'landslide': land,
     };

 // });

     // If these layers were not added to the map, abort
     if (!layers_exist(situational) || !layers_exist(site) ) {
         console.log("aborting");
         return;
     }




     $(document).ready(function(){
         $('.ui.accordion').accordion()

         $('.toggle').click(function(){
             $('.ui.accordion').accordion('toggle', 0);
         });

         $('input[type="radio"]').click(function(){
             if($(this).is(":checked")){
                 let name = this.getAttribute("id");
                 let group = layer_mapping[name];
                 console.log("assigning in radio buttons")
                 active_layer = name;
                 make_visible(group, results_layers);
                 adjust_active_layer(this, property_types);
             }
         });
         $('input[type="checkbox"]').click(function(){
             let name = this.getAttribute("id");
             console.log(name);
             let group = layer_mapping[name];
             let none = []

             if($(this).is(":checked")){
                 if(name == "situational") {
                     map.setLayoutProperty(
                         'situational',
                         'visibility',
                         'visible'
                     );
                 } else {
                     make_visible(group, none);
                 }
             } else if($(this).is(":not(:checked)")){
                 if(name == "site") {
                     map.setLayoutProperty(
                       'site',
                         'visibility',
                         'none'
                     );
                 } else {
                     make_invisible(group);
                 }
             }
         });
     });

//  map.on('mousemove', (event) => {
//         if (active_layer == 'situational') {
//             active_layer = 'situational'
//          } else if (active_layer == 'site') {
//              active_layer = 'site'
//          }
//
//          const boundaries = map.queryRenderedFeatures(event.point, {
//          layers: layer_mapping[active_layer]
//          });
//
//          console.log("active layer " + active_layer);
//          value = boundaries[0].properties[property_types[active_layer]]
//
//          if (value == undefined) {
//              value = "No Data"
//          } else {
//              value = Math.floor(value * 100);
//              value = String(value).concat("%");
//          }
//
//          if (active_layer == 'situational') {
//
//              if (value == "No Data") {
//                  document.getElementById('hover').innerHTML = boundaries.length
//               ? `<p>No Data</p>`
//                  : `<p>Hover over an area!</p>`;
//             } else {
//                  document.getElementById('hover').innerHTML = boundaries.length
//                  ? `<p>There's a <strong><em>${value}</strong></em> chance that two people living in this tract are different races</p>`
//                  : `<p>Hover over an area!</p>`;
//              }
//          } else if (active_layer == 'site') {
//
//              if (value == "No Data") {
//                  document.getElementById('hover').innerHTML = boundaries.length
//                  ? `<p>No Data</p>`
//                  : `<p>Hover over an area!</p>`;
//              } else {
//                  document.getElementById('hover').innerHTML = boundaries.length
//                  ? `<p>There's a <strong><em>${value}</strong></em> chance that two people who have potentially interacted in this tract are different races</em></p>`
//                  : `<p>Hover over an area!</p>`;
//              }
//          }
//
// });


});
