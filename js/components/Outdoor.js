export default function Outdoor() {
    const section = document.createElement('section');
    section.className = 'outdoor-section';
    section.id = 'about';

    section.style.backgroundImage = "url('./Imagens/Outdoor.webp')";

    section.innerHTML = `
        <h1 class="outdoor-title">The Great Outdoors</h1>
        <p class="outdoor-subtitle">Wander often. Wonder always.</p>
        <a href="#explore" class="hero-cta" aria-label="Ir para a secao Explore">Start Exploring</a>
        <div class="hero-indicator" aria-hidden="true">&#9662;</div> `;

    return section;
}
