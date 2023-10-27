//Solicitar la edad de un usuario, con un prompt y si es mayor de edad, pedirle su nombre y apellido y saludarlo en el DOM, ¡Hola +nombre !


let nombre;
let apellido;
let saludo;

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    saludo = "¡Hola " + nombre + " " + apellido + "!";
    document.write(saludo);
} else {
    saludo = "¡No eres mayor de edad!";
    document.write(saludo);
}
