var Song1, Song2

function preload() {
    Song1 = loadSound("Girls Like You.mp3")
    Song2 = loadSound("Enemy.mp3")
}

function setup() {
    Canvas = createCanvas(500, 400)
    Canvas.center()

    Video = createCapture(VIDEO)
    Video.hide()
}

function draw() {
    image(Video, 0, 0, 500, 400)
}