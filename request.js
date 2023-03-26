
const span = document.getElementById("wordSpan");
const mode = document.getElementById("mode");

function update(){
	fetch("https://random-word-api.herokuapp.com/word")
  .then((response) => response.json())
  .then((data) => {
	  span.innerText = data;
	  localStorage.setItem(localStorageKey, data);
  });
}


function erase(){
	localStorage.removeItem(localStorageKey);
	onstart();
}

onstart();

function onstart(){
	word = localStorage.getItem(localStorageKey);
	if (word !== null){
		span.innerText = word;
	}
	else{
		span.innerText = "your first word will be here";
	}
}



