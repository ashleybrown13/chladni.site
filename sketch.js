
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
let song
let dryer
let dishWash
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
	footsteps = loadSound('walking&keys.m4a')
	dryer = loadSound('dryer.m4a')
	dishwash = loadSound('DISHWASHER.mp3')



}


function draw() {
	 background(bg);
}


function playWind() {

	wind.play()
	fan.stop()
	campus.stop()
	rain.stop()
	song.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()

}

function playRain() {
	
	rain.play()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()

}

function playFan() {
	
	fan.play()
	campus.stop()
	rain.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()

}

function playCampus() {
	
	campus.play()
	fan.stop()
	rain.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()

}

function playSong() {
	
	song.play()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()

}

function playFootsteps() {
	
	footsteps.play()
	song.stop()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()

}

function playDryer() {
	
	dryer.play()
	song.stop()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	footsteps.stop()
	dishwash.stop()
}

function playDishwash() {
	
	dishwash.play()
	song.stop()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	footsteps.stop()
	dryer.stop()
}
