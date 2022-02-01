import cryptopunk from "../assets/header/cryptopunk-logo.png";
import searchImg from "../assets/header/search.png";
import theamSwitcher from "../assets/header/theme-switch.png";
import "./Headers.css";
const Headers = () => {
  return (
    <div className="header">
      <div className="cryptopunk">
        <img src={cryptopunk} alt="cryptopunk" className="punkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchImg} alt="searchIcon" />
        </div>
        <input
          type="text"
          placeholder="Collection, item of user..."
          className="searchInput"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitcher">
          <img src={theamSwitcher} alt="themeSwitch" className="themeSwitch" />
        </div>
        <div className="button">GET IN</div>
      </div>
    </div>
  );
};

export default Headers;
