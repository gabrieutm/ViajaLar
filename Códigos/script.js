function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
};

const mobileMenu = document.getElementById('#mobile-menu')
const mobileMenuIcon = document.getElementById('#mobile-menu i')
const dropDownMenu = document.getElementById('#dropdown-menu')

mobileMenu.onclick = function () {
    dropDownMenu.element.id('#dropdown-menuopen')

}