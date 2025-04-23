// IMPORTS //
import { useLocation } from "react-router";

// DATA //
import navItems from "../../data/navItems.js";

// STYLES //
import { NavContainer, List, Link, IconContainer, Icon } from "./Nav.css.js";

// COMPONENT //
function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavContainer>
      <List>
        {navItems.map((navItem, index) => {
          const isActive = navItem.href === currentPath;

          return (
            <li key={index}>
              <Link href={navItem.href} $isActive={isActive}>
                <IconContainer $isActive={isActive}>
                  <Icon src={navItem.src} alt={navItem.alt} />
                </IconContainer>
                {isActive ? navItem.text : " "}
              </Link>
            </li>
          );
        })}
      </List>
    </NavContainer>
  );
}

export default Nav;
