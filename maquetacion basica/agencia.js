

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
}
    myArrInfo.push(compilation)
    //console.log(myArrInfo);

    let infor = document.getElementById('compilation')

function filter()
{
    for(let i = 0; i < myArrInfo.length; i++){
        
    infor.innerHTML[i] += `<p>${myArrInfo[i]}</p>` 
    }                       
}