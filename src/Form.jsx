export function Form({handleSubmit}){

    return(
        <form onSubmit={handleSubmit}>
            <input name="title" required type="text" />
            <input name="completed" type="checkbox" />
            <input name="file" type="file" />
            <button type="submit">invio</button>
            <button id='reset' type="reset">reset</button>
        </form>
    )
}