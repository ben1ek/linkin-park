# API aktualności LPPoland

Osobna aplikacja Node.js bez zależności npm. Zalecany Node.js 24 LTS.
Frontend pozostaje Render Static Site; katalog server wdrażamy jako Web Service.

## Lokalnie (PowerShell)

~~~powershell
cd server
Copy-Item .env.example .env
# Uzupełnij FACEBOOK_PAGE_ACCESS_TOKEN w .env tokenem strony.
npm run dev
~~~

Plik .env jest ignorowany przez Git. Nie zapisuj tokenu w zmiennych VITE_*,
kodzie frontendowym, logach ani w repozytorium. npm start korzysta ze zmiennych
procesu; npm run dev wczytuje lokalny .env.

Test lokalny: http://localhost:3001/api/news?limit=6.
Testy automatyczne: npm test (bez połączenia z Meta i prawdziwego tokenu).

## Render

Utwórz **New → Web Service**, wybierz to samo repozytorium i ustaw:

| Pole | Wartość |
| --- | --- |
| Runtime | Node |
| Root Directory | server |
| Build Command | npm ci |
| Start Command | npm start |
| Health Check Path | /health |

Dodaj zmienne w **Environment** tej usługi:

| Zmienna | Wartość |
| --- | --- |
| FACEBOOK_PAGE_ID | 776858655687632 |
| FACEBOOK_PAGE_ACCESS_TOKEN | token strony sprawdzony w Graph API Explorer |
| FACEBOOK_GRAPH_VERSION | v26.0 — wersja użyta w dotychczasowym teście |
| ALLOWED_ORIGINS | dokładny adres frontendu, np. https://twoja-strona.onrender.com |

Adresy w ALLOWED_ORIGINS rozdziel przecinkami, bez ścieżek i końcowego /.
Uwzględnij własną domenę i wariant www, jeśli obydwa są używane.
Render ustawia PORT; serwer nasłuchuje na 0.0.0.0.
Instrukcja platformy: https://render.com/docs/web-services

Po wdrożeniu sprawdź /health i /api/news?limit=6 pod adresem backendu.
/health sprawdza działanie procesu, nie ważność tokenu ani dostępność Facebooka.
Przed produkcją sprawdź ważność tokenu strony w Meta Access Token Debugger.
Backend nie odnawia tokenu automatycznie. Po zmianie sekretu uruchom usługę ponownie.
Darmowy Web Service może być usypiany — pierwsze żądanie będzie wtedy wolniejsze:
https://render.com/docs/free

## Kontrakt API

GET /api/news?limit=6 — limit 1–25, domyślnie 6. Najnowsze 25 wpisów,
bez paginacji starszych postów w tej wersji.

~~~json
{
  "data": [{
    "id": "776858655687632_123",
    "description": "Treść posta",
    "multimedia": "https://example.com/photo.jpg",
    "link": "https://www.facebook.com/example/posts/123",
    "publishedAt": "2026-10-12T16:05:07.000Z"
  }],
  "updatedAt": "2026-10-13T12:00:00.000Z",
  "stale": false
}
~~~

Brak tekstu, zdjęcia lub linku oznacza pusty string. full_picture może być
miniaturą wideo; nie jest adresem filmu. Tekst należy wyświetlać jako tekst,
bez v-html. Identyfikator jest stringiem — przy podłączaniu frontendu trzeba
zmienić obecne liczbowe NewsItem.id oraz dodać publishedAt.

Odpowiedzi: 400 (parametry), 403 (niedozwolony Origin), 404, 405 oraz 503
(brak dostępnych danych). Surowe odpowiedzi Meta i linki paginacji nie są zwracane.
CORS określa dostęp przeglądarek; endpoint jest publiczny i nie wymaga logowania.

Cache znajduje się w pamięci procesu: 10 minut świeżości, odświeżenie przy kolejnym
żądaniu, jedno wspólne zapytanie do Meta dla równoległych klientów. Po awarii
ponowna próba najwcześniej po minucie, ostatni wynik dostępny do 24 godzin od pobrania
z stale: true. Po tym czasie API zwraca 503. Restart/usypianie usuwa cache;
nie zapewniamy zachowania danych po restarcie. Każda instancja ma osobny cache.
Adresy zdjęć Meta są odświeżane wraz z postami; stara miniatura może przestać działać.

Nie wdraża to zmian frontendu ani nie tworzy automatycznie usług w Render.
