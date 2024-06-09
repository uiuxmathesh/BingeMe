import "./Header.css"
import logo from "../../../assets/logo.png"
const Header = () => {
  return (
    <header>
        <div className="branding">
            <img className="brand-logo" src={logo}  alt="BingeMe logo" />
            <h1 className="brand-name">Binge Me!</h1>
        </div>
    </header>
  )
}

export default Header
