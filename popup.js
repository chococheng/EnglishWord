//word
Parse.initialize("z5hnReuaLA5wsj2kd1QDS9bGrPs1bYLwXUydBfVj", "XHUzfRBjnBXWgPgujvnB4Dh2Y1nmZSMh9zLHspXU");

 var r =confirm("y: add a new word, n: review a word");
 var Word=Parse.Object.extend("Word");
 
 function create()
 {
	word=new Word();
	word.save({
		new_word: newWord,
		new_Chin: newChin
	});
 }
 if(r==true)
 {
	var newWord = prompt("Let's add a new word");
	var newChin = prompt("And its Chinese");
	create();
 }
 else
 {	
	var query = new Parse.Query(Word);
	
	query.notEqualTo("new_Chin", null);
		query.find({
		success: function(results) {
			
			for (var i = 1; i <= results.length; i++) { 
			var object = results[i];
			var r =Math.floor((Math.random()*results.length)+0);
			var obj=results[r];
			
			}
			
			alert(obj.get('new_word')+" "+obj.get('new_Chin'));
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});	

 }
 