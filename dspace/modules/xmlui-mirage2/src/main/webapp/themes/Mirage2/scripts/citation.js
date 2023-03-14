document.getElementById("btnCitation").addEventListener("click", function() {
    // document.getElementById("modalCitacion").style.marginTop = document.documentElement.scrollTop + "px";
    // document.getElementById("modalCitacion").style.marginTop = "500px";
    crearCitaAPA()
});
document.getElementById("btnCitaAPA").addEventListener("click", function() {
    crearCitaAPA()
});
document.getElementById("btnCiteHarvard").addEventListener("click", function() {
    HarvardCitation()
});
document.getElementById("btnCitaIEEE").addEventListener("click", function() {
    crearCitaIEEE()
});
document.getElementById("btnCitaMLA").addEventListener("click", function() {
    crearCitaMLA()
});
document.getElementById("btnCitaChicago").addEventListener("click", function() {
    crearCitaChicago()
});
document.getElementById("btnCitaVancouver").addEventListener("click", function() {
    crearCitaVancouver()
});
// document.getElementById("btnCopiar").addEventListener("click", function() {
//     copiarPortapapeles()
// });

function enviarMensaje(a) {
    document.getElementById("txtCitation").innerHTML = a;
    return
}

function crearCitaAPA() {
    //var a = editarNombres(window.DSpace.metadata.dc_creator, "apa");
    //var authors = window.DSpace.metadata.dc_creator;
    //var a = authors.join(", ") + ' & ';
    //var a = window.DSpace.metadata.dc_creator;
    var authors = window.DSpace.metadata.dc_creator;
    var authcount = authors.length;
    var a;
        if (authcount == 1){
            a = authors;
        }else {
            var authors1 = authors.slice(0, -1);
            var authorslist1 = authors1;
            var lastAuthor = authors.slice(-1);
            var a1 = authorslist1.join(", ");
            var a2 = lastAuthor;
            var a = a1 + ", & " + a2;
        }

    a += " (" + window.DSpace.metadata.dc_date_created.trim().slice(0, 4) + ").";
    a += " <i>" + window.DSpace.metadata.dc_title.trim() + "</i>.";
    a += " " + window.DSpace.metadata.dc_identifier_uri.trim() + ".";
    //a += " Retrieved from: " + window.DSpace.metadata.dc_identifier_uri.trim() + ".";
    return enviarMensaje(a)
}
function HarvardCitation() {

    //var a = editarNombres(window.DSpace.metadata.dc_creator, "harvard");
    var authors = window.DSpace.metadata.dc_creator;
    var authcount = authors.length;
    var a;
        if (authcount == 1){
            a = authors;
        }else {
            var authors1 = authors.slice(0, -1);
            var authorslist1 = authors1;
            var lastAuthor = authors.slice(-1);
            var a1 = authorslist1.join(", ");
            var a2 = lastAuthor;
            var a = a1 + " and " + a2;
        }

    a += " (" + window.DSpace.metadata.dc_date_created.trim().slice(0, 4) + ") ";
    a += " <i>" + window.DSpace.metadata.dc_title.trim() + "</i>.";
    a += " Available at: " + window.DSpace.metadata.dc_identifier_uri.trim();
    a += " (Accessed: " + capturarFechaConsulta("harvard") + ") ";
    //a += " Retrieved from: " + window.DSpace.metadata.dc_identifier_uri.trim() + ".";
    return enviarMensaje(a)
}

function crearCitaIEEE() {
    //var a = editarNombres(window.DSpace.metadata.dc_creator, "ieee");

    var authors = window.DSpace.metadata.dc_creator;
    var authcount = authors.length;
    var a;
        if (authcount == 1){
            a = authors;
        }else {
            var authors1 = authors.slice(0, -1);
            var authorslist1 = authors1;
            var lastAuthor = authors.slice(-1);
            var a1 = authorslist1.join(", ");
            var a2 = lastAuthor;
            var a = a1 + " and " + a2 ;
        }

    a += "," + " <i>" + window.DSpace.metadata.dc_title.trim() + "</i>.";
    a += " [online]. Available: " + window.DSpace.metadata.dc_identifier_uri.trim() + ".";
    a += " [Accessed: " + capturarFechaConsulta("ieee") + "]. ";
    return enviarMensaje(a)
}

