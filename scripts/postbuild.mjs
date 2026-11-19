// Post-build: Next.js reserves the /500 route name, so the branded server
// error page lives at /server-error. Emit it at the conventional locations:
// a root-level 500.html for hosts that look for one, and /500/index.html so
// the URL /500/ itself works (GitHub Pages, any static host).
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'out');
const srcHtml = join(out, 'server-error.html');
const srcDir = join(out, 'server-error', 'index.html');
const source = existsSync(srcHtml) ? srcHtml : srcDir;
if (existsSync(source)) {
  copyFileSync(source, join(out, '500.html'));
  mkdirSync(join(out, '500'), { recursive: true });
  copyFileSync(source, join(out, '500', 'index.html'));
  console.log('postbuild: 500.html and /500/index.html written');
} else {
  console.log('postbuild: MISSING server-error export');
}

