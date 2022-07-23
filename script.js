let input = document.getElementById('inputtext');

let calculate = (number) => {
    input.value = input.value + number;
}

let result =()=> {
    try {
        input.value = eval(input.value);
    }
    catch (err) {
        alert("Please Enter a valid input!")
    }
}

function clr () {
    input.value = " ";
}

function del () {
    input.value = input.value.slice(0, -1);
}