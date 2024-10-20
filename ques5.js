// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input

let A = 20
let B = 60
let C = 100 
if(A<90 && B < 90 && C <90){
    
    console.log("Acute triangle");
}
else if(A<90 || B < 90 || C <90){
    console.log("Obtuse triangle");
}