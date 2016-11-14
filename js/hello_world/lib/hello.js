// Creates object and assigns it to Hello.
var Hello = {

	helloWorld:function(name){
		var start = "hello ";
		var end = name == undefined? "world": name;
		var answer = start.concat(end);
		return answer;
	}
}

// Your code goes here.

// Exports Hello object.
module.exports = Hello
