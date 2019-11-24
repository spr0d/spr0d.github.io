//Global variables
var realm = "";
var charClass = "";
var race = "";
var level = 1;
var specPoints = 0;
var pointMod = 1;
//character attributes
var str = 0;
var con = 0;
var dex = 0;
var qui = 0;
var int = 0;
var emp = 0;
var pie = 0;
var cha = 0;
//character resists
var thrust = 0;
var crush = 0;
var slash = 0;
var heat = 0;
var cold = 0;
var matter = 0;
var energy = 0;
var spirit = 0;
var body = 0;
//styles
var allStyles = [];
var classStyles = [];
var charStyles = []; 
//spells
var allSpells = [];
var baseSpells = [];
var trainSpells = [];
var charBaseSpells = [];
var charTrainSpells = [];

//Import JSON files and assign to allStyles and allSpells



//Create function to adjust available classes depending on the selected realm

//Create function to adjust available races depending on the selected class, will also set pointMod

//Create function to adjust character attributes depending on class

//Function adjusts available specialization points on character level increase

function changeSpecPoints() {
	if(document.getElementById("charLevel").value > level) {	
		specPoints += (document.getElementById("charLevel").value * pointMod);
	} 
	else if(document.getElementById("charLevel").value < level) {
		specPoints -= (level * pointMod);
	}
	document.getElementById("specPoints").value = specPoints;
	level = document.getElementById("charLevel").value;
}
