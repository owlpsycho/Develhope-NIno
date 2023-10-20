

export function PokemonInfo(props) {
    console.log(props, "props");
    const {name,img}= props
    return (

        <div className="card">
            <h1 > {name}</h1>
            <img src={img} alt="immagine pokemon" />

        </div>
    )

}

