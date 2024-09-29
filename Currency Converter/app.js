const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let amt = document.querySelector(".amount input");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


const updateExchangeRate = async () => {
    let amtValue = amt.value;
    if (amtValue == "" || amtValue < 1) {
        amtValue = 1;
        amt.value = "1";
    }
    // console.log(amtValue);
    // console.log(fromCurr.value);
    // console.log(toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    // console.log(URL);
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);
    let finalAmt = amtValue * rate;
    // console.log(finalAmt);
    msg.textContent = `${amtValue} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}


for(let select of dropdowns) {
    for(currCode in countryList) {
        // console.log(code,countryList[code]);
        let newOption = document.createElement("option");
        newOption.textContent = currCode;
        newOption.value = currCode;
        if(select.name == "from" && currCode == "USD"){
            newOption.selected = "selected";
        }
        else if(select.name == "to" && currCode == "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let newImage = element.parentElement.querySelector("img");
    newImage.src = newSrc;
};


window.addEventListener("load", () => {
    updateExchangeRate();
});

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// json = fetchJSON(`/currencies/{fromCurrency}`)
// rate = json[fromCurrency][toCurrency]
