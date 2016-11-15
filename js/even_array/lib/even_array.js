function EvenArray(array = []){
   var answer = [];
	if (array.length!=0){
	
	    for (var i =0; i< array.length ;i++){
	        if (array[i]%2 == 0) {
	           answer.push(array[i]);
	        }
	    }
	}
	
	return answer;
	
}

module.exports = EvenArray;
