$.get("index.html", function(data){
	$("#side-nav").replaceWith(data);
	//$("#footer").replaceWith(data);
});
