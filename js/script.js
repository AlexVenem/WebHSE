/*document.getElementById("change-bg").addEventListener("click", () => {
    const current = document.body.style.backgroundColor;
    document.body.style.backgroundColor = current === "white" ? "#1c1c1c" : "white";
    document.body.style.color = current === "white" ? "#e6e6e6" : "#1c1c1c";
  });*/
  
  document.getElementById("toggle-info").addEventListener("click", () => {
    const info = document.getElementById("extra-info");
    const togglebut = document.getElementById("toggle-info");

    if (info.style.display === 'none') {
        info.style.display = 'block';
        togglebut.textContent = 'Скрыть дополнительный факт';
    } else {
        info.style.display = 'none';
        togglebut.textContent = 'Показать дополнительный факт';
    }
    //info.style.display = info.style.display === "none" ? "block" : "none";
  });
 