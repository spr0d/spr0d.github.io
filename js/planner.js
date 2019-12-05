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

	changeRealmColors();
	resetAttributes();
	resetAttributePrio();
	drawDropDown('races');
	fillDropDown('races');
	drawDropDown('classes');
	fillDropDown('classes');

}

function changeRealmColors() {
	let realm = getSelectedRealm();
	if(realm == 'alb') {
		document.getElementById('selectalb').style.color = 'red';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'black';
	} else if (realm == 'hib') {
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'green';
		document.getElementById('selectmid').style.color = 'black';
	} else if (realm == 'mid') {
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'blue';
	}
}

function getSelectedRealm() {
	if(document.getElementById('albRealm').checked) {
		return 'alb';
	} else if(document.getElementById('hibRealm').checked) {
		return 'hib';
	} else if(document.getElementById('midRealm').checked) {
		return 'mid';
	}
}

function getSelectedRace() {
	return document.getElementById('races').value;
}
function getSelectedClass() {
	return document.getElementById('classes').value;
}

function drawDropDown(type) {
	
	if(type == 'races') {		
		document.getElementById("raceSelector").innerHTML = `Race: <select name="${type}" id="${type}" onchange="onRaceSelect()"></select>`;
	} else if(type == 'classes') {
		document.getElementById("classSelector").innerHTML = `Class: <select name="${type}" id="${type}" onchange="onClassSelect()"></select>`;
	}
}

