
function simpleFetch(url){
    fetch(url)
    .then(response => {
    
    if (!response.ok) {
    throw new Error(`Något gick fel-` + response.status);
    
    }
    
    return response.json();
    
    })
    
    .then(data => {
    console.log('Data hämtad:', data);

    let myfname = document.getElementById("fname");
    myfname.innerText = data.results[0].name.first;


    let mylname = document.getElementById("lname");
    mylname.innerText = data.results[0].name.last;


    let mygender = document.getElementById("gender");
    mygender.innerText = data.results[0].gender;


    let mynumber = document.getElementById("number");
    mynumber.innerText = data.results[0].location.street.number;

    
    let myemail = document.getElementById("email");
    myemail.innerText = data.results[0].email;

    

    
    
    return data;

    })
    
    .catch(error => {
    console.error('Fetch-fel:', error);
    
    });
    }
    
    function showData(){
        let mydata = "https://randomuser.me/api/";
        let apiResponse = simpleFetch(mydata);
    }  
    
      showData();

     










