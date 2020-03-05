const PAINWORKING_SPEC_DATA = {
	"metaData": {
		"spec": "Painworking",
		"specline": "Painworking",
		"baseline": "Painworking Baseline",
		"type": ["Combat", "Magic"],
		"weapon": "Painworking",
		"trainedValue": 1
	},
	"base": [
		{
			"class": ["Necromancer"],
			"name": "Icy Ground",
			"level": 1,
			"duration": "15 seconds",
			"cost": {
				"type": "Power",
				"value": 12
			},
			"target": "Self area effect",
			"range": 200,
			"radius": 200,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": "Cold",
			"maxTarget": 16,
			"effect": "Creates a cloud that affects everyone in the area.\n\nCloud spell:\nDoes 4 cold damage to the target.\n\n\nRadius: 200"
		},
		{
			"class": ["Necromancer"],
			"name": "Dark Horror", 
			"level": 4,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": 5
			},
			"target": "Targeted",
			"range": 1500,
			"radius": null,
			"cast": "Instant",
			"recast": "7 seconds",
			"type": "Body",
			"maxTarget": null,
			"effect": "Decreases the target's constitution by 11."
		},
		{
			"class": ["Necromancer"],
			"name": "Edge of Hatred",
			"level": 7,
			"duration": "20 minutes",
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "2.2 seconds",
			"recast": null,
			"type": "Spirit",
			"maxTarget": null,
			"effect": "You deal 5.8 spirit damage to enemies that hit you with a melee attack."
		},
		{
			"class": ["Necromancer"],
			"name": "Chthonic Form",
			"level": 8,
			"duration": null,
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "2 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Become a Chthonic Knight. Your health is increased by 30%, your melee absorbtion by 20, secondary magic resistances by 15%, and you gain the ability to parry attacks.\n\nAdditionally, your armor factor and weaponskill are both greatly increased"
		},
		{
			"class": ["Necromancer"],
			"name": "Chilling Ground", 
			"level": 11,
			"duration": "15 seconds",
			"cost": {
				"type": "Power",
				"value": 28
			},
			"target": "Self area effect", 
			"range": 200,
			"radius": 200,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": "Cold",
			"maxTarget": 16,
			"effect": "Creates a cloud that affects everyone in the area.\n\nCloud spell:\nDoes 18 cold damage to the target.\n\n\nRadius: 200"
		},
		{
			"class": ["Necromancer"],
			"name": "Vile Horror", 
			"level": 14,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": 20
			},
			"target": "Targeted",
			"range": 1500,
			"radius": null,
			"cast": "Instant",
			"recast": "7 seconds",
			"type": "Body",
			"maxTarget": null,
			"effect": "Decreases the target's constitution by 18."
		},
		{
			"class": ["Necromancer"],
			"name": "Eviscerating Protector", 
			"level": 17,
			"duration": "20 minutes",
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "2.2 seconds",
			"recast": null,
			"type": "Spirit",
			"maxTarget": null,
			"effect": "You deal 8.9 spirit damage to enemies that hit you with a melee attack."
		},
		{
			"class": ["Necromancer"],
			"name": "Frigid Ground", 
			"level": 21,
			"duration": "15 seconds",
			"cost": {
				"type": "Power",
				"value": 45
			},
			"target": "Self area effect",
			"range": 200,
			"radius": 200,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": "Cold",
			"maxTarget": 16,
			"effect": "Creates a cloud that affects everyone in the area.\n\nCloud spell:\nDoes 27 cold damage to the target.\n\n\nRadius: 200"
		},
		{
			"class": ["Necromancer"],
			"name": "Mind Horror", 
			"level": 24,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": 28
			},
			"target": "Targeted",
			"range": 1500n,
			"radius": null,
			"cast": "Instant",
			"recast": "7 seconds",
			"type": "Body",
			"maxTarget": null,
			"effect": "Decreases the target's constitution by 25."
		},
		{
			"class": ["Necromancer"],
			"name": "Knives of Death", 
			"level": 27,
			"duration": "20 minutes",
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "2.2 seconds",
			"recast": null,
			"type": "Spirit",
			"maxTarget": null,
			"effect": "You deal 11.6 spirit damage to enemies that hit you with a melee attack."
		},
		{
			"class": ["Necromancer"],
			"name": "Numbing Ground", 
			"level": 31,
			"duration": "15 seconds",
			"cost": {
				"type": "Power",
				"value": "54"
			},
			"target": "Self area effect",
			"range": 200,
			"radius": 200,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": "Cold",
			"maxTarget": 16,
			"effect": "Creates a cloud that affects everyone in the area.\n\nCloud spell:\nDoes 72 cold damage to the target.\n\n\nRadius: 200"
		},
		{
			"class": ["Necromancer"],
			"name": "Evil Horror", 
			"level": 34,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": 34
			},
			"target": "Targeted",
			"range": 1500,
			"radius": null,
			"cast": "Instant",
			"recast": "7 seconds",
			"type": "Body",
			"maxTarget": null,
			"effect": "Decreases the target's constitution by 31."
		},
		{
			"class": ["Necromancer"],
			"name": "Flaying Shield", 
			"level": 37,
			"duration": "20 minutes",
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "2.2 seconds",
			"recast": null,
			"type": "Spirit",
			"maxTarget": null,
			"effect": "You deal 15.3 spirit damage to enemies that hit you with a melee attack."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Ground", 
			"level": 41,
			"duration": "15 seconds", 
			"cost": {
				"type": "Power",
				"value": 62
			},
			"target": "Self area effect",
			"range": 200,
			"radius": 200,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": "Cold",
			"maxTarget": 16,
			"effect": "Creates a cloud that affects everyone in the area.\n\nCloud spell:\nDoes 112 cold damage to the target.\n\n\nRadius: 200"
		},
		{
			"class": ["Necromancer"],
			"name": "Demon Horror", 
			"level": 44,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": 48
			},
			"target": "Targeted",
			"range": 1500,
			"radius": null,
			"cast": "Instant",
			"recast": "7 seconds",
			"type": "Body",
			"maxTarget": null,
			"effect": "Decreases the target's constitution by 41."
		},
		{
			"class": ["Necromancer"],
			"name": "Soul Sundering Shield", 
			"level": 47,
			"duration": "20 minutes",
			"cost": {
				"type": "Power",
				"value": "20%"
			},
			"target": "Self", 
			"range": null,
			"radius": null,
			"cast": "2.2 seconds",
			"recast": null,
			"type": "Spirit",
			"maxTarget": null,
			"effect": "You deal 21.1 spirit damage to enemies that hit you with a melee attack."
		}
	],
	"spells": [
		{
			"class": ["Necromancer"],
			"name": "Conjure Icebrand",
			"level": 1,
			"duration": null,
			"cost": {
				"type": "Power",
				"value": "25%"
			},
			"target": "Self",
			"range": 500,
			"radius": null,
			"cast": "10.0 seconds",
			"recast": null,
			"type": "Cold",
			"maxTarget": null,
			"effect": "Summon a Chthonic blade of an appropriate level. The damage type of this weapon is Cold.\n\nThis spell will summon a blade to match your level."
		},
		{
			"class": ["Necromancer"],
			"name": "Anti-Magic Skin",
			"level": 2,
			"duration": "15 seconds",
			"cost": null,
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "10 minutes",
			"type": null,
			"maxTarget": null,
			"effect": "Increases your secondary magic resistances by 10%."
		},
		{
			"class": ["Necromancer"],
			"name": "Soul of Magic",
			"level": 4,
			"duration": "30 seconds",
			"cost": {
				"type": "Power",
				"value": "30% (+3 per tick)"
			},
			"target": "Group",
			"range": 1250,
			"radius": null,
			"cast": "5.0 seconds",
			"recast": "1 minute",
			"type": null,
			"maxTarget": null,
			"effect": "5% of damage done to the target by the next spell is converted to healing."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Hold",
			"level": 7,
			"duration": "10 seconds",
			"cost": {
				"type": "Power",
				"value": 12
			},
			"target": "Targeted area effect",
			"range": 500,
			"radius": 250,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Target takes 2 cold damage every 2.0 sec.\n\n\nRadius: 250"
		},
		{
			"class": ["Necromancer"],
			"name": "Ignore Weakness",
			"level": 9,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": "10%",
			},
			"target": "Realm",
			"range": 2000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Target gains a 25% chance to resist debuff spells."
		},
		{
			"class": ["Necromancer"],
			"name": "Ice Bond",
			"level": 11,
			"duration": "1 second",
			"cost": null,
			"target": "Targeted",
			"range": 1000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Snares the target by 90%\n\nIgnores root immunity and does not provide an immunity."
		},
		{
			"class": ["Necromancer"],
			"name": "Anti-Magic Shell",
			"level": 12,
			"duration": "15 seconds",
			"cost": null,
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "10 minutes",
			"type": null,
			"maxTarget": null,
			"effect": "Increases your secondary magic resistances by 20%."
		},
		{
			"class": ["Necromancer"],
			"name": "Sense of Magic",
			"level": 14,
			"duration": "25 seconds",
			"cost": {
				"type": "Power",
				"value": "30% (+6 per tick)",
			},
			"target": "Group",
			"range": 1250,
			"radius": null,
			"cast": "5.0 seconds",
			"recast": "1 minute",
			"type": null,
			"maxTarget": null,
			"effect": "15% of damage done to the target by the next spell is converted to healing."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Grasp",
			"level": 17,
			"duration": "10 seconds",
			"cost": {
				"type": "Power",
				"value": 24
			},
			"target": "Targeted area effect",
			"range": 500,
			"radius": 250,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Target takes 7 cold damage every 2.0 sec.\n\nYou must be in Chthonic Form to use this spell.\n\nTarget's movement speed is slowed by 5%. Stacks with snares and does not provide an immunity.\nRadius: 250\n\n\nRadius: 250"
		},
		{
			"class": ["Necromancer"],
			"name": "Ignore Debilitation",
			"level": 19,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": "10%"
			},
			"target": "Realm",
			"range": 2000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Target gains a 35% chance to resist debuff spells."
		},
		{
			"class": ["Necromancer"],
			"name": "Ice Cable",
			"level": 21,
			"duration": "2 seconds",
			"cost": null,
			"target": "Targeted",
			"range": 1000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Snares the target by 90%.\n\nIgnores root immunity and does not provide an immunity."
		},
		{
			"class": ["Necromancer"],
			"name": "Anti-Magic Armor",
			"level": 22,
			"duration": "15 seconds",
			"cost": null,
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "10 minutes",
			"type": null,
			"maxTarget": null,
			"effect": "Increases your secondary magic resistances by 30%."
		},
		{
			"class": ["Necromancer"],
			"name": "Awareness of Magic",
			"level": 24,
			"duration": "20 seconds",
			"cost": {
				"type": "Power",
				"value": "30% (+9 per tick)"
			},
			"target": "Group",
			"range": 1250,
			"radius": null,
			"cast": "5.0 seconds",
			"recast": "1 minute",
			"type": null,
			"maxTarget": null,
			"effect": "30% of damage done to the target by the next spell is converted to healing."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Terror",
			"level": 27,
			"duration": "10 seconds",
			"cost": null,
			"target": "Targeted area effect",
			"range": 500,
			"radius": 250,
			"cast": "Instant",
			"recast": "30 seconds",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Target takes 12 cold damage every 2.0 sec.\n\nYou must be in Chthonic Form to use this spell.\n\nTarget's movement speed is slowed by 10%. Stacks with snares and does not provide an immunity.\nRadius: 250\n\n\nRadius: 250"
		},
		{
			"class": ["Necromancer"],
			"name": "Ignore Infirmity",
			"level": 29,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": "10%",
			},
			"target": "Realm",
			"range": 2000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Target gains a 50% chance to resist debuff spells."
		},
		{
			"class": ["Necromancer"],
			"name": "Ice Chain",
			"level": 31,
			"duration": "4 seconds",
			"cost": null,
			"target": "Targeted",
			"range": 1000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Snares the target by 90%.\n\nIgnores root immunity and does not provide an immunity."
		},
		{
			"class": ["Necromancer"],
			"name": "Anti-Magic Wall",
			"level": 32,
			"duration": "15 seconds",
			"cost": null,
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "10 minutes",
			"type": null,
			"maxTarget": null,
			"effect": "Increases your secondary magic resistances by 40%."
		},
		{
			"class": ["Necromancer"],
			"name": "Expectancy of Magic",
			"level": 34,
			"duration": "16 seconds",
			"cost": {
				"type": "Power",
				"value": "30% (+12 per tick)"
			},
			"target": "Group",
			"range": 1250,
			"radius": null,
			"cast": "5.0 seconds",
			"recast": "1 minute",
			"type": null,
			"maxTarget": null,
			"effect": "65% of damage done to the target by the next spell is converted to healing."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Clench",
			"level": 37,
			"duration": "10 seconds",
			"cost": null,
			"target": "Targeted area effect",
			"range": 500,
			"radius": 250,
			"cast": "Instant",
			"recast": "30 seconds",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Target takes 20 cold damage every 2.0 sec.\n\nYou must be in Chthonic Form to use this spell.\n\nTarget's movement speed is slowed by 15%. Stacks with snares and does not provide an immunity.\nRadius: 250\n\n\nRadius: 250"
		},
		{
			"class": ["Necromancer"],
			"name": "Ignore Impunities",
			"level": 39,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": "10%"
			},
			"target": "Realm",
			"range": 2000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Target gains a 70% chance to resist debuff spells."
		},
		{
			"class": ["Necromancer"],
			"name": "Ice Bracelet",
			"level": 41,
			"duration": "6 seconds",
			"cost": null,
			"target": "Targeted",
			"range": 1000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Snares the target by 90%.\n\nIgnores root immunity and does not provide an immunity."
		},
		{
			"class": ["Necromancer"],
			"name": "Anti-Magic Barrier",
			"level": 42,
			"duration": "15 seconds",
			"cost": null,
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "Instant",
			"recast": "10 minutes",
			"type": null,
			"maxTarget": null,
			"effect": "Increases your secondary magic resistances by 50%."
		},
		{
			"class": ["Necromancer"],
			"name": "Way of Magic",
			"level": 44,
			"duration": "12 seconds",
			"cost": {
				"type": "Power",
				"value": "30% (+15 per tick)"
			},
			"target": "Group",
			"range": 1250,
			"radius": null,
			"cast": "5.0 seconds",
			"recast": "1 minute",
			"type": "Cold",
			"maxTarget": null,
			"effect": "100% of damage done to the target by the next spell is converted to healing."
		},
		{
			"class": ["Necromancer"],
			"name": "Freezing Howl",
			"level": 47,
			"duration": "10 seconds",
			"cost": {
				"type": "Power",
				"value": 65
			},
			"target": "Targeted area effect",
			"range": 500,
			"radius": 250,
			"cast": "Instant",
			"recast": "20 seconds",
			"type": "Cold",
			"maxTarget": null,
			"effect": "Target takes 43 cold damage every 1.5 sec.\n\nYou must be in Chthonic Form to use this spell.\n\nTarget's movement speed is slowed by 25%. Stacks with snares and does not provide an immunity.\nRadius: 250\n\n\nRadius: 250"
		},
		{
			"class": ["Necromancer"],
			"name": "Ignore Depletion",
			"level": 49,
			"duration": "45 seconds",
			"cost": {
				"type": "Power",
				"value": "10%",
			},
			"target": "Realm",
			"range": 2000,
			"radius": null,
			"cast": "Instant",
			"recast": "1 minute 30 seconds",
			"type": null,
			"maxTarget": null,
			"effect": "Target gains a 100% chance to resist debuff spells."
		},
		{
			"class": ["Necromancer"],
			"name": "Nethersbane",
			"level": 50,
			"duration": null,
			"cost": {
				"type": "Power",
				"value": "50%"
			},
			"target": "Self",
			"range": null,
			"radius": null,
			"cast": "15.0 seconds",
			"recast": null,
			"type": "Cold",
			"maxTarget": null,
			"effect": "Summon Nethersbane, the evil blade used by Arawn.\n\nThe damage type of Nethersbane is Cold."
		}
	],
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