document.querySelector('body').appendChild(document.createElement("p"));
let body = document.querySelector('body');
body.innerHTML = '<div id="main-div">';
let mainDiv = document.querySelector('#main-div');
mainDiv.appendChild(document.createElement('p'))
mainDiv.innerHTML="<div id='main-div-title'>";
document.querySelector('#main-div-title').innerHTML="Module 1: Assignment 1";
document.querySelector('#main-div').appendChild(document.createElement('h5')).setAttribute('id', 'main-div-head')
document.querySelector('#main-div-head').innerHTML= "Financial Planning Tips";
document.querySelector('#main-div').appendChild(document.createElement('div')).setAttribute('id','main-div-list');
function createEl(){
  let el = document.querySelector('#main-div-list').appendChild(document.createElement('ol'));
  for (let i=1; i < 6; i++){
    el.appendChild(document.createElement('li')).setAttribute('id', `main-div-pr${i}`);
  }
  return el;
}
createEl();
const p1 = 'Reduce spending on non-necessities.'
const p2 = 'Use extra money to pay off debt, starting with highest-interest credit cards.'
const p3 = 'Continue paying off debts until you are debt free.'
const p4 = 'Put a fixed percent of your pay aside every payday.'
const p5 = 'Create a realistic budget and follow it faithfully.'
document.querySelector('#main-div-pr1').innerHTML= p1;
document.querySelector('#main-div-pr2').innerHTML= p2;
document.querySelector('#main-div-pr3').innerHTML= p3;
document.querySelector('#main-div-pr4').innerHTML= p4;
document.querySelector('#main-div-pr5').innerHTML= p5;
