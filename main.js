let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

function NewPet (callback){
    let nombre = prompt("Ingrese el nombre de la nueva mascota: ")
        let especie = prompt("Ingrese la especie de la mascota: ")
        let edad = prompt("Ingrese la edad de la mascota: ")
        let peso = prompt("Ingrese el peso de la mascota: ")
        let estadosalud = prompt("Ingrese el estado de salud de la mascota (Bien, Enfermo, Muerto): ")

        mascotas.push({nombre, especie, edad, peso, estadosalud });
        localStorage.setItem("mascotas", JSON.stringify(mascotas));
        alert("Mascota Registrada :)")
        if (callback) callback();
}

function ListPet (){
    if (mascotas.length === 0){
        alert("No se encuentras mascotas regristadas.\n")
        return
    }
    let petlist = "Lista de mascotas :D"
    mascotas.forEach(m => {
        petlist += `nombre: ${m.nombre}, especie: ${m.especie}, edad: ${m.edad}, peso: ${m.peso}, Estados: ${m.estadosalud}`
    });
    alert(petlist)
}

function SchearPet (){
    let nombre = prompt("Ingrese el nombre de la mascota que busca")
        let animal = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLocaleLowerCase())

        if (animal) {
            alert(`Mascota encontrada:\nnombre: ${animal.nombre}, Especie: ${animal.especie}, Edad: ${animal.edad}, Peso: ${animal.peso}kg, Estado: ${animal.estadosalud}`)
        }else{
            alert("Mascota no encontrada, lo siento :c")
        }
}

function UpdatePet(){
    let nombre = prompt("Ingrese el nombre de la mascota a actualizar")
        let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLocaleLowerCase())

        if (mascota){
            let newstate = prompt("Ingrese el nuevo estado de salud de la mascota: ")
            mascota.estado = newstate
            alert("El estado de la mascota ha sido cambiado :D")
        }else{
            alert("perdon pero la mascota no se encuentra :C")
        }
}

function DeletePet (){
    let nombre = prompt("Ingrese el nombre de la mascosta que deseas eliminar")
    let index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombre.toLocaleLowerCase())

    if (index !== -1){
        mascotas.splice(index, 1)
        alert("Mascota eliminada :D")
    }else{
        alert("Masconta no encontrada :c")
    }
}

function petmenu(){
    let opcion;
    while (opcion !== "6"){
        opcion = prompt("Seleccione una opcion:\n1. Registrar mascota \n2. Lista de mascotas \n3. Buscar Mascota \n4. Actualizar mascota \n5. Eliminar mascota \n6. Salir")
        switch (opcion) {
            case "1":
                NewPet()
                break
            case "2":
                ListPet()
                break
            case "3":
                SchearPet()
                break
            case "4":
                UpdatePet()
                break
            case "5":
                DeletePet()
                break
            case "6":
                alert("Saliendo del programa. . .")
                return
            default:
                alert("Opcion no reconocia D:")       
        }
    }
}

petmenu()