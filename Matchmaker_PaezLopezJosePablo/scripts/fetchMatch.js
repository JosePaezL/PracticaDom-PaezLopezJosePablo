window.onload = function() {
    cargarInfo();
    //const data = recuperarInfo();
    //console.log(data);
    //llenarInformacion(data);
}

function recuperarInfo() {
    return JSON.parse(localStorage.getItem("matchinfo"));
}

function cargarInfo() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);

    const nac = urlParams.get("nac");
    const genero = urlParams.get("genero");

    const request = new Request(
        `https://randomuser.me/api/?nat=${nac}&gender=${genero}`,
        {
            method: 'get',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
        }
    );

    fetch(request).then(function(response) {
        return response.json();
    }).then(function(data){
        llenarInformacion(data.results[0]);
    }).catch(function(error){
        console.log(error);
        //alert("Hubo un error encontrando tu otra mitad.")
    })
}

function llenarInformacion(data) {
    console.log(data);
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cell = document.getElementById("cellphone");

    img.src = data.picture.large;
    name.innerText = `${data.name.first} ${data.name.last}`;
    age.innerText = data.dob.age;
    dob.innerText = data.dob.date;
    address.innerText = `${data.location.street.name} ${data.location.street.number}`
    gender.innerText = data.gender;
    city.innerText = data.location.city;
    state.innerText = data.location.state;
    country.innerText = data.location.country;
    email.innerText = data.email;
    phone.innerText = data.phone;
    cell.innerText = data.cell;
}