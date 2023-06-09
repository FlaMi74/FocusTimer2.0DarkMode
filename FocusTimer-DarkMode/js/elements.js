const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const btnPlay = document.querySelector(".play")
const btnPause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const btnForest = document.querySelector(".forest")
const btnRain = document.querySelector(".rain")
const btnCoffee = document.querySelector(".coffee")
const btnFire = document.querySelector(".fire")
const btnlight = document.querySelector("body .styleMode .light")
const btndark = document.querySelector("body .styleMode .dark")
const bodyClass = document.querySelector("body")
let minutes
let seconds

export  {
    minutes, minutesDisplay,
    seconds, secondsDisplay,
    btnPlay, btnStop, btnPause,
    btnPlus, btnMinus,
    btnForest, btnRain,
    btnCoffee, btnFire,
    btnlight, btndark,
    bodyClass
}