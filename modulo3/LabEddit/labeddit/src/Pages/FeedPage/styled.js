import styled from "styled-components";

export const ContainerFeed = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;


export const TextAreaTitle = styled.input`
  background-color: #ededed;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  width: 85%;
  height: 4vh;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'IBM Plex Sans';
  margin-bottom: 8px;
  ::placeholder {
    padding: 0.2rem;
  }
`;

export const TextAreaPost = styled.textarea`
  background-color: #ededed;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  width: 85%;
  height: 20vh;
  font-size: 1.2rem;
  font-family: 'IBM Plex Sans';
  ::placeholder {
    padding: 0.2rem;
  }
`;

export const PostButton = styled.button`
  border: none;
  width: 21rem;
  height: 2rem;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  color: #fff;
  margin-top: 1rem;
  font-family: 'IBM Plex Sans';
  font-size: 20px;
  cursor: pointer;
`;

export const Hr = styled.hr`
  width: 21rem;
  border-color: #f9b24e;
  color:#f9b24e;
`;

export const LoadingFeed = styled.img`
width: 6rem;
margin-left: 9.5rem;
margin-top: 3rem;
`
export const Loading = styled.img`
width: 2rem;
height: 2rem;

`