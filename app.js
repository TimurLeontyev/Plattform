const pipelineStages = [
  { key: "neu", label: "Neu" },
  { key: "qualifiziert", label: "Qualifiziert" },
  { key: "beratung", label: "Beratung" },
  { key: "angebot", label: "Angebot" },
  { key: "abschluss", label: "Abschluss" },
];

const projects = [
  {
    id: "p1",
    name: "Spree Quartier Mitte",
    city: "Berlin",
    location: [52.521, 13.409],
    developer: "Urban Living Development GmbH",
    micro:
      "Direkt an der Spree, 4 Min. zur U-Bahn, Cafes und Coworking im 500m Radius. Hohe Nachfrage bei Young Professionals.",
    macro:
      "Berlin bleibt Top-5 Standort für Zuzug und Mietdynamik. Wachstumstreiber: Tech-Arbeitsplätze und knapper Neubau.",
    analysis: {
      avgRentPsm: 24.8,
      avgBuyPsm: 7450,
      demandIndex: 92,
      selloutMonths: 5.5,
    },
    units: [
      {
        id: "B1-03",
        type: "2Z",
        size: 54,
        price: 429000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "B1-07",
        type: "3Z",
        size: 73,
        price: 579000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "B2-11",
        type: "2Z",
        size: 49,
        price: 399000,
        afaType: "Denkmal",
        status: "reserviert",
      },
    ],
    leads: [
      {
        name: "Miriam Hoffmann",
        stage: "beratung",
        budget: 520000,
        score: 86,
        nextStep: "Telefonat Dienstag 10:30",
      },
      {
        name: "Luca Baum",
        stage: "neu",
        budget: 430000,
        score: 58,
        nextStep: "Expose senden",
      },
      {
        name: "Nora Schuster",
        stage: "angebot",
        budget: 620000,
        score: 91,
        nextStep: "Finanzierungsnachweis prüfen",
      },
    ],
  },
  {
    id: "p2",
    name: "Skyline Gärten",
    city: "Frankfurt",
    location: [50.114, 8.663],
    developer: "Prime Habitat AG",
    micro:
      "Westend-nahe Lage mit Parkzugang, ruhige Seitenstraße und direkte Anbindung an das Bankenviertel.",
    macro:
      "Frankfurt profitiert von internationalem Kapitalzufluss und starken Einkommensstrukturen mit stabiler Vermietbarkeit.",
    analysis: {
      avgRentPsm: 22.2,
      avgBuyPsm: 6990,
      demandIndex: 84,
      selloutMonths: 6.1,
    },
    units: [
      {
        id: "C1-02",
        type: "2Z",
        size: 57,
        price: 449000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "C1-09",
        type: "4Z",
        size: 109,
        price: 880000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "C2-04",
        type: "3Z",
        size: 82,
        price: 645000,
        afaType: "Denkmal",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Eric Romero",
        stage: "qualifiziert",
        budget: 700000,
        score: 75,
        nextStep: "Besichtigung Freitag",
      },
      {
        name: "Anne Walter",
        stage: "beratung",
        budget: 470000,
        score: 69,
        nextStep: "Renditevergleich mailen",
      },
      {
        name: "David Klein",
        stage: "abschluss",
        budget: 890000,
        score: 95,
        nextStep: "Notartermin koordinieren",
      },
    ],
  },
  {
    id: "p3",
    name: "Elbpark Residences",
    city: "Hamburg",
    location: [53.552, 9.979],
    developer: "Nordstern Projects",
    micro:
      "Nahe Elbpark, familienfreundliche Infrastruktur, 2 Schulen im Umkreis von 1km. Gute Kombination aus Ruhe und City-Nähe.",
    macro:
      "Hamburg zeigt kontinuierliche Mietsteigerung bei limitiertem Angebot im Neubausegment.",
    analysis: {
      avgRentPsm: 20.7,
      avgBuyPsm: 6280,
      demandIndex: 80,
      selloutMonths: 7.2,
    },
    units: [
      {
        id: "A3-06",
        type: "3Z",
        size: 78,
        price: 529000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "A3-12",
        type: "2Z",
        size: 51,
        price: 369000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "A4-01",
        type: "4Z",
        size: 116,
        price: 799000,
        afaType: "Linear",
        status: "reserviert",
      },
    ],
    leads: [
      {
        name: "Fabian König",
        stage: "neu",
        budget: 380000,
        score: 52,
        nextStep: "Lead-Quali Formular",
      },
      {
        name: "Selin Aksoy",
        stage: "angebot",
        budget: 560000,
        score: 88,
        nextStep: "Kaufabsichtserklärung",
      },
      {
        name: "Lena Vogt",
        stage: "beratung",
        budget: 420000,
        score: 73,
        nextStep: "Steuerberater Intro",
      },
    ],
  },
  {
    id: "p4",
    name: "Rhine Harbor Homes",
    city: "Düsseldorf",
    location: [51.221, 6.77],
    developer: "Rheinblick Real Estate",
    micro:
      "Medienhafen in Laufdistanz, hochwertige Gastronomie und Business-Hubs erhöhen Attraktivität für Kapitalanleger.",
    macro:
      "Düsseldorf hat starke Kaufkraft und stabile Nachfrage in zentralen Wohnlagen.",
    analysis: {
      avgRentPsm: 21.8,
      avgBuyPsm: 6510,
      demandIndex: 81,
      selloutMonths: 6.3,
    },
    units: [
      {
        id: "RH-02",
        type: "2Z",
        size: 58,
        price: 439000,
        afaType: "Denkmal",
        status: "frei",
      },
      {
        id: "RH-05",
        type: "3Z",
        size: 84,
        price: 639000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "RH-08",
        type: "1Z",
        size: 35,
        price: 265000,
        afaType: "Linear",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Joana Krug",
        stage: "qualifiziert",
        budget: 460000,
        score: 77,
        nextStep: "Bonitätsunterlagen checken",
      },
      {
        name: "Maximilian Brehm",
        stage: "beratung",
        budget: 640000,
        score: 82,
        nextStep: "Objektvideo senden",
      },
      {
        name: "Sarah Nguyen",
        stage: "angebot",
        budget: 300000,
        score: 65,
        nextStep: "Alternativ-Einheit vorschlagen",
      },
    ],
  },
  {
    id: "p5",
    name: "Isarblick Living",
    city: "München",
    location: [48.136, 11.575],
    developer: "Bayern Prime Developments",
    micro:
      "Premium-Lage nahe Isar und Altstadt, exzellente Nahversorgung und starke Nachfrage nach kleinen Einheiten.",
    macro:
      "München bleibt preisstabil bei geringer Leerstandsquote und hoher internationaler Käufernachfrage.",
    analysis: {
      avgRentPsm: 28.5,
      avgBuyPsm: 10300,
      demandIndex: 95,
      selloutMonths: 4.9,
    },
    units: [
      {
        id: "I-03",
        type: "2Z",
        size: 52,
        price: 615000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "I-07",
        type: "3Z",
        size: 88,
        price: 1040000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "I-11",
        type: "1Z",
        size: 37,
        price: 425000,
        afaType: "Denkmal",
        status: "reserviert",
      },
    ],
    leads: [
      {
        name: "Oliver Fuchs",
        stage: "abschluss",
        budget: 1120000,
        score: 97,
        nextStep: "Kaufvertrag finalisieren",
      },
      {
        name: "Nina Seifert",
        stage: "beratung",
        budget: 650000,
        score: 81,
        nextStep: "AfA-Modelle durchgehen",
      },
      {
        name: "Yara Duran",
        stage: "neu",
        budget: 420000,
        score: 49,
        nextStep: "Erstgespräch terminieren",
      },
    ],
  },
  {
    id: "p6",
    name: "GreenHaven Süd",
    city: "Stuttgart",
    location: [48.77, 9.176],
    developer: "Suedbau Invest GmbH",
    micro:
      "Grüne Wohnlage mit S-Bahn-Anschluss, beliebt bei Familien und Angestellten aus dem Automotive-Umfeld.",
    macro:
      "Stuttgart zeigt solide Neubauabsorption bei hoher Kaufkraft und resilientem Arbeitsmarkt.",
    analysis: {
      avgRentPsm: 19.4,
      avgBuyPsm: 5750,
      demandIndex: 74,
      selloutMonths: 7.4,
    },
    units: [
      {
        id: "G-02",
        type: "2Z",
        size: 55,
        price: 359000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "G-06",
        type: "4Z",
        size: 118,
        price: 698000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "G-09",
        type: "3Z",
        size: 80,
        price: 499000,
        afaType: "Denkmal",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Paul Richter",
        stage: "qualifiziert",
        budget: 520000,
        score: 78,
        nextStep: "Video-Call Donnerstag",
      },
      {
        name: "Lara Beck",
        stage: "neu",
        budget: 340000,
        score: 55,
        nextStep: "Lead-Score erhöhen mit Fragebogen",
      },
      {
        name: "Emre Altin",
        stage: "angebot",
        budget: 710000,
        score: 84,
        nextStep: "Familiengrundriss senden",
      },
    ],
  },
  {
    id: "p7",
    name: "Altstadt Karree",
    city: "Leipzig",
    location: [51.343, 12.374],
    developer: "Saxonia Wohnbau",
    micro:
      "Zentrumsnah, hoher Studenten- und Young-Professional-Anteil mit überdurchschnittlicher Mietdynamik.",
    macro:
      "Leipzig zählt zu den wachstumsstärksten Städten Ostdeutschlands mit steigender Investorennachfrage.",
    analysis: {
      avgRentPsm: 14.2,
      avgBuyPsm: 3980,
      demandIndex: 71,
      selloutMonths: 8.1,
    },
    units: [
      {
        id: "AK-04",
        type: "2Z",
        size: 50,
        price: 245000,
        afaType: "Denkmal",
        status: "frei",
      },
      {
        id: "AK-08",
        type: "3Z",
        size: 77,
        price: 365000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "AK-12",
        type: "1Z",
        size: 33,
        price: 179000,
        afaType: "Linear",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Katja Braun",
        stage: "beratung",
        budget: 260000,
        score: 70,
        nextStep: "Mietprognose teilen",
      },
      {
        name: "Marco Dietz",
        stage: "qualifiziert",
        budget: 390000,
        score: 76,
        nextStep: "Steuer-Call organisieren",
      },
      {
        name: "Helena Wirth",
        stage: "neu",
        budget: 210000,
        score: 47,
        nextStep: "Bedarfsanalyse",
      },
    ],
  },
  {
    id: "p8",
    name: "DomResidenz Nord",
    city: "Köln",
    location: [50.937, 6.96],
    developer: "RheinDom Immobilien",
    micro:
      "Innenstadtnahe Lage, starkes Vermietungspotenzial durch Nähe zu Uniklinik und Medienstandorten.",
    macro:
      "Köln bleibt ein liquider Investmentmarkt mit verlässlicher Exit-Nachfrage.",
    analysis: {
      avgRentPsm: 18.9,
      avgBuyPsm: 5420,
      demandIndex: 76,
      selloutMonths: 7.1,
    },
    units: [
      {
        id: "DN-03",
        type: "2Z",
        size: 56,
        price: 329000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "DN-07",
        type: "3Z",
        size: 81,
        price: 498000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "DN-10",
        type: "2Z",
        size: 60,
        price: 359000,
        afaType: "Denkmal",
        status: "reserviert",
      },
    ],
    leads: [
      {
        name: "Bastian Linke",
        stage: "angebot",
        budget: 360000,
        score: 79,
        nextStep: "Objektbegehung fixieren",
      },
      {
        name: "Sophie Berg",
        stage: "beratung",
        budget: 540000,
        score: 72,
        nextStep: "Zinsupdate kommunizieren",
      },
      {
        name: "Nils Rabe",
        stage: "qualifiziert",
        budget: 440000,
        score: 74,
        nextStep: "Mikrolage-PDF schicken",
      },
    ],
  },
  {
    id: "p9",
    name: "Hafenblick 360",
    city: "Bremen",
    location: [53.079, 8.808],
    developer: "Hansea Living",
    micro:
      "Wassernahe Entwicklungslage mit modernem Quartierskonzept, ideal für Buy-and-Hold Investoren.",
    macro:
      "Bremen mit moderater Preisbasis und steigender Renditeorientierung institutioneller Investoren.",
    analysis: {
      avgRentPsm: 12.9,
      avgBuyPsm: 3120,
      demandIndex: 66,
      selloutMonths: 9.4,
    },
    units: [
      {
        id: "HB-01",
        type: "1Z",
        size: 38,
        price: 149000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "HB-04",
        type: "2Z",
        size: 59,
        price: 229000,
        afaType: "Denkmal",
        status: "frei",
      },
      {
        id: "HB-09",
        type: "3Z",
        size: 85,
        price: 325000,
        afaType: "§7b",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Theresa Lind",
        stage: "neu",
        budget: 180000,
        score: 50,
        nextStep: "Finanzierungsrahmen prüfen",
      },
      {
        name: "Rico Mendes",
        stage: "qualifiziert",
        budget: 260000,
        score: 67,
        nextStep: "Einheitenliste senden",
      },
      {
        name: "Julia Hecht",
        stage: "beratung",
        budget: 310000,
        score: 71,
        nextStep: "Steuervergleich vorbereiten",
      },
    ],
  },
  {
    id: "p10",
    name: "Westend Panorama",
    city: "Dortmund",
    location: [51.513, 7.465],
    developer: "Ruhr Estate Partners",
    micro:
      "Urbanes Quartier mit hoher Nahversorgung und guter ÖPNV-Anbindung, attraktiv für Erstinvestoren.",
    macro:
      "Ruhrgebiet bietet vergleichsweise günstige Einstiegspreise bei stabilen Mietrenditen.",
    analysis: {
      avgRentPsm: 11.7,
      avgBuyPsm: 2820,
      demandIndex: 63,
      selloutMonths: 10.2,
    },
    units: [
      {
        id: "WP-02",
        type: "2Z",
        size: 53,
        price: 169000,
        afaType: "§7b",
        status: "frei",
      },
      {
        id: "WP-06",
        type: "3Z",
        size: 79,
        price: 259000,
        afaType: "Linear",
        status: "frei",
      },
      {
        id: "WP-11",
        type: "1Z",
        size: 36,
        price: 118000,
        afaType: "Denkmal",
        status: "frei",
      },
    ],
    leads: [
      {
        name: "Leonie Frank",
        stage: "qualifiziert",
        budget: 210000,
        score: 62,
        nextStep: "Mietpool erklären",
      },
      {
        name: "Ali Tunc",
        stage: "angebot",
        budget: 280000,
        score: 80,
        nextStep: "Kaufpreisverhandlung vorbereiten",
      },
      {
        name: "Dennis Voss",
        stage: "beratung",
        budget: 145000,
        score: 59,
        nextStep: "Kleines Objektportfolio vorstellen",
      },
    ],
  },
];

