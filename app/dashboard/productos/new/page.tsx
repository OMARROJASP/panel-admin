"use client"

import { useState } from "react"


type ProductFormData = {
  prod_name: string
  prod_description: string
  prod_price: string
  prod_stock: string
  prod_ofert: string
  prod_imageUrl: string
  prod_status: boolean
  prod_category: string
  prod_supplier: string
}

export default function ProductForm() {

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"; 
    const [formData, setFormData] = useState<ProductFormData>({
    prod_name: '',
    prod_description: '',
    prod_price: '',
    prod_stock: '',
    prod_ofert: '',
    prod_imageUrl: '',
    prod_status: true,
    prod_category: '',
    prod_supplier: '',
    }) 
    
const [imageFile, setImageFile] = useState< File| null>(null)

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target

  const newValue =
    type === 'checkbox' && e.target instanceof HTMLInputElement
      ? e.target.checked
      : value

  setFormData(prev => ({
    ...prev,
    [name]: newValue,
  }))
}

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const file = e.target.files?.[0]
    if (file) {
        setImageFile(file)
    }
} 

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    data.append('prod_name', formData.prod_name)
    data.append('prod_description', formData.prod_description)
    data.append('prod_price', formData.prod_price)
    data.append('prod_stock', formData.prod_stock)
    data.append('prod_ofert', formData.prod_ofert)
    data.append('prod_category', formData.prod_category)
    data.append('prod_supplier', formData.prod_supplier)

     if (imageFile) {
      data.append('prod_image', imageFile) // asegúrate que tu backend espera "prod_image"
    }


     const res = await fetch(`${API_URL}/product`, {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      alert('Producto creado con éxito')
    } else {
      alert('Error al crear el producto')
    }
}

 return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl p-4 text-black bg-white shadow rounded">
      <input name="prod_name" placeholder="Nombre" value={formData.prod_name} onChange={handleChange} className="input" />
      <textarea name="prod_description" placeholder="Descripción" value={formData.prod_description} onChange={handleChange} className="input" />
      <input type="number" name="prod_price" placeholder="Precio" value={formData.prod_price} onChange={handleChange} className="input" />
      <input type="number" name="prod_stock" placeholder="Stock" value={formData.prod_stock} onChange={handleChange} className="input" />
      <input type="number" name="prod_ofert" placeholder="Oferta (%)" value={formData.prod_ofert} onChange={handleChange} className="input" />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      <select name="prod_category" value={formData.prod_category} onChange={handleChange} className="input">
        <option value="">Selecciona categoría</option>
        <option value="zapatillas">Zapatillas</option>
        <option value="yogourt">yogourt</option>
      </select>
      <select name="prod_supplier" value={formData.prod_supplier} onChange={handleChange} className="input">
        <option value="">Selecciona proveedor</option>
        <option value="nike">Nike</option>
        <option value="samsung">Samsung</option>
      </select>
      <button type="submit" className="btn btn-primary">Crear producto</button>
    </form>
  )

}

