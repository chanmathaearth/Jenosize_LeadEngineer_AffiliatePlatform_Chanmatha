"use client"

import { useState } from "react"
import { useProducts, useCreateProduct } from "@/features/products/hooks"
import { showSuccess, showError } from "@/lib/alert"
import { Loading } from "@/components/common/Loading"

export default function AdminProductsPage() {
  const [sourceUrl, setSourceUrl] = useState("")
  const { data: products, isLoading } = useProducts()
  const createProduct = useCreateProduct()

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
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
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
