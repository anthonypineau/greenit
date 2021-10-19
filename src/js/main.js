//const dataFile = require("../../data/data.json");
//const data= JSON.parse(dataFile);
//console.log(data);

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

fetch("../../data/data.json")
.then(response => {
   return response.json();
}).then(data => {
    selectsTransportation.forEach(e => {
        data.forEach(d => {
            const option = document.createElement("option");
            option.textContent=d.description;
            option.value=d.value;
            e.appendChild(option);
        });
        e.addEventListener("change", () => {
            switch(e.id){
                case "transportation1":
                    calculateTranport(transportation1, transport1, transport_hours1);
                    break;
                case "transportation2":
                    calculateTranport(transportation2, transport2, transport_hours2);
                    break;
                case "transportation3":
                    calculateTranport(transportation3, transport3, transport_hours3);
                    break;
            }
        });
    });
});

inputsComputer.forEach((e) => {
    e.addEventListener("change", () => {
        calculateComputer();
    });
});

transport_hours.forEach((e) => {
    e.addEventListener("change", () => {
        switch(e.id){
            case "transport_hours1":
                calculateTranport(transportation1, transport1, transport_hours1);
                break;
            case "transport_hours2":
                calculateTranport(transportation2, transport2, transport_hours2);
                break;
            case "transport_hours3":
                calculateTranport(transportation3, transport3, transport_hours3);
                break;
        }
    });
});

function calculateTranport(selectTransportation, display, value){
    let result=selectTransportation.value*value.value;
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