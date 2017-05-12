
//////////////////////////////////////////////////
////////////////  Unit stuff /////////////////////
//////////////////////////////////////////////////

var U = {};

class Unit = {
	constructor(unitname){
		var base = U.lookup(unitname);
		if(base != false){
			for(i=0;i<5;i++){
				this[U.statmap[1]] = base.initialBases[U.statmap[1]] + U.growthValues[base.growthPoints[U.statmap[1]]][4];
			}
			this.hp_current = this.hp;
			this.mov = base.mov;
			this.name = base.unitname;
			this.sprite = new Sprite(U.portraits[base.unitname]);
		}
	}
	setPos(x,y){
		this.pos = [x,y];
		this.sprite.x = x*90;
		this.sprite.y = y*90;
	}
}

U.portraits = PIXI.loader.resources["https://raw.githubusercontent.com/Pegasnow/feh-battle-simulator/master/portraits.json"].textures; 

U.statmap = [
	"hp","atk","spd","def","res"
]

U.growthValues = [
	[ 6,  7,  7,  8,  8],
	[ 8,  8,  9, 10, 10],
	[ 9, 10, 11, 12, 13],
	[11, 12, 13, 14, 15],
	[13, 14, 15, 16, 17],
	[14, 15, 17, 18, 19],
	[16, 17, 19, 20, 22],
	[18, 19, 21, 22, 24],
	[19, 21, 23, 24, 26],
	[21, 23, 25, 26, 28],
	[23, 25, 27, 28, 30],
	[24, 26, 29, 31, 33]
]

U.lookup = function(unitname){
	for(i=0;i<U.bases.length;i++){
		if(U.bases[i].unitname == unitname){
			return U.bases[i];
		}
	}
	return false;
}

