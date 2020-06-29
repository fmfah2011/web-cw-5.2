// let food =prompt("ماذا تحب ان تطلب؟")

// if(food == "shrimp"){
//     alert("you like shrimp!");
// }
// if(food == "pasta"){
//     alert("you like pasta");
// }
// if(food == "tacos"){
//     alert("you like tacos")
// }

let food =prompt("ماذا تحب ان تطلب؟")
switch (food){
    case 1:
        console.log("pizza");
        break;
        case 2:
            console.log("sushi");
            break;
            default:
                console.log("we dont have that");
                break;
}

let first_number = parseInt(prompt("first number"))
let second_number = parseInt(prompt("second number"))
let operation = parseInt(prompt("(* + - /)"))


switch(operation){
    case "+":
        console.log(first_number+second_number)
    break;
    case "-":
        console.log(first_number-second_number)
        break;
    case "*":
        console.log(first_number*second_number)
        break;
        default:
            console.log("wrong")
}

let age =parseInt(prompt("enter your age"))
if (age >= 5){
    console.log("روضه")
}
else if(age >=12){
    console.log("ابتدائي")
}
else if(age >= 16){
    console.log("متوسط")
}
else if(age >= 19){
    console.log("ثانوي")
}
