
const product = { count: 3, price: 12.55, type: "ropa" }

//Lista de otros productos para descomentar y probar si todo funciona bien.

    // const product = { count: 5, price: 10, type: "libro" }
    // const product = { count: 10, price: 2.5, type: "alimentación" }
    // const product = { count: -3, price: 20, type: "libro" }

if (product.count < 0) product.count = 0;

let total = product.count * product.price;

let iva = {
    alimentacion: 0.1,
    libro: 0.04,
    normal: 0.21,
}

// if (product.type == "alimentación") {
//     iva = product.price * iva.alimentacion;
// } else if (product.type == "libro") {
//     iva = product.price * iva.libro;
// } else {
//     iva= product.price * iva.normal;
// }

switch(product.type){
    case "alimentación": iva = product.price * iva.alimentacion; break;
    case "libro": iva = product.price * iva.libro; break;
    default: iva= product.price * iva.normal; break;
}

let totalConIva = total + (product.count * iva);



console.log("Producto:", product.type);
console.log("Unidades:", product.count);
console.log("Precio por unidad:", product.price, "€");
console.log("IVA por unidad:", iva, "€");
console.log("---------------------------------------------");
console.log("Precio Total sin IVA:", total, "€");
console.log("IVA total:", product.count * iva, "€");
console.log("Total a pagar:", totalConIva, "€");


function getTotalVat(product) {
    return product.count > 0 ? product.count * iva : 0;
    }
console.log("\n\nObtener el IVA mediante una función:", getTotalVat(product));

//CALCULAR SUELDO NETO

            // IRPF:
            // Hasta 12.450 euros 19,0%
            // De 12.450 euros a 20.199 euros 24,0%
            // De 20.200 euros a 35.199 euros 30,0%
            // De 35.200 euros a 59.999 euros 37,0%
            // De 60.000 euros a 299.999 euros 45,0%
            // A partir de 300.000 euros 47,0%
            // Si el empleado tiene hijos, restarle a la retencion 2 puntos.

            // Cotización a la Seguridad Social (6,35%):
            // Pero las aportaciones están topadas, así que a partir de los 49.000€ estas son de 3.101,42€

            // Dividir esa cifra entre los 12 meses del año, o 14 meses si tienes paga doble.


const empleado = { bruto: 14500, hijos: 2, pagas: 14 }

//Lista de otros empleados para descomentar y probar si todo funciona bien.

    // const empleado = { bruto: 18000, hijos: 1, pagas: 12 }
    // const empleado = { bruto: 60000, hijos: 3, pagas: 14 }
    // const empleado = { bruto: 300000, hijos: 4, pagas: 14 }

let retencionIrpf;

if (empleado.bruto < 12450){
     retencionIrpf = empleado.bruto * 0.19;
} else if (empleado.bruto >= 12450 && empleado.bruto < 20200){
    retencionIrpf = empleado.bruto * 0.24;
} else if (empleado.bruto >= 20200 && empleado.bruto < 35200){
    retencionIrpf = empleado.bruto * 0.30;
} else if (empleado.bruto >= 35200 && empleado.bruto < 60000){
    retencionIrpf = empleado.bruto * 0.37;
} else if (empleado.bruto >= 60000 && empleado.bruto < 300000){
    retencionIrpf = empleado.bruto * 0.45;
} else {
    retencionIrpf = empleado.bruto * 0.47;
} 

let hijos;
empleado.hijos >= 2 ? hijos = retencionIrpf * (2/100): hijos = "No aplica";

let segSocial = empleado.bruto * 0.0635;
if (empleado.bruto >= 49000) segSocial = 3101.42;

const neto = empleado.bruto - (retencionIrpf + segSocial);

const netoMensual = neto / empleado.pagas;

console.log("_____________________________________________");
console.log("NOMINA:");
console.log("Sueldo Bruto:", empleado.bruto, "€");
console.log("IRPF:", retencionIrpf, "€");
console.log("Descuento por hijos:", hijos, "€");
console.log("Cotización a la Seguridad Social:", segSocial, "€");
console.log("Sueldo Neto Anual:", neto, "€");
console.log("Sueldo Neto Mensual:", netoMensual, "€");

