export const User = () => {

    const deleteUser = () => {
        alert('User has been deleted')
    }

    const saveUser = () => {
        alert('User has been saved')
    }

    return <div>Dimych
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}