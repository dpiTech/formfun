const clickHandler = (event) => {
    const x = event.clientX / window.innerWidth
    const y = event.clientY / window.innerHeight
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y },
        zIndex: 99999
    })
}

const buttons = document.querySelectorAll('button,input[type="submit"],a')
buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
})

// alternative approach if NodeList.prototype.forEach() is not supported
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', clickHandler)
// }
