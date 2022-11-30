// Story
var pageNum = 1;
var backButton = d3.select("#story-back");
var forwardButton = d3.select("#story-forward");
var pageNumbers = d3.select("#storymode-controls-numbers");
var storyHeader = d3.select("#story-header");
var storyContent = d3.select("#story-text");

var stories = [

    // layers: ['wei_data', 'ce_data', 'bge_data', 'comm_area', 'landuse', 'gentrification'];

    { title: "Morphologies of Informal Settlements in City of Kigali",
      description: "Rwanda is envisioning to accelerate urbanization to 70%, yet its only urbanization modality is the massive rural-to-urban migration. The unabated influx of poor rural population to urban cores generates informal housings, in which 4-8 people live on a tiny plot without access to electricity and basic services, which deteriorates the urban quality without a proportional increase in investment and employment opportunities. Not only do the informal settlements cause negative externality, but also pose dangers to the impoverished population.",
      flyTo: {
        zoom: 11.32,
        pitch: 36.72,
        center: [30.12733, -1.92971],
        bearing: 0
      },
     },
    { title: "Situational Factors: Connectivity",
      description: "They explained that affordable lands can be found in either the edge of the urban boundary in a regularized urban growth models and clusters within the urban boundary. The informal settlements in affordable land lacks access to transport and social infrastructure that connects them to the urban fabric.",
      layer: "situational",
      flyTo: {
        zoom: 12.32,
        pitch: 26.72,
        center: [30.12733, -1.92971],
        bearing: 88
      },
    },
    { title: "Site Factors: Exposure to Risks",
      description: "The National Land Use and Development Master Plan 2020-2050 recommends that lands with the slope of 30-50% can be used for settlements as long as there are no risks from earthquakes, floods, and landslides and that slopes above 55% be planted with trees (MOE, 2020). Mountainous Rwanda is comprised of 22.9% of 30-55% slopes and 12.6% above 55% slopes. Among the 61.6% of Kigali’s population who live in informal settlements, about 9% are located on the steep slope of above 30% while 4% are within flood-prone areas (Murill et. al, 2021).",
      layer: "site",
      flyTo: {
        zoom: 14,
        pitch:45,
        center: [30.04203, -1.92134],
        bearing: 0
      },
    },
        { title: "Nyamugare Cell",
      description: "The Nyamugare Cell is an uphill sloped settlement with streams flowing parallel downhill and cutting through the roads that follow the terrain’s contour lines. The distribution of land plots is irregular, following clustered patterns. During the rainy season, these streams carry large volumes of rainwater at high speed, causing severe erosion, damaging poorly constructed houses and increasing the risk of landslides. The impacts of these topographic and environmental factors negatively affect the urban poor. They provoke economic and social losses and increase the poor’s general vulnerability.",
      image: "images\Uphill.png",
      layer: "site",
      flyTo: {
        zoom: 14,
        pitch:45,
        center: [30.04203, -1.92134],
        bearing: 0
      },
    },
]

// Function to update the active layer

// Update Story.
function updateStory(storyObj) {

    // Story vars.
    var title = storyObj['title'];
    var description = storyObj['description'];
    var cameraSettings = storyObj['flyTo'];
    // var layer = storyObj['layer'];

    // Update the Storymode content.
    storyHeader.text(title);
    storyContent.text(description);
    map.flyTo(cameraSettings);
    // call to update to active layer
};

// Callbacks
// Story mode click through FORWARD.
backButton.on("click", function () {

    // Update the Navigation bottom panel.
    pageNum = pageNum - 1;
    pageNumbers.text(pageNum + " of " + stories.length);
    backButton.style( "visibility", (pageNum == 1) ? "hidden" : "visible" );
    forwardButton.style( "visibility", (pageNum == stories.length) ? "hidden" : "visible" );

    // Update the story.
    updateStory(stories[pageNum-1]);
});

  // Story mode click through BACKWARD.
forwardButton.on("click", function () {

    // Update the Navigation bottom panel.
    pageNum = pageNum + 1;
    pageNumbers.text(pageNum + " of " + stories.length);
    backButton.style( "visibility", (pageNum == 1) ? "hidden" : "visible" );
    forwardButton.style( "visibility", (pageNum == stories.length) ? "hidden" : "visible" );

    // Update the story.
    updateStory(stories[pageNum-1]);
});
