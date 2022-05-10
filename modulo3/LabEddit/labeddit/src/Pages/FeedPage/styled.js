import styled from "styled-components";

export const ContainerFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const TextAreaPost = styled.textarea`
  background-color: #ededed;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  width: 85%;
  height: 20vh;
  ::placeholder {
    padding: 1rem;
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
  cursor: pointer;
`;

export const Hr = styled.hr`
  width: 21rem;
  border-color: #f9b24e;
  color:#f9b24e;
`;
