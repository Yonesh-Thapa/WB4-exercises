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