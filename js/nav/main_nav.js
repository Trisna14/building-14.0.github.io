export function circle_window () {
    
    const knob_name = document.querySelectorAll('.circle-name')[0];
    const knob_img = document.querySelectorAll('.circle-img')[0];
    const circle_window = document.querySelectorAll('.circle-window')[0];

    const knob = [knob_name,knob_img];

    knob.forEach ((knob) => {
        
        knob.addEventListener ('click', function () {

            circle_window.classList.toggle('show-circle-window');
            // console.log(circle_window.classList);
        });
    });
}

export function knob_nav () {

    const knob = document.getElementsByClassName('knob-nav')[0];
    const nav = document.getElementsByClassName('main-nav')[0];

    knob.addEventListener ('click', () => {

        console.log(nav);
        nav.classList.toggle('show-nav');
    });
}

// knob window nav menu
export function knob_menuNav () {

    const knobs = document.querySelectorAll('.knob-window-menu');
    
    knobs.forEach (function (knob) {

        knob.addEventListener ('click', function () {

            knob.childNodes[2].classList.toggle('rotate')
            knob.parentElement.childNodes[2].classList.toggle('show-window-menu');
            knob.classList.toggle('bold');

        });
    });
}

// bell
export function bell () {

    const btn_bells = document.getElementsByClassName('knob-bell');
    
    let i;
    for (i = 0; i < btn_bells.length; i++) {

        btn_bells[i].parentElement.addEventListener ('click', function (e) {

            // console.log(e.preventDefault());
            e.preventDefault();
        });

        const wrapper = document.getElementsByClassName('second-wrapper')[0];

        wrapper.addEventListener ('click', () => {

            const btn_bells_clear = document.getElementsByClassName('knob-bell');
            for (let n = 0; n < btn_bells_clear.length; n++) {

                btn_bells_clear[n].nextElementSibling.nextElementSibling.classList.remove('show-bell-window');
                // console.log('ok');
            }
        });

        btn_bells[i].addEventListener ('click', function (e) {

            e.preventDefault();

            const btn_bells_rm = document.getElementsByClassName('knob-bell');
            for (let n = 0; n < btn_bells_rm.length; n++) {

                // btn_bells_rm[n].nextElementSibling.nextElementSibling.classList.toggle('show-bell-window');
                // btn_bells_rm[n].nextElementSibling.nextElementSibling.classList.remove('show-bell-window');
            }

            this.nextElementSibling.nextElementSibling.classList.toggle('show-bell-window');
            // this.nextElementSibling.nextElementSibling.classList.add('show-bell-window');
        });
    }
}