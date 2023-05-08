import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://workable-cub-18.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "DCKCIDcNuICFw3kIw6LEPi6mttRmbOC69n6zO5ltfrZRuDNBopLPh3gYayLt4wOH",
  },
});