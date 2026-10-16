import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
};

// Lokalny podgląd. Na hostingu publikujemy tylko pliki statyczne.
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);

    if (!file.startsWith(root.endsWith(sep) ? root : `${root}${sep}`)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    if (!mimeTypes[extname(file)]) {
      response.writeHead(404).end('Not found');
      return;
    }

    const content = await readFile(file);
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(file)] });
    response.end(content);
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Local: http://127.0.0.1:${port}`);
});
