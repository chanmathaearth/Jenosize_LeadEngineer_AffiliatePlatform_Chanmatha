"use client"

import { useState } from "react"
import { useProducts, useCreateProduct, useDeleteProduct } from "@/features/products/hooks"
import { showSuccess, showError } from "@/lib/alert"
import { Loading } from "@/components/common/Loading"
import { Trash2 } from "lucide-react"
import Swal from "sweetalert2"

export default function AdminProductsPage() {
  const [sourceUrl, setSourceUrl] = useState("")
  const { data: products, isLoading } = useProducts()
  const createProduct = useCreateProduct()
  const deleteProduct = useDeleteProduct()

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!sourceUrl) return

    createProduct.mutate(sourceUrl, {
      onSuccess: () => {
        showSuccess("Product Added", "The product has been successfully fetched and added.")
        setSourceUrl("")
      },
      onError: (error: any) => {
        showError("Error", error.message || "Failed to add product")
      }
    })
  }

  const handleDeleteProduct = (id: string, title: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove "${title}"? This will also remove its offers and links.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct.mutate(id, {
          onSuccess: () => {
            showSuccess("Deleted!", "Product has been removed successfully.")
          },
          onError: (error: any) => {
            showError("Error", error.message || "Failed to delete product.")
          }
        })
      }
    })
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
        <p className="text-gray-500 mt-1">Add new products to track prices across marketplaces.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="flex gap-4">
          <input
            type="url"
            required
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            placeholder="Enter Shopee or Lazada product URL"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={createProduct.isPending}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 disabled:opacity-50 whitespace-nowrap"
          >
            {createProduct.isPending ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-4">Tracked Products</h2>
      
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {products?.map(product => (
              <li key={product.id} className="p-4 sm:p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <div className="h-16 w-16 flex-shrink-0 rounded-md bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image_url} alt={product.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-base font-semibold text-gray-900 truncate">{product.title}</h4>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {product.offers.map(offer => (
                      <span key={offer.id} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {offer.marketplace}: ฿{offer.price}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleDeleteProduct(product.id, product.title)}
                    disabled={deleteProduct.isPending && deleteProduct.variables === product.id}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                    title="Delete product"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
            {(!products || products.length === 0) && (
              <li className="p-8 text-center text-gray-500">No products added yet.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
