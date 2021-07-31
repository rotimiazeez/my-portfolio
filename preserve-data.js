const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');

const values = [inputName, inputEmail, inputMessage];

function returnAllData() {
  const obj = {};

  for (let i = 0; i < values.length; i += 1) {
    obj[values[i].id] = values[i].value;
  }

  return obj;
}

function setForm() {
  const formData = JSON.parse(localStorage.getItem('form_data'));

  inputName.value = formData.name;
  inputEmail.value = formData.email;
  inputMessage.value = formData.message;
}

function setStorage() {
  localStorage.setItem('form_data', JSON.stringify(returnAllData()));
}

if (!localStorage.getItem('form_data')) {
  setStorage();
} else {
  setForm();
}

inputName.setAttribute('onchange', 'setStorage()');
inputEmail.setAttribute('onchange', 'setStorage()');
inputMessage.setAttribute('onchange', 'setStorage()');