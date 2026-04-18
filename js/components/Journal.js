export default function Journal() {
    const section = document.createElement('section');
    section.className = 'journal-section';
    section.id = 'journal';

    const container = document.createElement('div');
    container.className = 'container';

    // texto inicio
    container.innerHTML = `
        <div class="text-center section-heading">
            <h2>The Journal</h2>
            <p>
                Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.
            </p>
        </div>
    `;

    // notícias
    const news = [
        {
            date: "May 30, 2017",
            title: "An Unforgettable",
            description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
            image: "./Imagens/Journal1.jpg"
        },
        {
            date: "May 28, 2017",
            title: "Symphonies in Steel",
            description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
            image: "./Imagens/Journal2.jpg"
        }
    ];

    const grid = document.createElement('div');
    grid.className = 'journal-grid';

    function createNewsCard(item) {
        const card = document.createElement('div');
        card.className = 'journal-card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="journal-img">
            <span class="journal-date">
                ${item.date.toUpperCase()}
            </span>
            <h3 class="journal-title">${item.title}</h3>
            <p class="journal-desc">${item.description}</p>
        `;
        return card;
    }

    news.forEach(item => {
        grid.appendChild(createNewsCard(item));
    });

    container.appendChild(grid);

    // all posts
    const allPosts = document.createElement('div');
    allPosts.className = 'text-center section-link-wrap';
    allPosts.innerHTML = `
        <a href="#" class="section-link" aria-label="Ver todos os posts">
            ALL POSTS >
        </a>
    `;
    container.appendChild(allPosts);

    section.appendChild(container);
    return section;
}
