let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countUh = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    let sound = document.getElementById("audio1");
    sound.play();
}

function decrease() {
    count = count - 1
    countUh.textContent= count
    let sound = document.getElementById("audio2");
    sound.play();
}
function save() {
    let countStr= count + " - "
    saveEl.textContent += countStr
    countEl.textContent = "0"
    count = 0
    let sound = document.getElementById("audio3");
    sound.play();

}



