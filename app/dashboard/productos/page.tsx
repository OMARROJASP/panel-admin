import ProductTable from "@/components/product/ProductTable";
import { getProducts } from "@/lib/api/products";

export default async function ProductsPage() {
  const products = await getProducts();
  console.log(products.data)
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Listado de Productos</h2>
      <div className="border rounded p-4 bg-white shadow">
        <ProductTable products={products.data }/>
      </div>
    </div>
  );
}