const state = {
  selectedProjectId: projects[0].id,
  projectSearch: "",
  leadSearch: "",
  focusCurrentProject: false,
  filters: {
    sizeMin: 35,
    sizeMax: 120,
    priceMax: 600000,
    afaType: "alle",
  },
  map: null,
  markerLayer: null,
};

const projectListEl = document.querySelector("#projectList");
const projectSearchEl = document.querySelector("#projectSearch");
const leadSearchEl = document.querySelector("#leadSearch");
const focusProjectLeadsEl = document.querySelector("#focusProjectLeads");
const pipelineBoardEl = document.querySelector("#pipelineBoard");
const projectHeroEl = document.querySelector("#projectHero");
const tabMicroEl = document.querySelector("#tab-micro");
const tabMacroEl = document.querySelector("#tab-macro");
const tabAnalysisEl = document.querySelector("#tab-analysis");
const tabUnitsEl = document.querySelector("#tab-units");
const mapMetaEl = document.querySelector("#mapMeta");
const sizeMinEl = document.querySelector("#sizeMin");
const sizeMaxEl = document.querySelector("#sizeMax");
const priceMaxEl = document.querySelector("#priceMax");
const afaTypeEl = document.querySelector("#afaType");

function formatCurrency(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 1,
  }).format(value);
}

