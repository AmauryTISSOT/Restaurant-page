import HomePage from "./home";
import MenuPage from "./menu";
import ContactPage from "./contact";


function initializeWebsite () {
    const contentE = document.getElementById('content');
    const home = new HomePage;
    home.htmlInjection();
    const content2 = document.getElementById('content2');
    const footer = document.querySelector('.footer');
    
    const homeID = document.getElementById('Home');
    homeID.addEventListener('click', () => {
		while(content2.hasChildNodes()) {
            content2.removeChild(content2.firstChild);
        };
        footer.style.display = 'block'
    })


    const menuId = document.getElementById('Menu');
    menuId.addEventListener('click', () => {
        const menu = new MenuPage;
        while(content2.hasChildNodes()) {
            content2.removeChild(content2.firstChild);
        };

        menu.htmlInjection();
        footer.style.display = 'none';
    });

    const contactId = document.getElementById('Contact');
    contactId.addEventListener('click', () => {
        const contact = new ContactPage;
        while(content2.hasChildNodes()) {
            content2.removeChild(content2.firstChild);
        };
        contact.htmlInjection();
        const footer = document.querySelector('.footer');
        footer.style.display = 'none';
    })

}

initializeWebsite();