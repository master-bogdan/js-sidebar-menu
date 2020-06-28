window.addEventListener('DOMContentLoaded', () => {
    const images = ['https://bit.ly/3dIlsn0', 'https://bit.ly/3dDAQRH', 'https://bit.ly/2YGlUy2', 'https://bit.ly/3i8YAR6', 'https://bit.ly/2BMkOaG', 'https://bit.ly/2ZdFL6x'];
    const headings = ['Try scubadiving', 'Become Open Water Scuba Diver', 'Advanced Open Water Diver', 'Rescue Diver', 'Divemaster', 'Scubadiving Intructor'];

    const contentTitle = document.querySelector('.main_item-title');
    const contentImg = document.querySelector('.main_item img');
    const menu = document.querySelectorAll('.menu li');
    

    menu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switch(item) {
                case menu[0]:
                    contentTitle.textContent = headings[0];
                    contentImg.src = images[0];
                    break;
                case menu[1]:
                    contentTitle.textContent = headings[1];
                    contentImg.src = images[1];
                    break;
                case menu[2]:
                    contentTitle.textContent = headings[2];
                    contentImg.src = images[2];
                    break;
                case menu[3]:
                    contentTitle.textContent = headings[3];
                    contentImg.src = images[3];
                    break;
                case menu[4]:
                    contentTitle.textContent = headings[4];
                    contentImg.src = images[4];
                    break;
                case menu[5]:
                    contentTitle.textContent = headings[5];
                    contentImg.src = images[5];
                    break;
            }
        });
       
    });

});