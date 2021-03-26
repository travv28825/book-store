import React from "react";
import styled, { css } from "styled-components";
import {
  InputControl,
  Button,
  Input,
  Textarea,
  Select,
  Span,
} from "../../theming";

export const Code = styled.div`
  background-color: #eeeeee;
  border: 0 !important;
  border-width: 1px !important;
  border-color: #eeeeee !important;
  border-left: 8px #555555 solid !important;
  padding: 10px;
  overflow: auto;

  p {
    background-color: white !important;
    list-style-type: decimal !important;
    padding-left: 1em;
    border-bottom: 1px #eee solid;
    font-size: 1rem;
    font-family: monospace;
  }
`;
export const Wrapper = styled.div`
  width: 95%;
  max-height: 500px;
  padding: 0.625rem 1.825rem 2rem 2.5rem;
  border: 1px #ccc dashed;
  position: relative;
  margin: 1rem 0 0.625rem 1rem;
  background-color: #ffffff;

  &:before {
    position: absolute;
    content: attr(data-text);
    text-transform: lowercase;
    left: 1.5rem;
    top: 11.875rem;
    color: gray;
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    height: 1rem;
    text-align: right;
    white-space: nowrap;
    direction: ltr;
    width: 12.5rem;
    transform: rotate(-90deg);
    transform-origin: 0 100%;
  }
  button {
    margin: 0.3rem;
  }
`;
export const Palete = styled.div`
  width: 110px;
  height: 90px;
  padding: 20px 21px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  position: relative;

  ${({ b }) =>
    b &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      border-color: ${({ theme }) => theme.borders.blue};
    `}
  ${({ lb }) =>
    lb &&
    css`
      background-color: ${({ theme }) => theme.colors.lightblue};
      border-color: ${({ theme }) => theme.borders.lightblue};
    `}
  ${({ db }) =>
    db &&
    css`
      background-color: ${({ theme }) => theme.colors.darkblue};
      border-color: ${({ theme }) => theme.borders.darkblue};
    `}
    ${({ g }) =>
    g &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.borders.green};
    `}
  ${({ lg }) =>
    lg &&
    css`
      background-color: ${({ theme }) => theme.colors.lightgreen};
      border-color: ${({ theme }) => theme.borders.lightgreen};
    `}
  ${({ dg }) =>
    dg &&
    css`
      background-color: ${({ theme }) => theme.colors.darkgreen};
      border-color: ${({ theme }) => theme.borders.darkgreen};
    `}
    ${({ r }) =>
    r &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.borders.red};
    `}
  ${({ lr }) =>
    lr &&
    css`
      background-color: ${({ theme }) => theme.colors.lightred};
      border-color: ${({ theme }) => theme.borders.lightred};
    `}
  ${({ dr }) =>
    dr &&
    css`
      background-color: ${({ theme }) => theme.colors.darkred};
      border-color: ${({ theme }) => theme.borders.darkred};
    `}
    ${({ y }) =>
    y &&
    css`
      background-color: ${({ theme }) => theme.colors.yellow};
      border-color: ${({ theme }) => theme.borders.yellow};
    `}
  ${({ ly }) =>
    ly &&
    css`
      background-color: ${({ theme }) => theme.colors.lightyellow};
      border-color: ${({ theme }) => theme.borders.lightyellow};
    `}
  ${({ dy }) =>
    dy &&
    css`
      background-color: ${({ theme }) => theme.colors.darkyellow};
      border-color: ${({ theme }) => theme.borders.darkyellow};
    `}
    
    




    ${({ gr }) =>
    gr &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      border-color: ${({ theme }) => theme.borders.gray};
    `}
  ${({ lgr }) =>
    lgr &&
    css`
      background-color: ${({ theme }) => theme.colors.lightgray};
      border-color: ${({ theme }) => theme.borders.lightgray};
    `}
  ${({ dgr }) =>
    dgr &&
    css`
      background-color: ${({ theme }) => theme.colors.darkgray};
      border-color: ${({ theme }) => theme.borders.darkgray};
    `}
    ${({ c }) =>
    c &&
    css`
      background-color: ${({ theme }) => theme.colors.cyan};
      border-color: ${({ theme }) => theme.borders.cyan};
    `}
  ${({ lc }) =>
    lc &&
    css`
      background-color: ${({ theme }) => theme.colors.lightcyan};
      border-color: ${({ theme }) => theme.borders.lightcyan};
    `}
  ${({ dc }) =>
    dc &&
    css`
      background-color: ${({ theme }) => theme.colors.darkcyan};
      border-color: ${({ theme }) => theme.borders.darkcyan};
    `}
    ${({ p }) =>
    p &&
    css`
      background-color: ${({ theme }) => theme.colors.purple};
      border-color: ${({ theme }) => theme.borders.purple};
    `}
  ${({ lp }) =>
    lp &&
    css`
      background-color: ${({ theme }) => theme.colors.lightpurple};
      border-color: ${({ theme }) => theme.borders.lightpurple};
    `}
  ${({ dp }) =>
    dp &&
    css`
      background-color: ${({ theme }) => theme.colors.darkpurple};
      border-color: ${({ theme }) => theme.borders.darkpurple};
    `}
    ${({ i }) =>
    i &&
    css`
      background-color: ${({ theme }) => theme.colors.indigo};
      border-color: ${({ theme }) => theme.borders.indigo};
    `}
  ${({ li }) =>
    li &&
    css`
      background-color: ${({ theme }) => theme.colors.lightindigo};
      border-color: ${({ theme }) => theme.borders.lightindigo};
    `}
  ${({ di }) =>
    di &&
    css`
      background-color: ${({ theme }) => theme.colors.darkindigo};
      border-color: ${({ theme }) => theme.borders.darkindigo};
    `}
`;
export const WrapperPalete = styled.div`
  max-width: 120px;
  float: left;
  margin: 5px;
  position: relative;
`;
export const buttons =
  "<Button>Something!</Button>\n<Button primary>Primary</Button>\n<Button info>Info</Button>\n<Button success>Success</Button>\n<Button danger>Danger</Button>\n<Button warning>Warning</Button>\n<Button loading_pulse>Download NOW</Button>\n<Button loading_cube>Loading</Button>";
export const inputsa = `<InputControl>\n<Input />\n</InputControl>\n<InputControl>\n<Input disabled value="input disabled" />\n</InputControl>\n<InputControl>\n<Textarea></Textarea>\n</InputControl>`;
export const Help = () => (
  <div>
    {/* BUTTONS */}
    <Wrapper data-text="buttons">
      <h1>Buttons</h1>
      <Button>Something!</Button>
      <Button primary>Primary</Button>
      <Button info>Info</Button>
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button warning>Warning</Button>
      <Button loading_pulse>Download NOW</Button>
      <Button loading_cube>Loading</Button>
      <Code>
        {buttons.split("\n").map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </Code>
    </Wrapper>
    {/* INPUTS */}
    <Wrapper data-text="inputs">
      <h1>Inputs</h1>
      <InputControl>
        <Input />
      </InputControl>
      <InputControl>
        <Input disabled value="input disabled" />
      </InputControl>
      <InputControl>
        <Textarea></Textarea>
      </InputControl>
      <InputControl>
        <Input />
        <Button btninput>
          <Span className="mif-folder"></Span>
        </Button>
      </InputControl>
      <InputControl>
        <Input disabled value="disabled" />
        <Button btninput>
          <Span className="mif-folder"></Span>
        </Button>
      </InputControl>
      <InputControl>
        <Span btninput className="mif-user"></Span>
        <Input btnleft />
      </InputControl>
      <InputControl>
        <Input modern />
        <Span className="placeholder" placeholder="true">
          Username
        </Span>
        <Span className="label" label="true">
          Your login
        </Span>
      </InputControl>
    </Wrapper>
    <Wrapper data-text="select">
      <InputControl select>
        <Select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </Select>
      </InputControl>
    </Wrapper>
    {/*PRIMARY , SUCCESS, DANGER AND WARNING INPUTS */}
    <Wrapper data-text="input examples">
      <InputControl>
        <Input primary />
      </InputControl>
      <InputControl>
        <Input success />
      </InputControl>
      <InputControl>
        <Input danger />
      </InputControl>
      <InputControl>
        <Input warning />
      </InputControl>
    </Wrapper>
    {/* COLORS */}
    <Wrapper>
      <h1>colors</h1>
      <WrapperPalete>
        <Palete lb>
          <p>light blue</p>
        </Palete>
        <Palete b>
          <p>blue</p>
        </Palete>
        <Palete db>
          <p>dark blue</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete lg>
          <p>light green</p>
        </Palete>
        <Palete g>
          <p>green</p>
        </Palete>
        <Palete dg>
          <p>dark green</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete lr>
          <p>light red</p>
        </Palete>
        <Palete r="true">
          <p>red</p>
        </Palete>
        <Palete dr>
          <p>dark red</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete ly>
          <p>light yellow</p>
        </Palete>
        <Palete y="true">
          <p>yellow</p>
        </Palete>
        <Palete dy="true">
          <p>dark yellow</p>
        </Palete>
      </WrapperPalete>

      <WrapperPalete>
        <Palete lgr>
          <p>light gray</p>
        </Palete>
        <Palete gr>
          <p>gray</p>
        </Palete>
        <Palete dgr>
          <p>dark gray</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete lc>
          <p>light cyan</p>
        </Palete>
        <Palete c>
          <p>cyan</p>
        </Palete>
        <Palete dc>
          <p>dark cyan</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete lp>
          <p>light purple</p>
        </Palete>
        <Palete p>
          <p>purple</p>
        </Palete>
        <Palete dp>
          <p>dark purple</p>
        </Palete>
      </WrapperPalete>
      <WrapperPalete>
        <Palete li>
          <p>light indigo</p>
        </Palete>
        <Palete i>
          <p>indigo</p>
        </Palete>
        <Palete di>
          <p>dark indigo</p>
        </Palete>
      </WrapperPalete>
    </Wrapper>
  </div>
);
