class ContactPage {

    test() {
        console.log('ContactPage test')
    }

    htmlInjection () {
        const bodyE = document.querySelector('body');
        let contactE = document.createElement('div');
        bodyE.appendChild(contactE);
        contactE.className ='contact';
        contactE.textContent = 'Tel: 0800-0800-0800';
        contactE = document.createElement('div');
        bodyE.appendChild(contactE);
        contactE.className ='contact';
        contactE.textContent = '3614 Greece road - Athena';
    }
};

export default ContactPage;
