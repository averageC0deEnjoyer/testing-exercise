function analyzeArray(array){
    let sum = array.reduce((a,b)=> a+b,0);
    let avg = (sum/array.length) || 0;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    return{
        average:avg,
        min:min,
        max:max,
        length:length
    }
}


console.log(analyzeArray([1,2,3,4,5]))

module.exports = analyzeArray;