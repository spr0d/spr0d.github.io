const CLASS_DATA = [
	{
		"name" : "Armsman",
		"description" : "The footsoldier of Albion, the Armsman is the main fighter of the Realm. He can use almost any weapon and armor, as well as the ability to wield crossbows and polearms.",
		"attributeBonuses" : [
			{
				"name": "Strength",
				"value": 10
			},
			{
				"name": "Constitution",
				"value": 10
			},
			{
				"name": "Dexterity",
				"value": 10
			}
		],
		"pointModifier" : 2.0,
		"specializations" : [],
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
	