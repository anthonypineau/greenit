const selectsTransportation=document.querySelectorAll('.transportation');
const transportHours=document.querySelectorAll('.transportHours');
const transport1=document.querySelector('#transport1');
const transport2=document.querySelector('#transport2');
const transport3=document.querySelector('#transport3');
const transportion1=document.querySelector('#transportion1');
const transportion2=document.querySelector('#transportion2');
const transportion3=document.querySelector('#transportion3');
const transportHours1=document.querySelector('#transportHours1');
const transportHours2=document.querySelector('#transportHours2');
const transportHours3=document.querySelector('#transportHours3');
const transportTotal=document.querySelector('#transportTotal');

const inputsComputer=document.querySelectorAll("input.computer");
const computerTotal=document.querySelector('#computerTotal');

const screenTotal=document.querySelector('#screenTotal');
const screen=document.querySelector('#screen');

const phone = document.querySelector('#phone');
const phoneValue = document.querySelector('#phoneValue');

const cloud=document.querySelector('#cloud');
const cloudValue=document.querySelector('#cloudValue');
const emails=document.querySelector('#emails');
const emailTotal=document.querySelector('#emailTotal');
const paper=document.querySelector('#paper');
const paperValue=document.querySelector('#paperValue');


screen.addEventListener("change", () => {
    screenTotal.textContent=screen.value;
    calculateDevices();
});

phone.addEventListener("change", () => {
    phoneValue.textContent=phone.value;
    calculateDevices();
});

cloud.addEventListener("change", () => {
    cloudValue.textContent=120*cloud.value/1000;
    calculateCloud();
});

emails.addEventListener("change", () => {
    emailTotal.textContent=emails.value;
    calculateCloud();
});

paper.addEventListener("change", () => {
    paperValue.textContent=paper.value*5/1000;
    calculateCloud();
});


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
                    calculateTranport(transportation1, transport1, transportHours1);
                    break;
                case "transportation2":
                    calculateTranport(transportation2, transport2, transportHours2);
                    break;
                case "transportation3":
                    calculateTranport(transportation3, transport3, transportHours3);
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

transportHours.forEach((e) => {
    e.addEventListener("change", () => {
        switch(e.id){
            case "transportHours1":
                calculateTranport(transportation1, transport1, transportHours1);
                break;
            case "transportHours2":
                calculateTranport(transportation2, transport2, transportHours2);
                break;
            case "transportHours3":
                calculateTranport(transportation3, transport3, transportHours3);
                break;
        }
    });
});

function calculateTranport(selectTransportation, display, value){
    let result=selectTransportation.value*value.value;
    result=(result/1000).toFixed(1);
    display.textContent=result;
    result=(Number.parseFloat(transport1.textContent)+Number.parseFloat(transport2.textContent)+Number.parseFloat(transport3.textContent)).toFixed(1);
    transportTotal.textContent=result;
    document.querySelector("#impactDeplacement").textContent=result;
    calculateTotal();
}

function calculateComputer(){
    const pa=Number.parseInt(document.querySelector('#pa').value);
    const ha=Number.parseInt(document.querySelector('#ha').value);
    const pl=Number.parseInt(document.querySelector('#pl').value);
    const hl=Number.parseInt(document.querySelector('#hl').value);
    const po=Number.parseInt(document.querySelector('#po').value);
    const ho=Number.parseInt(document.querySelector('#ho').value);

    let result=(((0.3*(pa*ha+pl*hl+po*ho)/7)*365/1000+(0.7*(pa*(ha+hl)+po*ho)/7)*365/1000)*319/1000).toFixed(1);
    computerTotal.textContent=result;
    calculateDevices();
}

function calculateDevices(){
    document.querySelector('#devicesTotal').textContent=(Number.parseFloat(computerTotal.textContent)+Number.parseFloat(screenTotal.textContent)+Number.parseFloat(phoneValue.textContent)).toFixed(1);
    calculateNumeric();
}

function calculateCloud(){
    document.querySelector('#cloudTotal').textContent=(Number.parseFloat(cloudValue.textContent)+Number.parseFloat(emailTotal.textContent)+Number.parseFloat(paperValue.textContent)).toFixed(1)
    calculateNumeric();
}

function calculateNumeric(){
    document.querySelector('#impactNumerique').textContent=(Number.parseFloat(document.querySelector('#devicesTotal').textContent)+Number.parseFloat(document.querySelector('#cloudTotal').textContent)).toFixed(1);
    calculateTotal();
}

function calculateTotal(){
    document.querySelector('#impactTotal').textContent=(Number.parseFloat(document.querySelector('#impactNumerique').textContent)+Number.parseFloat(document.querySelector('#impactDeplacement').textContent)).toFixed(1);
}