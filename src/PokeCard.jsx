import { useState } from "react";

export function PokeCard(props) {
    const {name, img, details}= props;
    const [showDetails, setShowDetails] = useState(false);

    const handleShowPokeDetails = () => {
        console.log(details);
        setShowDetails(prev => !prev);
    }
    
    return (
        <div className="card" onClick={handleShowPokeDetails}>
            <div>{name.toUpperCase()}</div>
            <img src={img} alt="immagine pokemon" />
            {showDetails && <h2>Weight: {details.weight}</h2>}
        </div>
    )
}