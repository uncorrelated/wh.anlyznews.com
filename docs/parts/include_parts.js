function include_parts(id, url){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	  var rhs = document.getElementById(id);
	  if (req.readyState == 4) {
	if (req.status == 200) {
	rhs.innerHTML = req.responseText;
	}
	  } else {
	// result.innerHTML = "reading...";
	  }
	}
	req.open('GET', url, true);
	req.send(null);
}
