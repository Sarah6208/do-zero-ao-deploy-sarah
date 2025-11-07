// O array 'musicas' aponta para os ficheiros mp3 locais e contém metadados simples.
const musicas = [
  {
    titulo: "Look At The Moon",
    artista: "Puzzle",
    file: "look at the moon.mp3",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b2731b52b6f53a3a1a30a8a239cb"
  },
  {
    titulo: "Fluorescent Adolescent",
    artista: "Arctic Monkeys",
    file: "fluorescent adolescents.mp3",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b27328ecb40a9d6ce1c86a6e3e7c"
  },
  {
    titulo: "This Charming Man",
    artista: "Janice Whaley",
    file: "BandCampDownloader.app - This Charming Man - Janice Whaley.mp3",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b273d0c6f0f8b9ccf4ff6e15d9ad"
  },
  {
    titulo: "As The World Caves In",
    artista: "Swizzle Gryphon",
    file: "BandCampDownloader.app - As The World Caves In - Swizzle Gryphon.mp3",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b273b2e4dc7dfdfb14f5ef0a5c33"
  }
];

// Essa função cria o HTML de cada música e insere dentro da div 'lista-de-musicas', incluindo um player de áudio.
function renderizarMusicas() {
  const lista = document.getElementById("lista-de-musicas");
  lista.innerHTML = "";

  musicas.forEach(musica => {
    const card = document.createElement("div");
    card.className = "musica-card";
    const src = encodeURI(musica.file);
    card.innerHTML = `
      ${musica.capaUrl ? `<img src="${musica.capaUrl}" alt="${musica.titulo}">` : ''}
      <div class="musica-info">
        <h3>${musica.titulo}</h3>
        <p>${musica.artista}</p>
        <audio controls preload="none">
          <source src="${src}" type="audio/mpeg">
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    `;
    lista.appendChild(card);
  });
}

// Quando o site carregar, as músicas são exibidas automaticamente
document.addEventListener("DOMContentLoaded", renderizarMusicas);
