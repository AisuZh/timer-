let time = document.querySelector(".time")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")

let seconds = 0
let minutes = 0
let hours = 0
let startInt

let isStarted = true

const addZero = (num) => {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

start.addEventListener("click", () => {
    if (isStarted) {
        startInt = setInterval(() => {
            seconds++
            if (seconds === 59) {
                seconds = 0
                minutes++
            }

            if (minutes === 59) {
                minutes = 0
                hours++
            }

            if (hours === 59) {
                hours = 0
            }

            time.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
        }, 1000)
        isStarted = false
    }
})

stop.addEventListener("click", () => {
    isStarted = true
    clearInterval(startInt)
})

reset.addEventListener("click", () => {
    isStarted = true
    time.innerText = `00:00:00`
    clearInterval(startInt)

    seconds = 0
    minutes = 0
    hours = 0
})





