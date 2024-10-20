// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input

let char = "P"
if (char === "P" || char === "p") {
    console.log("PrepBytes");
}
else if (char === "Z" || char === "z") {
    console.log("Zenith");
}
else if (char === "E" || char === "e") {
    console.log("Expert COder");
}
else if (char === "D" || char === "d") {
    console.log("Data Structure");
}
else {
    console.log("not a invalid character");
}