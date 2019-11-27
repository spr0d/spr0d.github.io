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

//Import JSON files and assign to allStyles and allSpells



//Create function to adjust available classes depending on the selected realm

//Create function to adjust available races depending on the selected class, will also set pointMod

//Create function to adjust character attributes depending on class

//Function adjusts available specialization points on character level increase

function changeSpecPoints() {
	let newLevel = parseInt(document.getElementById("charLevel").value);
	let levelChange = 0;
		
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
