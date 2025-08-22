

let usuarios = [];


async function cargarDatos() {
    try {
        console.log('🔄 Cargando datos de usuarios...');
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        usuarios = await response.json();
        console.log('Datos cargados exitosamente');
        console.log(`Total de usuarios: ${usuarios.length}`);
        console.log('');
        return usuarios;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        return [];
    }
}


function ejercicio1() {
    console.log('EJERCICIO 1: Filtrar usuarios que vivan en South Christy ===');
    
    const usuariosSouthChristy = usuarios.filter(usuario => usuario.address.city === 'South Christy');
    
    console.log('Usuarios en South Christy:', usuariosSouthChristy);
    console.log(`Cantidad encontrada: ${usuariosSouthChristy.length}`);
    console.log('');
    return usuariosSouthChristy;
}


function ejercicio2() {
    console.log('EJERCICIO 2: Mapear solo los nombres de los usuarios ===');
    
    const nombres = usuarios.map(usuario => usuario.name);
    
    console.log('Nombres de usuarios:', nombres);
    console.log(`Total de nombres: ${nombres.length}`);
    console.log('');
    return nombres;
}


function ejercicio3() {
    console.log('EJERCICIO 3: Contar usuarios con id > 5 ===');
    
    const count = usuarios.reduce((contador, usuario) => {
        return usuario.id > 5 ? contador + 1 : contador;
    }, 0);
    
    console.log(`Usuarios con id > 5: ${count}`);
    console.log('');
    return count;
}


function ejercicio4() {
    console.log('EJERCICIO 4: Mapear array con formato "Nombre (Ciudad)" ===');
    
    const nombresCiudades = usuarios.map(usuario => 
        `${usuario.name} (${usuario.address.city})`
    );
    
    console.log('Nombres y ciudades:', nombresCiudades);
    console.log('');
    return nombresCiudades;
}


function ejercicio5() {
    console.log('EJERCICIO 5: Filtrar usuarios con correo terminado en .org ===');
    
    const usuariosOrg = usuarios.filter(usuario => 
        usuario.email.endsWith('.org')
    );
    
    console.log('Usuarios con email .org:', usuariosOrg);
    console.log(`Cantidad encontrada: ${usuariosOrg.length}`);
    console.log('');
    return usuariosOrg;
}


function ejercicio6() {
    console.log('EJERCICIO 6: Usuario con el id más alto ===');
    
    
    const maxId = Math.max(...usuarios.map(usuario => usuario.id));
    const usuarioMaxId = usuarios.find(usuario => usuario.id === maxId);
    
    console.log(`ID más alto: ${maxId}`);
    console.log('Usuario con id más alto:', usuarioMaxId);
    console.log('');
    return usuarioMaxId;
}


async function ejecutarTaller() {
    console.log('TALLER MANEJO JSON - GRUPO 1');
    console.log('==========================================');
    console.log('');
    
    
    await cargarDatos();
    
    if (usuarios.length === 0) {
        console.log('No se pudieron cargar los datos. Terminando ejecución.');
        return;
    }
    
    
    
    
    ejercicio1();
    ejercicio2();
    ejercicio3();
    ejercicio4();
    ejercicio5();
    ejercicio6();
    
    
}

if (typeof require !== 'undefined' && require.main === module) {
    ejecutarTaller();
}


module.exports = {
    cargarDatos,
    ejercicio1,
    ejercicio2,
    ejercicio3,
    ejercicio4,
    ejercicio5,
    ejercicio6,
    ejecutarTaller
};
