const passwordElement = document.getElementById("password");

const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "~!#$%^&*()_+{}[]|/<>";

const allCharacters = upperCase + lowerCase + numbers + specialCharacters;


const generatePassword = () => {

    let password = "";


    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while(password.length < passwordLength){

        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordElement.value = password;
}


const copyFunction = () => {

    passwordElement.select();

    // document.execCommand("copy");

    navigator.clipboard.writeText(passwordElement.value);

    alert("Copied ");

}

