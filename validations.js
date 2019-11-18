
var fname = document.getElementById("fname_id");
var lname = document.getElementById("lname_id");
var dob = document.getElementById("dob_id");
var mail = document.getElementById("email_id");
var pwd = document.getElementById("password_id");
var cpwd = document.getElementById("cpassword_id");

function fnameValidation( ){
	// alert("fnameValidation");
	var letters=/^[A-z\.]+$/;
	var check = (fname.value).match(letters);
	//alert(check);
	// alert(fname.value);
	if(check==null || check==""){
		// alert("if fname");
		document.getElementById("sfname").innerHTML="enter valid name";
		// fname.focus();
		return false;
	}
	else{
		// alert("else fname");
		document.getElementById("sfname").style.display="none";
		return true;
	}
}

function lnameValidation( ){
	// alert("lnameValidation");
	var letters=/^[A-z\.]+$/;
	var check = (lname.value).match(letters);
	// alert(lname.value);
	// alert(check);
	if(check==null){
		//alert("if lname");
		document.getElementById("slname").innerHTML="enter valid name";
		// lname.focus();
		return false;
	}
	else{
		//alert("else lname");
		document.getElementById("slname").style.display="none";
		return true;
	}
}

function dobValidation( ){
	// alert("dobValidation");
	// alert(dob.value);

	var pattern =/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/;
	if(pattern.test(dob.value)){
		//alert("if dob");
		document.getElementById("sdob").style.display="none";
		return true;
	}
	else{
		//alert("else dob");
		document.getElementById("sdob").innerHTML="please enter date yyyy/mm/dd";
		// dob.focus();
		return false;
	}
	/*
	if(dob.value == null || dob.value == ""){
		document.getElementById("sdob").innerHTML="please enter date";
		// dob.focus();
		return false;
	}
	else{
		document.getElementById("sdob").style.display="none";
		return true;
	}*/
}

function emailVaildation( ){
	// alert("emailVaildation");
    var pattern=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	// alert(mail.value);
	if(pattern.test(mail.value)){
		//alert("if email");
		document.getElementById("semail").style.display="none";
		return true;
	}
	else{
		//alert("else email");
		document.getElementById("semail").innerHTML="please enter valid email";
		// mail.focus();
		return false;
	}
}

function passwordVaildation( ){
	// alert("passwordVaildation");
	// alert(pwd.value);
	if(pwd.value == null || pwd.value == ""){
		//alert("if password");
		document.getElementById("spassword").innerHTML="password can't be empty";
		// pwd.focus();
		return false;
	}
	else if((pwd.value).length<6){
		//alert("else if password");
		document.getElementById("spassword").innerHTML="password atleast 6 characters";
		// pwd.focus();
		return false;
	}
	else{
		//alert("else password");
		document.getElementById("spassword").style.display="none";
		return true;
	}
}

function cpasswordValidation( ){
	// alert("cpasswordValidation");
	// alert(cpwd.value);
	if(cpwd.value != pwd.value){
		//alert("else if confirm password");
		document.getElementById("scpassword").innerHTML="wrong password enter";
		// cpwd.focus();
		return false;
	}
	else{
		//alert("else confirm password");
		document.getElementById("scpassword").style.display="none";
		return true;
	}
}

function allValidate( ){

	fname.addEventListener("blur", fnameValidation, true);
	lname.addEventListener("blur", lnameValidation, true);
	dob.addEventListener("blur", dobValidation, true);
	mail.addEventListener("blur", emailVaildation, true);
	pwd.addEventListener("blur", passwordVaildation, true);
	cpwd.addEventListener("blur", cpasswordValidation, true);

	sessionStorage.setItem("firstName", fname.value);
	sessionStorage.setItem("lastName", lname.value);
	sessionStorage.setItem("dateOfBirth", dob.value);
	sessionStorage.setItem("email", mail.value);
	sessionStorage.setItem("password", pwd.value);

	// alert(fname.value+"\n"+lname.value+"\n"+dob.value+"\n"+mail.value+"\n"+pwd.value);
	// return true;

}

function getValues( ){
	// alert("getValues");
	// alert(displayValues);
	// alert(sessionStorage);
	var regValues = "<table border='3' align='center' class='valuesTable'>";

		  regValues += "<tr>";
		  regValues += "<th class='valuesHeader' >First Name</th>";
		  regValues += "<th class='valuesHeader' >Last Name</th>";
		  regValues += "<th class='valuesHeader' >Date Of Birth</th>";
		  regValues += "<th class='valuesHeader' >Email</th>";
		  regValues += "<th class='valuesHeader' >Password</th>";
		  regValues += "</tr>";

		  regValues += "<tr>";
		  regValues += "<td class='valuesData' height='100'>"+sessionStorage.getItem("firstName")+"</td>";
		  regValues += "<td class='valuesData' height='100'>"+sessionStorage.getItem("lastName")+"</td>";
		  regValues += "<td class='valuesData' height='100'>"+sessionStorage.getItem("dateOfBirth")+"</td>";
		  regValues += "<td class='valuesData' height='100'>"+sessionStorage.getItem("email")+"</td>";
		  regValues += "<td class='valuesData' height='100'>"+sessionStorage.getItem("password")+"</td>";
		  regValues += "</tr>";

		var display = document.getElementById("displayId");
		display.innerHTML = regValues;
}
