import HomePage from "./home";
import MenuPage from "./menu";
import ContactPage from "./contact";


function initializeWebsite () {
    const bodyE = document.querySelector('body');
    const home = new HomePage;
    home.htmlInjection();

    const homeID = document.getElementById('Home');
    homeID.addEventListener('click', () => {
		bodyE.firstChild.remove();
        home.htmlInjection();
    })


    const menuId = document.getElementById('Menu');
    menuId.addEventListener('click', () => {
        const menu = new MenuPage;
        menu.htmlInjection();
        const footer = document.querySelector('.footer');
        footer.style.display = 'none';
    });

    const contactId = document.getElementById('Contact');
    contactId.addEventListener('click', () => {
        const contact = new ContactPage;
        contact.htmlInjection();
        const footer = document.querySelector('.footer');
        footer.style.display = 'none';
    })

}

initializeWebsite();