var valor = document.querySelector("#texto")

      var btn = document
        .querySelector(".btn")
        .addEventListener("click", function (evt) {

          switch (valor.value) {
            case "Enzo":
              console.log("Enzo é o nome do meu cachorro");
              break;
            case "João":
              console.log("João é o nome do meu cachorro");
              break;
            case "Pedro":
              console.log("Pedro é o nome do meu cachorro");
              break;
            default:
              console.log("Não sei o nome do meu cachorro");
          }
        });
