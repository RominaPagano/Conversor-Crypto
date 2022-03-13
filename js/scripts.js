// URL API.
let apiCrypto = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"


//CALCULADORA
class Moneda{
    constructor(moneda){
        this.nombre = moneda.name; 
        this.precio = moneda.current_price;
    }
    
    obtenerResultado(){
        const entrada = document.getElementById("entrada");
        const conversion = entrada.value / this.precio
        return `${conversion} ${this.nombre} `
    };
    
};


//FETCH- TRAYENDO LA API
var variableGlobal; 
fetch(apiCrypto)
.then (resultado => resultado.json())
.then (respuesta =>{
        variableGlobal = respuesta;
        
        for (let tipo of respuesta){
            const element = document.createElement("option");
            element.innerHTML =`${tipo.symbol}`
            tipoCrypto.appendChild (element);
        }  
    })
.catch(err => console.log("Error en la api"));   



//SE EJECUTA CADA VEZ QUE INGRESO UN VALOR EN EL INPUT.
const salida = document.getElementById ("contenedorResultado");
document.getElementById ("entrada").onkeydown = function(e){
    salida.innerHTML = "";
}     

//SE EJECUTA CUANDO INGRESO EL BOTON CAMBIAR.
let form = document.getElementById ("form");
let tipoCrypto = document.getElementById("tipoCrypto");

form.onsubmit = function(e){
    e.preventDefault();
    salida.innerHTML = "";
    let moneda = variableGlobal.find 
        (x => x.symbol === tipoCrypto.value);
    let infoMoneda = new Moneda (moneda);
    const elemento = document.createElement("p");
        elemento.innerHTML= infoMoneda.obtenerResultado();
        elemento.classList.add("dark");
        salida.appendChild(elemento);
    
}  

//MODO OSCURO
const btnSwitch = document.querySelector ("#switch");

btnSwitch.addEventListener ("click", () =>{
   document.body.classList.toggle ("dark");

   btnSwitch.classList.toggle("active");
});


//DATATABLES-TABLA

let tabla = $('#tabla').DataTable({
   responsive:true,
   autoWidth:false,
   "ajax": {
       "url":apiCrypto,
       "dataSrc": ""
   },

   "columns":[
       {"data": "market_cap_rank"},
       {"data": "img",         
       "render" : function ( data, type, row )  {return '<img width= 25 src = "'+row.image+'">'+row.name}},
       {"data": "current_price"}
   ],

   "language": {
       "lengthMenu": "Mostrar _MENU_ registros por pagina",
       "zeroRecords": "Nada encontrado - Disculpa",
       "info": "Mostrando la pagina _PAGE_ de _PAGES_",
       "infoEmpty": "No records available",
       "infoFiltered": "(filtrado de _MAX_ registros totales)",
       "search": "Buscar:",
       "paginate": {
           "next":"Siguiente",
           "previous": "Anterior"
       }
   }
});




     




