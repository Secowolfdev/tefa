const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const progress = document.querySelector(".progress");

// Tocar a música
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pausar a música
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Atualizar barra de progresso
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

const dataInicial = new Date("Sat Mar 27 2021 00:00:00");

    function atualizarContador() {
      const agora = new Date();
      let diff = agora - dataInicial;

      const segundosTotais = Math.floor(diff / 1000);
      const anos = Math.floor(segundosTotais / (365.25 * 24 * 3600));
      const meses = Math.floor((segundosTotais % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
      const dias = Math.floor((segundosTotais % (30.44 * 24 * 3600)) / (24 * 3600));
      const horas = Math.floor((segundosTotais % (24 * 3600)) / 3600);
      const minutos = Math.floor((segundosTotais % 3600) / 60);
      const segundos = segundosTotais % 60;

      document.getElementById("contador").textContent =
        `${anos} ano${anos !== 1 ? 's' : ''}, ` +
        `${meses} mês${meses !== 1 ? 'es' : ''}, ` +
        `${dias} dia${dias !== 1 ? 's' : ''}, ` +
        `${horas} hora${horas !== 1 ? 's' : ''}, ` +
        `${minutos} minuto${minutos !== 1 ? 's' : ''} e ` +
        `${segundos} segundo${segundos !== 1 ? 's' : ''}`;
    }

    atualizarContador(); // chama uma vez ao carregar
    setInterval(atualizarContador, 1000); // atualiza a cada segundo
  
  const container = document.getElementById("emoji-container");
  const emojis = ["🎉","❤️","🥰", "💖","😍"];

  function criarEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 3 + Math.random() * 3 + "s";
    emoji.style.fontSize = (1 + Math.random() * 2) + "rem";

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove(); // remove depois que cair
    }, 6000);
  }

  setInterval(criarEmoji, 300); // cria emoji a cada 300ms

  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
  }

  images[currentImageIndex].classList.add('active'); // inicia com a primeira visível
  setInterval(showNextImage, 3000); // muda a cada 3 segundos
