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
    const nav = document.getElementsByClassName('main-menu')[0];

    knob.addEventListener ('click', () => {

        console.log(nav);
        nav.classList.toggle('show-nav');
    });
}