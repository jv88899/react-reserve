import { Container, Icon, Image, Menu, MenuItem } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = () => nProgress.start();
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Header() {
  const router = useRouter();
  const user = false;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <MenuItem header active={isActive("/")}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ReactReserve
          </MenuItem>
        </Link>
        <Link href="/cart">
          <MenuItem header active={isActive("/cart")}>
            <Icon name="cart" size="large" />
            Cart
          </MenuItem>
        </Link>
        {user && (
          <Link href="/create">
            <MenuItem header active={isActive("/create")}>
              <Icon name="add square" size="large" />
              Create
            </MenuItem>
          </Link>
        )}
        {user ? (
          <>
            <Link href="/account">
              <MenuItem header active={isActive("/account")}>
                <Icon name="user" size="large" />
                Account
              </MenuItem>
            </Link>
            <MenuItem header>
              <Icon name="sign out" size="large" />
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <Link href="/login">
              <MenuItem header active={isActive("/login")}>
                <Icon name="sign in" size="large" />
                Login
              </MenuItem>
            </Link>
            <Link href="/signup">
              <MenuItem header active={isActive("/signup")}>
                <Icon name="signup" size="large" />
                Sign Up
              </MenuItem>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
