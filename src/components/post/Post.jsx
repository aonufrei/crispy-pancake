import React from "react";

import styled from "styled-components";

import { Paper, Divider, Text } from "../shared/Styles";
import { unit } from "../shared/constants";

import Action from "./action/Action";
import Comment from "./comment/Comment";

const PostLayout = styled(Paper)`
    margin-bottom: ${unit}px;
`;

const PostHeader = styled(Paper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

const ImageNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AuthorImage = styled.div`
    border-radius: 999px;
    background-color: #ccc;
    ${props => props.src && `background-image: url(${props.src});`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${unit * 3}px;
    height: ${unit * 3}px;
    margin-right: ${unit}px;
`;

const AuthorName = styled.span`
    display: block;
`;

const PostDate = styled.span`
    display: block;
    text-align: center;
    font-size: 12px;
`;

const Content = styled.div`
    padding: 0 ${unit}px;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const CommentContainer = styled.div`
    border-left: 6px solid ${props => (props.lineColor || '#000000') + `33`};
    padding: 0 ${unit * 2}px 0 ${unit}px;
    margin-left: ${unit * 2}px;
`;

const Post = (props) => {
    const [showComments, setShowComments] = React.useState(false);

    return (
        <PostLayout>
            <PostHeader>
                <ImageNameContainer>
                    <AuthorImage src={props.data.author_image}></AuthorImage>
                    <AuthorName>{props.data.author}</AuthorName>
                </ImageNameContainer>

                <PostDate>12:32</PostDate>
            </PostHeader>
            <Divider alpha={0.1} />

            <Content>
                <Text size={`${unit * 0.75}px`}>{props.data.content}</Text>
            </Content>
            <Divider alpha={0.1} />

            <ActionContainer>
                <Action
                    theme={props.theme}
                    onClass="fas fa-heart"
                    offClass="far fa-heart"
                    count={15523230}
                    state={false}
                    onChange={(active) => console.log(active)}
                />
                <Action
                    theme={props.theme}
                    onClass="fas fa-comments"
                    offClass="far fa-comments"
                    count={15}
                    state={false}
                    onChange={(active) => setShowComments(active)}
                />
            </ActionContainer>
            {showComments && (
                <>
                    <Divider />

                    <CommentContainer>
                        <Comment
                            theme={props.theme}
                            author={{ image: "", name: "Artem Onufrei" }}
                            content={"Some Content"}
                            datetime="15:22"
                        />
                        <Comment
                            theme={props.theme}
                            author={{ image: "", name: "Artem Onufrei" }}
                            content={"Some Content"}
                            datetime="15:22"
                        />
                        <Comment
                            theme={props.theme}
                            author={{ image: "", name: "Artem Onufrei" }}
                            content={"Some Content"}
                            datetime="15:22"
                        />
                        <Comment
                            theme={props.theme}
                            author={{ image: "", name: "Artem Onufrei" }}
                            content={"Some Content"}
                            datetime="15:22"
                        />
                    </CommentContainer>

                    {/* <div>Comments: {props.data.comments}</div> */}
                </>
            )}
        </PostLayout>
    );
};

export default Post;
