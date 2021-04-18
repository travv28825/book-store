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
  flex: 5;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
`;
export const Logo = styled.a`
  font-size: 1.5rem;
  padding: 1rem;
  float: left;
  color: black;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const SearchControl = styled.form`
  padding: 0.5rem;
  float: left;
`;
export const UserActions = styled.div`
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
  flex: 1;
  height: 100%;
  padding: 0.5rem;

  .form-sing-in {
  }
`;
export const Navigation = styled.ul`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  float: left;

  li {
    margin: 0 0.3rem;
    border: 1px solid transparent;
    padding-bottom: 0.1rem;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
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
export const FormUser = styled.div`
  width: auto;
  padding: 0.5rem;
  display: flex;
  .header-item {
    width: 25%;
  }
  a{
    color:black;
  }
`;
