
/*const myConsole = {};
myConsole.__proto__ = console;
myConsole.log=function(arg){
    this.__proto__.log(arg);
    localStorage.setItem('fromConsole', arg);
};
console=myConsole;*/

let tmp;
tmp = window.console.log;
const myConsole = {};
myConsole.log = function(){
    let join = [].join;
    tmp(...arguments);
    localStorage.setItem('fromConsole', join.call(arguments, "; ") );
}

console.log=myConsole.log;

console.log("1", window, 5, 6, 7, 8);