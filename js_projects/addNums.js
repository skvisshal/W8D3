const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) { 
        reader.question("Please put in a number: ", function (answer) {
            sum += parseInt(answer);
            console.log(sum);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
        });
    } else {
        return completionCallback(sum);
        }

};

addNumbers(0, 3, sum => {
    console.log(`Total Sum: ${sum}`);
    reader.close();
    }
);
