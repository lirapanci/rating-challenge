function rate(value) {
    clearRate();
    addRate(value);
}

function clearRate() {
    const selectedRate = document.querySelector(".ratings.active")
    if (selectedRate) {
        selectedRate.classList.remove("active");
    }
}

function addRate(value) {
    document.getElementById('point' + value).classList.add("active");
    document.getElementById("selected-rate").innerText = value;
}

document
    .getElementById("submit")
    .addEventListener("click", function (click) {
        document.getElementById("rating-box").classList.add("hidden");
        document.getElementById("thankyou-box").classList.remove("hidden");
    });