import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 10px;
  padding: 10px;

  img {
    height: 150px;
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    border: 1px solid #FF6D6D;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    transition: background-color 1.5s ease;
    &:hover {
      background-color: #FF6D6D;
      opacity: .8;
      transition: background-color 1.5s ease;
    }
  }
`;