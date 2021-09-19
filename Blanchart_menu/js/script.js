// скрипт мобильного меню

let navSlide = () => {
	let burger = document.querySelector(".burger-menu");
	let navMenu = document.querySelector(".header-nav__list");
	let navlinks = document.querySelectorAll(".header-nav__list li");

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
