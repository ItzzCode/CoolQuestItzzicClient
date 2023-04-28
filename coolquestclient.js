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

class entity {
	representation = "?"
	type = "generic"
	constructor( representation, type ) {
		this.representation = representation
		this.type = type
	}
}

class building extends entity {
	content;
	constructor( representation, content ) {
		super(representation, "building")
		this.content = content
	}
}

class tile {
	content;
	constructor( content ) {
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
	new country("Greenland", [50, 205, 50], 100, 12),
	new country("Sus!", [200, 0, 0], 2, 30),
	new country("LOWAS", [0, 250, 250], 43, 20)
]
let yourCountry = 1

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
	
	let textRef = [tileRes*tileX+1, 0]
	let textRefY2 = textRef[1]+tileRes*(tileY-2)

	textSize(24)
	fill(0)
	text("CoolQuest", textRef[0], textRef[1])

	textSize(18)
	text("Countries:", textRef[0], textRef[1]+25)
	for( let i = 0; i < countries.length; i++ ) {
		fill(countries[i].color)
		text(`${countries[i].name}`, textRef[0], textRef[1]+(i*18)+(i*2)+43)
	}

	fill(countries[yourCountry].color)
	text(`Name: ${countries[yourCountry].name}`, textRef[0], textRefY2+0)

	fill(0)
	text(`Gold: ${countries[yourCountry].gold}`, textRef[0], textRefY2+19)
	text(`People: ${countries[yourCountry].people}`, textRef[0], textRefY2+38)

}