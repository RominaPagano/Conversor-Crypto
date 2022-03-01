
class Moneda{
    constructor(moneda){
        this.nombre = moneda.nombre; 
        this.precio = moneda.precio;
    }
    
    obtenerResultado(){
        const entrada = document.getElementById("entrada");
        const conversion = entrada.value/ this.precio
        return `${conversion} ${this.nombre} `
        
    };
    
};
       

        
const arrayCriptosRecibo  = [{nombre: "BTC", precio: 37739.49}, 
                             {nombre: "ETH", precio: 2801.25}, 
                             {nombre: "SOL", precio: 104.00},
                             {nombre: "AVAX", precio: 70.68}];

const arrayCriptosUsuario = [];


const salida = document.getElementById ("contenedorResultado");
       
//Esta funcion se ejecuta cada vez que ingreso un valor en el input
document.getElementById ("entrada").onkeydown = function(e){
    salida.innerHTML = "";
    
}     
    
    
//apreto el boton cambiar
document.getElementById ("form").onsubmit = function(e){
    e.preventDefault();
    salida.innerHTML = "";
    let moneda = arrayCriptosRecibo.find 
        (x => x.nombre === document.getElementById("tipoCrypto" ).value);
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
        
        
//TABLA
$('#tabla').DataTable({
    responsive:true,
    autoWidth:false,

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

             
        

        


     




