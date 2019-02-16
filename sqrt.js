function main(input) {
    input.split("\n").forEach(function(n) {
        console.log(n); 
    });
}
const absolute = number => {
    return (number < 0 ? -1*number : number)
}
const sqrt = number =>{
    let estimated = 1.00
    let flag, result
    let exit = 1    
    let precision = 0.00001

    while(exit !== 0){
        result = estimated + ((number-( estimated*estimated ))/( 2*estimated ))
        flag = result * result
        if(flag - number === 0 || absolute(flag - number) < precision || estimated === result){
            exit = 0
        }else{
            estimated = result
        }
    }
    return result.toFixed(3)
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
    let numbers = stdin_input.split('\r\n')
    numbers = numbers[0].split(' ')
    stdin_input = []
    if(numbers.length === 1){
        if(numbers[0] === '0') return
        let result = sqrt(numbers[0])
        console.log(`${numbers[0]}: ${result}`)
    }
});
process.stdin.on("end", function () {
   main(stdin_input);
});