function allLeads() {
  return projects.flatMap((project) =>
    project.leads.map((lead) => ({
      ...lead,
      projectId: project.id,
      projectName: project.name,
    })),
  );
}

function allUnits() {
  return projects.flatMap((project) =>
    project.units.map((unit) => ({ ...unit, projectId: project.id, projectName: project.name })),
  );
}

function getProjectById(id) {
  return projects.find((project) => project.id === id) || projects[0];
}

function scoreClass(score) {
  if (score >= 80) return "high";
  if (score >= 60) return "mid";
  return "low";
}

function filteredProjects() {
  const q = state.projectSearch.toLowerCase().trim();
  if (!q) return projects;
  return projects.filter(
    (project) => project.name.toLowerCase().includes(q) || project.city.toLowerCase().includes(q),
  );
}

function matchesUnitFilters(unit) {
  const withinSize = unit.size >= state.filters.sizeMin && unit.size <= state.filters.sizeMax;
  const withinPrice = unit.price <= state.filters.priceMax;
  const matchesAfa = state.filters.afaType === "alle" || unit.afaType === state.filters.afaType;
  return withinSize && withinPrice && matchesAfa;
}

function matchingUnits(project) {
  return project.units.filter((unit) => unit.status === "frei" && matchesUnitFilters(unit));
}

