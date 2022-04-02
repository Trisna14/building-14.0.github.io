import { circle_window,knob_nav,knob_menuNav,bell } from "./nav/main_nav.js";
if (document.querySelectorAll('.circle-name')[0]) {
    circle_window();
}
if (document.querySelectorAll('.main-nav')[0]) {
    knob_nav();
}
if (document.querySelectorAll('.light-menu')[0]) {
    knob_menuNav();
}
if (document.getElementsByClassName('knob-bell')[0]) {
    bell();
}
