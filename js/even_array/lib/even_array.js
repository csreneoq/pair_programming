function EvenArray(array = []){
   var answer = [];
	if (array.length!=0){
	   answer = myFilter(array,isEven);	    	
	}	
	return answer;
}

function isEven(n){
	return n %2 ==0;
}

function myFilter(inArray = [], conditionIsTrue) {

    var head = inArray[0];    

	if (head == undefined) {
		return [];
	}else 

    inArray.shift();

    if (!conditionIsTrue(head)){
		return myFilter(inArray,conditionIsTrue);
	}else

    return [head].concat(myFilter(inArray, conditionIsTrue));
	
}

module.exports = EvenArray;
