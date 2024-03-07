const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    if (i % 3 === 0 && i % 5 === 0) {
        element.textContent = "FizzBuzz";
        element.classList.add("fizzbuzz");
    } else if (i % 3 === 0) {
        element.textContent = "Fizz";
        element.classList.add("fizz");
    } else if (i % 5 === 0) {
        element.textContent = "Buzz";
        element.classList.add("buzz");
    } else {
        element.textContent = i;
        element.classList.add("number");
    }
    container.appendChild(element);
}

