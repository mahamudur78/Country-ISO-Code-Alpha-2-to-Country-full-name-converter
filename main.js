const  countryCodeList = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AN: "Netherlands Antilles",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei Darussalam",
    BO: "Bolivia Plurinational State of",
    BQ: "Bonaire Sint Eustatius and Saba",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos (Keeling) Islands",
    CD: "Congo Democratic Republic of the",
    CF: "Central African Republic",
    CG: "Congo",
    CH: "Switzerland",
    CI: "Côte d'Ivoire",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands (Malvinas)",
    FM: "Micronesia Federated States of",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom of Great Britain and Northern Ireland",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran Islamic Republic of",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "Korea Democratic People's Republic of",
    KR: "Korea Republic of",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Lao People's Democratic Republic",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova Republic of",
    ME: "Montenegro",
    MF: "Saint Martin (French part)",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine State of",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russian Federation",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten (Dutch part)",
    SY: "Syrian Arab Republic",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Türkiye",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan Province of China",
    TZ: "Tanzania United Republic of",
    UA: "Ukraine",
    UG: "Uganda",
    UK: "United Kingdom",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela Bolivarian Republic of",
    VG: "Virgin Islands British",
    VI: "Virgin Islands U.S.",
    VN: "Viet Nam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    XK: "Kosovo",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
};



