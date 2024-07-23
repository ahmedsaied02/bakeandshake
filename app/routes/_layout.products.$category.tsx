import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { createSupabaseClient } from "~/supabase/client";
import { Database, Tables } from "~/supabase/types";
import { SupabaseClient } from "@supabase/supabase-js";

const categoryNames = {
  "hot-drinks": "Hot Drinks",
  "cold-drinks": "Cold Drinks",
  bakery: "Bakery",
};

export async function loader({ params }: LoaderFunctionArgs) {
  const categoryParam = params.category!;
  if (!(categoryParam in categoryNames)) {
    throw new Response("Not Found", { status: 404 });
  }

  const supabase = createSupabaseClient();
  const category = categoryNames[categoryParam as keyof typeof categoryNames];
  const [products, subcategories] = await Promise.all([
    fetchProducts(supabase, category),
    fetchSubcategories(supabase, category),
  ]);

  const groupedItems: Record<string, Tables<"products">[]> = {};
  for (const subcategory of subcategories) {
    groupedItems[subcategory] = products.filter((product) => product.subcategory === subcategory);
  }

  return { groupedItems, categoryName: category };
}

async function fetchProducts(
  supabase: SupabaseClient<Database>,
  category: string
) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .contains("categories", [category]);
  if (error) {
    throw error;
  }
  return data;
}

async function fetchSubcategories(
  supabase: SupabaseClient<Database>,
  category: string
) {
  const { data, error } = await supabase
    .from("product_categories")
    .select("subcategories")
    .eq("category", category)
    .single()
    ;
  if (error) {
    throw error;
  }
  return data.subcategories;
}

export default function Cafe() {
  const { categoryName, groupedItems } = useLoaderData<typeof loader>();

  return (
    <div className="bg-primary">
      <h1 className="text-2xl text-secondary text-center mb-4">
        {categoryName} Menu
      </h1>
      <div className="flex flex-col w-full items-center gap-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="w-full flex flex-col items-center justify-center p-6   rounded-lg text-secondary bg-tertiary   ">
            <h2 className=" text-2xl mb-5">{category}</h2>
            <div className=" space-y-3 w-full">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between gap-6 ">
                  <p className="">{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