function fillDropDown(type) {
	let realm = getSelectedRealm();
	
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
		
		if(getSelectedRace() == "") {
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

function resetAttributes() {
	str = 0;
	con = 0;
	dex = 0;
	qui = 0;
	intel = 0;
	emp = 0;
	pie = 0;
	cha = 0;
		
	document.getElementById('strAttribute').value = str;
	document.getElementById('conAttribute').value = con;
	document.getElementById('dexAttribute').value = dex;
	document.getElementById('quiAttribute').value = qui;
	document.getElementById('intAttribute').value = intel;
	document.getElementById('empAttribute').value = emp;
	document.getElementById('pieAttribute').value = pie;
	document.getElementById('chaAttribute').value = cha;
}

function resetAttributePrio() {
	let styleNormal = 'white';
	document.getElementById('strPrio').style.color = styleNormal;
	document.getElementById('conPrio').style.color = styleNormal;
	document.getElementById('dexPrio').style.color = styleNormal;
	document.getElementById('quiPrio').style.color = styleNormal;
	document.getElementById('intPrio').style.color = styleNormal;
	document.getElementById('empPrio').style.color = styleNormal;
	document.getElementById('piePrio').style.color = styleNormal;
	document.getElementById('chaPrio').style.color = styleNormal;
}

function setAttributePrio(attOne, attTwo, attThree) {
	let attributePrios = [attOne, attTwo, attThree];
	resetAttributePrio();
	for(let i = 0; i < attributePrios.length; i++) {
		if(attributePrios[i] == 'str') {
			document.getElementById('strPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'con') {
			document.getElementById('conPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'dex') {
			document.getElementById('dexPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'qui') {
			document.getElementById('quiPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'int') {
			document.getElementById('intPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'emp') {
			document.getElementById('empPrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'pie') {
			document.getElementById('piePrio').style.color = 'yellow';
		} else if(attributePrios[i] == 'cha') {
			document.getElementById('chaPrio').style.color = 'yellow';
		}
	}
}

function setAttributes(selectedRace) {
	let realm = getSelectedRealm();
	switch(selectedRace)
	{
		case AVALONIAN_RACE:
			str = 45;
			con = 45;
			dex = 60;
			qui = 70;
			intel = 80;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case BRITON_RACE:
			str = 60;
			con = 60;
			dex = 60;
			qui = 60;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case HALF_OGRE_RACE:
			str = 90;
			con = 70;
			dex = 40;
			qui = 40;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case HIGHLANDER_RACE:
			str = 70;
			con = 70;
			dex = 50;
			qui = 50;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case INCONNU_RACE:
			str = 50;
			con = 60;
			dex = 70;
			qui = 50;
			intel = 70;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case A_MINOTAUR_RACE:
			str = 80;
			con = 70;
			dex = 50;
			qui = 40;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case SARACEN_RACE:
			str = 50;
			con = 50;
			dex = 80;
			qui = 60;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case CELT_RACE:
			str = 60;
			con = 60;
			dex = 60;
			qui = 60;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case ELF_RACE:
			str = 40;
			con = 40;
			dex = 75;
			qui = 75;
			intel = 70;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case FIRBOLG_RACE:
			str = 90;
			con = 60;
			dex = 40;
			qui = 40;
			intel = 60;
			emp = 60;
			pie = 70;
			cha = 60;
			break;
		case LURIKEEN_RACE:
			str = 40;
			con = 40;
			dex = 80;
			qui = 80;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case H_MINOTAUR_RACE:
			str = 80;
			con = 70;
			dex = 50;
			qui = 40;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case SHAR_RACE:
			str = 60;
			con = 80;
			dex = 50;
			qui = 50;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case SYLVAN_RACE:
			str = 70;
			con = 60;
			dex = 55;
			qui = 45;
			intel = 70;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case DWARF_RACE:
			str = 60;
			con = 80;
			dex = 50;
			qui = 50;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case FROSTALF_RACE:
			str = 55;
			con = 55;
			dex = 55;
			qui = 60;
			intel = 60;
			emp = 75;
			pie = 60;
			cha = 60;
			break;
		case KOBOLD_RACE:
			str = 50;
			con = 50;
			dex = 70;
			qui = 70;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case M_MINOTAUR_RACE:
			str = 80;
			con = 70;
			dex = 50;
			qui = 40;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case NORSEMAN_RACE:
			str = 70;
			con = 70;
			dex = 50;
			qui = 50;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case TROLL_RACE:
			str = 100;
			con = 70;
			dex = 35;
			qui = 35;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
		case VALKYN_RACE:
			str = 55;
			con = 45;
			dex = 65;
			qui = 75;
			intel = 60;
			emp = 60;
			pie = 60;
			cha = 60;
			break;
	}
	
	document.getElementById('strAttribute').value = str;
	document.getElementById('conAttribute').value = con;
	document.getElementById('dexAttribute').value = dex;
	document.getElementById('quiAttribute').value = qui;
	document.getElementById('intAttribute').value = intel;
	document.getElementById('empAttribute').value = emp;
	document.getElementById('pieAttribute').value = pie;
	document.getElementById('chaAttribute').value = cha;
}

function updateAttributes(selectedClass) {
		
	setAttributes(getSelectedRace())
	
	switch(selectedClass) {
		case ARMSMAN_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case CABALIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case CLERIC_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dex += 15;
			pie += 10;
			break;
		case FRIAR_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			con += 10;
			dex += 10;
			pie += 10;
			break;
		case HERETIC_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			con += 10;
			dex += 10;
			pie += 10;
			break;
		case INFILTRATOR_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case MERCENARY_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case MINSTREL_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case NECROMANCER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case PALADIN_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case REAVER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case SCOUT_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case SORCERER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case THEURGIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case WIZARD_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case ANIMIST_CLASS:
			setAttributePrio('con', 'dex', 'int');
			dex += 15;
			intel += 10;
			break;
		case BAINSHEE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			dex += 15;
			break;
		case BARD_CLASS:
			setAttributePrio('con', 'dex', 'cha');
			dex += 15;
			cha += 10;
			break;
		case BLADEMASTER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case CHAMPION_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case DRUID_CLASS:
			setAttributePrio('con', 'dex', 'emp');
			dex += 15;
			emp += 10;
			break;
		case ELDRITCH_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case ENCHANTER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case HERO_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case MENTALIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dex += 15;
			intel += 10;
			break;
		case NIGHTSHADE_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case RANGER_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case VALEWALKER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case VAMPIIR_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case WARDEN_CLASS:
			setAttributePrio('con', 'dex', 'emp');
			dex += 15;
			emp += 10;
			break;
		case BERSERKER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case BONEDANCER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dex += 15;
			pie += 10;
			break;
		case HEALER_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dex += 15;
			pie += 10;
			break;
		case HUNTER_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case RUNEMASTER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dex += 15;
			pie += 10;
			break;
		case SAVAGE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case SHADOWBLADE_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			str += 10;
			dex += 15;
			break;
		case SHAMAN_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dex += 15;
			pie += 10;
			break;
		case SKALD_CLASS:
			setAttributePrio('str', 'con', 'cha');
			str += 10;
			con += 10;
			cha += 10;
			break;
		case SPIRITMASTER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dex += 15;
			pie += 10;
			break;
		case THANE_CLASS:
			setAttributePrio('str', 'con', 'pie');
			str += 10;
			con += 10;
			pie += 10;
			break;
		case VALKYRIE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case WARLOCK_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			con += 10;
			pie += 15;
			break;
		case WARRIOR_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
		case A_MAULER_CLASS || H_MAULER_CLASS || M_MAULER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			str += 10;
			con += 10;
			dex += 10;
			break;
	}
	
	document.getElementById('strAttribute').value = str;
	document.getElementById('conAttribute').value = con;
	document.getElementById('dexAttribute').value = dex;
	document.getElementById('quiAttribute').value = qui;
	document.getElementById('intAttribute').value = intel;
	document.getElementById('empAttribute').value = emp;
	document.getElementById('pieAttribute').value = pie;
	document.getElementById('chaAttribute').value = cha;
}

//Create function to adjust available races depending on the selected realm
function onRaceSelect() {
	let realm = getSelectedRealm();
	resetAttributePrio();
	drawDropDown('classes');
	fillDropDown('classes');
	
	setAttributes(getSelectedRace());
	
	
}

//Create function to adjust character attributes depending on class
function onClassSelect() {
	let realm = getSelectedRealm();
	updateAttributes(getSelectedClass());
}

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

