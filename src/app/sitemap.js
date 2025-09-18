export default function sitemap() {
    const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "https://prattic.org";
    const staticPaths = ["/", "/schedule", "/sign-up", "tickets"];

    return staticPaths.map((path) => ({
        url : `${baseURL}${path}`,
        lastModified : new Date().toISOString(),
    }));
}