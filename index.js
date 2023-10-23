// set initial value
let count = 0;

// access value and btn element
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")) {
            count--;
        } else if(styles.contains("btn-increase")) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "black"
        }
        value.textContent = count;
    })
    
});