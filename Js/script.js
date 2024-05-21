

let body = document.getElementById("body");
let header = document.createElement("header");
let h1 = document.createElement("h1");
let myimage = document.createElement("img");
let label1 = document.createElement("label");
let myfname = document.createElement("p");
let label2 = document.createElement("label");
let mylname = document.createElement("p");
let label3 = document.createElement("label");
let mygender = document.createElement("p");
let label4 = document.createElement("label");
let myphone = document.createElement("p");
let label5 = document.createElement("label");
let myemail = document.createElement("p");
let button = document.createElement("button");
let footer = document.createElement("footer");
let div = document.createElement("div");
let main = document.createElement("main");
let h2 = document.createElement("h2");

body.appendChild(header);
body.appendChild(main);
header.appendChild(h2);

main.appendChild(h1);
main.appendChild(myimage);
main.appendChild(div);   

div.appendChild(label1);
div.appendChild(myfname);
div.appendChild(label2);
div.appendChild(mylname);
div.appendChild(label3);
div.appendChild(mygender);
div.appendChild(label4);
div.appendChild(myphone);
div.appendChild(label5);
div.appendChild(myemail);

main.appendChild(button);

body.appendChild(footer);
    

header.setAttribute("id","myheader");
    
h1.innerText = "API Random users:";

button.setAttribute("id","mybutton");
button.setAttribute("type","button");
button.setAttribute("onclick","showData();");
button.innerText = "Click for random users:";


footer.setAttribute("id","myfooter");


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

    
    
    
    myimage.setAttribute("src", data.results[0].picture.large);
    myimage.setAttribute("id","image");
    myimage.setAttribute("class","myPtag");
    myimage.setAttribute("alt","");
    

    div.setAttribute("id","mydiv");
    
    
    label1.setAttribute("class","myLtag")
    label1.setAttribute("for","fname");
    label1.innerText = "First Name:";
    

    
    myfname.setAttribute("class","myPtag");
    myfname.setAttribute("id","fname");
    myfname.innerText = data.results[0].name.first;
   
    
    label2.setAttribute("class","myLtag");
    label2.setAttribute("for","lname");
    label2.innerText = "Last Name:";
    

    
    mylname.setAttribute("class","myPtag");
    mylname.setAttribute("id","lname");
    mylname.innerText = data.results[0].name.last;
   
    
    
    label3.setAttribute("class","myLtag");
    label3.setAttribute("for","gender");
    label3.innerText = "Gender:";
    

    
    mygender.setAttribute("class","myPtag");
    mygender.setAttribute("id","gender");
    mygender.innerText = data.results[0].gender;
    

    
   
    label4.setAttribute("class","myLtag");
    label4.setAttribute("for","phone");
    label4.innerText = "Phone number:";
    
   
    myphone.setAttribute("class","myPtag");
    myphone.setAttribute("id","phone");
    myphone.innerText = data.results[0].phone;
    
   
    label5.setAttribute("class","myLtag");
    label5.setAttribute("for","email");
    label5.innerText = "E-mail:";
    

    
    myemail.setAttribute("id","email");
    myemail.setAttribute("class","myPtag");
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
    
      

     










