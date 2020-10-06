const toggleB = document.getElementsByClassName('toggleb')[0]
const navbarL = document.getElementsByClassName('navbarl')[0]

toggleB.addEventListener('click', () => {
    navbarL.classList.toggle('active')
})

