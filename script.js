const ul = document.getElementById("cases");
const list = document.createDocumentFragment();
var adresspak = 'https://covid-19.dataflowkit.com/v1/pakistan';
var addressksa = 'https://covid-19.dataflowkit.com/v1/saudi_arabia';
var active;
function stats(){
    var cntry = document.getElementById("country").value;

    location.href.replace("covid.html");
    fetch(`https://covid-19.dataflowkit.com/v1/${cntry}`)
    .then(response => {return response.json()})
    .then(data => {logg(data)})
}
function logg(data){
    document.getElementById("covid").innerHTML = `
                <div>
                    <h1 class="main-title"> COVID-19 Report - <span class="colour">${data['Country_text']}</span></h1>
                    <h1 class="last-update">Last Update: ${data['Last Update']}<span class="align-now">Information is from thrid-party sites</span></h1>
                    <h1 class="covid-box ibox-update" >Cases <br><span class="num">${data['New Cases_text']}</span> </h1>
                    <h1 class="covid-box ibox-update">Deaths <br><span class="num">${data['New Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Active Cases <img src="cases.png" alt="new cases" class="images"> <br><span class="num">${data['Active Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Cases <img src="active.png" alt="active cases" class="images"><br><span class="num">${data ['Total Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Deaths <img src="deaths.png" alt="deaths" class="images"><br><span class="num">${data ['Total Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Recoveries <img src="recover.png" alt="recoveries" class="images"><br><span class="num">${data ['Total Recovered_text']}</span> </h1>
                    <br><a href="vaccine.html"><button class="btn btn-primary">Vaccine Stats</button></a>
                </div>
            `
}
/*fetch(active)
.then(response => {return response.json()})
.then(data => {

        
        document.getElementById("covid").innerHTML = `
                <div>
                    <h1 class="main-title"> COVID-19 Report - <span class="colour">${data['Country_text']}</span></h1>
                    <h1 class="last-update">Last Update: ${data['Last Update']}<span class="align-now">Information is from thrid-party sites</span></h1>
                    <h1 class="covid-box ibox-update" >Cases <br><span class="num">${data['New Cases_text']}</span> </h1>
                    <h1 class="covid-box ibox-update">Deaths <br><span class="num">${data['New Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Active Cases <img src="cases.png" alt="new cases" class="images"> <br><span class="num">${data['Active Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Cases <img src="active.png" alt="active cases" class="images"><br><span class="num">${data ['Total Cases_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Deaths <img src="deaths.png" alt="deaths" class="images"><br><span class="num">${data ['Total Deaths_text']}</span></h1>
                    <h1 class="covid-box ibox-update">Total Recoveries <img src="recover.png" alt="recoveries" class="images"><br><span class="num">${data ['Total Recovered_text']}</span> </h1>
                    <br><a href="vaccine.html"><button class="btn btn-primary">Vaccine Stats</button></a>
                </div>
            `
  
    });*/
