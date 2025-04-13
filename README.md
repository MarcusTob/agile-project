# Marketplace App

Dette prosjektet er et eksamensprosjekt laget i gruppe som del av faget *Agile Project (PRO202)* ved Høyskolen Kristiania.

Applikasjonen er en enkel markedsplass hvor brukere kan se, legge til og laste opp produkter med bilde.

## Teknologier brukt
- Frontend: React
- Backend: .NET (C#)
- Database: SQLite
- API: REST
- Hosting: Lokalt (kjøres via terminal)

---

## Funksjonalitet
- Vise produkter i markedsplassen
- Legge til nye produkter
- Opplasting av bilder
- API laget i C#
- Lokal database med SQLite

---

## Hvordan starte prosjektet

### 1. Start backend (API)
Åpne terminal og gå til mappen:
```bash
cd marketplace_api
dotnet run
```

### 2. Start frontend (React)
Åpne ny terminal og gå til mappen:
```bash
cd vizrt-marketplace
npm install
npm start
```
Da vil applikasjonen kjøre i nettleseren.

### Projektstruktur
```bash
agile-project-master/
│
├── marketplace_api/           # Backend (C# .NET)
│   └── Controllers/           # API-endepunkter
│
├── vizrt-marketplace/        # Frontend (React)
│
├── Marketplace.db            # SQLite database
│
└── README.md                 # Denne filen
```

### Om prosjektet
Prosjektet ble laget som en del av eksamen i Agile Project hvor vi jobbet i team og benyttet agile metoder underveis i utviklingen. Målet var å utvikle en fungerende nettside med både frontend og backend, inkludert bildeopplasting og datalagring.
