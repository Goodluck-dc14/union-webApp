import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  z-index: 9999;
  height: 100%;
  background: rgba(0, 0, 0, 0.667);
  align-items: center;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  color: white;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: white;
  /* margin: auto; */
`;
export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1.6px;
  /* margin-top: 3rem; */
  &:hover {
    color: yellow;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 3rem; */
  font-weight: 600;
  color: #fff;
`;

export const SidebarRoute = styled.div`
  border-radius: 50px;
  /* background: #01bf71; */
  white-space: nowrap;
  padding: 16px 64px;
  /* color: #010606; */
  font-size: 16px;
  outline: none;
  border: none;
  /* cursor: pointer; */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: white; */
    /* color: #010606; */
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
