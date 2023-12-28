import supabase from "../supabase/supabase";

// get all products
export async function getAllProducts() {
  let { data: Products, error } = await supabase.from("Products").select("*");

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return Products;
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
