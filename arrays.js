
let comidas = [];
comidas.push('Pizza', 'Sushi', 'Tacos', 'Hamburguesa', 'Ensalada')
console.log(comidas[3]);
comidas.unshift('Arroz');
console.log(comidas)
comidas[4] = 'Pan'
console.log(comidas);
comidas.shift(comidas); /Eliminar primer elemento/
console.log(comidas)
comidas.splice(2,1)
console.log(comidas)
delete(comidas[1])
console.log(comidas)
comidas[1] = 'Hot dog'
console.log(comidas)