function crearCitaMLA() {

    //var a = editarNombres(window.DSpace.metadata.dc_creator, "mla");

    var authors = window.DSpace.metadata.dc_creator;
        var authcount = authors.length;
        var a;
        if (authcount >= 3){
            a = authors.slice(0, 1) + ", et. al";
        }else {
            var authors1 = authors.slice(0);
            var authorslist1 = authors1;
            var a1 = authorslist1.join(" and ");
            a = a1;
        }

    a += "." + ' "' + window.DSpace.metadata.dc_title.trim() + '".';
    a += " <i>Knowledge Repository - UNEP</i>.";
    a += " UNEP.";
    a += " " + window.DSpace.metadata.dc_date_created.trim().substr(0, 4) + ".";
    a += " Web. ";
    a += capturarFechaConsulta("mla");
    a += " &lt;" + window.DSpace.metadata.dc_identifier_uri.trim() + "&gt;";
    return enviarMensaje(a)
}

function crearCitaChicago() {
    //var a = editarNombres(window.DSpace.metadata.dc_creator, "chicago");
    var authors = window.DSpace.metadata.dc_creator;
    var authcount = authors.length;
    var a;
        if (authcount == 1){
            a = authors;
        }else {
            var authors1 = authors.slice(0, -1);
            var authorslist1 = authors1;
            var lastAuthor = authors.slice(-1);
            var a1 = authorslist1.join(", ");
            var a2 = lastAuthor;
            var a = a1 + " and " + a2 ;
        }

    a += "." + " " + window.DSpace.metadata.dc_date_created.trim().substr(0, 4) + ".";
    a += " <i>" + window.DSpace.metadata.dc_title.trim() + "</i>.";
    a += " " + window.DSpace.metadata.dc_identifier_uri.trim();
    return enviarMensaje(a)
}

function crearCitaVancouver() {

    //var a = editarNombres(window.DSpace.metadata.dc_creator, "vancouver");
    
    var authors = window.DSpace.metadata.dc_creator;
    var authcount = authors.length;
    var a;
        if (authcount == 1){
            a = authors;
        }else {
            var authors1 = authors.slice(0, -1);
            var authorslist1 = authors1;
            var lastAuthor = authors.slice(-1);
            var a1 = authorslist1.join(", ");
            var a2 = lastAuthor;
            var a = a1 + ", " + a2 ;
        }

    //title
    var title = window.DSpace.metadata.dc_title;
    var title1 = title.toLowerCase();
    var title2 = title1.charAt(0).toUpperCase() + title1.slice(1);

    a += "." + " " + title2 + ".";
    a += " [Internet].";
    a += " " + window.DSpace.metadata.dc_date_created.trim().substr(0, 4) + ".";
    a += " [quote: " + capturarFechaConsulta("vancouver") + "]";
    a += " Available from: " + window.DSpace.metadata.dc_identifier_uri.trim();
    return enviarMensaje(a)
}

