// Script for adding and deleting todo's
var cats = 0;
var dogs = 0;

function addCat() {
	var list = document.getElementById("cats");
	var newItem = document.createElement('li');
	list.appendChild(newItem);
	cats++;
}

function removeCat() {
	var elements = document.getElementById("cats");
	elements.removeChild(elements.childNodes[0]);
	cats--;
}

function addDog() {
	var list = document.getElementById("dogs");
	var newItem = document.createElement('li');
	list.appendChild(newItem);
	dogs++;
}

function removeDog() {
	var elements = document.getElementById("dogs");
	elements.removeChild(elements.childNodes[0]);
	dogs--;
}

