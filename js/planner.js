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
//classes
let albClasses = ["armsman", "cabalist", "cleric", "friar", "heretic", 
				  "infiltrator", "maulera", "mercenary", "minstrel", "necromancer", 
				  "paladin", "reaver", "scout", "sorcerer", "theurgist", "wizard"];
let hibClasses = ["animist", "bainshee", "bard", "blademaster", "champion", 
				  "druid", "eldritch", "enchanter", "hero", "maulerh", 
				  "mentalist", "nightshade", "ranger", "valewalker", "vampiir", "warden"];
let midClasses = ["berserker", "bonedancer", "healer", "hunter", "maulerm", 
				  "runemaster", "savage", "shadowblade", "shaman", "skald", 
				  "spiritmaster", "thane", "valkyrie", "warlock", "warrior"];
		
//races and class eligibility
//Albion
let albRaces = ["avalonian", "briton", "halfogre", "highlander", "inconnu", "minotaura", "saracen"];

let avalonianClass = ["armsman", "cabalist", "cleric", "friar", "heretic", 
					  "mercenary", "necromancer", "paladin", "sorcerer", "theurgist", 
					  "wizard"];
let britonClass = albClasses;
let halfogrecClass = ["armsman", "cabalist", "maulera", "mercenary", "sorcerer", 
					  "theurgist", "wizard"];
let highlanderClass = ["armsman", "cleric", "friar", "heretic", "infiltrator", 
					   "mercenary", "minstrel", "paladin", "scout"];
let inconnuClass = ["armsman", "cabalist", "heretic", "infiltrator", "maulera", 
					"mercenary", "minstrel", "necromancer", "reaver", "scout", 
					"sorcerer", "wizard"];
let minotauraClass = ["armsman", "heretic", "maulera", "mercenary", "reaver"];
let saracenClass = ["armsman", "cabalist", "heretic", "infiltrator", "mercenary", 
					"minstrel", "necromancer", "paladin", "reaver", "scout", 
					"sorcerer"];
//Hiberina
let hibRaces = ["celt", "elf", "firbolg", "lurikeen", "minotaurh", "shar", "sylvan"];

let celtClass = ["animist", "bainshee", "bard", "blademaster", "champion", 
				 "druid", "hero", "maulerh", "mentalist", "nightshade", 
				 "ranger", "valewalker", "vampiir", "warden"];
let elfClass = ["animist", "bainshee", "blademaster", "champion", "eldritch", 
				"enchanter", "mentalist", "nightshade", "ranger"];
let firbolgClass = ["animist", "bard", "blademaster", "druid", "hero", 
					"maulerh", "valewalker", "warden"];
let lurikeenClass = ["bainshee", "blademaster", "champion", "eldritch", "enchanter", 
					 "hero", "maulerh", "mentalist", "nightshade", "ranger", 
					 "vampiir"];
let minotaurhClass = ["blademaster", "champion", "hero", "maulerh", "valewalker", 
					  "warden"];
let sharClass = ["blademaster", "champion", "hero", "mentalist", "ranger", 
				 "vampiir", "warden"];
let sylvanClass = ["animist", "champion", "druid", "hero", "ranger", 
				   "valewalker", "warden"];
//Midgaurd
let midRaces = ["dwarf", "frostalf", "kobold", "minotaurm", "norseman", "troll", "valkyn"];

let dwarfClass = ["berserker", "healer", "hunter", "runemaster", "savage", 
				  "shadwowblade", "shaman", "skald", "thane", "valkyrie", 
				  "warrior"];
let forstalfClass = ["bonedancer", "healer", "hunter", "runemaster", "shadowblade", 
					 "shaman", "spiritmaster", "thane", "valkyrie", "warlock"];
let koboldClass = ["berserker", "bonedancer", "hunter", "maulerm", "runemaster", 
				   "savage", "shadowblade", "shaman", "skald", "spiritmaster", 
				   "warlock", "warrior"];
