import "../scss/main.scss";

const themeSelectorBtn = document.getElementById("themeSelectorBtn");
//const body = document.querySelector("body");
const body = document.body;

themeSelectorBtn.addEventListener("click", () => {
    const classArr = ["dark", "light", "custom"];

    const arrLength = classArr.length;

    for (let i = 0; i < arrLength; i++) {
        if (body.classList.contains(classArr[i])) {
            body.classList.toggle(classArr[i], false);

            i !== arrLength - 1
                ? body.classList.toggle(classArr[i + 1], true)
                : body.classList.toggle(classArr[0], true);
            return;
        }
    }
});
