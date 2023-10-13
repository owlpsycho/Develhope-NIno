const CustomButton = ({ color, text, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} style={{backgroundColor: color}}>{text}</button>
        </>
    )
    
}

export default CustomButton