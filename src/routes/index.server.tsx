import Header from "../components/Header.client";
import { useUrl, gql, CacheLong, useShopQuery } from "@shopify/hydrogen"

export default function Home() {

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });



  return (
    <div>
      <Header shop={shop} />
      <div>
        <h1>Hey there dudes</h1>
        <p>I think headlessui is pretty cool</p>
      </div>
    </div>
  )
}

const SHOP_QUERY = gql`
  query layout {
    shop {
      name
      description
    }
  }
`;
