import "./Header.css"
import { useState} from "react"
import Buttons from "../buttons/Buttons"

const Header = () => {
  const PageNames = ["Home", "About us", "Contact"]
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    document.getElementById('header').classList.toggle('show-mobile-menu')
  }
  const toggleSearch = () => {
    document.getElementById('nav-search').classList.toggle('show-search-bar')
  }
  return (
    <>
      <header id="header">
          <div id="wrap-header">
              <div className="branding">
                  {/* <img className="brand-logo" src={logo}  alt="BingeMe logo" /> */}
                  <h1 id="header-logo" className="brand-name">Binge Movies</h1>
              </div>
              <nav id="nav-bar">
                <ul className="nav-links">
                <button id="close-btn" onClick={toggleMenu}><span className="material-symbols-outlined">close</span></button>
                  {
                    PageNames.map((page)=><li className="nav-item" key={page}>{page}</li>)
                  }
                  <li className="nav-item signin-nav">Sign in</li>
                </ul>

                <div className="action-buttons">
                  <div id="nav-search">
                  <input id="search-bar" onChange={e=>setSearch(e.target.value)} type="text" value={search} placeholder="Search" />
                  <span onClick={toggleSearch} className="material-symbols-outlined">search</span>
                  </div>
                  <div className="button-div">
                    <Buttons name="Sign in" bgcolor="red"/>
                  </div>
                  <button onClick={toggleMenu} id="menu-btn" className="menu-btn"><span className="material-symbols-outlined">menu</span></button>
                </div>
              </nav>
          </div>

      </header>
      
    </>
  )
}

export default Header
