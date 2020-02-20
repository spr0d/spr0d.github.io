const CRUSH_SPEC_DATA = {
	"metaData": {
		"spec": "Crush",
		"type": "Combat",
		"weapon": "Crush",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Daze",
			"level": 1,
			"open": "Any",
			"followup": ["Crusher"],
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Crusher",
			"level": 2,
			"open": "Daze",
			"followup": null,
			"end": "Low",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "8 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Back Crush",
			"level": 4,
			"open": "Behind target",
			"followup": ["Bruiser"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Maul",
			"level": 6,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Bludgeon",
			"level": 8,
			"open": "Any",
			"followup": ["Contusions"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Bruiser",
			"level": 10,
			"open": "Back Crush",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 3 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Concussion",
			"level": 12,
			"open": "You Parry",
			"followup": ["Hellfire Tendrils", "Bone Crusher"],
			"end": "Medium",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 18% for 20 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Contusions",
			"level": 15,
			"open": "Bludgeon",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 4 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Blackjack",
			"level": 18,
			"open": "In front of target",
			"followup": null,
			"end": "High",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "13 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Protector",
			"level": 25,
			"open": "Any",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Divine Hammer",
			"level": 25,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 15 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Skull Breaker",
			"level": 29,
			"open": "You Block",
			"followup": ["Body Masher"],
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "Low Penalty",
			"effect": null
		},
		{
			"class": ["Heretic"],
			"name": "Hellfire Tendrils",
			"level": 30,
			"open": "Concussion",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "Medium Penalty",
			"def": "Medium Bonus",
			"effect": "Your highest level Fiery Grasp is applied to all enemy targets within 200 units of your target.\n\nIf you have no Rejuvenation specialization, this style has no spell effect."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": " Side Crush",
			"level": 34,
			"open": "To side of target",
			"followup": ["Devastate"],
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 19 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Bone Crusher",
			"level": 39,
			"open": "Concussion",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "20 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Heretic", "Mercenary", "Paladin", "Reaver"],
			"name": "Body Masher",
			"level": 44,
			"open": "Skull Breaker",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 8 seconds."
		},
		{
			"class": ["Armsman", "Mercenary", "Paladin", "Reaver"],
			"name": "Devastate",
			"level": 50,
			"open": "Side Crush",
			"followup": null,
			"end": "High",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "Medium Penalty",
			"effect": "Target's attack speed reduced by 30% for 20 seconds."
		},
		{
			"class": ["Heretic"],
			"name": "Shadowfire",
			"level": 50,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "No Bonus",
			"def": "Medium Bonus",
			"effect": "Does 113 heat damage to the target."
		}
	]
};

const DUAL_WIELD_SPEC_DATA = {
	"metaData": {
		"spec": "Dual Wield",
		"type": "Combat",
		"weapon": "Dual Wield",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Dual Strike",
			"level": 1,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Twin Spikes",
			"level": 2,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Twin Return",
			"level": 4,
			"open": "You Evade",
			"followup": ["Orbit"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "8 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Shadow's Edge",
			"level": 6,
			"open": "In front of target",
			"followup": ["Eclipse"],
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Inflame",
			"level": 8,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "No Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Orbit",
			"level": 10,
			"open": "Twin Return",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 4 seconds."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Eclipse",
			"level": 12,
			"open": "Shadow's Edge",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "13 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Infiltrator"],
			"name": "Misty Gloom",
			"level": 15,
			"open": "Any",
			"followup": null,
			"end": "High",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Mercenary"],
			"name": "Flank",
			"level": 15,
			"open": "To side of target",
			"followup": ["Misty Gloom"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "Target moves 40% slower for 12 seconds."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Obscure",
			"level": 18,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Infiltrator"],
			"name": "Penumbra",
			"level": 21,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Mercenary"],
			"name": "Penumbra",
			"level": 21,
			"open": "Behind target",
			"followup": ["Dual Shadows"],
			"end": "Medium",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Reflection",
			"level": 25,
			"open": "You Evade",
			"followup": ["Hypnotic Darkness"],
			"end": "Low",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "Low Bonus",
			"effect": "Reduces the target's (AF) by 50 for 15 seconds."
		},
		{
			"class": ["Infiltrator"],
			"name": "Flank",
			"level": 29,
			"open": "To side of target",
			"followup": ["Shadow's Rain"],
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "Target moves 40% slower for 12 seconds."
		},
		{
			"class": ["Mercenary"],
			"name": "Misty Gloom",
			"level": 29,
			"open": "Flank",
			"followup": null,
			"end": "Low",
			"dmg": "Very High",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "26 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Infiltrator", "Mercenary"],
			"name": "Dark Tendrils",
			"level": 34,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Infiltrator"],
			"name": "Shadow's Rain",
			"level": 39,
			"open": "Flank",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target's attack speed reduced by 26% for 20 seconds."
		},
		{
			"class": ["Mercenary"],
			"name": "Shadow's Rain",
			"level": 39,
			"open": "To side of target",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 5 seconds."
		},
		{
			"class": ["Infiltrator"],
			"name": "Hypnotic Darkness",
			"level": 44,
			"open": "Reflection",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 8 seconds."
		},
		{
			"class": ["Mercenary"],
			"name": "Hypnotic Darkness",
			"level": 44,
			"open": "Reflection",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 8 seconds."
		},
		
		{
			"class": ["Infiltrator"],
			"name": "Dual Shadows",
			"level": 50,
			"open": "In front of target",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Medium Penalty",
			"effect": "26 damage every 4.0 sec for 20 seconds"
		},
		{
			"class": ["Mercenary"],
			"name": "Dual Shadows",
			"level": 50,
			"open": "Penumbra",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 7 seconds."
		}
	]
};

