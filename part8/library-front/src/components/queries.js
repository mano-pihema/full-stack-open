import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
  }
`
export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`
export const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $genres: [String!]
    $published: String
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
      published
      genres
    }
  }
`

export const EDIT_BIRTH = gql`
  mutation changeBirth($name: String!, $birthday: Int!) {
    updateBirthday(name: $name, birthday: $birthday) {
      name
      born
    }
  }
`
