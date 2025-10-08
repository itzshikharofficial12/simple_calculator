// let age = 90;

// if (age > 18) {
//     console.log("Eligible to Vote");
// } else if (age > 17) {
//     console.log("Too Much old to vote");
// } else {
//     console.log("Not Eligible to Vote");
// }


// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }


// let x = 5;

// if (x>0) {
//     let x = 10;
//     console.log(x);
// }
// console.log(x)

// Defining a function

// function func(a=5,b=7) {
//     console.log(a+b);
// }
// func(10,20)


// var func = () => {
//     console.log(5)
// };
// console.log(func())

// var conf = confirm("Are you ready ?"); 
// alert(conf);

// var conf = prompt("What's your name ? ");
// alert(conf);

// var userinput = prompt("Enter a number 1");
// var conf2 = prompt("Enter a number 2");
// // var oper = prompt("Enter the Sign");

// alert(Number(userinput) + Number(conf2));

// var userinput = prompt("Give me a Expression ?");

// if(userinput[1] = "+") {
//     alert(Number(userinput[0]) + Number(userinput[2]))
// }



function calculate() {
    let userinput = document.getElementById("Expression").value;
    if (userinput.includes("+")) {
        var conf2 = userinput.split("+");
        console.log(Number(conf2[0])+Number(conf2[1]));
        document.getElementById("out").innerText=output;
    } else if (userinput.includes("-")){
        var conf2 = userinput.split("-");
        console.log(Number(conf2[0])-Number(conf2[1]));
        document.getElementById("out").innerText=output;
    } else if (userinput.includes("*")){
        var conf2 = userinput.split("*");
        console.log(Number(conf2[0])*Number(conf2[1]));
        document.getElementById("out").innerText=output;
    } else if (userinput.includes("/")){
        var conf2 = userinput.split("/");
        console.log(Number(conf2[0])/Number(conf2[1]));
        document.getElementById("out").innerText=output;
    }
}