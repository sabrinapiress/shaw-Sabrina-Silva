import React from "react";
import { BASE_URL } from "../../constant/urls";
import { useRequestData } from "../../hooks/useRequestData";
import {
  ButtonChat,
  ButtonDel,
  ButtonDown,
  ButtonUp,
  ContainerButton,
  ContainerPost,
  NameP,
  PostCommentP,
  PostP,
} from "./styled";
import { ArrowFatDown, ArrowFatUp, Backspace, Chat, XCircle } from "phosphor-react";
import { goToPostPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { delVote, postVote, putVote } from "../../services/feedVotes";

export const CardPost = (props) => {
  const navigate = useNavigate();

  // const postVote = () =>{
  //   const body={
  //     direction: 1
  //   }
  //   axios
  //   .post (`${BASE_URL}/posts/${props.id}/votes`, body, {
  //     headers: {
  //       Authorization: window.localStorage.getItem("token"),
  //     }
  //   })
  //   .then((res)=>{
  //     alert("deu",res.data);
  //   }).catch((err)=>{
  //     alert("não deu",err.data);
  //   })
  // }

  // const putVote = ()=> {
  //   const body={
  //     direction: -1
  //   }
  //   axios
  //   .put(`${BASE_URL}/posts/${props.id}/votes`, body, {
  //     headers: {
  //       Authorization: window.localStorage.getItem("token"),
  //     }
  //   })
  //   .then((res)=>{
  //     alert("deu",res.data);
  //   }).catch((err)=>{
  //     alert("não deu",err.data);
  //   })
  // }

  // const delVote = () => {
  //   axios
  //   .delete(`${BASE_URL}/posts/${props.id}/votes`,{
  //     headers: {
  //       Authorization: window.localStorage.getItem("token"),
  //     }
  //   })
  //   .then((res)=>{
  //     alert("deu",res.data);
  //   }).catch((err)=>{
  //     alert("não deu",err.data);
  //   })
  // }

  const onClickPost = (id) => {
    goToPostPage(navigate, id);
  };

  return (
    <div>
      <ContainerPost>
        <hr />
        <NameP>Enviado por: {props.username}</NameP>
        <PostP>{props.title}</PostP>
        <PostCommentP>{props.body}</PostCommentP>
        <ContainerButton>
          <ButtonUp onClick={() => postVote(props.id)}>
            <ArrowFatUp />
          </ButtonUp>
          {props.voteSum ? props.voteSum : props.voteSum === 0}
          <ButtonDown onClick={() => putVote(props.id)}>
            <ArrowFatDown />
          </ButtonDown>
          <ButtonDel onClick={() => delVote(props.id)}>
            <XCircle size={15} />
          </ButtonDel>
          <ButtonChat onClick={() => onClickPost(props.id)}>
            <Chat />
          </ButtonChat>
          {props.commentCount}
        </ContainerButton>
        <hr />
      </ContainerPost>
    </div>
  );
};
