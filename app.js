document.getElementById("boton").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const calificacion1 = parseFloat(document.getElementById("califacion1").value);
    const calificacion2 = parseFloat(document.getElementById("califacion2").value);
    const calificacion3 = parseFloat(document.getElementById("califacion3").value);

    const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    let mensaje = "Tu promedio es: " + promedio.toFixed(2); //Se utiliza para redondear el valor de la variable

    if (promedio > 7.9) {
        mensaje += "\n¡Felicidades, lo lograste!";
    } else {
        mensaje += "\n¡Lo siento, tienes ordinario!";
    }

    alert(mensaje); //Asegurarse de que se ejecuta después de que se haya calculado el promedio
});
