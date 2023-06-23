import React, { useState, useEffect } from "react";
import "./pag1style.css";

function Post1() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    async function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      await fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }
    loadApi();
  }, []);

  return (
    <div>
      {nutri.map((item) => {
        if (item.id === 1) {
          return (
            <div key={item.id}>
              <p id="titulo">{item.titulo}</p>
              <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo} {item.subtitulo}{item.subtitulo}{item.subtitulo}{item.subtitulo}{item.subtitulo}{item.subtitulo}</p>
            
            <img src={item.capa} alt={item.titulo} className="capa" /><p className="subtitulo">{item.subtitulo}{item.subtitulo}{item.subtitulo}{item.subtitulo}{item.subtitulo}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Post1;
