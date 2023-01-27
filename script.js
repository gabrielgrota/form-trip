const date = new Date().toLocaleDateString();
document.getElementById("todayDate").innerHTML = `<h5>${date}</h5>`;

// first select
function update1(id){
    var select1 = document.getElementById("flyingFrom");
    var value1 = select1.options[select1.selectedIndex].value;
    console.log(value1);

    switch (value1) {
        case 'ARG':
        document.getElementById(id).innerHTML = `<img src='${arg.flag}'> <h3>${arg.airportCode}</h3> <p>${arg.airportName}</p> <p>${arg.city}</p>`;
        break;
        case 'AUS':
        document.getElementById(id).innerHTML = `<img src='${aus.flag}'> <h3>${aus.airportCode}</h3> <p>${aus.airportName}</p> <p>${aus.city}</p>`;
        break;
        case 'AUT':
        document.getElementById(id).innerHTML = `<img src='${aut.flag}'> <h3>${aut.airportCode}</h3> <p>${aut.airportName}</p> <p>${aut.city}</p>`;
        break;
        case 'BEL':
        document.getElementById(id).innerHTML = `<img src='${bel.flag}'> <h3>${bel.airportCode}</h3> <p>${bel.airportName}</p> <p>${bel.city}</p>`;
        break;
        case 'BOL':
        document.getElementById(id).innerHTML = `<img src='${bol.flag}'> <h3>${bol.airportCode}</h3> <p>${bol.airportName}</p> <p>${bol.city}</p>`;
        break;
        case 'BRA':
        document.getElementById(id).innerHTML = `<img src='${bra.flag}'> <h3>${bra.airportCode}</h3> <p>${bra.airportName}</p> <p>${bra.city}</p>`;
        break;
        case 'BWA':
        document.getElementById(id).innerHTML = `<img src='${bwa.flag}'> <h3>${bwa.airportCode}</h3> <p>${bwa.airportName}</p> <p>${bwa.city}</p>`;
        break;
        case 'CAN':
        document.getElementById(id).innerHTML = `<img src='${can.flag}'> <h3>${can.airportCode}</h3> <p>${can.airportName}</p> <p>${can.city}</p>`;
        break;
        case 'CHL':
        document.getElementById(id).innerHTML = `<img src='${chl.flag}'> <h3>${chl.airportCode}</h3> <p>${chl.airportName}</p> <p>${chl.city}</p>`;
        break;
        case 'CHN':
        document.getElementById(id).innerHTML = `<img src='${chn.flag}'> <h3>${chn.airportCode}</h3> <p>${chn.airportName}</p> <p>${chn.city}</p>`;
        break;
        case 'CYM':
        document.getElementById(id).innerHTML = `<img src='${cym.flag}'> <h3>${cym.airportCode}</h3> <p>${cym.airportName}</p> <p>${cym.city}</p>`;
        break;
        case 'CZE':
        document.getElementById(id).innerHTML = `<img src='${cze.flag}'> <h3>${cze.airportCode}</h3> <p>${cze.airportName}</p> <p>${cze.city}</p>`;
        break;
        case 'ENG':
        document.getElementById(id).innerHTML = `<img src='${eng.flag}'> <h3>${eng.airportCode}</h3> <p>${eng.airportName}</p> <p>${eng.city}</p>`;
        break;
        case 'IDN':
        document.getElementById(id).innerHTML = `<img src='${idn.flag}'> <h3>${idn.airportCode}</h3> <p>${idn.airportName}</p> <p>${idn.city}</p>`;
        break;
        case 'JPN':
        document.getElementById(id).innerHTML = `<img src='${jpn.flag}'> <h3>${jpn.airportCode}</h3> <p>${jpn.airportName}</p> <p>${jpn.city}</p>`;
        break;
        case 'KOR':
        document.getElementById(id).innerHTML = `<img src='${kor.flag}'> <h3>${kor.airportCode}</h3> <p>${kor.airportName}</p> <p>${kor.city}</p>`;
        break;
        case 'NZL':
        document.getElementById(id).innerHTML = `<img src='${nzl.flag}'> <h3>${nzl.airportCode}</h3> <p>${nzl.airportName}</p> <p>${nzl.city}</p>`;
        break;
        case 'SWE':
        document.getElementById(id).innerHTML = `<img src='${swe.flag}'> <h3>${swe.airportCode}</h3> <p>${swe.airportName}</p> <p>${swe.city}</p>`;
        break;
        case 'USA':
        document.getElementById(id).innerHTML = `<img src='${usa.flag}'> <h3>${usa.airportCode}</h3> <p>${usa.airportName}</p> <p>${usa.city}</p>`;
        break;
    }
};

