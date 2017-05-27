function ClozeCard(fullText,cloze) {

	this.fullText = fullText
	this.cloze = cloze 
	this.partial = this.fullText.replace(this.cloze,"...")
	// this.replace = function (){
	// 	if this
	// }


}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.","George Washington")

console.log(firstPresidentCloze.fullText)
console.log(firstPresidentCloze.cloze)
console.log(firstPresidentCloze.partial)

// if (firstPresidentCloze.fullText.indexOf(firstPresidentCloze.cloze)>=0) {
// 	console.log("Yes")
// 	var partial = firstPresidentCloze.fullText.replace(firstPresidentCloze.cloze,"...")
// 	console.log(partial)
// }

