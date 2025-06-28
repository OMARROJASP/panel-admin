import { Product } from '@/types/index';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${API_URL}/product`, {
        cache: "no-store"
    });

    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
}

export async function getProductByI(id: number): Promise<Product> {
    const res = await fetch(`${API_URL}/product/${id}`, {
        cache: "no-store",
    })

    if (!res.ok)throw new Error("Error al obtener el prodcuto");

    return res.json();
}

export async function createProdcut(data: Partial<Product>) {
    const res = await fetch(`${API_URL}/product`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data),
    })

    if (!res.ok) throw new Error("Error al crear producto");

    return res.json();
}