// second select
function update2(id){
    var select2 = document.getElementById("flyingTo");
    var value2 = select2.options[select2.selectedIndex].value;
    console.log(value2);

    switch (value2) {
        case 'ARG':
        document.getElementById(id).innerHTML = `<img src='${arg.flag}'> <h3>${arg.airportCode}</h3> <p>${arg.airportName}</p> <p>${arg.city}</p>`;
        break;
        case 'AUS':
        document.getElementById(id).innerHTML = `<img src='${aus.flag}'> <h3>${aus.airportCode}</h3> <p>${aus.airportName}</p> <p>${aus.city}</p>`;
        break;
        case 'AUT':
        document.getElementById(id).innerHTML = `<img src='${aut.flag}'> <h3>${aut.airportCode}</h3> <p>${aut.airportName}</p> <p>${aut.city}</p>`;
        break;
        case 'BEL':
        document.getElementById(id).innerHTML = `<img src='${bel.flag}'> <h3>${bel.airportCode}</h3> <p>${bel.airportName}</p> <p>${bel.city}</p>`;
        break;
        case 'BOL':
        document.getElementById(id).innerHTML = `<img src='${bol.flag}'> <h3>${bol.airportCode}</h3> <p>${bol.airportName}</p> <p>${bol.city}</p>`;
        break;
        case 'BRA':
        document.getElementById(id).innerHTML = `<img src='${bra.flag}'> <h3>${bra.airportCode}</h3> <p>${bra.airportName}</p> <p>${bra.city}</p>`;
        break;
        case 'BWA':
        document.getElementById(id).innerHTML = `<img src='${bwa.flag}'> <h3>${bwa.airportCode}</h3> <p>${bwa.airportName}</p> <p>${bwa.city}</p>`;
        break;
        case 'CAN':
        document.getElementById(id).innerHTML = `<img src='${can.flag}'> <h3>${can.airportCode}</h3> <p>${can.airportName}</p> <p>${can.city}</p>`;
        break;
        case 'CHL':
        document.getElementById(id).innerHTML = `<img src='${chl.flag}'> <h3>${chl.airportCode}</h3> <p>${chl.airportName}</p> <p>${chl.city}</p>`;
        break;
        case 'CHN':
        document.getElementById(id).innerHTML = `<img src='${chn.flag}'> <h3>${chn.airportCode}</h3> <p>${chn.airportName}</p> <p>${chn.city}</p>`;
        break;
        case 'CYM':
        document.getElementById(id).innerHTML = `<img src='${cym.flag}'> <h3>${cym.airportCode}</h3> <p>${cym.airportName}</p> <p>${cym.city}</p>`;
        break;
        case 'CZE':
        document.getElementById(id).innerHTML = `<img src='${cze.flag}'> <h3>${cze.airportCode}</h3> <p>${cze.airportName}</p> <p>${cze.city}</p>`;
        break;
        case 'ENG':
        document.getElementById(id).innerHTML = `<img src='${eng.flag}'> <h3>${eng.airportCode}</h3> <p>${eng.airportName}</p> <p>${eng.city}</p>`;
        break;
        case 'IDN':
        document.getElementById(id).innerHTML = `<img src='${idn.flag}'> <h3>${idn.airportCode}</h3> <p>${idn.airportName}</p> <p>${idn.city}</p>`;
        break;
        case 'JPN':
        document.getElementById(id).innerHTML = `<img src='${jpn.flag}'> <h3>${jpn.airportCode}</h3> <p>${jpn.airportName}</p> <p>${jpn.city}</p>`;
        break;
        case 'KOR':
        document.getElementById(id).innerHTML = `<img src='${kor.flag}'> <h3>${kor.airportCode}</h3> <p>${kor.airportName}</p> <p>${kor.city}</p>`;
        break;
        case 'NZL':
        document.getElementById(id).innerHTML = `<img src='${nzl.flag}'> <h3>${nzl.airportCode}</h3> <p>${nzl.airportName}</p> <p>${nzl.city}</p>`;
        break;
        case 'SWE':
        document.getElementById(id).innerHTML = `<img src='${swe.flag}'> <h3>${swe.airportCode}</h3> <p>${swe.airportName}</p> <p>${swe.city}</p>`;
        break;
        case 'USA':
        document.getElementById(id).innerHTML = `<img src='${usa.flag}'> <h3>${usa.airportCode}</h3> <p>${usa.airportName}</p> <p>${usa.city}</p>`;
        break;
    }
};

