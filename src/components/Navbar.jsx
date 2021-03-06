import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top:0;
  left:0;
  right:0;
  z-index:1;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  input {
    outline: none;
  }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              to="/"
            >
              BIT
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              to="/register"
            >
              {props.name}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              to="/login"
            >
              SignIn
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              to="/cart"
            >
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
