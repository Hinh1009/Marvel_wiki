async function getUsers () {
    const rawResponse= await fetch("https://gateway.marvel.com:443/v1/public/characters?&ts=12345&apikey=1cb8f124cfacf199eb92aa85d67dd9b3&hash=7867bd775a8bd67600140ee13563af61");
    const response = await rawResponse.json();
    console.log(response);
    for(let i=0;i<20;i++){
        document.getElementById("users-list").innerHTML +=`  
        <div>
          <p>${response.data.results[i].id} ${response.data.results[i].name} </p> 
          <p>${response.data.results[i].modified} </p>
        </div>
        `;
        response.data.results[i];
    }      
}
 getUsers();
