export default function Explore() {
    const section = document.createElement('section');
    section.className = 'container text-center explore-section';
    section.id = 'explore';

    // Texto
    const title = document.createElement('div');
    title.className = 'section-heading';
    title.innerHTML = `
        <h2>Explore the World</h2>
        <p>
            We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world.
            Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness.
        </p>
    `;
    section.appendChild(title);

    // Dados
    const places = [
        {
            city: "Nærøyfjorden",
            country: "Norway",
            image: "./Imagens/Explore1.jpg"
        },
        {
            city: "Antelope Canyon",
            country: "United States",
            image: "./Imagens/Explore2.jpg"
        },
        {
            city: "Grossglockner",
            country: "Austria",
            image: "./Imagens/Explore3.jpg"
        }
    ];

    // Cards grid
    const grid = document.createElement('div');
    grid.className = 'explore-grid';

    function createExploreCard(place) {
        const card = document.createElement('div');
        card.className = 'explore-card';
        card.style.backgroundImage = `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%), url('${place.image}')`;

        card.innerHTML = `
            <h3>${place.city}</h3>
            <p>${place.country}</p>
        `;
        return card;
    }

    places.forEach(place => {
        grid.appendChild(createExploreCard(place));
    });

    section.appendChild(grid);

    // see more
    const seeMore = document.createElement('div');
    seeMore.className = 'section-link-wrap';
    seeMore.innerHTML = `
        <a href="#" class="section-link" aria-label="Ver mais destinos">
            SEE MORE >
        </a>
    `;
    section.appendChild(seeMore);

    return section;
}
