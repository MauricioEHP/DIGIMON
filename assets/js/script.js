var api_url = "https://digimon-api.vercel.app/api/digimon"
var contenido = document.querySelector("#contenido")

//var leveles = document.querySelector("#leveles")
var main =document.getElementsByTagName("main")
var scajaPrincipal = document.getElementById("cajaPrincipal")

function insertaF(){
scajaPrincipal.style.backgroundImage = "url('https://github.com/MauricioEHP/DIGIMON/blob/main/assets/img/digiworld.png')";

}



fetch(api_url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        
            contenido.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 18rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.level}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            `
            if (item.id == 3) {break;}
        }
    
})





 
