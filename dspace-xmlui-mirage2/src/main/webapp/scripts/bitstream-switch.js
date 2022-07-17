
function loadBitstream(src){

	let elem = document.getElementById("bitstreamWrapper");
	let bitstreamIframe = document.getElementById("bitstreamIframe");
	let alertDiv = document.getElementById("alertDiv");

	if (src.includes("isAllowed=y")){

		if( bitstreamIframe == null){ // create the element if it does not exist yet
			bitstreamIframe = document.createElement("iframe");
			bitstreamIframe.setAttribute("id", "bitstreamIframe");
			bitstreamIframe.setAttribute("style", "border: none; height:650px; width:100%;");
		}

		bitstreamIframe.setAttribute("src", src);
		elem.appendChild( bitstreamIframe );

		if ( alertDiv !== null ){
			elem.removeChild(alertDiv);
		}

	}else{ // not allowed to view

		if( alertDiv == null){ // create the element if it does not exist yet
			alertDiv = document.createElement("div");
			alertDiv.setAttribute("class", "alert alert-info");
			alertDiv.setAttribute("id", "alertDiv");

			elem.appendChild(alertDiv);
			alertDiv.innerText = "Document is not available to view";
		}

		if (bitstreamIframe !== null){
			elem.removeChild(bitstreamIframe);
		}

	}

}

window.addEventListener("load", function () {

	/***
	 * checks for the first bitstream file that is viewable by the user
	 * @type {HTMLElement}
	 */

	let bitstreamWrapper = document.getElementById("bitstreamWrapper");

	if ( bitstreamWrapper != null ){

		let idVal = bitstreamWrapper.firstElementChild.getAttribute("id");
		bitstreamWrapper.innerHTML = "";
		loadBitstream( idVal );
	}
	
	bitstreamWrapper.addEventListener('copy', (event) => {
	    event.preventDefault();
	});
	
	bitstreamWrapper.addEventListener('cut', (event) => {
	    event.preventDefault();
	});
	
	window.addEventListener('beforeprint', (event) => {
	  event.preventDefault();
	});

});

window.addEventListener('beforeprint', (event) => {
	  event.preventDefault();
	});

