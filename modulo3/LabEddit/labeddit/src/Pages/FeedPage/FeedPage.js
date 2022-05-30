import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constant/urls";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { postCreatePost } from "../../services/contentView";
import loader from "../../assets/loader.gif"
import loadingGif from "../../assets/loading .gif"
import {
  ContainerFeed,
  Hr,
  LoadingFeed,
  PostButton,
  TextAreaPost,
  TextAreaTitle,
  Loading
} from "./styled";


export const FeedPage = () => {
  useProtectedPage();
  const [form, onChangeInput, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const onSubmitForm = (event) => {
    event.preventDefault();
    postCreatePost(form, clear, setIsLoading);
  };

  // const getPosts = useRequestData([], `${BASE_URL}/posts`);

  const getPost = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setPosts(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert("Erro! Por favor, tente mais tarde.", err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const renderCard = posts.map((post) => {
    return (
      <CardPost
        username={post.username}
        title={post.title}
        body={post.body}
        id={post.id}
        commentCount={post.commentCount}
        voteSum={post.voteSum}
        userVote={post.userVote}
      />
    );
  });

  return (
    <div>
      <Header />
      <ContainerFeed onSubmit={onSubmitForm}>
        <TextAreaTitle
          placeholder="Titulo do seu post"
          name={"title"}
          value={form.title}
          type={"text"}
          onChange={onChangeInput}
          required
        />
        <TextAreaPost
          placeholder="Escreva algo..."
          name={"body"}
          value={form.body}
          type={"text"}
          onChange={onChangeInput}
          required
        />
        <PostButton type={"submit"}>Postar</PostButton>
      </ContainerFeed>
      <Hr />
      {isLoading ? <LoadingFeed src={loadingGif} /> : <>{renderCard}</>}
    </div>
  );
};
