$.get("index.html", function(data){
	$("#side-bar").replaceWith(data);
	//$("#footer").replaceWith(data);
});
