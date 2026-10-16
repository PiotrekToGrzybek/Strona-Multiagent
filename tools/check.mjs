import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Identyfikatory HTML muszą być unikalne.');

for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(match[1]), `Nieistniejąca sekcja: ${match[1]}`);
}

for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^(https?:|mailto:|tel:)/.test(match[1])) {
    await access(new URL(match[1], root));
  }
}

assert.ok(html.includes('lang="pl"'), 'Brak języka dokumentu.');
assert.ok(html.includes('aria-labelledby="plan-heading"'), 'Wynik musi mieć nazwę regionu.');
assert.ok(html.includes('aria-labelledby="dialog-title"'), 'Okno musi mieć dostępną nazwę.');
const app = await readFile(new URL('app.js', root), 'utf8');
assert.ok(app.includes('result.focus()'), 'Wynik musi otrzymać fokus po utworzeniu.');
console.log('OK: sekcje, odnośniki, pliki i podstawowa semantyka.');
