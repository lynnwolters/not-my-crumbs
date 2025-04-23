// IMPORTS //
import Greeting from "../Greeting/Greeting.jsx";

// STYLES //
import { HeaderContainer } from "./Header.css.js";

// COMPONENT //
function Header({ title, span }) {
  return (
    <HeaderContainer>
      <Greeting title={title} span={span} />
    </HeaderContainer>
  );
}

export default Header;
