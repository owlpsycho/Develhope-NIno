

 function ButtonPokemon({handleButton,label,children}) {

    

    return (
        <>
            <button onClick={handleButton}>{label}{children}</button>
        </>
    )
 }

 export default ButtonPokemon