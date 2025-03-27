let NuevaMascota = {
    nombre: prompt("Ingrese el Nombre de la nueva mascota"),
    especie: prompt("Ingrese la especie de la mascota")
}


localStorage.setItem("Mascota", JSON.stringify(NuevaMascota));

console.log(NuevaMascota)