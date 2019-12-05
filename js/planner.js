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
//ALBION
const ARMSMAN_CLASS = "Armsman";
const CABALIST_CLASS = "Cabalist";
const CLERIC_CLASS = "Cleric";
const FRIAR_CLASS = "Friar";
const HERETIC_CLASS = "Heretic";
const INFILTRATOR_CLASS = "Infiltrator";
const A_MAULER_CLASS = "Mauler";
const MERCENARY_CLASS = "Mercenary";
const MINSTREL_CLASS = "Minstrel";
const NECROMANCER_CLASS = "Necromancer";
const PALADIN_CLASS = "Paladin";
const REAVER_CLASS = "Reaver";
const SCOUT_CLASS = "Scout";
const SORCERER_CLASS = "Sorcerer";
const THEURGIST_CLASS = "Theurgist";
const WIZARD_CLASS = "Wizard";
let albClasses = [ARMSMAN_CLASS, CABALIST_CLASS, CLERIC_CLASS, FRIAR_CLASS, HERETIC_CLASS, 
				  INFILTRATOR_CLASS, A_MAULER_CLASS, MERCENARY_CLASS, MINSTREL_CLASS, NECROMANCER_CLASS, 
				  PALADIN_CLASS, REAVER_CLASS, SCOUT_CLASS, SORCERER_CLASS, THEURGIST_CLASS, WIZARD_CLASS];
//HIBERNIA
const ANIMIST_CLASS = "Animist";
const BAINSHEE_CLASS = "Bainshee";
const BARD_CLASS = "Bard";
const BLADEMASTER_CLASS = "Blademaster";
const CHAMPION_CLASS = "Champion";
const DRUID_CLASS = "Druid";
const ELDRITCH_CLASS = "Eldritch";
const ENCHANTER_CLASS = "Enchanter";
const HERO_CLASS = "Hero";
const H_MAULER_CLASS = "Mauler";
const MENTALIST_CLASS = "Mentalist";
const NIGHTSHADE_CLASS = "Nightshade";
const RANGER_CLASS = "Ranger";
const VALEWALKER_CLASS = "Valewalker";
const VAMPIIR_CLASS = "Vampiir";
const WARDEN_CLASS = "Warden";
let hibClasses = [ANIMIST_CLASS, BAINSHEE_CLASS, BARD_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, 
				  DRUID_CLASS, ELDRITCH_CLASS, ENCHANTER_CLASS, HERO_CLASS, H_MAULER_CLASS, 
				  MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS, VALEWALKER_CLASS, VAMPIIR_CLASS, WARDEN_CLASS];
		
const BERSERKER_CLASS = "Berserker";
const BONEDANCER_CLASS = "Bonedancer";
const HEALER_CLASS = "Healer";
const HUNTER_CLASS = "Hunter";
const M_MAULER_CLASS = "Mauler";
const RUNEMASTER_CLASS = "Runemaster";
const SAVAGE_CLASS = "Savage";
const SHADOWBLADE_CLASS = "Shadowblade";
const SHAMAN_CLASS = "Shaman";
const SKALD_CLASS = "Skald";
const SPIRITMASTER_CLASS = "Spiritmaster";
const THANE_CLASS = "Thane";
const VALKYRIE_CLASS = "Valkyrie";
const WARLOCK_CLASS = "Warlock";
const WARRIOR_CLASS = "Warrior";
let midClasses = [BERSERKER_CLASS, BONEDANCER_CLASS, HEALER_CLASS, HUNTER_CLASS, M_MAULER_CLASS, 
				  RUNEMASTER_CLASS, SAVAGE_CLASS, SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, 
				  SPIRITMASTER_CLASS, THANE_CLASS, VALKYRIE_CLASS, WARLOCK_CLASS, WARRIOR_CLASS];
		
