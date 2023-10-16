export function themes(){

    const $colorThemes = document.querySelectorAll("input[name='theme']");
  console.log($colorThemes);
  
  $colorThemes.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e);
    });
  });

  document.addEventListener("click", (e) => {
    console.log(e.target.matches("input[name='theme']"));
    if (!e.target.matches("input[name='theme']")) return false;
  
    document.getElementById("theme").href = e.target.dataset.theme;
    alert(`Has activado el tema: ${e.target.dataset.name}`);
  });
  
  
  }


export function networkStatus(msg) {
    const $div = document.createElement("div");
  
    if (navigator.onLine) {
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
  
    $div.innerText = msg;
    document.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => document.body.removeChild($div), 3000);
  }
  
  
  window.addEventListener("online", (e) => {
    networkStatus("Conexión de Vuelta Yipee");
    console.log(e);
  });
  
  window.addEventListener("offline", (e) => networkStatus("Conexión Perdida"));
  

  
  document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.code);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
  
    if (e.key === "a" && e.ctrlKey) {
      alert("Haz lanzado una alerta con el atajo ctrl + a");
    }
  
    if (e.key === "c" && e.ctrlKey) {
      confirm("Haz lanzado una confirmación con el atajo ctrl + c");
    }
    if (e.key === "p" && e.ctrlKey) {
      prompt("Haz lanzado una aviso con el atajo ctrl + p");
    }
  });

  export function alignTheme(){
    const $radioAlignments = document.querySelectorAll("input[name='alignment']");
    const $content = document.getElementById("content");
    
    $radioAlignments.forEach((el) => {
      el.addEventListener("change", (e) => {
        const alignment = e.target.getAttribute("data-alignment");
        $content.style.textAlign = alignment;
        alert(`Has seleccionado la alineación: ${e.target.getAttribute("data-name")}`);
      });
    });
  }

  export function fontText(){
    const $radioFonts = document.querySelectorAll("input[name='font']");
const $content = document.getElementById("content");

$radioFonts.forEach((el) => {
  el.addEventListener("change", (e) => {
    const font = e.target.getAttribute("data-font");
    document.documentElement.style.setProperty("--font-family", font);
    alert(`Has seleccionado la fuente: ${e.target.getAttribute("data-name")}`);
  });
});
  }

  


   