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
		fill(0)
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
		rect(x, y, size, size)
	}

	displayAll( size ) {
		for( let i = 0; i < this.content.length; i++ ) {
			for( let j = 0; j < this.content[i].length; j++ ) {
				this.content[i][j].display(j*size, i*size, size)
			}
		}
	}
}

var tileRes = 50
var tileX = 10
var tileY = 10

var countries = [
	new country("Greenland", [0, 175, 0], 100, 12),
	new country("Sus!", [200, 0, 0], 2, 30),
	new country("Tengistan", [100, 0, 100], 43, 20)
]
let yourCountry = 0

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

	// Sidebar
	fill(128)
	rect(tileX*tileRes, 0, 3*tileRes, tileY*tileRes)
	
	let textRef = [tileRes*tileX, 0]
	let textRefY2 = textRef[1]+tileRes*(tileY-2)

	textSize(24)
	fill(0)
	text("CoolQuest", textRef[0], textRef[1])
	textSize(18)
	text("Countries:", textRef[0], textRef[1]+25)

	fill(countries[yourCountry].color)
	text(`Name: ${countries[yourCountry].name}`, textRef[0], textRefY2+0)

	fill(0)
	text(`Gold: ${countries[yourCountry].gold}`, textRef[0], textRefY2+19)
	text(`People: ${countries[yourCountry].people}`, textRef[0], textRefY2+38)

}