
/*const myConsole = {};
myConsole.__proto__ = console;
myConsole.log=function(arg){
    this.__proto__.log(arg);
    localStorage.setItem('fromConsole', arg);
};
console=myConsole;*/

let tmp;
tmp = window.console;
const myConsole = {};
myConsole.log = function(){
    let join = [].join;
    tmp.log(...arguments);
    localStorage.setItem('fromConsole', join.call(arguments, "; ") );
}

console=myConsole;

console.log("1", window, 5, 6, 7, 8);