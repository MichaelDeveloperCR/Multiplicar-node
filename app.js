//opcion 1
//const argv = require('./config/yargs');
//argv.argv

//opcion 2
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { CrearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite)
            //node app listar --limite 5 -b 3
            //3 * 1 = 3
            //3 * 2 = 6
            //3 * 3 = 9
            //3 * 4 = 12
            //3 * 5 = 15

        break;
    case 'crear':

        CrearArchivo(argv.base, argv.limite)
            // esta opcion de color es valida pero si tiene un parametro green da error
            //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))

        // con esta se cambia a var colors = require('colors/safe');

        .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        //node app crear -l 5 -b 4
        //Archivo creado: tablas/tabla-4-al-5.txt
        break;

    default:
        console.log('comando no reconocido');
        break;
}