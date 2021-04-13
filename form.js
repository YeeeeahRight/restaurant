function checkParameters() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let partyNumber = document.getElementById('partyNumber').value;
    let submitButton = document.getElementById('submitButton');
    if (name.length !== 0 && email.length !== 0 
		&& date.length !== 0 && partyNumber.length !== 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function submitForm(e) {
	let result = window.confirm("Вы действительно хотите отправить эти данные?");
	if (result) {
		let name = document.getElementById('name').value;
		let email = document.getElementById('email').value;
		let date = document.getElementById('date').value;
		let partyNumber = document.getElementById('partyNumber').value;
		alert("Ваши данные:\nИмя: " + name + "\nПочта: " + email + "\nДата: " 
		+ date + "\nНомер: " + partyNumber);
		e.returnValue = true;
	} else {
		e.returnValue = false;
	}
}