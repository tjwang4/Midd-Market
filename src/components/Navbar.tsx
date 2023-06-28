import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shawdow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Nav.Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={Nav.Link}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={Nav.Link}>
            About
          </Nav.Link>
        </Nav>{" "}
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <ShoppingCartIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
