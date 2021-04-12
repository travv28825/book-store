import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0px;
  height: 3.8rem;
  z-index: 4;
  background: ${({ theme }) => theme.colors.main};
  border-bottom: 1px solid #cecece;
`;
export const Nav = styled.nav`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
`;
export const Logo = styled.a`
  padding: 1rem;
  float: left;
  color: ${({ theme }) => theme.colors.darkred};
`;
export const SearchControl = styled.div`
  padding: 0.5rem;
  float: left;
`;
export const UserActions = styled.div`
  margin: 0 15px;
`;
export const Navigation = styled.ul`
  display:flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  float:left;

  li{
    margin:0 0.3rem;
    padding:0.1rem;

    &:hover{
      border-bottom:1px solid ${({ theme }) => theme.colors.blue};
    }
  }
  a {
    transition: color 0.2s ease 0s;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
