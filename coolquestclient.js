// epilepsy warning

function setup() {
	//createCanvas(800, 600);
	createCanvas(650, 500);
	textAlign(LEFT, TOP);
	
	let tileRes = 50
	let tileX = 10
	let tileY = 10

	for( let i = 0; i < tileY; i++ ) {
		for( let j = 0; j < tileX; j++ ) {
			fill(255)
			rect(j*tileRes, i*tileRes, tileRes, tileRes)
		}
	}
	fill(128)
	rect(tileX*tileRes, 0, 3*tileRes, tileY*tileRes)
	let textRef = [tileRes*tileX, 0]
	textSize(24)
	fill(0)
	text("CoolQuest", textRef[0], textRef[1])
}

function draw() {
}