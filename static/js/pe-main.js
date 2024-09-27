// $(document).ready(function() {

$('#show-right-panel-btn').click(function () {
    $('#right-panel').toggle();
});

const uniqueQueryParam = `?_=${Date.now()}`;

// CONSTANTS AND UTILITIES
const OPTS_COLORS = {
    sector: {
        'Agriculture, Natural Resources and Rural Development': '#a6cee3',
        'Education': '#1f78b4',
        'Energy': '#b2df8a',
        'Finance': '#33a02c',
        'Health': '#fb9a99',
        'Industry and trade': '#e31a1c',
        'Information and Communication Technology': '#fdbf6f',
        'Multisector': '#ff7f00',
        'Public Sector Management': '#6a3d9a',
        'Transport': '#cab2d6',
        'Water and Other Urban Infrastructure and Services': '#ffff99'
    },

    project_status: {
        'Proposed': '#6a3d9a',
        'Approved': '#1f78b4',
        'Active': '#b2df8a',
        'Closed': '#fb9a99',
        'Archived': '#ff7f00',
        'Dropped/Terminated': '#e31a1c'
    },

    year: {
        '2021+': '#6a3d9a',
        '2011-2020': '#1f78b4',
        '2001-2010': '#b2df8a',
        '1991-2000': '#fb9a99',
        '1981-1990': '#ff7f00',
        '< 1981': '#e31a1c'
    }
}

// const HEATMAP_COLORS = ['#fdd49e', '#fdbb84', '#fc8d59', '#e34a33', '#b30000']
const HEATMAP_COLORS = ['#c6dbef', '#9ecae1', '#6baed6', '#3182bd', '#08519c']
const HEATMAP_COLORSCALE = d3.scaleOrdinal()
    .domain(['low', 'moderate', 'high', 'very high', 'critical'])
    .range(HEATMAP_COLORS)

// CODES
var OPTS = {
    dmc: [
        // {
        // 	country: "Regional",
        // 	code: "regional",
        // },
        {
            country: "Afghanistan",
            code: "afghanistan",
        },
        {
            country: "Armenia",
            code: "armenia",
        },
        {
            country: "Azerbaijan",
            code: "azerbaijan",
        },
        {
            country: "Bangladesh",
            code: "bangladesh",
        },
        {
            country: "Bhutan",
            code: "bhutan",
        },
        {
            country: "Cambodia",
            code: "cambodia",
        },
        {
            country: "China, People's Republic of",
            code: "china-peoples-republic",
        },
        {
            country: "Cook Islands",
            code: "cook-islands",
        },
        {
            country: "Fiji",
            code: "fiji",
        },
        {
            country: "Georgia",
            code: "georgia",
        },
        {
            country: "India",
            code: "india",
        },
        {
            country: "Indonesia",
            code: "indonesia",
        },
        {
            country: "Kazakhstan",
            code: "kazakhstan",
        },
        {
            country: "Kiribati",
            code: "kiribati",
        },
        {
            country: "Kyrgyz Republic",
            code: "kyrgyz-republic",
        },
        {
            country: "Lao PDR",
            code: "lao-peoples-democratic-republic",
        },
        {
            country: "Maldives",
            code: "maldives",
        },
        {
            country: "Marshall Islands",
            code: "marshall-islands",
        },
        {
            country: "Micronesia, Federated States of",
            code: "micronesia-federated-states",
        },
        {
            country: "Mongolia",
            code: "mongolia",
        },
        {
            country: "Myanmar",
            code: "myanmar",
        },
        {
            country: "Nauru",
            code: "nauru",
        },
        {
            country: "Nepal",
            code: "nepal",
        },
        {
            country: "Niue",
            code: "niue",
        },
        {
            country: "Pakistan",
            code: "pakistan",
        },
        {
            country: "Palau",
            code: "palau",
        },
        {
            country: "Papua New Guinea",
            code: "papua-new-guinea",
        },
        {
            country: "Philippines",
            code: "philippines",
        },
        {
            country: "Samoa",
            code: "samoa",
        },
        {
            country: "Solomon Islands",
            code: "solomon-islands",
        },
        {
            country: "Sri Lanka",
            code: "sri-lanka",
        },
        {
            country: "Tajikistan",
            code: "tajikistan",
        },
        {
            country: "Thailand",
            code: "thailand",
        },
        {
            country: "Timor-Leste",
            code: "timor-leste",
        },
        {
            country: "Tonga",
            code: "tonga",
        },
        {
            country: "Turkmenistan",
            code: "turkmenistan",
        },
        {
            country: "Tuvalu",
            code: "tuvalu",
        },
        {
            country: "Uzbekistan",
            code: "uzbekistan",
        },
        {
            country: "Vanuatu",
            code: "vanuatu",
        },
        {
            country: "Viet Nam",
            code: "viet-nam",
        },

    ],

    sectors: [
        {
            sector: "Agriculture, Natural Resources and Rural Development",
            code: "agriculture-natural-resources-and-rural-development-1057",
        },
        {
            sector: "Education",
            code: "education-1058",
        },
        {
            sector: "Energy",
            code: "energy-1059",
        },
        {
            sector: "Finance",
            code: "finance-1060",
        },
        {
            sector: "Health",
            code: "health-1061",
        },
        {
            sector: "Industry and trade",
            code: "industry-and-trade-1062",
        },
        {
            sector: "Information and Communication Technology",
            code: "information-and-communication-technology-1066",
        },
        {
            sector: "Multisector",
            code: "multisector-1067",
        },
        {
            sector: "Public Sector Management",
            code: "public-sector-management-1063",
        },
        {
            sector: "Transport",
            code: "transport-1064",
        },
        {
            sector: "Water and Other Urban Infrastructure and Services",
            code: "water-and-other-urban-infrastructure-and-services-1065",
        },
    ],

    themes: [
        {
            theme: "Environmentally sustainable growth",
            code: "environmentally-sustainable-growth-1666",
        },
        {
            theme: "Governance and capacity development",
            code: "governance-and-capacity-development-1646",
        },
        {
            theme: "Inclusive economic growth",
            code: "inclusive-economic-growth-1676",
        },
        {
            theme: "Partnerships",
            code: "partnerships-1661",
        },
        {
            theme: "Private sector development",
            code: "private-sector-development-1641",
        },
        {
            theme: "Regional integration",
            code: "regional-integration-1671",
        },
    ],

    project_status: [
        {
            status: "Proposed",
            code: "proposed-1360",
        },
        {
            status: "Approved",
            code: "approved-1359",
        },
        {
            status: "Active",
            code: "active-1367",
        },
        {
            status: "Closed",
            code: "closed-1361",
        },
        {
            status: "Archived",
            code: "archived-1366",
        },
        {
            status: "Dropped/Terminated",
            code: "dropped-terminated-1362",
        },
    ],
}

