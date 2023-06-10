export default function sounds ({btnCoffee, btnFire, btnForest, btnRain, forestControl, rainControl, coffeeControl,
    fireControl }) {

    const btnPressForest = new Audio("/sounds/Floresta.wav")
    const btnPressFire = new Audio("/sounds/Lareira.wav")
    const btnPressCoffee = new Audio("/sounds/Cafeteria.wav")
    const btnPressRain = new Audio("/sounds/Chuva.wav")

    let playStopForest
    let playStopRain
    let playStopCoffee
    let playStopFire

   

function forestSound() {
    if (!playStopForest) {
        btnForest.classList.add('hide')
        btnPressForest.play()
        playStopForest = true
        btnPressForest.loop = true
        forestControl.addEventListener('change', function() {
            let settingsSound = Number(btnPressForest.volume = this.value)
            btnPressForest.volume = settingsSound
        })}
    else {
        btnPressForest.pause()
        btnForest.classList.remove('hide')
        playStopForest = false
    }}

function rainSound() {
    if (!playStopRain) {
        btnRain.classList.add('hide')
        btnPressRain.play()
        playStopRain = true
        btnPressRain.loop = true
        rainControl.addEventListener('change', function() {
            let settingsSound = Number(btnPressRain.volume = this.value)
            btnPressRain.volume = settingsSound
        })
    } else {
        btnPressRain.pause()
        btnRain.classList.remove('hide')
        playStopRain = false
    }
}

function coffeeSound() {
    if (!playStopCoffee) {
        btnCoffee.classList.add('hide')
        btnPressCoffee.play()
        playStopCoffee = true
        btnPressCoffee.loop = true
        coffeeControl.addEventListener('change', function() {
            let settingsSound = Number(btnPressCoffee.volume = this.value)
            btnPressCoffee.volume = settingsSound
        })
    } else {
        btnPressCoffee.pause()
        btnCoffee.classList.remove('hide')
        playStopCoffee = false
    }
}

function fireSound() {
    if (!playStopFire) {
        btnFire.classList.add('hide')
        btnPressFire.play()
        playStopFire = true
        btnPressFire.loop = true
        fireControl.addEventListener('change', function() {
            let settingsSound = Number(btnPressFire.volume = this.value)
            btnPressFire.volume = settingsSound
        })
    } else {
        btnPressFire.pause()
        btnFire.classList.remove('hide')
        playStopFire = false
    }
}

return {
    fireSound, coffeeSound,
    forestSound, rainSound,
    btnPressCoffee, btnPressFire,
    btnPressForest, btnPressRain
}}
