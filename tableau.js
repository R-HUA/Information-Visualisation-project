var workbook,activeSheet;
function initViz() {
    var containerDiv = document.getElementById("tableauViz");
    var iFrameDiv = document.getElementById("iFrameViz");

    url = "https://public.tableau.com/views/A3_V2/POIMAP?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
    url_barchart = "https://public.tableau.com/views/A3_V2/MonthVSPedestrianVolume?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
    var options = {
        width:'100%',
        height:1000,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive:function(){
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();

        }

    }

    var viz = new tableau.Viz(containerDiv, url,options);
    var viz_iframe = new tableau.Viz(iFrameDiv, url_barchart,options);
}


function filterOnTransport() {
    activeSheet.applyFilterAsync(
        'Theme',
        'Transport',
        tableau.FilterUpdateType.REPLACE
    );
}

function clearFilter(){
    activeSheet.clearFilterAsync('Theme');
}

function SwitchTab(sheetName) {
    workbook.activateSheetAsync(sheetName);
}



function hideIframe(iframe_id) {
    let element = document.getElementById(iframe_id);
    let button = document.getElementById('hide_frame_btn')
    let hidden = element.getAttribute("hidden");
    
    if (hidden) {
        element.removeAttribute("hidden");
        button.innerText = "Hide Iframe";
        } else {
            element.setAttribute("hidden", "hidden");
            button.innerText = "Show Iframe";
    }
}

function showIframe(iframe_id) {
    let element = document.getElementById(iframe_id);
    let button = document.getElementById('show_frame_btn')
    let hidden = element.getAttribute("hidden");
    
    if (hidden) 
    {
        element.setAttribute("show", "show");
        button.innerText = "Show Iframe";
    } else {
        element.setAttribute("hide", "hide");
        button.innerText = "Hide Iframe";
    }
}



