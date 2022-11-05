var config = {
    style: 'mapbox://styles/jm2369/cla32q7ls001z14o7mmi7w1lb',
    accessToken: 'pk.eyJ1Ijoiam0yMzY5IiwiYSI6ImNsOHg2NTQzdzAzZXMzbm1mMmZpZGl3MnYifQ.s7yHMqaaZCz4CNsHlMxioQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'NYC Public Housing Flood Risk',
    subtitle: 'Mapping of Public Housings Located at Flood-prone Zones',
    byline: 'By Juyeon Maeng',
    footer: 'Source: NYC Open Data, NYCHA. <a href=https://bklyner.com/5-years-since-sandy-three-stories-red-hook/>5 years since sandy three stories red hook<a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Public Housings in NYC',
            image: 'images/flooding.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks]</a>. New York City Housing Authority public housing developments were affected. <br><a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this?',

            location: {
                center: [-73.96814, 40.77199],
                zoom: 10.5,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/redhook.jpg',
            description: 'In 2012, the Red Hook Houses, a public housing complex in Red Hook, Brooklyn was severely hit by Hurricane Sandy. The sewer overflow and high tides inundated the home of 6,000 residents located on reclaimed land in close proximity to water. They suffered the impact for weeks as they were left without access to fresh water, the houses were molded from the leaks, putting the residents’ health at risk, and saltwater destroyed critical infrastructure, including boiler and electrical panels.',
            location: {
                center: [-74.004608, 40.675838],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
