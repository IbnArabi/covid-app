fetch('https://covid-api.mmediagroup.fr/v1/vaccines?status=confirmed&country=Pakistan')
    .then(response => {return response.json()})
    .then(data => {

        console.log(data)

    
        document.getElementById("vaccine").innerHTML = `
            <div>
                <h1 class="main-vaccine-zone"><span class="vaccine-style">Vaccine</span> <span style="color: crimson;">Report</span>- <span class="colour">${data.All['country']}</span></h1>
                <h1 class="last-update">Last Update: ${data.All["updated"]}<span class="align-now">Information is from thrid-party sites</span></h1>
                <h1 class="population vbox-update">Population: <br><span class="num">${data.All.population}</span></h1>
                <h1 class="part-vacc vbox-update fix">Partially Vaccinated <img src="vacc_partial.png" class="images"><br><span class="num">${data.All.people_partially_vaccinated}</span></h1>
                <h1 class="full-vacc vbox-update">Fully Vaccinated <img src="vacc_full.png" class="images"><br><span class="num">${data.All.people_vaccinated}</span></h1>
                <h1 class="total-vacc vbox-update">Total Administered <img src="vacc_people.png" class="images"><br><span class="num">${data.All.administered}</span></h1>
                <h1 class="life-exp vbox-update">Life Expenctancy <br><span class="num">${data.All.life_expectancy} years</span></h1>
                <br><a href="index.html"><button class="btn btn-primary">Return</button></a><br>

            </div>
        `
    })