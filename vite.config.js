import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

/**
 * Automatically discovers all HTML files in the project root and docs directory
 * to use as Vite entry points.
 */
const getHtmlEntries = () => {
    const entries = {
        main: resolve(__dirname, "index.html"),
    };

    const docsDir = resolve(__dirname, "docs");
    if (fs.existsSync(docsDir)) {
        const files = fs.readdirSync(docsDir);
        files.forEach((file) => {
            if (file.endsWith(".html")) {
                // Use the filename (without extension) as the entry key
                const name = file.replace(".html", "");
                entries[name] = resolve(docsDir, file);
            }
        });
    }
    return entries;
};

/**
 * Vite plugin to inject shared HTML templates (Nav, Footer) into pages.
 */
const htmlLayoutPlugin = () => {
    return {
        name: "html-layout-plugin",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (!req.url) {
                    next();
                    return;
                }

                const cleanUrl = req.url.split("?")[0];
                const querySuffix = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";

                // redirect root
                if (cleanUrl === "/") {
                    res.writeHead(302, { Location: "/docs/" + querySuffix });
                    res.end();
                    return;
                }

                // /docs without trailing slash breaks relative links (e.g. href="page" → /page)
                if (cleanUrl === "/docs") {
                    res.writeHead(302, { Location: "/docs/" + querySuffix });
                    res.end();
                    return;
                }

                // Vite dev internals (/@vite/client, /@fs/, /@id/, …) — must not be handled as HTML
                if (cleanUrl.startsWith("/@")) {
                    next();
                    return;
                }

                // redirect .html to extensionless
                if (cleanUrl.endsWith(".html") && cleanUrl !== "/index.html") {
                    res.writeHead(302, { Location: cleanUrl.slice(0, -5) + querySuffix });
                    res.end();
                    return;
                }

                // skip static assets
                if (
                    cleanUrl.includes(".") ||
                    cleanUrl.startsWith("/src/") ||
                    cleanUrl.startsWith("/public/") ||
                    cleanUrl.startsWith("/node_modules/")
                ) {
                    next();
                    return;
                }

                let htmlPath;

                if (cleanUrl === "/docs/") {
                    htmlPath = resolve(__dirname, "docs/index.html");
                } else {
                    htmlPath = resolve(__dirname, `.${cleanUrl}.html`);
                }

                // fallback to 404
                if (!fs.existsSync(htmlPath)) {
                    htmlPath = resolve(__dirname, "docs/404.html");
                }

                try {
                    let html = fs.readFileSync(htmlPath, "utf-8");

                    html = await server.transformIndexHtml(cleanUrl, html);

                    res.statusCode = htmlPath.includes("404.html") ? 404 : 200;

                    res.setHeader("Content-Type", "text/html");

                    res.end(html);
                } catch (e) {
                    next(e);
                }
            });
        },
        handleHotUpdate({ file, server }) {
            if (file.endsWith(".html") && file.includes("templates")) {
                server.ws.send({ type: "full-reload" });
            }
        },
        transformIndexHtml(html) {
            const navTemplate = fs.readFileSync(
                resolve(__dirname, "templates/nav.html"),
                "utf-8",
            );
            const footerTemplate = fs.readFileSync(
                resolve(__dirname, "templates/footer.html"),
                "utf-8",
            );

            let transformedHtml = html;

            // Inject Navigation and Footer
            transformedHtml = transformedHtml.replace("<!-- LAYOUT_NAV -->", navTemplate);
            transformedHtml = transformedHtml.replace(
                "<!-- LAYOUT_FOOTER -->",
                footerTemplate,
            );

            // Handle Nav Links Slot
            // Usage in HTML: <script type="layout-slot" id="nav-links">...</script>
            const navLinksMatch = html.match(
                /<script type="layout-slot" id="nav-links">([\s\S]*?)<\/script>/,
            );
            if (navLinksMatch) {
                transformedHtml = transformedHtml.replace(
                    "<!-- SLOT_NAV_LINKS -->",
                    navLinksMatch[1].trim(),
                );
                transformedHtml = transformedHtml.replace(navLinksMatch[0], "");
            } else {
                transformedHtml = transformedHtml.replace("<!-- SLOT_NAV_LINKS -->", "");
            }

            return transformedHtml;
        },
    };
};

/**
 * Vercel (and most static hosts) only serve a custom 404 from the deploy root as `/404.html`.
 * The lesson 404 page is built as `dist/docs/404.html`; copy it to `dist/404.html` after build.
 */
const copyRoot404Plugin = () => ({
    name: "copy-root-404",
    closeBundle() {
        const built = resolve(__dirname, "dist/docs/404.html");
        const root404 = resolve(__dirname, "dist/404.html");
        if (fs.existsSync(built)) {
            fs.copyFileSync(built, root404);
        } else {
            console.warn("[copy-root-404] dist/docs/404.html missing; root 404 not written");
        }
    },
});

export default defineConfig({
    root: ".",
    plugins: [htmlLayoutPlugin(), copyRoot404Plugin()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: getHtmlEntries(),
        },
    },
});