U.bases = [
	{unitname: "Abel",mov: "cav",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 7, spd: 8, def: 8, res: 6},growthPoints: {hp: 6, atk: 8, spd: 7, def: 4, res: 5}},
	{unitname: "Alfonse",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 9, spd: 6, def: 8, res: 5},growthPoints: {hp: 7, atk: 8, spd: 5, def: 7, res: 4}},
	{unitname: "Alm",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 21, atk: 9, spd: 6, def: 6, res: 5},growthPoints: {hp: 7, atk: 7, spd: 7, def: 6, res: 4}},
	{unitname: "Anna",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 7, spd: 10, def: 5, res: 6},growthPoints: {hp: 6, atk: 6, spd: 9, def: 4, res: 6}},
	{unitname: "Arthur",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 8, spd: 7, def: 8, res: 5},growthPoints: {hp: 7, atk: 7, spd: 6, def: 6, res: 5}},
	{unitname: "Azama",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 19, atk: 4, spd: 7, def: 8, res: 6},growthPoints: {hp: 7, atk: 4, spd: 5, def: 7, res: 5}},
	{unitname: "Azura",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 5, spd: 7, def: 4, res: 6},growthPoints: {hp: 5, atk: 8, spd: 8, def: 4, res: 6}},
	{unitname: "Barst",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 20, atk: 9, spd: 8, def: 6, res: 4},growthPoints: {hp: 8, atk: 7, spd: 7, def: 7, res: 2}},
	{unitname: "Bartre",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 21, atk: 10, spd: 6, def: 7, res: 3},growthPoints: {hp: 9, atk: 8, spd: 5, def: 8, res: 1}},
	{unitname: "Beruka",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 20, atk: 7, spd: 6, def: 9, res: 5},growthPoints: {hp: 8, atk: 6, spd: 4, def: 9, res: 4}},
	{unitname: "Caeda",mov: "fly",weapon: "Sword",color: "R",initialBases: {hp: 17, atk: 6, spd: 9, def: 5, res: 10},growthPoints: {hp: 5, atk: 5, spd: 9, def: 5, res: 7}},
	{unitname: "Cain",mov: "cav",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 8, spd: 6, def: 8, res: 6},growthPoints: {hp: 7, atk: 7, spd: 8, def: 5, res: 3}},
	{unitname: "Camilla",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 18, atk: 8, spd: 8, def: 6, res: 7},growthPoints: {hp: 5, atk: 6, spd: 7, def: 6, res: 7}},
	{unitname: "Camilla(S)",mov: "fly",weapon: "Tome",color: "G",initialBases: {hp: 17, atk: 9, spd: 6, def: 8, res: 4},growthPoints: {hp: 6, atk: 8, spd: 5, def: 6, res: 3}},
	{unitname: "Catria",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 7, spd: 10, def: 7, res: 6},growthPoints: {hp: 6, atk: 7, spd: 7, def: 6, res: 5}},
	{unitname: "Cecilia",mov: "cav",weapon: "Tome",color: "G",initialBases: {hp: 17, atk: 8, spd: 6, def: 5, res: 7},growthPoints: {hp: 5, atk: 7, spd: 5, def: 4, res: 6}},
	{unitname: "Cherche",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 20, atk: 10, spd: 6, def: 8, res: 3},growthPoints: {hp: 8, atk: 9, spd: 5, def: 7, res: 2}},
	{unitname: "Chrom",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 21, atk: 9, spd: 6, def: 7, res: 4},growthPoints: {hp: 8, atk: 9, spd: 5, def: 7, res: 2}},
	{unitname: "Chrom(S)",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 9, spd: 8, def: 6, res: 5},growthPoints: {hp: 7, atk: 8, spd: 7, def: 6, res: 3}},
	{unitname: "Clair",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 7, spd: 8, def: 5, res: 9},growthPoints: {hp: 5, atk: 5, spd: 9, def: 5, res: 7}},
	{unitname: "Clarine",mov: "cav",weapon: "Staff",color: "A",initialBases: {hp: 16, atk: 6, spd: 9, def: 5, res: 7},growthPoints: {hp: 5, atk: 5, spd: 7, def: 4, res: 6}},
	{unitname: "Cordelia",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 9, spd: 9, def: 5, res: 6},growthPoints: {hp: 6, atk: 8, spd: 8, def: 4, res: 5}},
	{unitname: "Corrin(F)",mov: "inf",weapon: "Dragon",color: "B",initialBases: {hp: 19, atk: 8, spd: 6, def: 8, res: 6},growthPoints: {hp: 6, atk: 5, spd: 9, def: 8, res: 3}},
	{unitname: "Corrin(M)",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 20, atk: 8, spd: 8, def: 6, res: 5},growthPoints: {hp: 6, atk: 7, spd: 7, def: 6, res: 5}},
	{unitname: "Donnel",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 7, spd: 5, def: 6, res: 4},growthPoints: {hp: 8, atk: 9, spd: 7, def: 8, res: 5}},
	{unitname: "Draug",mov: "arm",weapon: "Sword",color: "R",initialBases: {hp: 24, atk: 8, spd: 6, def: 13, res: 3},growthPoints: {hp: 8, atk: 6, spd: 8, def: 8, res: 3}},
	{unitname: "Effie",mov: "arm",weapon: "Lance",color: "B",initialBases: {hp: 22, atk: 12, spd: 5, def: 11, res: 4},growthPoints: {hp: 9, atk: 9, spd: 4, def: 6, res: 5}},
	{unitname: "Eirika",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 7, spd: 9, def: 7, res: 6},growthPoints: {hp: 7, atk: 5, spd: 8, def: 5, res: 6}},
	{unitname: "Eldigan",mov: "cav",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 8, spd: 5, def: 8, res: 6},growthPoints: {hp: 8, atk: 7, spd: 5, def: 8, res: 2}},
	{unitname: "Elise",mov: "cav",weapon: "Staff",color: "A",initialBases: {hp: 15, atk: 8, spd: 8, def: 4, res: 8},growthPoints: {hp: 3, atk: 7, spd: 7, def: 3, res: 7}},
	{unitname: "Eliwood",mov: "cav",weapon: "Sword",color: "R",initialBases: {hp: 17, atk: 7, spd: 8, def: 6, res: 8},growthPoints: {hp: 6, atk: 7, spd: 6, def: 4, res: 7}},
	{unitname: "Ephraim",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 19, atk: 9, spd: 6, def: 8, res: 5},growthPoints: {hp: 8, atk: 8, spd: 5, def: 7, res: 3}},
	{unitname: "Est",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 9, spd: 8, def: 5, res: 8},growthPoints: {hp: 5, atk: 8, spd: 6, def: 5, res: 7}},
	{unitname: "Fae",mov: "inf",weapon: "Dragon",color: "G",initialBases: {hp: 16, atk: 5, spd: 4, def: 6, res: 8},growthPoints: {hp: 10, atk: 9, spd: 7, def: 5, res: 6}},
	{unitname: "Faye",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 16, atk: 6, spd: 3, def: 4, res: 7},growthPoints: {hp: 8, atk: 7, spd: 6, def: 6, res: 7}},
	{unitname: "Felicia",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 15, atk: 6, spd: 11, def: 3, res: 9},growthPoints: {hp: 5, atk: 4, spd: 8, def: 3, res: 8}},
	{unitname: "Fir",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 6, spd: 10, def: 5, res: 7},growthPoints: {hp: 6, atk: 5, spd: 8, def: 5, res: 7}},
	{unitname: "Florina",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 7, spd: 8, def: 6, res: 8},growthPoints: {hp: 7, atk: 6, spd: 5, def: 5, res: 8}},
	{unitname: "Frederick",mov: "cav",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 9, spd: 6, def: 8, res: 4},growthPoints: {hp: 7, atk: 8, spd: 5, def: 9, res: 1}},
	{unitname: "Gaius",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 18, atk: 7, spd: 10, def: 5, res: 4},growthPoints: {hp: 7, atk: 6, spd: 8, def: 4, res: 3}},
	{unitname: "Gordin",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 19, atk: 7, spd: 6, def: 8, res: 4},growthPoints: {hp: 7, atk: 7, spd: 5, def: 7, res: 2}},
	{unitname: "Gunter",mov: "cav",weapon: "Axe",color: "G",initialBases: {hp: 21, atk: 10, spd: 7, def: 11, res: 5},growthPoints: {hp: 6, atk: 6, spd: 4, def: 6, res: 2}},
	{unitname: "Gwendolyn",mov: "arm",weapon: "Lance",color: "B",initialBases: {hp: 23, atk: 8, spd: 5, def: 12, res: 6},growthPoints: {hp: 8, atk: 6, spd: 5, def: 8, res: 6}},
	{unitname: "Hana",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 9, spd: 10, def: 6, res: 4},growthPoints: {hp: 5, atk: 8, spd: 8, def: 4, res: 6}},
	{unitname: "Hawkeye",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 21, atk: 9, spd: 5, def: 6, res: 6},growthPoints: {hp: 7, atk: 7, spd: 4, def: 6, res: 7}},
	{unitname: "Hector",mov: "arm",weapon: "Axe",color: "G",initialBases: {hp: 24, atk: 10, spd: 5, def: 11, res: 4},growthPoints: {hp: 9, atk: 8, spd: 5, def: 8, res: 3}},
	{unitname: "Henry",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 19, atk: 6, spd: 5, def: 8, res: 6},growthPoints: {hp: 8, atk: 4, spd: 4, def: 7, res: 5}},
	{unitname: "Hinata",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 21, atk: 8, spd: 5, def: 10, res: 3},growthPoints: {hp: 8, atk: 7, spd: 5, def: 8, res: 3}},
	{unitname: "Hinoka",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 19, atk: 7, spd: 8, def: 6, res: 7},growthPoints: {hp: 6, atk: 9, spd: 7, def: 5, res: 4}},
	{unitname: "Ike",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 9, spd: 7, def: 8, res: 5},growthPoints: {hp: 7, atk: 8, spd: 7, def: 7, res: 2}},
	{unitname: "Jaffar",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 17, atk: 7, spd: 9, def: 6, res: 5},growthPoints: {hp: 7, atk: 5, spd: 7, def: 5, res: 4}},
	{unitname: "Jagen",mov: "cav",weapon: "Lance",color: "B",initialBases: {hp: 20, atk: 8, spd: 7, def: 8, res: 11},growthPoints: {hp: 4, atk: 5, spd: 4, def: 4, res: 7}},
	{unitname: "Jakob",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 17, atk: 7, spd: 9, def: 6, res: 5},growthPoints: {hp: 6, atk: 6, spd: 6, def: 5, res: 5}},
	{unitname: "Jeorge",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 8, spd: 8, def: 5, res: 5},growthPoints: {hp: 5, atk: 7, spd: 7, def: 5, res: 4}},
	{unitname: "Julia",mov: "inf",weapon: "Tome",color: "G",initialBases: {hp: 16, atk: 9, spd: 7, def: 4, res: 8},growthPoints: {hp: 6, atk: 8, spd: 5, def: 2, res: 7}},
	{unitname: "Kagero",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 16, atk: 9, spd: 8, def: 5, res: 6},growthPoints: {hp: 3, atk: 8, spd: 7, def: 4, res: 6}},
	{unitname: "Karel",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 8, spd: 9, def: 6, res: 5},growthPoints: {hp: 9, atk: 6, spd: 8, def: 5, res: 3}},
	{unitname: "Klein",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 9, spd: 7, def: 5, res: 5},growthPoints: {hp: 6, atk: 6, spd: 8, def: 3, res: 5}},
	{unitname: "Lachesis",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 6, spd: 8, def: 5, res: 8},growthPoints: {hp: 6, atk: 8, spd: 4, def: 4, res: 6}},
	{unitname: "Laslow",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 20, atk: 9, spd: 7, def: 6, res: 5},growthPoints: {hp: 7, atk: 8, spd: 5, def: 7, res: 4}},
	{unitname: "Leo",mov: "cav",weapon: "Tome",color: "R",initialBases: {hp: 17, atk: 7, spd: 5, def: 6, res: 8},growthPoints: {hp: 6, atk: 6, spd: 4, def: 5, res: 6}},
	{unitname: "Lilina",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 16, atk: 9, spd: 6, def: 4, res: 9},growthPoints: {hp: 5, atk: 9, spd: 5, def: 3, res: 6}},
	{unitname: "Linde",mov: "inf",weapon: "Tome",color: "B",initialBases: {hp: 16, atk: 9, spd: 10, def: 4, res: 5},growthPoints: {hp: 5, atk: 8, spd: 8, def: 1, res: 6}},
	{unitname: "Lissa",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 7, spd: 6, def: 6, res: 8},growthPoints: {hp: 6, atk: 5, spd: 5, def: 6, res: 6}},
	{unitname: "Lon'qu",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 7, spd: 11, def: 5, res: 5},growthPoints: {hp: 8, atk: 6, spd: 9, def: 4, res: 4}},
	{unitname: "Lucina",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 8, spd: 10, def: 6, res: 4},growthPoints: {hp: 7, atk: 8, spd: 8, def: 5, res: 3}},
	{unitname: "Lucina(S)",mov: "inf",weapon: "Tome",color: "B",initialBases: {hp: 16, atk: 7, spd: 10, def: 5, res: 6},growthPoints: {hp: 5, atk: 6, spd: 8, def: 4, res: 5}},
	{unitname: "Lucius",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 18, atk: 6, spd: 8, def: 3, res: 9},growthPoints: {hp: 5, atk: 8, spd: 6, def: 1, res: 8}},
	{unitname: "Lukas",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 19, atk: 9, spd: 5, def: 10, res: 4},growthPoints: {hp: 8, atk: 8, spd: 4, def: 9, res: 2}},
	{unitname: "Lyn",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 6, spd: 11, def: 7, res: 5},growthPoints: {hp: 5, atk: 6, spd: 8, def: 5, res: 7}},
	{unitname: "Maria",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 5, spd: 8, def: 4, res: 10},growthPoints: {hp: 5, atk: 6, spd: 8, def: 3, res: 6}},
	{unitname: "Marth",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 7, spd: 8, def: 7, res: 6},growthPoints: {hp: 6, atk: 7, spd: 8, def: 6, res: 4}},
	{unitname: "Matthew",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 17, atk: 6, spd: 10, def: 6, res: 5},growthPoints: {hp: 7, atk: 5, spd: 7, def: 7, res: 2}},
	{unitname: "Merric",mov: "inf",weapon: "Tome",color: "G",initialBases: {hp: 19, atk: 7, spd: 8, def: 6, res: 4},growthPoints: {hp: 7, atk: 5, spd: 7, def: 6, res: 3}},
	{unitname: "Michalis",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 8, spd: 7, def: 9, res: 4},growthPoints: {hp: 7, atk: 8, spd: 5, def: 8, res: 3}},
	{unitname: "Minerva",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 18, atk: 7, spd: 9, def: 8, res: 5},growthPoints: {hp: 6, atk: 7, spd: 7, def: 7, res: 4}},
	{unitname: "Mist",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 8, spd: 6, def: 5, res: 8},growthPoints: {hp: 6, atk: 5, spd: 6, def: 3, res: 8}},
	{unitname: "Narcian",mov: "fly",weapon: "Axe",color: "G",initialBases: {hp: 18, atk: 7, spd: 7, def: 8, res: 7},growthPoints: {hp: 7, atk: 6, spd: 6, def: 7, res: 5}},
	{unitname: "Navarre",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 7, spd: 11, def: 6, res: 5},growthPoints: {hp: 7, atk: 7, spd: 8, def: 4, res: 5}},
	{unitname: "Niles",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 6, spd: 8, def: 4, res: 8},growthPoints: {hp: 5, atk: 5, spd: 8, def: 2, res: 8}},
	{unitname: "Ninian",mov: "inf",weapon: "Dragon",color: "B",initialBases: {hp: 16, atk: 5, spd: 7, def: 6, res: 5},growthPoints: {hp: 8, atk: 5, spd: 8, def: 4, res: 6}},
	{unitname: "Nino",mov: "inf",weapon: "Tome",color: "G",initialBases: {hp: 16, atk: 7, spd: 10, def: 4, res: 7},growthPoints: {hp: 4, atk: 8, spd: 8, def: 3, res: 5}},
	{unitname: "Nowi",mov: "inf",weapon: "Dragon",color: "B",initialBases: {hp: 17, atk: 6, spd: 5, def: 6, res: 5},growthPoints: {hp: 9, atk: 9, spd: 6, def: 7, res: 6}},
	{unitname: "Oboro",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 8, spd: 7, def: 9, res: 5},growthPoints: {hp: 6, atk: 7, spd: 5, def: 8, res: 5}},
	{unitname: "Odin",mov: "inf",weapon: "Tome",color: "B",initialBases: {hp: 19, atk: 5, spd: 8, def: 6, res: 6},growthPoints: {hp: 7, atk: 4, spd: 7, def: 5, res: 5}},
	{unitname: "Ogma",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 21, atk: 7, spd: 10, def: 6, res: 3},growthPoints: {hp: 8, atk: 9, spd: 7, def: 6, res: 1}},
	{unitname: "Olivia",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 17, atk: 6, spd: 7, def: 5, res: 4},growthPoints: {hp: 5, atk: 6, spd: 8, def: 6, res: 6}},
	{unitname: "Olwen",mov: "cav",weapon: "Tome",color: "B",initialBases: {hp: 17, atk: 7, spd: 8, def: 5, res: 6},growthPoints: {hp: 4, atk: 5, spd: 8, def: 3, res: 7}},
	{unitname: "Palla",mov: "fly",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 7, spd: 9, def: 6, res: 7},growthPoints: {hp: 7, atk: 7, spd: 6, def: 6, res: 5}},
	{unitname: "Peri",mov: "cav",weapon: "Lance",color: "B",initialBases: {hp: 16, atk: 9, spd: 9, def: 6, res: 6},growthPoints: {hp: 5, atk: 7, spd: 7, def: 4, res: 7}},
	{unitname: "Priscilla",mov: "cav",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 7, spd: 7, def: 4, res: 8},growthPoints: {hp: 5, atk: 6, spd: 6, def: 3, res: 7}},
	{unitname: "Raigh",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 17, atk: 8, spd: 7, def: 5, res: 7},growthPoints: {hp: 5, atk: 7, spd: 6, def: 4, res: 6}},
	{unitname: "Raven",mov: "inf",weapon: "Axe",color: "G",initialBases: {hp: 19, atk: 8, spd: 9, def: 6, res: 5},growthPoints: {hp: 6, atk: 8, spd: 8, def: 5, res: 4}},
	{unitname: "Rebecca",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 7, spd: 8, def: 6, res: 5},growthPoints: {hp: 5, atk: 6, spd: 8, def: 3, res: 6}},
	{unitname: "Reinhardt",mov: "cav",weapon: "Tome",color: "B",initialBases: {hp: 16, atk: 8, spd: 6, def: 5, res: 8},growthPoints: {hp: 6, atk: 7, spd: 4, def: 6, res: 4}},
	{unitname: "Robin(F)",mov: "inf",weapon: "Tome",color: "G",initialBases: {hp: 18, atk: 7, spd: 7, def: 7, res: 5},growthPoints: {hp: 6, atk: 6, spd: 6, def: 6, res: 4}},
	{unitname: "Robin(M)",mov: "inf",weapon: "Tome",color: "B",initialBases: {hp: 18, atk: 7, spd: 7, def: 7, res: 5},growthPoints: {hp: 6, atk: 6, spd: 6, def: 6, res: 4}},
	{unitname: "Roy",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 20, atk: 8, spd: 9, def: 6, res: 4},growthPoints: {hp: 7, atk: 6, spd: 6, def: 5, res: 7}},
	{unitname: "Ryoma",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 8, spd: 11, def: 5, res: 4},growthPoints: {hp: 6, atk: 8, spd: 7, def: 6, res: 4}},
	{unitname: "Saizo",mov: "inf",weapon: "Dagger",color: "A",initialBases: {hp: 17, atk: 7, spd: 8, def: 9, res: 3},growthPoints: {hp: 5, atk: 6, spd: 8, def: 7, res: 2}},
	{unitname: "Sakura",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 17, atk: 6, spd: 8, def: 5, res: 8},growthPoints: {hp: 5, atk: 6, spd: 6, def: 5, res: 6}},
	{unitname: "Sanaki",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 16, atk: 9, spd: 7, def: 4, res: 8},growthPoints: {hp: 4, atk: 9, spd: 5, def: 2, res: 8}},
	{unitname: "Selena",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 18, atk: 6, spd: 9, def: 8, res: 6},growthPoints: {hp: 5, atk: 5, spd: 8, def: 7, res: 6}},
	{unitname: "Seliph",mov: "inf",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 8, spd: 7, def: 8, res: 5},growthPoints: {hp: 9, atk: 8, spd: 4, def: 6, res: 4}},
	{unitname: "Serra",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 16, atk: 6, spd: 9, def: 4, res: 9},growthPoints: {hp: 4, atk: 7, spd: 6, def: 4, res: 7}},
	{unitname: "Setsuna",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 6, spd: 9, def: 5, res: 6},growthPoints: {hp: 5, atk: 6, spd: 9, def: 4, res: 4}},
	{unitname: "Shanna",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 17, atk: 8, spd: 9, def: 6, res: 7},growthPoints: {hp: 6, atk: 6, spd: 8, def: 5, res: 6}},
	{unitname: "Sharena",mov: "inf",weapon: "Lance",color: "B",initialBases: {hp: 19, atk: 8, spd: 8, def: 7, res: 5},growthPoints: {hp: 7, atk: 7, spd: 7, def: 6, res: 4}},
	{unitname: "Sheena",mov: "arm",weapon: "Axe",color: "G",initialBases: {hp: 21, atk: 8, spd: 6, def: 12, res: 7},growthPoints: {hp: 7, atk: 6, spd: 5, def: 7, res: 8}},
	{unitname: "Sophia",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 18, atk: 9, spd: 4, def: 6, res: 7},growthPoints: {hp: 6, atk: 7, spd: 3, def: 6, res: 6}},
	{unitname: "Soren",mov: "inf",weapon: "Tome",color: "G",initialBases: {hp: 17, atk: 7, spd: 9, def: 4, res: 7},growthPoints: {hp: 5, atk: 8, spd: 7, def: 2, res: 6}},
	{unitname: "Stahl",mov: "cav",weapon: "Sword",color: "R",initialBases: {hp: 19, atk: 7, spd: 7, def: 8, res: 5},growthPoints: {hp: 8, atk: 7, spd: 5, def: 6, res: 4}},
	{unitname: "Subaki",mov: "fly",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 6, spd: 9, def: 9, res: 5},growthPoints: {hp: 6, atk: 5, spd: 8, def: 8, res: 4}},
	{unitname: "Sully",mov: "cav",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 7, spd: 8, def: 7, res: 6},growthPoints: {hp: 7, atk: 5, spd: 8, def: 4, res: 6}},
	{unitname: "Takumi",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 18, atk: 8, spd: 7, def: 6, res: 5},growthPoints: {hp: 6, atk: 7, spd: 8, def: 5, res: 2}},
	{unitname: "Tharja",mov: "inf",weapon: "Tome",color: "R",initialBases: {hp: 17, atk: 8, spd: 8, def: 6, res: 5},growthPoints: {hp: 6, atk: 7, spd: 8, def: 4, res: 3}},
	{unitname: "Tiki(A)",mov: "inf",weapon: "Dragon",color: "R",initialBases: {hp: 18, atk: 7, spd: 6, def: 9, res: 7},growthPoints: {hp: 6, atk: 9, spd: 4, def: 8, res: 4}},
	{unitname: "Tiki(Y)",mov: "inf",weapon: "Dragon",color: "R",initialBases: {hp: 15, atk: 5, spd: 4, def: 8, res: 7},growthPoints: {hp: 8, atk: 8, spd: 8, def: 7, res: 6}},
	{unitname: "Titania",mov: "cav",weapon: "Axe",color: "G",initialBases: {hp: 18, atk: 6, spd: 8, def: 6, res: 8},growthPoints: {hp: 5, atk: 6, spd: 8, def: 5, res: 6}},
	{unitname: "Ursula",mov: "cav",weapon: "Tome",color: "B",initialBases: {hp: 16, atk: 7, spd: 8, def: 4, res: 8},growthPoints: {hp: 5, atk: 6, spd: 7, def: 3, res: 6}},
	{unitname: "Virion",mov: "inf",weapon: "Bow",color: "A",initialBases: {hp: 20, atk: 7, spd: 7, def: 7, res: 3},growthPoints: {hp: 8, atk: 7, spd: 7, def: 5, res: 1}},
	{unitname: "Wrys",mov: "inf",weapon: "Staff",color: "A",initialBases: {hp: 18, atk: 5, spd: 6, def: 5, res: 10},growthPoints: {hp: 7, atk: 5, spd: 4, def: 4, res: 8}},
	{unitname: "Xander",mov: "cav",weapon: "Sword",color: "R",initialBases: {hp: 20, atk: 8, spd: 5, def: 9, res: 4},growthPoints: {hp: 7, atk: 7, spd: 5, def: 9, res: 2}},
	{unitname: "Xander(S)",mov: "cav",weapon: "Lance",color: "B",initialBases: {hp: 18, atk: 6, spd: 6, def: 9, res: 7},growthPoints: {hp: 6, atk: 5, spd: 6, def: 8, res: 5}},
	{unitname: "Zephiel",mov: "arm",weapon: "Sword",color: "R",initialBases: {hp: 25, atk: 9, spd: 3, def: 12, res: 5},growthPoints: {hp: 10, atk: 8, spd: 2, def: 8, res: 5}}
]