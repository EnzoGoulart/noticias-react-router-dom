import React, { useState, useEffect } from "react";
import "../../appcss.css"
import { Link } from "react-router-dom";
function Home() {
  const [nutri, setNutri] = useState([]);
  let cont = 0
  useEffect(() => {
    async function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      await fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }
    const [map0,map1,map2,map3,map4,map5,map6] = nutri
    let allMaps = [map0,map1,map2,map3,map4,map5,map6]
    loadApi();
  }, []);
  useEffect(()=>{console.log(cont)},[[], cont])
  return (
    <div>
      {nutri.map((item) => {
        return (
          <div key={item.id} className="post">
            
            <p id="titulo">{item.titulo}</p>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <Link to="/post"><button className="botao">Acessar</button></Link>
            {cont +=1}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
