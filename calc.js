window.onload = () => {
    input.value = "";
}

function display(num) {
    input.value += num;
}

function Clear() {
    input.value = "";
}

function Delete() {
    input.value = input.value.slice(0, input.value.length - 1);
}

function equal() {
    try {
        input.value = eval(input.value);
    }
    catch (err) {
        input.value = "Error !";
    }
}