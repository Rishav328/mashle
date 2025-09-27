
const fileStructure = {
    default: [
        './default/0.png',
        './default/1.png'
    ],
    step_1: [
        './step_1/0.png',
        './step_1/1.png',
        './step_1/2.png',
        './step_1/3.png',
        './step_1/4.png'
    ],
    step_2: [
        './step_2/0.png',
        './step_2/1.png',
        './step_2/2.png',
        './step_2/3.png',
        './step_2/4.png'
    ],
    step_3: [
        './step_3/0.png',
        './step_3/1.png',
        './step_3/2.png',
        './step_3/3.png',
        './step_3/4.png'
    ],
    step_4: [
        './step_4/0.png',
        './step_4/1.png',
    ],
}

let count = 0;
let current = fileStructure.default

document.querySelector("#step-1").addEventListener("click", function() {
    current = fileStructure.step_1
})

document.querySelector("#step-2").addEventListener("click", function() {
    current = fileStructure.step_2
})

document.querySelector("#step-3").addEventListener("click", function() {
    current = fileStructure.step_3
})

document.querySelector("#step-4").addEventListener("click", function() {
    current = fileStructure.step_4

})

function main() {
    if (count >= current.length - 1) { count = 0 }
    else { count++ }

    document.getElementById("main").src = current[count];
}

setInterval(main, 200);
