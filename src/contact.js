class ContactPage {

    test() {
        console.log('ContactPage test')
    }

    htmlInjection () {
        const contentE = document.getElementById('content2');
        let contactE = document.createElement('div');
        contentE.appendChild(contactE);
        contactE.className ='contact';
        contactE.textContent = 'Tel: 0800-0800-0800';
        contactE = document.createElement('div');
        contentE.appendChild(contactE);
        contactE.className ='contact';
        contactE.textContent = '3614 Greece road - Athena';
    }
};

export default ContactPage;
