
var input = document.getElementById('input')

var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')
var zero = document.getElementById('zero')


one.onclick = function addOne(){
    input.innerHTML += 1
}

two.onclick = function addTwo(){
    input.innerHTML += 2
}

three.onclick = function addThree(){
    input.innerHTML += 3
}

four.onclick = function addFour(){
    input.innerHTML += 4
}

five.onclick = function addFive(){
    input.innerHTML += 5
}

six.onclick = function addSix(){
    input.innerHTML += 6
}

seven.onclick = function addSeven(){
    input.innerHTML += 7
}

eight.onclick = function addEight(){
    input.innerHTML += 8
}

nine.onclick = function addNine(){
    input.innerHTML += 9
}

zero.onclick = function addZero(){
    input.innerHTML += 0
}

