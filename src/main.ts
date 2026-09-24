import {CRMController} from './controllers/crm.controller';

// Instanciamos el motor (creamos el objeto en memoria)
const miEscuelaCRM = new CRMController("1.0.0");

console.log("Versión del CRM:", miEscuelaCRM.verVersion());
// Usamos sus métodos
const profesores = miEscuelaCRM.filtrarUsuariosPorRol("profesor");


console.log("Profesores del centro:", profesores);

miEscuelaCRM.agregarUsuario({ id:7, nombre: "Carlos Ruiz", rol: "profesor", activo: true });