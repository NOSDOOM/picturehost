var whatElem;

$("*").contextmenu(function(event) {
	console.log($( this ).get(0))
	whatElem = $( this ).get(0);
})
