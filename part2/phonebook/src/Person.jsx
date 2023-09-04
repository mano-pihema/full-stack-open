import routes from './services/routes'

function Person({ data, state, setState }) {
  const { id, name, number } = data

  function deleteHandler() {
    if (window.confirm('Are you sure you want to delete ' + name)) {
      routes.removePerson(id).then(() => {
        setState(state.filter((item) => item.id !== id))
      })
    }
  }

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Person
