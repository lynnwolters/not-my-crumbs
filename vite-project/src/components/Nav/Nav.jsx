// DATA //
import navItems from "../../data/navItems.js";

// STYLES //
import { NavContainer, List, Link, IconContainer, Icon } from "./Nav.css.js";

// COMPONENT //
function Nav() {
  return (
    <NavContainer>
      <List>
        {navItems.map((navItem, index) => {
          return (
            <li key={index}>
              <Link href={navItem.href}>
                <IconContainer>
                  <Icon src={navItem.src} alt={navItem.alt} />
                </IconContainer>
                {navItem.text}
              </Link>
            </li>
          );
        })}
      </List>
    </NavContainer>
  );
}

export default Nav;
