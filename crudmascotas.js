let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

function NewPet (){
    let nombre = prompt("Ingrese el nombre de la nueva mascota: ")
    let especie = prompt("Ingrese la especie de la mascota: ")
    let edad = prompt("Ingrese la edad de la mascota: ")
    let peso = prompt("Ingrese el peso de la mascota: ")
    let estadosalud = prompt("Ingrese el estado de salud de la mascota (Bien, Enfermo, Muerto): ")

    mascotas.push({nombre, especie, edad, peso, estadosalud });
    alert("Mascota Registrada :)")
}

function ListPet (){
    if (mascotas.length === 0){
        alert("No se encuentras mascotas regristadas.\n")
        return
    }
    let petlist = "Lista de mascotas :D"
    mascotas.forEach(m => {
        petlist += `nombre: ${m.nombre}, especie: ${m.especie}, edad: ${m.edad}, peso: ${m.peso}, Estados de Salud: ${m.estadosalud}`
    });
    alert(petlist)
}