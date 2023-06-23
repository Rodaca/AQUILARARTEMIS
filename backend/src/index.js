/* Importa la aplicación express desde el archivo "./app.js". */
import app from "./app.js";

/* Función principal que inicia el servidor. */
const main = () => {
  // Hace que la aplicación express escuche en el puerto configurado.
  app.listen(app.get("port"));

  // Imprime un mensaje en la consola indicando que el servidor está en ejecución.
  console.log(`The company's server is running on port ${app.get("port")}`);
};

// Ejecuta la función main para iniciar el servidor.
main();
