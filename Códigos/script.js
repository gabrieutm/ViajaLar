//leva a seção selecionada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
};



//alterna entre os menus desktop e mobile
const mobileMenu = document.getElementById("mobile-menu");
const dropdownMenu = document.getElementById("dropdown-menu");
const desktopList = document.querySelectorAll("#menu-header nav ul");
const menuItems = document.querySelectorAll("#dropdown-menu ul li");

mobileMenu.addEventListener("click", function () {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        dropdownMenu.style.display = "none";
    });
});

function changeMenu() {
    if (window.innerWidth <= 650) {
        mobileMenu.style.display = "block";
        desktopList.style.display = "none";
    } else {
        mobileMenu.style.display = "none";
        dropdownMenu.style.display = "none";
    }
}

window.onload = changeMenu;
window.onresize = changeMenu;