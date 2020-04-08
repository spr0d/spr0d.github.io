//Global variables
let selectedRealm = "";
let selectedClass = "";
let selectedRace = "";
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
	resetCharacterDetails('realm');
	getSelectedRealm();
}

//Create function to adjust available races depending on the selected realm
function onRaceSelect() {
	resetCharacterDetails('race');
	getSelectedRace();
}

//Create function to adjust character attributes depending on class
function onClassSelect() {
	resetCharacterDetails('class');
	getSelectedClass();
}

//Function changes color for selected realm
function changeRealmLogo() {
	
	if(selectedRealm == 'Albion') {
		document.getElementById('selectalb').style.color = 'red';
		document.getElementById('selecthib').style.color = 'white';
		document.getElementById('selectmid').style.color = 'white';
	} else if (selectedRealm == 'Hibernia') {
		document.getElementById('selectalb').style.color = 'white';
		document.getElementById('selecthib').style.color = 'green';
		document.getElementById('selectmid').style.color = 'white';
	} else if (selectedRealm == 'Midgard') {
		document.getElementById('selectalb').style.color = 'white';
		document.getElementById('selecthib').style.color = 'white';
		document.getElementById('selectmid').style.color = 'blue';
	}
}

//Return selected realm
function getSelectedRealm() {
	if(document.getElementById('albRealm').checked) {
		selectedRealm = 'Albion';
	} else if(document.getElementById('hibRealm').checked) {
		selectedRealm = 'Hibernia';
	} else if(document.getElementById('midRealm').checked) {
		selectedRealm = 'Midgard';
	}
	drawDropDown('races');
	fillDropDown('races');
	drawDropDown('classes');
	fillDropDown('classes');
	document.getElementById('charLevel').readOnly = true;
	updateRaceDesc();
	updateClassDesc();
	changeRealmLogo();
}

//Assign selected race
function getSelectedRace() {
	selectedRace = RACE_DATA.find(race => race.name == document.getElementById('races').value);
	drawDropDown('classes');
	fillDropDown('classes');
	setAttributes();
	setResists();
	document.getElementById('charLevel').readOnly = true;
	document.getElementById('selectionDetails').style.display = "block";
	updateRaceDesc();
	updateClassDesc();
}