// STYLE SELECT
OPTS_STYLE = {
    points_style: [
        {
            style: "SECTOR",
            code: "legend-sector",
        },
        {
            style: "THEME",
            code: "legend-theme",
        },
        {
            style: "PROJECT STATUS",
            code: "legend-project-status",
        },
        {
            style: "YEAR",
            code: "legend-year",
        },
    ]
}

// FILTERS AND SELECTORS
const FILTER_IDS = ['#select-dmc', '#select-sector', '#select-theme', '#select-project-status', '#select-year']

const FILTER_DMC = $('#select-dmc');
const FILTER_SECTOR = $('#select-sector');
const FILTER_THEME = $('#select-theme');
const FILTER_STATUS = $('#select-status');
const FILTER_YEAR = $('#select-year');

// POPULATE FILTERS
function populateFilter(valueList, filterID, value) {
    valueList.forEach(function (item) {
        $(filterID).append(
            `<option value="${item.code}">${item[value]}</option>`
        )
    })
    $(filterID).selectpicker("refresh");
}

$(document).ready(function () {

    populateFilter(OPTS.dmc, '#select-dmc', 'country');
    populateFilter(OPTS.sectors, '#select-sector', 'sector');
    populateFilter(OPTS.themes, '#select-theme', 'theme');
    populateFilter(OPTS.project_status, '#select-project-status', 'status');

    for (i = new Date().getFullYear() + 2; i > 1966; i--) {
        $("#select-year").append(
            `<option value="${i}">${i}</option>`
        );
    }
    $("#select-year").selectpicker("refresh");

    populateFilter(OPTS_STYLE.points_style, '#select-to-symbolize', 'style');
    populateFilter(OPTS_STYLE.points_style, '#select-number-projects', 'style');
})

// CHANGE LEGEND
const LEGEND_SECTOR = document.getElementById('legend-sector');
const LEGEND_PROJECT_STATUS = document.getElementById('legend-project-status');
const LEGEND_YEAR = document.getElementById('legend-year');

