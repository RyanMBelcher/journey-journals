import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_TRIP = gql`
    mutation addTrip($location: String!) {
        addTrip(location: $location) {
            _id
            username
            location
            posts {
                _id
            }
            postCount
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($postInfo: AddPostInfo) {
        addPost(postInfo: $postInfo) {
            _id
            title
            description
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($text: String!, $username: String, $postId: String!) {
        addComment(text: $text, username: $username, postId: $postId) {
            _id
            username
            title
            description
            image
            likes
            comments {
                _id
                text
                username
                createdAt
            }
            createdAt
        }
    }
`;

export const DELETE_TRIP = gql`
    mutation deleteTrip($tripId: String!, $username: String) {
        deleteTrip(tripId: $tripId, username: $username) {
            _id
            username
            location
            posts {
                _id
            }
            postCount
        }
    }
`;

export const DELETE_POST = gql`
    mutation DeletePost($postId: String!) {
        deletePost(postId: $postId) {
            _id
            title
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation deleteComment($commentId: String!, $postId: String!) {
        deleteComment(commentId: $commentId, postId: $postId) {
            _id
            username
            title
            description
            image
            likes
            comments {
                _id
                createdAt
                text
            }
            createdAt
            tripId {
                _id
                location
            }
        }
    }
`;