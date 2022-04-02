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