import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "MathBelajar ID",
        short_name: "MathBelajar",
        description: "Belajar Matematika SD, SMP, SMA Online Gratis",
        start_url: "/",
        display: "standalone",
        background_color: "#F8FAFC",
        theme_color: "#2563EB",
        orientation: "portrait",
        icons: [
            {
                src: "/icon",
                sizes: "any",
                type: "image/png",
            },
            {
                src: "/icon?size=192",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon?size=512",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
