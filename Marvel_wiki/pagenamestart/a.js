async function getUsers() {
    var URL_PAGE = window.location.href;
    var ID = URL_PAGE.split("?")[1];;
    const rawResponse = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=a&limit=60&ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for (let i = 0; i < 60; i++) {
        document.getElementById("users-list").innerHTML += `  
        <div class="a">
        <a href="../character.html?${response.data.results[i].id}"><img src="${response.data.results[i].thumbnail.path}.jpg"/></a>;
        <p > ${response.data.results[i].name} </p>; 
        <p >id: ${response.data.results[i].id} </p>;
         
        </div>
        `;
    }
}
getUsers();