const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    var dict = {}
    
    for ( let i of arr){
        if (i in dict){
            dict[i]+= 1
        }
        else {
            dict[i]= 1
        }
    }
    return dict
}

console.log(makeFrequencyTable(arr1), "should be", expected1);
console.log(makeFrequencyTable(arr2), "should be", expected2);
console.log(makeFrequencyTable(arr3), "should be", expected3);