import type { Usuario, Rol } from "../models/interfaces";

export class CRMController {
  // Propiedades
  private usuariosDelCentro: Usuario[] = [];
  private readonly  CLAVE_STORAGE = 'school-crm-usuarios'; // Constante privada, no se puede cambiar desde fuera de la clase

  // Constructor se ejeuta al nacer el objeto
  constructor(private version: string) {
    this.usuariosDelCentro = [
      { id: 1,nombre: "Juan Pérez", rol: "alumno", activo: true},
      { id: 2, nombre: "María García", rol: "profesor", activo: true },
      { id: 3, nombre: "Pedro López", rol: "admin", activo: true },
      { id: 4, nombre: "Ana Martínez", rol: "profesor", activo: false },
      { id: 5, nombre: "Luis Fernández", rol: "alumno", activo: true },
      { id: 6, nombre: "Patricia Sánchez", rol: "alumno", activo: false },
    ];
  }

  // Métodos: La función de ayer, que estaba en counter, convertida en un método o habilidad de la clase
    filtrarUsuariosPorRol( rolBuscado: Rol): Usuario[] {
        // Usamos this para referirnos a la propiedad de esta misma clase
        return this.usuariosDelCentro.filter(usuario => usuario.rol === rolBuscado );
    }

    actualizaVersion(nuevaVersion: string): void {
        this.version = nuevaVersion;
    }

    verVersion(): string {
        return this.version;
    }
    // 🚀 RESOLUCIÓN DEL RETO EXPRESS
    public agregarUsuario(nuevoUsuario: Usuario): void {
        // 1. Validamos si el ID ya existe en nuestro array privado
        const idDuplicado = this.usuariosDelCentro.some(user => user.id === nuevoUsuario.id);

        if (idDuplicado) {
            console.error(`❌ Error: El usuario con ID [${nuevoUsuario.id}] ya existe en el SchoolCRM.`);
            return; // Cortamos la ejecución para no añadirlo
        }

        // 2. Si no está duplicado, lo añadimos de forma segura
        this.usuariosDelCentro.push(nuevoUsuario);
        console.log(`✅ Usuario ${nuevoUsuario.nombre} añadido correctamente.`);
        this.guardarEnDisco(); // Guardamos los cambios en localStorage
    }
  
    private guardarEnDisco(): void {
        localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(this.usuariosDelCentro));
    }
}
