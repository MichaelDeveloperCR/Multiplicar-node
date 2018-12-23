//requireds
const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`==table de ${base}==`.green);
    console.log('===================='.green);


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }


        for (let i = 1; i <= limite; i++) {

            console.log(`${base} * ${i} = ${base * i}`);

        }

    });


}

// con limite
CrearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }

        let data = '';
        for (let i = 1; i < limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;


        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
        });

    });


}

// otra forma es module.exports.CrearArchivo...
module.exports = {

    CrearArchivo,
    listartabla
}