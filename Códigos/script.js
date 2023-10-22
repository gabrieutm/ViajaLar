//leva a seção selecionada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
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
    if (window.innerWidth <= 700) {
        mobileMenu.style.display = "block";
        desktopList.style.display = "none";
    } else {
        mobileMenu.style.display = "none";
        dropdownMenu.style.display = "none";
    }
}

window.onload = changeMenu;
window.onresize = changeMenu;



//login e registro
function alternarFormulario(formulario) {
    if (formulario === 'log-screen') {
        document.getElementById('log-screen').style.display = 'flex';
        document.getElementById('reg-screen').style.display = 'none';
    } else if (formulario === 'reg-screen') {
        document.getElementById('log-screen').style.display = 'none';
        document.getElementById('reg-screen').style.display = 'flex';
    }
}



// Selecionar o textarea e o elemento de contagem
const textarea = document.getElementById("story");
const countElement = document.getElementById("chars-left");

// Adicionar um ouvinte de evento de entrada (digitação)
textarea.addEventListener("input", function () {
    const maxLength = parseInt(textarea.getAttribute("maxlength"));
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;

    // Atualizar o texto de contagem
    countElement.textContent = `${remaining} caracteres restantes.`;

    // Verificar e ajustar o conteúdo se o limite for ultrapassado
    if (remaining < 0) {
        textarea.value = textarea.value.substring(0, maxLength);
        countElement.textContent = "Limite de caracteres atingido.";
    }
});
