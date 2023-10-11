/*Crea un documento HTML con etiquetas vacias en el body y carga dinámicamente con JavaScript tu información personal:
Tu nombre en una etiqueta h1.
Tu foto en una etiqueta img (foto real, no memé, no avatar, no imagen random).
Una breve biografía en una etiqueta p.
Tus pasatiempos en una etiqueta ol.
Tu información de contacto (correo, redes, sitios, etc.) en una etiqueta ul.*/


    //Nombre
    const $nombre = document.getElementById("nombre")
    $nombre.innerText = "Vellenaweth Moreno Karina";
  
    $nombre.style.color = "white";
    $nombre.style.backgroundColor = "black";
    $nombre.style.padding = "2rem";
    $nombre.style.borderRadius = "1rem";
    $nombre.style.textAlign = "center";
  
    //Foto
    const $foto = document.querySelector("img");
    
    $foto.style.width= "15rem";
    $foto.style.transform = "rotate(-10deg)";
    $foto.style.borderRadius="50%"
    
    
    
  
    //Biografía
    const $headerBiografia = document.getElementById("headerBiografia")
    $headerBiografia.innerText = "Biografía o algo así";
    $headerBiografia.style.textAlign= "center";
    $headerBiografia.style.padding= "2rem";
    $headerBiografia.style.color = "#FF8C78";
    $headerBiografia.style.borderRadius = "4rem";
    $headerBiografia.style.backgroundColor = "black";
    
    const $bio= document.getElementById("bio");
    $bio.innerText= "Nací el 15 de Junio en los 2000 como la canción de Natalia Lafourcade. Estudié la primaria y secundaria en una escuela pequeña y me encontré a mi misma en la prepa; o al menos comencé a hacerlo. Arriba la programación y las fiestas ajua.";
    $bio.style.textAlign = "center";
    $bio.style.padding = "3rem";
    $bio.style.margin = "5rem";
    $bio.style.color = "black";

    
    
    
    //Pasatiempos
    const $headerPasatiempos = document.getElementById("headerPasatiempos")
    $headerPasatiempos.innerText = "Lo que hago cuando no me estoy picando la nariz";
    $headerPasatiempos.style.textAlign= "center";
    $headerPasatiempos.style.padding= "2rem";
    $headerPasatiempos.style.color = "#FF8C78";
    $headerPasatiempos.style.borderRadius = "4rem";
    $headerPasatiempos.style.backgroundColor = "black";
    
    const $pasatiempos= 
    document.getElementById("pasatiempos");
    $pasatiempos.style.color = "black";
    $pasatiempos.style.backgroundColor = "#FF8C78";
    $pasatiempos.style.padding = "5rem";
    
    const pasatiempos = ["Comer", "Jugar Videojuegos", "Ver series", "Caminar" ,"Pensar en formas en las que podría derrocar al gobierno"];
  
  
    pasatiempos.forEach(el => {
    $pasatiempos.innerHTML += `<li>${el}</li>`;
    $pasatiempos.style.padding = "3rem"})

  
    //Datos de Contacto
    
    const $headerDatosDeContacto = document.getElementById("headerDatosDeContacto")
    $headerDatosDeContacto.innerText = "Llámame o lo que sea";
    $headerDatosDeContacto.style.textAlign= "center";
    $headerDatosDeContacto.style.color = "#FF8C78";
    $headerDatosDeContacto.style.padding = "2rem";
    $headerDatosDeContacto.style.borderRadius = "4rem";
    $headerDatosDeContacto.style.backgroundColor = "black";
    
    
    
  
    const $datosDeContacto = 
   document.getElementById("datosDeContacto")
    const datosDeContacto = ["(55) 6096 9582", "kary.velle@gmail.com", "https://www.instagram.com/vellenaweth_web_design/", "https://www.facebook.com/karina.vellenawethmoreno" ];
  
  
    datosDeContacto.forEach(el => {
    $datosDeContacto.innerHTML += `<li>${el}</li>`;
    });
      
    $datosDeContacto.style.padding = "3rem";
    $datosDeContacto.style.margin = "5rem";
    $datosDeContacto.style.backgroundColor = "#FF8C78";


    
    
  