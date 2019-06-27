var questionnaire_=document.getElementById("questionnaire_");
var delivery_=document.getElementById("delivery_");
var morningcall_=document.getElementById("morningcall_");
var bring_food_=document.getElementById("bring_food_");
var bring_medicine_=document.getElementById("bring_medicine_");
var publish_task_=document.getElementById("publish_task_");

questionnaire_.disabled=false;
questionnaire_.style.display="";
delivery_.disabled=true;
delivery_.style.display="none";
morningcall_.disabled=true;
morningcall_.style.display="none";
bring_food_.disabled=true;
bring_food_.style.display="none";
bring_medicine_.disabled=true;
bring_medicine_.style.display="none";
publish_task_.disabled=true;
publish_task_.style.display="none";
function TaskHome(){
	window.location.href="TaskHome.html";
}

function MyHome(){
	window.location.href="MyHome.html";
}

function questionnaire(){
	questionnaire_.disabled=false;
	questionnaire_.style.display="";
	delivery_.disabled=true;
	delivery_.style.display="none";
	morningcall_.disabled=true;
	morningcall_.style.display="none";
	bring_food_.disabled=true;
	bring_food_.style.display="none";
	bring_medicine_.disabled=true;
	bring_medicine_.style.display="none";
	publish_task_.disabled=true;
    publish_task_.style.display="none";
}

function delivery(){
	questionnaire_.disabled=true;
	questionnaire_.style.display="none";
	delivery_.disabled=false;
	delivery_.style.display="";
	morningcall_.disabled=true;
	morningcall_.style.display="none";
	bring_food_.disabled=true;
	bring_food_.style.display="none";
	bring_medicine_.disabled=true;
	bring_medicine_.style.display="none";
	publish_task_.disabled=true;
    publish_task_.style.display="none";
}

function morningcall(){
	questionnaire_.disabled=true;
	questionnaire_.style.display="none";
	delivery_.disabled=true;
	delivery_.style.display="none";
	morningcall_.disabled=false;
	morningcall_.style.display="";
	bring_food_.disabled=true;
	bring_food_.style.display="none";
	bring_medicine_.disabled=true;
	bring_medicine_.style.display="none";
	publish_task_.disabled=true;
    publish_task_.style.display="none";
}

function bring_food(){
	questionnaire_.disabled=true;
	questionnaire_.style.display="none";
	delivery_.disabled=true;
	delivery_.style.display="none";
	morningcall_.disabled=true;
	morningcall_.style.display="none";
	bring_food_.disabled=false;
	bring_food_.style.display="";
	bring_medicine_.disabled=true;
	bring_medicine_.style.display="none";
	publish_task_.disabled=true;
    publish_task_.style.display="none";
}

function bring_medicine(){
	questionnaire_.disabled=true;
	questionnaire_.style.display="none";
	delivery_.disabled=true;
	delivery_.style.display="none";
	morningcall_.disabled=true;
	morningcall_.style.display="none";
	bring_food_.disabled=true;
	bring_food_.style.display="none";
	bring_medicine_.disabled=false;
	bring_medicine_.style.display="";
	publish_task_.disabled=true;
    publish_task_.style.display="none";
}

function publish_task(){
	questionnaire_.disabled=true;
	questionnaire_.style.display="none";
	delivery_.disabled=true;
	delivery_.style.display="none";
	morningcall_.disabled=true;
	morningcall_.style.display="none";
	bring_food_.disabled=true;
	bring_food_.style.display="none";
	bring_medicine_.disabled=true;
	bring_medicine_.style.display="none";
	publish_task_.disabled=false;
    publish_task_.style.display="";
}