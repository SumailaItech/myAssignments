const sayHello = name => console.log('Hi ' + name);
const sayHello1 =(name, phrase ='Hello') => console.log(phrase+' '+name);
const sayHello2 = ()=>console.log('I am still learning the javascript');
const sayHello3 = name => 'Hello ' + name;

sayHello('Sumaila');
sayHello1('Sumaila','Hi');
sayHello2();
console.log(sayHello3('Sumaila'));

function checkInput(callBack, ...strings){
let isEmpty = false;
for(const str of strings){
  if(!str){
    isEmpty = true;
    break;
  }
}
if(!isEmpty){
  callBack();
}
}

checkInput (()=>{
  console.log('All are not empty'),'Hi','Hello','There','12','ab','cb'
});