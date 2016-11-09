/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// FORMULIER TOGGLE MET CLASSLIST

var projectToggle = document.querySelector("input[value=project]");
var stageToggle = document.querySelector("input[value=stage]");

var fieldsetProject = document.querySelector("form>fieldset:nth-of-type(3)");
var fieldsetStage = document.querySelector("form>fieldset:nth-of-type(4)");

fieldsetStage.classList.add('form');
fieldsetProject.classList.add('form');

stageToggle.addEventListener("click", function() {
fieldsetStage.classList.add('form');
fieldsetProject.classList.remove('form');
}, false);

projectToggle.addEventListener("click", function() {
fieldsetProject.classList.add('form');
fieldsetStage.classList.remove('form');
}, false);


