let controls_box = document.getElementById("controls-container");
let sounds_box = document.getElementById("sounds-container");
let sounds = [
  {
    id: "boom",
    key: "A",
    name: "boom",
  },
  {
    id: "clap",
    key: "S",
    name: "clap",
  },
  {
    id: "hihat",
    key: "D",
    name: "hihat",
  },
  {
    id: "kick",
    key: "F",
    name: "kick",
  },
  {
    id: "openhat",
    key: "G",
    name: "openhat",
  },
  {
    id: "ride",
    key: "H",
    name: "ride",
  },
  {
    id: "snare",
    key: "J",
    name: "snare",
  },
  {
    id: "tink",
    key: "K",
    name: "tink",
  },
  {
    id: "tom",
    key: "L",
    name: "tom",
  },
];

const generar_elementos = () => {
  sounds.forEach((e) => {
    sounds_box.insertAdjacentHTML(
      "beforeend",
      `
            <audio class="sound" id="${e.id}" src="sounds/${e.name}.wav"></audio>
            `
    );
    controls_box.insertAdjacentHTML(
      "beforeend",
      `
        <div class="sound-btn" id="${e.id}">
            <div class="sound-letter">${e.key}</div>
            <div class="sound-name">${e.name}</div>
        </div>
        `
    );
  });
};

const tocar_sonido = (letter) => {
  let res = sounds.find((e) => e.key == letter);

  if (res) {
    play_sound(res);
    activar_animacion(res);
  }
};

const tocar_sonido_id = (id) => {
  let res = sounds.find((e) => e.id == id);
  if (res) {
    play_sound(res);
    activar_animacion(res);
  }
};
const play_sound = (obj) => {
  let sounds_selected = document.querySelectorAll(".sound");
  let aux = [];
  sounds_selected.forEach((e) => {
    aux.push(e);
  });
  let res = aux.find((e) => e.id == obj.id);

  if (res) {
    res.currentTime = 0;
    res.play();
  }
};

const activar_animacion = (obj) => {
  let keys = document.getElementById(obj.id);
  keys.classList.add("active");
  setTimeout(() => {
    keys.classList.remove("active");
  }, 100);
};
window.addEventListener("load", () => {
  generar_elementos();
  document.addEventListener("keypress", (event) => {
    tocar_sonido(event.key.toUpperCase());
  });
  controls_box.addEventListener("click", (event) => {
    if (event.target.matches(".sound-letter")) {
      tocar_sonido_id(event.target.parentNode.id);
    } else if (event.target.matches(".sound-name")) {
      tocar_sonido_id(event.target.parentNode.id);
    } else if (event.target.matches(".sound-btn")) {
      tocar_sonido_id(event.target.id);
    }
  });
});
