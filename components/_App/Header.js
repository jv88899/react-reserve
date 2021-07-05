import { Container, Icon, Image, Menu, MenuItem } from "semantic-ui-react";
import Link from "next/link";

function Header() {
  return (
    <Menu fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <MenuItem header>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ReactReserve
          </MenuItem>
        </Link>
        <Link href="/cart">
          <MenuItem header>
            <Icon name="cart" size="large" />
            Cart
          </MenuItem>
        </Link>
        <Link href="/create">
          <MenuItem header>
            <Icon name="add square" size="large" />
            Create
          </MenuItem>
        </Link>
        <Link href="/account">
          <MenuItem header>
            <Icon name="user" size="large" />
            Account
          </MenuItem>
        </Link>
        <MenuItem header>
          <Icon name="sign out" size="large" />
          Logout
        </MenuItem>
        <Link href="/login">
          <MenuItem header>
            <Icon name="sign in" size="large" />
            Login
          </MenuItem>
        </Link>
        <Link href="/signup">
          <MenuItem header>
            <Icon name="signup" size="large" />
            Sign Up
          </MenuItem>
        </Link>
      </Container>
    </Menu>
  );
}

export default Header;
