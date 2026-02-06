"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import WineFilter from "./wine-filter"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({ sortBy, 'data-testid': dataTestId }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />

      <div className="w-full h-px bg-wine-100 my-2" />

      <WineFilter
        title="Type"
        items={[
          { value: "red", label: "Red" },
          { value: "white", label: "White" },
          { value: "rose", label: "Rosé" },
          { value: "sparkling", label: "Sparkling" },
        ]}
        value={searchParams.get("type") || ""}
        setQueryParams={setQueryParams}
        queryKey="type"
      />

      <WineFilter
        title="Region"
        items={[
          { value: "france", label: "France" },
          { value: "italy", label: "Italy" },
          { value: "usa", label: "California" },
          { value: "spain", label: "Spain" },
        ]}
        value={searchParams.get("region") || ""}
        setQueryParams={setQueryParams}
        queryKey="region"
      />
    </div>
  )
}

export default RefinementList
