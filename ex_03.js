function map(elements, modifier){

let array= [];

for(let i = 0; i < elements.length; i++){
    array[array.length] = modifier(elements[i]);
}

    return array;
}function isEven ( number ) {
    return number % 2 === 0;
}

console . log ( map ([5 , 8 , 10] , isEven ) ) ;