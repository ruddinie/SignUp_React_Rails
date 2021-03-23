import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #e1e1e1;

  @media(min-width: 500px){
    padding-top: 15%;
  }
  .form{
      max-width: 30em;
      margin: auto;
      padding: 3em;
      background-color: #fafafa;
      box-shadow: 5px 5px 10px;
      @media(min-width: 500px){
        border-radius: 1.5em;
        border: solid #bebebe 2px;
      }
  }
  
`;
// export default Container;