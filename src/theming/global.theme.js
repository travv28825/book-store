import React from "react";
import styled, { css, keyframes } from "styled-components";

const UsernameStyle = styled.span`
  margin-left: 0.3rem;
  color: cornflowerblue;
`;
const scaleout = keyframes`
0% {
  -webkit-transform: scale(0);
          transform: scale(0);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
  opacity: 0;
}
`;
const cubemove = keyframes`
  25% {
    -webkit-transform: translateX(10px) rotate(-90deg);
            transform: translateX(10px) rotate(-90deg);
  }
  50% {
    -webkit-transform: translateX(10px) translateY(10px) rotate(-179deg);
            transform: translateX(10px) translateY(10px) rotate(-179deg);
  }
  50.1% {
    -webkit-transform: translateX(10px) translateY(10px) rotate(-180deg);
            transform: translateX(10px) translateY(10px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(10px) rotate(-270deg);
            transform: translateX(0px) translateY(10px) rotate(-270deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
`;
const StyledButton = styled.button`
  padding: 0 1rem;
  height: 2.125rem;
  text-align: center;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px #d9d9d9 solid;
  color: #262626;
  cursor: pointer;
  display: inline-block;
  outline: none;
  font-size: 0.875rem;
  line-height: 1;
  margin: 0.15625rem 0;
  position: relative;

  ${({ loading_pulse }) =>
    loading_pulse &&
    css`
      position: relative;
      padding: 0 1.325rem;

      &:before {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        background-color: #333;
        border-radius: 100%;
        animation: 1s ${scaleout} infinite ease-in-out;
      }
    `}
  ${({ loading_cube }) =>
    loading_cube &&
    css`
      position: relative;
      padding: 0 1.325rem;

      &:before {
        content: "";
        background-color: #333;
        width: 5px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 3px;
        margin-top: -8px;
        -webkit-animation: cubemove 1.8s infinite ease-in-out;
        animation: 1.8s ${cubemove} infinite ease-in-out;
      }
      &:after {
        content: "";
        background-color: #333;
        width: 5px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 3px;
        margin-top: -8px;
        animation: 1.8s ${cubemove} infinite ease-in-out;
        animation-delay: -0.9s;
      }
    `}
  ${({ primary }) =>
    primary &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.blue};
      border-color: #0088ff;

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkblue};
        border-color: #204d74;
      }
    `}
  ${({ info }) =>
    info &&
    css`
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;

      &:hover {
        background-color: #31b0d5;
        border-color: #269abc;
      }
    `}
  ${({ success }) =>
    success &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.green};

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkgreen};
      }
    `}
    ${({ danger }) =>
    danger &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.red};

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkred};
      }
    `}
    ${({ warning }) =>
    warning &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.yellow};
      border-color: ${({ theme }) => theme.borders.yellow};

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkyellow};
      }
    `}
  &:hover {
    cursor: pointer;
    border-color: #787878;
  }
  &:active {
    background: #eeeeee;
    color: #262626;
    box-shadow: none;
  }
  &:focus {
    outline: 0;
  }
  ${({ btninput }) =>
    btninput &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      margin: 0;
    `}
`;
const SpanStyle = styled.span`
  ${({ btninput }) =>
    btninput &&
    css`
      width: 24px;
      height: 24px;
      font-size: 24px;
      line-height: 1;
      position: absolute;
      top: 50%;
      margin-top: -12px;
      left: 4px;
      z-index: 2;
      color: #999999;
    `}
  ${({ placeholder }) =>
    placeholder &&
    css`
      font-size: 1rem;
      color: #c8c8c8;
      position: absolute;
      top: 1.2rem;
      left: 0;
      z-index: 1;
      opacity: 1;
      transition: all 0.3s linear;
    `}
  ${({ label }) =>
    label &&
    css`
      position: absolute;
      display: block;
      z-index: 1;
      color: #1d1d1d;
      opacity: 0;
      top: 16px;
      left: 0;
      transition: all 0.3s linear;
    `}
`;
const InputControlStyle = styled.div`
  display: inline-block;
  min-height: 2.125rem;
  height: 2.125rem;
  position: relative;
  vertical-align: middle;
  margin: 0.325rem 0;
  line-height: 1;

  textarea {
    position: relative;
    min-height: 6.25rem;
    font-family: "Segoe UI", "Open Sans", sans-serif, serif;
  }
  input:focus ~ button,
  input:hover ~ button {
    border-color: #787878;
  }
  input,
  textarea,
  select {
    appearance: none;
    position: relative;
    width: 100%;
    height: 100%;
  }
  input:hover,
  textarea:hover,
  select:hover {
    border-color: #787878;
  }
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #787878;
    outline: none;
  }
`;
const InputStyle = styled.input`
  line-height: normal;
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
  border: 1px #d9d9d9 solid;
  padding: 0.3125rem;
  z-index: 0;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ebebe4;
    `}
  ${({ btnleft }) =>
    btnleft &&
    css`
      padding-left: 30px;
    `}
  ${({ modern }) =>
    modern &&
    css`
      position: absolute;
      top: 1rem;
      left: 0;
      right: 0;
      bottom: 0.5rem;
      border: 0;
      border-bottom: 2px #dddddd solid;
      background-color: transparent;
      outline: none;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      padding-left: 0;
      width: 100%;
      z-index: 2;
      height: 1.75rem;

      &:focus {
        border-bottom-color: #1d1d1d;
      }
      &:focus ~ .placeholder {
        opacity: 0;
        transform: translateX(200px);
        transition: all 0.3s linear;
      }
      &:focus ~ .label {
        opacity: 1;
        transform: translateY(-18px);
        transition: all 0.3s linear;
      }
    `}

      

  ${({ primary }) =>
    primary &&
    css`
      border-color: ${({ theme }) => theme.colors.blue};
    `}
  ${({ success }) =>
    success &&
    css`
      border-color: ${({ theme }) => theme.colors.green};
    `}
  ${({ danger }) =>
    danger &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}
  ${({ warning }) =>
    warning &&
    css`
      border-color: ${({ theme }) => theme.colors.yellow};
    `}
`;
const TextareaStyle = styled.textarea`
  overflow: auto;
  vertical-align: top;
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
`;
const SelectStyle = styled.select`
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
`;
const LinkItemStyle = styled.a`
  display: block;
  line-height: inherit;
  text-align: center;
  width: auto;
  padding: 3px 12px;
  position: relative;
  cursor: pointer;
  font-family: initial;
  font-size: ${({ theme }) => theme.fontSizes.large};
  transition: color 0.4s ease 0s;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  ${({ important }) =>
    important &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.lightgray};
      font-family: ${({ theme }) => theme.fontFamily.sohne};
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: rgba(117, 117, 117, 1);

      border-radius: 2px;
      &:hover {
        border-color: ${({ theme }) => theme.colors.gray};
      }
    `}
`;
export const Username = ({ username }) => (
  <UsernameStyle>#{username}</UsernameStyle>
);
export const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);
export const Span = ({ children, ...args }) => (
  <SpanStyle {...args}>{children}</SpanStyle>
);
export const InputControl = ({ children }) => (
  <InputControlStyle>{children}</InputControlStyle>
);
export const Input = ({ ...args }) => <InputStyle {...args} />;
export const Textarea = ({ ...args }) => <TextareaStyle {...args} />;
export const Select = ({ children, ...args }) => (
  <SelectStyle {...args}>{children}</SelectStyle>
);
export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;
export const LinkItem = ({ children, ...args }) => (
  <LinkItemStyle {...args}>{children}</LinkItemStyle>
);
