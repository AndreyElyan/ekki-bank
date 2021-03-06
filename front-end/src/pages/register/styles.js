import styled from "styled-components";

export const Container = styled.div`
  background: #9932cc;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  background-color: #442084;
  border-radius: 4px;
  width: 320px;
  min-height: 320px;
  padding: 20px;

  h1 {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;

  button,
  a {
    background: rgba(255, 255, 255, 0.1);
    margin: 0 auto;
    border: 0;
    padding: 7px 10px;
    text-transform: uppercase;
    color: #ccc;
    font-size: 12px;
    border-radius: 2px;
    font-weight: 600;
    transition: color 0.2s ease-out, background 0.2s ease-out;
    text-decoration: none;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }

    &:not(:first-child) {
      margin-top: 15px;
    }
  }

  button {
    padding: 12px 15px;
  }
`;
