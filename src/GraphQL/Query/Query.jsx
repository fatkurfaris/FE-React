import gql from "graphql-tag";

export const Insert_Data = gql`
mutation MyMutation($object: Pemesanan_insert_input!) {
    insert_Pemesanan_one(object: $object) {
      Payment
      Title
      Seat
      Harga
    }
  }`

  export const LOAD_MOVIE = gql `
query Movie {
    Movie {
      id
      Cast
      Directors
      Duration
      Genre
      Img
      Producers
      Production
      Rate
      Sinopsis
      Title
      Trailer
      Writer
      harga
      Pay
    }
  }
`

export const LOAD_UPCOMING = gql `
query Upcoming {
  Upcoming {
    id
    Cast
    Directors
    Duration
    Genre
    Img
    Producers
    Production
    Rate
    Sinopsis
    Title
    Trailer
    Writer
  }
}
`
export const LOGIN = gql `
query Login {
  Login {
    id
    Name
    Password
  }
}
`
