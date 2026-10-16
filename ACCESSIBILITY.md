# Kontrola dostępności — 16 października 2026

Cel: WCAG 2.2 A/AA. Raport wykonanych kontroli, bez deklaracji pełnej zgodności.

## Potwierdzone w przeglądarce na GitHub Pages

- Semantyczne nagłówki kategorii, opisowe nazwy przycisków, etykiety pól.
- Okno „Samochód”: dostępna nazwa i opis, początkowy fokus na zamknięciu; Escape zamyka, fokus wraca do przycisku otwierającego.
- Lista pytań: widoczna w nazwanym regionie; region otrzymuje fokus. Brak jednoczesnego aria-live zapobiega podwójnym komunikatom.
- Menu mobilne: stan aria-expanded; Tab do odnośnika i Escape przenosi fokus do Menu.
- Viewport 320 px: brak poziomego przewijania, szerokość dokumentu i treści po 305 px (reszta to pasek przewijania).
- Obliczone kolory widocznych tekstów strony głównej przy 320 px: brak kontrastu poniżej 4,5:1 na jednolitych tłach. To kontrola częściowa, nie pełny audyt automatyczny.
- Kontrole składni, odnośników i plików zakończone poprawnie.

## Zmiany

Semantyczne artykuły z osobnymi przyciskami (1.3.1), nazwane okno (4.1.2), kontrast tekstu i kontrolek (1.4.3, 1.4.11), elastyczny układ i jednostki rem (1.4.4, 1.4.10), klawiatura i zarządzanie fokusem (2.1.1, 2.1.2, 2.4.3), odnośniki pomijania treści (2.4.1), dwukolorowy fokus (2.4.7), większe obszary przycisków (2.5.8). Uwzględniono ograniczenie ruchu i systemowe wymuszone kolory.

## Do weryfikacji przed deklaracją zgodności

- NVDA/Firefox, NVDA/Chrome, VoiceOver/Safari i testy z użytkownikami technologii wspomagających.
- Pełna macierz zoomu 200%/400%, odstępów tekstu (1.4.12), wymuszonych kolorów i wszystkich stanów podstron. Sam test 320 px jej nie zastępuje.
- Kontakt firmy do zgłoszeń dostępności i procedura obsługi. GitHub Issues jest jedynie kanałem technicznym podglądu.
- Dostępność procesu zawarcia ubezpieczenia, dokumentów i obsługi klienta — obecna strona nie realizuje tego procesu.
- Ocena zastosowania EAA do konkretnej usługi i podmiotu. Sama zmiana kodu nie potwierdza zgodności prawnej.

## Źródła

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [EAA, dyrektywa 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj)

Bez zmian na FTP, w cPanelu i Joomla.
