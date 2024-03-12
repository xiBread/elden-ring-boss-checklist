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
	region: BossLocation;
	legend?: boolean;
	achievement?: boolean;
}

export const bosses: Boss[] = [
	// #region Limgrave
	{ name: "Beast of Farum Azula", region: "Limgrave" },
	{ name: "Bell Bearing Hunter", region: "Limgrave" },
	{ name: "Black Knife Assassin", region: "Limgrave" },
	{ name: "Bloodhound Knight Darriwil", region: "Limgrave" },
	{ name: "Crucible Knight", region: "Limgrave" },
	{ name: "Deathbird", region: "Limgrave" },
	{ name: "Demi-Human Chief", region: "Limgrave" },
	{ name: "Erdtree Burial Watchdog", region: "Limgrave" },
	{ name: "Flying Dragon Agheel", region: "Limgrave" },
	{ name: "Godrick the Grafted", region: "Limgrave", legend: true, achievement: true },
	{ name: "Grave Warden Duelist", region: "Limgrave" },
	{ name: "Guardian Golem", region: "Limgrave" },
	{ name: "Mad Pumpkin Head", region: "Limgrave" },
	{ name: "Margit, the Fell Omen", region: "Limgrave", achievement: true },
	{ name: "Night's Cavalry", region: "Limgrave" },
	{ name: "Patches", region: "Limgrave" },
	{ name: "Soldier of Godrick", region: "Limgrave" },
	{ name: "Stonedigger Troll", region: "Limgrave" },
	{ name: "Tibia Mariner", region: "Limgrave" },
	{ name: "Tree Sentinel", region: "Limgrave" },
	{ name: "Ulcerated Tree Spirit", region: "Limgrave" },
	// #endregion

	// #region Weeping Peninsula
	{ name: "Ancient Hero of Zamor", region: "Weeping Peninsula" },
	{ name: "Cemetery Shade", region: "Weeping Peninsula" },
	{ name: "Deathbird", region: "Weeping Peninsula" },
	{ name: "Erdtree Avatar", region: "Weeping Peninsula" },
	{ name: "Erdtree Burial Watchdog", region: "Weeping Peninsula" },
	{ name: "Leonine Misbegotten", region: "Weeping Peninsula", achievement: true },
	{ name: "Miranda the Blighted Bloom", region: "Weeping Peninsula" },
	{ name: "Night's Cavalry", region: "Weeping Peninsula" },
	{ name: "Runebear", region: "Weeping Peninsula" },
	{ name: "Scaly Misbegotten", region: "Weeping Peninsula" },
	// #endregion

	// #region Liurnia
	{ name: "Adan, Thief of Fire", region: "Liurnia of the Lakes" },
	{ name: "Onyx Lord (formerly Alabaster Lord)", region: "Liurnia of the Lakes" },
	{ name: "Alecto, Black Knife Ringleader", region: "Liurnia of the Lakes" },
	{ name: "Bell Bearing Hunter", region: "Liurnia of the Lakes" },
	{ name: "Black Knife Assassin", region: "Liurnia of the Lakes" },
	{ name: "Bloodhound Knight", region: "Liurnia of the Lakes" },
	{ name: "Bols, Carian Knight", region: "Liurnia of the Lakes" },
	{ name: "Cemetery Shade", region: "Liurnia of the Lakes" },
	{ name: "Cleanrot Knight", region: "Liurnia of the Lakes" },
	{ name: "Crystalian Spear & Crystalian Staff", region: "Liurnia of the Lakes" },
	{ name: "Crystalian Ringblade", region: "Liurnia of the Lakes" },
	{ name: "Deathbird", region: "Liurnia of the Lakes" },
	{ name: "Death Rite Bird", region: "Liurnia of the Lakes" },
	{ name: "Erdtree Avatar (Northeast)", region: "Liurnia of the Lakes" },
	{ name: "Erdtree Avatar (Southwest)", region: "Liurnia of the Lakes" },
	{ name: "Erdtree Burial Watchdog", region: "Liurnia of the Lakes" },
	{ name: "Glintstone Dragon Adula", region: "Liurnia of the Lakes" },
	{ name: "Glintstone Dragon Smarag", region: "Liurnia of the Lakes" },
	{ name: "Grafted Scion (Four Belfries)", region: "Liurnia of the Lakes" },
	{ name: "Magma Wyrm Makar", region: "Liurnia of the Lakes", achievement: true },
	{ name: "Night's Cavalry (North)", region: "Liurnia of the Lakes" },
	{ name: "Night's Cavalry (South)", region: "Liurnia of the Lakes" },
	{ name: "Omenkiller", region: "Liurnia of the Lakes" },
	{ name: "Red Wolf of Radagon", region: "Liurnia of the Lakes", achievement: true },
	{ name: "Rennala, Queen of the Full Moon", region: "Liurnia of the Lakes", legend: true, achievement: true },
	{ name: "Royal Knight Loretta", region: "Liurnia of the Lakes", achievement: true },
	{ name: "Royal Revenant", region: "Liurnia of the Lakes" },
	{ name: "Spirit-Caller Snail", region: "Liurnia of the Lakes" },
	{ name: "Tibia Mariner", region: "Liurnia of the Lakes" },
	// #endregion

	// #region Caelid
	{ name: "Battlemage Hugues", region: "Caelid" },
	{ name: "Cemetery Shade", region: "Caelid" },
	{ name: "Cleanrot Knight", region: "Caelid" },
	{ name: "Commander O'Neil", region: "Caelid" },
	{ name: "Crucible Knight / Misbegotten Warrior", region: "Caelid" },
	{ name: "Death Rite Bird", region: "Caelid" },
	{ name: "Decaying Ekzykes", region: "Caelid" },
	{ name: "Erdtree Avatar", region: "Caelid" },
	{ name: "Erdtree Burial Watchdog", region: "Caelid" },
	{ name: "Fallingstar Beast", region: "Caelid" },
	{ name: "Frenzied Duelist", region: "Caelid" },
	{ name: "Mad Pumpkin Heads", region: "Caelid" },
	{ name: "Magma Wyrm", region: "Caelid" },
	{ name: "Night's Cavalry", region: "Caelid" },
	{ name: "Nox Swordstress & Nox Priest", region: "Caelid" },
	{ name: "Putrid Crystallian Trio", region: "Caelid" },
	{ name: "Starscourge Radahn", region: "Caelid", legend: true, achievement: true },
	// #endregion

	// #region Dragonbarrow
	{ name: "Beast of Farum Azula", region: "Dragonbarrow" },
	{ name: "Bell Bearing Hunter", region: "Dragonbarrow" },
	{ name: "Black Blade Kindred (Bestial Sanctum)", region: "Dragonbarrow" },
	{ name: "Flying Dragon Greyll", region: "Dragonbarrow" },
	{ name: "Godskin Apostle", region: "Dragonbarrow" },
	{ name: "Night's Cavalry", region: "Dragonbarrow" },
	{ name: "Putrid Avatar", region: "Dragonbarrow" },
	{ name: "Putrid Tree Spirit", region: "Dragonbarrow" },
	// #endregion

	// Siofra
	{ name: "Ancestor Spirit", region: "Siofra River", achievement: true },
	{ name: "Dragonkin Soldier", region: "Siofra River" },

	// Ainsel
	{ name: "Dragonkin Soldier of Nokstella", region: "Ainsel River", achievement: true },

	// Nokron
	{ name: "Mimic Tear", region: "Nokron, Eternal City", achievement: true },
	{ name: "Regal Ancestor Spirit", region: "Nokron, Eternal City", achievement: true },
	{ name: "Valiant Gargoyles", region: "Nokron, Eternal City", achievement: true },

	// Deeproot
	{ name: "Crucible Knight Siluria", region: "Deeproot Depths" },
	{ name: "Fia's Champions", region: "Deeproot Depths" },
	{ name: "Lichdragon Fortissax", region: "Deeproot Depths", achievement: true },

	// Lake of Rot
	{ name: "Astel, Naturalborn of the Void", region: "Deeproot Depths", achievement: true },
	{ name: "Dragonkin Soldier", region: "Deeproot Depths" },

	// #region Atlus
	{ name: "Ancient Dragon Lansseax", region: "Atlus Plateu" },
	{ name: "Ancient Hero of Zamor", region: "Atlus Plateu" },
	{ name: "Black Knife Assassin (Sage's Cave)", region: "Atlus Plateu" },
	{ name: "Black Knife Assassin (Sainted Hero's Grave)", region: "Atlus Plateu" },
	{ name: "Crystalian Spear & Crystalian Ringblade", region: "Atlus Plateu" },
	{ name: "Demi-Human Queen Gilika", region: "Atlus Plateu" },
	{ name: "Elemer of the Briar", region: "Atlus Plateu", achievement: true },
	{ name: "Fallingstar Beast", region: "Atlus Plateu" },
	{ name: "Godefroy The Grafted", region: "Atlus Plateu" },
	{ name: "Godskin Apostle", region: "Atlus Plateu" },
	{ name: "Necromancer Garris", region: "Atlus Plateu" },
	{ name: "Night's Cavalry", region: "Atlus Plateu" },
	{ name: "Omenkiller / Miranda", region: "Atlus Plateu" },
	{ name: "Perfumer Tricia / Misbegotten Warrior", region: "Atlus Plateu" },
	{ name: "Sanguine Noble", region: "Atlus Plateu" },
	{ name: "Stonedigger Troll", region: "Atlus Plateu" },
	{ name: "Tree Sentinel Duo", region: "Atlus Plateu" },
	{ name: "Wormface", region: "Atlus Plateu" },
	// #endregion

	// #region Mt. Gelmir
	{ name: "Abductor Virgins", region: "Mt. Gelmir" },
	{ name: "Demi-Human Queen Margot", region: "Mt. Gelmir" },
	{ name: "Demi-Human Queen Maggie", region: "Mt. Gelmir" },
	{ name: "Erdtree Burial Watchdog", region: "Mt. Gelmir" },
	{ name: "Full-Grown Fallingstar Beast", region: "Mt. Gelmir" },
	{ name: "God-Devouring Serpent / Rykard", region: "Mt. Gelmir", legend: true, achievement: true },
	{ name: "Godskin Noble", region: "Mt. Gelmir", achievement: true },
	{ name: "Kindred of Rot", region: "Mt. Gelmir" },
	{ name: "Magma Wyrm", region: "Mt. Gelmir" },
	{ name: "Red Wolf of the Champion", region: "Mt. Gelmir" },
	{ name: "Tibia Mariner", region: "Mt. Gelmir" },
	{ name: "Ulcerated Tree Spirit", region: "Mt. Gelmir" },
	// #endregion

	// #region Leyndell
	{ name: "Bell Bearing Hunter", region: "Leyndell" },
	{ name: "Crucible Knight Ordovis / Crucible Knight", region: "Leyndell" },
	{ name: "Deathbird", region: "Leyndell" },
	{ name: "Draconic Tree Sentinel", region: "Leyndell" },
	{ name: "Esgar, Priest of Blood", region: "Leyndell" },
	{ name: "Fell Twins", region: "Leyndell" },
	{ name: "Godfrey, First Elden Lord (Golden Shade)", region: "Leyndell" },
	{ name: "Grave Warden Duelist", region: "Leyndell" },
	{ name: "Morgott, the Omen King", region: "Leyndell", achievement: true },
	{ name: "Mohg, The Omen", region: "Leyndell", achievement: true },
	{ name: "Onyx Lord", region: "Leyndell" },
	// #endregion

	// Forbidden Lands
	{ name: "Black Blade Kindred", region: "Forbidden Lands" },
	{ name: "Mimic Tear", region: "Forbidden Lands" },
	{ name: "Night's Cavalry", region: "Forbidden Lands" },

	// #region Mountaintops
	{ name: "Ancient Hero of Zamor", region: "Mountaintops of the Giants" },
	{ name: "Borealis the Freezing Fog", region: "Mountaintops of the Giants" },
	{ name: "Commander Niall", region: "Mountaintops of the Giants", achievement: true },
	{ name: "Death Rite Bird", region: "Mountaintops of the Giants" },
	{ name: "Erdtree Avatar", region: "Mountaintops of the Giants" },
	{ name: "Fire Giant", region: "Mountaintops of the Giants", achievement: true },
	{ name: "Godskins (Summoner Snail)", region: "Mountaintops of the Giants" },
	{ name: "Ulcerated Tree Spirit", region: "Mountaintops of the Giants" },
	{ name: "Vyke, Knight of the Roundtable", region: "Mountaintops of the Giants" },
	// #endregion

	// #region Snowfield
	{ name: "Astel, Stars of Darkness", region: "Consecrated Snowfield" },
	{ name: "Death Rite Bird", region: "Consecrated Snowfield" },
	{ name: "Great Wrym Theodorix", region: "Consecrated Snowfield" },
	{ name: "Misbegotten Crusader", region: "Consecrated Snowfield" },
	{ name: "Night's Cavalry (Duo)", region: "Consecrated Snowfield" },
	{ name: "Putrid Avatar", region: "Consecrated Snowfield" },
	{ name: "Putrid Grave Warden Duelist", region: "Consecrated Snowfield" },
	// #endregion

	// Haligtree
	{ name: "Loretta, Knight of the Haligtree", region: "The Haligtree", achievement: true },
	{ name: "Malenia, Blade of Miquella", region: "The Haligtree", legend: true, achievement: true },

	// Mohgwyn
	{ name: "Mohg, Lord of Blood", region: "Mohgwyn Palace", legend: true, achievement: true },

	// Farum Azula
	{ name: "Godskin Duo", region: "Crumbling Farum Azula", achievement: true },
	{ name: "Beast Clergyman / Maliketh, the Black Blade", region: "Crumbling Farum Azula", achievement: true },
	{ name: "Dragonlord Placidusax", region: "Crumbling Farum Azula", achievement: true },

	// Leyndell Capital
	{ name: "Godfrey, First Elden Lord / Hoarah Loux, Warrior", region: "Leyndell, Ashen Capital", achievement: true },
	{ name: "Radagon of the Golden Order / Elden Beast", region: "Leyndell, Ashen Capital" },
	{ name: "Sir Gideon Ofnir, the All-Knowing ", region: "Leyndell, Ashen Capital" },
];
