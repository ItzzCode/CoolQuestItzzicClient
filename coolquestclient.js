// epilepsy warning

function setup() {
	//createCanvas(800, 600);
	createCanvas(600, 450);
	textAlign(LEFT, TOP);
	
	let tileRes = 50

	for( let i = 0; i < 9; i++ ) {
		for( let j = 0; j < 9; j++ ) {
			fill(0x00, 0xAF, 0x00)
			rect(j*tileRes, i*tileRes, tileRes, tileRes)
		}
	}
	fill(128)
	rect(9*tileRes, 0, 3*tileRes, 9*tileRes)
	let textRef = [tileRes*9, 0]
	textSize(24)
	fill(0)
	text("CoolQuest", textRef[0], textRef[1])
}

function draw() {
}