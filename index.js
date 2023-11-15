//let btnRegister = document.querySelector("#btnRegister");
//console.log(btnRegister);

function registerUser() {
    let txtName = document.querySelector("#txtRegisterName");
    let txtEmail = document.querySelector("#txtRegisterEmail");
    let txtPassword = document.querySelector("#txtRegisterPassword");
    let txtConfirmPassword = document.querySelector("#txtRegisterConfirmPassword")
    const genderRadios = document.getElementsByName('radioGender');
    let selectYearLevel = document.querySelector('#selectRegisterYearLevel');
    let txtAddress = document.querySelector('#txtRegisterAddress')
    let floatingDate = document.querySelector('#txtRegisterBirthdate'
    );

    let selectedGender;
    for (const radio of genderRadios) {
      if (radio.checked) {
        selectedGender = radio.value;
      }
    }

    const selectedOption = selectYearLevel.options[selectYearLevel.selectedIndex];

    const selectedYearLevel = selectedOption.value;

    let user = {
    name: txtName.value,
    email: txtEmail.value,
    password: txtPassword.value,
    confirmPassword: txtConfirmPassword.value,
    gender: selectedGender,
    yearLevel: selectedYearLevel,
    address: txtAddress.value,
    birthdate: floatingDate.value
    };

    console.log("Button Register is clicked.", user);

    if (!user.email) {
        return alert("Email is required.");
    } else if (!user.name) {
        return alert("Name is required.");
    } else if (!user.password || !user.confirmPassword) {
        return alert("Password is required.");    
    } else if (user.password != user.confirmPassword) {
        return alert("Passwords do not match.");
    } else if (!user.gender) {
        return alert('Gender is required.')
    } else if (!user.address) {
        return alert('Address is required.')
    } else if (!user.birthdate) {
        return alert('Birthdate is required.')
    }
    localStorage.setItem("user", JSON.stringify(user));
}

btnRegister.onclick = () => {
	registerUser();
};