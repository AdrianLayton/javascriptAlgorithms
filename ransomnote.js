function harmlessRansomNote(noteText, magazineText) {
	// Make sure all magazine text is lowercase and without spaces
	// Make noteText and magazineText into an array
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObject = {};	

	// Iterate through magazine array and then put each unique word in magazineObject
	magazineArr.forEach(word => {
		 if(!magazineObject[word]) {
		  	magazineObject[word] = 0; // If there isnt a magazine key for a word it makes one with the counter starting at 0;
		 }
		 magazineObject[word]++; // Whether it's a newly created from the above if statement
		 						 // or previously created it'll incrememnt the value by 1
	})
	var noteIsPossible = true;
	noteArr.forEach(word => {
		if(magazineObject[word]) magazineObject[word]--;

				if (magazineObject[word] < 0) noteIsPossible = false;

		else noteIsPossible = false;
		}
		return noteIsPossible;
}