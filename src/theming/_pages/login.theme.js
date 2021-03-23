import React from "react";
import styled from "styled-components"

const login = ({className,children})=>(
    <section className={className}>
        {children}
    </section>
);
// span
const SpanTitle = styled.span`
  -webkit-transform: scale(0.83333) translateY(-10px);
  transform: scale(0.83333) translateY(-10px);
  color: #8e8e8e;
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transition: -webkit-transform ease-out 0.1s;
  transition: -webkit-transform ease-out 0.1s;
  transition: transform ease-out 0.1s;
  transition: transform ease-out 0.1s, -webkit-transform ease-out 0.1s;
  user-select: none;
  white-space: nowrap;
`;
// inputs
const ipt = ({ className, change, val, name, type }) => (
  <input
    className={className}
    required
    onChange={change}
    value={val}
    name={name}
    type={type || "text"}
    id={val}
  />
);
const InputContent = styled(ipt)`
  font-size: 12px;
  padding: 14px 0 2px 8px !important;
  background: #fafafa;
  border: 0;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
`;
const group = ({ className, children, title, ...rest }) => (
    <div className={className}>
      <LabelInput {...rest}>
        <SpanTitle>{title}</SpanTitle>
        {children}
      </LabelInput>
    </div>
  );
// label
const label = ({ className, children, val, ...rest }) => (
  <label htmlFor={val} className={className}>
    {children}
    <InputContent val={val} {...rest} />
  </label>
);
const LabelInput = styled(label)`
  display: flex;
  height: 36px;
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`;

export const GroupForm = styled(group)`
border: 1px solid #cecece;
align-items: center;
-webkit-appearance: none;
background: #fafafa;
border: 1px solid #dbdbdb;
border-radius: 3px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
color: #262626;
display: flex;
flex-direction: row;
font-size: 14px;
position: relative;
width: 100%;
margin: 10px 5px;
`;
export const LoginWrapper = styled(login)`
    width: auto;
    padding-top: 50px;

    h1{
        text-align: center;
        letter-spacing: -1px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin: 70px 30%;
        height: max-content;
        width: 255px;
        color:${({theme})=> theme.colors.text};
        background: ${({theme})=> theme.colors.light};
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.17);
        border-radius:5px;
    }
    button{
        margin-right:0;
        margin-left:0;
    }
`;
