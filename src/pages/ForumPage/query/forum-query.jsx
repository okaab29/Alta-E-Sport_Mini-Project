import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      post_id
      title
      description
    }
  }
`;

export const ADD_POSTS = gql`
  mutation MyMutation($object: posts_insert_input = {}) {
    insert_posts_one(object: $object) {
      post_id
      title
      description
    }
  }
`