# Taller Manejo JSON - Grupo 1: Usuarios

## Objetivo del Taller
- Aprender a consumir datos en formato JSON desde APIs públicas usando fetch
- Practicar la manipulación de datos con los métodos filter, map y reduce
- Trabajar colaborativamente en equipo para resolver ejercicios prácticos

## Fuente de Datos
**URL:** https://jsonplaceholder.typicode.com/users

## Actividades a Resolver

### 1. Filtrar usuarios que vivan en South Christy
Usar `filter()` para encontrar usuarios cuya ciudad sea "South Christy"

### 2. Mapear solo los nombres de los usuarios
Usar `map()` para extraer únicamente los nombres de todos los usuarios

### 3. Reducir para contar usuarios con id > 5
Usar `reduce()` para contar cuántos usuarios tienen un id mayor a 5

### 4. Mapear un array de strings con Nombre (Ciudad)
Usar `map()` para crear strings con formato "Nombre (Ciudad)"

### 5. Filtrar usuarios cuyo correo termine en .org
Usar `filter()` para encontrar usuarios con emails que terminen en ".org"

### 6. Encontrar el usuario con el id más alto (find)
Usar `find()` para localizar el usuario que tenga el id más alto

## Cómo ejecutar

### Opción 1: Node.js
```bash
node taller-grupo1.js
```

### Opción 2: En el navegador (consola de desarrollador)
Abrir las herramientas de desarrollador (F12) y pegar el código en la consola.

## Estructura del Código

El archivo `taller-grupo1.js` contiene:
- Función `cargarDatos()`: Obtiene los datos de la API usando fetch
- Funciones `ejercicio1()` a `ejercicio6()`: Cada una resuelve una actividad específica
- Función `ejecutarTaller()`: Ejecuta todos los ejercicios en secuencia
- Exportaciones de módulo para reutilización

## Instrucciones para el Grupo

1. **Estudien el código**: Revisen cada función y entiendan cómo funciona
2. **Ejecuten el script**: Usen `node taller-grupo1.js` para ver los resultados
3. **Experimenten**: Modifiquen los filtros o mapeos para probar diferentes casos
4. **Discutan**: Comparen resultados entre los integrantes del grupo
5. **Optimicen**: Piensen en formas alternativas de resolver cada ejercicio

## Métodos de Arrays Utilizados

- **filter()**: Crea un nuevo array con elementos que pasan una condición
- **map()**: Transforma cada elemento del array y retorna un nuevo array
- **reduce()**: Reduce el array a un solo valor aplicando una función acumuladora
- **find()**: Encuentra el primer elemento que cumple una condición

## Notas Importantes

- El script maneja errores de red automáticamente
- Los resultados se muestran en consola con formato legible
- Cada ejercicio es independiente pero usa los mismos datos base
- El código está comentado para facilitar el aprendizaje
