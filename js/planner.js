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
	
	//ALL CLASSES
	//Define Albion class variables
	let armsman = document.getElementById('armsman');
	let cabalist = document.getElementById('cabalist');
	let cleric = document.getElementById('cleric');
	let friar = document.getElementById('friar');
	let heretic = document.getElementById('heretic');
	let infiltrator = document.getElementById('infiltrator');
	let maulera = document.getElementById('maulera');
	let mercenary = document.getElementById('mercenary');
	let minstrel = document.getElementById('minstrel');
	let necromancer = document.getElementById('necromancer');
	let paladin = document.getElementById('paladin');
	let reaver = document.getElementById('reaver');
	let scout = document.getElementById('scout');
	let sorcerer = document.getElementById('sorcerer');
	let theurgist = document.getElementById('theurgist');
	let wizard = document.getElementById('wizard');
	//Define Hibernia class variables
	let animist = document.getElementById('animist');
	let bard = document.getElementById('bard');
	let bainshee = document.getElementById('bainshee');
	let blademaster = document.getElementById('blademaster');
	let champion = document.getElementById('champion');
	let druid = document.getElementById('druid');
	let eldritch = document.getElementById('eldritch');
	let enchanter = document.getElementById('enchanter');
	let hero = document.getElementById('hero');
	let maulerh = document.getElementById('maulerh');
	let mentalist = document.getElementById('mentalist');
	let nightshade = document.getElementById('nightshade');
	let ranger = document.getElementById('ranger');
	let valewalker = document.getElementById('valewalker');
	let vampiir = document.getElementById('vampiir');
	let warden = document.getElementById('warden');
	//Define Midgaurd class variables
	let berserker = document.getElementById('berserker');
	let bonedancer = document.getElementById('bonedancer');
	let healer = document.getElementById('healer');
	let hunter = document.getElementById('hunter');
	let maulerm = document.getElementById('maulerm');
	let runemaster = document.getElementById('runemaster');
	let savage = document.getElementById('savage');
	let shadowblade = document.getElementById('shadowblade');
	let shaman = document.getElementById('shaman');
	let skald = document.getElementById('skald');
	let spiritmaster = document.getElementById('spiritmaster');
	let thane = document.getElementById('thane');
	let valkyrie = document.getElementById('valkyrie');
	let warlock = document.getElementById('warlock');
	let warrior = document.getElementById('warrior');
	
	//Check selected realms	
	if (document.getElementById('albRealm').checked) {
		console.log("Albion selected");
		
		//Change Albion text color
		document.getElementById('selectalb').style.color = 'red';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'black';
		
		//Select first Albion class
		document.getElementById('classes').value = 'armsman';
		
		//Show Albion classes
		armsman.style.display = 'block';
		cabalist.style.display = 'block';
		cleric.style.display = 'block';
		friar.style.display = 'block';
		heretic.style.display = 'block';
		infiltrator.style.display = 'block';
		maulera.style.display = 'block';
		mercenary.style.display = 'block';
		minstrel.style.display = 'block';
		necromancer.style.display = 'block';
		paladin.style.display = 'block';
		reaver.style.display = 'block';
		scout.style.display = 'block';
		sorcerer.style.display = 'block';
		theurgist.style.display = 'block';
		wizard.style.display = 'block';
		
		//Hide Hiberian classes
		animist.style.display = 'none';
		bainshee.style.display = 'none';
		bard.style.display = 'none';
		blademaster.style.display = 'none';
		champion.style.display = 'none';
		druid.style.display = 'none';
		eldritch.style.display = 'none';
		enchanter.style.display = 'none';
		hero.style.display = 'none';
		maulerh.style.display = 'none';
		mentalist.style.display = 'none';
		nightshade.style.display = 'none';
		ranger.style.display = 'none';
		valewalker.style.display = 'none';
		vampiir.style.display = 'none';
		warden.style.display = 'none';
		
		//Hide Midgaurd classes
		berserker.style.display = 'none';
		bonedancer.style.display = 'none';
		healer.style.display = 'none';
		hunter.style.display = 'none';
		maulerm.style.display = 'none';
		runemaster.style.display = 'none';
		savage.style.display = 'none';
		shadowblade.style.display = 'none';
		shaman.style.display = 'none';
		skald.style.display = 'none';
		spiritmaster.style.display = 'none';
		thane.style.display = 'none';
		valkyrie.style.display = 'none';
		warlock.style.display = 'none';
		warrior.style.display = 'none';
		
		
	} else if (document.getElementById('hibRealm').checked) {
		console.log("Hibernia selected");
		
		//Select first Hibernia class
		document.getElementById('classes').value = 'animist';
		
		//Change Hibernia text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'green';
		document.getElementById('selectmid').style.color = 'black';
		
		//Hide Albion classes
		armsman.style.display = 'none';
		cabalist.style.display = 'none';
		cleric.style.display = 'none';
		friar.style.display = 'none';
		heretic.style.display = 'none';
		infiltrator.style.display = 'none';
		maulera.style.display = 'none';
		mercenary.style.display = 'none';
		minstrel.style.display = 'none';
		necromancer.style.display = 'none';
		paladin.style.display = 'none';
		reaver.style.display = 'none';
		scout.style.display = 'none';
		sorcerer.style.display = 'none';
		theurgist.style.display = 'none';
		wizard.style.display = 'none';
		
		//Show Hiberia classes
		animist.style.display = 'block';
		bainshee.style.display = 'block';
		bard.style.display = 'block';
		blademaster.style.display = 'block';
		champion.style.display = 'block';
		druid.style.display = 'block';
		eldritch.style.display = 'block';
		enchanter.style.display = 'block';
		hero.style.display = 'block';
		maulerh.style.display = 'block';
		mentalist.style.display = 'block';
		nightshade.style.display = 'block';
		ranger.style.display = 'block';
		valewalker.style.display = 'block';
		vampiir.style.display = 'block';
		warden.style.display = 'block';
		
		//Hide Midgaurd classes
		berserker.style.display = 'none';
		bonedancer.style.display = 'none';
		healer.style.display = 'none';
		hunter.style.display = 'none';
		maulerm.style.display = 'none';
		runemaster.style.display = 'none';
		savage.style.display = 'none';
		shadowblade.style.display = 'none';
		shaman.style.display = 'none';
		skald.style.display = 'none';
		spiritmaster.style.display = 'none';
		thane.style.display = 'none';
		valkyrie.style.display = 'none';
		warlock.style.display = 'none';
		warrior.style.display = 'none';
		
		
	} else if (document.getElementById('midRealm').checked) {
		console.log("Midgaurd selected");
		
		//Select first Midgaurd class
		document.getElementById('classes').value = 'berserker';
		
		//Change Midguard text color
		document.getElementById('selectalb').style.color = 'black';
		document.getElementById('selecthib').style.color = 'black';
		document.getElementById('selectmid').style.color = 'blue';
		
		//Hide Albion classes
		armsman.style.display = 'none';
		cabalist.style.display = 'none';
		document.getElementById('cleric').style.display = 'none';
		document.getElementById('friar').style.display = 'none';
		document.getElementById('heretic').style.display = 'none';
		document.getElementById('infiltrator').style.display = 'none';
		document.getElementById('maulera').style.display = 'none';
		document.getElementById('mercenary').style.display = 'none';
		document.getElementById('minstrel').style.display = 'none';
		document.getElementById('necromancer').style.display = 'none';
		document.getElementById('paladin').style.display = 'none';
		document.getElementById('reaver').style.display = 'none';
		document.getElementById('scout').style.display = 'none';
		document.getElementById('sorcerer').style.display = 'none';
		document.getElementById('theurgist').style.display = 'none';
		document.getElementById('wizard').style.display = 'none';
		
		//Hide Hiberia classes
		document.getElementById('animist').style.display = 'none';
		document.getElementById('bainshee').style.display = 'none';
		document.getElementById('bard').style.display = 'none';
		document.getElementById('blademaster').style.display = 'none';
		document.getElementById('champion').style.display = 'none';
		document.getElementById('druid').style.display = 'none';
		document.getElementById('eldritch').style.display = 'none';
		document.getElementById('enchanter').style.display = 'none';
		document.getElementById('hero').style.display = 'none';
		document.getElementById('maulerh').style.display = 'none';
		document.getElementById('mentalist').style.display = 'none';
		document.getElementById('nightshade').style.display = 'none';
		document.getElementById('ranger').style.display = 'none';
		document.getElementById('valewalker').style.display = 'none';
		document.getElementById('vampiir').style.display = 'none';
		document.getElementById('warden').style.display = 'none';
		
		//Show Midgaurd classes
		document.getElementById('berserker').style.display = 'block';
		document.getElementById('bonedancer').style.display = 'block';
		document.getElementById('healer').style.display = 'block';
		document.getElementById('hunter').style.display = 'block';
		document.getElementById('maulerm').style.display = 'block';
		document.getElementById('runemaster').style.display = 'block';
		document.getElementById('savage').style.display = 'block';
		document.getElementById('shadowblade').style.display = 'block';
		document.getElementById('shaman').style.display = 'block';
		document.getElementById('skald').style.display = 'block';
		document.getElementById('spiritmaster').style.display = 'block';
		document.getElementById('thane').style.display = 'block';
		document.getElementById('valkyrie').style.display = 'block';
		document.getElementById('warlock').style.display = 'block';
		document.getElementById('warrior').style.display = 'block';
		
	}
}

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

//Create function that assigns styles based on class selection

