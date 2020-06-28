window.addEventListener('DOMContentLoaded', () => {
    // const images = ['https://bit.ly/3dIlsn0', 'https://bit.ly/3dDAQRH', 'https://bit.ly/2YGlUy2', 'https://bit.ly/3i8YAR6', 'https://bit.ly/2BMkOaG', 'https://bit.ly/2ZdFL6x'];
    // const headings = ['Try scubadiving', 'Become Open Water Scuba Diver', 'Advanced Open Water Diver', 'Rescue Diver', 'Divemaster', 'Scubadiving Intructor'];

    const items = {
        item1: {
            img: 'https://bit.ly/3dIlsn0',
            heading: 'Try scubadiving',
            descr: `For those who want to test the waters and try scuba, this is the course for you! The SDI Scuba Discovery Program gives you a glimpse of what you can expect to experience in the underwater world as well as what you could expect to learn in the SDI Open Water Scuba Diver course. During this experience program, you will go through the basic safety procedures for enjoyable scuba diving under the watchful eye of an active SDI Instructor.
            <br>
            You will learn skills such as equalizing your ears, buddy checks, basic buoyancy control, underwater communication, and more. You will also be given an introduction to basic scuba equipment followed by an underwater tour in the local pool or aquatic environment.`
        },
        item2: {
            img: 'https://bit.ly/3dDAQRH',
            heading: 'Become Open Water Scuba Diver',
            descr: `SDI makes it possible for you to complete all of the academic requirements for your entry-level scuba diver certification online. You can get started right now and, when you are done, you will then complete your in-water skill-development sessions and final open-water training dives at a local SDI Dive Center close to home, or at a popular vacation destination. It’s that simple! Now, go dive the world with your SDI certification.`
        },
        item3: {
            img: 'https://bit.ly/2YGlUy2',
            heading: 'Advanced Open Water Diver',
            descr: `If you’ve taken your Open Water Scuba Diver course and are now ready to expand your knowledge but would like to see what is out there first, then the SDI Advanced Adventure Diver course is for you! The SDI Advanced Adventure course will give you an overview of five different SDI specialties. Two of the required specialties are the Deep Diver and Navigation Diver specialties which are the foundation of continuing diver education.`
        },
        item4: {
            img: 'https://bit.ly/3i8YAR6',
            heading: 'Rescue Diver',
            descr: `The SDI Rescue Diver Course is designed to develop the knowledge and necessary skills to effectively perform diver rescues and assist and administer the necessary first aid in the event of an emergency. You will learn skills such as how to perform self rescues, buddy rescues, recognize and calm potential panic divers, administer proper first aid to divers that have experienced dive related injuries, conduct effective search patterns and manage accident scenes. After the SDI Rescue Diver Course you can enroll in the SDI Master Scuba Diver Development Program or start in the professional ranks and sign up for the SDI Divemaster Course.`
        },
        item5: {
            img: 'https://bit.ly/2BMkOaG',
            heading: 'Divemaster',
            descr: `The SDI Divemaster Course is the first professional level certification. During the course you will learn how to work with divers, lead certified divers, and act as a dive guide showing divers underwater dive sites and the marine life that inhabits those dives sites. You will increase your knowledge about physics and physiology as well as increase your proficiency with your scuba and snorkeling skills.`
        },
        item6: {
            img: 'https://bit.ly/2ZdFL6x',
            heading: 'Scubadiving Instructor',
            descr: `The SDI Open Water Scuba Diver Instructor (OWSDI) course is designed to teach current Divemasters or Assistant Instructors certified with a recognized dive training organization the knowledge to effectively function as an open water scuba diver instructor. This program is divided into two sections, an instructor development course (IDC) and an instructor evaluation course (IEC).`
        }
    };


    const contentTitle = document.querySelector('.main_item-title');
    const contentImg = document.querySelector('.main_item img');
    const contentDescription = document.querySelector('.main_item-descr');
    const menu = document.querySelectorAll('.menu li');
    

    menu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switch(item) {
                case menu[0]:
                    contentTitle.textContent = items.item1.heading;
                    contentImg.src = items.item1.img;
                    contentDescription.textContent = items.item1.descr;
                    break;
                case menu[1]:
                    contentTitle.textContent = items.item2.heading;
                    contentImg.src = items.item2.img;
                    contentDescription.textContent = items.item2.descr;
                    break;
                case menu[2]:
                    contentTitle.textContent = items.item3.heading;
                    contentImg.src = items.item3.img;
                    contentDescription.textContent = items.item3.descr;
                    break;
                case menu[3]:
                    contentTitle.textContent = items.item4.heading;
                    contentImg.src = items.item4.img;
                    contentDescription.textContent = items.item4.descr;
                    break;
                case menu[4]:
                    contentTitle.textContent = items.item5.heading;
                    contentImg.src = items.item5.img;
                    contentDescription.textContent = items.item5.descr;
                    break;
                case menu[5]:
                    contentTitle.textContent = items.item6.heading;
                    contentImg.src = items.item6.img;
                    contentDescription.textContent = items.item6.descr;
                    break;
            }
        });
    });
});