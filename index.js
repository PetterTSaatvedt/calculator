
var input = document.getElementById('input')

//Buttons for numbers
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
//Buttons for operators
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var multiply = document.getElementById('multiply')
var divide = document.getElementById('divide')
var equals = document.getElementById('equals')
//Buttons for others
var del = document.getElementById('delete')
var decimal = document.getElementById('decimal')


//Numbers
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



//Operators
plus.onclick = function addPlus(){
    input.innerHTML += ' + '
}

minus.onclick = function addMinus(){
    input.innerHTML += ' - '
}

multiply.onclick = function addMultiply(){
    input.innerHTML += ' * '
}

divide.onclick = function addDivide(){
    input.innerHTML += ' / '
}

//SUM
equals.onclick = function sum(){
    input.innerHTML = eval(input.innerHTML)
}

//Others
del.onclick = function deleteNumbers(){
    input.innerHTML = ''
}
