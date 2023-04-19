var url = "https://digimon-api.vercel.app/api/digimon" 
var contenido = document.querySelector(".contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        
            contenido.innerHTML +=  `
            <div class="tarjeta">
            <div class="card" style="width: 10rem; ">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.level}</p>
             
            </div>
            </div>
            </div>
            `
            if (item.id == 3) {break;}
        }
       // <a href="#" class="btn btn-primary">Go somewhere</a> 
})
