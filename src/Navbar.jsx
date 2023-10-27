

function Navbar({handleTheme}) {
 
    
    return (
        <>
        <select onChange={handleTheme}>
            <option value="light">light</option>
            <option value="dark">dark</option>
        </select>
        </>
    )
}

export default Navbar