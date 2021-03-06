/*:
*
*@plugindesc Counts Skill uses and gives them lvl-ups
* 
*
*@author Sup3rfly
*
*@param skillExpPerUse
*@default 1
*@type number
*@min 1
*@desc how much xp should the skill get per use?
*
*@param Storage
*@desc in-game variable used to store all your skills progress
*@type number
*@default 13
*
*@param Skill Exp Reset?
*@type select
*@option Always reset to 0
*@value Always reset to 0
*@option Remove Lvlup amount
*@value Remove Lvlup amount
*@option Keep all Skill Xp
*@value Keep all Skill Xp
*@default Remove Lvlup amount
*@desc handles what heappens to skill-xp at lvl up.
*@ 0 = reset to 0, 1 = remove lvlup amount, 2 = keep all           
*
*
*@param Skill Level Names
*@desc Diffrent possibileties to name your skill levels
*
*@param Named Adjectives (38 levels)
*@type text[]
*@desc
*@default ["abysmal","dreadful","awful","bad","untrained","inept","poor","basic","mediocre","average","talented","trained","practiced","capable","proficient","versed","competent","good","skilled","professional","adept","knowledgeable","expert","cognizant","erudite","masterful","excellent","exceptional","possessed","singular","epic","heroic","legendary","insurmountable","infallible","unbelievable","godlike","unreal"]
*@parent Skill Level Names
*
*@param Named Nouns (27levels)
*@type text[]
*@desc
*@default ["Beginner","Amateur","Dabbler","Novice","Neophyte","Initiate","Apprentice","Bodger","Fellow","Journeyman","Practitioner","Adept","Expert","Scholar","Eruditus","Master","Savant","Sage","Thera","Grand Master","Provost","Illuminate","Maha Thera","Doyen","Legend","God","Unreal"]
*@parent Skill Level Names
*
*@param Player-Defined
*@type text[][]
*@desc Enter your own List of Skill Lvl Names
*@default ["[\"Trainee\",\"Novice\",\"Proficient\",\"Expert\"]","[\"Apprentice\",\"Journeyman\",\"Master\"]","[\"Novice\",\"Neophyte\",\"Practitioner\",\"Expert\",\"Master\",\"Grand Master\"]","[\"Heretic\",\"Believer\",\"Priest\",\"Bishop\",\"Cardinal\",\"Pope\",\"God\"]"]
*@parent Skill Level Names
*
*@param Select-Default
*@type number
*@default 1
*@min 0
*@desc Number of Skill-Level-Name type you wish to use by default.
*shouldn't be higher than how many you have defined (0 for simple numbers)
*@parent Skill Level Names
*
*@param Skill Progression
*@desc xp needed per skill level 
*
*@param manual
*@parent Skill Progression
*@desc manual input of lvl-up thresholds.
*
*
*@param skillProgression1
*@desc lists of xp required to lvl a skill/spell
*don't edit or separate by comma
*@default 3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323
*@parent manual
*@type text
*
*@param skillProgression2
*@desc number of uses for a skill to reach the next level
*don't edit or separate by comma
*@default 10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,10000000000,100000000000,1000000000000,10000000000000
*@parent manual
*@type text
*
*@param Player_Defined
*@type text[][]
*@desc Enter your own List(s) of Skill Exp needed to lvl a skill/spell. Change if you want
*@default ["[\"10\",\"30\",\"90\",\"300\",\"1000\",\"3500\",\"10000\",\"38000\",\"120000\"]","[\"100\",\"300\",\"1000\"]","[\"10\",\"100\",\"1000\",\"10000\",\"100000\",\"1000000\"]","[\"50\",\"150\",\"500\",\"1500\",\"5000\",\"11500\",\"35000\"]"]
*@parent manual
*
*@param Select_Default
*@type number
*@default 1
*@min 1
*@desc Number of Skill-Level-Name type you wish to use by default.
*shouldn't be higher than how many you have defined
*
*
*
*
*
*
*@param Damage Progression
*@type text[][]
*@desc Enter your own List(s) of Damage multiplicator per lvl. Change if you want
*@default ["[\"100\",\"104\",\"108\",\"112\",\"115\",\"118\",\"121\",\"124\",\"126\",\"128\",\"130\",\"132\",\"134\",\"135\",\"136\",\"137\",\"138\",\"139\",\"140\",\"141\",\"142\",\"143\",\"144\",\"145\",\"146\",\"147\",\"148\",\"150\",\"151\",\"152\",\"153\",\"154\",\"155\",\"156\",\"157\",\"158\",\"159\",\"160\"]","[\"100\",\"104\",\"108\",\"112\",\"115\",\"118\",\"121\",\"124\",\"126\",\"128\",\"130\",\"132\",\"134\",\"136\",\"137\",\"138\",\"139\",\"140\",\"141\",\"142\",\"143\",\"144\",\"145\",\"146\",\"147\",\"148\",\"150\"]","[\"100\",\"110\",\"120\",\"135\"]","[\"100\",\"125\",\"150\"]","[\"100\",\"110\",\"120\",\"130\",\"140\",\"150\"]","[\"100\",\"110\",\"120\",\"130\",\"140\",\"150\",\"158\"]"];
*
*
*@param Select Damage Default
*@type number
*@default 1
*@min 1
*@desc choose which Damage array to use.
*shouldn't be higher than how many you have defined
*@parent Damage Progression
*
*
*
*@help
*Random help text here!
*
*
* ---------------------- Thoughts of the Author ----------------------
*
*I do sooo hate hard caps. Meaning a maximum level at anything. And i did
*love Final Fantasy XI online and its skill system, as well as the merit point 
*system. So this is my homage to it and some of its ideas.
*I don't see why there should ever be any hard limit on how high a skill should
*be able to get, not if there is an easy way to never let the player get there 
*anyways. Thats why i intend to let my players rise in their skills whenever they 
*use them, even though the steps between uses will get ridiculously high at 
*some point, so the end is never in reach. This still rewards players who play
*a lot more than others, or who focus more on certain skills, without 
*ever overpowering them (compared to others) nor breaking the game mechanics.
*At leat thats my intention; i'm certain some of you will use it differently.
*
*
* ---------------------- File name: SF_SkillLvl_v0_5.js ----------------------
*
*---------- Skill Exp Reset? -------------
* 
*So lets say you finish a Quest. The quest, for some reason, you set to reward
 the player with 1000 Points of skill exp in a certain skill. Also, that certain
 skill has 0 xp atm, should level at 100, then at 500 and at 1333 xp.
It is currently at lvl 1 (basic lvl)

*Setting Skill Exp Reset? to Reset all to 0 will, when your skill levels the 
first time, reset the remaining Skill xp to 0 an thus u will gain 1 skill level
 and have 0 xp in that skill. (lvl 2 to compare to the next 2 options)
current xp 0
current lvl 2
tnl 500
tnl lvl 4 = min. 1833 

*Setting it to Remove Lvlup amount will remove 100 skill xp from the 1000 you
 just gained, thus after the first lvl up you will have 900 remaining xp in that
  skill. Since you are supposed to lvl again at 500 xp, you will gain a second 
  lvl and 400 skill xp will remain on that skill. adding another 933 xp will 
  take you to the next level (4)
current xp 400 (=1000-100-500)
current lvl 3
tnl 933
tnl lvl 4 = 933

*Setting it to Keep all Skill Xp will not ever remove any skill xp. This means 
having 1000 skill xp will set the lvel of the skill to 3 and show as 1000xp. 
(basic lvl 1, after first 100 xp show as lvl 2, and after another 400xp it is 
at 500xp and will show as lvl 3) Adding another 333 xp will take you to the 
next level (4)
current xp 1000
current lvl 3
tnl 333
tnl lvl 4 = 333
*
*My Thoughts: 
a) Everyone has his own thoughts how this should be handled.
b) at a later point i might want to add ways to downlvl a skill. 
This would be easiest done with the last option, just remove some xp
or with the first option, simply straight remove the lvl.
The middle option its a lil trickier, but it is my favorite to use.
*
*
*/

