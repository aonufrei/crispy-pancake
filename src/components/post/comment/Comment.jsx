import React from "react";

import styled from "styled-components";
import { unit } from "../../shared/constants";
import { Divider, Text } from "../../shared/Styles";
import Action from "../action/Action";

const CommentLayout = styled.div`
    margin-bottom: ${unit*2}px;
`;

const CommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

const ImageNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AuthorInfoContainer = styled.div`
    margin: 10px 0;
`;

const AuthorImage = styled.div`
    border-radius: 999px;
    background-color: #ccc;
    width: ${unit * 2}px;
    height: ${unit * 2}px;
    margin-right: ${unit * 0.5}px;
`;

const CommentDate = styled.span`
    display: block;
    text-align: center;
    font-size: 8px;
`;

const CommentContent = styled.div`
    padding: 0 ${unit}px;
`;

const CommentActionsContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Comment = ({ theme, author, content, datetime }) => {
    return (
        <CommentLayout>
            <CommentHeader>
                <ImageNameContainer>
                    <AuthorImage src={author.image}></AuthorImage>
                    <AuthorInfoContainer>
                        <Text size="15px" margin="0 0 5px 0">{author.name}</Text>
                        <Text size="11px">online</Text>
                    </AuthorInfoContainer>
                </ImageNameContainer>

                <CommentDate>
                    <Text size={"12px"}>{datetime}</Text>
                </CommentDate>
            </CommentHeader>
            <Divider marginFactor={0.5} alpha={0.1}/>
            <CommentContent>
                <Text size={"14px"}>{content}</Text>
            </CommentContent>
            <Divider marginFactor={0.5} alpha={0.1}/>
            <CommentActionsContainer>
                <Action
                    theme={theme}
                    onClass="fas fa-heart"
                    offClass="far fa-heart"
                    count={13}
                    state={false}
                    onChange={(active) => console.log(active)}
                />
            </CommentActionsContainer>
        </CommentLayout>
    );
};

export default Comment;
