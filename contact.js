"strict mode";

const defaultSettings = {
    h3 : {},
    status: "Veuillez faire un choix",

};

const contactsList = [{
        nom: "Lévisse",
        prenom: "Carole"
    },
    {
        nom: "Nelson",
        prenom: "Mélodie"
    }
];

const btnValider = document.getElementsByClassName("valider")[0];
const btnAnnuler = document.getElementsByClassName("annuler")[0];
const input = document.getElementsByTagName("input")[0];

//Listening to input
let contactName, contactSurname, inputValue;
let eventState = "forChoiceInput";


function main(){
    /*
    if(eventState == "forChoiceInput" && input.value in ["0", "1", "2"]){
        
    }*/
    let inputValue = input.value.trim(); //take the current value of the input field when btn-valider clicked
    input.value = "" //blank field
    switch (inputValue) {
        case "0":
            //hide the container
            document.getElementsByClassName("container")[0].style.display = "none";
            break;

        case "1":
            showContactList();

            break;

        case "2":
            //New contact
            btnValider.setAttribute("onclick", "nameInput()");
            document.getElementsByClassName("status")[0].innerHTML =
            "Entrez le nom du contact";

            break;

        default:
            console.log("Invalide");
            break;
    }
}

function showContactList(){
    //Print in console the contacts list by name and surname
    for(let contact of contactsList){
        console.log(`Nom : ${contact.nom}\nPrénom : ${contact.prenom}`);
    }
}

function clearInput(){
    //Clear the input field of its current value
    input.value = "";
}

function nameInput(){
    let inputValue = input.value.trim();
    input.value = "";
    if(inputValue != ""){
        contactName = inputValue;
        console.log("Nom valide");
        btnValider.setAttribute("onclick", "surnameInput()");
        document.getElementsByClassName("status")[0].innerHTML =
            "Entrez le prenom du contact";

        
    } else {
        console.log("Nom invalide");
    }
}

function surnameInput(){
    let inputValue = input.value.trim();
    input.value = "";
    if(inputValue != ""){
        contactSurname = inputValue;
        console.log("Prenom valide");
        btnValider.setAttribute("onclick", "main()");
        document.getElementsByClassName("status")[0].innerHTML =
            "Faites un choix";
        contactsList.push({
            nom: contactName,
            prenom: contactSurname    
        });
        

        
    } else {
        console.log("Prenom invalide");
    }
}

//defaultListener();