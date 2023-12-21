const mobileMenu = document.querySelector('nav .nav__menu-mobile')
const menuToggle = document.querySelectorAll('.nav__burger')

menuToggle.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault()

		mobileMenu.classList.toggle('nav__mobile-show')
		document.body.classList.toggle('lock')
	})
})

window.addEventListener('resize', () => {
	if (
		window.innerWidth > 320 &&
		menu.classList.contains('nav__mobile-show')
	) {
		menu.classList.remove('nav__mobile-show')
		document.body.classList.remove('lock')
	}
})
