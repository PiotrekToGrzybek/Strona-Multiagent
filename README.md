# Multiagent — przebudowa strony

Responsywna strona w języku polskim, z autorską ilustracją SVG, katalogiem sześciu obszarów ubezpieczeń, szczegółami w oknie dialogowym, FAQ i generatorem listy pytań do doradcy. Lista działa lokalnie i umożliwia wydruk lub zapis do PDF.

## Uruchomienie

Wymagany Node.js 22 lub nowszy. Nie ma zależności do instalacji.

```sh
node tools/serve.mjs
```

Podgląd: http://127.0.0.1:4173. Zakończenie serwera: Ctrl+C.

Weryfikacja:

```sh
node --check app.js
node --check config.js
node tools/check.mjs
```

## Organizacja kodu

- `index.html` — sekcje strony i dostępna nawigacja.
- `styles.css` — wspólne zmienne, układ, widoki mobilne i druk.
- `app.js` — dane kategorii, okno szczegółów, lista pytań i interakcje.
- `config.js` — publiczne dane kontaktowe, bez haseł i sekretów.
- `assets/` — lokalne grafiki SVG; bez zewnętrznych fontów i trackerów.
- `prywatnosc.html` — opis działania obecnego kodu; wymaga danych administratora.
- `tools/` — lokalny serwer oraz kontrola odnośników.

## Stan treści i wymagane uzupełnienia

16 października 2026 publiczna strona przekierowywała do instalatora Akeeba. Nie udało się potwierdzić danych kontaktowych, pełnej nazwy prawnej, identyfikacji wizualnej ani aktualnych umów z ubezpieczycielami. Projekt zawiera nowe opracowanie graficzne i treści do akceptacji, bez wymyślonych opinii, statystyk, adresów i partnerów. Kategorie są tematami do rozmowy, a nie potwierdzoną listą produktów firmy.

Przed publicznym uruchomieniem:

1. Potwierdź ofertę i teksty. Zaktualizuj tablicę `insuranceTopics` w `app.js`.
2. Wpisz zatwierdzone dane w `config.js`: `email`, `phone`, `address`. Do tego czasu sekcja kontaktu jawnie informuje o braku danych. Formularz nie udaje wysyłania zapytania.
3. Uzupełnij pełne dane podmiotu, informacje dotyczące dystrybucji ubezpieczeń, reklamacji i prywatności adekwatnie do działalności oraz hostingu.
4. Sprawdź istniejące adresy podstron starej witryny i przygotuj mapę przekierowań. Brak dostępu do starych treści uniemożliwił jej odtworzenie.
5. Wykonaj kopię dotychczasowej strony i konfiguracji serwera, a następnie uzgodnij osobne wdrożenie.

## Hosting

To strona statyczna: nie wymaga Joomla, PHP, bazy danych ani Node.js na serwerze. Do publikacji wystarczą `index.html`, `prywatnosc.html`, `styles.css`, `app.js`, `config.js` oraz katalog `assets/`. Skonfiguruj HTTPS na docelowym hostingu. Nie publikuj narzędzi, plików Git ani sekretów. Włączenie nowej strony przy istniejącym `index.php` wymaga świadomego ustalenia pliku startowego na serwerze.

Podgląd jest publikowany na GitHub Pages przez `.github/workflows/pages.yml`. Publikowane są wyłącznie wskazane pliki strony i grafiki. Nie dokonano zmian w FTP, cPanelu ani Joomla.

## Dostępność i prywatność

Cel techniczny: WCAG 2.2 AA. Nawigacja klawiaturą, kontrast, widoczny fokus, etykiety pól, nazwane okno i region wyniku otrzymujący fokus. Publiczna informacja znajduje się w `dostepnosc.html`, a wyniki kontroli w `VALIDATION.md` i `ACCESSIBILITY.md`. Brak cookies, localStorage i analityki. Nie stanowi to certyfikacji WCAG ani potwierdzenia zgodności całej usługi z EAA.