function editarNombres(g, c) {
    // c - format name
    //g[d].split(',')[1] - first name
    var e = [];
    var b = [];
    var f = [];
    var a = "";
    var d = 0;
    switch (c) {
        case "apa":
            for (d = 0; d < g.length; d++) {
                
                // if it is not a human name (organization name) skip steps
                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].split(" ")[0].trim();
                
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim().charAt(0) + ".";
                
                if (g[d].split(",")[1].trim().split(" ")[1] !== undefined) {
                    e[d] += " " + g[d].split(",")[1].trim().split(" ")[1].trim().charAt(0) + "."
                }
                f[d] = b[d] + ", " + e[d]
            }
            break;
        case "harvard":
            for (d = 0; d < g.length; d++) {
                
                // if it is not a human name (organization name) skip steps
                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].split(" ")[0].trim();
                
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim().charAt(0) + ".";
                
                if (g[d].split(",")[1].trim().split(" ")[1] !== undefined) {
                    e[d] += " " + g[d].split(",")[1].trim().split(" ")[1].trim().charAt(0) + "."
                }
                f[d] = b[d] + ", " + e[d]
            }
            break;
        case "ieee":
            for (d = 0; d < g.length; d++) {

                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].split(" ")[0].trim();
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim().charAt(0) + ".";
                if (g[d].split(",")[1].trim().split(" ")[1] !== undefined) {
                    e[d] += " " + g[d].split(",")[1].trim().split(" ")[1].trim().charAt(0) + "."
                }
                f[d] = e[d] + " " + b[d]
            }
            break;
        case "mla":
            for (d = 0; d < g.length; d++) {

                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].trim().toUpperCase();
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim() + ".";
                f[d] = b[d] + ", " + e[d]
            }
            break;
        case "chicago":
            for (d = 0; d < g.length; d++) {

                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].trim();
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim() + ".";
                f[d] = b[d] + ", " + e[d]
            }
            break;
        case "vancouver":
            for (d = 0; d < g.length; d++) {

                if( g[d].split(",").length < 2 ){
                    f[d] = g[d];
                    break;
                }

                b[d] = g[d].split(",")[0].split(" ")[0].trim();
                e[d] = g[d].split(",")[1].trim().split(" ")[0].trim().charAt(0) + ".";
                f[d] = b[d] + ", " + e[d]
            }
            break
    }
    switch (f.length) {
        case 0:
            a = " ";
            break;
        case 1:
            a = f[0];
            break;
        case 2:
            a = f[0] + " & " + f[1];
            break;
        case 3:
            a = f[0] + ", " + f[1] + " & " + f[2];
            break;
        default:
            a = f[0] + ", <i>et al.</i> "
    }
    return a
}

function capturarFechaConsulta(b) {
    var a = "";
    var c = new Date();
    switch (b) {
        case "mla":
            a = c.getDate() + " " + convertirMes(c.getMonth(), "c") + " " + c.getFullYear();
            break;
        case "vancouver":
            a = c.getFullYear() + ", " + convertirMes(c.getMonth(), "l");
            break
        case "harvard":
            a = c.getDate() + " " + convertirMes(c.getMonth(), "l") + " " + c.getFullYear();
            break
        case "ieee":
            //a = c.getDate() + "- " + convertirMes(c.getMonth(), "l") + "- " + c.getFullYear();
            a = convertirMes(c.getMonth(), "c") + ". " + c.getDate() + ", " + + c.getFullYear();
            break
    }
    return a
}

function convertirMes(a, b) {
    switch (b) {
        case "c":
            switch (a) {
                case 0:
                    a = "Jan";
                    break;
                case 1:
                    a = "Feb";
                    break;
                case 2:
                    a = "Mar";
                    break;
                case 3:
                    a = "Apr";
                    break;
                case 4:
                    a = "May";
                    break;
                case 5:
                    a = "Jun";
                    break;
                case 6:
                    a = "Jul";
                    break;
                case 7:
                    a = "Aug";
                    break;
                case 8:
                    a = "Sept";
                    break;
                case 9:
                    a = "Oct";
                    break;
                case 10:
                    a = "Nov";
                    break;
                case 11:
                    a = "Dec";
                    break
            }
            break;
        case "l":
            switch (a) {
                case 0:
                    a = "January";
                    break;
                case 1:
                    a = "February";
                    break;
                case 2:
                    a = "March";
                    break;
                case 3:
                    a = "April";
                    break;
                case 4:
                    a = "May";
                    break;
                case 5:
                    a = "June";
                    break;
                case 6:
                    a = "July";
                    break;
                case 7:
                    a = "August";
                    break;
                case 8:
                    a = "September";
                    break;
                case 9:
                    a = "October";
                    break;
                case 10:
                    a = "November";
                    break;
                case 11:
                    a = "December";
                    break
            }
            break
    }
    return a
}

function copiarPortapapeles() {
    var a = new Clipboard(".copy-button")
};