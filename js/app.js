const loadcountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadcountries();

const displayCountries = countries => {
    // console.log(country);
    const divCountries = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('col-4');
        // div.classList.add('border border-success');
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="${country.flag}" class="card-img-top img-thumbnail" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${country.name}</h5>
                    <p class="card-text">Capital: ${country.capital}</p>
                </div>
                <div class="card-footer">
                <button onclick="loadCountryByName('${country.name}')" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                </div>
            </div>
        </div>
        `
        divCountries.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => exampleModal(data[0]));
}

const exampleModal = detail => {
    console.log(detail);
    const countryDetail = document.getElementById('country-detial');
    countryDetail.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="modal-content">
                
                <div class="modal-body">
                    <img src="${detail.flag}" class="card-img-top img-thumbnail" alt="...">
                    <h5 class="card-title mt-3">Name: ${detail.name}</h5>
                    <p class="card-text">Capital: ${detail.capital}</p>
                </div>
                <div class="modal-footer mx-auto">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
    `
    countryDetail.appendChild(div);
}
