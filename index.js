const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const d1 = document.getElementsByClassName("divv1")[0];
const d2 = document.getElementsByClassName("divv2")[0];

let isLogging = false;

startbtn.addEventListener("click", () => {
    if (!isLogging) {
        document.addEventListener("keydown", down);
        document.addEventListener("keyup", up);
        isLogging = true;
    }
    startbtn.disabled = true;
    stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
    if (isLogging) {
        document.removeEventListener("keydown", down);
        document.removeEventListener("keyup", up);
        isLogging = false;
    }
    d1.textContent = "";
    d2.textContent = "";
    startbtn.disabled = false;
    stopbtn.disabled = true;
});

function down(e) {
    d1.textContent = `key ${e.key} is pressed down`;
    d2.textContent = "key is down";
}

function up(e) {
    d1.textContent = `key ${e.key} is pressed up`;
    d2.textContent = "key is up";
}