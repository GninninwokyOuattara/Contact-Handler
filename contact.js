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
let name, surname;
btnValider.addEventListener("click", function (e) {
    switch (input.value) {
        case "1":
            //Contacts List
            showContactList();
            clearInput();
            break;
        case "2":
            //Add a new contact
            clearInput();
            
            document.getElementsByClassName("status")[0].innerHTML = 
            "Entrez le nom du contact";
            btnValider.addEventListener("click", function(e){
                if(input.value.length <= 1){
                    console.log("Nom trop court");
                    //continue;

                } else {
                    name = input.value;
                    clearInput();
                    document.getElementsByClassName("status")[0].innerHTML =
                    "Entrez le prenom du contact";
                    btnValider.addEventListener("click", function(e){
                        console.log(input.value);
                        if(input.value.length <= 1){
                            //a regler
                            console.log(input.value);
                            console.log(input.value.length);
                            console.log("Trop court");
                            //continue;

                            //
                        } else {
                            surname = input.value;
                            clearInput();
                            contactsList.push({name: name, surname : surname});
                            document.getElementsByClassName("status")[0].innerHTML =
                            "Faites un choix";
                        }
                    });
                } /*else {
                    console.log("Something wasn't right.");
                }*/
                
            });

            

            break;

        case "0":
            //Quit

            document.getElementsByClassName("container")[0].style.display = "none";

            break;
        default:
            break;
    }
});

/*
btnValider_nom.addEventListener("click", function(e){
    if(isNaN(input.value || input.value.length<=1)){
        clearInput();
    }
  
});
*/



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


/*
function setupNameInput(){
    //set for name input
    document.getElementsByClassName("status")[0].innerHTML = "Entrez le nom du contact";
    document.getElementsByTagName("input")[0].className = "nom";
    document.getElementsByTagName("button")[1].className = "btnValider_nom";



}

function setupSurnameInput(){
    //set for name input
    document.getElementsByClassName("status")[0].innerHTML = "Entrez le prenom du contact";
    document.getElementsByTagName("input")[0].className = "prenom";
    document.getElementsByTagName("button")[1].className = "btnValider_prenom";



}



function setField(status, input){
    clearInput();
    document.getElementsByClassName(status)[0].innerHTML = "Entrez le nom du contact";

}

*/