const contryFilter = (countryCode) => {
    let countryCodeList = countryCode.toUpperCase().replace(/\s+|\,|\//gi, ' ').trim().split(' ');
    const removeDuplactedCode = countryCodeList.filter((code, index) => (countryCodeList.indexOf(code) === index) &&  code !== ' ');

    const countCountry = [];
    removeDuplactedCode.forEach((code) =>{
        countCountry.push({code: code, count : countryCodeList.filter(value => value === code).length});
    });
    return countCountry;
}

function myFunction(data){
    // let input = data.value;
    let input = document.getElementById('inputbox').value;
    let countryCode = contryFilter(input);
    let countryCodeLength = input.length;

    let HTMLTableData = '';
    
   
    
    // Data Sorting
    let SortBy = document.getElementById('country_count_sort');
    // console.dir(SortBy);
    if(SortBy.value === 'HighToLow'){
        countryCode.sort((a , b) => (a.count < b.count) ? 1 : -1);
    }else if(SortBy.value === 'LowToHigh'){
        countryCode.sort((a , b) => (a.count > b.count) ? 1 : -1);
    }

    // Data Error Report
    const errorFreeData = DataProcessAndErrorReport(countryCodeLength, countryCode);
    let errorFreeDataLength = errorFreeData.length;

    //Export CSV Button Enable/Disable   
    const exportcsv = document.getElementById('exportcsv');
    const exportCsvDescription = document.getElementById('export-csv-description');

    if(errorFreeDataLength !== 0){
            exportcsv.classList.remove('disabled');
            exportCsvDescription.innerHTML = 'You can download a CSV file.'
    }else if(!exportcsv.classList.contains('disabled')){
        
        exportcsv.classList.add('disabled');
        exportCsvDescription.innerHTML = 'If you need to download a CSV file, Please input the country code first.';
    }

    // if(twoBtn.classList.contains('active')){}
    if(data === 'exportCSV'){
        return errorFreeData;
    }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Pagination Select Number    
    const paginationSelectNumber = PaginationSelectNumber(errorFreeDataLength);

    let filterCountryCode = [];    
    let pageNumber = 0;
    let outputSerialNumber = 0;
    // let displayParPAge = document.getElementById('pagination-select-number').value;

    let oneBtn = document.getElementById('oneBtn');
    let twoBtn = document.getElementById('twoBtn');
    let threeBtn = document.getElementById('threeBtn');

    // console.dir(data);
    if(data.nodeName === "TEXTAREA" || data.nodeName === "SELECT"){
        oneBtn.innerHTML = '1';
        twoBtn.innerHTML = '2';
        threeBtn.innerHTML = '3';

        oneBtn.classList.remove('active');
        twoBtn.classList.remove('active');
        threeBtn.classList.remove('active');
        oneBtn.classList.add('active');

    }

    if(data.nodeName === "LI"){
        if(data.innerText === "Next" && (paginationSelectNumber * parseInt(threeBtn.innerText)) < (errorFreeDataLength)){
            pageNumber = PaginationButtonActiveCOlorAndSelectNumber_Next(pageNumber, oneBtn, twoBtn, threeBtn);
            outputSerialNumber = ((pageNumber * paginationSelectNumber) - paginationSelectNumber);

        }else if(data.innerText === "Previous" && (1 < parseInt(oneBtn.innerText))){
            pageNumber = PaginationButtonActiveCOlorAndSelectNumber_Previous(pageNumber, oneBtn, twoBtn, threeBtn);
            outputSerialNumber = ((pageNumber * paginationSelectNumber) - paginationSelectNumber);

        }else{
            if(data.innerText === "Next"){

                let currentPaginationNumber = 0;
                if(oneBtn.classList.contains('active')){
                    currentPaginationNumber = parseInt(twoBtn.innerText);

                    oneBtn.classList.remove('active');
                    twoBtn.classList.add('active');
                }else if(twoBtn.classList.contains('active')){
                    currentPaginationNumber = parseInt(threeBtn.innerText);
                    twoBtn.classList.remove('active');
                    threeBtn.classList.add('active');
                }else if(threeBtn.classList.contains('active')){
                    currentPaginationNumber = parseInt(threeBtn.innerText);
                }

        
                pageNumber = currentPaginationNumber;
                // pageNumber = parseInt(threeBtn.innerText);
                // console.log(pageNumber);
            }else if(data.innerText === "Previous"){
                if(twoBtn.classList.contains('active')){
                    pageNumber = 1;
                    oneBtn.classList.add('active');
                    twoBtn.classList.remove('active');
                    
                }else if(threeBtn.classList.contains('active')){
                    pageNumber = 2;
                    twoBtn.classList.add('active');
                    threeBtn.classList.remove('active');
                }

            }else{
                console.dir(data)  
                if(data.id === 'oneBtn'){
                    twoBtn.classList.remove('active');
                    threeBtn.classList.remove('active');
                    oneBtn.classList.add('active');

                }else if(data.id === 'twoBtn'){
                    threeBtn.classList.remove('active');
                    oneBtn.classList.remove('active');
                    twoBtn.classList.add('active');

                }else if(data.id === 'threeBtn'){
                    oneBtn.classList.remove('active');
                    twoBtn.classList.remove('active');
                    threeBtn.classList.add('active');
                }
                // pageNumber = parseInt(data.innerText);
                pageNumber = parseInt(data.innerText);
            }
            
            outputSerialNumber = ((pageNumber * paginationSelectNumber) - paginationSelectNumber);
        }

        filterCountryCode = PaginationDisplayPage(pageNumber, paginationSelectNumber, errorFreeData);
    }else{
        filterCountryCode = PaginationDisplayPage(1, paginationSelectNumber, errorFreeData);
    }

    // pagination Style
    //pagination Section Enable/Disable
    let pagination = document.getElementById('pagination');
    // console.log(paginationSelectNumber);
    if(paginationSelectNumber < errorFreeDataLength){
        pagination.classList.remove('disabled');
    }else if(!pagination.classList.contains('disabled')){
        pagination.classList.add('disabled');
    }

    //pagination Previous Enable/Disable
    let previousbtn = document.getElementById('previousbtn');
    if(1 === parseInt(oneBtn.innerText) && oneBtn.classList.contains('active')){
        previousbtn.classList.add('disabled');
        
    }else if(previousbtn.classList.contains('disabled')){
        previousbtn.classList.remove('disabled');
    }

    //pagination Next Enable/Disable
    let maxPaginationLength = (parseInt(errorFreeDataLength / paginationSelectNumber) + ((errorFreeDataLength % paginationSelectNumber !== 0) ? 1:0 ));

    let nextBtn = document.getElementById('nextBtn');
    if( maxPaginationLength === parseInt(threeBtn.innerText) && threeBtn.classList.contains('active')){
        nextBtn.classList.add('disabled');
        
    }else if(nextBtn.classList.contains('disabled')){
        nextBtn.classList.remove('disabled');
    }

    for(let i = 1; i <= maxPaginationLength; i++){
        if(i >= 3){
            if(threeBtn.classList.contains('d-none')){
                threeBtn.classList.remove('d-none')
            }
        }else{
            threeBtn.classList.add('d-none');    
        }
        
        if(i >= 2){
            if(twoBtn.classList.contains('d-none')){
                twoBtn.classList.remove('d-none')
            }
        }else{
            twoBtn.classList.add('d-none');    
        }

        if(i >= 1){
            if(oneBtn.classList.contains('d-none')){
                oneBtn.classList.remove('d-none')
            }
        }else{
            oneBtn.classList.add('d-none');    
        }
    }

    // console.log();

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    // filter Country Code pagination Select Number table data display Delete
    // const filterCountryCode = PaginationDisplayPage(1, paginationSelectNumber, errorFreeData);
    
    // Pagination Button Section


    // Table Data Process
    let HTMLValidData = 0;
    filterCountryCode.forEach((value) =>{
        HTMLTableData += `<tr><td>${outputSerialNumber + HTMLValidData++ + 1}</td><td>${value.code}</td><td>${countryCodeList[value.code]}</td><td>${value.count}</td></tr>`;
    });

    // Empty Table Data
    if(HTMLTableData === ''){
        HTMLTableData += `<tr><td colspan="4">Data Not Found!</td></tr>`;
    }

    // Output Result Count
    let outputResultCount = document.getElementById('output-count');
    // outputResultCount.innerHTML = `Output: ${HTMLValidData} - ${outputSerialNumber + 1} to ${outputSerialNumber + filterCountryCode.length} Out Of ${errorFreeDataLength}`;
    outputResultCount.innerHTML = `<b>Output: ${(errorFreeDataLength) ? outputSerialNumber + 1 : 0} to ${outputSerialNumber + filterCountryCode.length} Out Of ${errorFreeDataLength}</b>`;

    // Rander Table Section
    const outputBoxTable = document.getElementById('output-table-data');
    outputBoxTable.innerHTML = HTMLTableData;
}


function DataProcessAndErrorReport(countryCodeLength, countryCode){
    let HTMLInValidData = 0;
    let HTMLInValidInput = '';
    const errorFreeData = [];
    countryCode.forEach((value) =>{
            if(countryCodeList[value.code] !== undefined){
                errorFreeData.push(value);
            }else{
               if(countryCodeLength != 0 && value.code != ''){
                    HTMLInValidData++;
                    HTMLInValidInput += ` ${value.code},`;
               } 
            } 
        });

        
    // Error Total Contary Code Rander Menu Output Result  
    let outputErrortCount = document.getElementById('output-notfound');
    if(HTMLInValidData !== 0){
        outputErrortCount.innerHTML = `Country Code Not Found: ${HTMLInValidData}`;
    }else{
        outputErrortCount.innerHTML = '';
    }

    // Error Rander Contary Code Not Found
    const outputBoxContaryNotFound = document.getElementById('contary-not-found');
    let ContaryNotFound = ((HTMLInValidData ) ? "\nCountry Code Not Found: " + HTMLInValidData + ' (' + (HTMLInValidInput[HTMLInValidInput.length - 1] != ',' ? HTMLInValidInput : HTMLInValidInput.slice(0, -1)) + ' )' : '');
    outputBoxContaryNotFound.innerHTML = `<b>${ContaryNotFound}<b/>`;

    return errorFreeData;
}

function PaginationDisplayPage(pageNumber, itemsPerPage, dataArray) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataArray.slice(startIndex, endIndex);
}

