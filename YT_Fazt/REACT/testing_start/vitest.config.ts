/* /// <reference types="vitest" /> */
/**Referencia con triple barra
 * Las reference creadas con tres barras al inicio se tienen que
 * crear la inicio de el archivo
 * Esta trae todo lo que le pidas, en este caso mete en este archivo todosl os types de el archivo vitest
 * Warning: esto hace que se haga más uso de memoria, es buena practica no usarla
 */
//vitest.config.ts
/* Este archivo tiene que encontrarse en
la máxima prioridad (Entendiendo esto en node como en el directorio más alto)
*/

//No se autogenera
import {defineConfig} from 'vitest/config'

/**Glob pattern
 * Los glob pattern son patrones con los que puedes indicar varios archivos
 * solo mostrando que estructura o patron tiene su nombre de archivo
 * @example
 * El glob pattern que tiene defineConfig.test.include indica:
 * 
 * Primero con los dos asteriscos barra: indica cualquier directorio
 * Segundo, el asterisco antes de el punto y despues de la barra: cualquier conjunto de caracteres
 * Tercero, .{test,spec}. después de el nombre: puede tener .test. o .spec.
 * Cuarto, .tsx: tiene que acabar en tsx
 * 
 */

/**
 * Cofiguración
 * Los glob patterns que estan indicados, son los que vienen por defecto si no se incluyesen en el Test
 */
export default defineConfig({
    //Los glob patterns que estan indicados, son los que vienen por defecto si no se incluyesen en el test:{}
    test:{
        /**environment, type of test you want to do
         * --Default
         * 'node'
         * --Browser-like
         * 'jsdom' | 'happy-dom'
         * --Building edge functions
         * ---Estas son pruebas realizadas en servidores para probar, rendimiento, cache, seguridad, transformación multimedia...
         * ---Unos tests más centrados en el rendimiento final
         * 'edge-runtime'
         */
        environment: 'jsdom',
        /**Se incluye los archivos que vas a poder se testeados
         * Este es un string[] que tiene "glob patterns"
         * Prioridad?
         */
        include:['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        /** Archivos excluidos
         * Se indican aquí aquellos archivos que no se van a testear al hacer un test venerico
         */
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'],
        /** Testeo en el propio código
         * Aquí se incluyen aquellos archivos donde en el mismo código, se crea el test
         * y de esta manera se pueden tener más cercanos los testeos
         * A mi opinion no lo usaría ya que hace dificulta la lectura de el archivo que además dentro esten los test
         */
        includeSource:[],

        deps:{
            /**Contiene los directorios donde se
             * encuentran los paquetes externos
             */
            external:['**/node_modules/**'],
            /**Dirección de paquetes internos,
             * también puede ser 'true', lo que hará que
             * todas las depencias de SSR externals se cargen,
             * SSR es done cuando no usas node_modules, se encuentran las dependencias
             */
            inline:[],
            /**Aunque las dependencias esten en formato ESM 
             * Intenta forzar encontrarlas en formato CJS
             * Siempre dejalo en falso, no se que ventajas tiene
             */
            fallbackCJS:false,
            /**Ejecuta el Loader de node.js que es experimental
             * este arregla los problemas internos de los paquetes defectuosos
             * a através de un algoritmo propio
             */
            registerNodeLoader:false
        }
    }
})