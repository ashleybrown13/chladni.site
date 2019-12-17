
// let bg
let rain
let wind
let scissors
let sink
let boiling
let vacuum
let footsteps
let starbucks
let car
let spray
let dryer
let dishWash
let campus
let fan
let typing

function setup() {

	// bg = loadImage('background.png');
	createCanvas(800, 800)


}

function preload() {
	wind = loadSound('wind.mp3')
	fan = loadSound('Fan.mp3')
	campus = loadSound('campus_quiet.mp3')
	starbucks = loadSound('Starbucks.m4a')
	sink = loadSound('sink.m4a')
	spray = loadSound('water spray.m4a')
	boiling = ('Boiling.m4a')
	rain = loadSound('rain.mp3')
	car = loadSound('starting the car.m4a')
	dryer = loadSound('dryer.m4a')
	dishwash = loadSound('DISHWASHER.mp3')
	vacuum = loadSound('vacuum.m4a')
	match = loadSound('match.m4a')
	scissors = loadSound('scissors.m4a')
	typing = loadSound('typing.m4a')
	footsteps = loadSound('walking&keys.m4a')



}


function draw() {
	 // image(bg, 2, -202)
}


function playWind() {

	wind.play()
	fan.stop()
	campus.stop()
	rain.stop()
	car.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playFan() {
	
	fan.play()
	campus.stop()
	rain.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playCampus() {
	
	campus.play()
	fan.stop()
	rain.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playStarbucks() {
	
	starbucks.play()
	fan.stop()
	campus.stop()
	rain.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playSink() {
	
	sink.play()
	rain.stop()
	fan.stop()
	campus.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()

}

function playSpray() {
	
	spray.play()
	rain.stop()
	fan.stop()
	campus.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	sink.stop()

}

function playBoiling() {
	
	boiling.play()
	rain.stop()
	fan.stop()
	campus.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	spray.stop()
	sink.stop()

}

function playRain() {
	
	rain.play()
	fan.stop()
	campus.stop()
	car.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playCar() {
	
	car.play()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playDryer() {
	
	dryer.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playDishwash() {
	
	dishwash.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playVacuum() {
	
	vacuum.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playMatch() {
	
	match.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playScissors() {
	
	scissors.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	typing.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playTyping() {
	
	typing.play()
	rain.stop()
	fan.stop()
	campus.stop()
	song.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	footsteps.stop()
	starbucks.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}

function playFootsteps() {
	
	footsteps.play()
	car.stop()
	fan.stop()
	campus.stop()
	rain.stop()
	wind.stop()
	dryer.stop()
	dishwash.stop()
	starbucks.stop()
	typing.stop()
	scissors.stop()
	match.stop()
	vacuum.stop()
	car.stop()
	boiling.stop()
	spray.stop()
	sink.stop()

}


function mouseClicked() {
	print(int(mouseX), int(mouseY))

}