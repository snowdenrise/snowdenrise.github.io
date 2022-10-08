//Cola

var cola = [12,13,14,15,16,17,18,19,20]

console.log("Cola: "+cola);

function nuevoAcola(queue,nuevoElemento){
    queue.push(nuevoElemento);
    return cola.shift();
}

console.log("El elemento eliminado fue: "+nuevoAcola(cola,25));
//var indiceFinalCola = cola.length;
//console.log("El elemento agregado fue: "+cola[indiceFinalCola-1]);

//console.log("Nueva Cola: "+cola);