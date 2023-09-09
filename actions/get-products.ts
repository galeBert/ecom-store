import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      ...query,
    },
  });

  const res = await axios.get(url);
  console.log(url, res);

  return res.data;
};

export default getProducts;
