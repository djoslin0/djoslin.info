function clearSelectedThumbs(mediaId) {
	var thumbbox = document.getElementById("mediabox-" + mediaId + "-thumbbox")
	var thumbs = thumbbox.getElementsByClassName("mediabox-thumb")
	var i;
	for (i = 0; i < thumbs.length; i++) {
		removeClass(thumbs[i], "mediabox-thumb-selected")
	}
}

function mediaboxImage(mediaId, newSrc, thumb) {   
	clearSelectedThumbs(mediaId)
	
	var mbImage = document.getElementById("mediabox-" + mediaId + "-image")
	var mbYoutube = document.getElementById("mediabox-" + mediaId + "-youtube")
	var mbWebm = document.getElementById("mediabox-" + mediaId + "-webm")
	var mbFullscreen = document.getElementById("mediabox-" + mediaId + "-fullscreen")
	
	mbYoutube.src = ""
	
	if(mbImage.src !== newSrc){
		mbImage.src = newSrc
		thumb.className += " mediabox-thumb-selected"
	}
	
	mbImage.style.visibility = 'visible'
	mbFullscreen.style.visibility = 'visible'
	mbYoutube.style.visibility = 'hidden'
	mbWebm.style.visibility = 'hidden'
}

function mediaboxYoutube(mediaId, youtubeId, thumb) {   
	clearSelectedThumbs(mediaId)
	
	var mbImage = document.getElementById("mediabox-" + mediaId + "-image")
	var mbYoutube = document.getElementById("mediabox-" + mediaId + "-youtube")
	var mbWebm = document.getElementById("mediabox-" + mediaId + "-webm")
	var mbFullscreen = document.getElementById("mediabox-" + mediaId + "-fullscreen")
	
	var newSrc = "https://www.youtube.com/embed/" + youtubeId + "?autoplay=1"
	
	if(mbYoutube.src !== newSrc){
		mbYoutube.src = newSrc
		thumb.className += " mediabox-thumb-selected"
	}
	
	mbYoutube.style.visibility = 'visible'
	mbFullscreen.style.visibility = 'hidden'
	mbImage.style.visibility = 'hidden'
	mbWebm.style.visibility = 'hidden'
}

function mediaboxWebm(mediaId, newSrc, thumb) {   
	clearSelectedThumbs(mediaId)
	
	var mbImage = document.getElementById("mediabox-" + mediaId + "-image")
	var mbYoutube = document.getElementById("mediabox-" + mediaId + "-youtube")
	var mbWebm = document.getElementById("mediabox-" + mediaId + "-webm")
	var mbFullscreen = document.getElementById("mediabox-" + mediaId + "-fullscreen")
	
	mbYoutube.src = ""
	
	if(mbWebm.src !== newSrc){
		mbWebm.src = newSrc
		thumb.className += " mediabox-thumb-selected"
	}
	
	mbWebm.style.visibility = 'visible'
	mbFullscreen.style.visibility = 'hidden'
	mbYoutube.style.visibility = 'hidden'
	mbImage.style.visibility = 'hidden'
}

function fullscreenImage(mediaId) {
	var mbImage = document.getElementById("mediabox-" + mediaId + "-image")
	var fsDiv = document.createElement("div")
	fsDiv.id = "fullscreen-box"
	
	var image = document.createElement("img")
	image.src = mbImage.src
	image.id = "fullscreen-image"
	
	fsDiv.onclick = fullscreenMinimize
	image.onclick = fullscreenMinimize
	
	fsDiv.appendChild(image)
	document.body.appendChild(fsDiv)
}

function fullscreenMinimize() {
	var fsDiv = document.getElementById("fullscreen-box")
	var fsImage = document.getElementById("fullscreen-image")
	if(fsDiv && fsImage) {
		fsDiv.removeChild(fsImage)
		document.body.removeChild(fsDiv)
	}
}

function removeClass(node, cls) {
	if(node && node.className && node.className.indexOf(cls) >= 0) {
		var pattern = new RegExp('\\s*' + cls + '\\s*');
		node.className = node.className.replace(pattern, ' ');
	}
}