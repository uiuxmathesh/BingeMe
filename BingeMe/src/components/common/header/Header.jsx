import "./Header.css"
import logo from "../../../assets/logo.png"
import Buttons from "../buttons/Buttons"
const Header = () => {
  const PageNames = ["Home", "About us", "Contact"]
  return (
    <header>
        <div className="branding">
            <img className="brand-logo" src={logo}  alt="BingeMe logo" />
            <h1 className="brand-name">Binge Me!</h1>
        </div>
        <nav>
          <ul className="nav-links">
            {
              PageNames.map((page)=><li className="nav-item" key={page}>{page}</li>)
            }
          </ul>

          <div className="action-buttons">
            <div id="nav-search">
             <input type="text" placeholder="Search" />
             <span className="material-symbols-outlined">search</span>
            </div>
            <div className="button-div">
              <Buttons name="Sign in"/>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header
