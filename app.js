window.addEventListener('DOMContentLoaded', () => {
    const item1 = {
        heading: 'Try scubadiving',
        image: 'https://bit.ly/3dIlsn0',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };

    const item2 = {
        heading: 'Become Open Water Scuba Diver',
        image: 'https://bit.ly/3dDAQRH',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };

    const item3 = {
        heading: 'Advanced Open Water Diver',
        image: 'https://bit.ly/2YGlUy2',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };

    const item4 = {
        heading: 'Rescue Diver',
        image: 'https://bit.ly/3i8YAR6',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };

    const item5 = {
        heading: 'Divemaster',
        image: 'https://bit.ly/2BMkOaG',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };

    const item6 = {
        heading: 'Scubadiving Intructor',
        image: 'https://bit.ly/2ZdFL6x',
        description: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
        You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
    };


    const contentTitle = document.querySelector('.main_item-title');
    const contentImg = document.querySelector('.main_item img');
    const contentText = document.querySelector('.main_item-descr');
    const menu = document.querySelectorAll('.menu');

    menu.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            contentTitle.innerHTML = this.headings[index];
            contentImg.src = this.images[index];
        });
    });






});