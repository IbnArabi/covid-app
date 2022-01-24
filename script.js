const ul = document.getElementById("cases");
const list = document.createDocumentFragment();

fetch('https://covid-19.dataflowkit.com/v1/pakistan')
.then(response => {return response.json()})
.then(data => {

    console.log(data)

        
        document.getElementById("cases").innerHTML =  `
                <div>
                    <h1 class="main-title"> COVID-19 Report - <span class="colour">${data['Country_text']}</span></h1>
                    <h1 class="last-update">Last Update: ${data['Last Update']}<span class="align-now">Information is from thrid-party sites</span></h1>
                    <h1 class="covid-box ibox-update" >New Cases <br><span class="num">${data['New Cases_text']}</span> </h1>
                    <h1 class="covid-box ibox-update">New Deaths <br><span class="num">${data['New Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Active Cases <img src="cases.png" alt="new cases" class="images"> <br><span class="num">${data['Active Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Cases <img src="active.png" alt="active cases" class="images"><br><span class="num">${data ['Total Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Deaths <img src="deaths.png" alt="deaths" class="images"><br><span class="num">${data ['Total Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Recoveries <img src="recover.png" alt="recoveries" class="images"><br><span class="num">${data ['Total Recovered_text']}</span> </h1>
                </div>
            `
  
    });

fetch('https://covid-api.mmediagroup.fr/v1/vaccines?status=confirmed&country=Pakistan')
.then(response => {return response.json()})
.then(stats => {
    console.log(stats)

    /*document.getElementById("vaccine").innerHTML = `
    <h1 class="main-vaccine-zone"><span class="vaccine-style">Vaccine</span> <span style="color: crimson;">Report</span></h1>
    `*/
})