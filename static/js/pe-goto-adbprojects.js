function createADBUrlStr(filterID, strArr, len, strVal) {
    var x = $(filterID).find("option:selected");
    if (x.length != len){
        for(var i=0; i < x.length; i++){
            var formattedStr = strVal + x[i].value;
            strArr.push(formattedStr);
        }
    }
}

function seeAtADB() {
    var formattedStrs = [];

    createADBUrlStr('#select-dmc', formattedStrs, OPTS.dmc.length, '/country/');
    createADBUrlStr('#select-sector', formattedStrs, OPTS.sectors.length, '/sector/');
    createADBUrlStr('#select-theme', formattedStrs, OPTS.themes.length, '/theme/');
    createADBUrlStr('#select-project-status', formattedStrs, OPTS.project_status.length, '/status/');


    // var dmc = $('#select-dmc').find("option:selected");
    // if (dmc.length != OPTS.dmc.length){
    //     for (var i=0; i < dmc.length; i++){
    //         var formattedStr = '/country/' + dmc[i].value;
    //         formattedStrs.push(formattedStr);
    //     }
    // };
   
    // var sectors = $('#select-sector').find("option:selected");
    // if (sectors.length != OPTS.sectors.length){
    //     for (var i=0; i < sectors.length; i++){
    //         var formattedStr = '/sector/' + sectors[i].value;
    //         formattedStrs.push(formattedStr);
    //     } 
    // };
                 
    // var themes = $('#select-theme').find("option:selected");
    // if (themes.length != OPTS.themes.length){
    //     for (var i=0; i < themes.length; i++){
    //         var formattedStr = '/theme/' + themes[i].value;
    //         formattedStrs.push(formattedStr);
    //     } 
    // };
    
    // var project_status = $('#select-project-status').find("option:selected");
    // if (project_status.length != OPTS.project_status.length){       
    //     for (var i=0; i < project_status.length; i++){
    //         var formattedStr = '/status/' + project_status[i].value;
    //         formattedStrs.push(formattedStr);
    //     }
    // };
    
    var years = $('#select-year').find("option:selected");
    if (years.length != new Date().getFullYear() - 1966){ 
        for (var i=0; i < years.length; i++){
            var formattedStr = '/year/' + years[i].value;
            formattedStrs.push(formattedStr);
        } 
    };

    // WORKS
    var finalStr = formattedStrs.join('');

    // Generate the URL based on variables
    var generatedUrl = "https://www.adb.org/projects/" + finalStr;

    // Navigate to the generated URL
    window.open(generatedUrl, '_blank')
}

// Add a click event listener to the button
document.getElementById("seeAtADBbtn").addEventListener("click", seeAtADB);