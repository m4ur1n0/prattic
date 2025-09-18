'use client'

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
        if (!GA_ID) return;

        const sendPageView = () => {
            const page_path = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            const page_location = window.location.href;
            const page_title = document.title;

            window.gtag('event', 'page_view', {
                page_location,
                page_path,
                page_title
            });
        }

        // if gtag already initialized, fire immediately
        if (typeof window.gtag === 'function') {
            sendPageView();
            return;
        }

        // poll until gtag is ready
        const interval = setInterval(() => {
            if (typeof window.gtag === 'function') {
                sendPageView();
                clearInterval(interval);
            }
        }, 50);


        return () => clearInterval(interval);
    }, [pathname, searchParams])

    return null;
}
