import styled from "styled-components";

export const StNavBar = styled.nav`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  top: 0;
  z-index: 2147483000;
  position: sticky;
  background-color: #323232;
  display: flex;

  .link-wrapper {
    display: flex;
    align-items: center;
    width: 100px;
  }
`;

export const StNavBarLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 0 20px;
  color: #ffac41;
  text-transform: uppercase;
  text-decoration: none;
`;

export const StPlanetItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 3px;
`;
