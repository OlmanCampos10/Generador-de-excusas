window.onload = () => {
document.querySelector('#excuse').innerHTML = generateExcuse()

};


let generateExcuse = () =>{

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


let whois = Math.floor(Math.random()* who.length);
let actionis = Math.floor(Math.random()* action.length);
let whatis = Math.floor(Math.random()* what.length);
let whenis = Math.floor(Math.random()* when.length);

return who[whois] + ' ' + action[actionis]+ ' ' + what[whatis]+ ' ' +when[whenis];
};