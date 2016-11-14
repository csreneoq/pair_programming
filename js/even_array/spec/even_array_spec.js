function generateRandomArray(nElem = 0) {
  ranArray = [];
  for(var i = 0; i < nElem; i++) {
    ranArray << Math.floor(Math.random() * 1000)
  }
  return ranArray;
}

function sumArrayElem(array = []) {
  acc = 0;
  for(var i = 0; i < array.length; i++){
    acc += array[i];
  }
  return acc;
}

describe('EvenArray', function () {
  EvenArray = require('../lib/even_array.js');
  it('return [] if nil is given', function() {
    expect(EvenArray()).toMatch([]);
  });

  it('return [] if an empty array is given',function() {
    expect(EvenArray([])).toMatch([]);
  });

  it('return [] if [1] is given', function() {
    expect(EvenArray([1])).toMatch([]);
  });

  it('return [2] if [2] is given', function() {
    expect(EvenArray([2])).toMatch([2]);
  });

  it('return [2] if [1,2] is given', function() {
    expect(EvenArray([1,2])).toMatch([2]);
  });

  it('return array only with even elements', function() {
    var nElem = 0;
    var randArray = [];
    // Test with 10 elements.
    nElem = 10;
    randArray = generateRandomArray(nElem);
    evenArray = EvenArray(randArray);
    sumEvenArray = sumArrayElem(evenArray);
    expect(sumArrayElem % 2).toBe(0);

    // Test with 100 elements.
    nElem = 100;
    randArray = generateRandomArray(nElem);
    randArray = generateRandomArray(nElem);
    evenArray = EvenArray(randArray);
    sumEvenArray = sumArrayElem(evenArray);
    expect(sumArrayElem % 2).toBe(0);

    // Test with 1000 elements.
    nElem = 1000;
    randArray = generateRandomArray(nElem);
    randArray = generateRandomArray(nElem);
    evenArray = EvenArray(randArray);
    sumEvenArray = sumArrayElem(evenArray);
    expect(sumArrayElem % 2).toBe(0);
  });
})
