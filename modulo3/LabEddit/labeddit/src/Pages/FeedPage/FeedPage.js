import React from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header} from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerFeed, Hr, PostButton, TextAreaPost } from "./styled";

export const FeedPage = () => {
  useProtectedPage()

  return (
    <div>
      <Header/>
      <ContainerFeed>
      <TextAreaPost placeholder="Escreva seu post..."></TextAreaPost>
      <PostButton>Postar</PostButton>
      </ContainerFeed>
      <Hr/>
     <CardPost/>
    </div>
  );
}


