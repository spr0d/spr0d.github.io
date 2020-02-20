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
		"specializations" : [POLEARM_SPEC_DATA, /*"Crossbow",*/ TWO_HANDED_SPEC_DATA, PARRY_SPEC_DATA, SLASH_SPEC_DATA, CRUSH_SPEC_DATA, THRUST_SPEC_DATA/*, "Shield"*/],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[1], WEAPONRY_DATA[2], WEAPONRY_DATA[3], WEAPONRY_DATA[4], WEAPONRY_DATA[5], WEAPONRY_DATA[7]],
						"armor" : ARMOR_ABILITY_DATA[4],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Polearm", "Two Handed", "Slash", "Crush", "Thrust", "Shield"],
		"magic" : ["Crossbow"]
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
		"specializations" : ["Rejuvenation", "Enhancements", STAFF_SPEC_DATA, PARRY_SPEC_DATA],
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
		"specializations" : ["Rejuvenation", "Enhancements", "Shield", FLEXIBLE_SPEC_DATA, CRUSH_SPEC_DATA],
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
		"specializations" : [DUAL_WIELD_SPEC_DATA, "Envenom", "Critical Strike", "Stealth", SLASH_SPEC_DATA, THRUST_SPEC_DATA],
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
		"specializations" : [PARRY_SPEC_DATA, SLASH_SPEC_DATA, CRUSH_SPEC_DATA, THRUST_SPEC_DATA, "Shield", DUAL_WIELD_SPEC_DATA],
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
		"specializations" : ["Stealth", SLASH_SPEC_DATA, THRUST_SPEC_DATA, "Instruments"],
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
		"specializations" : [TWO_HANDED_SPEC_DATA, PARRY_SPEC_DATA, SLASH_SPEC_DATA, CRUSH_SPEC_DATA, THRUST_SPEC_DATA, "Shield", "Chants"],
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
		"specializations" : [SLASH_SPEC_DATA, CRUSH_SPEC_DATA, THRUST_SPEC_DATA, PARRY_SPEC_DATA, "Shield", "Soulrending", FLEXIBLE_SPEC_DATA],
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
		"specializations" : ["Shield", "Stealth", SLASH_SPEC_DATA, THRUST_SPEC_DATA, "Archery"],
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
		"description" : "The primary healer of Hibernia, the Druid can cast nature-based spells as well as fight adequately when the need arises. He is also able to summon Nature’s spirits as companions to travel or fight beside him.",
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
		"description" : "Specializing in powerful destructive magic, the Eldritch bends the elements of the world and the void to annihilate Hibernia’s enemies.",
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
		"description" : "Utilizes magical forces to summon and control magical creatures to do his bidding – the Enchanter additionally has spells that assist their realm mates and damage their enemies.",
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
		"name" : "Hero",
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
	},
	{
		"name" : "Mentalist",
		"description" : "A combination spellcasting class that relies on mind control and power. Mentalist have the ability both to damage their enemies and heal their friends.",
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
		"specializations" : ["Mana Magic", "Light Magic", "Mentalism"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Mentalism", "Way of Light", "Way of Mana", "Holism", "Illusions", "Mind Mastery"]
	},
	{
		"name" : "Nightshade",
		"description" : "A sneaky assassin that has the ability to move about unseen, attack using deadly backstab combat styles, as well as limited magical ability.",
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
		"pointModifier" : 2.8,
		"specializations" : ["Stealth", "Piercing", "Blades", "Envenom", "Critical Strike", "Celtic Dual"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[3]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[10], WEAPONRY_DATA[12]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Piercing", "Blades", "Critical Strike", "Celtic Dual"],
		"magic" : ["Stealth", "Envenom"]
	},
	{
		"name" : "Ranger",
		"description" : "The Archer of Hibernia, the ranger also gains some magical spells, as well as the ability to wield weapons in both hands.",
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
		"specializations" : ["Stealth", "Piercing", "Blades", "Celtic Dual", "Archery"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[10], WEAPONRY_DATA[12], WEAPONRY_DATA[9]],
						"armor" : ARMOR_ABILITY_DATA[5],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Piercing", "Blades", "Celtic Dual"],
		"magic" : ["Archery","Stealth"]
	},
	{
		"name" : "Valewalker",
		"description" : "Valewalkers are cloth-wearing Hibernian mages who are given the ability to wield a large Scythe as a weapon. They are the strong arm of the Sylvan community – they are the primary fighters of this natural magic-using people.",
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
		"specializations" : ["Scythe", "Parry", "Arboreal Path"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[15]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : ["Scythe"],
		"magic" : ["Arboreal Path", "Valewalking"]
	},
	{
		"name" : "Vampiir",
		"description" : "The Vampiir class is a fighter who wields a one-handed piercing weapon in its right hand. While in melee combat, it is able to cast Vampiir magic with the left hand.",
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
		"specializations" : ["Shadow Mastery", "Vampiiric EMbrace", "Dementia", "Piercing"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4] /*, Leeching Bolt spell*/],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[12]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : null
					  },
		"combat" : ["Piercing"],
		"magic" : ["Shadow Mastery", "Vampiiric Embrace", "Dementia"]
	},
	{
		"name" : "Warden",
		"description" : "The Hibernian protectors of nature, Wardens are hybrid healers/fighters. They have the ability to specialize in some weapons as well as cast healing, defensive, and enhancing spells on their friends.",
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
		"pointModifier" : 1.8,
		"specializations" : ["Nurture", "Regrowth", "Parry", "Blades", "Blunt", "Shield"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[8], WEAPONRY_DATA[11], WEAPONRY_DATA[12]],
						"armor" : ARMOR_ABILITY_DATA[6],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Blades", "Blunt", "Shield"],
		"magic" : ["Regrowth", "Nurture"]
	},
	{
		"name" : "Berserker",
		"description" : "Patrons of Modi, the Norse god of battle-rage, Berserkers are light fighters who eschew heavy armor and rely on wielding two weapons at once, as well as positional combat styles.",
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
		"specializations" : ["Sword", "Axe", "Parry", "Hammer", "Left Axe"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2], ABILITY_DATA[5]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[17], WEAPONRY_DATA[18], WEAPONRY_DATA[20]],
						"armor" : ARMOR_ABILITY_DATA[2],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Sword", "Axe", "Hammer", "Left Axe"],
		"magic" : null
	},
	{
		"name" : "Bonedancer",
		"description" : "The Bonedancer is a Midgard pet caster who follows the Valkyn ancient pre-Norse gold Bogdar. The heart of this new class is that they are a pet caster who can summon more than one pet at a time, at higher levels. However, they control only one pet directly, the commander – all the other minions are controlled by the commander.",
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
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Darkness", "Suppression", "Bone Army"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Bone Army", "Darkness", "Suppression", "Bone Darkness", "Bone Protection", "Bone Legion"]
	},
	{
		"name" : "Healer",
		"description" : "Followers of Eir, the Norse goddess of healing. Healers aid their comrades in battle with a variety of healing and buffing magic as well as powerful crowd-control spells.",
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
		"specializations" : ["Mending", "Augmentation", "Pacification"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[18]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : null,
		"magic" : ["Mending", "Augmentation", "Pacification"]
	},
	{
		"name" : "Hunter",
		"description" : "The archer of Midgard, Hunters worship Skadi, the Norse goddess of the Hunt. They have ranged combat skills, as well as the ability to hide, and even charm animals to do their bidding.",
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
		"specializations" : ["Sword", "Stealth", "Spear", "Beastcraft", "Archery"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[2], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[22]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Sword", "Spear"],
		"magic" : ["Beastcraft", "Archery", "Stealth"]
	},
	{
		"name" : "Runemaster",
		"description" : "Worshippers of Odin, the arch-god of the Norse pantheon, Runemasters use the mystical knowledge of Runes to craft deadly magic spells that provide offensive firepower.",
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
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Darkness", "Suppression", "Runecarving"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Runecarving", "Darkness", "Suppression", "Runes of Darkness", "Runes of Suppression", "Runes of Destruction"]
	},
	{
		"name" : "Savage",
		"description" : "The Savage is a studded-armor wearing fighter who disdains normal weapons in favor of hand-to-hand combat. Savages aren’t interested in mastering the art of complicated weapons – instead they affix simple sharp or blunt weapons to their hands and swing away.",
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
		"specializations" : ["Sword", "Axe", "Parry", "Hammer", "Savagery", "Hand to Hand"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[2], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[18], WEAPONRY_DATA[17], WEAPONRY_DATA[21]],
						"armor" : ARMOR_ABILITY_DATA[2],
						"shield" : null
					  },
		"combat" : ["Sword", "Axe", "Hammer", "Hand to Hand"],
		"magic" : ["Savagery"]
	},
	{
		"name" : "Shadowblade",
		"description" : "A sneaky class specializing in devastating hidden attacks, as well as the ability to wield two weapons at once, Shadowblades are patrons of Loki, the Norse trickster god.",
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
		"pointModifier" : 2.8,
		"specializations" : ["Sword", "Stealth", "Left Axe", "Axe", "Critical Strike", "Envenom"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[3], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[19], WEAPONRY_DATA[17], WEAPONRY_DATA[20]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : ["Sword", "Left Axe", "Axe", "Critical Strike"],
		"magic" : ["Envenom", "Stealth"]
	},
	{
		"name" : "Shaman",
		"description" : "Patrons of Ymir, the ancient god whose body comprises the world of Midgard, Shaman are Trollish and Kobold tribal spellcasters who specialize in a variety of healing and combat magic.",
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
		"specializations" : ["Mending", "Augmentation", "Cave Magic"],
		"abilities" : [ABILITY_DATA[0]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[18]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[0]
					  },
		"combat" : null,
		"magic" : ["Mending", "Augmentation", "Cave Magic"]
	},
	{
		"name" : "Skald",
		"description" : "Followers of Bragi, the Norse god of poetry and song, Skalds are a fighting class that utilize their musical abilities to enhance the battle prowess of their friends, and to sooth their allies after the battle is done.",
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
				"name": "Charisma",
				"value": 10
			}
		],
		"pointModifier" : 1.5,
		"specializations" : ["Sword", "Axe", "Parry", "Hammer", "Battlesongs"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[17], WEAPONRY_DATA[18]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Sword", "Axe", "Hammer"],
		"magic" : ["Battlesongs"]
	},
	{
		"name" : "Spiritmaster",
		"description" : "A spellcasting class that receives aid from Hel, queen of the Norse underworld. Spiritmasters are given the ability to summon and control undead Norse spirits to aid them in battle.",
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
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Darkness", "Suppression", "Summoning"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Summoning", "Darkness", "Suppression", "Spirit Dimming", "Spirit Suppression", "Spirit Manipulation"]
	},
	{
		"name" : "Thane",
		"description" : "Worshippers of Thor, the Norse god of thunder, lightning, and weather, Thanes are a fighting class that is also given some ability to cast offensive spells.",
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
				"name": "Piety",
				"value": 10
			}
		],
		"pointModifier" : 2.0,
		"specializations" : ["Sword", "Axe", "Parry", "Hammer", "Shield", "Stormcalling"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[6]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[17], WEAPONRY_DATA[18]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Sword", "Axe", "Hammer", "Shield"],
		"magic" : ["Stormcalling"]
	},
	{
		"name" : "Valkyrie",
		"description" : "Valkyries are trained to fight using both melee and magic to damage their enemies. They can use swords, shields and spears, as they have unique combat styles available in each line. Their magic line, Odin’s Will, primarily uses cone area of effect spells.",
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
		"specializations" : ["Sword", "Parry", "Shield", "Odin's Will", "Spear", "Mending"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[22]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Sword", "Shield", "Spear"],
		"magic" : ["Mending", "Odin's Will"]
	},
	{
		"name" : "Warlock",
		"description" : "Originating from a cult that lives underground in caves beneath the Realm of Midgard, Warlocks are cloth-wearing worshippers of Hel who have mastered the art of spell weaving. They have three types of spells: Primary spells (Cursing Spec), Secondary spells (Hexing Spec), and Utility spells (witchcraft).",
		"attributeBonuses" : [
			{
				"name": "Constitution",
				"value": 10
			},
			{
				"name": "Dexterity",
				"value": 0
			},
			{
				"name": "Piety",
				"value": 15
			}
		],
		"pointModifier" : 1.0,
		"specializations" : ["Witchcraft", "Cursing", "Hexing"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[1]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0]],
						"armor" : ARMOR_ABILITY_DATA[0],
						"shield" : null
					  },
		"combat" : null,
		"magic" : ["Base Cursing", "Witchcraft", "Cursing", "Hexing"]
	},
	{
		"name" : "Warrior",
		"description" : "The stock fighting class of Midgard, Warriors worship Tyr, the Norse god of battle. Warriors have no magical abilities, but they can use almost all weapons and armor.",
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
		"specializations" : ["Sword", "Axe", "Parry", "Hammer", "Shield", "Thrown"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[16], WEAPONRY_DATA[17], WEAPONRY_DATA[18], WEAPONRY_DATA[19]],
						"armor" : ARMOR_ABILITY_DATA[3],
						"shield" : SHIELD_ABILITY_DATA[2]
					  },
		"combat" : ["Sword", "Axe", "Hammer", "Shield"],
		"magic" : ["Thrown"]
	},
	{
		"name" : "Mauler",
		"description" : "Maulers are a hybrid class comprised of brawny and brutish melee elements along with unique powers and spells. This Brawling class channels earthen elemental powers, such as gravity, magnetism and auras to augment their melee combat.",
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
		"pointModifier" : 1.8,
		"specializations" : ["Power Strikes", "Magnetism", "Aura Manipulation", "Fist Wraps", "Mauler Staff"],
		"abilities" : [ABILITY_DATA[0], ABILITY_DATA[4], ABILITY_DATA[2]],
		"equipment" : {
						"weapons" : [WEAPONRY_DATA[0], WEAPONRY_DATA[23], WEAPONRY_DATA[24]],
						"armor" : ARMOR_ABILITY_DATA[1],
						"shield" : null
					  },
		"combat" : ["Fist Wraps", "Mauler Staffs"],
		"magic" : ["Power Strikes", "Aura Manipulation", "Abilities"]
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
	