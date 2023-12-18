// script.js
document.addEventListener("DOMContentLoaded", function () {
  const productosLista = document.getElementById("productos-lista");

  // Manejar eventos de arrastrar y soltar
  productosLista.addEventListener("dragover", function (e) {
      e.preventDefault();
  });

  productosLista.addEventListener("drop", function (e) {
      e.preventDefault();

      const files = e.dataTransfer.files;
      handleImageFiles(files);
  });

  // Función para manejar las imágenes
  function handleImageFiles(files) {
      for (const file of files) {
          if (file.type.startsWith("image/")) {
              const reader = new FileReader();

              reader.onload = function (e) {
                  const imgSrc = e.target.result;
                  addImageToCatalog(imgSrc);
              };

              reader.readAsDataURL(file);
          }
      }
  }

  // Función para agregar imágenes a la lista
  function addImageToCatalog(imgSrc) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = imgSrc;

      li.appendChild(img);
      productosLista.appendChild(li);
  }
});
