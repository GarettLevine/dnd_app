/**********************************************************
        RANDOM CHARACTER SELECT/CREATE FUNCTIONS
**********************************************************/

//RANDOM ARRAY PICKER
function randomArrayPick(arrayName) {
 arrayPick = arrayName[Math.floor(Math.random() * arrayName.length)];
 return arrayPick;
}

//RANDOM OBJECT KEY PICKER
function randomObjKeyPicker(obj) {
  var keyArray = Object.keys(obj);
  var arrayPick = randomArrayPick(keyArray);
  return arrayPick;
}

//NAME GENERATOR
function nameCreator(array1, array2, array3) {
   var n1 = randomArrayPick(array1);
   var n2 = randomArrayPick(array2);
   var n3 = randomArrayPick(array3);
   randomName = n1.concat(n2, n3);
   return randomName;
}

//DETECT IF NAME IS SELECTED
function namePicker() {
  if(!$('#npc_FormName').val()){
    return nameCreator(fnBeginning, fnMiddle, fnEnd);
  } else {
    return $('#npc_FormName').val();
  }
}

//DETECT IF Trait IS SELECTED
function traitDetect(idSelect, array, randomFunction) {
  if($(idSelect).val() === "random") {
    return randomFunction(array);
  } else {
    return $(idSelect).val();
  }
}

//ability detect
function abilityDetect() {
  if(npcCharacter.lowAbility === npcCharacter.highAbility) {
    return randomObjKeyPicker(lowAbilityObj);
  } 
}

//NPC CREATION OBJECT
function npcCharacterCreate() {
  var alignment = traitDetect('#npc_Alignment_Selection', alignmentIdealsObj, randomObjKeyPicker);
  var highAbility = traitDetect('#npc_HighAbility_Selection', highAbilityObj, randomObjKeyPicker);
  var lowAbility = traitDetect('#npc_LowAbility_Selection', lowAbilityObj, randomObjKeyPicker);
  npcCharacter = {
    firstName: namePicker(),
    race: traitDetect('#npc_Race_Selection', npcRace, randomArrayPick),
    feature: randomArrayPick(npcFeature),
    highAbility: highAbility,
    lowAbility: lowAbility,
    talent: randomArrayPick(npcTalents),
    mannerism: randomArrayPick(npcMannerisms),
    interactionTrait: randomArrayPick(npcInteractionTraits),
    alignment: alignment,
    ideal: randomArrayPick(alignmentIdealsObj[alignment]),
    bond: randomArrayPick(npcBonds),
    flaw: randomArrayPick(npcFlawSecret)
  };
}

/**********************************************
              FORM SELECTION
**********************************************/
//SELECTION VARIABLE CREATOR
function selectionCreator(array, selectID) {
  var htmlInput = '<option value="random">Random</option>';
  var htmlInput;
  $.each(array, function(i, arrayValue) {
    htmlInput += '<option value="';
    htmlInput += arrayValue + '">';
    htmlInput += arrayValue;
    htmlInput += '</option>';
    $(selectID).html(htmlInput);
   }); //end of race_Selection.each
};

//APPEND SELECTIONS TO THE PAGE
selectionCreator(npcRace, "#npc_Race_Selection");
selectionCreator(Object.keys(highAbilityObj), "#npc_HighAbility_Selection");
selectionCreator(Object.keys(lowAbilityObj), "#npc_LowAbility_Selection");
selectionCreator(Object.keys(alignmentIdealsObj), "#npc_Alignment_Selection");


/**********************************************
             DOM NAVIGATION
**********************************************/
//APPEND CHARACTER TO PAGE
function appendCharacterToPage() {
  $('#npc_container').css("display", "inherit");
  $("#npc_name").html(npcCharacter.firstName);
  $("#npc_race").html(npcCharacter.race);
  $("#npc_feature").html(npcCharacter.feature);
  $("#npc_highAbility").html(npcCharacter.highAbility);
  $("#npc_lowAbility").html(npcCharacter.lowAbility);
  $("#npc_talent").html(npcCharacter.talent);
  $("#npc_mannerisms").html(npcCharacter.mannerism);
  $("#npc_interaction").html(npcCharacter.interactionTrait);
  $("#npc_alignment").html(npcCharacter.alignment + ": " + npcCharacter.ideal );
  $("#npc_bond").html(npcCharacter.bond);
  $("#npc_flaw").html(npcCharacter.flaw);
}
//check if form is visible
function formVisibility() {
  return $(".form_container").is(":visible");
}
//reser form if not visible
function formReset() {
  if(formVisibility() === false) {
    $("#form")[0].reset();
  }
}
//change button text if visiblenot visible
function buttonTextChange(message1, message2, buttonSelect) {
  if(formVisibility()) {
    $(buttonSelect).html(message1);
  } else {
    $(buttonSelect).html(message2);
  }
}

//BUTTON CLICKS
$('#submitButton').click( function() {
  event.preventDefault();
  npcCharacterCreate();
  appendCharacterToPage();
});
 //end of submitButton click
$('#generate_button').click( function() {
  npcCharacterCreate();
  appendCharacterToPage();
}); //end of click

$('#preset_button').click( function() {
  $(".form_container").fadeToggle("200", function() {
    //define button layout
    var buttonLayoutStyle = $(".button_container").css("justify-content", "space-between");
    buttonLayoutStyle;
    //hide generate button
    $("#generate_button").fadeToggle("200", function() 
    {
      if (formVisibility() === true) {
        //change button layout
      $(".button_container").css("justify-content", "flex-end");
    } else {
        //maintain origional layout
      buttonLayoutStyle;
    }
  }); //end of fadeToggle
    buttonTextChange("Pick Less Things", "Pick a few Things", '#preset_button');
    formReset();
  }); //end of toggle
}); //end of click