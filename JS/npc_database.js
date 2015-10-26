/**********************************************
               'DATABASE'
**********************************************/
//FIRSTNAME DATABASE
var fnBeginning = ["", "", "", "", "", "A", "Be", "De", "El", "Fa", "Jo", "Ki", "La", "Ma", "Na", "O", "Pa", "Re", "Si", "Ta", "Va"];
var fnMiddle = ["bar", "ched", "dell", "far", "gran", "hal", "jen", "kel", "lim", "mor", "net", "penn", "quil", "rond", "sark", "shen", "tur", "vash", "yor", "zen"];
var fnEnd = ["", "", "", "a", "ac", "ai", "al", "am", "an", "ar", "ea", "el", "er", "ess", "ett", "ic", "id", "il", "in", "is", "or", "us"];

//LASTNAME DATABASE

//RACE DATABASE
var npcRace = ["Human", "Orc", "Half-Elf", "Elf", "Dwarf", "Halfling", "Gnome", "Dragonborn", "Tiefling"];

//APEARANCE DATABASE
var npcFeature = ["wears distinctive jewelery", "has piercings", "wears flamboyant or outlandish clothes", "wears formal, clean clothes", "wears ragged, dirty clothes", "pronounced scar", "missing teeth", "unusual eye colour(or two different colours)", "has tattoos", "has a birthmark", "has unusual skin colour", "is bald", "has braided beard or hair", "has unusual hair color", "has a nervous twitch", "has a distinctive nose", "has a distinctive posture", "is expetionally beautiful", "is expetionally Ugly"];

///ABILITIES DATABASE
var npcHighAbilities = ["Strength: Powerful", "Strength: Brawny", "Strength: Strong as an oxe!", "Dexterity: Lithe", "Dexterity: Agile", "Dexterity: Graceful", "Constituion: Hardy", "Constitution: Hale", "Constitution: Healthy", "Intelligence: Studious", "Intelligence: Learned", "Intelligence: Inquisitive", "Wisdom: Perceptive", "Wisdom: Spiritual", "Wisdom: Insightful", "Charisma: Persuasive", "Charisma: Forceful", "Charisma: Born Leader"];

var npcLowAbilities = ["Strength: Feeble", "Strength: Scrawny", "Dexterity: Clumsy", "Dexterity: Fumbling", "Constitution: Sickly", "Constitution: Pale", "Intelligence: Dim-witted", "Intelligence: Slow", "Wisdom: Oblivious", "Wisdom: Absentminded", "Charisma: Dull", "Charisma: Boring"];

//TALENT DATABASE
var npcTalents = ["plays a musical instrument.", "speaks several languages fluently", "unbelievably lucky", "perfect memory.", "great with animals", "great with children", "great at solving puzzles", "great at one game", "great at impersonations", "draws beautifully", "paints beautifully", "sings beautifully", "drinks everyone under the table", "expert carpenter", "expert cook", "expert dart thrower", "expert rock skipper", "expert juggler", "skilled actor and master of disguise", "skilled dancer", "knows thieves' cant"];

//MANNERISM DATABASE
var npcMannerisms = ["prone to singing", "whistles", "hums queitly", "speaks in ryhme", "speaks in a peculiar way", "particulairly low voice", "particulairly high voice", "slurs words", "lisps", "stutters", "enunciates overly clearly", "speaks loudly", "whispers", "uses flowery speach", "uses long words", "frequently uses the wrong words", "uses colorful oaths", "makes constant jokes", "makes constant puns", "prone to predictions of doom", "prone to conspiracy theory", "fidgets", "squints", "stares into the distance", "chews something", "paces", "taps fingers", "bites fingernails", "cracks knuckles", "plays with their hair"];

//TRAIT DATABASE
var npcInteractionTraits = ["argumentative", "arrogant", "blustering", "rude", "curious", "friendly", "honest", "hot tempered", "irritable", "ponderous", "quiet", "suspicious"];

//ALIGNMENT DATABASE
alignmentIdealsObj = {
  good: ["Beauty", "Charity", "Greater good", "Life", "Respect", "Self-sacrifice"],
  lawful: ["Community", "Fairness", "Honor", "Logic", "Responsibility", "Tradition"],
  neutral: ["Balance", "Knowledge", "Live and let live", "Moderation", "Neutrality", "People"],
  evil: ["Domination", "Greed", "Might", "Pain", "Retribution", "Slaughter"],
  chaotic: ["Change", "Creativity", "Freedom", "Independence", "No limits", "Whimsy"],
  other: ["Aspiration", "Discovery", "Glory", "Nation", "Redemption", "Self-knowledge"]
}

//BOND DATABASE
var npcBonds = ["dedicated to fulfilling a personal life goal", "protective of close family members", "protective of colleagues or compatriots", "loyal to a benefactor", "loyal to a patron", "loyal to an employer", "captivated by a romantic interest", "drawn to a special place", "protective of a sentimental keepsake", "protective of a valuable posession", "out for revenge"];

//FLAW DATABASE
npcFlawSecret = ["forbidden love", "susceptibility to romance", "enjoys decadence", "arrogant", "envies another person's possesion", "envies another person's station", "overpowering greed", "prone to rage", "has a powerful enemy", "arachnaphobic", "xenophobic", "a biggot", "shamful secret", "scanadalous secret", "secret crime", "secret misdeed", "posession of forbidden lore", "foolhardy bravery"];

