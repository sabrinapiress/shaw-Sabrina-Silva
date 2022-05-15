import axios from "axios";
import { ArrowFatDown, ArrowFatUp, Backspace, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NameP, PostCommentP, PostP } from "../../components/CardPost/styled";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constant/urls";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../Routes/coordinator";
import loadingGif from "../../assets/loading.gif";
import {
  delVoteComments,
  postVoteComments,
  putVoteComments,
} from "../../services/commentVotes";
import {
  ButtonComment,
  ButtonDel,
  ButtonPost,
  ButtonX,
  Comment,
  ContainerComment,
  Hr,
  RenderCommenstDiv,
  TextAreaPost,
  Loading,
  LoadingFeed,
  BodyP,
  P,
  NamePostP,
} from "./styled";

export const PostsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();
  const [form, onChangeInput, clear] = useForm({ body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
  const comments = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  )[0];
  const [post, setPost] = useState({});

  useEffect(() => {
    setIsLoading(true);
    for (const post of posts) {
      if (post.id === params.id) {
        setPost(post);
        setIsLoading(false);
        break;
      }
    }
  }, [posts]);

  const postCreateComment = (form, clear, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, form, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        window.location.reload();
        setIsLoading(false);
        clear();
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.data);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    postCreateComment(form, clear, setIsLoading);
  };

  const renderComments = comments.map((comment) => {
    return (
      <Comment>
        <NamePostP>Comentário enviado por: {comment.username}</NamePostP>
        <BodyP>{comment.body}</BodyP>
        <ButtonPost onClick={() => postVoteComments(comment.id)}>
          <ArrowFatUp />
        </ButtonPost>
        <> {comment.voteSum}</>
        <ButtonPost onClick={() => putVoteComments(comment.id)}>
          <ArrowFatDown />
        </ButtonPost>
        <ButtonDel onClick={() => delVoteComments(comments.id)}>
          <Backspace size={15} />
        </ButtonDel>
      </Comment>
    );
  });
  return (
    <div>
      <Header />
      <ButtonX onClick={() => goBack(navigate)}>
        <X size={25} />
      </ButtonX>
      <Hr />
      {isLoading ? (
        <LoadingFeed src={loadingGif} />
      ) : (
        <div>
        <P>
          Post enviado por: <b>{post.username}</b>
        </P>
        <PostP>{post.title}</PostP>
        <PostCommentP>{post.body}</PostCommentP>
      </div>
      )}
      {/* <div>
        <P>
          Post enviado por: <b>{post.username}</b>
        </P>
        <PostP>{post.title}</PostP>
        <PostCommentP>{post.body}</PostCommentP>
      </div> */}
      <ContainerComment onSubmit={onSubmitForm}>
        <TextAreaPost
          placeholder="Adicionar comentário"
          name={"body"}
          value={form.body}
          type={"text"}
          onChange={onChangeInput}
          required
        />
        <ButtonComment type={"submit"}> Responder</ButtonComment>
      </ContainerComment>
      <Hr />
      {isLoading ? (
        <LoadingFeed src={loadingGif} />
      ) : (
        <RenderCommenstDiv>{renderComments}</RenderCommenstDiv>
      )}
    </div>
  );
};
