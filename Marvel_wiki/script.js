document.getElementById('span3').addEventListener('mouseover', function() {
    document.getElementById('dropdown').style.display = 'block';
});
document.getElementById('dropdown').addEventListener('mouseleave', function() {
    document.getElementById('dropdown').style.display = 'none';
});
async function getUsers() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009368?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
          </div>
        `;
    }
}
getUsers();
async function getUsers2() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1010801?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers2();
async function getUsers3() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009220?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers3();
async function getUsers4() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009351?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers4();
async function getUsers5() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1016825?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers5();
async function getUsers6() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009664?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers6();
async function getUsers7() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009189?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers7();
async function getUsers8() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009338?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers8();
async function getUsers9() {
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters/1009407?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 50; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="character.html?${response.data.results[i].id}">
        <img src="${response.data.results[i].thumbnail.path}.jpg"/></a>
         </div>
        `;
    }
}
getUsers9();