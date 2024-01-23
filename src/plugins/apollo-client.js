import { gql } from "@apollo/client";

export const get_countries = gql`
  query {
    countries {
      name
      capital
      continent {
        name
      }
      code
      languages {
        name
      }
      currencies
    }
  }
`;

export const get_img_country = gql`
  query GetCountryImage($countryCode: String!) {
    countryImage(countryCode: $countryCode) {
      id
      imageUrl
      width
      height
    }
  }
`;
