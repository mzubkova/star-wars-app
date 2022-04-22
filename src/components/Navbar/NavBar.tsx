import { useRouter } from "next/router";
import { StNavBar, StNavBarLogo } from "./styled";
import StyledLink from "../Link";
import Link from "next/link";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Planets", path: "/planets" },
  { id: 3, title: "People", path: "/people" },
  { id: 4, title: "Films", path: "/films" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <StNavBar>
      <Link href="/" passHref>
        <StNavBarLogo>star wars</StNavBarLogo>
      </Link>
      {navigation.map(({ id, title, path }) => (
        <StyledLink
          key={id}
          href={path}
          isActive={pathname === path ? true : false}
        >
          {title}
        </StyledLink>
      ))}
    </StNavBar>
  );
};

export default Navbar;
