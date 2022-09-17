 const loadDetails = () => {
  const inputElement = document.getElementById("input-field");
  const inputInText = inputElement.value;
  inputElement.value = "";
  if (inputInText == "") {
    return alert("Wrong Input");
  }
  const url = `https://restcountries.com/v3.1/name/${inputInText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (data) => {
  const detailContainer = document.getElementById("details");
  detailContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card mx-auto bg-secondary text-light m-4 p-4" style="width: 18rem">
            <img src="${data.flags.svg}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${data.name.common}</h5>
                <p class="card-text">
                <span class="text-info text-semibold">Population:</span> ${data.population} <br>
                <span class="text-info text-semibold">Capital:</span> ${data.capital} <br>
                <span class="text-info text-semibold">Region:</span> ${data.region} <br>
                <span class="text-info text-semibold">Timezone:</span> ${data.timezones[0]} <br>
                <span class="text-info text-semibold">Currency:</span> ${
                  data.currencies[Object.keys(data.currencies)[0]].name
                } <br>
                </p>
                <div class="d-flex justify-content-between">
                <a href="${
                  data.maps.googleMaps
                }" class="btn btn-primary">Located</a>
                
                <a onclick="myFunction()" class="btn btn-primary" id="myBtn">Read more</a></div>

                <div><span id="dots"></span><span id="more">
                <div>
                <p>
                <span class="text-info text-semibold">sub-region :</span>${data.altSpellings.subregion ? data.altSpellings.subregion : 'no sub-region' } <br>
                <span class="text-info text-semibold">Area :</span>${data.area}  <br>
                <span class="text-info text-semibold">Offisial Name: </span>${data.name.official ? data.name.official: 'No Official Name'} <br>
                <span class="text-info text-semibold ">Car : </span>${data.car.signs[0]} <span class="text-info text-semibold">and drive</span> ${data.car.side} <br>
                <span class="text-info text-semibold text-wrap">borders side country: </span> ${data.borders[0]} , ${data.borders[1]} <br>
                </p>
                </div></span></div> 
                
              
  `;
  detailContainer.appendChild(div);
};

// custom modal / eclips 

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


