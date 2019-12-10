
let bg
let rain
let wind
let highway
let sink
let boiling_water
let vacuum
let footsteps
let crowd
let car_start
let rats
let song
let dryer
let washing_machine
let campus
let fan
let typing

function setup() {

	bg = loadImage('car,bkgr.png');
	createCanvas(700, 700)


}

function preload() {
	wind = loadSound('wind.mp3')
	fan = loadSound('Fan.mp3')
	campus = loadSound('campus_quiet.mp3')
	rain = loadSound('rain.mp3')
	song = loadSound('LesDeuxPianos.mp3')


}



function playWind() {

	wind.play()
	fan.stop()
	campus.stop()
	rain.stop()
	song.stop()

}

function playRain() {
	
	rain.play()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()

}

function playFan() {
	
	fan.play()
	campus.stop()
	rain.stop()
	song.stop()
	wind.stop()

}

function playCampus() {
	
	campus.play()
	fan.stop()
	rain.stop()
	song.stop()
	wind.stop()

}

function playSong() {
	
	song.play()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()

}

