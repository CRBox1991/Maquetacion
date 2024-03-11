

let myArrInfo = []
function info(){
    
    let nombre = document.getElementById('nombre').value;
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let personas = document.getElementById('personas').value;
    let fecha = document.getElementById('fecha').value;
    console.log(nombre, origen, destino, personas, fecha);  

    let compilation = {
        nombre : nombre,
        origen : origen,
        destino : destino,
        personas :personas,
        fecha : fecha,
    }
    myArrInfo.push(compilation)    
}
    
    console.log(myArrInfo);


function filter()
{  
   info.innerHTML = "" 
    for (let i=0; i < myArrInfo.length; i++) 
    {    if(myArrInfo[i].destino.toLowerCase() == "canarias" || myArrInfo[i].destino.toLowerCase() == "galicia" || myArrInfo[i].destino.toLowerCase() == "mallorca"){
        let info = document.getElementById("compilation")
        info.innerHTML += "<div>" +"<h3>" + myArrInfo[i].nombre + "</h3>" +
             "<p>" + myArrInfo[i].origen + "</p>" +
             "<p>" + myArrInfo[i].destino + "</p>" +
             "<p>" + myArrInfo[i].personas + "</p>" +
             "<p>" + myArrInfo[i].fecha + "</p>" +"</div>"; 
        }     
    }
}