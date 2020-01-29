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
		"specializations" : ["Polearm", "Crossbow", "Two Handed", "Parry", "Slash", "Crush", "Thrust", "Shield"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[1], WEAPONRY_DATA[2], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5], WEAPONRY_DATA[7]],
						"armor" : ARMOR_ABILITY_DATA[4],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Polearm", "Two Handed", "Slash", "Crush", "Thrust", "Shield"],
		"magic" : null//Crossbow?
	},
	{
		"name" : "Cabalist",
		"description" : "Spellcasters who specialize in the study and manipulation of spirit magic. Cabalists gain the ability to summon a pet to do their bidding, as well as blind and disease their enemies.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Body Magic", "Matter Magic", "Spirit Magic"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Spirit Animation", "Matter Magic", "Body Destruction", "Essence Manipulation", "Matter Manipulation", "Vivification"]
	},
	{
		"name" : "Cleric",
		"description" : "The primary healing class of the Realm, the Cleric can prepare their friends for battle as well as aid them during and after the conflict.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 0
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Rejuvenation", "Enhancements", "Smiting"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[4]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[1]
					  },
		"combat" : null,
		"magic" : ["Rejuvenation", "Enhancements", "Smiting"]
	},
	{
		"name" : "Friar",
		"description" : "A specialist class, the Friar is a hybrid cleric/fighter who gains the ability to fight with staves and retains some healing and buffing abilities.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 10
			},
			{
				"name": "Desterity",
				"value": 10
			},
			{
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 1.8,
		"specializations" : ["Rejuvenation", "Enhancements", "Staff", "Parry"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[4]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Staves"],
		"magic" : ["Rejuvenation", "Enhancements"]
	},
	{
		"name" : "Heretic",
		"description" : "Heretics are a cleric class that has renounced the Church and become an adherent of Arawn, the lord of the underworld. As evil Clerics, they fit into the hybrid category, with both the use of combat styles and high-damage focus spells.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 10
			},
			{
				"name": "Dexterity",
				"value": 10
			},
			{
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 2.0,
		"specializations" : ["Rejuvenation", "Enhancements", "Shield", "Flexible", "Crush"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[4], WEAPONRY_DATA[6]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Shield", "Flex Weapons", "Crush"],
		"magic" : ["Rejuvenation", "Enhancements"]
	},
	{
		"name" : "Infiltrator",
		"description" : "The Infiltrator is a roguish class that specializes in hidden movement, spying and backstabbing opponents.",
		"attributeBonuses" : [
			{
				"name": "Strength",
				"value": 10
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			}
		],
		"pointModifier" : 2.9,
		"specializations" : ["Dual Wield", "Envenom", "Critical Strike", "Stealth", "Slash", "Thrust"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[3], WEAPONRY_DATA[5]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Dual Wield", "Critical Strike", "Slash", "Thrust"],
		"magic" : ["Stealth", "Envenom"]
	},
	{
		"name" : "Mercenary",
		"description" : "The Mercenary is a light fighter that can fight with two weapons at once, as well as utilize more fluid combat styles that focus on positional combat style attacks.",
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
		"specializations" : ["Parry", "Slash", "Crush", "Thrust", "Shield", "Dual Wield"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[8], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[1]
					  },
		"combat" : ["Slash", "Crush", "Thrust", "Shield", "Dual Wield"],
		"magic" : null
	},
	{
		"name" : "Minstrel",
		"description" : "Minstrel are hybrid rogues that have the ability to perform songs that give their group members enhanced abilities, and also can use weapons and armor.",
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
		"pointModifier" : 1.5,
		"specializations" : ["Stealth", "Slash", "Thrust", "Instruments"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[3], WEAPONRY_DATA[5]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Slash", "Thrust"],
		"magic" : ["Songs"]
	},
	{
		"name" : "Necromancer",
		"description" : "The Necromancer is a pet caster who does all of his actions through his pet. Unlike other traditional pet casters such as Enchanters and Cabalists, who wield a mix of magic with pet assistance, the Necromancer is powerless without his pet.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Death Servant", "Deathsight", "Painworking"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : ["Painworking"],
		"magic" : ["Death Servant", "Deathsight", "Painworking", "Deathsight Baseline", "Death Servant Baseline", "Painworking Baseline", "Abilities"]
	},
	{
		"name" : "Paladin",
		"description" : "A hybrid fighter, Paladins can wear plate armor, as well as specialize in two handed weapons. They also learn chants that aid their group members while in combat.",
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
		"specializations" : ["Two Handed", "Parry", "Slash", "Crush", "Thrust", "Shield", "Chants"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[2], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5]],
						"armor" : ARMOR_ABILITY_DATA[4],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Two Handed", "Slash", "Crush", "Thrust", "Shield"],
		"magic" : ["Chants"]
	},
	{
		"name" : "Reaver",
		"description" : "Reavers are hybrid Necromancer/Fighters with chain armor and a variety of Albion weapon skills. They are the fighting class that protects Arawn, lord of the underworld.",
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
		"specializations" : ["Slash", "Crush", "Thrust", "Parry", "Shield", "Soulrending", "Flexible"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5], WEAPONRY_DATA[6]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Slash", "Crush", "Thrust", "Shield", "Flex Weapons"],
		"magic" : ["Soulrending"]
	},
	{
		"name" : "Scout",
		"description" : "The archer class of Albion, Scouts can use the famed English Longbow to damage their enemies from long range, as well as use shields and some melee weapons.",
		"attributeBonuses" : [
			{
				"name": "Strength",
				"value": 10
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			}
		],
		"pointModifier" : 2.0,
		"specializations" : ["Shield", "Stealth", "Slash", "Thrust", "Archery"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[3], WEAPONRY_DATA[5], WEAPONRY_DATA[9]],
						"armor" : ARMOR_ABILITY_DATA[2],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Shield", "Slash", "Thrust"],
		"magic" : ["Archery", "Stealth"]
	},
	{
		"name" : "Sorcerer",
		"description" : "The Sorcerer is a spellcaster that focuses on the control and destruction of Body, Matter and Mind. They receive mesmerizing, direct damage and damage over time spells. They may also force a pet to submit to their will.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Body Magic", "Matter Magic", "Mind Magic"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Mind Twisting", "Matter Magic", "Body Destruction", "Disorientation", "Telekinesis", "Domination"]
	},
	{
		"name" : "Theurgist",
		"description" : "Theurgists are spellcasters who harness the power of Air, Ice and Earth and shape them into spells capable of calling forth elemental creatures to aid them in battle.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Earth Magic", "Cold Magic", "Wind Magic"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Path of Air", "Path of Earth", "Path of Ice", "Abrasion", "Refrigeration", "Vapormancy"]
	},
	{
		"name" : "Wizard",
		"description" : "Elementalist spellcasters who can learn the element of fire, Wizards have very potent offensive spell damage.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Earth Magic", "Cold Magic", "Fire Magic"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Path of Fire", "Path of Earth", "Path of Ice", "Calefaction", "Liquification", "Pyromancy"]
	},
	{
		"name" : "Animist",
		"description" : "Animists are a Hibernian primary spellcasting class that has an affinity with plants. They are able to animate plant life and other natural phenomena (phosphorescence, etc.) and use it to craft spells that damage their opponents.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 0
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Creeping Path", "Verdant Path", "Arboreal Path"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Creeping Path", "Verdant Path", "Arboreal Path", "Undergrowth Mastery", "Verdant Mastery", "Arboreal Mastery"]
	},
	{
		"name" : "Bainshee",
		"description" : "The Bainshee is a cloth wearing class whose magic comes in the form of sound, and may only be played by female avatars. The class has three specialization lines focusing on Point Blanke Area of Effect, Ranged Area of Effect, or Cone Area of Effect spells.",
		"attributeBonuses" : [
			{
				"name": "Strength",
				"value": 10
			},
			{
				"name": "Constitution",
				"value": 0
			},
			{
				"name": "Dexterity",
				"value": 15
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Phantasmal Wail", "Etheral Shriek", "Spectral Guard"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Phantasmal Wail", "Spectral Force", "Ethereal Shriek", "Spectral Guard"]
	},
	{
		"name" : "Bard",
		"description" : "Straight from the pages of Celtic Lore, the Bard is a combination Druid, fighter and songmaster. He is adept at exhorting his friends in battle.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 0
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Charisma",
				"value": 10
			}
		],
		"pointModifier" : 1.5,
		"specializations" : ["Nature", "Regrowth", "Blades", "Blunt", "Music"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[11], WEAPONRY_DATA[10]],
						"armor" : ARMOR_ABILITY_DATA[5],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Blades", "Blunt"],
		"magic" : ["Regrowth", "Nature", "Music"]
	},
	{
		"name" : "Blademaster",
		"description" : "The light fighter of Hibernia. Specializes in combat styles that require him to focus on his position in combat, as well as the ability to use two weapons at once.",
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
		"specializations" : ["Blades", "Blunt", "Piercing", "Parry", "Celtic Dual", "Shield"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[10], WEAPONRY_DATA[11], WEAPONRY_DATA[12], WEAPONRY_DATA[8]],
						"armor" : ARMOR_ABILITY_DATA[5],
						"shield" : SHIELD_ABILITY_DATA[1]
					  },
		"combat" : ["Blades", "Blunt", "Piercing", "Celtic Dual", "Shield"],
		"magic" : null
	},
	{
		"name" : "Champion",
		"description" : "A combination spellcaster and fighter, the Champion can fight with arms as well as cast debuffing spells on his opponents.",
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
		"specializations" : ["Blades", "Blunt", "Piercing", "Parry", "Large Weaponry", "Valor", "Shield"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[10], WEAPONRY_DATA[11], WEAPONRY_DATA[12], WEAPONRY_DATA[8]],
						"armor" : ARMOR_ABILITY_DATA[6],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Blades", "Blunt", "Piercing", "Large Weapons", "Shield"],
		"magic" : ["Valor"]
	},
	{
		"name" : "Druid",
		"description" : "The primary healer of Hibernia, the Druid can cast nature-based spells as well as fight adequately when the need arises. He is also able to summon Nature�s spirits as companions to travel or fight beside him.",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 0
			},
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Empathy",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Nurture", "Regrowth", "Nature Affinity"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[11], WEAPONRY_DATA[10]],
						"armor" : ARMOR_ABILITY_DATA[6],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : null,
		"magic" : ["Regrowth", "Nurture", "Nature Affinity"]
	},
	{
		"name" : "Eldritch",
		"description" : "Specializing in powerful destructive magic, the Eldritch bends the elements of the world and the void to annihilate Hibernia�s enemies.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Mana Magic", "Light Magic", "Void Magic"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Way of the Void", "Way of the Light", "Way of Mana", "Vacuumancy", "Shadow Control", "Void Mastery"]
	},
	{
		"name" : "Enchanter",
		"description" : "Utilizes magical forces to summon and control magical creatures to do his bidding � the Enchanter additionally has spells that assist their realm mates and damage their enemies.",
		"attributeBonuses" : [
			{
				"name": "Dexterity",
				"value": 15
			},
			{
				"name": "Quickness",
				"value": 0
			},
			{
				"name": "Intelligence",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Mana Magic", "Light Magic", "Enchantments"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Enchantment", "Way of the Light", "Way of Mana", "Empowering", "Bedazzling", "Enchanting"]
	},
	{
		"name" : "�	Hero",
		"description" : "The basic fighting class of the Realm. Can use almost all weapons and armor in Hibernia. Not flashy, but effective and an essential component of any well-rounded group.",
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
		"specializations" : ["Blades", "Blunt", "Piercing", "Parry", "Shield", "Celtic Spear", "Large Weaponry"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[8], WEAPONRY_DATA[10], WEAPONRY_DATA[11], WEAPONRY_DATA[12], WEAPONRY_DATA[14], WEAPONRY_DATA[13]],
						"armor" : ARMOR_ABILITY_DATA[6],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Blades", "Blunt", "Piercing", "Shield", "Celtic Spear", "Large Weapons"],
		"magic" : null
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
	