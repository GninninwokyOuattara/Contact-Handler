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
let name, surname, inputValue;
let eventState = "forChoiceInput";










function defaultListener() {
    document.getElementsByClassName("status")[0].innerHTML = 
    "Faites un choix";
    btnValider.addEventListener("click", function(e) {
        inputValue = input.value;
        input.value = "";
    
        if(inputValue !="" && inputValue == "0"){
            document.getElementsByClassName("container")[0].style.display = "none";
        }
        if(inputValue != "" && inputValue == "1"){
            return showContactList();
        }
        if(inputValue != "" && inputValue == "2"){
            btnValider.removeEventListener("click", e);
            return nameListener();
            //add  new contact, we call nameListener()
            
        }
    });
}

function nameListener(){
    document.getElementsByClassName("status")[0].innerHTML = 
    "Entrez le nom du contact";
    btnValider.addEventListener("click", function(event){
        inputValue = input.value.trim();
        input.value = "";
        if(inputValue != "" && inputValue.length> 1){
            name = inputValue;
            btnValider.removeEventListener("click", btnValider);
            return surnameListener();
        }
        else{
            console.log(inputValue);
        }
    });
}

function surnameListener(){
    document.getElementsByClassName("status")[0].innerHTML = 
    "Entrez le prenom du contact";
    btnValider.addEventListener("click", function(event){
        inputValue = input.value.trim();
        input.value = "";
        if(inputValue != "" && inputValue.length> 1){
            surname = inputValue;
            btnValider.removeEventListener("click", btnValider);
            //push the new contact into the contact object
            contactsList.push({
                name: name,
                surname: surname
            });
            name = "";
            surname = "";
            defaultListener();
        }
    });

}


 




function showContactList(){
    //Print in console the contacts list by name and surname
    for(let contact of contactsList){
        console.log(`Nom : ${contact.nom}\nPénom : ${contact.prenom}`);
    }
}

function clearInput(){
    //Clear the input field of its current value
    input.value = "";
}

defaultListener();