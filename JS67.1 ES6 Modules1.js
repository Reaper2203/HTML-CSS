export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * radius * PI;
}

export function getArea(radius){
    return PI * Math.pow(radius, 2);
    //or
    //return PI * radius * radius;
}