let minotaurmClass = ["berserker", "maulerm", "skald", "thane", "warrior"];
let norsemanClass = ["berserker", "healer", "hunter", "maulerm", "runemaster", 
					 "savage", "shadowblade", "skald", "spiritmaster", "thane", 
					 "valkyrie", "warlock", "warrior"];
let trollClass = ["berserker", "bonedancer", "maulerm", "savage", "shaman", 
				  "skald", "thane", "warlock", "warrior"];
let valkynClass = ["berserker", "bonedancer", "hunter", "savage", "shadowblade", 
				   "thane", "valkyrie", "warrior"]; 

//styles
const ALL_STYLES = STYLE_DATA;
let classStyles = [];
let charStyles = []; 
//spells
const ALL_BASE_SPELLS = [];
const ALL_TRAINED_SPELLS = [];
let classBaseSpells = [];
let classTrainedSpells = [];
let charBaseSpells = [];
let charTrainedSpells = [];
//index ALB/HIB/MID - [starting id, quantity]
const CRUSH_STYLE_INDEX = [0, 16];
const DUALWIELD_STYLE_INDEX = [16, 16];
const FLEX_STYLE_INDEX = [32, 16];
const POLEARM_STYLE_INDEX = [48, 17];
const SLASH_STYLE_INDEX = [65, 16];
const STAFF_STYLE_INDEX = [81, 13];
const THRUST_STYLE_INDEX = [94, 17];
const TWOHAND_STYLE_INDEX = [111, 16];


//Create functions to adjust available classes depending on the selected realm

function changeClasses() {
	
	//When Albion is selected
	if (document.getElementById('albRealm').checked) {
				
		//Change Albion text color
		document.getElementById('selectalb').style.color = 'red';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'black';
		
		//Set drop down to first Albion class
		document.getElementById('classes').value = albClasses[0];
		
		//Show Albion classes in drop down
		for(let a = 0; a < albClasses.length; a++) {
			document.getElementById(albClasses[a]).style.display = "block";
		}//Hide Hibernia classes in drop down
		for(let h = 0; h < hibClasses.length; h++) {
			document.getElementById(hibClasses[h]).style.display = "none";
		}//Hide Midgaurd classes in drop down
		for(let m = 0; m < midClasses.length; m++) {
			document.getElementById(midClasses[m]).style.display = "none";
		}
				
	} //When Hibernia is selected 
	else if (document.getElementById('hibRealm').checked) {
				
		//Change Hibernia text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'green';
		document.getElementById('selectmid').style.color = 'black';
		
		//Set drop down to first Hibernia class
		document.getElementById('classes').value = hibClasses[0];
		
		//Hide Albion classes in drop down
		for(let a = 0; a < albClasses.length; a++) {
			document.getElementById(albClasses[a]).style.display = "none";
		}//Show Hibernia classes in drop down
		for(let h = 0; h < hibClasses.length; h++) {
			document.getElementById(hibClasses[h]).style.display = "block";
		}//Hide Midgaurd classes in drop down
		for(let m = 0; m < midClasses.length; m++) {
			document.getElementById(midClasses[m]).style.display = "none";
		}
		
		
	} //When Midgaurd is selected 
	else if (document.getElementById('midRealm').checked) {
		
		//Change Midguard text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'blue';
		
		//Set drop down to first Midgaurd class
		document.getElementById('classes').value = midClasses[0];
		
		//Hide Albion classes in drop down
		for(let a = 0; a < albClasses.length; a++) {
			document.getElementById(albClasses[a]).style.display = "none";
		}//Hide Hibernia classes in drop down
		for(let h = 0; h < hibClasses.length; h++) {
			document.getElementById(hibClasses[h]).style.display = "none";
		}//Show Midgaurd classes in drop down
		for(let m = 0; m < midClasses.length; m++) {
			document.getElementById(midClasses[m]).style.display = "block";
		}
		
	}
}

//Create function to adjust available races depending on the selected realm


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

//Create function that assigns styles based on class selection

