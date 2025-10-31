// O array 'musicas' funciona como um banco de dados simples em JavaScript.
const musicas = [
  { titulo: "Blinding Lights", artista: "The Weeknd", capaUrl: "https://i.scdn.co/image/ab67616d0000b273d9b0bba0e1dbb4d2e6f96f0d" },
  { titulo: "Levitating", artista: "Dua Lipa", capaUrl: "https://i.scdn.co/image/ab67616d0000b273aeb18c5f8d4b1ef9a1f02f8a" },
  { titulo: "As It Was", artista: "Harry Styles", capaUrl: "https://i.scdn.co/image/ab67616d0000b273e0b4a0f203fcf02e5d58f78a" },
  { titulo: "Flowers", artista: "Miley Cyrus", capaUrl: "https://i.scdn.co/image/ab67616d0000b273f4cb8ccba5d1d66b69c57b0a" }
];

// Essa função cria o HTML de cada música e insere dentro da div 'lista-de-musicas'
function renderizarMusicas() {
  const lista = document.getElementById("lista-de-musicas");
  lista.innerHTML = "";

  musicas.forEach(musica => {
    const card = document.createElement("div");
    card.className = "musica-card";
    card.innerHTML = `
      <img src="${musica.capaUrl}" alt="${musica.titulo}">
      <h3>${musica.titulo}</h3>
      <p>${musica.artista}</p>
    `;
    lista.appendChild(card);
  });
}

// Quando o site carregar, as músicas são exibidas automaticamente
document.addEventListener("DOMContentLoaded", renderizarMusicas);
