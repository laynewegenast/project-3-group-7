const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    commentss: [Comment]
    friends: [User]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    
  }

  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment 
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
