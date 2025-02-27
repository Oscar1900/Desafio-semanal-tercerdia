let comentario = ["buena elección", "algo nuevo para  aprender", "esta tecnología es cautivante", "es una buena opción", "es una tecnología muy demandada", "es una tecnología que te abrirá muchas puertas","es una tecnología que te permitirá trabajar en proyectos muy interesantes", "desde el primer momento de cautivara","te ayudara a desarrollarte mejor","sumergete en esta tecnología"];
let eleccion1=prompt("Ingrese 1 para Front-End y 2 para Back-End:");
if(eleccion1 == 1) {
    console.log("Front-End");
    let eleccion2=prompt("Ingrese 1 para React y 2 para Vue:");
    if(eleccion2 == 1) {
        console.log("React");
    } else {
        console.log("Vue");
        }
}   
else {
            if(eleccion1 == 2) {
                console.log("Back-End");
                let eleccion3=prompt("Ingrese 1 para C# y 2 para Java");
                if(eleccion3 == 1) {
                    console.log("C#");
                } else {
                    console.log("Java");
                }
            }
    }
while(true){
    let tecnologia=prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    if(tecnologia == "") {
        break;
    }
    let random = Math.floor(Math.random() * comentario.length);
    alert(tecnologia + " " + comentario[random]);
}