//Return selected class
function getSelectedClass() {
	selectedClass = CLASS_DATA.find(classes => classes.name == document.getElementById('classes').value);
	pointMod = selectedClass.pointModifier;
	drawSkills();
	setOptimizedAttributes();
	document.getElementById("charLevel").readOnly = false;
	document.getElementById('builder').style.display = "block";
	setSpecializations();
	setAbilities();
	updateClassDesc();
	drawTrainer();
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

function openTrainer() {
	document.getElementById("trainerModal").style.display = "block";
}

function closeTrainer() {
	document.getElementById("trainerModal").style.display = "none";
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
		
	if(type == 'races') {
	document.getElementById(type).innerHTML += `<option name="Blank" id="Blank"></option>`
		if(selectedRealm == 'Albion') {
			for(let i = 0; i < albRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${albRaces[i].name}" id="${albRaces[i].name}">${albRaces[i].name}</option>`
			}
		} else if(selectedRealm == 'Hibernia') {
			for(let i = 0; i < hibRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${hibRaces[i].name}" id="${hibRaces[i].name}">${hibRaces[i].name}</option>`
			}
		} else if(selectedRealm == 'Midgard') {
			for(let i = 0; i < midRaces.length; i++) {
				document.getElementById(type).innerHTML += `<option name="${midRaces[i].name}" id="${midRaces[i].name}">${midRaces[i].name}</option>`
			}
		}
	}
	
	if(type == 'classes') {
		if(selectedRace == "") {
			document.getElementById('classSelector').innerHTML = 'Select your Race';
		} else {
			if(selectedRace != undefined) {
				document.getElementById(type).innerHTML = `<option name="Blank" id="Blank"></option>`;
				for(let i = 0; i < selectedRace.classes.length; i++) {
					document.getElementById(type).innerHTML += `<option name="${selectedRace.classes[i]}" id="${selectedRace.classes[i]}">${selectedRace.classes[i]}</option>`;
				}
			}
		}
	}
}

//Constructs trainer window with each specialization's name, buttons, slider and trained values
function drawTrainer() {
	document.getElementById("specializationAdjusters").innerHTML = "";
	document.getElementById('totalSpecAvailable').innerHTML = parseInt(document.getElementById('specPoints').value);
	document.getElementById('totalSpecNeeded').innerHTML = 0;
	document.getElementById('totalSpecRemaining').innerHTML = 0;

	let label, leftButton, rightButton, slider, numOnRight, numWrapper;
	
	for(spec in selectedClass.specializations) {
		numOnRight = 1;
		label = `<span id="${selectedClass.specializations[spec].metaData.spec}Label" class="specName">${selectedClass.specializations[spec].metaData.spec}</span>`;
		leftButton = `<button id="${selectedClass.specializations[spec].metaData.spec}LeftButton" onclick="adjustSpecPoints('${selectedClass.specializations[spec].metaData.spec}', 'return')">&lt;</button>`;
		rightButton = `<button id="${selectedClass.specializations[spec].metaData.spec}RightButton" onclick="adjustSpecPoints('${selectedClass.specializations[spec].metaData.spec}', 'spend')">&gt;</button>`;
		slider = `<input type="range" min="1" max="50" value="1" id="${selectedClass.specializations[spec].metaData.spec}Slider" oninput="adjustSpecPoints('${selectedClass.specializations[spec].metaData.spec}', 'slide')">`;
		numWrapper = `<span id="${selectedClass.specializations[spec].metaData.spec}Value" class="specValue">${numOnRight}</span><br />`;
		
		//leftButton.onclick = () => {document.getElementById(`${selectedClass.specializations[spec]}Value`).innerHTML = (numOnRight -= 1);};
		//rightButton.onclick = () => {document.getElementById(`${selectedClass.specializations[spec]}Value`).innerHTML = (numOnRight += 1);};
		//slider.onchange = () => {document.getElementById(`${selectedClass.specializations[spec]}Value`).innerHTML = document.getElementById(`${selectedClass.specializations[spec]}Slider`).value;};
		
		document.getElementById("specializationAdjusters").innerHTML += label;
		document.getElementById("specializationAdjusters").innerHTML += leftButton;
		document.getElementById("specializationAdjusters").innerHTML += slider;
		document.getElementById("specializationAdjusters").innerHTML += rightButton;
		document.getElementById("specializationAdjusters").innerHTML += numWrapper;
	}
}

function resetTrainer() {
	let currentSpec, currentSpecName, currentSpecValue, allSpecs, pointsNeeded, pointsRemaining, pointsAvailable;
	allSpecs = selectedClass.specializations;
	pointsNeeded = document.getElementById('totalSpecNeeded');
	pointsRemaining = document.getElementById('totalSpecRemaining');
	pointsAvailable = document.getElementById('totalSpecAvailable');
	
	for(spec in allSpecs) {
		currentSpec = allSpecs[spec];
		currentSpecName = currentSpec.metaData.spec;
		currentSpecValue = parseInt(document.getElementById(`${currentSpecName}Value`).textContent);
		for(let i = currentSpecValue; i > currentSpec.metaData.trainedValue; i--) { 
			pointsRemaining.innerHTML = parseInt(pointsRemaining.textContent) + i;
		}
		document.getElementById(`${currentSpecName}Value`).innerHTML = currentSpec.metaData.trainedValue;
		document.getElementById(`${currentSpecName}Slider`).value = currentSpec.metaData.trainedValue;
	}
	pointsAvailable.innerHTML = parseInt(pointsRemaining.textContent)
	pointsNeeded.innerHTML = 0;
	adjustMinLevel();
}

//Adjusts the needed and remaining specialization points when a spec's trained value is increased or decreased
function adjustSpecPoints(spec, action) {
	let slider, value, pointsNeeded, pointsRemaining, pointsAvailable, minLevel, trainButton, selectedSpec;
	selectedSpec = selectedClass.specializations.find(specs => specs.metaData.spec == spec);
	slider = document.getElementById(`${spec}Slider`);
	value = document.getElementById(`${spec}Value`);
	pointsNeeded = document.getElementById('totalSpecNeeded');
	pointsRemaining = document.getElementById('totalSpecRemaining');
	pointsAvailable = document.getElementById('totalSpecAvailable');
	minLevel = document.getElementById('minLevelDisp');
	trainButton = document.getElementById('trainConfirm');
	
	if(action == "slide") {
		if(parseInt(value.textContent) < slider.value) {
			action = "spend";
		} else if(parseInt(value.textContent) > slider.value) {
			action = "return";
		}
	}
	
	if(action =="spend") {
		if(parseInt(value.textContent) < 50) {
			value.innerHTML = parseInt(value.textContent) + 1;
			slider.value = parseInt(value.textContent);
			pointsNeeded.innerHTML = parseInt(pointsNeeded.textContent) + parseInt(value.textContent);
			pointsRemaining.innerHTML = parseInt(pointsAvailable.textContent) - parseInt(pointsNeeded.textContent);
		}
	} else if(action == "return") {
		if(parseInt(value.textContent) > 1 && selectedSpec.metaData.trainedValue <= slider.value && selectedSpec.metaData.trainedValue <= parseInt(value.textContent) - 1) {
			value.innerHTML = parseInt(value.textContent) - 1;
			slider.value = parseInt(value.textContent);
			pointsNeeded.innerHTML = parseInt(pointsNeeded.textContent) - (parseInt(value.textContent) + 1);
			pointsRemaining.innerHTML = parseInt(pointsAvailable.textContent) - parseInt(pointsNeeded.textContent);
		} else {
			slider.value = parseInt(value.textContent);
		}
	}
	adjustMinLevel();
	
	if(parseInt(minLevel.textContent) > level || parseInt(pointsNeeded.textContent) > parseInt(pointsNeeded.textContent)) {
		trainButton.disabled = true;
	} else {
		trainButton.disabled = false;
	}
}

function applySpecPoints() {
	let newValue, allSpecs, pointsNeeded, pointsRemaining, pointsAvailable, currentSpecLevel;
	allSpecs = selectedClass.specializations;
	pointsNeeded = document.getElementById('totalSpecNeeded');
	pointsRemaining = document.getElementById('totalSpecRemaining');
	pointsAvailable = document.getElementById('totalSpecAvailable');
	
	if(document.getElementById('trainConfirm').disabled == false) {
		for(let i = 0; i < allSpecs.length; i++) {
			currentSpecLevel = document.getElementById(`${allSpecs[i].metaData.spec}SpecLevel`);
			newValue = parseInt(document.getElementById(`${allSpecs[i].metaData.spec}Value`).textContent);
			allSpecs[i].metaData.trainedValue = newValue;
			currentSpecLevel.textContent = newValue;
		}
		specPoints = parseInt(pointsRemaining.textContent);
		document.getElementById("specPoints").value = specPoints;
		document.getElementById('totalSpecAvailable').innerHTML = parseInt(document.getElementById('specPoints').value);
		pointsAvailable.innerHTML = specPoints;
		pointsNeeded.innerHTML = 0;
		pointsRemaining.innerHTML = parseInt(pointsAvailable.textContent);
		drawSkills();
	}
}

function respecAllPoints() {
	resetTrainer();
	let currentSpec, currentSpecName, currentSpecTrained, allSpecs, pointsRemaining, pointsAvailable;
	allSpecs = selectedClass.specializations;
	pointsRemaining = document.getElementById('totalSpecRemaining');
	pointsAvailable = document.getElementById('totalSpecAvailable');
	
	for(spec in allSpecs) {
		currentSpec = allSpecs[spec];
		currentSpecName = currentSpec.metaData.spec;
		currentSpecTrained = currentSpec.metaData.trainedValue;
		for(let i = currentSpecTrained; i > 1; i--) { 
			pointsAvailable.innerHTML = parseInt(pointsAvailable.textContent) + i;
		}
		currentSpec.metaData.trainedValue = 1;
		document.getElementById(`${currentSpecName}Value`).innerHTML = 1;
		document.getElementById(`${currentSpecName}Slider`).value = 1;
		document.getElementById(`${currentSpecName}SpecLevel`).innerHTML = 1;
	}
	pointsRemaining.innerHTML = parseInt(pointsAvailable.textContent);
	specPoints = parseInt(pointsAvailable.textContent);
	document.getElementById('specPoints').value = specPoints;
	adjustMinLevel();
	drawSkills();
}

//Changes the displayed minimum level on the trainer window according to all specializations trained values
function adjustMinLevel() {
	let highestValues = [];
	for(specLine in selectedClass.specializations) {
		highestValues[specLine] = parseInt(document.getElementById(`${selectedClass.specializations[specLine].metaData.spec}Value`).textContent);
	}
	document.getElementById('minLevelDisp').innerHTML = Math.max(...highestValues);
}

function updateRaceDesc() {
	if(document.getElementById('races').value == "") {
		document.getElementById('raceDesc').innerHTML = "";
	} else {
		document.getElementById('raceDesc').innerHTML = `<span id="raceName">${selectedRace.name}</span><br />`;
		document.getElementById('raceDesc').innerHTML += `<span id="raceDescription">${selectedRace.desc}</span>`;
	}
}

function updateClassDesc() {
	if(document.getElementById('classes') == null || document.getElementById('classes').value == "") {
		document.getElementById('classDesc').innerHTML = "";
	} else {
		document.getElementById('classDesc').innerHTML = `<span id="raceName">${selectedClass.name}</span><br />`;
		document.getElementById('classDesc').innerHTML += `<span id="raceDescription">${selectedClass.description}</span>`;
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


//Resets all character details
function resetCharacterDetails(resets) {
	respecAllPoints();
	resetSpecializations();
	resetLevel();
	resetAbilities();
	resetSkills();
	
	if(resets == "realm") {
		resetAttributes();
	} else if(resets == "race") {
		resetAttributePrio();
	} else if(resets == "class") {
		resetAttributeBonus();
	}
	
}

//Highlights text of primary, secondary and tertiary character attribute priorities
function setAttributePrio(attOne, attTwo, attThree) {
	let attributePrios = [attOne, attTwo, attThree];
	resetAttributePrio();
	for(let i = 0; i < attributePrios.length; i++) {
		if(attributePrios[i] == 'Strength') {
			document.getElementById('strPrio').style.color = 'yellow';
			document.getElementById('strLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Constitution') {
			document.getElementById('conPrio').style.color = 'yellow';
			document.getElementById('conLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Dexterity') {
			document.getElementById('dexPrio').style.color = 'yellow';
			document.getElementById('dexLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Quickness') {
			document.getElementById('quiPrio').style.color = 'yellow';
			document.getElementById('quiLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Intelligence') {
			document.getElementById('intPrio').style.color = 'yellow';
			document.getElementById('intLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Empathy') {
			document.getElementById('empPrio').style.color = 'yellow';
			document.getElementById('empLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Piety') {
			document.getElementById('piePrio').style.color = 'yellow';
			document.getElementById('pieLabel').style.color = 'yellow';
		} else if(attributePrios[i] == 'Charisma') {
			document.getElementById('chaPrio').style.color = 'yellow';
			document.getElementById('chaLabel').style.color = 'yellow';
		}
	}
}

//Assigns values to character attributes depending on selected race
function setAttributes() {
	if(selectedRace == undefined) {
		resetAttributes();
	} else {
		str = selectedRace.attributes[0].value;
		con = selectedRace.attributes[1].value;
		dex = selectedRace.attributes[2].value;
		qui = selectedRace.attributes[3].value;
		intel = selectedRace.attributes[4].value;
		emp = selectedRace.attributes[5].value;
		pie = selectedRace.attributes[6].value;
		cha = selectedRace.attributes[7].value;	
		document.getElementById('strAttribute').value = str;
		document.getElementById('conAttribute').value = con;
		document.getElementById('dexAttribute').value = dex;
		document.getElementById('quiAttribute').value = qui;
		document.getElementById('intAttribute').value = intel;
		document.getElementById('empAttribute').value = emp;
		document.getElementById('pieAttribute').value = pie;
		document.getElementById('chaAttribute').value = cha;
	}
}

//Adds 30 recommended attribute points
function setOptimizedAttributes() {
	resetAttributeBonus();
	if(selectedClass != undefined) {		
		setAttributePrio(selectedClass.attributeBonuses[0].name, selectedClass.attributeBonuses[1].name, selectedClass.attributeBonuses[2].name);
	
		for(let i = 0; i < selectedClass.attributeBonuses.length; i++) {
			if(selectedClass.attributeBonuses[i].name == "Strength") {
				strAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Constitution") {
				conAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Dexterity") {
				dexAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Quickness") {
				quiAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Intelligence") {
				intAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Empathy") {
				empAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Piety") {
				pieAttBonus = selectedClass.attributeBonuses[i].value;
			} else if(selectedClass.attributeBonuses[i].name == "Charisma") {
				chaAttBonus = selectedClass.attributeBonuses[i].value;
			}
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
function setResists() {
	if(selectedRace == undefined) {
		resetResists()
	} else {
		thrustRes = selectedRace.resists[0].value;
		crushRes = selectedRace.resists[1].value;
		slashRes = selectedRace.resists[2].value;
		heatRes = selectedRace.resists[3].value;
		coldRes = selectedRace.resists[4].value;
		matterRes = selectedRace.resists[5].value;
		energyRes = selectedRace.resists[6].value;
		spiritRes = selectedRace.resists[7].value;
		bodyRes = selectedRace.resists[8].value;
		
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
}

//Function set skills based on selected class
function setSpecializations() {
	let specImage, specName, specLevel, specTree;
	if(selectedClass == undefined) {
		resetSpecializations();
	} else {
		
		for(let i = 0; i < selectedClass.specializations.length; i++) {
			specTree = selectedClass.specializations[i].metaData;
			specImage = `<span id="${specTree.spec}SpecImage" class="specImage"></span>`;
			specName = `<span id="${specTree.spec}Spec" class="specName">${specTree.spec}</span>`;
			specLevel = `<span id="${specTree.spec}SpecLevel" class="specLevel">${specTree.trainedValue}</span><br />`;
			
			document.getElementById('specBox').innerHTML += specImage + specName + specLevel;
		}
	}
}

function setAbilities() {
	if(selectedClass == undefined) {
		resetAbilities();
	} else {	
		for(let ability of selectedClass.abilities) {
			document.getElementById('abilityBox').innerHTML += `<span id="${ability.name}AbilityImage" class="specImage"></span><span id="${ability.name}Ability" class="abilityName" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">${ability.name}</span><br />`;
		}
		
		for(let weapon of selectedClass.equipment.weapons) {
			document.getElementById('abilityBox').innerHTML += `<span id="${weapon.name}AbilityImage" class="specImage"></span><label id="${weapon.name}Ability" class="abilityName" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">Weaponry: ${weapon.name}</span><br />`;
		}
		
		document.getElementById('abilityBox').innerHTML += `<span id="${selectedClass.equipment.armor.name}AbilityImage" class="specImage"></span><span id="${selectedClass.equipment.armor.name}Ability" class="abilityName" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">Armor Ability: ${selectedClass.equipment.armor.name}</span><br />`;
		if(selectedClass.equipment.shield != null) {
			document.getElementById('abilityBox').innerHTML += `<span id="${selectedClass.equipment.shield.name}AbilityImage" class="specImage"></span><span id="${selectedClass.equipment.shield.name}Ability" class="abilityName" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">Shield Ability: ${selectedClass.equipment.shield.name}</span><br />`;
		}
	}
}

function drawSkills() {
	let wrapper, wrapperTarget, skillTarget, button, title, name, currentSpec;
	
	for(spec in selectedClass.specializations) {
		currentSpec = selectedClass.specializations[spec];
		if(currentSpec.metaData.hasOwnProperty('type')){
			if(currentSpec.metaData.type.includes("Combat")) {
				if(currentSpec.metaData.hasOwnProperty('altName')) {
					name = currentSpec.metaData.altName;
				} else {
					name = currentSpec.metaData.spec;
				}
				title = `<label id="${name}CombatTitle" class="specTitle">${name}</label>`;
				wrapperTarget = `${name}CombatWrapper`;
				skillTarget = `${name}Styles`;
				wrapper = `<div id="${wrapperTarget}" onclick="showTree(event, 'Styles')"></div><div id="${skillTarget}" class="dropdown-content"></div>`;
				button = `<button class="dropbttn" id="${name}CombatButton"></button>`;
				document.getElementById("combat").innerHTML += wrapper;
				document.getElementById(wrapperTarget).innerHTML = button + title;
				fillSkills(skillTarget, currentSpec, "styles");
			}
			if(currentSpec.metaData.type.includes("Magic")) {
				if(currentSpec.metaData.hasOwnProperty('baseline')) {
					name = currentSpec.metaData.baseline;
					title = `<label id="${name}Title" class="specTitle">${name}</label>`;
					wrapperTarget = `${name}Wrapper`;
					skillTarget = `${name}BaseSpells`;
					wrapper = `<div id="${wrapperTarget}" onclick="showTree(event, 'BaseSpells')"></div><div id="${skillTarget}" class="dropdown-content"></div>`;
					button = `<button class="dropbttn" id="${name}Button"></button>`;
					document.getElementById("magic").innerHTML += wrapper;
					document.getElementById(wrapperTarget).innerHTML = button + title;
					fillSkills(skillTarget, currentSpec, "base"); 
				}
				
				if(currentSpec.metaData.hasOwnProperty('specline')) {
					name = currentSpec.metaData.specline;
					title = `<label id="${name}Title" class="specTitle">${name}</label>`;
					wrapperTarget = `${name}Wrapper`;
					skillTarget = `${name}TrainSpells`;
					wrapper = `<div id="${wrapperTarget}" onclick="showTree(event, 'TrainSpells')"></div><div id="${skillTarget}" class="dropdown-content"></div>`;
					button = `<button class="dropbttn" id="${name}Button"></button>`;
					document.getElementById("magic").innerHTML += wrapper;
					document.getElementById(wrapperTarget).innerHTML = button + title;
					fillSkills(skillTarget, currentSpec, "spells");
				}
			}
		}
	}
}

function fillSkills(targetElement, skill, type) {
	let skillName, skillLevel;
	document.getElementById(targetElement).innerHTML = "";
	for(let i = 0; i < skill[type].length; i++) {
		if(type == "base") {
			if(skill[type][i].level <= level && skill[type][i].class.includes(selectedClass.name)) {
				skillName = `<span id="${skill[type][i].name}" class="abilityName2" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">${skill[type][i].name}</span>`;
				skillLevel = `<span id="${skill[type][i].name}Level" class="abilityLevel">${skill[type][i].level}<span><br />`;
				document.getElementById(targetElement).innerHTML += skillName + skillLevel;
			}
		} else if(type == "spells" || "styles") {
			if(skill[type][i].class.includes(selectedClass.name) && skill[type][i].level <= skill.metaData.trainedValue) {
				skillName = `<span id="${skill[type][i].name}" class="abilityName2" onmouseenter="showTooltip(&quot;on&quot;), tooltip(event)" onmouseleave="showTooltip(&quot;off&quot;)">${skill[type][i].name}</span>`;
				skillLevel = `<span id="${skill[type][i].name}Level" class="abilityLevel">${skill[type][i].level}<span><br />`;
				document.getElementById(targetElement).innerHTML += skillName + skillLevel;
			}
		}
	}
}

function resetSkills() {
	document.getElementById("combat").innerHTML = "";
	document.getElementById("magic").innerHTML = "";
}

function showTree(event, type) {
	let targetted = event.target.getAttribute("id");
	let index, targettedSkill, targettedButton, buttonElement, skillElement, bttnOff, bttnOn;
	bttnOff = "dropbttn";
	bttnOn = "dropbttn-clicked";
	
	if(targetted.includes("Button")) {
		if(targetted.includes("Combat")) {	
			index = targetted.indexOf("CombatButton");
			targettedButton = targetted.substring(0, index) + "CombatButton";
		} else {
			index = targetted.indexOf("Button");
			targettedButton = targetted.substring(0, index) + "Button";
		}
		buttonElement = document.getElementById(targetted);
	} else if(targetted.includes("Title")) {
		if(targetted.includes("Combat")) {	
			index = targetted.indexOf("CombatTitle");
			targettedButton = targetted.substring(0, index) + "CombatButton";
		} else {
			index = targetted.indexOf("Title");
			targettedButton = targetted.substring(0, index) + "Button";
		}
		buttonElement = document.getElementById(targettedButton);
	} else if(targetted.includes("Wrapper")) {
		if(targetted.includes("Combat")) {	
			index = targetted.indexOf("CombatWrapper");
			targettedButton = targetted.substring(0, index) + "CombatButton";
		} else {
			index = targetted.indexOf("Wrapper");
			targettedButton = targetted.substring(0, index) + "Button";
		}
		buttonElement = document.getElementById(targettedButton);
	}
	
	targettedSkill = targetted.substring(0, index) + type;
	skillElement = document.getElementById(targettedSkill);
	
	if(buttonElement.classList.contains(bttnOff)) {
		buttonElement.classList.replace(bttnOff, bttnOn);
		skillElement.style.display = "block";
	} else {
		buttonElement.classList.replace(bttnOn, bttnOff);
		skillElement.style.display = "none";
	}
}

//Gets skill that was moused over and provides object details
function tooltip(event) {
	let allSpecs, allAbilities, currentSpec, currentAbility, nameLabel, levelLabel, targetElement, targetSkill, xPosition, yPosition, modal, content;
	let found = false;
	//combat styles variables
	let opening, followup, endurance, damage, hit, def, effect, style;
	//baseline/spells variables
	let duration, cost, target, range, radius, cast, recast, dmgType, maxTarget;
	//ability variables
	let  desc, abilityTpe;
	targetElement = document.getElementById(`${event.target.getAttribute('id')}`);
	allSpecs = selectedClass.specializations;
	allAbilities = selectedClass.abilities;
	//Find the ability/skill that was moused over
	for(ability in allAbilities) {
		currentAbility = allAbilities[ability];
		if(targetElement.textContent.includes(currentAbility.name)) {
			targetSkill = currentAbility;
			found = true;
			abilityType = null;
			xPosition = document.getElementById('spec').offsetLeft + 115;
			yPosition = document.getElementById('spec').offsetTop + 450;
			break;
		}
	}
	if(!found) {
		allAbilities = selectedClass.equipment.weapons;
		for(weapon in allAbilities) {
			currentAbility = allAbilities[weapon];
			if(targetElement.textContent.includes(currentAbility.name)) {
				targetSkill = currentAbility;
				found = true;
				abilityType = "weapon";
				xPosition = document.getElementById('spec').offsetLeft + 115;
				yPosition = document.getElementById('spec').offsetTop + 450;
			}
		}
	}
	if(!found) {
		allAbilities = selectedClass.equipment.armor;
		if(targetElement.textContent.includes(allAbilities.name)) {
			targetSkill = allAbilities;
			found = true;
			abilityType = "armor";
			xPosition = document.getElementById('spec').offsetLeft + 115;
			yPosition = document.getElementById('spec').offsetTop + 450;
		}
	}
	if(!found && selectedClass.equipment.shield != null) {
		allAbilities = selectedClass.equipment.shield;
		if(targetElement.textContent.includes(allAbilities.name) && !found) {
			targetSkill = allAbilities;
			found = true;
			abilityType = "shield";
			xPosition = document.getElementById('spec').offsetLeft + 115;
			yPosition = document.getElementById('spec').offsetTop + 450;
		}
	}
	if(!found) {
		for(spec in allSpecs) {
			currentSpec = allSpecs[spec];
			if(currentSpec.hasOwnProperty("styles") && !found) {
				for(style in currentSpec.styles) {
					if(targetElement.textContent == currentSpec.styles[style].name) {
						targetSkill = currentSpec.styles[style];
						found = true;
						xPosition = document.getElementById('combatStyles').offsetLeft + 115;
						yPosition = document.getElementById('combatStyles').offsetTop + 450;
						break;
					}
				}
			} 
			if(currentSpec.hasOwnProperty("base") && !found) {
				for(spell in currentSpec.base) {
					if(targetElement.textContent == currentSpec.base[spell].name) {
						targetSkill = currentSpec.base[spell];
						found = true;
						xPosition = document.getElementById('magicSpells').offsetLeft + 115;
						yPosition = document.getElementById('magicSpells').offsetTop + 450;
						break;
					}
				}
			} 
			if(currentSpec.hasOwnProperty("spells") && !found) {
				for(spell in currentSpec.spells) {
					if(targetElement.textContent == currentSpec.spells[spell].name) {
						targetSkill = currentSpec.spells[spell];
						found = true;
						xPosition = document.getElementById('magicSpells').offsetLeft + 115;
						yPosition = document.getElementById('magicSpells').offsetTop + 450;
						break;
					}
				}
			}
		}
	}
	//Set position of modal
	modal = document.getElementById('hoverModal');
	modal.style.top = `${yPosition}px`;
	modal.style.left = `${xPosition}px`;
	//combat styles
	
	if(targetSkill.hasOwnProperty("open")) {
		levelLabel = `<label class="tooltipDetail">Level: </label>${targetSkill.level}<br />`;
		nameLabel = `<label>Name: ${targetSkill.name}</label><br /><br />`;
		opening = `<label class="tooltipDetail">Opening: </label>${targetSkill.open}<br />`;
		if(targetSkill.followup != null) {
			followup = `<label class="tooltipDetail">Follow-up(s): </label>${targetSkill.followup}<br />`;
			content = nameLabel + levelLabel + opening + followup;
		} else {
			followup = null;
			content = nameLabel + levelLabel + opening;
		}
		style = getCssStyle("end", targetSkill.end);
		endurance = `<label class="tooltipDetail">Endurance: </label><label style="color: ${style};">${targetSkill.end}</label><br />`;
		style = getCssStyle("dmg", targetSkill.dmg);
		damage = `<label class="tooltipDetail">Damage: </label><label style="color: ${style};">${targetSkill.dmg}</label><br />`;
		style = getCssStyle("hit", targetSkill.hit);
		hit = `<label class="tooltipDetail">Hit: </label><label style="color: ${style};">${targetSkill.hit}</label><br />`;
		style = getCssStyle("def", targetSkill.def);
		def = `<label class="tooltipDetail">Defense: </label><label style="color: ${style};">${targetSkill.def}</label><br /><br />`;
		if(targetSkill.effect != null) {
			effect = `<label style="color: #e0dd28;">${targetSkill.effect}</label><br /><br /><br /><br />`;
		} else {
			effect = "<br /><br />";
		}
		content += endurance + damage + hit + def + effect;
	//baseline/spells
	} else if(targetSkill.hasOwnProperty("duration")) {
		levelLabel = `<label class="tooltipDetail">Level: </label>${targetSkill.level}<br />`;
		nameLabel = `<label>${targetSkill.name}</label><br /><br />`;
		if(targetSkill.duration != null) {
			duration = `<label class="tooltipDetail">Duration: </label>${targetSkill.duration}<br />`;
			content = nameLabel + levelLabel + duration;
		} else {
			duration = null;
			content = nameLabel + levelLabel;
		}
		if(targetSkill.cost != null) {
			cost = `<label class="tooltipDetail">${targetSkill.cost.type}: </label>${targetSkill.cost.value}<br />`;
			content += cost;
		} 
		target = `<label class="tooltipDetail">Target: </label>${targetSkill.target}<br />`;
		if(targetSkill.range != null) {
			range = `<label class="tooltipDetail">Range: </label>${targetSkill.range}<br />`;
			content += target + range;
		} else {
			content += target;
		}
		if(targetSkill.radius != null) {
			radius = `<label class="tooltipDetail">Radius: </label>${targetSkill.radius}<br />`;
			content += radius;
		}
		cast = `<label class="tooltipDetail">Casting time: </label>${targetSkill.cast}<br />`;
		if(targetSkill.recast != null) {
			recast = `<label class="tooltipDetail">Recast: </label>${targetSkill.recast}<br />`;
			content += cast + recast;
		} else {
			content += cast;
		}
		if(targetSkill.type != null) {
			dmgType = `<label class="tooltipDetail">Magic Type: </label>${targetSkill.type}<br />`;
			content += dmgType;
		}
		if(targetSkill.maxTarget != null) {
			maxTarget = `<label class="tooltipDetail">Maximum Affected Targets: </label>${targetSkill.maxTarget}<br />`;
			content += maxTarget;
		}
		effect = `<br /><label style="color: #e0dd28;">${targetSkill.effect}<br /><br /><br />`;
		content += effect;
	//abilities 
	} else if(targetSkill.hasOwnProperty("desc")) {
		if(abilityType == "weapon"){
			nameLabel = `Weaponry<br /><br />`;
		}else if(abilityType == "armor") {
			nameLabel = `Armor<br /><br />`;
		}else if(abilityType == "shield") {
			nameLabel = `Shields<br /><br />`;
		}else if(abilityType == null) {
			nameLabel = `${targetSkill.name}<br /><br />`;
		}
		desc = `<label style="color: #e0dd28;">${targetSkill.desc}</label>`;
		content = nameLabel + desc;
	}
	document.getElementById('hoverContent').innerHTML = content;
}


function showTooltip(disp) {
	let tooltipElem = document.getElementById('hoverModal');
	
	if(disp == "on") {
		tooltipElem.style.display = "block";
	} else if(disp == "off") {
		tooltipElem.style.display = "none";
	}
}

function getCssStyle(type, amount) {

	if(type == "end" || type == "dmg") {
		switch(amount) {
			case "None":
				return "#ffffff";
			case "Very Low":
				return "#3ede69";
			case "Low":
				return "#2440d1";
			case "Medium":
				return "#e0dd28";
			case "High":
				return "#e39c0e";
			case "Very High":
				return "#de1912";
			case "Devastating":
				return "#8e0ec4";
		}
	} else if(type == "hit" || type == "def") {
		switch (amount) {
			case "No Bonus":
				return "#ffffff";
			case "Low Bonus":
				return "#2440d1";
			case "Medium Bonus":
				return "#74d92b";
			case "High Bonus":
				return "#3ede69";
			case "Very High Bonus":
				return "#3ede69"
			case "Low Penalty":
				return "#e39c0e";
			case "Medium Penalty":
				return "#e39c0e";
			case "High Penalty":
				return "#de1912";
		}
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
	document.getElementById('totalSpecAvailable').innerHTML = parseInt(document.getElementById('specPoints').value);
	level = newLevel;
	drawSkills();
}

//Create function that assigns styles based on class selection

