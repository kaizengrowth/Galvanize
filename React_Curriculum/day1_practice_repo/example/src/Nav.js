import MenuItem from './MenuItem.js';
import './App.css'

export default function Nav() {
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const links = ["home", "search", "global", "invite", "faq", "logout"]

    return (
        <div className="Nav">
            {/* <h3> Hello, the Book of Face 🎉 </h3> */}

            {/* { numbers.map(number => <MenuItem number={number} />) } */}

            { links.map((link, key) => <MenuItem link={link} key={key} />) }
        </div>
    )
}