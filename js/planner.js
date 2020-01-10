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
//character bonus attributes
let strAttBonus = 0;
let conAttBonus = 0;
let dexAttBonus = 0;
let quiAttBonus = 0;
let intAttBonus = 0;
let empAttBonus = 0;
let pieAttBonus = 0;
let chaAttBonus = 0;
let attributePoints = 0;
let selectedAttribute;
//attribute descriptions [Name, Description]
let strDesc = ["Strength", "Determines the damage done by weapons for crushing and slashing damage types. Strength also affects half the damage done by thrusting weapons. Maximum encumbrance also depends on your strength."];
let conDesc = ["Constitution", "General health and well being. Determines the maximum number of hit points your character will have."];
let dexDesc = ["Dexterity", "Archery and Staves as well as defensive skills such as shield blocking, parrying, and evasion depend on dexterity. Half of thrusting weapon damage is dependant on dexterity. Magic users rely on dexterity to increase their casting speed."];
let quiDesc = ["Quickness", "Affects the attack speed of a player in melee combat. Half of evasive skills rely on quickness. The other half relies on dexterity."];
let intDesc = ["Intelligence", "A primary casting stat, which determines the power pool of intelligence based casses as well as the damage done by their spells. These classes have intelligence as their primary stat."];
let empDesc = ["Empathy", "Empathy affects the maximum power pool available to the Druid and Warden classes as well as the damage done by Druidic damage over time spells."];
let pieDesc = ["Piety", "Priest, Clerical, Mystic, and Seer classes rely on piety to determine the depth of their power pools. Their damage spells, if they have them, are also affected by this attribute."];
let chaDesc = ["Charisma", "Personal magnetism or charm. Charisma guides the effectiveness of a musical class's songs."];

//character resists
let thrustRes = 0;
let crushRes = 0;
let slashRes = 0;
let heatRes = 0;
let coldRes = 0;
let matterRes = 0;
let energyRes = 0;
let spiritRes = 0;
let bodyRes = 0;

//classes
const MAULER_CLASS = "Mauler";
//ALBION
const ARMSMAN_CLASS = "Armsman";
const CABALIST_CLASS = "Cabalist";
const CLERIC_CLASS = "Cleric";
const FRIAR_CLASS = "Friar";
const HERETIC_CLASS = "Heretic";
const INFILTRATOR_CLASS = "Infiltrator";
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
				  INFILTRATOR_CLASS, MAULER_CLASS, MERCENARY_CLASS, MINSTREL_CLASS, NECROMANCER_CLASS, 
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
const MENTALIST_CLASS = "Mentalist";
const NIGHTSHADE_CLASS = "Nightshade";
const RANGER_CLASS = "Ranger";
const VALEWALKER_CLASS = "Valewalker";
const VAMPIIR_CLASS = "Vampiir";
const WARDEN_CLASS = "Warden";
let hibClasses = [ANIMIST_CLASS, BAINSHEE_CLASS, BARD_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, 
				  DRUID_CLASS, ELDRITCH_CLASS, ENCHANTER_CLASS, HERO_CLASS, MAULER_CLASS, 
				  MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS, VALEWALKER_CLASS, VAMPIIR_CLASS, WARDEN_CLASS];
		
const BERSERKER_CLASS = "Berserker";
const BONEDANCER_CLASS = "Bonedancer";
const HEALER_CLASS = "Healer";
const HUNTER_CLASS = "Hunter";
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
let midClasses = [BERSERKER_CLASS, BONEDANCER_CLASS, HEALER_CLASS, HUNTER_CLASS, MAULER_CLASS, 
				  RUNEMASTER_CLASS, SAVAGE_CLASS, SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, 
				  SPIRITMASTER_CLASS, THANE_CLASS, VALKYRIE_CLASS, WARLOCK_CLASS, WARRIOR_CLASS];
		
//races and class eligibility
//Albion
const AVALONIAN_RACE = "Avalonian";
const BRITON_RACE = "Briton";
const HALF_OGRE_RACE = "Half Ogre";
const HIGHLANDER_RACE = "Highlander";
const INCONNU_RACE = "Inconnu";
const A_MINOTAUR_RACE = "Korazh";
const SARACEN_RACE = "Saracen";
let albRaces = [AVALONIAN_RACE, BRITON_RACE, HALF_OGRE_RACE, HIGHLANDER_RACE, INCONNU_RACE, A_MINOTAUR_RACE, SARACEN_RACE];

let avalonianClass = [ARMSMAN_CLASS, CABALIST_CLASS, CLERIC_CLASS, FRIAR_CLASS, HERETIC_CLASS, 
					  MERCENARY_CLASS, NECROMANCER_CLASS, PALADIN_CLASS, SORCERER_CLASS, THEURGIST_CLASS, 
					  WIZARD_CLASS];
let britonClass = albClasses;
let halfOgreClass = [ARMSMAN_CLASS, CABALIST_CLASS, MAULER_CLASS, MERCENARY_CLASS, SORCERER_CLASS, 
					  THEURGIST_CLASS, WIZARD_CLASS];
let highlanderClass = [ARMSMAN_CLASS, CLERIC_CLASS, FRIAR_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, 
					   MERCENARY_CLASS, MINSTREL_CLASS, PALADIN_CLASS, SCOUT_CLASS];
