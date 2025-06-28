"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Product } from "@/types/index";

type Props = {
  products: Product[];
}

export default function ProductTable ({products} : Props) {
    return (
        <div className="overflow-x-auto bg-white rounded shadow-md">
             <table className="w-full text-sm text-left text-gray-600">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-4 py-3">Imagen</th>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Descuento</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Descripción</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.prod_id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">
                <Image
                  src={product.prod_imageUrl}
                  alt={product.prod_name}
                  width={60}
                  height={60}
                  className="rounded"
                />
              </td>
              <td className="px-4 py-3 font-medium">{product.prod_name}</td>
              <td className="px-4 py-3">s/ {product.prod_price}</td>
              <td className="px-4 py-3">
                {product.prod_ofert > 0 ? (
                  <span className="text-green-600 font-semibold">
                    -{product.prod_ofert}%
                  </span>
                ) : (
                  <span className="text-gray-400">Sin descuento</span>
                )}
              </td>
              <td className="px-4 py-3">{product.prod_stock}</td>
              <td className="px-4 py-3">
                <span
                  className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    product.prod_status
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  )}
                >
                  {product.prod_status ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="px-4 py-3 truncate max-w-[180px] text-gray-500">
                {product.prod_description}
              </td>
              <td className="px-4 py-3 text-right space-x-2">
                <button className="text-blue-600 hover:underline">Editar</button>
                <button className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    )
}