function createLegend(legend, legendDiv) {
    Object.keys(legend).forEach(x => {
        const color = legend[x];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${x}`;
        item.appendChild(key);
        item.appendChild(value);
        legendDiv.appendChild(item);
    })
}

$(document).ready(function () {
    createLegend(OPTS_COLORS.sector, LEGEND_SECTOR);
    createLegend(OPTS_COLORS.project_status, LEGEND_PROJECT_STATUS);
    createLegend(OPTS_COLORS.year, LEGEND_YEAR);
})

const LEGEND_LIST = [LEGEND_SECTOR, LEGEND_PROJECT_STATUS, LEGEND_YEAR];

// function getYearFromApproval(dateStr) {
//     // Split the date string by '-' to get an array of parts [DD, MM, YYYY]
//     console.log(dateStr);
//     console.log(type(dateStr))
//     // const dateParts = dateStr.split('-');

//     // // Extract the year (assuming it's in the last position of the array)
//     // const year = dateParts[2];

//     // // Return the year as a number
//     // return parseInt(year, 10);
// }

// MAP FUNCTIONS
var map = new maplibregl.Map({
    container: 'pe-map',
    // style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location

    style: {
        'version': 8,
        "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': [
                    // 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}'
                    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                ],
                'tileSize': 256,
                'attribution':
                    // 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
                    'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
        },
        'layers': [
            {
                'id': 'simple-tiles',
                'type': 'raster',
                'source': 'raster-tiles',
                'minzoom': 0,
                'maxzoom': 20,
            }
        ]
    },
    center: [121.8733, 13.5221], // starting position [lng, lat]
    zoom: 2.5 // starting zoom
});

// Add map elements
map.addControl(new maplibregl.NavigationControl(), 'top-left');

// On load
map.on('load', () => {

    map.addSource('pe-data', {
        'type': 'geojson',
        'data': '../data/pe-data.geojson' + uniqueQueryParam,
        'promoteId': 'id'
    });

    map.addSource('pe-data-cluster', {
        'type': 'geojson',
        'data': '../data/pe-data.geojson' + uniqueQueryParam,
        'cluster': true,
        'clusterMaxZoom': 15, // Max zoom to cluster points on
        'clusterRadius': 50, // Radius of each cluster when clustering points (defaults to 50)
        'promoteId': 'id'
    });

    // Individual Points
    map.addLayer({
        'id': 'pe-data-points',
        'type': 'circle',
        'source': 'pe-data',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                9,
                4],
            'circle-stroke-color': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                '#000000',
                '#ffffffff'],
            'circle-stroke-width': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                2,
                1],
            'circle-color': [
                'match',
                ['get', 'SECTOR'],
                'Agriculture, Natural Resources and Rural Development', OPTS_COLORS.sector['Agriculture, Natural Resources and Rural Development'],
                'Education', OPTS_COLORS.sector['Education'],
                'Energy', OPTS_COLORS.sector['Energy'],
                'Finance', OPTS_COLORS.sector['Finance'],
                'Health', OPTS_COLORS.sector['Health'],
                'Industry and trade', OPTS_COLORS.sector['Industry and trade'],
                'Information and Communication Technology', OPTS_COLORS.sector['Information and Communication Technology'],
                'Multisector', OPTS_COLORS.sector['Multisector'],
                'Public Sector Management', OPTS_COLORS.sector['Public Sector Management'],
                'Transport', OPTS_COLORS.sector['Transport'],
                'Water and Other Urban Infrastructure and Services', OPTS_COLORS.sector['Water and Other Urban Infrastructure and Services'],
                'black'
            ],
        }
    });

    // Heatmap
    map.addLayer({
        'id': 'pe-data-heatmap',
        'type': 'heatmap',
        'source': 'pe-data',
        'layout': {
            'visibility': 'none',
        },
        'paint': {
            'heatmap-opacity': 0.7,
            'heatmap-radius': 20,
            'heatmap-weight': [
                'step',
                ['get', 'count_'],
                1,
                10, 10,
                50, 50,
                100, 100,
                99999999999, 1000,
            ],
            'heatmap-color': ["interpolate", ["linear"], ["heatmap-density"], 0, 'rgba(0,0,0,0)', 0.2, HEATMAP_COLORSCALE('low'), 0.4, HEATMAP_COLORSCALE('moderate'), 0.6, HEATMAP_COLORSCALE('high'), 0.8, HEATMAP_COLORSCALE('very high'), 1.0, HEATMAP_COLORSCALE('critical')]
        }
    });

    // Clustered Points
    addClusters('none');
    updateCountLabels();

    // ON CLICK
    map.on("click", "pe-data-points", function (e) {
        const clickedPoint = e.features[0].geometry.coordinates.slice();
        radius = 0.001;

        // console.log(e.features[0])

        const buffer = turf.buffer(turf.point(clickedPoint), radius);

        const overlappingPoints = e.features.filter((feature) => {
            const pointCoordinates = turf.point(feature.geometry.coordinates);
            return turf.booleanPointInPolygon(pointCoordinates, buffer);
        });

        map.removeFeatureState({
            source: 'pe-data'
        });

        map.setFeatureState({
            source: 'pe-data',
            id: e.features[0].id
        }, {
            selected: true
        });

        document.getElementById('label-clicked-projects').innerHTML = overlappingPoints.length;
        buildProjectsList(overlappingPoints);
        // openRightPanel();
        $('#right-panel').show();
    });

    map.on("click", "pe-data-clustered", function (e) {

        const features = map.queryRenderedFeatures(e.point, {
            layers: ["pe-data-clustered"]
        });

        const clusterId = features[0].properties.cluster_id;
        var pointCount = features[0].properties.point_count;


        map.removeFeatureState({
            source: 'pe-data-cluster'
        });

        map.setFeatureState({
            source: 'pe-data-cluster',
            id: clusterId
        }, {
            selected: true
        });

        map.getSource("pe-data-cluster").getClusterLeaves(clusterId, pointCount, 0, (error, features) => {
            if (!error) {
                document.getElementById('label-clicked-projects').innerHTML = features.length;
                buildProjectsList(features);
                $('#right-panel').show();
            }
        });

    });

    map.on("click", "pe-data-unclustered", function (e) {
        
        const features = map.queryRenderedFeatures(e.point, {
            layers: ["pe-data-unclustered"]
        });

        const clickedPoint = e.features[0].geometry.coordinates.slice();
        radius = 0.001;

        // console.log(e.features[0])
        const clusterId = features[0].properties.id;
        const buffer = turf.buffer(turf.point(clickedPoint), radius);

        const overlappingPoints = e.features.filter((feature) => {
            const pointCoordinates = turf.point(feature.geometry.coordinates);
            return turf.booleanPointInPolygon(pointCoordinates, buffer);
        });

        map.removeFeatureState({
            source: 'pe-data-cluster'
        });

        map.setFeatureState({
            source: 'pe-data-cluster',
            // id: e.features[0].id
            id: clusterId
        }, {
            selected: true
        });

        document.getElementById('label-clicked-projects').innerHTML = overlappingPoints.length;
        buildProjectsList(overlappingPoints);
        // openRightPanel();
        $('#right-panel').show();
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'pe-data-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'pe-data-points', () => {
        map.getCanvas().style.cursor = '';
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'pe-data-clustered', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'pe-data-clustered', () => {
        map.getCanvas().style.cursor = '';
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'pe-data-unclustered', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'pe-data-unclustered', () => {
        map.getCanvas().style.cursor = '';
    });

});


// function getOverlappingPoints() {
//     // const peData = '../data/pe-data.geojson';
//     const peData = map.getSource('pe-data')._data;
//     fetch(peData)
//     .then((response) => response.json())
//     .then((geojsonData) => {
//         const allProjects = turf.featureCollection(geojsonData.features);
//         const radius = 0.001
//     })
// }

// ON FILTER CHANGE
function checkIfCluster() {
    var button = document.getElementById('clusterBtn');

    // Check if the button has the 'myClass' class
    if (button.classList.contains('btn-success')) {
        // The button has the class 'myClass'
        return true;
    } else {
        // The button does not have the class 'myClass'
        return false;
    }
}

function addClusters(visibility) {
    // Clustered Points
    map.addLayer({
        'id': 'pe-data-clustered',
        'type': 'circle',
        'source': 'pe-data-cluster',
        'filter': ['has', 'point_count'],
        'layout': {
            'visibility': visibility,
        },
        'paint': {
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                10, 10,
                20, 50,
                30, 100,
                40, 500,
                50
            ],
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#ffffcc', 15,
                '#a1dab4', 50,
                '#41b6c4', 100,
                '#2c7fb8', 500,
                '#253494'
            ],
            'circle-opacity': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                0.9,
                0.6
            ],
            'circle-stroke-color': '#000',
            // 'circle-stroke-width': 0.5
            'circle-stroke-color': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                '#000000',
                '#333333'
            ],
            'circle-stroke-width': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                2.0,
                0.5
            ]
        }
    });

    map.addLayer({
        'id': 'cluster-count',
        'type': 'symbol',
        'source': 'pe-data-cluster',
        'filter': ['has', 'point_count'],
        'layout': {
            'visibility': visibility,
            'text-field': '{point_count_abbreviated}',
            'text-size': 12,
        }
    });

    map.addLayer({
        'id': 'pe-data-unclustered',
        'type': 'circle',
        'source': 'pe-data-cluster',
        'filter': ['!', ['has', 'point_count']],
        'layout': {
            'visibility': visibility,
        },
        'paint': {
            'circle-radius': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                9,
                4],
            'circle-stroke-color': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                '#000000',
                '#ffffffff'],
            'circle-stroke-width': [
                'case',
                ['boolean', ['feature-state', 'selected'], false],
                2,
                1],
            'circle-color': '#11b4da',
            // 'circle-radius': 4,
            // 'circle-stroke-width': 0.5,
            // 'circle-stroke-color': '#fff'
        }
    });
}

function updateCluster(thismap, visibility, filter) {
    thismap.removeLayer('pe-data-clustered');
    thismap.removeLayer('pe-data-unclustered');
    thismap.removeLayer('cluster-count');
    thismap.removeSource('pe-data-cluster')

    thismap.addSource('pe-data-cluster', {
        'type': 'geojson',
        'data': '../data/pe-data.geojson',
        // 'filter':,
        'filter': filter,
        'cluster': true,
        'clusterMaxZoom': 14, // Max zoom to cluster points on
        'clusterRadius': 40 // Radius of each cluster when clustering points (defaults to 50)
    });

    addClusters(visibility);
}

function updateClusterData() {
    const filteredProjects = getFilteredData();
    map.getSource('pe-data-cluster').setData(filteredProjects);
}

function getFilterSelected() {
    var dmc = $('#select-dmc').find("option:selected");
    var sector = $('#select-sector').find("option:selected");
    var theme = $('#select-theme').find("option:selected");
    var project_status = $('#select-project-status').find("option:selected");
    var year = $('#select-year').find("option:selected");

    return { 'dmc': dmc, 'sector': sector, 'theme': theme, 'project_status': project_status, 'year': year };
}

function generateFilter(selected, filter, value) {
    var exp = []
    var numSelected = selected.length;
    var numTotal = filter.length;
    if (numSelected != numTotal && numSelected != 0) {
        for (var i = 0; i < numSelected; i++) {
            exp.push(selected[i].label)
        }
    }
    else {
        for (var i = 0; i < numTotal; i++) {
            exp.push(filter[i][value])
        }
    }
    return exp;
}

function generateFilterYear(year) {
    var year_exp = []
    if (year.length != (new Date().getFullYear() + 2) && year.length != 0) {
        for (var i = 0; i < year.length; i++) {
            year_exp.push(Number.parseInt(year[i].label));
        }
    }
    else {
        for (var i = new Date().getFullYear() + 2; i > 1966; i--) {
            year_exp.push(i);
        }
    }
    return year_exp;
}

function onFilterChange() {
    // var dmc = $('#select-dmc').find("option:selected");
    // var sector = $('#select-sector').find("option:selected");
    // var theme = $('#select-theme').find("option:selected");
    // var project_status = $('#select-project-status').find("option:selected");
    // var year = $('#select-year').find("option:selected");

    // var dmc_exp = [];
    // var sector_exp = [];
    // var theme_exp = [];
    // var project_status_exp = [];
    // var year_exp = [];

    // generateFilter(dmc, OPTS.dmc, dmc_exp, 'country');
    // generateFilter(sector, OPTS.sectors, sector_exp, 'sector');
    // generateFilter(project_status, OPTS.project_status, project_status_exp, 'status');

    // var dmc_exp = generateFilter(dmc, OPTS.dmc, 'country');
    // var sector_exp = generateFilter(sector, OPTS.sectors, 'sector');
    // var theme_exp = [];
    // var project_status_exp = generateFilter(project_status, OPTS.project_status, 'status');
    // var year_exp = generateFilterYear(year);

    var selected = getFilterSelected();

    var dmc_exp = generateFilter(selected.dmc, OPTS.dmc, 'country');
    var sector_exp = generateFilter(selected.sector, OPTS.sectors, 'sector');
    var theme_exp = [];
    var project_status_exp = generateFilter(selected.project_status, OPTS.project_status, 'status');
    var year_exp = generateFilterYear(selected.year);

    map.setFilter('pe-data-points', ['all',
        ['in', ['get', 'DMC'], ['literal', dmc_exp]],
        ['in', ['get', 'SECTOR'], ['literal', sector_exp]],
        ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]],
        ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],
    ]);

    map.setFilter('pe-data-heatmap', ['all',
        ['in', ['get', 'DMC'], ['literal', dmc_exp]],
        ['in', ['get', 'SECTOR'], ['literal', sector_exp]],
        ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]],
        ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],
    ]);


    if (checkIfCluster()) {
        // If cluster viz is selected, make clusters visible

        selected = getFilterSelected();

        updateCluster(map, 'visible', ['all', ['in', ['get', 'DMC'], ['literal', dmc_exp]], ['in', ['get', 'SECTOR'], ['literal', sector_exp]], ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]], ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],]);

        // updateClusterData();

        // map.removeLayer('pe-data-clustered');
        // map.removeLayer('pe-data-unclustered');
        // map.removeLayer('cluster-count');
        // map.removeSource('pe-data-cluster')

        // map.addSource('pe-data-cluster', {
        //     'type': 'geojson',
        //     'data': '../data/pe-data.geojson',
        //     // 'filter':,
        //     'filter':  ['all', 
        //     ['in', ['get', 'DMC'], ['literal', dmc_exp]], ['in', ['get', 'SECTOR'], ['literal', sector_exp]], ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]], ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],],
        //     'cluster': true,
        //     'clusterMaxZoom': 14, // Max zoom to cluster points on
        //     'clusterRadius': 40 // Radius of each cluster when clustering points (defaults to 50)
        // });

        // addClusters('visible');
        // flyToProjects();
    }

    flyToProjects();
    // updateClusterData();
    updateCountLabels();
    clearProjectsList();
    removeFeatureStatesAll(['pe-data', 'pe-data-cluster']);

}

$("#select-dmc").on('changed.bs.select', function () {
    onFilterChange();
    // map.triggerRepaint();
});

$("#select-sector").on('changed.bs.select', function () {
    onFilterChange();
    // map.triggerRepaint();
});

$("#select-project-status").on('changed.bs.select', function () {
    onFilterChange();
    // map.triggerRepaint();
});

$("#select-year").on('changed.bs.select', function () {
    onFilterChange();
    // map.triggerRepaint();
});

// RESET FILTER
document.getElementById("resetFilters").addEventListener("click", resetFilter);

function resetFilter() {
    FILTER_IDS.forEach(function (item) {
        $(item).selectpicker("deselectAll");
        $(item).selectpicker("refresh");
    })
    map.flyTo({
        center: [121.8733, 13.5221], // starting position [lng, lat]
        zoom: 2.5 // starting zoom
    });
}

// FLY TO FILTER
function flyToProjects() {
    const peData = '../data/pe-data.geojson';
    // const peData = map.getSource('pe-data')._data;
    var selected = getFilterSelected();
    var dmc_exp = generateFilter(selected.dmc, OPTS.dmc, 'country');

    fetch(peData)
        .then((response) => response.json())
        .then((geojsonData) => {
            // Use Turf.js to work with the loaded GeoJSON data
            const featureCollection = turf.featureCollection(geojsonData.features);

            const filteredFeatures = featureCollection.features.filter(feature => dmc_exp.includes(feature.properties.DMC));

            const filteredFeatureCollection = {
                type: 'FeatureCollection',
                features: filteredFeatures,
            };


            // Calculate the bounds of the filtered feature collection
            const bounds = turf.bbox(filteredFeatureCollection);

            // Fit the map view to the calculated bounds
            map.fitBounds(bounds, {
                padding: 30, // Adjust the padding as needed
            });

            // console.log('Filtered Feature Collection:', filteredFeatureCollection);
        })
}

// ON LEGEND CHANGE
$("#select-to-symbolize").on('changed.bs.select', function () {
    var option = $('#select-to-symbolize').find("option:selected");
    // var legendSector = document.getElementById('legend-sector');
    // var legendProjectStatus = document.getElementById('legend-project-status');

    // legendSector.style.display = 'none';
    // legendProjectStatus.style.display = 'none';

    LEGEND_LIST.forEach(legend => {
        legend.style.display = 'none';
    });

    $('#' + option[0].value).show();

    if (option[0].label === 'SECTOR') {
        map.setPaintProperty('pe-data-points',
            'circle-color',
            [
                'match',
                ['get', 'SECTOR'],
                'Agriculture, Natural Resources and Rural Development', OPTS_COLORS.sector['Agriculture, Natural Resources and Rural Development'],
                'Education', OPTS_COLORS.sector['Education'],
                'Energy', OPTS_COLORS.sector['Energy'],
                'Finance', OPTS_COLORS.sector['Finance'],
                'Health', OPTS_COLORS.sector['Health'],
                'Industry and trade', OPTS_COLORS.sector['Industry and trade'],
                'Information and Communication Technology', OPTS_COLORS.sector['Information and Communication Technology'],
                'Multisector', OPTS_COLORS.sector['Multisector'],
                'Public Sector Management', OPTS_COLORS.sector['Public Sector Management'],
                'Transport', OPTS_COLORS.sector['Transport'],
                'Water and Other Urban Infrastructure and Services', OPTS_COLORS.sector['Water and Other Urban Infrastructure and Services'],
                'black'
            ],
        );
    }

    else if (option[0].label === 'PROJECT STATUS') {
        map.setPaintProperty('pe-data-points',
            'circle-color',
            [
                'match',
                ['get', 'PROJ_STATUS'],
                'Proposed', OPTS_COLORS.project_status['Proposed'],
                'Approved', OPTS_COLORS.project_status['Approved'],
                'Active', OPTS_COLORS.project_status['Active'],
                'Closed', OPTS_COLORS.project_status['Closed'],
                'Archived', OPTS_COLORS.project_status['Archived'],
                'Dropped/Terminated', OPTS_COLORS.project_status['Dropped/Terminated'],
                'black'
            ],
        );
    }

    else if (option[0].label === 'YEAR') {
        map.setPaintProperty('pe-data-points',
            'circle-color',
            [
                'case',
                ['<=', ['get', 'YEAR_APPROVAL'], 1980], OPTS_COLORS.year['< 1981'],
                ['<=', ['get', 'YEAR_APPROVAL'], 1990], OPTS_COLORS.year['1981-1990'],
                ['<=', ['get', 'YEAR_APPROVAL'], 2000], OPTS_COLORS.year['1991-2000'],
                ['<=', ['get', 'YEAR_APPROVAL'], 2010], OPTS_COLORS.year['2001-2010'],
                ['<=', ['get', 'YEAR_APPROVAL'], 2020], OPTS_COLORS.year['2011-2020'],
                OPTS_COLORS.year['2021+']
            ],
        );
    }

});

// SWITCH BUTTON COLORS
const BTN_LIST = ['#pointsBtn', '#heatmapBtn', '#clusterBtn']

function updateBtns(btnID) {
    BTN_LIST.forEach((btn) => {
        if (btn === btnID) {
            $(btn).addClass('btn-success');
            $(btn).removeClass('btn-info');
        }
        else {
            $(btn).addClass('btn-info');
            $(btn).removeClass('btn-success');
        }
    })
}

// DIFFERENT STYLES
pointsBtn.onclick = function () {
    onFilterChange();
    var pointsVisibility = map.getLayoutProperty('pe-data-points', 'visibility')
    var heatmapVisibility = map.getLayoutProperty('pe-data-heatmap', 'visibility')

    var clusteredVisibility = map.getLayoutProperty('pe-data-clustered', 'visibility')
    var clustercountVisibility = map.getLayoutProperty('cluster-count', 'visibility')
    var unclusteredVisibility = map.getLayoutProperty('pe-data-unclustered', 'visibility')

    updateBtns('#pointsBtn');

    if (pointsVisibility === 'visible') {
        map.setLayoutProperty('pe-data-points', 'visibility', 'visible');

        // $('#pointsBtn').addClass('bth-success');
        // $('#heatmapBtn').addClass('bg-success');

    } else {
        // $('#pointsBtn').addClass('btn-success');
        // $('#heatmapBtn').removeClass('btn-success');
        // $('#clusterBtn').removeClass('btn-success');
        map.setLayoutProperty('pe-data-points', 'visibility', 'visible');

        if (heatmapVisibility === 'visible') {
            map.setLayoutProperty('pe-data-heatmap', 'visibility', 'none');
        }

        if (clusteredVisibility === 'visible') {
            map.setLayoutProperty('pe-data-clustered', 'visibility', 'none');
        }

        if (clustercountVisibility === 'visible') {
            map.setLayoutProperty('cluster-count', 'visibility', 'none');
        }

        if (unclusteredVisibility === 'visible') {
            map.setLayoutProperty('pe-data-unclustered', 'visibility', 'none');
        }
    }
}

heatmapBtn.onclick = function () {
    onFilterChange();
    var pointsVisibility = map.getLayoutProperty('pe-data-points', 'visibility')
    var heatmapVisibility = map.getLayoutProperty('pe-data-heatmap', 'visibility')

    var clusteredVisibility = map.getLayoutProperty('pe-data-clustered', 'visibility')
    var clustercountVisibility = map.getLayoutProperty('cluster-count', 'visibility')
    var unclusteredVisibility = map.getLayoutProperty('pe-data-unclustered', 'visibility')

    updateBtns('#heatmapBtn');

    if (heatmapVisibility === 'visible') {
        map.setLayoutProperty('pe-data-heatmap', 'visibility', 'visible');

        // $('#heatmapBtn').addClass('btn-success');
        // $('#heatmapBtn').addClass('bg-success');

    } else {
        // $('#heatmapBtn').addClass('btn-success');
        // $('#pointsBtn').removeClass('btn-success');
        // $('#clusterBtn').removeClass('btn-success');
        map.setLayoutProperty('pe-data-heatmap', 'visibility', 'visible');

        if (pointsVisibility === 'visible') {
            map.setLayoutProperty('pe-data-points', 'visibility', 'none');
        }

        if (clusteredVisibility === 'visible') {
            map.setLayoutProperty('pe-data-clustered', 'visibility', 'none');
        }

        if (clustercountVisibility === 'visible') {
            map.setLayoutProperty('cluster-count', 'visibility', 'none');
        }

        if (unclusteredVisibility === 'visible') {
            map.setLayoutProperty('pe-data-unclustered', 'visibility', 'none');
        }
    }
}

clusterBtn.onclick = function () {
    onFilterChange();
    var pointsVisibility = map.getLayoutProperty('pe-data-points', 'visibility')
    var heatmapVisibility = map.getLayoutProperty('pe-data-heatmap', 'visibility')

    var clusteredVisibility = map.getLayoutProperty('pe-data-clustered', 'visibility')
    var clustercountVisibility = map.getLayoutProperty('cluster-count', 'visibility')
    var unclusteredVisibility = map.getLayoutProperty('pe-data-unclustered', 'visibility')

    updateBtns('#clusterBtn');

    if (clusteredVisibility === 'visible') {
        map.setLayoutProperty('pe-data-clustered', 'visibility', 'visible');
        map.setLayoutProperty('pe-data-unclustered', 'visibility', 'visible');
        map.setLayoutProperty('cluster-count', 'visibility', 'visible');

        // $('#clusterBtn').addClass('btn-success');

    } else {
        // $('#clusterBtn').addClass('btn-success');
        // $('#pointsBtn').removeClass('btn-success');
        // $('#heatmapBtn').removeClass('btn-success');
        // map.setLayoutProperty('pe-data-clustered', 'visibility', 'visible');
        // map.setLayoutProperty('pe-data-unclustered', 'visibility', 'visible');
        // map.setLayoutProperty('cluster-count', 'visibility', 'visible');

        if (pointsVisibility === 'visible') {
            map.setLayoutProperty('pe-data-points', 'visibility', 'none');
        }

        if (heatmapVisibility === 'visible') {
            map.setLayoutProperty('pe-data-heatmap', 'visibility', 'none');
        }

        // updateClusterData();

        selected = getFilterSelected();

        var dmc_exp = generateFilter(selected.dmc, OPTS.dmc, 'country');
        var sector_exp = generateFilter(selected.sector, OPTS.sectors, 'sector');
        var theme_exp = [];
        var project_status_exp = generateFilter(selected.project_status, OPTS.project_status, 'status');
        var year_exp = generateFilterYear(selected.year);

        updateCluster(map, 'visible', ['all', ['in', ['get', 'DMC'], ['literal', dmc_exp]], ['in', ['get', 'SECTOR'], ['literal', sector_exp]], ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]], ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],]);

        // map.removeLayer('pe-data-clustered');
        // map.removeLayer('pe-data-unclustered');
        // map.removeLayer('cluster-count');
        // map.removeSource('pe-data-cluster')

        // map.addSource('pe-data-cluster', {
        //     'type': 'geojson',
        //     'data': '../data/pe-data.geojson',
        //     // 'filter':,
        //     'filter':  ['all', 
        //     ['in', ['get', 'DMC'], ['literal', dmc_exp]], ['in', ['get', 'SECTOR'], ['literal', sector_exp]], ['in', ['get', 'PROJ_STATUS'], ['literal', project_status_exp]], ['in', ['get', 'YEAR_APPROVAL'], ['literal', year_exp]],],
        //     'cluster': true,
        //     'clusterMaxZoom': 14, // Max zoom to cluster points on
        //     'clusterRadius': 40 // Radius of each cluster when clustering points (defaults to 50)
        // });

        // addClusters('visible');
    }

}

// SEARCH
// Add an event listener for the search input
const searchInput = document.getElementById('search-input'); // Replace with your HTML input element
// const peData = map.getSource('pe-data')._data;

searchInput.addEventListener('input', (event) => {
    const peData = '../data/pe-data.geojson';
    const searchText = event.target.value.trim(); // Get the search text
    // const featureCollection = turf.featureCollection(geojsonData.features);

    fetch(peData)
        .then((response) => response.json())
        .then((geojsonData) => {
            const featureCollection = turf.featureCollection(geojsonData.features);
            // console.log(featureCollection.features[0].properties['PROJ_TITLE'])
            // // Filter the GeoJSON features based on the 'PROJ_TITLE' field
            // console.log(featureCollection.features)
            var filterCount = 0;
            const filteredFeatures = featureCollection.features.filter((feature) => {
                if (feature.properties && feature.properties.PROJ_TITLE) {
                    return feature.properties.PROJ_TITLE.toLowerCase().includes(searchText.toLowerCase());
                }
            });
            // Create a new GeoJSON object with the filtered features
            const filteredGeoJSON = {
                type: 'FeatureCollection',
                features: filteredFeatures,
            };

            // Update the source data to display the filtered features
            map.getSource('pe-data').setData(filteredGeoJSON);
            map.getSource('pe-data-cluster').setData(filteredGeoJSON);
            // updateClusterWithData(map, filteredGeoJSON);

            turf.featureEach(filteredGeoJSON, function (currentFeature, featureIndex) {
                filterCount++;
            });

            document.getElementById('label-searched-projects').innerHTML = filterCount;

        });

});

// Add an event listener for the search input
const searchProjectNo = document.getElementById('search-project-no'); // Replace with your HTML input element
// const peData = map.getSource('pe-data')._data;

searchProjectNo.addEventListener('input', (event) => {
    const peData = '../data/pe-data.geojson';
    const searchText = event.target.value.trim(); // Get the search text
    // const featureCollection = turf.featureCollection(geojsonData.features);

    fetch(peData)
        .then((response) => response.json())
        .then((geojsonData) => {
            const featureCollection = turf.featureCollection(geojsonData.features);
            // console.log(featureCollection.features[0].properties['PROJ_TITLE'])
            // // Filter the GeoJSON features based on the 'PROJ_TITLE' field
            // console.log(featureCollection.features)
            filterCount = 0;
            const filteredFeatures = featureCollection.features.filter((feature) => {
                if (feature.properties && feature.properties.PROJ_NO) {
                    return feature.properties.PROJ_NO.toLowerCase().includes(searchText.toLowerCase());
                }
            });
            // Create a new GeoJSON object with the filtered features
            const filteredGeoJSON = {
                type: 'FeatureCollection',
                features: filteredFeatures,
            };

            // Update the source data to display the filtered features
            map.getSource('pe-data').setData(filteredGeoJSON);
            map.getSource('pe-data-cluster').setData(filteredGeoJSON);
            // updateClusterWithData(map, filteredGeoJSON);

            turf.featureEach(filteredGeoJSON, function (currentFeature, featureIndex) {
                filterCount++;
            });

            document.getElementById('label-searched-projects').innerHTML = filterCount;

        });

});

// GET FILTERED DATA
function getFilteredData() {
    // const peData = '../data/pe-data.geojson';
    const peData = map.getSource('pe-data')._data;
    var selected = getFilterSelected();
    var dmc_exp = generateFilter(selected.dmc, OPTS.dmc, 'country');
    var sector_exp = generateFilter(selected.sector, OPTS.sectors, 'sector');
    var theme_exp = [];
    var project_status_exp = generateFilter(selected.project_status, OPTS.project_status, 'status');
    var year_exp = generateFilterYear(selected.year);

    // return {'dmc': dmc_exp, 'sector': sector_exp, 'theme': theme_exp, 'project_status': project_status_exp, 'year': year_exp};

    fetch(peData)
        .then((response) => response.json())
        .then((geojsonData) => {
            const allProjects = turf.featureCollection(geojsonData.features);
            const filteredFeatures = allProjects.features.filter(feature => {
                const indmc = dmc_exp.includes(feature.properties.DMC);
                const insector = sector_exp.includes(feature.properties.SECTOR);
                const instatus = project_status_exp.includes(feature.properties.PROJ_STATUS);
                const inyear = year_exp.includes(feature.properties.YEAR_APPROVAL);

                return indmc && insector && instatus && inyear;
            });
            const filteredProjects = {
                type: 'FeatureCollection',
                features: filteredFeatures,
            };
            return filteredProjects;
        })
}

// UPDATE PROJECT COUNT LABELS
function updateCountLabels() {
    const peData = '../data/pe-data.geojson';
    // const peData = map.getSource('pe-data')._data;
    var selected = getFilterSelected();
    var dmc_exp = generateFilter(selected.dmc, OPTS.dmc, 'country');
    var sector_exp = generateFilter(selected.sector, OPTS.sectors, 'sector');
    var theme_exp = [];
    var project_status_exp = generateFilter(selected.project_status, OPTS.project_status, 'status');
    var year_exp = generateFilterYear(selected.year);

    fetch(peData)
        .then((response) => response.json())
        .then((geojsonData) => {
            var totalCount = 0;
            const allProjects = turf.featureCollection(geojsonData.features);
            turf.featureEach(allProjects, function (currentFeature, featureIndex) {
                totalCount++;
            });
            document.getElementById('label-total-projects').innerHTML = totalCount;

            var filterCount = 0;
            const filteredFeatures = allProjects.features.filter(feature => {
                const indmc = dmc_exp.includes(feature.properties.DMC);
                const insector = sector_exp.includes(feature.properties.SECTOR);
                const instatus = project_status_exp.includes(feature.properties.PROJ_STATUS);
                const inyear = year_exp.includes(feature.properties.YEAR_APPROVAL);

                return indmc && insector && instatus && inyear;
            });

            const filteredProjects = {
                type: 'FeatureCollection',
                features: filteredFeatures,
            };

            turf.featureEach(filteredProjects, function (currentFeature, featureIndex) {
                filterCount++;
            });

            document.getElementById('label-filtered-projects').innerHTML = filterCount;
        })

    document.getElementById('label-clicked-projects').innerHTML = 0;

}

function clearProjectsList() {
    var listings = document.getElementById('listings');
    listings.innerHTML = null;
}

const CLEANTABLENAMES = {
    'DMC': 'Country',
    'PROJ_NO': 'Project No.',
    'CLOSE_DATE': 'Close Date',
    'PROJ_INFO': 'Project Information',
    'APPROVAL': 'Approval Date',
    'LOC_NAME': 'Project Location',
    'SECTOR': 'Sector'
}

function generatePropTable(prop) {
    const toAdd = ['DMC', 'PROJ_NO', 'CLOSE_DATE', 'PROJ_INFO', 'APPROVAL', 'LOC_NAME', 'SECTOR'];
    var prop_table ='<table><thead><tr><th></th><th></th></tr></thead><tbody>';
        $.each(prop, function(k, v) {
            if (toAdd.includes(k)) {
                prop_table += '<tr><td class="px-1"><strong>' +CLEANTABLENAMES[k]+ '</strong></td class="px-1"><td>' +v+ '</td></tr>'
            }
            // console.log(k + " , " + v);
        });
        prop_table +=  '</tbody></table>';
    
    return prop_table;
}

function zoomToCurrentProject(currentProject) {
    map.flyTo({
        center: currentProject.geometry.coordinates,
        zoom: 13
    });
}

function buildProjectsList(projects) {
    clearProjectsList();
    projects.forEach(function (project, i) {
        var prop = project.properties;

        /* Add a new listing section to the sidebar. */
        // var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        // listing.id = 'listing-' + prop.FID;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above. */
        var title = listing.appendChild(document.createElement('div'));
        // link.href = '#';
        // link.className = 'title';
        // link.id = 'link-' + prop.FID;
        title.innerHTML = `${i + 1}. ${prop.PROJ_TITLE}`;
        var links = listing.appendChild(document.createElement('div'));
        links.classList.add('row', 'mx-1')
        var linkToProject = links.appendChild(document.createElement('a'));
        linkToProject.classList.add('col-4','btn', 'btn-primary', 'btn-sm', 'me-1', 'my-2', 'small')
        linkToProject.innerHTML = `Open in ABD.org`;
        linkToProject.href = prop.PROJ_SITE;
        linkToProject.target = '_blank';
        var linkToSPADE = links.appendChild(document.createElement('a'));
        linkToSPADE.classList.add('col-4','btn', 'btn-info', 'btn-sm', 'me-1', 'my-2', 'small')
        linkToSPADE.innerHTML = `Open in SPADE`;
        var zoomToProject = links.appendChild(document.createElement('a'));
        zoomToProject.classList.add('col-3','btn', 'btn-success', 'btn-sm', 'my-2', 'small')
        zoomToProject.innerHTML = `Zoom to Map`;
        zoomToProject.id = 'link-' + prop.id;
        zoomToProject.addEventListener('click', function(e) {
            for (var i=0; i < projects.length; i++) {
                if (this.id === 'link-' + projects[i].properties.id) {
                    zoomToCurrentProject(projects[i]);
                }
            }
        })
        

        // Create the parent accordion container
        var accordionContainer = listing.appendChild(document.createElement('div'));
        accordionContainer.className = 'accordion';
        accordionContainer.id = 'accordion-project-' + i;

        // Accordion Item 1
        var accordionItem1 = accordionContainer.appendChild(document.createElement('div'));
        accordionItem1.className = 'accordion-item';

        var headingOne = accordionItem1.appendChild(document.createElement('span'));
        headingOne.classList.add('accordion-header');
        headingOne.id = 'heading-' + i;

        var buttonOne = headingOne.appendChild(document.createElement('button'));
        buttonOne.classList.add('accordion-button', 'small');
        // buttonOne.type = 'button';
        buttonOne.dataset.bsToggle = 'collapse';
        buttonOne.dataset.bsTarget = '#collapse-' + i;
        buttonOne.setAttribute('aria-expanded', 'false');
        buttonOne.setAttribute('aria-controls', 'collapse-' + i);
        buttonOne.textContent = 'Project Information';

        var collapseOne = accordionItem1.appendChild(document.createElement('div'));
        collapseOne.id = 'collapse-' + i;
        collapseOne.className = 'accordion-collapse collapse';
        collapseOne.setAttribute('aria-labelledby', 'heading' + i);
        collapseOne.dataset.bsParent = '#accordion-project-' + i;


        var bodyOne = collapseOne.appendChild(document.createElement('div'));
        bodyOne.className = 'accordion-body';
        bodyOne.innerHTML = generatePropTable(prop);

    })
}

function removeFeatureStatesAll(arr) {
    arr.forEach((dataSource, i) => {
        map.removeFeatureState({
            source: dataSource
        })
    })
}
// })