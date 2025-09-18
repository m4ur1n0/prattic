'use client'

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
        if (!GA_ID) return;

        // if gtag is not immediately ready
        if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

        const page_path = pathname + (searchParams ? `?${searchParams.toString()}` : '');

        window.gtag('event', 'page_view', {page_path});
    }, [pathname, searchParams])

    return null;
}