class MenuPage {

    test() {
        console.log('Menu Page test')
    }

    htmlInjection () {
        const bodyE = document.querySelector('body');

        const menu_gridE = document.createElement('div');
        menu_gridE.className = 'menu-grid'
        bodyE.append(menu_gridE);

        const img_array = ['/src/recipes/food1.jpg','/src/recipes/food2.jpg',
                            '/src/recipes/food3.jpg','/src/recipes/food4.jpg'];

        const img_source_array = [
            [{
                href1: 'https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                author : 'Victoria Shes'
            }],
            [{
                href1: 'https://unsplash.com/@luisabrimble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                author: 'Luisa Brimble'
            }],
            [{
                href1: 'https://unsplash.com/@nobiteuntilphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                author: 'Mariana Medvedeva'
            }],
            [{
                href1: 'https://unsplash.com/@curryandlove?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
                author: 'Klara Avsenik'
            }]
        ];
        
        for (let i=0; i<4; i++){
            const food_picturesE = document.createElement('div');
            food_picturesE.className = 'food-pictures';
            const img_picE = document.createElement('div');
            const imgE = document.createElement('img');
            const picture_sourceE = document.createElement('div');
            const aE = document.createElement('a');
            const h3E = document.createElement('h3');
            const pE = document.createElement('p');

            menu_gridE.appendChild(food_picturesE);
            food_picturesE.appendChild(img_picE);
            img_picE.appendChild(imgE).src = img_array[i];
            img_picE.appendChild(picture_sourceE);
            picture_sourceE.appendChild(aE).href = img_source_array[i][0].href1;
            aE.textContent = `Photo by ${img_source_array[i][0].author}`;
            food_picturesE.appendChild(h3E).textContent = `Food ${i}`;
            food_picturesE.appendChild(pE).textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea illum ut sint? In, architecto deleniti. Impedit repudiandae totam alias omnis quod distinctio';
            
        }
    }
};

export default MenuPage;