function updateHeaderKpis() {
  const leadCount = allLeads().length;
  const openUnits = allUnits().filter((unit) => unit.status === "frei").length;
  document.querySelector("#kpiProjects").textContent = String(projects.length);
  document.querySelector("#kpiLeads").textContent = String(leadCount);
  document.querySelector("#kpiUnits").textContent = String(openUnits);
  document.querySelector("#kpiDate").textContent = new Date().toLocaleDateString("de-DE");
}

function renderProjectList() {
  const filtered = filteredProjects();
  projectListEl.innerHTML = filtered
    .map((project) => {
      const matched = matchingUnits(project).length;
      const totalOpen = project.units.filter((unit) => unit.status === "frei").length;
      return `
        <article class="project-item ${project.id === state.selectedProjectId ? "active" : ""}" data-project-id="${project.id}">
          <h3>${project.name}</h3>
          <p>${project.city} · ${project.developer}</p>
          <div class="badge-row">
            <span class="badge">${project.leads.length} Leads</span>
            <span class="badge">${totalOpen} freie Einheiten</span>
            <span class="badge">${matched} passen zum Filter</span>
          </div>
        </article>
      `;
    })
    .join("");

  if (!filtered.length) {
    projectListEl.innerHTML = `<p class="empty-state">Keine Projekte zum Suchbegriff gefunden.</p>`;
  }
}

