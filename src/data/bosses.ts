type BossLocation =
	| "Limgrave"
	| "Weeping Peninsula"
	| "Liurnia of the Lakes"
	| "Caelid"
	| "Dragonbarrow"
	| "Siofra River"
	| "Ainsel River"
	| "Nokron, Eternal City"
	| "Deeproot Depths"
	| "Lake of Rot"
	| "Atlus Plateu"
	| "Mt. Gelmir"
	| "Leyndell"
	| "Forbidden Lands"
	| "Mountaintops of the Giants"
	| "Consecrated Snowfield"
	| "The Haligtree"
	| "Mohgwyn Palace"
	| "Crumbling Farum Azula"
	| "Leyndell, Ashen Capital";

export interface Boss {
	name: string;
	location: BossLocation;
	legend?: boolean;
	achievement?: boolean;
}

export const bosses: Boss[] = [
	// #region Limgrave
	{ name: "Beast of Farum Azula", location: "Limgrave" },
	{ name: "Bell Bearing Hunter", location: "Limgrave" },
	{ name: "Black Knife Assassin", location: "Limgrave" },
	{ name: "Bloodhound Knight Darriwil", location: "Limgrave" },
	{ name: "Crucible Knight", location: "Limgrave" },
	{ name: "Deathbird", location: "Limgrave" },
	{ name: "Demi-Human Chief", location: "Limgrave" },
	{ name: "Erdtree Burial Watchdog", location: "Limgrave" },
	{ name: "Flying Dragon Agheel", location: "Limgrave" },
	{ name: "Godrick the Grafted", location: "Limgrave", legend: true, achievement: true },
	{ name: "Grave Warden Duelist", location: "Limgrave" },
	{ name: "Guardian Golem", location: "Limgrave" },
	{ name: "Mad Pumpkin Head", location: "Limgrave" },
	{ name: "Margit, the Fell Omen", location: "Limgrave", achievement: true },
	{ name: "Night's Cavalry", location: "Limgrave" },
	{ name: "Patches", location: "Limgrave" },
	{ name: "Soldier of Godrick", location: "Limgrave" },
	{ name: "Stonedigger Troll", location: "Limgrave" },
	{ name: "Tibia Mariner", location: "Limgrave" },
	{ name: "Tree Sentinel", location: "Limgrave" },
	{ name: "Ulcerated Tree Spirit", location: "Limgrave" },
	// #endregion

	// #region Weeping Peninsula
	{ name: "Ancient Hero of Zamor", location: "Weeping Peninsula" },
	{ name: "Cemetery Shade", location: "Weeping Peninsula" },
	{ name: "Deathbird", location: "Weeping Peninsula" },
	{ name: "Erdtree Avatar", location: "Weeping Peninsula" },
	{ name: "Erdtree Burial Watchdog", location: "Weeping Peninsula" },
	{ name: "Leonine Misbegotten", location: "Weeping Peninsula", achievement: true },
	{ name: "Miranda the Blighted Bloom", location: "Weeping Peninsula" },
	{ name: "Night's Cavalry", location: "Weeping Peninsula" },
	{ name: "Runebear", location: "Weeping Peninsula" },
	{ name: "Scaly Misbegotten", location: "Weeping Peninsula" },
	// #endregion

	// #region Liurnia
	{ name: "Adan, Thief of Fire", location: "Liurnia of the Lakes" },
	{ name: "Onyx Lord (formerly Alabaster Lord)", location: "Liurnia of the Lakes" },
	{ name: "Alecto, Black Knife Ringleader", location: "Liurnia of the Lakes" },
	{ name: "Bell Bearing Hunter", location: "Liurnia of the Lakes" },
	{ name: "Black Knife Assassin", location: "Liurnia of the Lakes" },
	{ name: "Bloodhound Knight", location: "Liurnia of the Lakes" },
	{ name: "Bols, Carian Knight", location: "Liurnia of the Lakes" },
	{ name: "Cemetery Shade", location: "Liurnia of the Lakes" },
	{ name: "Cleanrot Knight", location: "Liurnia of the Lakes" },
	{ name: "Crystalian Spear & Crystalian Staff", location: "Liurnia of the Lakes" },
	{ name: "Crystalian Ringblade", location: "Liurnia of the Lakes" },
	{ name: "Deathbird", location: "Liurnia of the Lakes" },
	{ name: "Death Rite Bird", location: "Liurnia of the Lakes" },
	{ name: "Erdtree Avatar (Northeast)", location: "Liurnia of the Lakes" },
	{ name: "Erdtree Avatar (Southwest)", location: "Liurnia of the Lakes" },
	{ name: "Erdtree Burial Watchdog", location: "Liurnia of the Lakes" },
	{ name: "Glintstone Dragon Adula", location: "Liurnia of the Lakes" },
	{ name: "Glintstone Dragon Smarag", location: "Liurnia of the Lakes" },
	{ name: "Grafted Scion (Four Belfries)", location: "Liurnia of the Lakes" },
	{ name: "Magma Wyrm Makar", location: "Liurnia of the Lakes", achievement: true },
	{ name: "Night's Cavalry (North)", location: "Liurnia of the Lakes" },
	{ name: "Night's Cavalry (South)", location: "Liurnia of the Lakes" },
	{ name: "Omenkiller", location: "Liurnia of the Lakes" },
	{ name: "Red Wolf of Radagon", location: "Liurnia of the Lakes", achievement: true },
	{ name: "Rennala, Queen of the Full Moon", location: "Liurnia of the Lakes", legend: true, achievement: true },
	{ name: "Royal Knight Loretta", location: "Liurnia of the Lakes", achievement: true },
	{ name: "Royal Revenant", location: "Liurnia of the Lakes" },
	{ name: "Spirit-Caller Snail", location: "Liurnia of the Lakes" },
	{ name: "Tibia Mariner", location: "Liurnia of the Lakes" },
	// #endregion

	// #region Caelid
	{ name: "Battlemage Hugues", location: "Caelid" },
	{ name: "Cemetery Shade", location: "Caelid" },
	{ name: "Cleanrot Knight", location: "Caelid" },
	{ name: "Commander O'Neil", location: "Caelid" },
	{ name: "Crucible Knight / Misbegotten Warrior", location: "Caelid" },
	{ name: "Death Rite Bird", location: "Caelid" },
	{ name: "Decaying Ekzykes", location: "Caelid" },
	{ name: "Erdtree Avatar", location: "Caelid" },
	{ name: "Erdtree Burial Watchdog", location: "Caelid" },
	{ name: "Fallingstar Beast", location: "Caelid" },
	{ name: "Frenzied Duelist", location: "Caelid" },
	{ name: "Mad Pumpkin Heads", location: "Caelid" },
	{ name: "Magma Wyrm", location: "Caelid" },
	{ name: "Night's Cavalry", location: "Caelid" },
	{ name: "Nox Swordstress & Nox Priest", location: "Caelid" },
	{ name: "Putrid Crystallian Trio", location: "Caelid" },
	{ name: "Starscourge Radahn", location: "Caelid", legend: true, achievement: true },
	// #endregion

	// #region Dragonbarrow
	{ name: "Beast of Farum Azula", location: "Dragonbarrow" },
	{ name: "Bell Bearing Hunter", location: "Dragonbarrow" },
	{ name: "Black Blade Kindred (Bestial Sanctum)", location: "Dragonbarrow" },
	{ name: "Flying Dragon Greyll", location: "Dragonbarrow" },
	{ name: "Godskin Apostle", location: "Dragonbarrow" },
	{ name: "Night's Cavalry", location: "Dragonbarrow" },
	{ name: "Putrid Avatar", location: "Dragonbarrow" },
	{ name: "Putrid Tree Spirit", location: "Dragonbarrow" },
	// #endregion

	// Siofra
	{ name: "Ancestor Spirit", location: "Siofra River", achievement: true },
	{ name: "Dragonkin Soldier", location: "Siofra River" },

	// Ainsel
	{ name: "Dragonkin Soldier of Nokstella", location: "Ainsel River", achievement: true },

	// Nokron
	{ name: "Mimic Tear", location: "Nokron, Eternal City", achievement: true },
	{ name: "Regal Ancestor Spirit", location: "Nokron, Eternal City", achievement: true },
	{ name: "Valiant Gargoyles", location: "Nokron, Eternal City", achievement: true },

	// Deeproot
	{ name: "Crucible Knight Siluria", location: "Deeproot Depths" },
	{ name: "Fia's Champions", location: "Deeproot Depths" },
	{ name: "Lichdragon Fortissax", location: "Deeproot Depths", achievement: true },

	// Lake of Rot
	{ name: "Astel, Naturalborn of the Void", location: "Deeproot Depths", achievement: true },
	{ name: "Dragonkin Soldier", location: "Deeproot Depths" },

	// #region Atlus
	{ name: "Ancient Dragon Lansseax", location: "Atlus Plateu" },
	{ name: "Ancient Hero of Zamor", location: "Atlus Plateu" },
	{ name: "Black Knife Assassin (Sage's Cave)", location: "Atlus Plateu" },
	{ name: "Black Knife Assassin (Sainted Hero's Grave)", location: "Atlus Plateu" },
	{ name: "Crystalian Spear & Crystalian Ringblade", location: "Atlus Plateu" },
	{ name: "Demi-Human Queen Gilika", location: "Atlus Plateu" },
	{ name: "Elemer of the Briar", location: "Atlus Plateu", achievement: true },
	{ name: "Fallingstar Beast", location: "Atlus Plateu" },
	{ name: "Godefroy The Grafted", location: "Atlus Plateu" },
	{ name: "Godskin Apostle", location: "Atlus Plateu" },
	{ name: "Necromancer Garris", location: "Atlus Plateu" },
	{ name: "Night's Cavalry", location: "Atlus Plateu" },
	{ name: "Omenkiller / Miranda", location: "Atlus Plateu" },
	{ name: "Perfumer Tricia / Misbegotten Warrior", location: "Atlus Plateu" },
	{ name: "Sanguine Noble", location: "Atlus Plateu" },
	{ name: "Stonedigger Troll", location: "Atlus Plateu" },
	{ name: "Tree Sentinel Duo", location: "Atlus Plateu" },
	{ name: "Wormface", location: "Atlus Plateu" },
	// #endregion

	// #region Mt. Gelmir
	{ name: "Abductor Virgins", location: "Mt. Gelmir" },
	{ name: "Demi-Human Queen Margot", location: "Mt. Gelmir" },
	{ name: "Demi-Human Queen Maggie", location: "Mt. Gelmir" },
	{ name: "Erdtree Burial Watchdog", location: "Mt. Gelmir" },
	{ name: "Full-Grown Fallingstar Beast", location: "Mt. Gelmir" },
	{ name: "God-Devouring Serpent / Rykard", location: "Mt. Gelmir", legend: true, achievement: true },
	{ name: "Godskin Noble", location: "Mt. Gelmir", achievement: true },
	{ name: "Kindred of Rot", location: "Mt. Gelmir" },
	{ name: "Magma Wyrm", location: "Mt. Gelmir" },
	{ name: "Red Wolf of the Champion", location: "Mt. Gelmir" },
	{ name: "Tibia Mariner", location: "Mt. Gelmir" },
	{ name: "Ulcerated Tree Spirit", location: "Mt. Gelmir" },
	// #endregion

	// #region Leyndell
	{ name: "Bell Bearing Hunter", location: "Leyndell" },
	{ name: "Crucible Knight Ordovis / Crucible Knight", location: "Leyndell" },
	{ name: "Deathbird", location: "Leyndell" },
	{ name: "Draconic Tree Sentinel", location: "Leyndell" },
	{ name: "Esgar, Priest of Blood", location: "Leyndell" },
	{ name: "Fell Twins", location: "Leyndell" },
	{ name: "Godfrey, First Elden Lord (Golden Shade)", location: "Leyndell" },
	{ name: "Grave Warden Duelist", location: "Leyndell" },
	{ name: "Morgott, the Omen King", location: "Leyndell", achievement: true },
	{ name: "Mohg, The Omen", location: "Leyndell", achievement: true },
	{ name: "Onyx Lord", location: "Leyndell" },
	// #endregion

	// Forbidden Lands
	{ name: "Black Blade Kindred", location: "Forbidden Lands" },
	{ name: "Mimic Tear", location: "Forbidden Lands" },
	{ name: "Night's Cavalry", location: "Forbidden Lands" },

	// #region Mountaintops
	{ name: "Ancient Hero of Zamor", location: "Mountaintops of the Giants" },
	{ name: "Borealis the Freezing Fog", location: "Mountaintops of the Giants" },
	{ name: "Commander Niall", location: "Mountaintops of the Giants", achievement: true },
	{ name: "Death Rite Bird", location: "Mountaintops of the Giants" },
	{ name: "Erdtree Avatar", location: "Mountaintops of the Giants" },
	{ name: "Fire Giant", location: "Mountaintops of the Giants", achievement: true },
	{ name: "Godskins (Summoner Snail)", location: "Mountaintops of the Giants" },
	{ name: "Ulcerated Tree Spirit", location: "Mountaintops of the Giants" },
	{ name: "Vyke, Knight of the Roundtable", location: "Mountaintops of the Giants" },
	// #endregion

	// #region Snowfield
	{ name: "Astel, Stars of Darkness", location: "Consecrated Snowfield" },
	{ name: "Death Rite Bird", location: "Consecrated Snowfield" },
	{ name: "Great Wrym Theodorix", location: "Consecrated Snowfield" },
	{ name: "Misbegotten Crusader", location: "Consecrated Snowfield" },
	{ name: "Night's Cavalry (Duo)", location: "Consecrated Snowfield" },
	{ name: "Putrid Avatar", location: "Consecrated Snowfield" },
	{ name: "Putrid Grave Warden Duelist", location: "Consecrated Snowfield" },
	// #endregion

	// Haligtree
	{ name: "Loretta, Knight of the Haligtree", location: "The Haligtree", achievement: true },
	{ name: "Malenia, Blade of Miquella", location: "The Haligtree", legend: true, achievement: true },

	// Mohgwyn
	{ name: "Mohg, Lord of Blood", location: "Mohgwyn Palace", legend: true, achievement: true },

	// Farum Azula
	{ name: "Godskin Duo", location: "Crumbling Farum Azula", achievement: true },
	{ name: "Beast Clergyman / Maliketh, the Black Blade", location: "Crumbling Farum Azula", achievement: true },
	{ name: "Dragonlord Placidusax", location: "Crumbling Farum Azula", achievement: true },

	// Leyndell Capital
	{ name: "Godfrey, First Elden Lord / Hoarah Loux, Warrior", location: "Leyndell, Ashen Capital", achievement: true },
	{ name: "Radagon of the Golden Order / Elden Beast", location: "Leyndell, Ashen Capital" },
	{ name: "Sir Gideon Ofnir, the All-Knowing ", location: "Leyndell, Ashen Capital" },
];
