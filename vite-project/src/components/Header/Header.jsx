// IMPORTS //
import Greeting from "../Greeting/Greeting.jsx";

// STYLES //
import { HeaderContainer } from "./Header.css.js";

// COMPONENT //
function Header() {
  return (
    <HeaderContainer>
      <Greeting />
    </HeaderContainer>
  )
}

export default Header;
