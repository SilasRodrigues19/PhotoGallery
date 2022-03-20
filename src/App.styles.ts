import styled from 'styled-components';

export const Container = styled.div`
  background: url('https://cdn.wallpapersafari.com/20/22/P8mUep.jpg') no-repeat
      center / contain,
    #000;
  background-attachment: fixed;
  font-family: 'Quicksand', sans-serif;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }

  div {
    letter-spacing: 5px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const UploadForm = styled.form`
  background-color: transparent;
  border: 1px solid #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type='submit'] {
    background: #ae4ccf;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