function renderPipeline() {
  let leads = allLeads();
  if (state.focusCurrentProject) {
    leads = leads.filter((lead) => lead.projectId === state.selectedProjectId);
  }

  if (state.leadSearch.trim()) {
    const q = state.leadSearch.trim().toLowerCase();
    leads = leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(q) ||
        lead.projectName.toLowerCase().includes(q) ||
        String(lead.budget).includes(q),
    );
  }

  pipelineBoardEl.innerHTML = pipelineStages
    .map((stage) => {
      const stageLeads = leads.filter((lead) => lead.stage === stage.key);
      return `
        <section class="kanban-column">
          <div class="kanban-header">
            <h3>${stage.label}</h3>
            <span>${stageLeads.length}</span>
          </div>
          ${stageLeads
            .map(
              (lead) => `
                <article class="lead-card">
                  <strong>${lead.name}</strong>
                  <p>${lead.projectName}</p>
                  <p>Budget: ${formatCurrency(lead.budget)}</p>
                  <p>Nächster Schritt: ${lead.nextStep}</p>
                  <span class="lead-score ${scoreClass(lead.score)}">Score ${lead.score}</span>
                </article>
              `,
            )
            .join("")}
          ${stageLeads.length === 0 ? `<p class="empty-state">Keine Leads</p>` : ""}
        </section>
      `;
    })
    .join("");
}

