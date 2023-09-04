function Button(props) {
  return (
    <div>
      <button onClick={props.handler}>{props.name}</button>
    </div>
  )
}

export default Button
