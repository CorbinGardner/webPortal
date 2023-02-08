// JavaScript Document
/*
	Student Name: Corbin Gardner
	File Name: script.js
	Date: 01/24/2023
*/

// Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Funtion to display burpees example video
function burpees() {
	videoSource.src = "media/burpees.mp4";
	descriptionSource.src = "media/burpees-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

// Funtion to display plank example video
function plank() {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "media/plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

// Funtion to display mountain climber example video
function mountainClimber() {
	videoSource.src = "media/mc.mp4";
	descriptionSource.src = "media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}