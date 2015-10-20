var wordsWritten = document.getElementsByTagName("var");

var wordBank ={};

for (var i = 0; i < wordsWritten.length; i++){
	wordsWritten[i].addEventListener("click", function(){
		if (document.getElementsByClassName("vortarobobelo").length != 0){
			var wordbubble = document.getElementsByClassName("vortarobobelo")[0].children[0]
			var words = wordbubble.children

			for (var i = 0; i < words.length; i++ ){
				var word = words[i].children[0].innerText; // the word
				var translation = words[i].children[1].innerText; // the translation
				wordBank[word] = translation;
				console.log(word,translation);
			}
		}			
	})
};