//races and class eligibility
//Albion
const AVALONIAN_RACE = "Avalonian";
const BRITON_RACE = "Briton";
const HALF_OGRE_RACE = "Half Ogre";
const HIGHLANDER_RACE = "Highlander";
const INCONNU_RACE = "Inconnu";
const A_MINOTAUR_RACE = "Minotaur";
const SARACEN_RACE = "Saracen";
let albRaces = [AVALONIAN_RACE, BRITON_RACE, HALF_OGRE_RACE, HIGHLANDER_RACE, INCONNU_RACE, A_MINOTAUR_RACE, SARACEN_RACE];

let avalonianClass = [ARMSMAN_CLASS, CABALIST_CLASS, CLERIC_CLASS, FRIAR_CLASS, HERETIC_CLASS, 
					  MERCENARY_CLASS, NECROMANCER_CLASS, PALADIN_CLASS, SORCERER_CLASS, THEURGIST_CLASS, 
					  WIZARD_CLASS];
let britonClass = albClasses;
let halfOgreClass = [ARMSMAN_CLASS, CABALIST_CLASS, A_MAULER_CLASS, MERCENARY_CLASS, SORCERER_CLASS, 
					  THEURGIST_CLASS, WIZARD_CLASS];
let highlanderClass = [ARMSMAN_CLASS, CLERIC_CLASS, FRIAR_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, 
					   MERCENARY_CLASS, MINSTREL_CLASS, PALADIN_CLASS, SCOUT_CLASS];
let inconnuClass = [ARMSMAN_CLASS, CABALIST_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, A_MAULER_CLASS, 
					MERCENARY_CLASS, MINSTREL_CLASS, NECROMANCER_CLASS, REAVER_CLASS, SCOUT_CLASS, 
					SORCERER_CLASS, WIZARD_CLASS];
let minotauraClass = [ARMSMAN_CLASS, HERETIC_CLASS, A_MAULER_CLASS, MERCENARY_CLASS, REAVER_CLASS];
let saracenClass = [ARMSMAN_CLASS, CABALIST_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, MERCENARY_CLASS, 
					MINSTREL_CLASS, NECROMANCER_CLASS, PALADIN_CLASS, REAVER_CLASS, SCOUT_CLASS, 
					SORCERER_CLASS];
let albClassEleg = [avalonianClass, britonClass, halfOgreClass, highlanderClass, inconnuClass, minotauraClass, saracenClass];
//Hiberina
const CELT_RACE = "Celt";
const ELF_RACE = "Elf";
const FIRBOLG_RACE = "Firbolg";
const LURIKEEN_RACE = "Lurikeen";
const H_MINOTAUR_RACE = "Minotaur";
const SHAR_RACE = "Shar";
const SYLVAN_RACE = "Sylvan";
let hibRaces = [CELT_RACE, ELF_RACE, FIRBOLG_RACE, LURIKEEN_RACE, H_MINOTAUR_RACE, SHAR_RACE, SYLVAN_RACE];

let celtClass = [ANIMIST_CLASS, BAINSHEE_CLASS, BARD_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, 
				 DRUID_CLASS, HERO_CLASS, H_MAULER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, 
				 RANGER_CLASS, VALEWALKER_CLASS, VAMPIIR_CLASS, WARDEN_CLASS];
let elfClass = [ANIMIST_CLASS, BAINSHEE_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, ELDRITCH_CLASS, 
				ENCHANTER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS];
let firbolgClass = [ANIMIST_CLASS, BARD_CLASS, BLADEMASTER_CLASS, DRUID_CLASS, HERO_CLASS, 
					H_MAULER_CLASS, VALEWALKER_CLASS, WARDEN_CLASS];
let lurikeenClass = [BAINSHEE_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, ELDRITCH_CLASS, ENCHANTER_CLASS, 
					 HERO_CLASS, H_MAULER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS, 
					 VAMPIIR_CLASS];
let minotaurhClass = [BLADEMASTER_CLASS, CHAMPION_CLASS, HERO_CLASS, H_MAULER_CLASS, VALEWALKER_CLASS, 
					  WARDEN_CLASS];
