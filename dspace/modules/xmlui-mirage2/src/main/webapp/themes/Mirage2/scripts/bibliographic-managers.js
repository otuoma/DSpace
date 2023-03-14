window.onload = bibliographic_managers();

function bibliographic_managers() {
    if (document.getElementById("aspect_artifactbrowser_ItemViewer_div_item-view")) {
        set_reference("refworks", "rfw");
        set_reference("bibtext", "bib");
        set_reference("zotero", "ris");
//        set_reference("citeulike", "bib");
        set_reference("mendeley", "ris");
    }
    return
};

function set_reference(name, format){
    var a = document.getElementById(name+"_export");
    a.download = name+"."+format;
    
    var d = document.getElementById(name).innerHTML;
    a.href = "data:application/octet-stream," + encodeURIComponent(d);
}
