"use client"

import { Text, clx } from "@medusajs/ui"
import { ChangeEvent } from "react"

type WineFilterProps = {
    title: string
    items: {
        value: string
        label: string
    }[]
    value?: string
    setQueryParams: (name: string, value: string) => void
    queryKey: string
}

const WineFilter = ({
    title,
    items,
    value,
    setQueryParams,
    queryKey,
}: WineFilterProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value
        // If clicking the same value, simple toggle logic could be here,
        // but for now let's just set it.
        // Ideally we might want multi-select (array), but keeping it simple for query params
        setQueryParams(queryKey, newVal === value ? "" : newVal)
    }

    return (
        <div className="flex flex-col gap-2">
            <Text className="text-wine-900 font-serif font-bold text-base">
                {title}
            </Text>
            <ul className="flex flex-col gap-2">
                {items.map((item) => (
                    <li key={item.value}>
                        <label className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <input
                                type="radio"
                                name={queryKey}
                                value={item.value}
                                checked={value === item.value}
                                onChange={handleChange}
                                className="appearance-none w-4 h-4 border border-wine-300 rounded-full checked:bg-wine-600 checked:border-wine-600 focus:outline-none focus:ring-1 focus:ring-gold-400"
                            />
                            <Text className={clx("text-ui-fg-subtle", {
                                "text-wine-900 font-medium": value === item.value
                            })}>
                                {item.label}
                            </Text>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WineFilter
