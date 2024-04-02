// Para um formulário eu preciso:
// verificar se as informações estão sendo preenchidas, se sim enviar essas informações para o back-end, caso não alertar o usuário de informação.
// Se o usuário deixar de preencher avisar com uma cor de alerta("vermelho"), se preencheu avisar com uma cor de alerta("verde").
// Desativar o botão se não estiverem preenchidas.

function checkInputs() {
  let inputs = document.querySelectorAll(".form-control input");

  inputs.forEach((input) => {
    if (input.value === "") {
      setError(input, "Insira uma informação válida");
    } else {
      setSucess(input);
    }
  });
}

function setError(input, message) {
  let small = input.parentNode.querySelector("small");
  small.innerText = message;
  small.style.color = "red";

  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control valid";
}

let btn = document.querySelector("#enviar");

let isEmpty = false;

// document.addEventListener("DOMContentLoaded", () => {
//   let inputs = document.querySelectorAll(".form-control input");
//   isEmpty = true;
//   btn.disabled = isEmpty;

//   inputs.forEach((input) => {
//     if (input.value !== "") {
//       btn.disabled = false;
//     } else {
//       btn.disabled = true;
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let inputs = document.querySelectorAll(".form-control input");
  let isEmpty = true; // Começa como true, pois inicialmente nenhum campo está preenchido
  btn.disabled = isEmpty; // Desativa o botão inicialmente

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      isEmpty = true; // Assume que os campos estão vazios a princípio
      inputs.forEach((input) => {
        if (input.value.trim() !== "") {
          // Verifica se há algum valor em qualquer campo de entrada
          isEmpty = false; // Se algum campo de entrada não estiver vazio, isEmpty se torna false
        }
      });
      btn.disabled = isEmpty; // Desativa ou ativa o botão baseado no estado de isEmpty
    });
  });
});

btn.addEventListener("click", (e) => {
  let inputs = document.querySelectorAll(".form-control input");
  let isEmpty = false;

  inputs.forEach((input) => {
    if (input.value === "") {
      isEmpty = true;
      btn.disabled = isEmpty;
    }
  });

  e.preventDefault();
  checkInputs();
});
