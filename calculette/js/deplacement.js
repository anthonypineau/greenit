const divDeplacement = document.querySelector('.deplacement');
document.querySelector("#addFormDeplacement").addEventListener("click", addFormDeplacement);

function addFormDeplacement(){
    const divFormDeplacement = document.createElement("div");
    divFormDeplacement.classList.add("formDeplacement");
    const title = document.createElement("h1");
    title.textContent="Veuillez sélectionner un moyen de transport";
    const selectMode = document.createElement("select");
    selectMode.id="modeDeplacement";
    selectMode.name="modeDeplacement";
    addOptionToSelect(selectMode, "Voiture");
    addOptionToSelect(selectMode, "Moto");
    addOptionToSelect(selectMode, "Scooter");
    addOptionToSelect(selectMode, "Train");
    addOptionToSelect(selectMode, "Tramway");
    addOptionToSelect(selectMode, "Bus");
    addOptionToSelect(selectMode, "Car");
    addOptionToSelect(selectMode, "Avion");
    addOptionToSelect(selectMode, "À pieds");
    addOptionToSelect(selectMode, "À cheval");
    addOptionToSelect(selectMode, "Trotinette");
    addOptionToSelect(selectMode, "Vélo");


    divFormDeplacement.appendChild(title);
    divFormDeplacement.appendChild(selectMode);
    divFormDeplacement.appendChild(document.createElement("br"));

    const labelHsemaine = document.createElement("label");
    const inputHsemaine = document.createElement("input");
    componentLabelInput(divFormDeplacement, labelHsemaine, inputHsemaine, "Heure par semaine d'utilisation :", "hSemaine", "text");


    const labelKmsemaine = document.createElement("label");
    const inputKmsemaine = document.createElement("input");
    componentLabelInput(divFormDeplacement, labelKmsemaine, inputKmsemaine, "Nombre de km parcouru par semaine :", "kmSemaine", "text");

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent="Supprimer";
    buttonDelete.addEventListener("click", () => {
        divDeplacement.removeChild(divFormDeplacement);
    });

    divFormDeplacement.appendChild(buttonDelete);

    divDeplacement.appendChild(divFormDeplacement);
}

function addOptionToSelect(select, option){
    const optionTag = document.createElement("option");
    optionTag.value=option;
    optionTag.text=option;
    select.appendChild(optionTag);
}

function componentLabelInput(div, label, input, textLabel, idInput, typeInput){
    label.innerText = textLabel;
    label.setAttribute("for", idInput);
    input.setAttribute("type", typeInput);
    input.setAttribute("id", idInput);
    input.setAttribute("name", idInput);
    input.required=true;
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
}

/*
static deplacement()
{
    document.write("<div class = form>");

        document.write("<h> Heure par semaine d'utilisation</h> <br/>");
        document.write("<input id='hsemaine' type='number' name='textfield' required > <br/>");

        document.write("<h> Nombre de km parcouru par semaine </h> <br/>");
        document.write("<input id='kmsemaine' type='number' name='textfield' required > <br/>");


        document.write("<h> Choisissez le type d'énergie utilisé : </h> <br/>");

        document.write("<div>");
            document.write("<input class='checkbox' id ='choixenergie1' type='radio' value='electrique' name='choixenergie' <br/>");
            document.write("<label for='contactChoice1'>electrique </label> <br/>");

            document.write("<input class='checkbox' id ='choixenergie2' type='radio' value='thermique' name='choixenergie' <br/>");
            document.write("<label for='contactChoice1'>thermique </label> <br/>");

            document.write("<input class='checkbox' id ='choixenergie3' type='radio' value='hybride' name='choixenergie' <br/>");
            document.write("<label for='contactChoice1'>hybride </label> <br/>");

            document.write("<input class='checkbox' id ='choixenergie4' type='radio' value='naturel' name='choixenergie' <br/>");
            document.write("<label for='contactChoice1'>naturel </label> <br/>");
        document.write("</div>");
        document.write("<script>");

           
        document.write("</script>");
        document.write("<input id = 'closepopup' type ='button' value = 'Valider' onclick=\"Move.miseenmemoire();\" > </input>")
    document.write("</div>")
}
*/