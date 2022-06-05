const userInput = document.querySelector('#result')
let expression = ""
const percent = document.querySelector('.buttons__button:nth-child(3)')
console.log(percent)
function press(num) {
    expression += num;
    userInput.value = expression;


}

function equal() {

    if (expression.includes("%")){
        expression = "";
        let arr = userInput.value.split("%");
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
            arr[i] = eval(arr[i]);

        }
        expression =Number(arr[0]/100) * Number(arr[1]);

        if (arr.length > 2){
        for (let i = 2; i <= arr.length-1; i++) {
            expression = Number(expression)/100 * Number(arr[i]);
            console.log("suda suka");
        }
        }
        console.log(arr.length)
    }
    console.log(expression)
    userInput.value = eval(expression);

    expression = userInput.value;

}
function erase() {
    expression = '';
    userInput.value = expression
}
