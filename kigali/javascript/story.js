// Story
var pageNum = 1;
var backButton = d3.select("#story-back");
var forwardButton = d3.select("#story-forward");
var pageNumbers = d3.select("#storymode-controls-numbers");
var storyHeader = d3.select("#story-header");
var storyContent = d3.select("#story-text");
// var storyImage =document.getElementById("#story-image");
var storyImage = d3.select("#story-image");

var stories = [

    //layers: ['site', 'situational', 'slum']

    { title: "Informal Settlements in City of Kigali",
      description: "Rwanda is envisioning to accelerate urbanization to 70%, yet its only urbanization modality is the massive rural-to-urban migration. The unabated influx of poor rural population to urban cores generates informal housings, in which 4-8 people live on a tiny plot without access to electricity and basic services, which deteriorates the urban quality without a proportional increase in investment and employment opportunities. Not only do the informal settlements cause negative externality, but also pose dangers to the impoverished population.",
      image: 'assets/images/story/story1.png',
      //layer: "slum",
      flyTo: {
        zoom: 11.32,
        pitch: 36.72,
        center: [30.12733, -1.92971],
        bearing: 0
      },
     },
    { title: "Situational Factors: Connectivity",
      description: "The situational factors (click Situational Factor in Maps) analyze the location of settlement and its connectivity to social and built infrastructure. The informal settlers occupy the affordable and less desirable area informally and becasue the affordable lands can be found in either the edge of the urban boundary in a regularized urban growth models and clusters within the urban boundary, informal settlement lack access to transport and social infrastructure that connects them to the urban fabric. In City of Kigali, the informal settlements were found not only in the urban boundary but in the concetrated urban area as well. However, the accessbility gap for the informal settlement could also be observed in dense urban area. We can observe in this site, the high accessibility index (low acessbility) in comparison to the low accessibility index (high accessbility) outside of the informal settlements boundaries. Health, education and trade facilities are all located outside informal settlements and roads connecting to these facilities are unpaved",
      layer: "situational",
      image: 'assets/images/story/unpaved.png',
      flyTo: {
        zoom: 14.68,
        pitch: 45,
        center: [30.08469, -1.90036],
        bearing: 0
      },
    },
    { title: "Site Factors: Exposure to Risks",
      description: "The heavy rainfall and hilly topography of Rwanda render the country prone to floods and landslides. The National Land Use and Development Master Plan 2020-2050 recommends that lands with the slope of 30-50% can be used for settlements as long as there are no risks from earthquakes, floods (MOE, 2020). Mountainous Rwanda is comprised of 22.9% of 30-55% slopes and 12.6% above 55% slopes. Among the 61.6% of Kigali???s population who live in informal settlements, about 9% are located on the steep slope of above 30% while 4% are within flood-prone areas (Murill et. al, 2021). By clicking on the Site Factors in Maps for basemap, Flood Risk Zone, and Landslides Zone, we can observe the informal settlements in precarious area exposed to flood and landslides.",
      layer: "site",
      image: 'assets/images/story/land.png',
      flyTo: {
        zoom: 12,
        pitch:45,
        center: [30.03198, -1.87371],
        bearing: 0
      },
    },
        { title: "Case: Nyamugare Cell",
      description: "The Nyamugare Cell is an uphill sloped settlement with streams flowing parallel downhill and cutting through the roads that follow the terrain???s contour lines (see site factors). The distribution of land plots is irregular, following clustered patterns. During the rainy season, these streams carry large volumes of rainwater at high speed, causing severe erosion, damaging poorly constructed houses and increasing the risk of landslides (see Landslide Risk Zone). The impacts of these topographic and environmental factors negatively affect the urban poor. Also, even though some parts of the settlement have higher accessbility, generally the accessbility is very low. There are some education facilities within the settlment but concentrated in area of higher accessbility and a trade facility at the edge of the settlement, making it less acessible to most part of the settlment. We can also observe that there is no health facility on or near the cell and the roads within the cell is all unpaved. The poor situational and site factors provoke economic and social losses and increase the informal settlers' general vulnerability.",
      layer: "site",
       image: 'assets/images/story/Uphill.png',
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
    var imageSrc = storyObj['image'];
    console.log(imageSrc);
    //var layer = storyObj['layer'];

    // Update the Storymode content.
    storyHeader.text(title);
    storyContent.text(description);
    //storyImage.innerHTML += '<img src="'+imageSrc+'" style="width:150px;height:auto;"/>'; // change the style to adjust the image size.
    storyImage.append("img")
              .attr('src',imageSrc)
              .style('width','200px')
              .style('height','auto');

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
    storyImage.selectAll("img").remove();
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
    storyImage.selectAll("img").remove();
    // Update the story.
    updateStory(stories[pageNum-1]);
});
