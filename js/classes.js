const CLASS_DATA = [
	{
		"name" : "Armsman",
		"description" : "The footsoldier of Albion, the Armsman is the main fighter of the Realm. He can use almost any weapon and armor, as well as the ability to wield crossbows and polearms.",
		"attributeBonuses" : [{ 
								"first" : ["Strength", 10],
								"second" : ["Constitution", 10],
								"third" : ["Dexterity", 10] 
							 }],
		"pointModifier" : 2.0,
		"specializations" : [SPECIALIZATION_DATA[0], /*crossbows,*/ SPECIALIZATION_DATA[1], SPECIALIZATION_DATA[2]],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : [{
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[1], WEAPONRY_DATA[2], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5], WEAPONRY_DATA[7]],
						"armor" : ARMOR_ABILITY_DATA[4],
						"shield" : SHIELD_ABILITY_DATA[2]
					  }],
		"combat" : [],
		"magic" : []
	},
	{
		"name" : "Cabalist",
		"description" : "",
		"attributeBonuses" : [{
								"first" : [],
								"second" : [],
								"third" :[]
							 }],
		"pointModifier" : 1.0,
		"specializations" : [],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : [],
		"magic" : []
	}
]

const ARMSMAN_CLASS = CLASS_DATA[0];
const CABALIST_CLASS = CLASS_DATA[1];