let sharClass = [BLADEMASTER_CLASS, CHAMPION_CLASS, HERO_CLASS, MENTALIST_CLASS, RANGER_CLASS, 
				 VAMPIIR_CLASS, WARDEN_CLASS];
let sylvanClass = [ANIMIST_CLASS, CHAMPION_CLASS, DRUID_CLASS, HERO_CLASS, RANGER_CLASS, 
				   VALEWALKER_CLASS, WARDEN_CLASS];
let hibClassEleg = [celtClass, elfClass, firbolgClass, lurikeenClass, minotaurhClass, sharClass, sylvanClass];
//Midgaurd
const DWARF_RACE = "Dwarf";
const FROSTALF_RACE = "Frostalf";
const KOBOLD_RACE = "Kobold";
const M_MINOTAUR_RACE = "Minotaur";
const NORSEMAN_RACE = "Norseman";
const TROLL_RACE = "Troll";
const VALKYN_RACE = "Valkyn";
let midRaces = [DWARF_RACE, FROSTALF_RACE, KOBOLD_RACE, M_MINOTAUR_RACE, NORSEMAN_RACE, TROLL_RACE, VALKYN_RACE];

let dwarfClass = [BERSERKER_CLASS, HEALER_CLASS, HUNTER_CLASS, RUNEMASTER_CLASS, SAVAGE_CLASS, 
				  SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, THANE_CLASS, VALKYRIE_CLASS, 
				  WARRIOR_CLASS];
let frostalfClass = [BONEDANCER_CLASS, HEALER_CLASS, HUNTER_CLASS, RUNEMASTER_CLASS, SHADOWBLADE_CLASS, 
					 SHAMAN_CLASS, SPIRITMASTER_CLASS, THANE_CLASS, VALKYRIE_CLASS, WARLOCK_CLASS];
let koboldClass = [BERSERKER_CLASS, BONEDANCER_CLASS, HUNTER_CLASS, M_MAULER_CLASS, RUNEMASTER_CLASS, 
				   SAVAGE_CLASS, SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, SPIRITMASTER_CLASS, 
				   WARLOCK_CLASS, WARRIOR_CLASS];
let minotaurmClass = [BERSERKER_CLASS, M_MAULER_CLASS, SKALD_CLASS, THANE_CLASS, WARRIOR_CLASS];
let norsemanClass = [BERSERKER_CLASS, HEALER_CLASS, HUNTER_CLASS, M_MAULER_CLASS, RUNEMASTER_CLASS, 
					 SAVAGE_CLASS, SHADOWBLADE_CLASS, SKALD_CLASS, SPIRITMASTER_CLASS, THANE_CLASS, 
					 VALKYRIE_CLASS, WARLOCK_CLASS, WARRIOR_CLASS];
let trollClass = [BERSERKER_CLASS, BONEDANCER_CLASS, M_MAULER_CLASS, SAVAGE_CLASS, SHAMAN_CLASS, 
				  SKALD_CLASS, THANE_CLASS, WARLOCK_CLASS, WARRIOR_CLASS];
let valkynClass = [BERSERKER_CLASS, BONEDANCER_CLASS, HUNTER_CLASS, SAVAGE_CLASS, SHADOWBLADE_CLASS, 
				   THANE_CLASS, VALKYRIE_CLASS, WARRIOR_CLASS]; 
let midClassEleg = [dwarfClass, frostalfClass, koboldClass, minotaurmClass, norsemanClass, trollClass, valkynClass];
//styles

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