(function(){
	var deBugModeOn = false;



var char1
var char1Id
var char2
var char2Id 
var char12
var char12Id
var spellOneName
var spellTwoName
var spellThreeName 
var spellOneId ;
var spellTwoId ;
var spellThreeId;
var importedSkillProgressions
var iSP = importedSkillProgressions;
var importedDmgProgression 
var iDP = importedDmgProgression;
var importedLevelNameProgression 
var iNP = importedLevelNameProgression;
var expGainPerSkillUse 
var eGPSU = expGainPerSkillUse;
//handles if the spell exp reset to 0 after each lvl up. 0 means always to 0; 1 means will be reducedd by the former levels xp requirement, 2 means no or never ;
var skillExpReset;
var generalExportContainer;
var Expo;
var Impo;
var iChar;
var eChar
var iSpell
var eSpell

var userSetSkillProgression;
var userSetDmgProgression;
var userSetLvlNameProgression;
var uSSP;
var uSDP;
var uSNP ;

var impSkillName;
var impCharName;

var curDmgMult
var curLvl
var curExp
var curLvlName




//stuff to get from game or input


if (deBugModeOn === false) {											//uses these values in the game - mostly from the game etc.

// should make the plugin commands ingame be detectable by this plugin in the "if (command =....){...}" section
		var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
		Game_Interpreter.prototype.pluginCommand = function(command, args) 	{
		    _Game_Interpreter_pluginCommand.call(this, command, args)		}
//		    if (command === initSkillLvl) {
//		    	initSkillLvl();		    }


/* Enter plugin commands here  as follows:
		if (command == "addition") {
			var num1 = Number(args[0]);
			var num2 = Number(args[1]);
			var sum = num1+num2;
			$gameMessage.add(String(sum));
		 }
*/


var paramsLoaded = false;
var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded
DataManager.isDatabaseLoaded = function() {
    if (_DataManager_isDatabaseLoaded.call(this)===false){
    	return false;
    }
    if (paramsLoaded ===false) {
    	//load my notetags here
			var params = PluginManager.parameters('SF_SkillLvl_v0_5');		
		} 
    	paramsLoaded = true;

    return true;
};

/*
var varLoaded = false;


    if (varLoaded === false){
		var Impo = $gameVariables.value(Number(params("Storage")))||[]
    	}	
    	varLoaded = true;
*/

var params = PluginManager.parameters('SF_SkillLvl_v0_5');

// skill lvl progression from user integrted
// const initSkillLvl = () => {																		console.log("Initializing SkillLvl")
	importedSkillProgressions = [];
		importedSkillProgressions.push(String(params['skillProgression1']));
		importedSkillProgressions.push(String(params['skillProgression2']));
		let temp = String(params['Player_Defined'])
			for (let i=0;i<temp.length;i++){
				importedSkillProgressions.push(String(temp[i]));
			};
	userSetSkillProgression = Number(params["Select_Default"]);
	uSSP = userSetSkillProgression

	// name lvl progression from user integrted
	importedLevelNameProgression = [];
		importedLevelNameProgression.push(String(params['Named Adjectives (38 levels)']));
		importedLevelNameProgression.push(String(params['Named Nouns (27levels)']));
		let temp2= String(params['Player-Defined']);
			for (let i=0;i<temp2.length;i++){
				importedLevelNameProgression.push(String(temp2[i]));
			};
	userSetLvlNameProgression = Number(params["Select-Default"]);
	uSNP = userSetLvlNameProgression;

	// dmg lvl progression from user integrted

	importedDmgProgression = [];
			let temp3 = String(params["Damage Progression"]);
		for (let i=0;i<temp3.length;i++){
			importedDmgProgression.push(String(temp3[i]))
		}
	userSetDmgProgression = Number(params["Select Damage Default"]);
	uSDP = userSetDmgProgression;

	expGainPerSkillUse = Number(params["skillExpPerUse"]);
	eGPSU = expGainPerSkillUse;
	skillExpReset = params["Skill Exp Reset?"];


	//$gameVariables.setValue(13, [])
	Impo = $gameVariables.value(Number(params("Storage")))||[];
	console.log(Impo);

	 impSkillName = "Schneeball";
	 impCharName = "Nedwal";

		 if (Impo /*&& Impo !=""*/|| Impo === []) {
		Expo = Impo;
		} else {Console.log("Irregularities with imported array or variable")}

//	}
}
/*
var formula1 = []
var variablesn1 = String(params['variables n1']).split(',');
var variablesabcxyz1 = String(params['variables a b c x y z1']).split(',');
var code1 = String(params['code1']);


var a=Number(variablesabcxyz1[0]);
var b=Number(variablesabcxyz1[1]);
var c=Number(variablesabcxyz1[2]);
var x=Number(variablesabcxyz1[3]);
var y=Number(variablesabcxyz1[4]);
var z=Number(variablesabcxyz1[5]);


var nLow=Number(variablesn1[0]);
var nHigh=Number(variablesn1[1])
var n


if(command == "createSkillLevelArray")
{
for (n=nLow;n<nHigh;n++)
		{		
			formula1.push(eval(code1));
		}
console.log(formula1);
}
*/

//my stuff to be changed

/*
 char1= "Nick"
 char1Id= "001"
 char2= "Fulmen"
 char2Id = '002'
 char12= "Flower"
 char12Id = "012"
 spellOneName = "Fire 3";
 spellTwoName = "ICE 5";
 spellThreeName = "Lightning V";
 spellOneId = "025";
 spellTwoId = "225";
 spellThreeId = "425";
 */
 /*importedSkillProgressions = [[10,20,30,40,50,60,70,100,200,400,600,800,1000,2000,5000,10000,16000,25000,40000,60000],[50,100,150,200,250],[1000,2000,3000,4000,5000],[45,45,45,45,45],]
 iSP = importedSkillProgressions;
 importedDmgProgression = [[100,104,108,112,116,120,123,129,132,134,136,138,140,142,144,145,146,147,148,150],[80,85,90,95,100,105,110,112,114,116,118,120,121,122,123,124,125],[80,90,100,110,120,125],[109,119,129,139,149,159]]
 iDP = importedDmgProgression;
 importedLevelNameProgression = [["dreadful","bad","untrained","inept","poor","basic","average","talented","trained","practiced","capable","proficient","versed","competent","good","skilled","professional","adept","knowledgeable","expert","cognizant","erudite","masterful","excellent","exceptional","possessed","singular","epic","heroic","legendary","insurmountable","infallible","unbelievable","godlike","unreal"],["Apprentice","Journeyman","Master"],["Beginner", "Intermediate", "Advanced", "Perfect"], ["Novice","Neophyte","Practitioner","Magus","Grandmage"]];
 iNP = importedLevelNameProgression;
*/
//handles if the spell exp reset to 0 after each lvl up. 0 means always to 0; 1 means will be reducedd by the former levels xp requirement, 2 means no or never ;
 
 // generalExportContainer = [];
 // Expo = generalExportContainer;
 /* Impo = [{ _id: '002', _name: 'Fulmen', _skills: [] },
			{ _id: '012', _name: 'Flower', _skills: [] },
			{ _id: '102', _name: 'Peter', _skills: [] },
			{ _id: '312', _name: 'Darkknight', _skills: [] }];
 
 iChar = {};
 eChar = {};
 iSpell = {};
 eSpell = {};

 userSetSkillProgression = 1
 userSetDmgProgression = 1
 userSetLvlNameProgression = 2
 uSSP = userSetSkillProgression
 uSDP = userSetDmgProgression
 uSNP = userSetLvlNameProgression
*/




else if (deBugModeOn === true) {													//use this to debug in text editor (run in text editor)

 char1= "Nick"
 char1Id= "001"
 char2= "Fulmen"
 char2Id = '002'
 char12= "Flower"
 char12Id = "012"
 spellOneName = "Fire 3";
 spellTwoName = "ICE 5";
 spellThreeName = "Lightning V";
 spellOneId = "025";
 spellTwoId = "225";
 spellThreeId = "425";
 importedSkillProgressions = [[10,20,30,40,50,60,70,100,200,400,600,800,1000,2000,5000,10000,16000,25000,40000,60000],[50,100,150,200,250],[1000,2000,3000,4000,5000],[45,45,45,45,45],]
 iSP = importedSkillProgressions;
 importedDmgProgression = [[100,104,108,112,116,120,123,129,132,134,136,138,140,142,144,145,146,147,148,150],[80,85,90,95,100,105,110,112,114,116,118,120,121,122,123,124,125],[80,90,100,110,120,125],[109,119,129,139,149,159]]
 iDP = importedDmgProgression;
 importedLevelNameProgression = [["dreadful","bad","untrained","inept","poor","basic","average","talented","trained","practiced","capable","proficient","versed","competent","good","skilled","professional","adept","knowledgeable","expert","cognizant","erudite","masterful","excellent","exceptional","possessed","singular","epic","heroic","legendary","insurmountable","infallible","unbelievable","godlike","unreal"],["Apprentice","Journeyman","Master"],["Beginner", "Intermediate", "Advanced", "Perfect"], ["Novice","Neophyte","Practitioner","Magus","Grandmage"]];
 iNP = importedLevelNameProgression;
 expGainPerSkillUse = 11;
 eGPSU = expGainPerSkillUse;
//handles if the spell exp reset to 0 after each lvl up. 0 means always to 0; 1 means will be reducedd by the former levels xp requirement, 2 means no or never ;
 skillExpReset = 1;
 generalExportContainer = [];
 Expo = generalExportContainer;
 Impo = [{ _id: '002', _name: 'Fulmen', _skills: [] },
			{ _id: '012', _name: 'Flower', _skills: [] },
			{ _id: '102', _name: 'Peter', _skills: [] },
			{ _id: '312', _name: 'Darkknight', _skills: [] }];
 /*iChar = {};
 eChar = {};
 iSpell = {};
 eSpell = {};
*/
 userSetSkillProgression = 1
 userSetDmgProgression = 1
userSetLvlNameProgression = 1

 uSSP = userSetSkillProgression
 uSDP = userSetDmgProgression
 uSNP = userSetLvlNameProgression

 impSkillName = "Schneeball";
 impCharName = "Nedwal";


};

//actual code


//Skill Constructor

if (Impo /*&& Impo !=""*/|| Impo === []) {
	Expo = Impo;
} else {Console.log("Irregularities with imported array or variable")}


class Skill {
	constructor(id,name=impSkillName,expProg=uSSP,dmgProg=uSDP,lvlNameProg=uSNP){
		this._name=name;
		this._id=id;
		this._lvl=1;

		this._exp=0;
		this._expProgression=expProg;
		this._currentExpGoal=99999;
		
		this._dmgProgression=dmgProg;
		this._currentDmgMultiplicator=100;
		
		this._lvlNameProgression=lvlNameProg;
		this._currentLvlName=iNP[lvlNameProg][0];

		this._overallUsage=0;
		this._recentUsage=0;
	}

	get name(){
		return this._name;
	}
	get id(){
		return this._id;
	}
	get exp(){
		return this._exp;
	}
	get lvl(){
		return this._lvl;
	}
	get dmgMultiplicator(){
		return this._dmgMultiplicator;
	}
	get lvlName(){
		return this._name[this.lvl-1];
	}
	get allUse(){
		return this._overallUsage;
	}
	get nowUse(){
		return this._recentUsage;
	}


	set addSkillExp(num){
		if (typeof num === "number"){
			this._exp+=num;
			this.levelUp();
		}	else {
			console.log("Can't add skill exp that is not a number.")
			}
		}
	set level(num){
		if (typeof num === "number" && num>0){
			this._lvl=num;
		}	else {
			console.log("Can't set skill level that is not a number or lower than 1.")
			}
		}
	set addLevel(num){
		if (typeof num === "number" && (this._lvl+num)>0){
			this._lvl+=num;
		}	else {
			console.log("Can't add skill level that is not a number or any number reducing skill level below 1.")
			}
		}

	set expProgression(num){

		if ( typeof num === "number"&& num>=0 && num <= iSP.length){
			this._expProgression=num;
			this._currentExpGoal=iSP[num][this._lvl-1];
		} else {
			console.log("This is not a valid Skill progression.")
			}
		}
	set dmgProgression(num){

		if ( typeof num === "number"&& num>=0 && num <= iDP.length){
			this._dmgProgression=num;
			this._currentDmgMultiplicator=iDP[num][this._lvl-1];
		} else {
			console.log("This is not a valid Damage progression.")
			}
		}
	set lvlName(num){

		if ( typeof num === "number"&& num>=0 && num <= iNP.length){
			this._lvlNameProgression=num;
			this._currentLvlName=iNP[num][this._lvl-1];
		} else if ( typeof num === "number"&& num===0){
			this._lvlNameProgression=num;
			this._currentLvlName=this._lvl;
		} else {
			console.log("This is not a valid Skill-Level-Name progression.")
			}
		}
	usageUp(){
		this._overallUsage++;
		this._recentUsage++;
	}


	  levelUp(){
		if (this._exp >= this._currentExpGoal){
		this._lvl++;
		
			if (Number(skillExpReset)===0 || String(skillExpReset)==="Always reset to 0"){
				this._exp=0
			} else if (Number(skillExpReset)===1 || String(skillExpReset)==="Remove Lvlup amount") {
				if (this._exp >= this._currentExpGoal) {
					this._exp-=this._currentExpGoal}
			} else if (Number(skillExpReset)===2  || String(skillExpReset)==="Keep all Skill Xp"){
			} else {console.log("No valid setting for skillExpReset. use a number between 0 and 2.")
					}
			this._currentExpGoal=iSP[this._expProgression][this._lvl-1];
			this._currentDmgMultiplicator=iDP[this._dmgProgression][this._lvl-1];
			this._currentLvlName=iNP[this._lvlNameProgression][this._lvl-1];
		}
			if (this._exp >= this._currentExpGoal){
			this.levelUp();
		}
	}

	  cast(){
			this._exp+=expGainPerSkillUse;
			this._overallUsage++;
			this._recentUsage++;
			if (this._exp>=this._currentExpGoal) {
				this.levelUp();
			}
		}
	
}
	

// Character Constructor

class Char {
	constructor(id,name="NoName"){
		this._id=id;
		this._name=name;
		this._skills=[];
	}
	get name(){
		return this._name;
	}
	get id(){
		return this._id;
	}

	newSkill(skillId,skillName){
		var newSk = new Skill(skillId,skillName)
		this._skills.push(newSk);
	}
}


//checking for existing skill on this Char
let skillExpoPos;
const checkSkillExists = (target,skillId,skillName=impSkillName,expProg=uSSP,dmgProg=uSDP,lvlNameProg=uSNP)=>{
	let skillAlreadyExists=false;
	
		if (target._skills.length ===0) {
		}	else {
				for (let i=0;i<target._skills.length;i++){
					if (skillAlreadyExists === true){
						break;
					}else if (target._skills[i]._id === skillId){
						skillAlreadyExists = true;
						skillExpoPos=i;												//Skill exists - what happens next? xp up usage up...?
						break; 
					}
				}
		}
		if (skillAlreadyExists ===false){
			skillExpoPos=0;
			target._skills.unshift(new Skill(skillId,skillName))							//Skill is created - what happens next? xp up usage up...?
		}
}







// checking for existing Characters
let charExpoPos;
const checkCharExists=(charId, charName=impCharName) =>{
		        
		let charAlreadyExists = false;
		                                               //console.log(Expo)
	for (let i = 0;i<Expo.length;i++){
		//iChar = Expo[i]
		
		
		if (charAlreadyExists===true){							//console.log("CharAlreadyExists true")
			break;
		} else /* (charAlreadyExists===false)*/{				//	console.log("CharAlreadyExists false")
			if (/*iChar*/Expo[i]._id === charId ){							//console.log("CharIds match")	//parseInt() changes Sting to Number      parseInt(charId)
			//console.log(iChar._id + "    "+charId );
			//console.log("This char already exists")
			charAlreadyExists = true;
			charExpoPos = i;
			break;
			} else {
//				console.log("Char Ids do not match on Expo "+ i)
			}
		} //console.log("Finished cycle "+ i)
	}

	if (charAlreadyExists ===true) {//console.log("Char should be in pos "+ charExpoPos)
		} else {
			charExpoPos=0;
			Expo.unshift(new Char(charId,charName))				//this line creates the new Char if it doesnt exist b4
		}
	
}

const skillUse = (charId,skillId) =>{
	
	checkCharExists(charId);
	checkSkillExists(Expo[charExpoPos],skillId);
	Expo[charExpoPos]._skills[skillExpoPos].cast();
//	eSpell = Expo[charExpoPos]._skills[skillExpoPos]
}

// TEST AREA BELOW
//const firstChar = new Char(char1Id,char1);
//firstChar.newSkill("011","Fluffball")
//firstChar.newSkill(spellOneId,spellOneName);
//console.log(firstChar)
//const s2Char = new Char(char2Id,char2);
//console.log(s2Char)
//const t12Char = new Char(char12Id,char12);
//console.log(t12Char)
checkCharExists(char2Id);
checkCharExists("102");checkCharExists("102");checkCharExists("132");checkCharExists("007");checkCharExists("132");
console.log(Expo)
//console.log(iChar);
checkSkillExists(Expo[2],"022");
checkSkillExists(Expo[5],"122");
checkSkillExists(Expo[2],"022");
checkSkillExists(Expo[2],"122");
checkSkillExists(Expo[5],"122");
checkSkillExists(Expo[3],"002");

console.log(Expo)
Expo[2]._skills[1].expProgression = 0
Expo[2]._skills[1].addSkillExp=70000

skillUse("002","022")
skillUse("002","022")
skillUse("002","022")
skillUse("014","0202")
console.log(Expo[0]._skills)

//console.log(Expo.length)
/*
firstChar.newSkill(spellOneId,spellOneName);
const castIce = new Skill(spellTwoId,spellTwoName);
const castLightning = new Skill(spellThreeId,spellThreeName);
castFire.expProgression=2
castFire.dmgProgression=3
castFire.lvlName = 3
castFire.addSkillExp = 7912
castFire.levelUp()
castFire.levelUp()
//console.log(castFire);
//console.log(castIce)
//console.log(castLightning)
//castFire.levelUp=1
//castFire.levelUp=5
//console.log(castFire.lvl);
castFire.cast();
console.log(castFire.exp);
console.log(castFire);
castFire.cast();
console.log(castFire.exp);
console.log(castFire.lvl);
castFire.cast();
console.log(castFire.exp);
console.log(castFire.lvl);
//castFire.cast();
//console.log(castFire.exp);
//console.log(castFire.lvl);
//castFire.cast=1;
//console.log(castFire.exp);
//console.log(castFire.lvl);
//castFire.cast=1;
//console.log(castFire.exp);

Expo.push(castFire)
Expo.push(castIce)
Expo.push(castFire)
Expo.push(castLightning)
console.log(Expo[3].id)*/
//console.log(Expo[4]._name)
//console.log(char2Id);
//console.log(Impo.length)



}) ();
