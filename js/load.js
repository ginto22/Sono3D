function loadJSON (url, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}


function loadSound(scene, name, uri, params, attached_obj){
	var son = new BABYLON.Sound(
		name,
		uri,
		scene,
		function(){},
		{loop:params.loop,
		 autoplay:params.autoplay,
		 spatialSound:params.spatialSound}) ;
	for (var i in attached_obj) {
		let mesh = scene.getMeshByName(attached_obj[i]);

		son.distanceModel = "exponential";
		son.attachToMesh(mesh) ;
	}

	son.setVolume(params.volume)
}
