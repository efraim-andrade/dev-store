import Link from 'next/link'
import Image from 'next/image'

import { api } from '~/data/api'
import { Product } from '~/data/types/product'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')
  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          alt=""
          width={920}
          height={920}
          quality={100}
          src={highlightedProduct.image}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>

          <span className="flex h-full items-center justify-center text-nowrap rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={product.slug}
            className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              alt=""
              width={920}
              height={920}
              quality={100}
              src={product.image}
              className="transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>

              <span className="flex h-full items-center justify-center text-nowrap rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  currency: 'BRL',
                  style: 'currency',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
