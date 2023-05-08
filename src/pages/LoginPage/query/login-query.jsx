import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query MyQuery {
  users {
    uuid
    username
    password
  }
}
`;

export const ADD_USERS = gql`
  mutation users($object: users_insert_input!) {
    insert_users_one(object: $object) {
      uuid
      username
    }
  }
`;