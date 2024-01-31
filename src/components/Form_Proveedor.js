function Form({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus ></input>
                <label htmlFor='nacional'>Nacional</label>
                <input type='checkbox' id='nacional' name='nacional'/>
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default Form