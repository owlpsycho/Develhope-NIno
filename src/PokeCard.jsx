import { useNavigate } from "react-router-dom";

export function PokeCard(props) {
    const {name, img, details}= props;
    const navigate = useNavigate()
    const handleShowPokeDetails = () => {
        navigate(`/pokemondetails/${name}`)
    }
    
    return (
        <div className="card" onClick={handleShowPokeDetails}>
            <div>{name.toUpperCase()}</div>
            <img src={img} alt="immagine pokemon" />
        </div>
    )
}