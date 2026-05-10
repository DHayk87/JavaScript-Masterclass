import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

/**
 * Automatically discovers all HTML files in the project root and docs directory
 * to use as Vite entry points.
 */
const getHtmlEntries = () => {
  const entries = {
    main: resolve(__dirname, 'index.html'),
  };
  
  const docsDir = resolve(__dirname, 'docs');
  if (fs.existsSync(docsDir)) {
    const files = fs.readdirSync(docsDir);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        // Use the filename (without extension) as the entry key
        const name = file.replace('.html', '');
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
    name: 'html-layout-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          res.writeHead(302, { Location: '/docs/' });
          res.end();
        } else {
          next();
        }
      });
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.html') && file.includes('templates')) {
        server.ws.send({ type: 'full-reload' });
      }
    },
    transformIndexHtml(html) {
      const navTemplate = fs.readFileSync(resolve(__dirname, 'templates/nav.html'), 'utf-8');
      const footerTemplate = fs.readFileSync(resolve(__dirname, 'templates/footer.html'), 'utf-8');
      
      let transformedHtml = html;
      
      // Inject Navigation and Footer
      transformedHtml = transformedHtml.replace('<!-- LAYOUT_NAV -->', navTemplate);
      transformedHtml = transformedHtml.replace('<!-- LAYOUT_FOOTER -->', footerTemplate);
      
      // Handle Nav Links Slot
      // Usage in HTML: <script type="layout-slot" id="nav-links">...</script>
      const navLinksMatch = html.match(/<script type="layout-slot" id="nav-links">([\s\S]*?)<\/script>/);
      if (navLinksMatch) {
        transformedHtml = transformedHtml.replace('<!-- SLOT_NAV_LINKS -->', navLinksMatch[1]);
        // Remove the slot script from output
        transformedHtml = transformedHtml.replace(navLinksMatch[0], '');
      }

      return transformedHtml;
    }
  }
};

export default defineConfig({
  root: '.', 
  plugins: [htmlLayoutPlugin()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getHtmlEntries()
    }
  }
});


