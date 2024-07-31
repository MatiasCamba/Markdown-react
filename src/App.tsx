import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const defaultMarkdown = `
  ***
  # Programacion con gatitos🐱
  
  ## Introducción
  
  Este es un ejemplo de Markdown para escribir notas y luego convertirlas en PDF
  
  ### Enlaces
  
  - Sitio web de adopción de gatos: [ AQUÍ ♥](https://www.fundaciondegatitos.org.ar/)
  - Blog sobre cuidados de gatos: [ AQUÍ ♥](https://www.headsupfortails.com/blogs/cats)
  
  ## Código
  
  Un poco de código en línea: \`const gato = '[🐾,"meow","comer","jugar","saltar","dormir"]'\`.
  
  Un bloque de código para crear un gatito virtual:
  
  \`\`\`javascript
  function crearGato(nombre, edad) {
      return {
          nombre,
          edad,
          ronronear() {
              console.log('Prrr...');
          }
      };
  }
  
  const miGato = crearGato('Gordo', 3);
  miGato.ronronear();
  \`\`\`
  
  ## Lista de Cosas que Aman los Gatos
  
  - Comida (especialmente atún)
  - Cajas de cartón
  - Siestas al sol
  
  > Los gatos son expertos en encontrar el lugar más cálido para dormir.
  
  ## 
  
  ![Gatito](https://t4.ftcdn.net/jpg/06/18/96/41/360_F_618964183_rXiKG4h0depje5wlX0N6bPeTpebQrl1V.jpg)


  ## Mas información?

Podes conocer mas 
[acá](https://github.com/matiascamba)!🐾
***
  `;

  const [markDownText, setMarkDownText] = useState(defaultMarkdown);

  return (
    <>
      <div className="container-box">
        <h1 className="title">Markdown & Gatitos</h1>
        <hr />
        <textarea
          name="editor"
          id="editor"
          value={markDownText}
          onChange={(e) => setMarkDownText(e.target.value)}
        ></textarea>
        <div id="preview">
          <Markdown>{markDownText}</Markdown>
        </div>
      </div>
    </>
  );
}

export default App;
