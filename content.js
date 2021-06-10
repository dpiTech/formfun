const clickHandler = (event) => {
    const x = event.clientX / window.innerWidth
    const y = event.clientY / window.innerHeight
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y },
        zIndex: 99999
    })
    playSound()
}

const buttons = document.querySelectorAll('button,input[type="submit"],a')
buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
})

// alternative approach if NodeList.prototype.forEach() is not supported
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', clickHandler)
// }

const audioUrl = 'https://raw.githubusercontent.com/dpiTech/formfun/main/party-horn.wav'
const audio = new Audio(audioUrl)
const playSound = () => {
    if (!audio.paused) {
        audio.pause()
        audio.currentTime = 0
    }
    audio.play()
}