// multicity? yes. then...
function multiCityOption() {
    const selected = document.querySelector('input[name="opcao"]:checked').value;
    console.log(selected);

    if (selected === 'multiCity') {
        document.getElementById("multiCityFlecha").innerHTML = `<div class="flecha"><img class="flecha" src="images/flecha.png" alt="Flecha" /></div>`;
        document.getElementById("multiCitySelected").innerHTML = `
        <div class="local-date">
            <div class="local">
                <div class="flying">
                    <select name="flyingMultiCity" id="flyingMultiCity" onchange="update3('flyingMultiCityData')">
                        <option value="0" selected>Choose a city</option>
                        <option value="ARG">Buenos Aires, Argentina</option>
                        <option value="AUS">Sydney, Australia</option>
                        <option value="AUT">Vienna, Austria</option>
                        <option value="BEL">Brussels, Belgium</option>
                        <option value="BOL">Santa Cruz de la Sierra, Bolivia</option>
                        <option value="BRA">São Paulo, Brazil</option>
                        <option value="BWA">Gaborone, Botswana</option>
                        <option value="CAN">Ontario, Canada</option>
                        <option value="CHL">Santiago, Chile</option>
                        <option value="CHN">Beijing, China</option>
                        <option value="CYM">George Town, Cayman Islands</option>
                        <option value="CZE">Prague, Czech Republic</option>
                        <option value="ENG">London, England, UK</option>
                        <option value="IDN">Jakarta, Indonesia</option>
                        <option value="JPN">Narita, Japan</option>
                        <option value="KOR">Jung District, South Korea</option>
                        <option value="NZL">Auckland, New Zealand</option>
                        <option value="SWE">Stockholm, Sweden</option>
                        <option value="USA">New York, U.S</option>
                    </select>
                </div>

                <div class="flyingMultiCity">
                    <span id="flyingMultiCityData"></span>
                </div>
            </div>

            <!-- Date Info -->
            <div class="date">
              <div class="date3">
                <label for="test">Departure date</label>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2021-10-28"
                  min="2023-01-24"
                  max="2030-12-31"
                />
              </div>
            </div>  
        </div>`
    }
};
multiCityOption();

