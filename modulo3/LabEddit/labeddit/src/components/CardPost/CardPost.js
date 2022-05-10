import React from "react";
import { BASE_URL } from "../../constant/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { ButtonChat, ButtonDown, ButtonUp, ContainerButton, ContainerPost } from "./styled";
import {ArrowFatDown, ArrowFatUp, Chat, } from "phosphor-react"
export const CardPost = () => {
    const feedPosts = useRequestData([], `${BASE_URL}/posts`)
    console.log(feedPosts);
    return(
        <ContainerPost>
            <hr/>
            <p>POST</p>
            <ContainerButton>
            <ButtonUp><ArrowFatUp/></ButtonUp>
            <ButtonDown><ArrowFatDown/></ButtonDown>
            <ButtonChat><Chat/></ButtonChat>
            </ContainerButton>
            <hr/>
        </ContainerPost>
    )
}