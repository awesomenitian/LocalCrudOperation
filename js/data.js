var EmpArray = [];
var selectedIndex = -1;

function init(){
	document.getElementById("tableRowsData").innerHTML="";
	if(localStorage.empRecord){
		EmpArray = JSON.parse(localStorage.empRecord);
		for(var i=0; i<EmpArray.length; i++){
			prepareTableCell(i, EmpArray[i].firstname, EmpArray[i].lastname, EmpArray[i].gender, EmpArray[i].email, EmpArray[i].phone, EmpArray[i].state);
		}
	}
}

function onRegister(){
	var firstname = document.getElementById("fname").value;
	var lastname = document.getElementById("lname").value;
	var gender = document.getElementById("gender").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var state = document.getElementById("state").value;
	var empObj = { firstname: firstname, lastname: lastname, gender: gender, email: email, phone: phone, state: state};
	if(selectedIndex === -1){
		EmpArray.push(empObj);
		$('.close').trigger('click');
	}
	else{
		EmpArray.splice(selectedIndex, 1, empObj);
		$('.close').trigger('click');
	}
	localStorage.empRecord = JSON.stringify(EmpArray);
	init();
	emptyValue();
}

function emptyValue(){
	selectedIndex = -1;
	document.getElementById("fname").value = '';
	document.getElementById("lname").value = '';
	document.getElementById("gender").value = '';
	document.getElementById("email").value = '';
	document.getElementById("phone").value = '';
	document.getElementById("state").value = '';
	document.getElementById("submit").innerHTML = "Add";
	$('.modal-title').text("Add New Employee");
	$('.close').trigger('click');
}

function prepareTableCell(index, firstname, lastname, gender, email, phone, state){
	var table = document.getElementById("tableRowsData");
	var row = table.insertRow();
	var firstNameCell = row.insertCell(0);
	var lastNameCell = row.insertCell(1);
	var genderCell = row.insertCell(2);
	var emailCell = row.insertCell(3);
	var phoneCell = row.insertCell(4);
	var stateCell = row.insertCell(5);
	var actioneCell = row.insertCell(6);
	
	
	firstNameCell.innerHTML = firstname;
	lastNameCell.innerHTML = lastname;
	genderCell.innerHTML = gender;
	emailCell.innerHTML = email;
	phoneCell.innerHTML = phone;
	stateCell.innerHTML = state;
	actioneCell.innerHTML = '<button class="edit"><i class="fa fa-pencil" onclick="editTableRow('+ index +')"></i></button>  <button class="delete"><i class="fa fa-remove" onclick="deleteTableRow('+ index +')"></i></button>'
}

function editTableRow(index){
	selectedIndex = index;
	$("#AddInfoModal").modal();
	var empObj = EmpArray[index];
	document.getElementById("fname").value = empObj.firstname;
	document.getElementById("lname").value = empObj.lastname;
	document.getElementById("gender").value = empObj.gender;
	document.getElementById("email").value = empObj.email;
	document.getElementById("phone").value = empObj.phone;
	document.getElementById("state").value = empObj.state;
	document.getElementById("submit").innerHTML = "Update";
	$('.modal-title').text("Update Employee Detail");
}

function deleteTableRow(index){
	var table = document.getElementById("tableData");
	table.deleteRow(index+1);
	EmpArray.splice(index,1);
	localStorage.empRecord = JSON.stringify(EmpArray);
	init();
}