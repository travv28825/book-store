import styled from "styled-components";

export const Profile = styled.div`
  margin-top: 1rem;
  padding: 0 2rem;
`;
export const User = styled.div`
  width: 280px;
  // border: 1px solid;
  padding: 1rem;

  img {
    border-radius: 50%;
    width: 215px;
    height: 215px;
    margin-bottom: 1.5rem;
  }
  h2{
    font-weight: bold;
  }
  .management {
    margin: 1rem auto;
  }
  .management a{
    color:black;
    font-size: 14px;
    line-height: 1.5;
  }
  .management i{
    color:${({theme}) => theme.colors.blue};
    vertical-align: inherit;
  }
  
  .management a:not(:last-child):after{
    content:' - '
  }
  .location {
    margin:1rem auto;
    padding-bottom:1.5rem;
    border-bottom:1px solid #cecece;
  }
`;