const FLEXIBLE_SPEC_DATA = {
	"metaData": {
		"spec": "Flexible",
		"altName": "Flex Weapons",
		"type": "Combat",
		"weapon": "Flexible",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Heretic", "Reaver"],
			"name": "Massasauga",
			"level": 1,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Blacksnake",
			"level": 2,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Kingsnake",
			"level": 4,
			"open": "You Block",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "8 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Diamondback",
			"level": 6,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Asp",
			"level": 8,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "Very High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Viper",
			"level": 10,
			"open": "You Block",
			"followup": ["Copperhead"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": null
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Copperhead",
			"level": 12,
			"open": "Viper",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "Target cannot move or take any other action for 5 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Tigersnake",
			"level": 15,
			"open": "You Parry",
			"followup": ["Anaconda"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 22% for 20 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Indigosnake",
			"level": 18,
			"open": "To side of target",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "The target takes 45 spirit damage and the attacker is healed for 70% of the damage dealt."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Boomslang",
			"level": 21,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 19 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Python",
			"level": 25,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "Low Bonus",
			"effect": "Decreases the target's strength by 30 for 30 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Taipan",
			"level": 29,
			"open": "To side of target",
			"followup": ["Cobra"],
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 23 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Constrictor",
			"level": 34,
			"open": "Any",
			"followup": null,
			"end": "High",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Does 45 spirit damage to the target."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Anaconda",
			"level": 39,
			"open": "Tigersnake",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 8 seconds."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Cobra",
			"level": 44,
			"open": "Taipan",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Does 130 spirit damage to the target."
		},
		{
			"class": ["Heretic", "Reaver"],
			"name": "Leviathan",
			"level": 50,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Does 113 spirit damage to the target."
		}
	]
};

const PAINWORKING_STYLE_DATA = {
	"metaData": {
		"spec": "Painworking",
		"type": "Combat",
		"weapon": "Painworking",
		"trainedValue": 1//PAINWORKING_TRAINED_SPELL_DATA.metaData.trainedValue
	},
	"styles": [
		{
			"class": ["Necromancer"],
			"name": "Villainous Strike",
			"level": 1,
			"open": "Any",
			"followup": ["Chilling Touch"],
			"end": "Low",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "Target's armor becomes 1% less effective for 30 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Chilling Touch",
			"level": 3,
			"open": "Villainous Strike",
			"followup": null,
			"end": "High",
			"dmg": "Medium",
			"hit": "No Bonus",
			"def": "Medium Penalty",
			"effect": "Grants you 5% chance to evade melee and ranged physical attacks for 10 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Shadow Beckon",
			"level": 13,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Low",
			"hit": "No Bonus",
			"def": "Low Bonus",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Necromancer"],
			"name": "Arctic Death",
			"level": 16,
			"open": "You Parry",
			"followup": ["Vanquisher"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target's attack speed reduced by 26% for 20 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Icebringer",
			"level": 23,
			"open": "To side of target",
			"followup": ["Frostbite"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Inflicts a wasting disease on the target that slows target by 15%, reduces its strength by 15 and inhibits healing by 50% for 20 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Vanquisher",
			"level": 26,
			"open": "Arctic Death",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Dissipates all ablative barriers from the target."
		},
		{
			"class": ["Necromancer"],
			"name": "Icy Cleave",
			"level": 33,
			"open": "In front of target",
			"followup": null,
			"end": "Very High",
			"dmg": "Medium",
			"hit": "No Bonus",
			"def": "Medium Bonus",
			"effect": "Strikes all enemies in front of you for 12 cold damage.\nRadius: 125"
		},
		{
			"class": ["Necromancer"],
			"name": "Frozen Edge",
			"level": 36,
			"open": "Behind target",
			"followup": ["Deathseeker"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Decreases the target's resistance to cold damage by 25% for 12 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Frostbite",
			"level": 43,
			"open": "Icebringer",
			"followup": null,
			"end": "Low",
			"dmg": "Very High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 7 seconds."
		},
		{
			"class": ["Necromancer"],
			"name": "Deathseeker",
			"level": 46,
			"open": "Frozen Edge",
			"followup": null,
			"end": "High",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Imposes a -50.0% penalty to the effectiveness of heal spells cast by the target."
		}
	]
};

const PARRY_SPEC_DATA = {
	"metaData": {
		"spec": "Parry",
		"trainedValue": 1
	}
};

const POLEARM_SPEC_DATA = {
	"metaData": {
		"spec": "Polearm",
		"type": "Combat",
		"weapon": "Polearm",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Armsman"],
			"name": "Pole Thrash",
			"level": 1,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman"],
			"name": "Impale",
			"level": 2,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Cross",
			"level": 4,
			"open": "To side of target",
			"followup": ["Disabler"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 11 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Deflect",
			"level": 6,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Faith",
			"level": 8,
			"open": "Any",
			"followup": ["Defender's Courage"],
			"end": "High",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "Low Penalty",
			"effect": "4 damage every 5.0 sec for 25 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Executioner",
			"level": 10,
			"open": "You Parry",
			"followup": ["Defender's Advance"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "Targets attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Distract",
			"level": 12,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Courage",
			"level": 15,
			"open": "Defender's Faith",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 20% for 20 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Crippling Blow",
			"level": 18,
			"open": "To side of target",
			"followup": ["Mangle"],
			"end": "Medium",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 11 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Disabler",
			"level": 21,
			"open": "Defender's Cross",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 21% for 20 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Phalanx",
			"level": 25,
			"open": "Behind target",
			"followup": ["Defender's Revenge"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 15 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Mangle",
			"level": 29,
			"open": "Crippling Blow",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 6 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Rage",
			"level": 34,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman"],
			"name": "Poleaxe",
			"level": 39,
			"open": "To side of target",
			"followup": ["Defender's Aegis"],
			"end": "High",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 15 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Revenge",
			"level": 44,
			"open": "Phalanx",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "Very High Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 9 seconds."
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Advance",
			"level": 48,
			"open": "Executioner",
			"followup": null,
			"end": "High",
			"dmg": "Very High",
			"hit": "Low Bonus",
			"def": "Medium Bonus",
			"effect": "20 damage every 4.0 sec for 20 seconds"
		},
		{
			"class": ["Armsman"],
			"name": "Defender's Aegis",
			"level": 50,
			"open": "Poleaxe",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "Low Bonus",
			"effect": "32 damage every 4.0 sec for 20 seconds."
		}
	]
};

const SLASH_SPEC_DATA = {
	"metaData": {
		"spec": "Slash",
		"type": "Combat",
		"weapon": "Slash",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Ruby Slash",
			"level": 1,
			"open": "Any",
			"followup": ["Emerald Slash"],
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Emerald Slash",
			"level": 2,
			"open": "Ruby Slash",
			"followup": null,
			"end": "Low",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "8 damage every 4.0 seconds for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Cross Slash",
			"level": 4,
			"open": "In front of target",
			"followup": ["Bloodletter"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "Target's attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Uppercut",
			"level": 6,
			"open": "Any",
			"followup": ["Opal Slash", "Cleave"],
			"end": "Medium",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Enrage",
			"level": 8,
			"open": "Any",
			"followup": ["Sapphire Slash"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "No Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Bloodletter",
			"level": 10,
			"open": "Cross Slash",
			"followup": null,
			"end": "Medium",
			"dmg": "Low",
			"hit": "High Bonus",
			"def": "Medium Bonus",
			"effect": "13 damage every 4.0 seconds for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Reflect",
			"level": 12,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "Medium Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Opal Slash",
			"level": 15,
			"open": "Uppercut",
			"followup": null,
			"end": "Medium",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "13 damage every 4.0 seconds for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Riposte",
			"level": 18,
			"open": "You Block",
			"followup": ["Befuddler"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Medium Bonus",
			"effect": "Target's attack speed reduced by 21% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Side Slicer",
			"level": 21,
			"open": "To side of target",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 14 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Cleave",
			"level": 25,
			"open": "Uppercut",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "20 damage every 4.0 seconds for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Amethyst Slash",
			"level": 29,
			"open": "Any",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Befuddler",
			"level": 34,
			"open": "Riposte",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 6 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Back Slash",
			"level": 39,
			"open": "Behind target",
			"followup": ["Diamond Slash"],
			"end": "High",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 19 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Sapphire Slash",
			"level": 44,
			"open": "Enrage",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "High Penalty",
			"effect": "26 damage every 4.0 seconds for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Diamond Slash",
			"level": 50,
			"open": "Back Slash",
			"followup": null,
			"end": "High",
			"dmg": "High",
			"hit": "Very High Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 34% for 20 seconds."
		}
	]
};

const STAFF_SPEC_DATA = {
	"metaData": {
		"spec": "Staff",
		"type": "Combat",
		"weapon": "Staff",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Friar"],
			"name": "Spinning Staff",
			"level": 1,
			"open": "Any",
			"followup": ["Jabbing Staff"],
			"end": "Low",
			"dmg": "Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": "13 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Jabbing Staff",
			"level": 4,
			"open": "Spinning Staff",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "Low Bonus",
			"effect": "You regain 10 hit points."
		},
		{
			"class": ["Friar"],
			"name": "Defender's Fury",
			"level": 8,
			"open": "You Parry",
			"followup": ["Friar's Fury"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "Medium Bonus",
			"effect": "Target's attack speed reduced by 20% for 20 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Quick Strike",
			"level": 10,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "Low Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Friar"],
			"name": "Friar's Redress",
			"level": 12,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "Very High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Friar"],
			"name": "Double Strike",
			"level": 15,
			"open": "To side of target",
			"followup": ["Banish"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 5 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Friar's Friend",
			"level": 18,
			"open": "Behind target",
			"followup": null,
			"end": "High",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 27 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Counter Evade",
			"level": 25,
			"open": "You Evade",
			"followup": ["Figure Eight"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Increases the target's attack speed by 20% for 15 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Banish",
			"level": 29,
			"open": "Double Strike",
			"followup": null,
			"end": "Very High",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Does 175 spirit damage to the target.\n\nRadius: 350"
		},
		{
			"class": ["Friar"],
			"name": "Holy Staff",
			"level": 34,
			"open": "Any",
			"followup": ["Excommunicate"],
			"end": "High",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "Low Bonus",
			"effect": "The target regenerates 50 health every 2.0 sec for 10 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Friar's Fury",
			"level": 28,
			"open": "Defender's Fury",
			"followup": null,
			"end": "Very High",
			"dmg": "High",
			"hit": "Medium",
			"def": "Low Bonus",
			"effect": "Target cannot move or take any other action for 8 seconds."
		},
		{
			"class": ["Friar"],
			"name": "Figure Eight",
			"level": 44,
			"open": "Counter Evade",
			"followup": null,
			"end": "High",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "Low Bonus",
			"effect": "Increases your Staff by 10% for 1 minute."
		},
		{
			"class": ["Friar"],
			"name": "Excommunicate",
			"level": 50,
			"open": "Holy Staff",
			"followup": null,
			"end": "High",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "You do an additional 75 spirit damage to your target and heal your group for 125."
		}
	]
};

const THRUST_SPEC_DATA = {
	"metaData": {
		"spec": "Thrust",
		"type": "Combat",
		"weapon": "Thrust",
		"trainedValue": 1
	},
	"styles": [
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Thistle",
			"level": 1,
			"open": "Any",
			"followup": ["Sever"],
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Sever",
			"level": 2,
			"open": "Thistle",
			"followup": null,
			"end": "Low",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "8 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Infiltrator", "Minstrel", "Scout"],
			"name": "Wildcat",
			"level": 3,
			"open": "Any, Stealthed",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "Low Penalty",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Ratfang",
			"level": 4,
			"open": "You Parry",
			"followup": ["Wolftooth"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": "Target's attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Puncture",
			"level": 6,
			"open": "Any",
			"followup": ["Bloody Dance"],
			"end": "High",
			"dmg": "Low",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "8 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Sting",
			"level": 8,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "High Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Wolftooth",
			"level": 10,
			"open": "Ratfang",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 5 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Bloody Dance",
			"level": 12,
			"open": "Puncture",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "Low Penalty",
			"effect": "13 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Beartooth",
			"level": 15,
			"open": "You Block",
			"followup": ["Lunge"],
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 20% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Tranquillize",
			"level": 18,
			"open": "Any",
			"followup": ["Wyvernfang"],
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "Medium Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Lunge",
			"level": 21,
			"open": "Beartooth",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Ricochet",
			"level": 25,
			"open": "You Block",
			"followup": ["Dragonfang"],
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "20 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Pierce",
			"level": 29,
			"open": "Behind target",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "Medium Penalty",
			"effect": "Target moves 40% slower for 15 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Liontooth",
			"level": 34,
			"open": "Any",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "Low Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Basiliskfang",
			"level": 39,
			"open": "To side of target",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "Low Bonus",
			"effect": "Target's attack speed reduced by 30% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Wyvernfang",
			"level": 44,
			"open": "Tranquillize",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 30% for 20 seconds."
		},
		{
			"class": ["Armsman", "Infiltrator", "Mercenary", "Minstrel", "Paladin", "Reaver", "Scout"],
			"name": "Dragonfang",
			"level": 50,
			"open": "Ricochet",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "High Bonus",
			"def": "Low Penalty",
			"effect": "Target cannot move or take any other action for 8 seconds."
		}
	]
};

const TWO_HANDED_SPEC_DATA = {
	"metaData": {
		"spec": "Two Handed",
		"type": "Combat",
		"weapon": "Two Handed",
		"trainedValue": 1,
	},
	"styles": [
		{
			"class": ["Armsman", "Paladin"],
			"name": "Quarter Moon",
			"level": 1,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Half Moon",
			"level": 2,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Very Low",
			"hit": "No Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Double Back",
			"level": 4,
			"open": "In front of target",
			"followup": ["Two Fists"],
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 16% for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Rile",
			"level": 6,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "Medium Penalty",
			"effect": "Increases your threat to monster targets by 275 damage."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Pacify",
			"level": 8,
			"open": "Any",
			"followup": null,
			"end": "Low",
			"dmg": "None",
			"hit": "No Bonus",
			"def": "High Bonus",
			"effect": "Increases your threat to monster targets by 0 damage."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Two Fists",
			"level": 10,
			"open": "Double Back",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "8 damage every 5.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Bone Bruiser",
			"level": 12,
			"open": "Any",
			"followup": null,
			"end": "Medium",
			"dmg": "Low",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "Target's attack speed reduced by 18% for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Onslaught",
			"level": 15,
			"open": "To side of target",
			"followup": ["Two Moons"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 14 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Fury",
			"level": 18,
			"open": "You Parry",
			"followup": ["Recenter"],
			"end": "Low",
			"dmg": "Medium",
			"hit": "High Bonus",
			"def": "High Penalty",
			"effect": "13 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Bone Splitter",
			"level": 21,
			"open": "In front of target",
			"followup": ["Bone Breaker"],
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Recenter",
			"level": 25,
			"open": "Fury",
			"followup": null,
			"end": "Low",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "High Bonus",
			"effect": "Target's attack speed reduced by 26% for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Bone Breaker",
			"level": 29,
			"open": "Bone Splitter",
			"followup": null,
			"end": "Medium",
			"dmg": "High",
			"hit": "Low Bonus",
			"def": "No Bonus",
			"effect": "20 damage every 4.0 sec for 20 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Obfuscate",
			"level": 34,
			"open": "Any",
			"followup": null,
			"end": "Medium",
			"dmg": "Medium",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": null
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Doubler",
			"level": 39,
			"open": "Behind target",
			"followup": ["Sun and Moon"],
			"end": "Medium",
			"dmg": "High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target moves 40% slower for 23 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Two Moons",
			"level": 44,
			"open": "Onslaught",
			"followup": null,
			"end": "Low",
			"dmg": "Very High",
			"hit": "High Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 9 seconds."
		},
		{
			"class": ["Armsman", "Paladin"],
			"name": "Sun and Moon",
			"level": 50,
			"open": "Doubler",
			"followup": null,
			"end": "Medium",
			"dmg": "Very High",
			"hit": "Medium Bonus",
			"def": "No Bonus",
			"effect": "Target cannot move or take any other action for 7 seconds."
		}
	]
};



/*  style template
		{
			"class": [""],
			"name": "",
			"level": ,
			"open": "",
			"followup": ,
			"end": "",
			"dmg": "",
			"hit": "",
			"def": "",
			"effect":
		}
*/