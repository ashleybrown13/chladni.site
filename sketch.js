
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
	boiling = loadSound('Boiling.m4a')
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
	fan.stop(0)
	campus.stop(0)
	rain.stop(0)
	car.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playFan() {
	
	fan.play()
	campus.stop(0)
	rain.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playCampus() {
	
	campus.play()
	fan.stop(0)
	rain.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playStarbucks() {
	
	starbucks.play()
	fan.stop(0)
	campus.stop(0)
	rain.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playSink() {
	
	sink.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)

}

function playSpray() {
	
	spray.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	sink.stop(0)

}

function playBoiling() {
	
	boiling.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playRain() {
	
	rain.play()
	fan.stop(0)
	campus.stop(0)
	car.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playCar() {
	
	car.play()
	fan.stop(0)
	campus.stop(0)
	rain.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playDryer() {
	
	dryer.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playDishwash() {
	
	dishwash.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dryer.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playVacuum() {
	
	vacuum.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playMatch() {
	
	match.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playScissors() {
	
	scissors.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playTyping() {
	
	typing.play()
	rain.stop(0)
	fan.stop(0)
	campus.stop(0)
	song.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	footsteps.stop(0)
	starbucks.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}

function playFootsteps() {
	
	footsteps.play()
	car.stop(0)
	fan.stop(0)
	campus.stop(0)
	rain.stop(0)
	wind.stop(0)
	dryer.stop(0)
	dishwash.stop(0)
	starbucks.stop(0)
	typing.stop(0)
	scissors.stop(0)
	match.stop(0)
	vacuum.stop(0)
	car.stop(0)
	boiling.stop(0)
	spray.stop(0)
	sink.stop(0)

}


function mouseClicked() {
	print(int(mouseX), int(mouseY))

}