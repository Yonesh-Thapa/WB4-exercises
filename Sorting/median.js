let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(score){
numOfScore = score.length;
let total = 0;
average = 0;
    for(i = 0; i < numOfScore; i++){
        total += score[i];
        average = total / numOfScore;
    }
    return average;
}

getAverage(myScores);
console.log(`My average score is ${average.toFixed(2)}`);

getAverage(yourScores);
console.log(`Your average score is ${average.toFixed(2)}`);

//test score
testScore = [10, 20];
getAverage(testScore);
console.log(`Average: ${average}`);

function getMedian(median){
    numNumbers = median.length;
    median.sort(function(a,b){
        if (a < b) return -1;
        else if (a == b) return 0;
        else return 1;
    })
    let medianNumber;
    if (numNumbers % 2 != 0){
        medianNumber = median[Math.round(numNumbers/2) -1];
    }
    else{
        medianNumber = ((median[(numNumbers/2) - 1]) + (median[(numNumbers/2)])) / 2;
    }
    console.log(`The median number is ${medianNumber}`)
}

getMedian(myScores);
getMedian(yourScores);

// test data
let test1 = [80, 83, 86, 92, 100];
let test2 = [80, 83, 86, 87, 92, 100];
getMedian(test1);
getMedian(test2);