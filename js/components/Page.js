import Header from './Header.js';
import Outdoor from './Outdoor.js';
import Explore from './Explore.js';
import Journal from './Journal.js';
import Footer from './Footer.js';

export default function Page() {
    const wrapper = document.createElement('div');
    wrapper.className = 'page-wrapper';

    const main = document.createElement('main');
    main.className = 'page-main';

    wrapper.appendChild(Header());
    main.appendChild(Outdoor());
    main.appendChild(Explore());
    main.appendChild(Journal());
    wrapper.appendChild(main);
    wrapper.appendChild(Footer());

    return wrapper;
}