let inconnuClass = [ARMSMAN_CLASS, CABALIST_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, MAULER_CLASS, 
					MERCENARY_CLASS, MINSTREL_CLASS, NECROMANCER_CLASS, REAVER_CLASS, SCOUT_CLASS, 
					SORCERER_CLASS, WIZARD_CLASS];
let minotauraClass = [ARMSMAN_CLASS, HERETIC_CLASS, MAULER_CLASS, MERCENARY_CLASS, REAVER_CLASS];
let saracenClass = [ARMSMAN_CLASS, CABALIST_CLASS, HERETIC_CLASS, INFILTRATOR_CLASS, MERCENARY_CLASS, 
					MINSTREL_CLASS, NECROMANCER_CLASS, PALADIN_CLASS, REAVER_CLASS, SCOUT_CLASS, 
					SORCERER_CLASS];
let albClassEleg = [avalonianClass, britonClass, halfOgreClass, highlanderClass, inconnuClass, minotauraClass, saracenClass];
//Hiberina
const CELT_RACE = "Celt";
const ELF_RACE = "Elf";
const FIRBOLG_RACE = "Firbolg";
const LURIKEEN_RACE = "Lurikeen";
const H_MINOTAUR_RACE = "Graoch";
const SHAR_RACE = "Shar";
const SYLVAN_RACE = "Sylvan";
let hibRaces = [CELT_RACE, ELF_RACE, FIRBOLG_RACE, LURIKEEN_RACE, H_MINOTAUR_RACE, SHAR_RACE, SYLVAN_RACE];

let celtClass = [ANIMIST_CLASS, BAINSHEE_CLASS, BARD_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, 
				 DRUID_CLASS, HERO_CLASS, MAULER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, 
				 RANGER_CLASS, VALEWALKER_CLASS, VAMPIIR_CLASS, WARDEN_CLASS];
let elfClass = [ANIMIST_CLASS, BAINSHEE_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, ELDRITCH_CLASS, 
				ENCHANTER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS];
let firbolgClass = [ANIMIST_CLASS, BARD_CLASS, BLADEMASTER_CLASS, DRUID_CLASS, HERO_CLASS, 
					MAULER_CLASS, VALEWALKER_CLASS, WARDEN_CLASS];
let lurikeenClass = [BAINSHEE_CLASS, BLADEMASTER_CLASS, CHAMPION_CLASS, ELDRITCH_CLASS, ENCHANTER_CLASS, 
					 HERO_CLASS, MAULER_CLASS, MENTALIST_CLASS, NIGHTSHADE_CLASS, RANGER_CLASS, 
					 VAMPIIR_CLASS];
