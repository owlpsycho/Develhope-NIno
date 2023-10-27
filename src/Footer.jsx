function Footer() {

    const handleTheme=(e) =>{
        console.log(e);
    }
    
    return (
        <>
        <select onChange={handleTheme}>
            <option value="light">light</option>
            <option value="dark">dark</option>
        </select>
        </>
    )
}

export default Footer