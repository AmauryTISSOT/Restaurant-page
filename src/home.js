// Class who inject home page html + css

class HomePage {

    test () {
        console.log('Class HomePage : test');
    }

    htmlInjection () {
        const contentE = document.getElementById('content');
        const headerE = document.createElement('div');
        contentE.appendChild(headerE);

        const titleE = document.createElement('div');
        headerE.appendChild(titleE).textContent = 'RestaurantName';
        
        const ulE = document.createElement('ul');
        headerE.appendChild(ulE);
        
        const liE1 = document.createElement('li');
        liE1.id = 'Home';
        const liE2 = document.createElement('li');
        liE2.id = 'Menu';
        const liE3 = document.createElement('li');
        liE3.id = 'Contact';
        ulE.appendChild(liE1).textContent = 'Home';
        ulE.appendChild(liE2).textContent = 'Menu';
        ulE.appendChild(liE3).textContent = 'Contact';
        
        const footerE = document.createElement('div');
        const aE = document.createElement('a');
        aE.href = 'https://unsplash.com/@alegi__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
        aE.textContent = 'Alexandros Giannakakis';
        const aE1 = document.createElement('a');
        aE1.href = 'https://unsplash.com/s/photos/greek-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
        aE1.textContent = 'Unsplash';

        contentE.appendChild(footerE).textContent = 'Photo by ';
        footerE.append(aE);
        footerE.append(' on ');
        footerE.append(aE1);
        
        headerE.className = 'header';
        titleE.className = 'title';
        ulE.className = 'menu';
        footerE.className = 'footer';

        const content2 = document.createElement('div');
        contentE.appendChild(content2).id = 'content2'
    }
};

export default HomePage;