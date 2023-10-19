 export function PokemonList() {
   
    const FetchData = async () =>{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const dataJson = await data.json()
        console.log(dataJson);
        return dataJson
    }
 FetchData()
    
    return(
        <>
        
        </>
    )
}