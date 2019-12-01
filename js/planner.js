//Global variables
let realm = "";
let charClass = "";
let race = "";
let level = 1;
let specPoints = 0;
let pointMod = 1;
//character attributes
let str = 0;
let con = 0;
let dex = 0;
let qui = 0;
let intel = 0;
let emp = 0;
let pie = 0;
let cha = 0;
//character resists
let thrust = 0;
let crush = 0;
let slash = 0;
let heat = 0;
let cold = 0;
let matter = 0;
let energy = 0;
let spirit = 0;
let body = 0;
//styles
const ALL_STYLES = [];
let classStyles = [];
let charStyles = []; 
//spells
const ALL_BASE_SPELLS = [];
const ALL_TRAINED_SPELLS = [];
let classBaseSpells = [];
let classTrainedSpells = [];
let charBaseSpells = [];
let charTrainedSpells = [];
//index ALB/HIB/MID - [start, quantity]
const CRUSH_STYLE_INDEX = [0, 16];
const DUALWIELD_STYLE_INDEX = [16, 16];
const FLEX_STYLE_INDEX = [32, 16];
const POLEARM_STYLE_INDEX = [48, 17];
const SLASH_STYLE_INDEX = [65, 16];
const STAFF_STYLE_INDEX = [81, 13];
const THRUST_STYLE_INDEX = [94, 17];
const TWOHAND_STYLE_INDEX = [111, 16];

//Import JSON files and assign to allStyles and allSpells



//Create function to adjust available classes depending on the selected realm

//Create function to adjust available races depending on the selected class, will also set pointMod

//Create function to adjust character attributes depending on class

//Function adjusts available specialization points on character level change
function changeSpecPoints() {
	let levelChange = 0;
	let newLevel;

	//check input
	if(document.getElementById("charLevel").value == "") {
		document.getElementById("charLevel").value = 1;
		newLevel = 1;
	} else if(newLevel > 50) {
		document.getElementById("charLevel").value = 50;
		newLevel = 50;
	} else {
		newLevel = parseInt(document.getElementById("charLevel").value);
	}		
	
	//calculate points
	if(newLevel > level) {
		for(levelChange = newLevel; levelChange > level; levelChange--) {
			specPoints += (levelChange * pointMod);	
		}
	} else if(newLevel < level) {
		for(levelChange = newLevel; levelChange < level; levelChange++) {
			specPoints -= (levelChange * pointMod) + 1;
		}
	}
	
	document.getElementById("specPoints").value = specPoints;
	level = newLevel;
}
