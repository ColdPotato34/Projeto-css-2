export default function Footer() {

    const footer = document.createElement('footer');
    footer.id = 'search';

    footer.style.backgroundImage = "url('./Imagens/Footer.jpg')";

    footer.innerHTML = `
        <p>&copy; 2017 THE GREAT OUTDOORS. All rights reserved. | ABOUT EXPLORE JOURNAL SEARCH</p>
    `;
    return footer;
}
