import './App.css'

const MenuItem = (props) => {
    const link = props.link
    return (
        <div className="Link">
            <p>{link}</p>
        </div>
    );
}

export default MenuItem;