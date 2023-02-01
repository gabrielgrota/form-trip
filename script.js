// date info
const date = new Date().toLocaleDateString();
document.getElementById("todayDate").innerHTML = `<h5>${date}</h5>`;


// function to catch the objects value
function optionLoop(nameSpan) {
    let i = 0;
    let allCities = "";
    let target = document.querySelector(nameSpan);
    
    if (!target) {
      console.error("Element not found: " + nameSpan);
      return;
    }
    
    // loop to the end of the array and format the options value
    for (; i < countries.length; i++) {
      allCities += `<option value="${countries[i].country}">${countries[i].city}</option>`;
    }
    
    target.innerHTML = allCities;
};
optionLoop("#flyingFrom");
optionLoop("#flyingTo");


// function with filter, needs ID from select and ID from span, return selected value for each select.
function update(id, spanID) {
    // take the value
    let select = document.getElementById(id);
    let selectValue = select.options[select.selectedIndex].value;
    console.log(selectValue);
    
    // filter the value
    const selectFilter = countries.filter(
        (country) => country.country === selectValue
    );
    console.log(selectFilter[0].city);

    // formats the object returned in span, country info
    document.getElementById(spanID).innerHTML = `<img src='${selectFilter[0].flag}'> <h3>${selectFilter[0].airportCode}</h3> <p>${selectFilter[0].airportName}</p> <p>${selectFilter[0].city}</p>`;
};


// multicity? yes. then... event click button
const routeType = document.querySelector(".type");
const multiCityBtn = document.querySelector("#multi-city");
multiCityBtn.addEventListener("click", (e) => {
  document.getElementById("multiCityArrow").innerHTML = `<div class="arrow"><img class="arrow" src="images/arrow.png" alt="Arrow" /></div>`;
  document.getElementById("multiCitySelected").innerHTML = `
    <div class="local">
                
      <div class="select-input"><select name="flyingMultiCity" id="flyingMultiCity" onchange="update('flyingMultiCity', 'flyingMultiCitySpan')"></select></div>
                
      <div class="airport-info"><span id="flyingMultiCitySpan"></span></div>
          
      <div class="date">
        <label for="test">Departure date</label>
        <input type="date" id="start" name="trip-start" value="2021-10-28" min="2023-01-24" max="2030-12-31"/>
      </div>

    </div>`
  optionLoop("#flyingMultiCity");
  routeType.style.display = "none";
});