function update3(id){
    const value3 = document.querySelector('select[id="flyingMultiCity"]').value;
    console.log(value3);

    switch (value3) {
        case 'ARG':
        document.getElementById(id).innerHTML = `<img src='${arg.flag}'> <h3>${arg.airportCode}</h3> <p>${arg.airportName}</p> <p>${arg.city}</p>`;
        break;
        case 'AUS':
        document.getElementById(id).innerHTML = `<img src='${aus.flag}'> <h3>${aus.airportCode}</h3> <p>${aus.airportName}</p> <p>${aus.city}</p>`;
        break;
        case 'AUT':
        document.getElementById(id).innerHTML = `<img src='${aut.flag}'> <h3>${aut.airportCode}</h3> <p>${aut.airportName}</p> <p>${aut.city}</p>`;
        break;
        case 'BEL':
        document.getElementById(id).innerHTML = `<img src='${bel.flag}'> <h3>${bel.airportCode}</h3> <p>${bel.airportName}</p> <p>${bel.city}</p>`;
        break;
        case 'BOL':
        document.getElementById(id).innerHTML = `<img src='${bol.flag}'> <h3>${bol.airportCode}</h3> <p>${bol.airportName}</p> <p>${bol.city}</p>`;
        break;
        case 'BRA':
        document.getElementById(id).innerHTML = `<img src='${bra.flag}'> <h3>${bra.airportCode}</h3> <p>${bra.airportName}</p> <p>${bra.city}</p>`;
        break;
        case 'BWA':
        document.getElementById(id).innerHTML = `<img src='${bwa.flag}'> <h3>${bwa.airportCode}</h3> <p>${bwa.airportName}</p> <p>${bwa.city}</p>`;
        break;
        case 'CAN':
        document.getElementById(id).innerHTML = `<img src='${can.flag}'> <h3>${can.airportCode}</h3> <p>${can.airportName}</p> <p>${can.city}</p>`;
        break;
        case 'CHL':
        document.getElementById(id).innerHTML = `<img src='${chl.flag}'> <h3>${chl.airportCode}</h3> <p>${chl.airportName}</p> <p>${chl.city}</p>`;
        break;
        case 'CHN':
        document.getElementById(id).innerHTML = `<img src='${chn.flag}'> <h3>${chn.airportCode}</h3> <p>${chn.airportName}</p> <p>${chn.city}</p>`;
        break;
        case 'CYM':
        document.getElementById(id).innerHTML = `<img src='${cym.flag}'> <h3>${cym.airportCode}</h3> <p>${cym.airportName}</p> <p>${cym.city}</p>`;
        break;
        case 'CZE':
        document.getElementById(id).innerHTML = `<img src='${cze.flag}'> <h3>${cze.airportCode}</h3> <p>${cze.airportName}</p> <p>${cze.city}</p>`;
        break;
        case 'ENG':
        document.getElementById(id).innerHTML = `<img src='${eng.flag}'> <h3>${eng.airportCode}</h3> <p>${eng.airportName}</p> <p>${eng.city}</p>`;
        break;
        case 'IDN':
        document.getElementById(id).innerHTML = `<img src='${idn.flag}'> <h3>${idn.airportCode}</h3> <p>${idn.airportName}</p> <p>${idn.city}</p>`;
        break;
        case 'JPN':
        document.getElementById(id).innerHTML = `<img src='${jpn.flag}'> <h3>${jpn.airportCode}</h3> <p>${jpn.airportName}</p> <p>${jpn.city}</p>`;
        break;
        case 'KOR':
        document.getElementById(id).innerHTML = `<img src='${kor.flag}'> <h3>${kor.airportCode}</h3> <p>${kor.airportName}</p> <p>${kor.city}</p>`;
        break;
        case 'NZL':
        document.getElementById(id).innerHTML = `<img src='${nzl.flag}'> <h3>${nzl.airportCode}</h3> <p>${nzl.airportName}</p> <p>${nzl.city}</p>`;
        break;
        case 'SWE':
        document.getElementById(id).innerHTML = `<img src='${swe.flag}'> <h3>${swe.airportCode}</h3> <p>${swe.airportName}</p> <p>${swe.city}</p>`;
        break;
        case 'USA':
        document.getElementById(id).innerHTML = `<img src='${usa.flag}'> <h3>${usa.airportCode}</h3> <p>${usa.airportName}</p> <p>${usa.city}</p>`;
        break;
    }
};