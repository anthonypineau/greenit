console.log("test");
const selectsTransportation=document.querySelectorAll('.transportation');
const transport_hours=document.querySelectorAll('.transport_hours');
const transport1=document.querySelector('#transport1');
const transport2=document.querySelector('#transport2');
const transport3=document.querySelector('#transport3');
const transportion1=document.querySelector('#transportion1');
const transportion2=document.querySelector('#transportion2');
const transportion3=document.querySelector('#transportion3');
const transport_hours1=document.querySelector('#transport_hours1');
const transport_hours2=document.querySelector('#transport_hours2');
const transport_hours3=document.querySelector('#transport_hours3');
const transport_total=document.querySelector('#transport_total');

const inputsComputer=document.querySelectorAll("#devices input.computer");
const computer_impact_annuel=document.querySelector('#computer_impact_annuel');

inputsComputer.forEach((e) => {
    e.addEventListener("change", () => {
        calculateComputer();
    });
});


selectsTransportation.forEach((e) => {
    e.addEventListener("change", () => {
        switch(e.value){
            case "car":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre de kilomètres parcourus pour le travail (par an)";
                break;
            case "bike":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre de kilomètres parcourus pour le travail (par an)";
                break;
            case "plane":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre d'heures d'utilisation pour le travail (par an)";
                break;
            case "bus":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre d'heures d'utilisation pour le travail (par semaine)";
                break;
            case "train":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre de kilomètres parcourus pour le travail (par an)";
                break;
            case "subway":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre d'heures d'utilisation pour le travail (par semaine)";
                break;
            case "bicycle":
                e.parentElement.parentElement.parentElement.children[1].children[0].textContent="Nombre de kilomètres parcourus pour le travail (par an)";
                break;
        }
        switch(e.id){
            case "transportation1":
                calculateTranport(transportation1, transport1, transport_hours1.value);
                break;
            case "transportation2":
                calculateTranport(transportation2, transport2, transport_hours2.value);
                break;
            case "transportation3":
                calculateTranport(transportation3, transport3, transport_hours3.value);
                break;
        }
    });
});

transport_hours.forEach((e) => {
    e.addEventListener("change", () => {
        switch(e.id){
            case "transport_hours1":
                calculateTranport(transportation1, transport1, e.value);
                break;
            case "transport_hours2":
                calculateTranport(transportation2, transport2, e.value);
                break;
            case "transport_hours3":
                calculateTranport(transportation3, transport3, e.value);
                break;
        }
    });
});

function calculateTranport(selectTransportation, display, value){
    let result=0;
    switch(selectTransportation.value){
        case "car":
            result=(280+value*0.2)/1.2;
            break;
        case "bike":
            result=0.06*value;
            break;
        case "plane":
            result=(561.3*value)*0.19;
            break;
        case "bus":
            result=(1.99*value)*52;
            break;
        case "train":
            result=0.01*value;
            break;
        case "subway":
            result=(0.17*value)*52;
            break;
        case "bicycle":
            result=0;
            break;
    }
    result=result.toFixed(2);
    display.textContent=result;
    transport_total.textContent=(Number.parseFloat(transport1.textContent)+Number.parseFloat(transport2.textContent)+Number.parseFloat(transport3.textContent)).toFixed(2);
}

function calculateComputer(){
    const pa=document.querySelector('#pa').value;
    const ha=document.querySelector('#ha').value;
    const pl=document.querySelector('#pl').value;
    const hl=document.querySelector('#hl').value;
    const po=document.querySelector('#po').value;
    const ho=document.querySelector('#ho').value;
    computer_impact_annuel.textContent=((0.3*(pa*ha+pl*hl+po*ho)/7)*365/1000 + ((1-0.3)*(pa*(ha+hl)+po*ho)/7)*365/1000).toFixed(2);
}