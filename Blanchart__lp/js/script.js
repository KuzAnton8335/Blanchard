// скрипт мобильного меню

let navSlide = () => {
	const burger = document.querySelector(".burger-menu");
	const navMenu = document.querySelector(".header-nav__list");
	const navlinks = document.querySelectorAll(".header-nav__list li");

	burger.addEventListener("click", () => {
		navMenu.classList.toggle("actione");

		navlinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.5
					}s`;
			}
		});

		burger.classList.toggle("actione");
	});
};
navSlide();

// modal window

const modalBtn = document.querySelector('.header-exit__link');
const modal = document.querySelector('.popup-window');
const closeBtn = document.querySelector('.close-btn__window');

modalBtn.addEventListener('click', () => {
	modal.classList.remove('hidden');
})

//modal__close
modal.addEventListener('click', (event) => {
	const target = event.target;

	if (target.classList.contains('overlay') || target.classList.contains('close-btn__window')) {
		modal.classList.add('hidden');
	}
})

closeBtn.onclick = function () {
	modal.classList.add('hidden')
}