import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  opacity: 0.7;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: white;
    }
  }

  svg {
    padding: 1rem;
    fill: white;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: black;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  font-family: "Righteous", cursive;
  @media screen and (max-width: 960px) {
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    font-family: "Righteous", cursive;
    font-size: 12px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: white;
  @import url("https://fonts.googleapis.com/css2?family=Kanit&family=Righteous&display=swap");
  font-family: "Helvetica", cursive;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  @media screen and (max-width: 960px) {
    @font-face {
      font-family: "MyFont";
      src: local("MyFont"),
        url(./fonts/HelveticaNeueCyr-Medium.ttf) format("ttf");
    }
    font-size: 2rem;
  }
  &:hover {
    color: black;
    background-color: white;
    font-color: black;
    transition: 0.5s all ease;

    div {
      svg {
        fill: black;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;
