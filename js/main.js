import { circle_window,knob_nav,knob_menuNav } from "./nav/main_nav.js";
if (document.querySelectorAll('.circle-name')[0]) {
    circle_window();
}
if (document.querySelectorAll('.main-nav')[0]) {
    knob_nav();
}
knob_menuNav();