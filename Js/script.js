


function simpleFetch(url){
    
    fetch("https://randomuser.me/api/")
    .then(response => {
    
    if (!response.ok) {
    throw new Error(`Något gick fel-` + response.status);
    
    }
    
    return response.json();
    
    })
    
    .then(data => {
    console.log('Data hämtad:', data);
    let joketext = data["setup"];
    document.getElementById("mytext").innerText=joketext;
    
    
    return data;
    })
    
    .catch(error => {
    console.error('Fetch-fel:', error);
    
    });
    }
    
    function showData3(){
        let joketext4 = document.getElementById("text3").value;          //id
        let apiResponse = simpleFetch(joketext4);
      
     }   










