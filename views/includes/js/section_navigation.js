const navbar = document.querySelector('.section_navigation-navbar')
const firstSection = document.querySelector('.section_navigation-hero')

const stickyNavbar = function (entries) {
	const [entry] = entries

	if (!entry.isIntersecting) navbar.classList.add('sticky-navigation')
	else navbar.classList.remove('sticky-navigation')
}

const headerObserver = new IntersectionObserver(stickyNavbar, {
	root: null,
	threshold: 0,
})

headerObserver.observe(firstSection)
