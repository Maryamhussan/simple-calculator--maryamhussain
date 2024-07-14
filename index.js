#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "Firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select One Of the operators to perform Operations",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "Multiplication", "Division"],
    },
]);
//conditional instatement
if (answer.operator === "addition") {
    console.log(answer.Firstnumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.Firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.secondnumber);
}
else {
    console.log("please select operator");
}
