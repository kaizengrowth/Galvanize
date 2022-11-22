import MenuItem from './MenuItem.js';

export default function Nav() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <h3> Hello, the Book of Face 🎉 </h3>

            { numbers.map(number => <MenuItem number={number} />) }
        </>
    )
}