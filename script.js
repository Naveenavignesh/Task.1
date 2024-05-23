const array1 = ['a','b', 'c' ,'d', 'e'];
for (const elememt of array1){
    console.log(elememt);
}

numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log ('Index: ' + index + ',value:' + number);
    
});
 for (let i =1; i<=10; i++){
    console.log(i);
 }
 const object = { a: 5, b: 6, c: 7};
 for (const property in object){
    console.log('${property}: ${object[property]}');
 }