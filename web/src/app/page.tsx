"use client"

import { useProducts } from "@/features/products/hooks"
import { ProductCard } from "@/components/products/ProductCard"
import { Loading } from "@/components/common/Loading"
import { ErrorMessage } from "@/components/common/ErrorMessage"

export default function HomePage() {
  const { data: products, isLoading, error } = useProducts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Compare & Save
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Find the best deals across multiple marketplaces. We track prices so you don't have to.
        </p>
      </div>

      {isLoading && <Loading />}
      
      {error && (
        <div className="max-w-2xl mx-auto">
          <ErrorMessage message="Failed to load products. Please try again later." />
        </div>
      )}

      {products && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-200">
              No products found. Add some from the admin dashboard.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
