# TL Platform – Vertriebstool MVP (Bauträger)

Desktop-optimierter MVP für Immo-Closer, basierend auf der Stage-1-Vision:
ein vertikales Vertriebs-Tool für Bauträger mit Fokus auf **Lead-Pipeline**
und **verkaufsstarke Projektpräsentation**.

## Was der MVP enthält

- **Übersicht über alle Leads** in einer projektübergreifenden Kanban-Pipeline
  (Neu, Qualifiziert, Beratung, Angebot, Abschluss)
- **10 Beispiel-Projekte** mit:
  - Mikro-Lage
  - Makro-Lage
  - Analyse-Kennzahlen
  - Investment-Rechner
  - Freie Einheiten
- **Interaktive Karte** mit allen Projekten
- **Einheiten-Filter** nach:
  - Größe (m²)
  - Preis
  - AfA-Typ (z. B. §7b, Denkmal, Linear)
- **Modernes UI** für Desktop-Nutzung

## Starten

Da es ein statischer MVP ist, reicht ein lokaler Webserver:

```bash
cd /workspace
python3 -m http.server 8080
```

Dann im Browser öffnen:

`http://localhost:8080`

## Dateien

- `index.html` – App-Struktur
- `styles.css` – UI/Design
- `app.js` – Daten, Zustandslogik, Rendering, Map, Filter, Rechner
