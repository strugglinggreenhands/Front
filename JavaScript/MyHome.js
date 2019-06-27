var account_message=document.getElementById("account_message");
var my_task=document.getElementById("my_task");
var my_message=document.getElementById("my_message");
var account_security=document.getElementById("account_security");
var log_out=document.getElementById("log_out");

account_message.disabled=false;
account_message.style.display="";
my_task.disabled=true;
my_task.style.display="none";
my_message.disabled=true;
my_message.style.display="none";
account_security.disabled=true;
account_security.style.display="none";
log_out.disabled=true;
log_out.style.display="none";
function TaskHome(){
	window.location.href="TaskHome.html";
}

function MyHome(){
	window.location.href="MyHome.html";
}

function account_message_(){
	account_message.disabled=false;
	account_message.style.display="";
	my_task.disabled=true;
	my_task.style.display="none";
	my_message.disabled=true;
	my_message.style.display="none";
	account_security.disabled=true;
	account_security.style.display="none";
	log_out.disabled=true;
	log_out.style.display="none";
}

function my_task_(){
	account_message.disabled=true;
	account_message.style.display="none";
	my_task.disabled=false;
	my_task.style.display="";
	my_message.disabled=true;
	my_message.style.display="none";
	account_security.disabled=true;
	account_security.style.display="none";
	log_out.disabled=true;
	log_out.style.display="none";
}

function my_message_(){
	account_message.disabled=true;
	account_message.style.display="none";
	my_task.disabled=true;
	my_task.style.display="none";
	my_message.disabled=false;
	my_message.style.display="";
	account_security.disabled=true;
	account_security.style.display="none";
	log_out.disabled=true;
	log_out.style.display="none";
}

function account_security_(){
	account_message.disabled=true;
	account_message.style.display="none";
	my_task.disabled=true;
	my_task.style.display="none";
	my_message.disabled=true;
	my_message.style.display="none";
	account_security.disabled=false;
	account_security.style.display="";
	log_out.disabled=true;
	log_out.style.display="none";
}

function log_out_(){
	account_message.disabled=true;
	account_message.style.display="none";
	my_task.disabled=true;
	my_task.style.display="none";
	my_message.disabled=true;
	my_message.style.display="none";
	account_security.disabled=true;
	account_security.style.display="none";
	log_out.disabled=false;
	log_out.style.display="";
}

function logout_check(){
	window.location.href="HomePage.html";
}