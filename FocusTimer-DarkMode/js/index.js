import {
    minutes, minutesDisplay,
    seconds, secondsDisplay,
    btnPlay, btnStop, btnPause,
    btnPlus, btnMinus, bodyClass,
    btnForest, btnRain, btnlight,
    btnCoffee, btnFire, btndark } from "./elements.js"

import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Changes from "./changes.js"

const sounds = Sounds({ btnCoffee, btnFire, btnForest, btnRain})

const timer = Timer({ minutesDisplay, secondsDisplay, minutes, seconds, 
                      btnPlay, btnPause })

const changes = Changes({btnlight, btndark, bodyClass})


btnPlay.addEventListener('click', function () {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    timer.reciveMinutes()
})

btnPause.addEventListener('click', function () {
    timer.pauseCount()
})

btnStop.addEventListener('click', function () {
    timer.reset()
})

btnPlus.addEventListener('click', timer.plusMinutes)
btnMinus.addEventListener('click', timer.minusMinutes)

btnForest.addEventListener('click', sounds.forestSound)
btnRain.addEventListener('click', sounds.rainSound)
btnCoffee.addEventListener('click', sounds.coffeeSound)
btnFire.addEventListener('click', sounds.fireSound)

btnlight.addEventListener('click', changes.lightMode)

btndark.addEventListener('click', changes.darkMode)