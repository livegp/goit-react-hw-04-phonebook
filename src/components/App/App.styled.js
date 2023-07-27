import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 16px;
`;

export const Section = styled.div`
  color: #3b5998;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(46 47 66 / 8%), 0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;
`;

export const Title = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px;
  background-color: #3b5998;
  color: #fff;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  font-weight: 700;
  margin-top: 10px;
  padding: 10px;
  text-transform: uppercase;
  background-color: #3b5998;
  color: #fff;
`;
