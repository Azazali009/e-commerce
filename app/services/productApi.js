import { PAGE_SIZE } from "../components/pageSize";
import supabase from "../supabase/supabase";

// get all products
export async function getAllProducts({ page }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  let {
    data: Products,
    error,
    count,
  } = await supabase
    .from("Products")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return { Products, count };
}

// get featured products

export async function getFeaturedProducts() {
  let { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .eq("isFeatured", true);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return Products;
}

// get single product by id
export async function getProductById(id) {
  let { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return data[0];
}

// get filter products
export async function getFilterProducts(filterValue) {
  let { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("category", filterValue);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return data;
}
