class country {
	name = "country"
	color = [127, 127, 127]
	gold = 0
	people = 10
	constructor( name, color, gold, people ) {
		this.name = name
		this.color = color
		this.gold = gold
		this.people = people
	}
}

class object {
	representation = "?"
	type = "generic"
	constructor(representation, type) {
		this.representation = representation
		this.type = type
	}
}

class building extends object {
	constructor(representation) {
		super(representation, "building")
	}
}

class tile {
	content;
	constructor(content) {
		this.content = content
	}
	
	display( x, y, size ) {
		textSize(size)
		text(`${this.content.representation}`, x, y)
	}
}

class section extends tile {
	owner;
	constructor( tiles, owner ) {
		super( tiles )
		this.owner = owner
	}

	display( x, y, size ) {
		fill(this.owner.color)
		super.display( x, y, size )
	}
}


var tileRes = 50
var tileX = 10
var tileY = 10

const country1 = new country("Greenland", [0, 175, 0], 0, 10)
const tile1 = new tile(new building("H"));
const section1 = new section([
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,],
	[tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1, tile1,]
], country1)


function setup() {
	//createCanvas(800, 600);
	createCanvas(650, 500);
	textAlign(LEFT, TOP);
}

function draw() {
	for( let i = 0; i < tileY; i++ ) {
		for( let j = 0; j < tileX; j++ ) {
			fill(255)
			rect(j*tileRes, i*tileRes, tileRes, tileRes)
		}
	}

	fill(128)
	rect(tileX*tileRes, 0, 3*tileRes, tileY*tileRes)

	section1.display(tileRes*4, tileRes*4, tileRes)
	
	let textRef = [tileRes*tileX, 0]
	textSize(24)
	fill(0)
	text("CoolQuest", textRef[0], textRef[1])
}