function PaginationSelectNumber(paginationLength){
    // Pagination Select Number
    let paginationSelectTotalNumber = document.getElementById('pag-total');
    paginationSelectTotalNumber.innerHTML = `Total: ${paginationLength}`

    let paginationSelectNumber = document.getElementById('pagination-select-number');
    // paginationSelectNumber.innerHTML = '';
    for(let i = 1; i < paginationLength; i++){
        if(i % 10 == 0 && i !== 10){
            const option = document.createElement("option");
            option.value = `${i}/page`;
            option.textContent = `${i}/page`;
            // paginationSelectNumber.appendChild(option);
        }
    }

    const option = document.createElement("option");
    option.value = paginationLength;
    option.textContent = `All/page`;
    // paginationSelectNumber.appendChild(option);

    return parseInt(paginationSelectNumber.value);
}

function PaginationButtonActiveCOlorAndSelectNumber_Next(pageNumber, oneBtn, twoBtn, threeBtn){
    if(oneBtn.classList.contains('active')){
        pageNumber = parseInt(twoBtn.innerText);

        oneBtn.classList.remove('active');
        twoBtn.classList.add('active');
    }else if(twoBtn.classList.contains('active')){
        pageNumber = parseInt(threeBtn.innerText);

        twoBtn.classList.remove('active');
        threeBtn.classList.add('active');

    }else if(threeBtn.classList.contains('active')){
        oneBtn.innerHTML = parseInt(oneBtn.innerText) + 1;
        twoBtn.innerHTML = parseInt(twoBtn.innerText) + 1;
        threeBtn.innerHTML = parseInt(threeBtn.innerText) + 1;

        pageNumber = parseInt(threeBtn.innerText);
    }

    return pageNumber;
}

function PaginationButtonActiveCOlorAndSelectNumber_Previous(pageNumber, oneBtn, twoBtn, threeBtn){
    if(oneBtn.classList.contains('active')){
        oneBtn.innerHTML = parseInt(oneBtn.innerText) - 1;
        twoBtn.innerHTML = parseInt(twoBtn.innerText) - 1;
        threeBtn.innerHTML = parseInt(threeBtn.innerText) - 1;

        pageNumber = parseInt(oneBtn.innerText);

    }else if(twoBtn.classList.contains('active')){
        pageNumber = parseInt(oneBtn.innerText);
        twoBtn.classList.remove('active');
        oneBtn.classList.add('active');

    }else if(threeBtn.classList.contains('active')){
        pageNumber = parseInt(twoBtn.innerText);

        threeBtn.classList.remove('active');
        twoBtn.classList.add('active');                
    }

    return pageNumber;
}

// Export CSV File
function exportCSV(){
    let errorFreeData = myFunction('exportCSV');
    let currentDate = new Date();
    downloadCSV(CSVFormater(errorFreeData), `Country Full Name Converter - ${currentDate.toLocaleDateString().toString()} - ${currentDate.toLocaleTimeString().toString()}.csv`); 
}

function CSVFormater(errorFreeData){
    let headerString = `No,Country Code,Country Name,Country Count\n`;
    let dataString =  errorFreeData.reduce((total, value, index) => total += `${index + 1},${value.code},${countryCodeList[value.code]},${value.count}\n`,'');
    return headerString + dataString
}


function downloadCSV(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}