function onRealmSelect() {
	
	//When Albion is selected
	if (document.getElementById('albRealm').checked) {
				
		//Change Albion text color
		document.getElementById('selectalb').style.color = 'red';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'black';
		drawDropDown('races');
		fillDropDown('races', 'alb');
		drawDropDown('classes');
		fillDropDown('classes', 'alb');
				
	} //When Hibernia is selected 
	else if (document.getElementById('hibRealm').checked) {
				
		//Change Hibernia text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'green';
		document.getElementById('selectmid').style.color = 'black';
		drawDropDown('races');
		fillDropDown('races', 'hib');
		drawDropDown('classes');
		fillDropDown('classes', 'hib');
		
	} //When Midgaurd is selected 
	else if (document.getElementById('midRealm').checked) {
		
		//Change Midguard text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'blue';
		
		drawDropDown('races');
		fillDropDown('races', 'mid');
		drawDropDown('classes');
		fillDropDown('classes', 'mid');
				
	}
}

function drawDropDown(type) {
	let selected = '';

	if(document.getElementById('albRealm').checked) {
			selected = 'alb';
		} else if(document.getElementById('hibRealm').checked) {
			selected = 'hib';
		} else if(document.getElementById('midRealm').checked) {
			selected = 'mid';
		}
	if(type == 'races') {		
		
		document.getElementById("raceSelector").innerHTML = `Race: <select name="${type}" id="${type}" onchange="drawDropDown('classes'), fillDropDown('classes', '${selected}')"></select>`;
	} else if(type == 'classes') {
		document.getElementById("classSelector").innerHTML = `Class: <select name="${type}" id="${type}"></select>`;
	}
}

function fillDropDown(type, realm) {
	if(type == 'races') {
	document.getElementById(type).innerHTML += `<option name="Blank" id="Blank"></option>`
		if(realm == 'alb') {
			for(let i = 0; i < albRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${albRaces[i]}" id="${albRaces[i]}">${albRaces[i]}</option>`
			}
		} else if(realm == 'hib') {
			for(let i = 0; i < hibRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${hibRaces[i]}" id="${hibRaces[i]}">${hibRaces[i]}</option>`
			}
		} else if(realm == 'mid') {
			for(let i = 0; i < midRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${midRaces[i]}" id="${midRaces[i]}">${midRaces[i]}</option>`
			}
		}
	}
	
	if(type == 'classes') {
		
		if(document.getElementById('races').value == "") {
			document.getElementById('classSelector').innerHTML = 'Select your Race!';
		} else {
			document.getElementById(type).innerHTML = `<option name="Blank" id="Blank"></option>`;
		}
	
		if(realm == 'alb') {
			for(let i = 0; i < albRaces.length; i++) {
				if(document.getElementById('races').value === albRaces[i]) {
					for(let j = 0; j < albClassEleg[i].length; j++) {	
						document.getElementById(type).innerHTML += `<option name="${albClassEleg[i][j]}" id="${albClassEleg[i][j]}">${albClassEleg[i][j]}</option>`
					}
				}
			}
		} else if(realm == 'hib') {
			for(let i = 0; i < hibRaces.length; i++) {
				if(document.getElementById('races').value === hibRaces[i]) {
					for(let j = 0; j < hibClassEleg[i].length; j++) {	
						document.getElementById(type).innerHTML += `<option name="${hibClassEleg[i][j]}" id="${hibClassEleg[i][j]}">${hibClassEleg[i][j]}</option>`
					}
				}
			}
		} else if(realm == 'mid') {
			for(let i = 0; i < midRaces.length; i++) {
				if(document.getElementById('races').value === midRaces[i]) {
					for(let j = 0; j < midClassEleg[i].length; j++) {	
						document.getElementById(type).innerHTML += `<option name="${midClassEleg[i][j]}" id="${midClassEleg[i][j]}">${midClassEleg[i][j]}</option>`
					}
				}
			}
		}
	}
}

//Create function to adjust available races depending on the selected realm
function onRaceSelect() {
	if(document.getElementById("albRealm").checked) {
			
	}
}

//Create function to adjust character attributes depending on class

//Function adjusts available specialization points on character level change
function changeSpecPoints() {
	let levelChange = 0;
	let newLevel;

	//check input
	if(document.getElementById("charLevel").value == "") {
		document.getElementById("charLevel").value = 1;
		newLevel = 1;
	} else if(document.getElementById("charLevel").value > 50) {
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

