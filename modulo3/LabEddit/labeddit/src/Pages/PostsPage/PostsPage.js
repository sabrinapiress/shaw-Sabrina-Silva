import axios from "axios";
import { ArrowFatDown, ArrowFatUp, Backspace, X } from "phosphor-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constant/urls";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../Routes/coordinator";
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
} from "./styled";

export const PostsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();
  const [form, onChangeInput, clear] = useForm({ body: "" });

  const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)[0];

  const postCreateComment = (form, clear) => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, form, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(res.data);
        clear();
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  // useEffect(()=>{
  //   postCreateComment()
  // },[])

  const onSubmitForm = (event) => {
    event.preventDefault();
    postCreateComment(form, clear);
  };

  const renderComments = comments.map((comment) => {
    return (
      <Comment>
        <p>{comment.username}</p>
        <p>{comment.body}</p>
        <ButtonPost onClick={() => postVoteComments(comment.id)}>
          <ArrowFatUp />
        </ButtonPost>
        {comment.voteSum}
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
      <ContainerComment onSubmit={onSubmitForm}>
        <TextAreaPost
          placeholder="Adicionar comentário"
          name={"body"}
          value={form.body}
          type={"text"}
          onChange={onChangeInput}
          required
        />
        <ButtonComment type={"submit"}>Responder</ButtonComment>
      </ContainerComment>
      <Hr />
      <RenderCommenstDiv>{renderComments}</RenderCommenstDiv>
    </div>
  );
};
