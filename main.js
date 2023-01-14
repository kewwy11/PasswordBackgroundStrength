const passwordInput = document.getElementById('password')
const background = document.getElementById('background')

passwordInput.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length

    const blur = 30 - length * 2
    background.style.filter = `blur(${blur}px)`
})