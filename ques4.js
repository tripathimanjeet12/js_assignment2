// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.
let X = 90
let Y = 78
let Z = 89
if (X < Y && X < Z && Y > X && Y < Z) {
    console.log(Y);
}
else if (Y < X && Y < Z && Y < Z && Y > X) {
    console.log(X);
}
else if (Z < X && Z < Y && Z < X && Z > Y) {
    console.log(Z);
}
else if (X > Y && X < Z && Y < Z && Y < X) {
    console.log(X);
}
else if (X > Y && X > Z && Y < X && Y < Z) {
    console.log(Z);
}
else if (X < Y && X < Z && Y > X && Y > Z) {
    console.log(Z);
}
else if (X < Y && X > Z && Y > X && Y > Z) {
    console.log(X);
}
else if (X > Y && X > Z && Y > Z && Y < X) {
    console.log(Y);
}
else {
    console.log("enter three distinct integer");
}