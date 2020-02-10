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
	getSelectedRealm();
	changeRealmLogo();
	resetAttributes();
	resetSpecializations();
	resetAbilities();
	drawDropDown('races');
	fillDropDown('races');
	drawDropDown('classes');
	fillDropDown('classes');
	document.getElementById('charLevel').readOnly = true;
	updateRaceDesc();
	updateClassDesc();
}

//Create function to adjust available races depending on the selected realm
function onRaceSelect() {
	getSelectedRace();
	resetAttributePrio();
	resetSpecializations();
	resetAbilities();
	drawDropDown('classes');
	fillDropDown('classes');
	setAttributes();
	setResists();
	document.getElementById('charLevel').readOnly = true;
	document.getElementById('selectionDetails').style.display = "block";
	updateRaceDesc();
	updateClassDesc();
}

//Create function to adjust character attributes depending on class
function onClassSelect() {
	
	resetLevel();
	resetAttributeBonus();
	resetSpecializations();
	resetAbilities();
	getSelectedClass();
	setOptimizedAttributes();
	document.getElementById("charLevel").readOnly = false;
	document.getElementById('builder').style.display = "block";
	setSpecializations();
	setAbilities();
	updateClassDesc();
	drawTrainer();
}

//Function changes color for selected realm
function changeRealmLogo() {
	
	if(selectedRealm == 'Albion') {
		//document.getElementById('').style.color = 'red';
		//document.getElementById('selecthib').style.color = 'black';
		//document.getElementById('selectmid').style.color = 'black';
	} else if (selectedRealm == 'Hibernia') {
		//document.getElementById('selectalb').style.color = 'black';
		//document.getElementById('selecthib').style.color = 'green';
		//document.getElementById('selectmid').style.color = 'black';
	} else if (selectedRealm == 'Midgard') {
		//document.getElementById('selectalb').style.color = 'black';
		//document.getElementById('selecthib').style.color = 'black';
		//document.getElementById('selectmid').style.color = 'blue';
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
}

//Assign selected race
function getSelectedRace() {
	selectedRace = RACE_DATA.find(race => race.name == document.getElementById('races').value);
}

//Return selected class
function getSelectedClass() {
	selectedClass = CLASS_DATA.find(classes => classes.name == document.getElementById('classes').value);
	pointMod = selectedClass.pointModifier;
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

	let label, leftButton, rightButton, slider, numOnRight, numWrapper, setSpecs;
	
	for(spec in selectedClass.specializations) {
		numOnRight = 1;
		label = `<span id="${selectedClass.specializations[spec]}Label" class="specName">${selectedClass.specializations[spec]}</span>`;
		leftButton = `<button id="${selectedClass.specializations[spec]}LeftButton" onclick="returnSpecPoints('${selectedClass.specializations[spec]}')">&lt;</button>`;
		rightButton = `<button id="${selectedClass.specializations[spec]}RightButton" onclick="spendSpecPoints('${selectedClass.specializations[spec]}')">&gt;</button>`;
		slider = `<input type="range" min="1" max="50" value="1" id="${selectedClass.specializations[spec]}Slider" onchange="${setSpecs}">`;
		numWrapper = `<span id="${selectedClass.specializations[spec]}Value" class="specValue">${numOnRight}</span><br />`;
		
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

//Adjusts the needed and remaining specialization points when a spec's trained value is increased (increases trained value)
function spendSpecPoints(spec) {
	if(parseInt(document.getElementById(`${spec}Value`).textContent) < 50) {
		document.getElementById(`${spec}Slider`).value += 1;
		document.getElementById(`${spec}Value`).innerHTML = parseInt(document.getElementById(`${spec}Value`).textContent) + 1;
		document.getElementById('totalSpecNeeded').innerHTML = parseInt(document.getElementById('totalSpecNeeded').textContent) + parseInt(document.getElementById(`${spec}Value`).textContent);
		document.getElementById('totalSpecRemaining').innerHTML = parseInt(document.getElementById('totalSpecAvailable').textContent) - parseInt(document.getElementById('totalSpecNeeded').textContent);
		adjustMinLevel();
	}
}

//Adjusts the needed and remaining specialization points when a spec's trained value is increased (reduces trained value)
function returnSpecPoints(spec) {
	if(parseInt(document.getElementById(`${spec}Value`).textContent) > 1) {
		document.getElementById(`${spec}Slider`).value -= 1;
		document.getElementById(`${spec}Value`).innerHTML = parseInt(document.getElementById(`${spec}Value`).textContent) - 1;
		document.getElementById('totalSpecNeeded').innerHTML = parseInt(document.getElementById('totalSpecNeeded').textContent) - (parseInt(document.getElementById(`${spec}Value`).textContent) + 1);
		document.getElementById('totalSpecRemaining').innerHTML = parseInt(document.getElementById('totalSpecAvailable').textContent) - parseInt(document.getElementById('totalSpecNeeded').textContent);
		adjustMinLevel();
	}
}

//Changes the displayed minimum level on the trainer window according to all specializations trained values
function adjustMinLevel() {
	let highestValues = [];
	for(specLine in selectedClass.specializations) {
		highestValues[specLine] = parseInt(document.getElementById(`${selectedClass.specializations[specLine]}Value`).textContent);
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
	if(document.getElementById('classes').value == "") {
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
	if(selectedClass == undefined) {
		resetSpecializations();
	} else {
		for(let i = 0; i < selectedClass.specializations.length; i++) {
			document.getElementById('specBox').innerHTML += `<span id="${selectedClass.specializations[i]}SpecImage" class="specImage"></span><span id="${selectedClass.specializations[i]}Spec" class="specName">${selectedClass.specializations[i]}</span><span id="${selectedClass.specializations[i]}SpecLevel" class="specLevel">1</span><br />`;
		}
	}
}

function setAbilities() {
	if(selectedClass == undefined) {
		resetAbilities();
	} else {	
		for(let ability of selectedClass.abilities) {
			document.getElementById('abilityBox').innerHTML += `<span id="${ability.name}AbilityImage" class="specImage"></span><span id="${ability.name}Ability" class="abilityName">${ability.name}</span><br />`;
		}
		
		for(let weapon of selectedClass.equipment.weapons) {
			document.getElementById('abilityBox').innerHTML += `<span id="${weapon.name}AbilityImage" class="specImage"></span><span id="${weapon.name}Ability" class="abilityName">Weaponry: ${weapon.name}</span><br />`;
		}
		
		document.getElementById('abilityBox').innerHTML += `<span id="${selectedClass.equipment.armor.name}AbilityImage" class="specImage"></span><span id="${selectedClass.equipment.armor.name}Ability" class="abilityName">Armor Ability: ${selectedClass.equipment.armor.name}</span><br />`;
		if(selectedClass.equipment.shield != null) {
			document.getElementById('abilityBox').innerHTML += `<span id="${selectedClass.equipment.shield.name}AbilityImage" class="specImage"></span><span id="${selectedClass.equipment.shield.name}Ability" class="abilityName">Shield Ability: ${selectedClass.equipment.shield.name}</span><br />`;
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
}

//Create function that assigns styles based on class selection

