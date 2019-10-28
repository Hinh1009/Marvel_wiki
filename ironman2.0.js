async function getUsers () {
    const rawResponse= await fetch("https://gateway.marvel.com:443/v1/public/characters/1009368?ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    document.getElementById("users-list").innerHTML +=`
        <div class="text-container" id="name">
               <h1>${response.data.results[0].name}</h1>
        </div>
        <div class="item">
            <div class="description">
               <p>${response.data.results[0].description}</p>
            </div>
           <div class="main">
               <img src="${response.data.results[0].thumbnail.path}.jpg">
           <div>
           <div class="text-container">
               <p>Id: ${response.data.results[0].id}</p>
            </div>
            <div class="text-container">
               <p>Modified:${response.data.results[0].modified}</p>
            </div>
           <h1 class="films">Films starring ${response.data.results[0].name}</h1>
        </div>
        `;
    for(let i=0;i<20;i++){
        document.getElementById("users-list").innerHTML +=`
        <div class="text">
          <div> 
            <p>${response.data.results[0].comics.items[i].name} </p>
          </div>
          <div> 
             <p>${response.data.results[0].events.items[i].name} </p>
          </div>
        </div>
        `;
        response.data.results[i];
    }   
} 
getUsers();