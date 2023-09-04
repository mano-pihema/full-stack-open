function Form({
  newName,
  newNumber,
  handleInput,
  handleSubmit,
  handleInputNumber,
}) {
  return (
    <form>
      <div>
        name: <input value={newName} name="name" onChange={handleInput} />
        number:
        <input value={newNumber} name="number" onChange={handleInputNumber} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  )
}

export default Form
