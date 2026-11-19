import path from "path";

const navItems = [
  { label: "Shop", path: "/shop" },
  { label: "Sale", path: "/sale" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "About&Help", path: "/about" },
];

const NavBar = () => {
  return <nav>
    <ul>
        {navItems.map( ({label, path}) => (
            <li key={label}> {label}</li>
        ) )}
    </ul>
  </nav>;
};

export default NavBar;
