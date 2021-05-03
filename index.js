let preloader = document.getElementById('loading-area');
function myFunction(){
preloader.style.display = 'none';
}

let sendbtn = document.getElementById('sendbtn');
function SendQuery(){
alert("Thanks for Query");
}


var form=document.getElementById('form');
// let name= document.getElementById('name').Value
// let  Email=document.getElementById('Email').Value
// console.log(name)
// let a =document.getElementById('name').value;

// let  Email=document.getElementById('Email').Value
// console.log(a)
// console.log(Email)

form.addEventListener('submit',
function (e){
e.preventDefault()
var name= document.getElementById('name').Value;
var Email=document.getElementById('Email').Value;
// console.log(name)
// var num=document.getElementById('num').Value;
// var text =document.getElementById('text').Value;
url="https://jsonplaceholder.typicode.com/posts";
//     data={
//         title: name,
//     body: Email
// }
params={
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            title: name,
        body: Email
    })
    }

fetch(url,params).then(response=>response.json()).then(data=>console.log(data))
})