let minotaurhClass = [BLADEMASTER_CLASS, CHAMPION_CLASS, HERO_CLASS, MAULER_CLASS, VALEWALKER_CLASS, 
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
const M_MINOTAUR_RACE = "Deifrang";
const NORSEMAN_RACE = "Norseman";
const TROLL_RACE = "Troll";
const VALKYN_RACE = "Valkyn";
let midRaces = [DWARF_RACE, FROSTALF_RACE, KOBOLD_RACE, M_MINOTAUR_RACE, NORSEMAN_RACE, TROLL_RACE, VALKYN_RACE];

let dwarfClass = [BERSERKER_CLASS, HEALER_CLASS, HUNTER_CLASS, RUNEMASTER_CLASS, SAVAGE_CLASS, 
				  SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, THANE_CLASS, VALKYRIE_CLASS, 
				  WARRIOR_CLASS];
let frostalfClass = [BONEDANCER_CLASS, HEALER_CLASS, HUNTER_CLASS, RUNEMASTER_CLASS, SHADOWBLADE_CLASS, 
					 SHAMAN_CLASS, SPIRITMASTER_CLASS, THANE_CLASS, VALKYRIE_CLASS, WARLOCK_CLASS];
let koboldClass = [BERSERKER_CLASS, BONEDANCER_CLASS, HUNTER_CLASS, MAULER_CLASS, RUNEMASTER_CLASS, 
				   SAVAGE_CLASS, SHADOWBLADE_CLASS, SHAMAN_CLASS, SKALD_CLASS, SPIRITMASTER_CLASS, 
				   WARLOCK_CLASS, WARRIOR_CLASS];
let minotaurmClass = [BERSERKER_CLASS, MAULER_CLASS, SKALD_CLASS, THANE_CLASS, WARRIOR_CLASS];
let norsemanClass = [BERSERKER_CLASS, HEALER_CLASS, HUNTER_CLASS, MAULER_CLASS, RUNEMASTER_CLASS, 
					 SAVAGE_CLASS, SHADOWBLADE_CLASS, SKALD_CLASS, SPIRITMASTER_CLASS, THANE_CLASS, 
					 VALKYRIE_CLASS, WARLOCK_CLASS, WARRIOR_CLASS];
let trollClass = [BERSERKER_CLASS, BONEDANCER_CLASS, MAULER_CLASS, SAVAGE_CLASS, SHAMAN_CLASS, 
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
//combat style indexes - [starting ID, quantity]
//Albion
const CRUSH_STYLE_INDEX = [0, 18];
const DUALWIELD_STYLE_INDEX = [18, 16];
const FLEX_STYLE_INDEX = [36, 16];
const PAINWORKING_STYLE_INDEX = [52, 10]
const POLEARM_STYLE_INDEX = [62, 17];
const SLASH_STYLE_INDEX = [79, 16];
const STAFF_STYLE_INDEX = [95, 13];
const THRUST_STYLE_INDEX = [108, 17];
const TWOHANDED_STYLE_INDEX = [125, 16];
//Hibernia
const BLADES_STYLE_INDEX = [141, 16];
const BLUNT_STYLE_INDEX = [157, 16];
const CELTICDUAL_STYLE_INDEX = [173, 16];
const CELTICSPEAR_STYLE_INDEX = [189, 16];
const LARGEWEAPONS_STYLE_INDEX = [205, 16];
const PIERCING_STYLE_INDEX = [221, 17];
const SCYTHE_STYLE_INDEX = [238, 17];
//Midgard
const AXE_STYLE_INDEX = [255, 16];
const HAMMER_STYLE_INDEX = [271, 17];
const HANDTOHAND_STYLE_INDEX = [288, 16];
const LEFTAXE_STYLE_INDEX = [304, 16];
const SPEAR_STYLE_INDEX = [320, 16];
const SWORD_STYLE_INDEX = [336, 17];
//All
const CRITICALSTRIKE_STYLE_INDEX = [353, 17];
const FISTWRAPS_STYLE_INDEX = [370, 16];
const MAULERSTAFFS_STYLE_INDEX = [386, 16];
const SHIELD_STYLE_INDEX = [402, 14];
//magic spell indexes

//Specialization variables, hold trained level // [spec name, points trained, index]
//Albion Combat
let crushSpec = ["Crush", 1, CRUSH_STYLE_INDEX];
let dualWieldSpec = ["Dual Wield", 1, DUALWIELD_STYLE_INDEX];
let flexibleSpec = ["Flexible", 1, FLEX_STYLE_INDEX];
let parrySpec = ["Parry", 1, null];
let polearmSpec = ["Polearm", 1, POLEARM_STYLE_INDEX];
let slashSpec = ["Slash", 1, SLASH_STYLE_INDEX];
let staffSpec = ["Staff", 1, STAFF_STYLE_INDEX];
let thrustSpec = ["Thrust", 1, THRUST_STYLE_INDEX];
let twoHandedSpec = ["Two-Handed", 1, TWOHANDED_STYLE_INDEX];
//Albion Magic
let crossbowSpec = ["Crossbow", 1, /*crossbow index*/1, "Crossbow"];
//Hibernia Combat
let bladesSpec = ["Blades", 1, BLADES_STYLE_INDEX];
let bluntSpec = ["Blunt", 1, BLUNT_STYLE_INDEX];
let celticDualSpec = ["Celtic Dual", 1, CELTICDUAL_STYLE_INDEX];
let celticSpearSpec = ["Celtic Spear", 1, CELTICSPEAR_STYLE_INDEX];
let largeWeaponsSpec = ["Large Weapons", 1, LARGEWEAPONS_STYLE_INDEX];
let piercingSpec = ["Piercing", 1, PIERCING_STYLE_INDEX];
let scytheSpec = ["Scythe", 1, SCYTHE_STYLE_INDEX];
//Hibernia Magic
//Midgard Combat
let axeSpec = ["Axe", 1, AXE_STYLE_INDEX];
let hammerSpec = ["Hammer", 1, HAMMER_STYLE_INDEX];
let handToHandSpec = ["Hand to Hand", 1, HANDTOHAND_STYLE_INDEX];
let leftAxeSpec = ["Left Axe", 1, LEFTAXE_STYLE_INDEX];
let spearSpec = ["Spear", 1, SPEAR_STYLE_INDEX];
let swordSpec = ["Sword", 1, SWORD_STYLE_INDEX];
//Midgard Magic
//All Combat
let criticalStrikeSpec = ["Critical Strike", 1, CRITICALSTRIKE_STYLE_INDEX];
let fistWrapsspec = ["Fist Wraps", 1, FISTWRAPS_STYLE_INDEX];
let maulerStaffsSpec = ["Mauler Staffs", 1, MAULERSTAFFS_STYLE_INDEX];
let shieldSpec = ["Shield", 1, SHIELD_STYLE_INDEX];
//Class specialization : Class = [specializations, abilities, weaponry, armor, shield, combat, magic]
const ARMSMAN_SPEC = [[polearmSpec, crossbowSpec, twoHandedSpec, parrySpec, slashSpec, crushSpec, thrustSpec, shieldSpec], [ABILITY_DATA[0], ABILITY_DATA[3]], ["Staves, Polearms, Two-Handed, Slashing, Crushing, Thrusting, Crossbows"], /*ARMOR_ABILITY_DATA[x], SHIELD_ABILITY_DATA[x],*/ ["Polearm, TwoHanded, Slash, Crush, Thrust, Shield"]];


//Function adjusts available classes depending on the selected realm
function onRealmSelect() {

	changeRealmColors();
	resetAttributes();
	drawDropDown('races');
	fillDropDown('races');
	drawDropDown('classes');
	fillDropDown('classes');
	document.getElementById('charLevel').readOnly = true;
	document.getElementById('builder').style.display = "none";
}

//Create function to adjust available races depending on the selected realm
function onRaceSelect() {
	
	resetAttributePrio();
	drawDropDown('classes');
	fillDropDown('classes');
	
	setAttributes(getSelectedRace());
	document.getElementById("charLevel").readOnly = true;
	document.getElementById('builder').style.display = "none";
}

//Create function to adjust character attributes depending on class
function onClassSelect() {
	
	resetLevel();
	resetAttributeBonus();
	resetSpecializations();
	resetAbilities();
	setOptimizedAttributes(getSelectedClass());
	document.getElementById("charLevel").readOnly = false;
	document.getElementById('builder').style.display = "block";
	setSpecializations(ARMSMAN_SPEC);
	setAbilities(ARMSMAN_SPEC);
}

//Function changes color for selected realm
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

//Return selected realm
function getSelectedRealm() {
	if(document.getElementById('albRealm').checked) {
		return 'alb';
	} else if(document.getElementById('hibRealm').checked) {
		return 'hib';
	} else if(document.getElementById('midRealm').checked) {
		return 'mid';
	}
}

//Return selected race
function getSelectedRace() {
	return document.getElementById('races').value;
}

//Return selected class
function getSelectedClass() {
	return document.getElementById('classes').value;
}

function getSelectedAttribute(event) {
	selectedAttribute = event.target.getAttribute("id");
}

function openModal() {
	document.getElementById("attributeModal").style.display = "block";
	fillAttributeModal();
}

function closeModal() {
	document.getElementById("attributeModal").style.display = "none";
	if(attributePoints > 0) {
		setOptimizedAttributes(getSelectedClass());
	} else {
		document.getElementById('strAttribute').value = str + strAttBonus;
		document.getElementById('conAttribute').value = con + conAttBonus;
		document.getElementById('dexAttribute').value = dex + dexAttBonus;
		document.getElementById('quiAttribute').value = qui + quiAttBonus;
		document.getElementById('intAttribute').value = intel + intAttBonus;
		document.getElementById('empAttribute').value = emp + empAttBonus;
		document.getElementById('pieAttribute').value = pie + pieAttBonus;
		document.getElementById('chaAttribute').value = cha + chaAttBonus;
	}
	
}

function fillAttributeModal() {
	document.getElementById('strengthAtt').innerHTML = str + strAttBonus;
	document.getElementById('constitutionAtt').innerHTML = con + conAttBonus;
	document.getElementById('dexterityAtt').innerHTML = dex + dexAttBonus;
	document.getElementById('quicknessAtt').innerHTML = qui + quiAttBonus;
	document.getElementById('intelligenceAtt').innerHTML = intel + intAttBonus;
	document.getElementById('empathyAtt').innerHTML = emp + empAttBonus;
	document.getElementById('pietyAtt').innerHTML = pie + pieAttBonus;
	document.getElementById('charismaAtt').innerHTML = cha + chaAttBonus;
	document.getElementById('attPoints').innerHTML = attributePoints;
}

//Creates race and class drop downs
function drawDropDown(type) {
	
	if(type == 'races') {		
		document.getElementById("raceSelector").innerHTML = `Race: <select name="${type}" id="${type}" onchange="onRaceSelect()"></select>`;
	} else if(type == 'classes') {
		document.getElementById("classSelector").innerHTML = `Class: <select name="${type}" id="${type}" onchange="onClassSelect()"></select>`;
	}
}

//Inserts available races and classes into drop downs depending on selected realm
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
			document.getElementById('classSelector').innerHTML = 'Select your Race';
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

function updateAttributeDesc() {
	let attributeName = document.getElementById("attributeName");
	let attributeDescription = document.getElementById("attributeDescription");
	
	if(selectedAttribute == "strengthAtt" || selectedAttribute == "decStrength" || selectedAttribute == "incStrength" || selectedAttribute == "strLabel") {
		attributeName.innerHTML = strDesc[0];
		attributeDescription.innerHTML = strDesc[1];
	} else if(selectedAttribute == "constitutionAtt" || selectedAttribute == "decConstitution" || selectedAttribute == "incConstitution" || selectedAttribute == "conLabel") {
		attributeName.innerHTML = conDesc[0];
		attributeDescription.innerHTML = conDesc[1];
	} else if(selectedAttribute == "dexterityAtt" || selectedAttribute == "decDexterity" || selectedAttribute == "incDexterity" || selectedAttribute == "dexLabel") {
		attributeName.innerHTML = dexDesc[0];
		attributeDescription.innerHTML = dexDesc[1];
	} else if(selectedAttribute == "quicknessAtt" || selectedAttribute == "decQuickness" || selectedAttribute == "incQuickness" || selectedAttribute == "quiLabel") {
		attributeName.innerHTML = quiDesc[0];
		attributeDescription.innerHTML = quiDesc[1];
	} else if(selectedAttribute == "intelligencehAtt" || selectedAttribute == "decIntelligence" || selectedAttribute == "incIntelligence" || selectedAttribute == "intLabel") {
		attributeName.innerHTML = intDesc[0];
		attributeDescription.innerHTML = intDesc[1];
	} else if(selectedAttribute == "empathyAtt" || selectedAttribute == "decEmpathy" || selectedAttribute == "incEmpathy" || selectedAttribute == "empLabel") {
		attributeName.innerHTML = empDesc[0];
		attributeDescription.innerHTML = empDesc[1];
	} else if(selectedAttribute == "pietyAtt" || selectedAttribute == "decPiety" || selectedAttribute == "incPiety" || selectedAttribute == "pieLabel") {
		attributeName.innerHTML = pieDesc[0];
		attributeDescription.innerHTML = pieDesc[1];
	} else if(selectedAttribute == "charismaAtt" || selectedAttribute == "decCharisma" || selectedAttribute == "incCharisma" || selectedAttribute == "chaLabel") {
		attributeName.innerHTML = chaDesc[0];
		attributeDescription.innerHTML = chaDesc[1];
	}
}

//Resets character level to 1
function resetLevel() {
	level = 1;
	specPoints = 0;
	document.getElementById("charLevel").value = level;
	document.getElementById("specPoints").value = specPoints;
}

//Resets character base attributes
function resetAttributes() {
	str = 0;
	con = 0;
	dex = 0;
	qui = 0;
	intel = 0;
	emp = 0;
	pie = 0;
	cha = 0;
	
	resetAttributeBonus();
	resetAttributePrio();
	resetResists();
	
		
	document.getElementById('strAttribute').value = str;
	document.getElementById('conAttribute').value = con;
	document.getElementById('dexAttribute').value = dex;
	document.getElementById('quiAttribute').value = qui;
	document.getElementById('intAttribute').value = intel;
	document.getElementById('empAttribute').value = emp;
	document.getElementById('pieAttribute').value = pie;
	document.getElementById('chaAttribute').value = cha;
}

//Resets bonus attributes
function resetAttributeBonus() {
	strAttBonus = 0;
	conAttBonus = 0;
	dexAttBonus = 0;
	quiAttBonus = 0;
	intAttBonus = 0;
	empAttBonus = 0;
	pieAttBonus = 0;
	chaAttBonus = 0;
	attributePoints = 30;
	
	document.getElementById('strengthAtt').innerHTML = str;
	document.getElementById('constitutionAtt').innerHTML = con;
	document.getElementById('dexterityAtt').innerHTML = dex;
	document.getElementById('quicknessAtt').innerHTML = qui;
	document.getElementById('intelligenceAtt').innerHTML = intel;
	document.getElementById('empathyAtt').innerHTML = emp;
	document.getElementById('pietyAtt').innerHTML = pie;
	document.getElementById('charismaAtt').innerHTML = cha;
	document.getElementById('attPoints').innerHTML = attributePoints;
}

//Resets character attribute priorities
function resetAttributePrio() {
	let styleNormal = 'white';
	document.getElementById('strPrio').style.color = styleNormal;
	document.getElementById('strLabel').style.color = styleNormal;
	document.getElementById('conPrio').style.color = styleNormal;
	document.getElementById('conLabel').style.color = styleNormal;
	document.getElementById('dexPrio').style.color = styleNormal;
	document.getElementById('dexLabel').style.color = styleNormal;
	document.getElementById('quiPrio').style.color = styleNormal;
	document.getElementById('quiLabel').style.color = styleNormal;
	document.getElementById('intPrio').style.color = styleNormal;
	document.getElementById('intLabel').style.color = styleNormal;
	document.getElementById('empPrio').style.color = styleNormal;
	document.getElementById('empLabel').style.color = styleNormal;
	document.getElementById('piePrio').style.color = styleNormal;
	document.getElementById('pieLabel').style.color = styleNormal;
	document.getElementById('chaPrio').style.color = styleNormal;
	document.getElementById('chaLabel').style.color = styleNormal;
}

//Resets character resistances
function resetResists() {
	
	thrustRes = 0;
	crushRes = 0;
	slashRes = 0;
	heatRes = 0;
	coldRes = 0;
	matterRes = 0;
	energyRes = 0;
	spiritRes = 0;
	bodyRes = 0;
	
	document.getElementById('thrustRes').value = `+${thrustRes}%`;
	document.getElementById('crushRes').value = `+${crushRes}%`;
	document.getElementById('slashRes').value = `+${slashRes}%`;
	document.getElementById('heatRes').value = `+${heatRes}%`;
	document.getElementById('coldRes').value = `+${coldRes}%`;
	document.getElementById('matterRes').value = `+${matterRes}%`;
	document.getElementById('energyRes').value = `+${energyRes}%`;
	document.getElementById('spiritRes').value = `+${spiritRes}%`;
	document.getElementById('bodyRes').value = `+${bodyRes}%`;
}

//Resets character specializations
function resetSpecializations() {
	document.getElementById('specBox').innerHTML = "";
}

//Resets character abilities
function resetAbilities() {
	document.getElementById('abilityBox').innerHTML = "";
}

//Highlights text of primary, secondary and tertiary character attribute priorities
function setAttributePrio(attOne, attTwo, attThree) {
	let attributePrios = [attOne, attTwo, attThree];
	resetAttributePrio();
	for(let i = 0; i < attributePrios.length; i++) {
		if(attributePrios[i] == 'str') {
			document.getElementById('strPrio').style.color = 'yellow';
			document.getElementById('strLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'con') {
			document.getElementById('conPrio').style.color = 'yellow';
			document.getElementById('conLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'dex') {
			document.getElementById('dexPrio').style.color = 'yellow';
			document.getElementById('dexLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'qui') {
			document.getElementById('quiPrio').style.color = 'yellow';
			document.getElementById('quiLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'int') {
			document.getElementById('intPrio').style.color = 'yellow';
			document.getElementById('intLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'emp') {
			document.getElementById('empPrio').style.color = 'yellow';
			document.getElementById('empLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'pie') {
			document.getElementById('piePrio').style.color = 'yellow';
			document.getElementById('pieLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'cha') {
			document.getElementById('chaPrio').style.color = 'yellow';
			document.getElementById('chaLabel').style.color = 'yellow';
		}
	}
}

//Assigns values to character attributes depending on selected race
function setAttributes(selectedRace) {
	
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
			setResists(0, 2, 3, 0, 0, 0, 0, 5, 0);
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
			setResists(0, 2, 3, 0, 0, 0, 0, 5, 0);
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
			setResists(2, 0, 3, 0, 0, 0, 0, 0, 5);
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
			setResists(0, 3, 2, 0, 5, 0, 0, 0, 0);
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
			setResists(3, 2, 0, 5, 0, 0, 0, 5, 0);
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
			setResists(0, 4, 0, 3, 3, 0, 0, 0, 0);
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
			setResists(3, 0, 2, 5, 0, 0, 0, 0, 0);
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
			setResists(0, 2, 3, 0, 0, 0, 0, 5, 0);
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
			setResists(3, 0, 2, 0, 0, 0, 0, 5, 0);
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
			setResists(0, 3, 2, 5, 0, 0, 0, 0, 0);
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
			setResists(0, 5, 0, 0, 0, 0, 5, 0, 0);
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
			setResists(0, 4, 0, 3, 3, 0, 0, 0, 0);
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
			setResists(0, 5, 0, 0, 0, 0, 5, 0, 0);
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
			setResists(2, 3, 0, 0, 0, 5, 5, 0, 0);
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
			setResists(3, 0, 2, 0, 0, 0, 0, 0, 5);
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
			setResists(3, 0, 2, 0, 0, 0, 0, 5, 0);
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
			setResists(0, 5, 0, 0, 0, 0, 5, 0, 0);
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
			setResists(0, 4, 0, 3, 3, 0, 0, 0, 0);
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
			setResists(0, 2, 3, 0, 5, 0, 0, 0, 0);
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
			setResists(2, 0, 3, 0, 0, 5, 0, 0, 0);
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
			setResists(2, 0, 3, 0, 5, 0, 0, 0, 5);
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

//Adds 30 recommended attribute points
function setOptimizedAttributes(selectedClass) {
	resetAttributeBonus();
			
	switch(selectedClass) {
		case ARMSMAN_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case CABALIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case CLERIC_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case FRIAR_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			conAttBonus = 10;
			dexAttBonus = 10;
			pieAttBonus = 10;
			pointMod = 1.8;
			break;
		case HERETIC_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			conAttBonus = 10;
			dexAttBonus = 10;
			pieAttBonus= 10;
			pointMod = 2.0;
			break;
		case INFILTRATOR_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus= 15;
			pointMod = 2.9;
			break;
		case MERCENARY_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case MINSTREL_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 1.5;
			break;
		case NECROMANCER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case PALADIN_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case REAVER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case SCOUT_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 2.0;
			break;
		case SORCERER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case THEURGIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case WIZARD_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case ANIMIST_CLASS:
			setAttributePrio('con', 'dex', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case BAINSHEE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 1.0;
			break;
		case BARD_CLASS:
			setAttributePrio('con', 'dex', 'cha');
			dexAttBonus = 15;
			chaAttBonus = 10;
			pointMod = 1.5;
			break;
		case BLADEMASTER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case CHAMPION_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case DRUID_CLASS:
			setAttributePrio('con', 'dex', 'emp');
			dexAttBonus = 15;
			empAttBonus = 10;
			pointMod = 1.0;
			break;
		case ELDRITCH_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case ENCHANTER_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case HERO_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case MENTALIST_CLASS:
			setAttributePrio('dex', 'qui', 'int');
			dexAttBonus = 15;
			intAttBonus = 10;
			pointMod = 1.0;
			break;
		case NIGHTSHADE_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 2.8;
			break;
		case RANGER_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 2.0;
			break;
		case VALEWALKER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 1.5;
			break;
		case VAMPIIR_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 1.5;
			break;
		case WARDEN_CLASS:
			setAttributePrio('con', 'dex', 'emp');
			dexAttBonus = 15;
			empAttBonus = 10;
			pointMod = 1.8;
			break;
		case BERSERKER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case BONEDANCER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case HEALER_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case HUNTER_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 2.0;
			break;
		case RUNEMASTER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case SAVAGE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 1.5;
			break;
		case SHADOWBLADE_CLASS:
			setAttributePrio('str', 'dex', 'qui');
			strAttBonus = 10;
			dexAttBonus = 15;
			pointMod = 2.8;
			break;
		case SHAMAN_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case SKALD_CLASS:
			setAttributePrio('str', 'con', 'cha');
			strAttBonus = 10;
			conAttBonus = 10;
			chaAttBonus = 10;
			pointMod = 1.5;
			break;
		case SPIRITMASTER_CLASS:
			setAttributePrio('dex', 'qui', 'pie');
			dexAttBonus = 15;
			pieAttBonus = 10;
			pointMod = 1.0;
			break;
		case THANE_CLASS:
			setAttributePrio('str', 'con', 'pie');
			strAttBonus = 10;
			conAttBonus = 10;
			pieAttBonus = 10;
			pointMod = 2.0;
			break;
		case VALKYRIE_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case WARLOCK_CLASS:
			setAttributePrio('con', 'dex', 'pie');
			conAttBonus = 10;
			pieAttBonus = 15;
			pointMod = 1.0;
			break;
		case WARRIOR_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 2.0;
			break;
		case MAULER_CLASS:
			setAttributePrio('str', 'con', 'dex');
			strAttBonus = 10;
			conAttBonus = 10;
			dexAttBonus = 10;
			pointMod = 1.8;
			break;
	}
	
	attributePoints = 0;
	
	document.getElementById('strAttribute').value = str + strAttBonus;
	document.getElementById('strengthAtt').innerHTML = str + strAttBonus; 
	document.getElementById('conAttribute').value = con + conAttBonus;
	document.getElementById('constitutionAtt').innerHTML = con + conAttBonus;
	document.getElementById('dexAttribute').value = dex + dexAttBonus;
	document.getElementById('dexterityAtt').innerHTML = dex + dexAttBonus;
	document.getElementById('quiAttribute').value = qui + quiAttBonus;
	document.getElementById('quicknessAtt').innerHTML = qui + quiAttBonus;
	document.getElementById('intAttribute').value = intel + intAttBonus;
	document.getElementById('intelligenceAtt').innerHTML = intel + intAttBonus;
	document.getElementById('empAttribute').value = emp + empAttBonus;
	document.getElementById('empathyAtt').innerHTML = emp + empAttBonus;
	document.getElementById('pieAttribute').value = pie + pieAttBonus;
	document.getElementById('pietyAtt').innerHTML = pie + pieAttBonus;
	document.getElementById('chaAttribute').value = cha + chaAttBonus;
	document.getElementById('charismaAtt').innerHTML = cha + chaAttBonus;
	document.getElementById('attPoints').innerHTML = attributePoints;
}

//Increases or decreases attribute bonuses depending on which was selected.
function changeAttributeBonus() {
	let attBonus = 0;
	
	if(selectedAttribute.includes('Str')) {
		attBonus = strAttBonus;
	} else if(selectedAttribute.includes('Con')) {
		attBonus = conAttBonus;
	} else if(selectedAttribute.includes('Dex')) {
		attBonus = dexAttBonus;
	} else if(selectedAttribute.includes('Qui')) {
		attBonus = quiAttBonus;
	} else if(selectedAttribute.includes('Int')) {
		attBonus = intAttBonus;
	} else if(selectedAttribute.includes('Emp')) {
		attBonus = empAttBonus;
	} else if(selectedAttribute.includes('Pie')) {
		attBonus = pieAttBonus;
	} else if(selectedAttribute.includes('Cha')) {
		attBonus = chaAttBonus;
	}
	
	if(selectedAttribute.includes('dec')) {
		if(attBonus > 0) {
			if(attBonus >= 15) {
				attributePoints += 3;
				attBonus--;
			} else if(attBonus > 10) {
				attributePoints += 2;
				attBonus--;
			} else if(attBonus <= 10) {
				attributePoints++;
				attBonus--;
			}
		}
	} else if (selectedAttribute.includes('inc')) {
		if(attributePoints > 0) {
			if(attBonus >= 15 && attributePoints >= 3) {
				attributePoints -= 3;
				attBonus++;
			}
			else if(attBonus >= 10 && attributePoints >= 2){
				attributePoints -= 2;
				attBonus++;
			} else if(attBonus < 10) {
				attributePoints--;
				attBonus++;
			}
		}
	}
		
	if(selectedAttribute.includes('Str')) {
		strAttBonus = attBonus;
		document.getElementById('strengthAtt').innerHTML = str + strAttBonus;
	} else if(selectedAttribute.includes('Con')) {
		conAttBonus = attBonus;
		document.getElementById('constitutionAtt').innerHTML = con + conAttBonus;
	} else if(selectedAttribute.includes('Dex')) {
		dexAttBonus = attBonus;
		document.getElementById('dexterityAtt').innerHTML = dex + dexAttBonus;
	} else if(selectedAttribute.includes('Qui')) {
		quiAttBonus = attBonus;
		document.getElementById('quicknessAtt').innerHTML = qui + quiAttBonus;
	} else if(selectedAttribute.includes('Int')) {
		intAttBonus = attBonus;
		document.getElementById('intelligenceAtt').innerHTML = intel + intAttBonus;
	} else if(selectedAttribute.includes('Emp')) {
		empAttBonus = attBonus;
		document.getElementById('empathyAtt').innerHTML = emp + empAttBonus;
	} else if(selectedAttribute.includes('Pie')) {
		pieAttBonus = attBonus;
		document.getElementById('pietyAtt').innerHTML = pie + pieAttBonus;
	} else if(selectedAttribute.includes('Cha')) {
		chaAttBonus = attBonus;
		document.getElementById('charismaAtt').innerHTML = cha + chaAttBonus;
	}
	
	document.getElementById('attPoints').innerHTML = attributePoints;
}

//Assigns values to character resistances depending on what is passed
function setResists(th, cr, sl, he, co, ma, en, sp, bo) {
	
	thrustRes = th;
	crushRes = cr;
	slashRes = sl;
	heatRes = he;
	coldRes = co;
	matterRes = ma;
	energyRes = en;
	spiritRes = sp;
	bodyRes = bo;
	
	document.getElementById('thrustRes').value = `+${thrustRes}%`;
	document.getElementById('crushRes').value = `+${crushRes}%`;
	document.getElementById('slashRes').value = `+${slashRes}%`;
	document.getElementById('heatRes').value = `+${heatRes}%`;
	document.getElementById('coldRes').value = `+${coldRes}%`;
	document.getElementById('matterRes').value = `+${matterRes}%`;
	document.getElementById('energyRes').value = `+${energyRes}%`;
	document.getElementById('spiritRes').value = `+${spiritRes}%`;
	document.getElementById('bodyRes').value = `+${bodyRes}%`;
}

//Function set skills based on selected class
function setSpecializations(specializations) {
	for(let i = 0; i < specializations[0].length; i++) {
		document.getElementById('specBox').innerHTML += `<span id="${specializations[0][i][0]}SpecImage" class="specImage"></span><span id="${specializations[0][i][0]}Spec" class="specName">${specializations[0][i][0]}</span><span id="${specializations[0][i][0]}SpecLevel" class="specLevel">${specializations[0][i][1]}</span><br />`;
	}
}

function setAbilities(abilities) {
	for(let i = 0; i < abilities[1].length; i++) {
		document.getElementById('abilityBox').innerHTML += `<span id="${abilities[1][i]['name']}AbilityImage" class="specImage"></span><span id="${abilities[1][i]['name']}Ability" class="specName">${abilities[1][i]['name']}</span><br />`;
	}
}

//Function adjusts available specialization points on character level change
function changeSpecPoints() {
	let newLevel;
	let halfRun = false;

	//check input
	if(document.getElementById("charLevel").value == "" || document.getElementById("charLevel").value == 0) {
		document.getElementById("charLevel").value = 1;
		newLevel = 1;
	} else if(document.getElementById("charLevel").value > 50) {
		document.getElementById("charLevel").value = 50;
		newLevel = 50;
	} else {
		newLevel = parseFloat(document.getElementById("charLevel").value);
	}
	
	//change step
	if(newLevel >= 40) {
		document.getElementById("charLevel").step = 0.5;
	} else {
		document.getElementById("charLevel").step = 1;
		document.getElementById("charLevel").value = Math.floor(newLevel);
		newLevel = parseFloat(document.getElementById("charLevel").value);
	}
	
	//check for decimals and automatically set to level + .5 to prevent .1 - .9		
	if(newLevel > Math.floor(newLevel) && newLevel < Math.ceil(newLevel)) {
		newLevel = Math.floor(newLevel) + 0.5;
		document.getElementById("charLevel").value = newLevel;
	}
	
	//calculate points
	if(newLevel > level) {
		//add full levels and any half levels in between
		for(let initLevel = level+1; initLevel <= newLevel; initLevel++) {
			if (initLevel <= 5) {
				specPoints += Math.floor(initLevel * 1);
			} else if(initLevel <= 40) {
				specPoints += Math.floor(initLevel * pointMod);
			} else if(initLevel > 40) {
				specPoints += Math.floor(initLevel * pointMod + 0.000001); 
				specPoints += Math.floor(((initLevel - 1) * pointMod + 0.000001) / 2);
			}
		}
		//add half levels
		if(newLevel == (level + 0.5) && (newLevel % 1) != 0) {
			specPoints += Math.floor((Math.floor(newLevel) * pointMod + 0.000001) / 2);
		} else if(newLevel == (level + 0.5) && (newLevel % 1) == 0) {
			specPoints += Math.floor(newLevel * pointMod + 0.000001);
		}
		
	} else if(newLevel < level) {
		//remove half levels
		if(newLevel == (level - 0.5) && (newLevel % 1) != 0) {
			specPoints -= Math.floor(Math.floor(level) * pointMod + 0.000001);
			halfRun = true;
		} else if(newLevel == (level - 0.5) && (newLevel % 1) == 0) {
			specPoints -= Math.floor((Math.floor(level) * pointMod + 0.000001) / 2);
			halfRun = true;
		}
		//remove full levels and any half levels in between
		if(!halfRun){
			for(let initLevel = level; initLevel > newLevel; initLevel--) {
				//remove current half level points
				if(initLevel % 1 != 0) {
					specPoints -= Math.floor((Math.floor(initLevel) * pointMod + 0.000001) / 2);
					initLevel -= 0.5;
				}
				
				if(initLevel > 40) {
					specPoints -= Math.floor(initLevel * pointMod + 0.000001); 
					specPoints -= Math.floor(((initLevel - 1) * pointMod + 0.000001) / 2);
				} else if(initLevel <= 40 && initLevel > 5) {
					specPoints -= Math.floor(initLevel * pointMod);
				} else if (initLevel <= 5) {
					specPoints -= Math.floor(initLevel * 1);
				}
			}
		}
	}
	specPoints = Math.floor(specPoints);
	document.getElementById("specPoints").value = specPoints;
	level = newLevel;
}

//Create function that assigns styles based on class selection

