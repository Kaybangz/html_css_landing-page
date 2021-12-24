const bttBtn = document.querySelector(".backToTop");

const nav_open = () => {
	const burger_menu = document.querySelector(".burger_menu");

	const nav_items = document.querySelector(".nav_items");

	const nav_links = document.querySelectorAll(".nav_items li");

	burger_menu.addEventListener("click", () => {
		nav_items.classList.toggle("nav_active");

		nav_links.forEach((link, index) => {
			if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navItemsFade 0.5s ease-in ${index / 5 + 0.2}s`;
            }
		});

        burger_menu.classList.toggle("toggle");
	});
};

nav_open();

const buttonVisibility = () => {
	if(document.documentElement.scrollTop <= 150){
		bttBtn.style.display = "none";
	}else{
		bttBtn.style.display = "flex";
	}
}

buttonVisibility();

bttBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0
});

document.addEventListener("scroll", (e) => {
	buttonVisibility();
})




