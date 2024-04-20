const btn = document.querySelector("[data-btn]"),
number = document.querySelector("[data-number]"),
circle = document.querySelectorAll("[data-circle]");

btn.addEventListener("click", () => {
    for (let i = 0; i < circle.length; i++) {
        circle[i].classList.add("active");
    };
    number.innerHTML = `0`;
});