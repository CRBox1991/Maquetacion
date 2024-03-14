
let chart = []



let prenda1 = {
    nombre:"Pantalon Suelto Gris",
    precio: 20
}
let prenda2 = {
    nombre:"Vestido Tunico",
    precio: 25
}
let prenda3 = {
    nombre:"Falda Mid Print",
    precio: 18
}
let prenda4 = {
    nombre:"Cardigan",
    precio: 35
}
let prenda5 = {
    nombre:"Falda Mini Zebra",
    precio: 15
}
let prenda6 = {
    nombre:"Mono Overol",
    precio: 15
}
let prenda7 = {
    nombre:"Vestido Jersey",
    precio: 23
}
let prenda8 = {
    nombre:"Pantalon Ancho Black",
    precio: 19
}


jQuery(() => {
   

$("#add1").on("click" ,()=>{
    chart.push(prenda1);
    console.log(chart);
    $("#modalbody").append(`<p>${prenda1.nombre} ${prenda1.precio}`)
     
})
$("#add2").on("click" ,()=>{
    chart.push(prenda2)  
    $("#modalbody").append(`<p>${prenda2.nombre} ${prenda2.precio}`)
      
})
$("#add3").on("click" ,()=>{
    chart.push(prenda3)  
    $("#modalbody").append(`<p>${prenda3.nombre} ${prenda3.precio}`)
     
})
$("#add4").on("click" ,()=>{
    chart.push(prenda4)  
    $("#modalbody").append(`<p>${prenda4.nombre} ${prenda4.precio}`)
     
})
$("#add5").on("click" ,()=>{
    chart.push(prenda5)  
    $("#modalbody").append(`<p>${prenda5.nombre} ${prenda5.precio}`)
      
})
$("#add6").on("click" ,()=>{
    chart.push(prenda6)  
    $("#modalbody").append(`<p>${prenda6.nombre} ${prenda6.precio}`)
     
})
$("#add7").on("click" ,()=>{
    chart.push(prenda7)  
    $("#modalbody").append(`<p>${prenda7.nombre} ${prenda7.precio}`)
    
})
$("#add8").on("click" ,()=>{
    chart.push(prenda8)  
    $("#modalbody").append(`<p>${prenda8.nombre} ${prenda8.precio}`)
     
})

;
$("#chart").on("click" ,() =>{
    $("#exampleModalCenter").modal("show");
    let total = 0
    
    for(let i = 0; i < chart.length; i++){        
       total += chart[i].precio
    }
             
    $("#total").empty().append(`<p>Total: ${total}</p>`)    
})
$("#close").on("click" ,() =>{
    $("#exampleModalCenter").modal("hide")
})

})