function renderProjectDetail() {
  const project = getProjectById(state.selectedProjectId);
  const openUnits = project.units.filter((unit) => unit.status === "frei");
  const matchingOpenUnits = matchingUnits(project);

  projectHeroEl.innerHTML = `
    <h2>${project.name} · ${project.city}</h2>
    <p>${project.developer}</p>
    <div class="hero-stats">
      <div>
        <span>Leads im Projekt</span>
        <strong>${project.leads.length}</strong>
      </div>
      <div>
        <span>Freie Einheiten</span>
        <strong>${openUnits.length}</strong>
      </div>
      <div>
        <span>Filter-Matches</span>
        <strong>${matchingOpenUnits.length}</strong>
      </div>
      <div>
        <span>Ø Kaufpreis / m²</span>
        <strong>${formatCurrency(project.analysis.avgBuyPsm)}</strong>
      </div>
    </div>
  `;

  tabMicroEl.innerHTML = `<p>${project.micro}</p>`;
  tabMacroEl.innerHTML = `<p>${project.macro}</p>`;

  tabAnalysisEl.innerHTML = `
    <div class="analysis-grid">
      <div>
        <span>Ø Miete / m²</span>
        <strong>${formatNumber(project.analysis.avgRentPsm)} €</strong>
      </div>
      <div>
        <span>Ø Kaufpreis / m²</span>
        <strong>${formatCurrency(project.analysis.avgBuyPsm)}</strong>
      </div>
      <div>
        <span>Nachfrageindex</span>
        <strong>${project.analysis.demandIndex}/100</strong>
      </div>
      <div>
        <span>Sellout-Dauer</span>
        <strong>${formatNumber(project.analysis.selloutMonths)} Monate</strong>
      </div>
    </div>
  `;

  if (!matchingOpenUnits.length) {
    tabUnitsEl.innerHTML = `<p class="empty-state">Für die aktuellen Filter gibt es in diesem Projekt keine freie Einheit.</p>`;
    return;
  }

  tabUnitsEl.innerHTML = `
    <table class="units-table">
      <thead>
        <tr>
          <th>Einheit</th>
          <th>Typ</th>
          <th>Größe</th>
          <th>Preis</th>
          <th>Afa</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${matchingOpenUnits
          .map(
            (unit) => `
          <tr>
            <td>${unit.id}</td>
            <td>${unit.type}</td>
            <td>${unit.size} m²</td>
            <td>${formatCurrency(unit.price)}</td>
            <td>${unit.afaType}</td>
            <td class="${unit.status === "frei" ? "status-open" : "status-reserved"}">${unit.status}</td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function initMap() {
  state.map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([51.15, 10.35], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(state.map);

  state.markerLayer = L.layerGroup().addTo(state.map);
}

function renderMap() {
  if (!state.markerLayer) return;
  state.markerLayer.clearLayers();

  const visibleProjects = filteredProjects();
  const bounds = [];
  let matchingUnitTotal = 0;

  visibleProjects.forEach((project) => {
    const matchedUnits = matchingUnits(project);
    matchingUnitTotal += matchedUnits.length;

    const marker = L.circleMarker(project.location, {
      radius: project.id === state.selectedProjectId ? 10 : 7,
      color: project.id === state.selectedProjectId ? "#23d5bd" : "#7c8cff",
      weight: 2,
      fillColor: project.id === state.selectedProjectId ? "#23d5bd" : "#7c8cff",
      fillOpacity: 0.66,
    });

    marker.bindPopup(`
      <strong>${project.name}</strong><br/>
      ${project.city}<br/>
      Passende freie Einheiten: ${matchedUnits.length}
    `);
    marker.on("click", () => {
      state.selectedProjectId = project.id;
      fullRender();
    });
    marker.addTo(state.markerLayer);
    bounds.push(project.location);
  });

  if (bounds.length) {
    state.map.fitBounds(bounds, { padding: [35, 35], maxZoom: 9 });
  }

  mapMetaEl.textContent = `${visibleProjects.length} Projekte sichtbar · ${matchingUnitTotal} freie Einheiten entsprechen den Filtern.`;
}

function primeCalculator(project) {
  const firstOpen = project.units.find((unit) => unit.status === "frei") || project.units[0];
  document.querySelector("#calcPrice").value = firstOpen.price;
  document.querySelector("#calcEquity").value = Math.round(firstOpen.price * 0.2);
  document.querySelector("#calcSize").value = firstOpen.size;
  document.querySelector("#calcRentPsm").value = project.analysis.avgRentPsm;
  document.querySelector("#calcInterest").value = 3.8;
  document.querySelector("#calcRepayment").value = 2.0;
  document.querySelector("#calcMaintenance").value = 120;
  updateCalculator();
}

function updateCalculator() {
  const price = Number(document.querySelector("#calcPrice").value) || 0;
  const equity = Number(document.querySelector("#calcEquity").value) || 0;
  const size = Number(document.querySelector("#calcSize").value) || 0;
  const rentPsm = Number(document.querySelector("#calcRentPsm").value) || 0;
  const interest = (Number(document.querySelector("#calcInterest").value) || 0) / 100;
  const repayment = (Number(document.querySelector("#calcRepayment").value) || 0) / 100;
  const maintenance = Number(document.querySelector("#calcMaintenance").value) || 0;

  const debt = Math.max(price - equity, 0);
  const rentMonthly = size * rentPsm;
  const annualRate = debt * (interest + repayment);
  const monthlyRate = annualRate / 12;
  const cashflow = rentMonthly - monthlyRate - maintenance;
  const grossYield = price > 0 ? ((rentMonthly * 12) / price) * 100 : 0;

  document.querySelector("#calcRentMonthly").textContent = formatCurrency(rentMonthly);
  document.querySelector("#calcRate").textContent = formatCurrency(monthlyRate);
  document.querySelector("#calcCashflow").textContent = formatCurrency(cashflow);
  document.querySelector("#calcYield").textContent = `${formatNumber(grossYield)} %`;
}

function bindEvents() {
  projectSearchEl.addEventListener("input", (event) => {
    state.projectSearch = event.target.value;
    fullRender();
  });

  leadSearchEl.addEventListener("input", (event) => {
    state.leadSearch = event.target.value;
    renderPipeline();
  });

  focusProjectLeadsEl.addEventListener("change", (event) => {
    state.focusCurrentProject = event.target.checked;
    renderPipeline();
  });

  projectListEl.addEventListener("click", (event) => {
    const item = event.target.closest("[data-project-id]");
    if (!item) return;
    state.selectedProjectId = item.getAttribute("data-project-id");
    fullRender();
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((tabBtn) => tabBtn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((tabContent) => tabContent.classList.remove("active"));
      button.classList.add("active");
      const target = button.getAttribute("data-tab");
      document.querySelector(`#tab-${target}`).classList.add("active");
    });
  });

  const filterInputs = [sizeMinEl, sizeMaxEl, priceMaxEl, afaTypeEl];
  filterInputs.forEach((input) => {
    input.addEventListener("input", () => {
      state.filters = {
        sizeMin: Number(sizeMinEl.value),
        sizeMax: Number(sizeMaxEl.value),
        priceMax: Number(priceMaxEl.value),
        afaType: afaTypeEl.value,
      };
      fullRender();
    });
  });

  [
    "#calcPrice",
    "#calcEquity",
    "#calcSize",
    "#calcRentPsm",
    "#calcInterest",
    "#calcRepayment",
    "#calcMaintenance",
  ].forEach((selector) => {
    document.querySelector(selector).addEventListener("input", updateCalculator);
  });
}

function fullRender() {
  const projectStillVisible = filteredProjects().some((project) => project.id === state.selectedProjectId);
  if (!projectStillVisible) {
    state.selectedProjectId = filteredProjects()[0]?.id || projects[0].id;
  }

  renderProjectList();
  renderPipeline();
  renderProjectDetail();
  renderMap();
  primeCalculator(getProjectById(state.selectedProjectId));
}

function init() {
  updateHeaderKpis();
  initMap();
  bindEvents();
  fullRender();
}

init();
