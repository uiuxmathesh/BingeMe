import "./Buttons.css"

const Buttons = (props) => {
  return (
    <button style={{background:props.bgcolor}}className="primary-btn">{props.name}</button>
  )
}
const OutlineButton = (props) =>{
  return (
    <button className="outline-btn">{props.name}</button>
  )
}

export { OutlineButton}
export default Buttons
