const pipelineStages = [
  { key: "unberarbeitet", label: "unberarbeitet" },
  { key: "telefonisch-nicht-erreicht", label: "telefonisch nicht erreicht" },
  { key: "nachfassen", label: "nachfassen" },
  { key: "expose-versant", label: "expose versant" },
  { key: "ersttermin-gebucht", label: "ersttermin gebucht" },
  { key: "nicht-erschienen", label: "nicht erschienen" },
  { key: "folgebesprechung", label: "folgebesprechung" },
  { key: "finanzierung", label: "finanzierung" },
  { key: "reserviert", label: "reserviert" },
  { key: "notar-termin-vereinbart", label: "notar termin vereinbart" },
  { key: "verbrieft", label: "verbrieft" },
];

const statusLabelMap = {
  frei: "verfuegbar",
  reserviert: "reserviert",
  verkauft: "verkauft",
};

const objectionLibrary = [
  {
    id: "obj-1",
    title: "Mietrendite gefuehlt zu niedrig",
    context: "Wenn der Lead 5-6% Bruttorendite im Neubau fordert.",
    guide:
      "Differenziere klar zwischen Bestand und Neubau. Zeige den Nach-Steuer-Vergleich inklusive Sonder-AfA und KfW-Effekt. Betone, dass der Hebel bei Neubau in Steuer + Stabilitaet liegt, nicht nur in der nackten Anfangsrendite.",
    calculatorHint: true,
  },
  {
    id: "obj-2",
    title: "Sonder-AfA laeuft aus",
    context: "Wenn der Lead Sorge vor Jahr 5 hat.",
    guide:
      "Zeige drei Hebel: Mietanpassung, Sondertilgung oder Re-Invest in ein Folgeprojekt. Erklaere, dass der Fremdkapitalhebel und der Vermoegensaufbau weiterlaufen. Die Strategie endet nicht mit Jahr 4.",
    calculatorHint: true,
  },
  {
    id: "obj-3",
    title: "Ich muss erst mit meiner Frau sprechen",
    context: "Wenn Entscheidungen vertagt werden.",
    guide:
      "Bestaetige den Wunsch nach gemeinsamer Entscheidung und vereinbare direkt im Gespraech einen fixen Folgetermin mit beiden. Kein offenes Ende.",
    calculatorHint: false,
  },
  {
    id: "obj-4",
    title: "Neubau ist zu teuer",
    context: "Preisfokus ohne Lebenszyklus-Betrachtung.",
    guide:
      "Rechne Total Cost of Ownership vor: Renovierung, Heizung, Energiestandard und ungeplante Kosten bei Bestand. Neubau hat meist 30-40 Jahre kaum grosse Investitionen.",
    calculatorHint: true,
  },
  {
    id: "obj-5",
    title: "Unsicherheit bei Finanzierung",
    context: "Lead glaubt, die Bank lehnt ab.",
    guide:
      "Biete sofort eine anonyme Finanzierungsanfrage an. Starte noch im Call mit Selbstauskunft und fixiere den naechsten Termin.",
    calculatorHint: false,
  },
  {
    id: "obj-6",
    title: "Bautraeger liefern nicht puenktlich",
    context: "Sorge um Fertigstellung.",
    guide:
      "Erklaere Vertragsstrafe im Notarvertrag und die Bauabschnittslogik. Zeige, welche Sicherungen vertraglich greifen.",
    calculatorHint: false,
  },
  {
    id: "obj-7",
    title: "Ich warte die Steuererklaerung ab",
    context: "Lead verschiebt Entscheidung.",
    guide:
      "Reservierung sichert die Einheit. Kauf kann spaeter erfolgen, aber ohne Reservierung besteht Verfuegbarkeitsrisiko.",
    calculatorHint: false,
  },
  {
    id: "obj-8",
    title: "Co-Living ist nichts fuer mich",
    context: "Ablehnung eines Vermietungskonzepts.",
    guide:
      "Wechsle auf ein Projekt ohne Co-Living und rechne normale Vermietung. Zeige, dass die Strategie flexibel ist.",
    calculatorHint: true,
  },
  {
    id: "obj-9",
    title: "Klumpenrisiko bei einer Wohnung",
    context: "Diversifikationssorge.",
    guide:
      "Schlage zwei kleinere Einheiten statt einer grossen vor. Gleicher Eigenkapitaleinsatz, bessere Streuung, starke steuerliche Wirkung.",
    calculatorHint: true,
  },
];

const checklistPhases = [
  {
    id: "phase1",
    title: "Phase 1 - Qualifizierung",
    items: [
      { id: "p1-income-tax", label: "Einkommen / Steuersatz geklaert" },
      { id: "p1-equity", label: "Eigenkapital geklaert" },
      { id: "p1-goal", label: "Investitionsziel geklaert" },
      { id: "p1-pref", label: "Standort / Neubau-Praeferenz geklaert" },
      { id: "p1-existing", label: "Bestehende Immobilien bekannt" },
    ],
  },
  {
    id: "phase2",
    title: "Phase 2 - Projektpraesentation",
    items: [
      { id: "p2-map", label: "Standort gezeigt (Karte)" },
      { id: "p2-highlights", label: "Projekt-Highlights erklaert" },
      { id: "p2-units", label: "Verfuegbare Einheiten gezeigt" },
      { id: "p2-selected", label: "Passende Einheit ausgewaehlt" },
    ],
  },
  {
    id: "phase3",
    title: "Phase 3 - Kalkulation",
    items: [
      { id: "p3-calc-open", label: "Kalkulator geoeffnet mit echten Zahlen" },
      { id: "p3-load", label: "Monatliche Belastung gezeigt" },
      { id: "p3-tax", label: "Steuererstattung erklaert" },
      { id: "p3-cashflow", label: "Cashflow nach Steuer gezeigt" },
      { id: "p3-10y", label: "10-Jahres-Rendite besprochen" },
    ],
  },
  {
    id: "phase4",
    title: "Phase 4 - Closing",
    items: [
      { id: "p4-objection", label: "Einwaende behandelt" },
      { id: "p4-next", label: "Naechster konkreter Schritt vereinbart" },
      { id: "p4-termin", label: "Termin gebucht (nicht offen)" },
      { id: "p4-finance", label: "Selbstauskunft / Finanzierung initiiert" },
      { id: "p4-reserve", label: "Reservierung angesprochen" },
    ],
  },
];

const financingStepLabels = [
  "Selbstauskunft zugeschickt",
  "Selbstauskunft ausgefuellt erhalten",
  "Anonyme Finanzierungsanfrage gestellt",
  "Konditionsangebot erhalten",
  "Vollstaendige Unterlagen angefordert",
  "Unterlagen vollstaendig",
  "Finanzierungszusage erhalten",
  "Notartermin vereinbart",
];

const calcI18n = {
  de: {
    labels: {
      price: "Kaufpreis (EUR)",
      equity: "Eigenkapital (EUR)",
      size: "Wohnflaeche (m2)",
      rent: "Miete / m2 (EUR)",
      interest: "Zins (%)",
      repayment: "Tilgung (%)",
      maintenance: "Instandhaltung / Monat (EUR)",
    },
    results: {
      rent: "Monatliche Kaltmiete",
      rate: "Finanzierungsrate / Monat",
      cashflow: "Cashflow / Monat",
      yield: "Bruttorendite p.a.",
    },
  },
  en: {
    labels: {
      price: "Purchase price (EUR)",
      equity: "Equity (EUR)",
      size: "Living area (m2)",
      rent: "Rent / m2 (EUR)",
      interest: "Interest (%)",
      repayment: "Repayment (%)",
      maintenance: "Maintenance / month (EUR)",
    },
    results: {
      rent: "Monthly base rent",
      rate: "Financing payment / month",
      cashflow: "Cashflow / month",
      yield: "Gross yield p.a.",
    },
  },
};

const projects = [
  {
    id: "p1",
    name: "Spree Quartier Mitte",
    city: "Berlin",
    location: [52.521, 13.409],
    developer: "Urban Living Development GmbH",
    completion: "Q4 2026",
    kfwStandard: "KfW40 QNG",
    highlights: [
      "150k KfW zu 2,2%",
      "5% Sonder-AfA",
      "Mietgarantie 12 Monate",
      "Hausverwaltung inklusive",
      "Grunderwerbsteuer-Zuschuss moeglich",
    ],
    highlightsEn: [
      "150k KfW loan at 2.2%",
      "5% accelerated depreciation",
      "12-month rental guarantee",
      "Property management included",
      "Potential transfer-tax subsidy",
    ],
    usps: [
      "Steueroptimiert fuer Angestellte",
      "Planbarer Exit nach 10 Jahren",
      "Sehr hohe Vermietbarkeit",
    ],
    micro:
      "Direkt an der Spree, 4 Min. zur U-Bahn, Cafes und Coworking im 500m Radius.",
    macro:
      "Berlin bleibt Top-Standort fuer Zuzug und Mietdynamik. Tech-Arbeitsplaetze treiben Nachfrage.",
    analysis: { avgRentPsm: 24.8, avgBuyPsm: 7450, demandIndex: 92, selloutMonths: 5.5 },
    units: [
      {
        id: "B1-03",
        type: "2Z",
        size: 54,
        price: 429000,
        afaType: "§7b",
        status: "frei",
        layout: "Grundriss B1-03",
        orientation: "Sued",
        floor: "3. OG",
      },
      {
        id: "B1-07",
        type: "3Z",
        size: 73,
        price: 579000,
        afaType: "Linear",
        status: "frei",
        layout: "Grundriss B1-07",
        orientation: "West",
        floor: "5. OG",
      },
      {
        id: "B2-11",
        type: "2Z",
        size: 49,
        price: 399000,
        afaType: "Denkmal",
        status: "reserviert",
        reservationExpiry: "2026-04-24",
        layout: "Grundriss B2-11",
        orientation: "Ost",
        floor: "2. OG",
      },
    ],
    leads: [
      { name: "Miriam Hoffmann", stage: "folgebesprechung", budget: 520000, score: 86, nextStep: "Telefonat", nextStepDate: "2026-04-19" },
      { name: "Luca Baum", stage: "unberarbeitet", budget: 430000, score: 58, nextStep: "Expose senden", nextStepDate: "2026-04-21" },
      { name: "Nora Schuster", stage: "expose-versant", budget: 620000, score: 91, nextStep: "Finanzierungsnachweis", nextStepDate: "2026-04-20" },
    ],
  },
  {
    id: "p2",
    name: "Skyline Gaerten",
    city: "Frankfurt",
    location: [50.114, 8.663],
    developer: "Prime Habitat AG",
    completion: "Q2 2027",
    kfwStandard: "KfW55",
    highlights: [
      "KfW55-Energieklasse",
      "Afa-strukturiert",
      "Digitaler Vermietungsprozess",
      "Stellplatz-Bonus",
      "Bankenfreundliche Objektstruktur",
    ],
    highlightsEn: [
      "KfW55 energy class",
      "Depreciation-focused structure",
      "Digital leasing process",
      "Parking bonus",
      "Bank-friendly asset profile",
    ],
    usps: ["Niedrige Bewirtschaftungsrisiken", "Schnelle Wiedervermietung", "Starke Exit-Liquiditaet"],
    micro: "Westend-nahe Lage mit Parkzugang.",
    macro: "Frankfurt profitiert von starkem Einkommensniveau und Kapitalzufluss.",
    analysis: { avgRentPsm: 22.2, avgBuyPsm: 6990, demandIndex: 84, selloutMonths: 6.1 },
    units: [
      { id: "C1-02", type: "2Z", size: 57, price: 449000, afaType: "Linear", status: "frei", layout: "Grundriss C1-02", orientation: "Sued", floor: "2. OG" },
      { id: "C1-09", type: "4Z", size: 109, price: 880000, afaType: "§7b", status: "frei", layout: "Grundriss C1-09", orientation: "West", floor: "6. OG" },
      { id: "C2-04", type: "3Z", size: 82, price: 645000, afaType: "Denkmal", status: "reserviert", reservationExpiry: "2026-04-23", layout: "Grundriss C2-04", orientation: "Ost", floor: "4. OG" },
    ],
    leads: [
      { name: "Eric Romero", stage: "nachfassen", budget: 700000, score: 75, nextStep: "Besichtigung", nextStepDate: "2026-04-20" },
      { name: "Anne Walter", stage: "folgebesprechung", budget: 470000, score: 69, nextStep: "Renditevergleich", nextStepDate: "2026-04-22" },
      { name: "David Klein", stage: "verbrieft", budget: 890000, score: 95, nextStep: "Notartermin", nextStepDate: "2026-04-25" },
    ],
  },
  {
    id: "p3",
    name: "Elbpark Residences",
    city: "Hamburg",
    location: [53.552, 9.979],
    developer: "Nordstern Projects",
    completion: "Q4 2027",
    kfwStandard: "Neubau",
    highlights: [
      "Neubau mit QNG Option",
      "Sondertilgung flexibel",
      "Top-Mikrolage",
      "Mietermanagement",
      "Finanzierungsbegleitung",
    ],
    highlightsEn: [
      "New-build with optional QNG",
      "Flexible special repayment",
      "Top micro-location",
      "Tenant management",
      "Financing support",
    ],
    usps: ["Skalierbar fuer Portfolio", "Hohe Nachfrage", "Starker Bautraeger-Trackrecord"],
    micro: "Nahe Elbpark, familienfreundlich.",
    macro: "Hamburg mit stabiler Mietsteigerung im Neubausegment.",
    analysis: { avgRentPsm: 20.7, avgBuyPsm: 6280, demandIndex: 80, selloutMonths: 7.2 },
    units: [
      { id: "A3-06", type: "3Z", size: 78, price: 529000, afaType: "§7b", status: "frei", layout: "Grundriss A3-06", orientation: "Sued", floor: "3. OG" },
      { id: "A3-12", type: "2Z", size: 51, price: 369000, afaType: "Linear", status: "verkauft", layout: "Grundriss A3-12", orientation: "Ost", floor: "1. OG" },
      { id: "A4-01", type: "4Z", size: 116, price: 799000, afaType: "Linear", status: "reserviert", reservationExpiry: "2026-04-21", layout: "Grundriss A4-01", orientation: "West", floor: "7. OG" },
    ],
    leads: [
      { name: "Fabian Koenig", stage: "unberarbeitet", budget: 380000, score: 52, nextStep: "Quali-Formular", nextStepDate: "2026-04-20" },
      { name: "Selin Aksoy", stage: "expose-versant", budget: 560000, score: 88, nextStep: "Kaufabsicht", nextStepDate: "2026-04-21" },
      { name: "Lena Vogt", stage: "folgebesprechung", budget: 420000, score: 73, nextStep: "Steuer-Call", nextStepDate: "2026-04-24" },
    ],
  },
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function parseDate(isoDate) {
  if (!isoDate) return null;
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function formatDate(isoDate) {
  const parsed = parseDate(isoDate);
  return parsed ? parsed.toLocaleDateString("de-DE") : "-";
}

function daysSince(isoDate) {
  if (!isoDate) return 0;
  const now = new Date(`${todayIso()}T00:00:00`);
  const then = new Date(`${isoDate}T00:00:00`);
  return Math.floor((now - then) / 86400000);
}

function getDefaultLeadProfile(name, projectIndex, leadIndex) {
  const cities = ["Berlin", "Hamburg", "Muenchen", "Frankfurt", "Koeln"];
  const jobs = ["Ingenieur", "Consultant", "Selbststaendig", "Produktmanager", "IT-Lead"];
  return {
    name,
    age: 30 + ((projectIndex + leadIndex) % 14),
    profession: jobs[(projectIndex + leadIndex) % jobs.length],
    city: cities[(projectIndex + leadIndex) % cities.length],
    netIncomeMonthly: 4200 + projectIndex * 300 + leadIndex * 250,
    taxableIncomeYearly: 76000 + projectIndex * 5200 + leadIndex * 3000,
    taxRate: [25, 30, 35, 42, 45][(projectIndex + leadIndex) % 5],
    equityAvailable: 65000 + projectIndex * 11000,
    equityReady: 35000 + leadIndex * 7000,
    existingRealEstate: { count: leadIndex % 2, description: leadIndex % 2 ? "1 Bestandswohnung" : "Keine" },
    investmentGoal: ["Steuerersparnis", "Cashflow", "Altersvorsorge", "Eigennutzung", "Vermoegensaufbau"][(projectIndex + leadIndex) % 5],
    locationPreference: ["egal", "Region bevorzugt", "nur bestimmte Staedte"][(projectIndex + leadIndex) % 3],
    propertyType: ["Neubau", "Bestand", "beides"][(projectIndex + leadIndex) % 3],
    completionPreference: ["sofort", "bis 1 Jahr", "bis 2 Jahre", "egal"][(projectIndex + leadIndex) % 4],
    maxMonthlyLoad: 1200 + projectIndex * 70,
    familyStatus: leadIndex % 2 ? "verheiratet, 1 Kind" : "ledig, keine Kinder",
    financingRequested: leadIndex % 2 ? "nein" : "ja",
    primaryObjection: "Timing und Finanzierungssicherheit.",
    mood: ["heiss", "warm", "kalt"][(projectIndex + leadIndex) % 3],
    setterNotes: "Setter-Notiz: Fokus auf steuerlich sinnvolle Struktur.",
  };
}

function getChecklistDefault() {
  const map = {};
  checklistPhases.forEach((phase) => {
    phase.items.forEach((item) => {
      map[item.id] = false;
    });
  });
  return map;
}

function getFinanceTrackerDefault(lead, leadIndex) {
  return financingStepLabels.map((label, index) => {
    const completed = index <= Math.min(leadIndex, 2);
    return {
      id: `f-${index + 1}`,
      label,
      completed,
      date: completed ? addDays(todayIso(), -(10 - index * 2 + leadIndex)) : "",
      note: completed ? "Status gesetzt" : "",
      owner: completed ? lead.closer || "Closer" : "",
      rate: index === 3 && completed ? "3.65%" : "",
    };
  });
}

function getCallProtocolDefault(project, lead) {
  return {
    rating: 0,
    interest: lead.profile?.mood || "warm",
    projectId: project.id,
    unitId: project.units[0]?.id || "",
    calcSaved: "nein",
    calcLink: "",
    mainObjection: "",
    nextStep: "",
    nextStepDate: lead.nextStepDate || "",
    assignedCloser: lead.closer,
    note: "",
    emailSummary: "",
  };
}

const STORAGE_KEY = "tl-platform-autosave-v5";
const stageSequence = pipelineStages.map((stage) => stage.key);

function normalizeData() {
  projects.forEach((project, projectIndex) => {
    project.units = project.units.map((unit, unitIndex) => ({
      ...unit,
      status: unit.status || (unitIndex % 5 === 0 ? "verkauft" : unitIndex % 3 === 0 ? "reserviert" : "frei"),
      orientation: unit.orientation || ["Sued", "West", "Ost", "Nord"][unitIndex % 4],
      floor: unit.floor || `${(unitIndex % 5) + 1}. OG`,
      layout: unit.layout || `Grundriss ${unit.id}`,
      reservationExpiry: unit.reservationExpiry || (unit.status === "reserviert" ? addDays(todayIso(), 3 + unitIndex) : ""),
    }));

    project.leads = project.leads.map((lead, leadIndex) => {
      const mappedStage = stageSequence[(projectIndex * 3 + leadIndex) % stageSequence.length];
      const normalized = {
        ...lead,
        id: lead.id || `${project.id}-lead-${leadIndex + 1}`,
        stage: mappedStage,
        closer: lead.closer || ["M. Keller", "A. Yilmaz", "S. Weber"][leadIndex % 3],
        nextStepDate: lead.nextStepDate || addDays(todayIso(), leadIndex + 1),
        scoreReason: lead.scoreReason || `Score basiert auf Budget-Fit und Verbindlichkeit (${lead.score}/100).`,
        rejectionReason: lead.rejectionReason || "",
        phone: lead.phone || `+49 17${projectIndex}${leadIndex} 552${leadIndex}`,
        email: lead.email || `${lead.name.toLowerCase().replaceAll(" ", ".")}@example.de`,
        lastActivityDate: lead.lastActivityDate || addDays(todayIso(), -(projectIndex + leadIndex + 1)),
      };
      normalized.profile = { ...getDefaultLeadProfile(normalized.name, projectIndex, leadIndex), ...(lead.profile || {}) };
      normalized.checklist = { ...getChecklistDefault(), ...(lead.checklist || {}) };
      normalized.financingTracker = lead.financingTracker || getFinanceTrackerDefault(normalized, leadIndex);
      normalized.callProtocol = { ...getCallProtocolDefault(project, normalized), ...(lead.callProtocol || {}) };
      normalized.notes = lead.notes || normalized.profile.setterNotes || "";
      return normalized;
    });
  });
}

const state = {
  selectedProjectId: projects[0].id,
  selectedLeadId: projects[0].leads[0]?.id || null,
  selectedUnitId: projects[0].units[0]?.id || null,
  selectedObjectionId: objectionLibrary[0].id,
  isProjectPanelOpen: false,
  isLeadModalOpen: false,
  projectSearch: "",
  leadSearch: "",
  objectionSearch: "",
  focusCurrentProject: false,
  calcLanguage: "de",
  filters: { sizeMin: 35, sizeMax: 120, priceMax: 600000, afaType: "alle" },
  map: null,
  markerLayer: null,
};

function saveToStorage() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ projects, calcLanguage: state.calcLanguage }),
    );
  } catch (_error) {
    // ignore
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.projects) && parsed.projects.length) {
      projects.splice(0, projects.length, ...parsed.projects);
    }
    if (parsed.calcLanguage === "de" || parsed.calcLanguage === "en") {
      state.calcLanguage = parsed.calcLanguage;
    }
  } catch (_error) {
    // ignore
  }
}

const projectListEl = document.querySelector("#projectList");
const projectSearchEl = document.querySelector("#projectSearch");
const leadSearchEl = document.querySelector("#leadSearch");
const focusProjectLeadsEl = document.querySelector("#focusProjectLeads");
const pipelineBoardEl = document.querySelector("#pipelineBoard");
const projectHeroEl = document.querySelector("#projectHero");
const projectCallCardEl = document.querySelector("#projectCallCard");
const tabMicroEl = document.querySelector("#tab-micro");
const tabMacroEl = document.querySelector("#tab-macro");
const tabAnalysisEl = document.querySelector("#tab-analysis");
const tabUnitsEl = document.querySelector("#tab-units");
const mapMetaEl = document.querySelector("#mapMeta");
const sizeMinEl = document.querySelector("#sizeMin");
const sizeMaxEl = document.querySelector("#sizeMax");
const priceMaxEl = document.querySelector("#priceMax");
const afaTypeEl = document.querySelector("#afaType");
const customerDetailEl = document.querySelector("#customerDetail");
const projectPanelEl = document.querySelector("#projectPanel");
const projectPanelBodyEl = document.querySelector("#projectPanelBody");
const projectPanelCloseEl = document.querySelector("#projectPanelClose");
const leadModalEl = document.querySelector("#leadModal");
const leadModalBodyEl = document.querySelector("#leadModalBody");
const leadModalCloseEl = document.querySelector("#leadModalClose");
const dashboardGridEl = document.querySelector("#dashboardGrid");
const objectionSearchEl = document.querySelector("#objectionSearch");
const objectionListEl = document.querySelector("#objectionList");
const objectionDetailEl = document.querySelector("#objectionDetail");
const langDeBtn = document.querySelector("#langDeBtn");
const langEnBtn = document.querySelector("#langEnBtn");

function formatCurrency(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 1,
  }).format(Number(value || 0));
}

function allLeads() {
  return projects.flatMap((project) =>
    project.leads.map((lead) => ({
      ...lead,
      leadId: lead.id,
      projectId: project.id,
      projectName: project.name,
      city: project.city,
      developer: project.developer,
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

function getLeadById(leadId) {
  for (const project of projects) {
    const lead = project.leads.find((entry) => entry.id === leadId);
    if (lead) return { lead, project };
  }
  return null;
}

function firstLeadIdForProject(projectId) {
  return getProjectById(projectId)?.leads?.[0]?.id || null;
}

function scoreClass(score) {
  if (score >= 80) return "high";
  if (score >= 60) return "mid";
  return "low";
}

function getUnitStatusClass(status) {
  if (status === "frei") return "unit-available";
  if (status === "reserviert") return "unit-reserved";
  return "unit-sold";
}

function filteredProjects() {
  const q = state.projectSearch.toLowerCase().trim();
  if (!q) return projects;
  return projects.filter(
    (project) => project.name.toLowerCase().includes(q) || project.city.toLowerCase().includes(q),
  );
}

function filteredObjections() {
  const q = state.objectionSearch.toLowerCase().trim();
  if (!q) return objectionLibrary;
  return objectionLibrary.filter(
    (entry) => entry.title.toLowerCase().includes(q) || entry.context.toLowerCase().includes(q),
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

function projectCashflow(project) {
  const sampleUnit = project.units.find((unit) => unit.status !== "verkauft") || project.units[0];
  const rentMonthly = sampleUnit.size * project.analysis.avgRentPsm;
  const financing = sampleUnit.price * 0.8 * (0.038 + 0.02) / 12;
  return rentMonthly - financing - 120;
}

function checklistProgress(checklistMap) {
  const ids = checklistPhases.flatMap((phase) => phase.items.map((item) => item.id));
  const done = ids.filter((id) => Boolean(checklistMap[id])).length;
  return { done, total: ids.length, percent: Math.round((done / ids.length) * 100) };
}

function hasPhaseWarning(checklistMap) {
  const p2 = checklistPhases[1].items.map((item) => item.id);
  const p3 = checklistPhases[2].items.map((item) => item.id);
  const p4 = checklistPhases[3].items.map((item) => item.id);
  const p4Touched = p4.some((id) => checklistMap[id]);
  return p4Touched && (!p2.every((id) => checklistMap[id]) || !p3.every((id) => checklistMap[id]));
}

function applyCalculatorLanguage() {
  const lang = calcI18n[state.calcLanguage];
  document.querySelector("#calcLabelPrice").textContent = lang.labels.price;
  document.querySelector("#calcLabelEquity").textContent = lang.labels.equity;
  document.querySelector("#calcLabelSize").textContent = lang.labels.size;
  document.querySelector("#calcLabelRent").textContent = lang.labels.rent;
  document.querySelector("#calcLabelInterest").textContent = lang.labels.interest;
  document.querySelector("#calcLabelRepayment").textContent = lang.labels.repayment;
  document.querySelector("#calcLabelMaintenance").textContent = lang.labels.maintenance;
  document.querySelector("#calcResultRent").textContent = lang.results.rent;
  document.querySelector("#calcResultRate").textContent = lang.results.rate;
  document.querySelector("#calcResultCashflow").textContent = lang.results.cashflow;
  document.querySelector("#calcResultYield").textContent = lang.results.yield;

  langDeBtn?.classList.toggle("active", state.calcLanguage === "de");
  langEnBtn?.classList.toggle("active", state.calcLanguage === "en");
}

function updateHeaderKpis() {
  const leads = allLeads();
  const openUnits = allUnits().filter((unit) => unit.status === "frei").length;
  document.querySelector("#kpiProjects").textContent = String(projects.length);
  document.querySelector("#kpiLeads").textContent = String(leads.length);
  document.querySelector("#kpiUnits").textContent = String(openUnits);
  document.querySelector("#kpiDate").textContent = new Date().toLocaleDateString("de-DE");
}

function renderDashboard() {
  const leads = allLeads();
  const today = todayIso();

  const callsToday = leads.filter((lead) => lead.nextStepDate === today);
  const inactive = leads.filter((lead) => daysSince(lead.lastActivityDate) >= 7);
  const overdue = leads.filter((lead) => lead.callProtocol?.nextStepDate && lead.callProtocol.nextStepDate < today);
  const financeLate = leads.filter((lead) => {
    const step = lead.financingTracker?.[2];
    return step?.completed && daysSince(step.date) >= 14;
  });
  const hotLeads = [...leads].sort((a, b) => b.score - a.score).slice(0, 3);
  const expiring = allUnits().filter(
    (unit) => unit.status === "reserviert" && unit.reservationExpiry && daysSince(unit.reservationExpiry) >= -3,
  );

  dashboardGridEl.innerHTML = `
    <section><h3>Calls heute</h3><ul>${callsToday.map((lead) => `<li><button class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button> · ${lead.projectName}</li>`).join("") || '<li class="empty-state">Keine Calls</li>'}</ul></section>
    <section><h3>7+ Tage ohne Aktivitaet</h3><ul>${inactive.map((lead) => `<li class="danger-row"><button class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button> · ${daysSince(lead.lastActivityDate)} Tage</li>`).join("") || '<li class="empty-state">Keine inaktiven Leads</li>'}</ul></section>
    <section><h3>Offene naechste Schritte</h3><ul>${overdue.map((lead) => `<li><button class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button> · ${formatDate(lead.callProtocol.nextStepDate)}</li>`).join("") || '<li class="empty-state">Keine ueberfaelligen Schritte</li>'}</ul></section>
    <section><h3>Finanzierung >14 Tage ohne Update</h3><ul>${financeLate.map((lead) => `<li class="warning-row"><button class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button></li>`).join("") || '<li class="empty-state">Keine kritischen Faelle</li>'}</ul></section>
    <section><h3>Top 3 heisseste Leads</h3><ul>${hotLeads.map((lead) => `<li><button class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button> · ${lead.score}/100</li>`).join("")}</ul></section>
    <section><h3>Reservierungen laufen aus</h3><ul>${expiring.map((unit) => `<li><button class="link-btn" data-open-project-id="${unit.projectId}">${unit.projectName}</button> · ${unit.id} bis ${formatDate(unit.reservationExpiry)}</li>`).join("") || '<li class="empty-state">Keine Auslaeufe</li>'}</ul></section>
  `;
}

function renderObjectionLibrary() {
  const items = filteredObjections();
  if (!items.length) {
    objectionListEl.innerHTML = '<p class="empty-state">Kein Einwand gefunden.</p>';
    objectionDetailEl.innerHTML = "";
    return;
  }
  if (!items.some((item) => item.id === state.selectedObjectionId)) {
    state.selectedObjectionId = items[0].id;
  }

  objectionListEl.innerHTML = items
    .map(
      (item) =>
        `<button type="button" class="objection-item ${item.id === state.selectedObjectionId ? "active" : ""}" data-objection-id="${item.id}">${item.title}</button>`,
    )
    .join("");

  const selected = objectionLibrary.find((item) => item.id === state.selectedObjectionId) || items[0];
  objectionDetailEl.innerHTML = `
    <h3>${selected.title}</h3>
    <p><strong>Kontext:</strong> ${selected.context}</p>
    <p><strong>Antwort-Leitfaden:</strong> ${selected.guide}</p>
    ${selected.calculatorHint ? '<button type="button" class="link-btn" data-open-calculator="1">Zeig mir das in Zahlen</button>' : ""}
  `;
}

function renderProjectList() {
  const filtered = filteredProjects();
  projectListEl.innerHTML = filtered
    .map((project) => {
      const matched = matchingUnits(project).length;
      const totalOpen = project.units.filter((unit) => unit.status === "frei").length;
      return `
        <article class="project-item ${project.id === state.selectedProjectId ? "active" : ""}" data-project-id="${project.id}" role="button" tabindex="0">
          <h3>${project.name}</h3>
          <p>${project.city} · ${project.developer}</p>
          <div class="badge-row">
            <span class="badge">${project.leads.length} Leads</span>
            <span class="badge">${totalOpen} verfuegbare Einheiten</span>
            <span class="badge">${matched} passen zum Filter</span>
          </div>
        </article>
      `;
    })
    .join("");

  if (!filtered.length) {
    projectListEl.innerHTML = '<p class="empty-state">Keine Projekte gefunden.</p>';
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
            .map((lead) => {
              const summary = lead.callProtocol?.nextStep
                ? `${lead.callProtocol.interest || "warm"} · ${lead.callProtocol.nextStep}`
                : "Noch kein Nach-Call-Protokoll";
              return `
                <article class="lead-card ${lead.leadId === state.selectedLeadId ? "active" : ""}" data-lead-id="${lead.leadId}">
                  <strong>${lead.name}</strong>
                  <p>${lead.projectName} · ${lead.city}</p>
                  <p>Budget: ${formatCurrency(lead.budget)}</p>
                  <p>Naechster Schritt: ${lead.nextStep} (${formatDate(lead.nextStepDate)})</p>
                  <p class="lead-update">${summary}</p>
                  <span class="lead-score ${scoreClass(lead.score)}">Score ${lead.score}</span>
                </article>
              `;
            })
            .join("")}
          ${stageLeads.length === 0 ? '<p class="empty-state">Keine Leads</p>' : ""}
        </section>
      `;
    })
    .join("");
}

function renderCustomerDetail() {
  const selectedLead = allLeads().find((lead) => lead.leadId === state.selectedLeadId);
  if (!selectedLead) {
    customerDetailEl.innerHTML = '<p class="empty-state">Noch kein Lead ausgewaehlt.</p>';
    return;
  }
  const profile = selectedLead.profile;
  const stageLabel =
    pipelineStages.find((stage) => stage.key === selectedLead.stage)?.label || selectedLead.stage;

  customerDetailEl.innerHTML = `
    <div class="briefing-card">
      <div class="customer-main">
        <div>
          <h3>${selectedLead.name}</h3>
          <p class="customer-muted">${selectedLead.projectName} · ${selectedLead.city}</p>
        </div>
        <span class="customer-stage">${stageLabel}</span>
      </div>
      <div class="briefing-grid">
        <div><span>Alter / Beruf</span><strong>${profile.age} · ${profile.profession}</strong></div>
        <div><span>Netto / Monat</span><strong>${formatCurrency(profile.netIncomeMonthly)}</strong></div>
        <div><span>Steuersatz</span><strong>${profile.taxRate}%</strong></div>
        <div><span>EK einsatzbereit</span><strong>${formatCurrency(profile.equityReady)}</strong></div>
        <div><span>Ziel</span><strong>${profile.investmentGoal}</strong></div>
        <div><span>Kaufbereitschaft</span><strong>${profile.mood}</strong></div>
      </div>
      <p class="setter-note"><strong>Setter-Briefing:</strong> ${profile.setterNotes}</p>
      <div class="customer-actions">
        <button type="button" id="openLeadBriefing">Lead-Profil oeffnen</button>
        <button type="button" id="openCustomerProject">Projekt oeffnen</button>
      </div>
    </div>
  `;

  document.querySelector("#openLeadBriefing")?.addEventListener("click", () => {
    state.isLeadModalOpen = true;
    renderLeadModal();
  });

  document.querySelector("#openCustomerProject")?.addEventListener("click", () => {
    state.selectedProjectId = selectedLead.projectId;
    state.isProjectPanelOpen = true;
    renderProjectPanel();
  });
}

function renderProjectCallCard(project) {
  const highlights = state.calcLanguage === "en" ? project.highlightsEn : project.highlights;
  const available = project.units.filter((unit) => unit.status === "frei").length;
  const prices = project.units.map((unit) => unit.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  projectCallCardEl.innerHTML = `
    <div class="call-card-top">
      <div>
        <h3>${project.name}</h3>
        <p>${project.city} · ${project.developer}</p>
      </div>
      <div class="call-card-badges">
        <span class="kfw-badge">${project.kfwStandard}</span>
        <span class="kfw-badge neutral">Fertigstellung: ${project.completion}</span>
      </div>
    </div>
    <div class="call-card-stats">
      <div><span>Verfuegbar</span><strong>${available} Einheiten</strong></div>
      <div><span>Preisrange</span><strong>${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}</strong></div>
      <div><span>USPs</span><strong>${project.usps.length}</strong></div>
    </div>
    <div class="call-card-columns">
      <div><h4>Highlights</h4><ul>${highlights.slice(0, 5).map((entry) => `<li>${entry}</li>`).join("")}</ul></div>
      <div><h4>USPs fuer Closer</h4><ul>${project.usps.map((entry) => `<li>${entry}</li>`).join("")}</ul></div>
    </div>
    <div class="unit-status-row">
      ${project.units
        .map(
          (unit) =>
            `<button type="button" class="unit-chip ${getUnitStatusClass(unit.status)}" data-call-unit-id="${unit.id}">${unit.id} · ${statusLabelMap[unit.status]}</button>`,
        )
        .join("")}
    </div>
  `;
}

function renderProjectDetail() {
  const project = getProjectById(state.selectedProjectId);
  const openUnits = project.units.filter((unit) => unit.status === "frei");
  const matchingOpenUnits = matchingUnits(project);

  projectHeroEl.innerHTML = `
    <h2>${project.name} · ${project.city}</h2>
    <p>${project.developer}</p>
    <div class="hero-stats">
      <div><span>Leads im Projekt</span><strong>${project.leads.length}</strong></div>
      <div><span>Freie Einheiten</span><strong>${openUnits.length}</strong></div>
      <div><span>Filter-Matches</span><strong>${matchingOpenUnits.length}</strong></div>
      <div><span>Ø Kaufpreis / m2</span><strong>${formatCurrency(project.analysis.avgBuyPsm)}</strong></div>
    </div>
  `;

  renderProjectCallCard(project);
  tabMicroEl.innerHTML = `<p>${project.micro}</p>`;
  tabMacroEl.innerHTML = `<p>${project.macro}</p>`;
  tabAnalysisEl.innerHTML = `
    <div class="analysis-grid">
      <div><span>Ø Miete / m2</span><strong>${formatNumber(project.analysis.avgRentPsm)} EUR</strong></div>
      <div><span>Ø Kaufpreis / m2</span><strong>${formatCurrency(project.analysis.avgBuyPsm)}</strong></div>
      <div><span>Nachfrageindex</span><strong>${project.analysis.demandIndex}/100</strong></div>
      <div><span>Sellout-Dauer</span><strong>${formatNumber(project.analysis.selloutMonths)} Monate</strong></div>
    </div>
  `;

  tabUnitsEl.innerHTML = `
    <table class="units-table">
      <thead>
        <tr>
          <th>Einheit</th>
          <th>Typ</th>
          <th>Groesse</th>
          <th>Preis</th>
          <th>Status</th>
          <th>Etage</th>
          <th>Ausrichtung</th>
        </tr>
      </thead>
      <tbody>
        ${project.units
          .map(
            (unit) => `
            <tr class="unit-row" data-unit-id="${unit.id}">
              <td>${unit.id}</td>
              <td>${unit.type}</td>
              <td>${unit.size} m2</td>
              <td>${formatCurrency(unit.price)}</td>
              <td><span class="unit-pill ${getUnitStatusClass(unit.status)}">${statusLabelMap[unit.status]}</span></td>
              <td>${unit.floor}</td>
              <td>${unit.orientation}</td>
            </tr>
          `,
          )
          .join("")}
      </tbody>
    </table>
    ${!matchingOpenUnits.length ? '<p class="empty-state">Keine passende freie Einheit im Filter.</p>' : ""}
  `;
}

function renderProjectPanel() {
  if (!projectPanelEl || !projectPanelBodyEl) return;
  if (!state.isProjectPanelOpen) {
    projectPanelEl.classList.remove("open");
    projectPanelEl.setAttribute("aria-hidden", "true");
    return;
  }

  const project = getProjectById(state.selectedProjectId);
  const leads = allLeads().filter((lead) => lead.projectId === project.id);
  const selectedUnit =
    project.units.find((unit) => unit.id === state.selectedUnitId) ||
    project.units.find((unit) => unit.status !== "verkauft") ||
    project.units[0];

  projectPanelBodyEl.innerHTML = `
    <section>
      <h3>${project.name}</h3>
      <p>${project.developer} · ${project.city}</p>
    </section>
    <section>
      <h4>Einheiten</h4>
      <table class="panel-table">
        <thead>
          <tr><th>Einheit</th><th>Typ</th><th>m2</th><th>Preis</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${project.units
            .map(
              (unit) => `
              <tr>
                <td><button type="button" class="link-btn" data-panel-unit-id="${unit.id}">${unit.id}</button></td>
                <td>${unit.type}</td>
                <td>${unit.size}</td>
                <td>${formatCurrency(unit.price)}</td>
                <td><span class="unit-pill ${getUnitStatusClass(unit.status)}">${statusLabelMap[unit.status]}</span></td>
              </tr>
            `,
            )
            .join("")}
        </tbody>
      </table>
    </section>
    <section class="panel-grid">
      <div><span>Gewaehlte Einheit</span><strong>${selectedUnit.id}</strong></div>
      <div><span>Grundriss</span><strong>${selectedUnit.layout}</strong></div>
      <div><span>Ausrichtung</span><strong>${selectedUnit.orientation}</strong></div>
      <div><span>Etage</span><strong>${selectedUnit.floor}</strong></div>
    </section>
    <section>
      <h4>Zugeordnete Leads</h4>
      <ul class="panel-list">
        ${leads
          .map(
            (lead) => `
            <li>
              <button type="button" class="link-btn" data-open-lead-id="${lead.leadId}">${lead.name}</button>
              <span>${formatCurrency(lead.budget)} · ${lead.stage}</span>
            </li>
          `,
          )
          .join("")}
      </ul>
    </section>
    <section>
      <h4>Rendite-Kalkulator (Projekt-Snapshot)</h4>
      <div class="panel-grid">
        <div><span>Kaufpreis</span><strong>${formatCurrency(selectedUnit.price)}</strong></div>
        <div><span>Miete / m2</span><strong>${formatNumber(project.analysis.avgRentPsm)} EUR</strong></div>
        <div><span>Cashflow / Monat</span><strong>${formatCurrency(projectCashflow(project))}</strong></div>
        <div><span>EK-Bedarf (20%)</span><strong>${formatCurrency(selectedUnit.price * 0.2)}</strong></div>
      </div>
    </section>
  `;

  projectPanelEl.classList.add("open");
  projectPanelEl.setAttribute("aria-hidden", "false");
}

function setNestedField(target, path, value) {
  const keys = path.split(".");
  let current = target;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== "object") current[key] = {};
    current = current[key];
  }
  const finalKey = keys[keys.length - 1];
  const oldValue = current[finalKey];
  if (typeof oldValue === "number") current[finalKey] = Number(value || 0);
  else current[finalKey] = value;
}

function updateLeadField(leadId, updater) {
  const found = getLeadById(leadId);
  if (!found) return;
  updater(found.lead, found.project);
  found.lead.lastActivityDate = todayIso();
  saveToStorage();
}

function renderLeadModal() {
  if (!leadModalEl || !leadModalBodyEl) return;
  if (!state.isLeadModalOpen) {
    leadModalEl.classList.remove("open");
    leadModalEl.setAttribute("aria-hidden", "true");
    return;
  }
  const found = getLeadById(state.selectedLeadId);
  if (!found) {
    state.isLeadModalOpen = false;
    return;
  }

  const { lead, project } = found;
  const profile = lead.profile;
  const progress = checklistProgress(lead.checklist);
  const warning = hasPhaseWarning(lead.checklist);
  const protocol = lead.callProtocol;

  const checklistHtml = checklistPhases
    .map(
      (phase) => `
      <section class="checklist-phase">
        <h4>${phase.title}</h4>
        ${phase.items
          .map(
            (item) => `
            <label class="check-item">
              <input type="checkbox" data-check-id="${item.id}" ${lead.checklist[item.id] ? "checked" : ""}/>
              ${item.label}
            </label>
          `,
          )
          .join("")}
      </section>
    `,
    )
    .join("");

  const financeRows = lead.financingTracker
    .map((step, index) => {
      const next = lead.financingTracker[index + 1];
      const stale = step.completed && !next?.completed && step.date && daysSince(step.date) > 7;
      return `
      <tr class="${stale ? "stale-row" : ""}">
        <td>
          <label class="inline-check">
            <input type="checkbox" data-finance-index="${index}" data-finance-field="completed" ${step.completed ? "checked" : ""}/>
            ${step.label}
          </label>
        </td>
        <td><input type="date" data-finance-index="${index}" data-finance-field="date" value="${step.date || ""}"/></td>
        <td><input type="text" data-finance-index="${index}" data-finance-field="owner" value="${step.owner || ""}"/></td>
        <td><input type="text" data-finance-index="${index}" data-finance-field="note" value="${step.note || ""}"/></td>
      </tr>
    `;
    })
    .join("");

  const unitOptions = project.units
    .map(
      (unit) =>
        `<option value="${unit.id}" ${protocol.unitId === unit.id ? "selected" : ""}>${unit.id}</option>`,
    )
    .join("");

  const ratingButtons = [1, 2, 3, 4, 5]
    .map(
      (value) =>
        `<button type="button" class="star-btn ${protocol.rating >= value ? "active" : ""}" data-rating="${value}">★</button>`,
    )
    .join("");

  const summaryText = `${lead.name} (${project.name}): Interesse ${protocol.interest || "offen"}, naechster Schritt ${protocol.nextStep || "offen"} am ${protocol.nextStepDate ? formatDate(protocol.nextStepDate) : "tbd"}.`;

  leadModalBodyEl.innerHTML = `
    <section class="lead-briefing">
      <h3>Lead-Briefing vor dem Call</h3>
      <div class="briefing-grid">
        <div><span>Name / Alter</span><strong>${profile.name} · ${profile.age}</strong></div>
        <div><span>Beruf / Wohnort</span><strong>${profile.profession} · ${profile.city}</strong></div>
        <div><span>Netto / Monat</span><strong>${formatCurrency(profile.netIncomeMonthly)}</strong></div>
        <div><span>zvE / Jahr</span><strong>${formatCurrency(profile.taxableIncomeYearly)}</strong></div>
        <div><span>Steuersatz</span><strong>${profile.taxRate}%</strong></div>
        <div><span>EK verfuegbar</span><strong>${formatCurrency(profile.equityAvailable)}</strong></div>
        <div><span>EK einsetzbar</span><strong>${formatCurrency(profile.equityReady)}</strong></div>
        <div><span>Ziel</span><strong>${profile.investmentGoal}</strong></div>
        <div><span>Praeferenz</span><strong>${profile.locationPreference} · ${profile.propertyType}</strong></div>
        <div><span>Max. Belastung</span><strong>${formatCurrency(profile.maxMonthlyLoad)}</strong></div>
      </div>
      <p class="setter-note"><strong>Haupteinwand:</strong> ${profile.primaryObjection}</p>
      <p class="setter-note"><strong>Setter-Notizen:</strong> ${profile.setterNotes}</p>
    </section>

    <section>
      <h3>Lead-Profil (Setter)</h3>
      <div class="form-grid">
        <label>Name<input type="text" data-profile-field="name" value="${profile.name}"/></label>
        <label>Alter<input type="number" data-profile-field="age" value="${profile.age}"/></label>
        <label>Beruf<input type="text" data-profile-field="profession" value="${profile.profession}"/></label>
        <label>Wohnort<input type="text" data-profile-field="city" value="${profile.city}"/></label>
        <label>Nettoeinkommen / Monat<input type="number" data-profile-field="netIncomeMonthly" value="${profile.netIncomeMonthly}"/></label>
        <label>zvE / Jahr<input type="number" data-profile-field="taxableIncomeYearly" value="${profile.taxableIncomeYearly}"/></label>
        <label>Steuersatz
          <select data-profile-field="taxRate">
            ${[25, 30, 35, 42, 45].map((rate) => `<option value="${rate}" ${profile.taxRate === rate ? "selected" : ""}>${rate}%</option>`).join("")}
          </select>
        </label>
        <label>Eigenkapital verfuegbar<input type="number" data-profile-field="equityAvailable" value="${profile.equityAvailable}"/></label>
        <label>Eigenkapital einsetzbar<input type="number" data-profile-field="equityReady" value="${profile.equityReady}"/></label>
        <label>Immobilien (Anzahl)<input type="number" data-profile-field="existingRealEstate.count" value="${profile.existingRealEstate.count}"/></label>
        <label>Immobilien Beschreibung<input type="text" data-profile-field="existingRealEstate.description" value="${profile.existingRealEstate.description}"/></label>
        <label>Investitionsziel
          <select data-profile-field="investmentGoal">
            ${["Steuerersparnis", "Cashflow", "Altersvorsorge", "Eigennutzung", "Vermoegensaufbau"].map((v) => `<option value="${v}" ${profile.investmentGoal === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Standortpraeferenz
          <select data-profile-field="locationPreference">
            ${["egal", "Region bevorzugt", "nur bestimmte Staedte"].map((v) => `<option value="${v}" ${profile.locationPreference === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Neubau oder Bestand
          <select data-profile-field="propertyType">
            ${["Neubau", "Bestand", "beides"].map((v) => `<option value="${v}" ${profile.propertyType === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Fertigstellung
          <select data-profile-field="completionPreference">
            ${["sofort", "bis 1 Jahr", "bis 2 Jahre", "egal"].map((v) => `<option value="${v}" ${profile.completionPreference === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Max. monatliche Belastung<input type="number" data-profile-field="maxMonthlyLoad" value="${profile.maxMonthlyLoad}"/></label>
        <label>Familienstand + Kinder<input type="text" data-profile-field="familyStatus" value="${profile.familyStatus}"/></label>
        <label>Finanzierung angefragt
          <select data-profile-field="financingRequested">
            ${["ja", "nein"].map((v) => `<option value="${v}" ${profile.financingRequested === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Stimmung / Kaufbereitschaft
          <select data-profile-field="mood">
            ${["heiss", "warm", "kalt"].map((v) => `<option value="${v}" ${profile.mood === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
      </div>
      <label>Haupteinwand<input type="text" data-profile-field="primaryObjection" value="${profile.primaryObjection}"/></label>
      <label>Setter-Notizen<textarea rows="2" data-profile-field="setterNotes">${profile.setterNotes}</textarea></label>
    </section>

    <section>
      <h3>Gespraechs-Checkliste <span class="progress-chip">${progress.percent}%</span></h3>
      ${warning ? '<p class="warning-text">Warnung: Phase 4 erreicht ohne abgeschlossene Phase 2/3.</p>' : ""}
      <div class="checklist-grid">${checklistHtml}</div>
    </section>

    <section>
      <h3>Finanzierungsprozess-Tracker</h3>
      <table class="panel-table finance-table">
        <thead><tr><th>Status-Schritt</th><th>Datum</th><th>Verantwortlich</th><th>Notiz</th></tr></thead>
        <tbody>${financeRows}</tbody>
      </table>
      <p class="hint-text">Warnung wenn ein Schritt mehr als 7 Tage ohne Aktivitaet bleibt.</p>
    </section>

    <section>
      <h3>Nach-Call Protokoll (1 Klick)</h3>
      <div class="rating-row"><span>Sterne:</span>${ratingButtons}</div>
      <div class="form-grid">
        <label>Interesse
          <select data-protocol-field="interest">
            ${["heiss", "warm", "kalt", "kein Interesse"].map((v) => `<option value="${v}" ${protocol.interest === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Projekt
          <select data-protocol-field="projectId">
            ${projects.map((p) => `<option value="${p.id}" ${protocol.projectId === p.id ? "selected" : ""}>${p.name}</option>`).join("")}
          </select>
        </label>
        <label>Einheit
          <select data-protocol-field="unitId">${unitOptions}</select>
        </label>
        <label>Kalkulation gespeichert
          <select data-protocol-field="calcSaved">
            ${["ja", "nein"].map((v) => `<option value="${v}" ${protocol.calcSaved === v ? "selected" : ""}>${v}</option>`).join("")}
          </select>
        </label>
        <label>Kalkulationslink<input type="text" data-protocol-field="calcLink" value="${protocol.calcLink || ""}"/></label>
        <label>Naechster Schritt
          <select data-protocol-field="nextStep">
            ${["", "Finanzierungsanfrage", "Expose zugeschickt", "Folgetermin gebucht", "Reservierung angesprochen", "Kein Interesse"].map((v) => `<option value="${v}" ${protocol.nextStep === v ? "selected" : ""}>${v || "Bitte waehlen"}</option>`).join("")}
          </select>
        </label>
        <label>Datum naechster Schritt<input type="date" data-protocol-field="nextStepDate" value="${protocol.nextStepDate || ""}"/></label>
        <label>Zugewiesener Closer<input type="text" data-protocol-field="assignedCloser" value="${protocol.assignedCloser || ""}"/></label>
      </div>
      <label>Haupteinwand im Call<textarea rows="2" data-protocol-field="mainObjection">${protocol.mainObjection || ""}</textarea></label>
      <label>Freitext Notiz<textarea rows="3" data-protocol-field="note">${protocol.note || ""}</textarea></label>
      <p class="hint-text">Automatisch gespeichert. Mail-Zusammenfassung: ${summaryText}</p>
    </section>

    <div class="contact-actions">
      <a class="contact-btn" href="tel:${lead.phone}">Tel</a>
      <a class="contact-btn" href="mailto:${lead.email}?subject=TL%20Platform%20Summary&body=${encodeURIComponent(summaryText)}">Mail</a>
    </div>
  `;

  leadModalEl.classList.add("open");
  leadModalEl.setAttribute("aria-hidden", "false");
}

function initMap() {
  state.map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([51.1657, 10.4515], 6);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap &copy; CARTO",
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
      color: "#ffffff",
      weight: 2,
      fillColor: project.id === state.selectedProjectId ? "#2f80ed" : "#5fa8ff",
      fillOpacity: 0.9,
    });

    marker.bindPopup(`
      <strong>${project.name}</strong><br/>
      ${project.city}<br/>
      Passende freie Einheiten: ${matchedUnits.length}
    `);
    marker.on("click", () => {
      state.selectedProjectId = project.id;
      state.selectedLeadId = firstLeadIdForProject(project.id);
      state.selectedUnitId = project.units[0]?.id || null;
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

function setActiveTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach((tabBtn) => tabBtn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((tabContent) => tabContent.classList.remove("active"));
  document.querySelector(`.tab-btn[data-tab='${tabName}']`)?.classList.add("active");
  document.querySelector(`#tab-${tabName}`)?.classList.add("active");
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

  objectionSearchEl?.addEventListener("input", (event) => {
    state.objectionSearch = event.target.value;
    renderObjectionLibrary();
  });

  objectionListEl?.addEventListener("click", (event) => {
    const item = event.target.closest("[data-objection-id]");
    if (!item) return;
    state.selectedObjectionId = item.getAttribute("data-objection-id");
    renderObjectionLibrary();
  });

  objectionDetailEl?.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-calculator]")) {
      setActiveTab("calculator");
    }
  });

  projectListEl.addEventListener("click", (event) => {
    const item = event.target.closest("[data-project-id]");
    if (!item) return;
    const projectId = item.getAttribute("data-project-id");
    state.selectedProjectId = projectId;
    state.selectedLeadId = firstLeadIdForProject(projectId);
    state.selectedUnitId = getProjectById(projectId).units[0]?.id || null;
    state.isProjectPanelOpen = true;
    fullRender();
  });

  projectListEl.addEventListener("keydown", (event) => {
    const item = event.target.closest("[data-project-id]");
    if (!item || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    item.click();
  });

  dashboardGridEl?.addEventListener("click", (event) => {
    const leadBtn = event.target.closest("[data-open-lead-id]");
    if (leadBtn) {
      const leadId = leadBtn.getAttribute("data-open-lead-id");
      const found = getLeadById(leadId);
      if (!found) return;
      state.selectedLeadId = leadId;
      state.selectedProjectId = found.project.id;
      state.isLeadModalOpen = true;
      fullRender();
      return;
    }
    const projectBtn = event.target.closest("[data-open-project-id]");
    if (projectBtn) {
      const projectId = projectBtn.getAttribute("data-open-project-id");
      state.selectedProjectId = projectId;
      state.selectedLeadId = firstLeadIdForProject(projectId);
      state.selectedUnitId = getProjectById(projectId).units[0]?.id || null;
      state.isProjectPanelOpen = true;
      fullRender();
    }
  });

  pipelineBoardEl.addEventListener("click", (event) => {
    const card = event.target.closest("[data-lead-id]");
    if (!card) return;
    const leadId = card.getAttribute("data-lead-id");
    const found = getLeadById(leadId);
    if (!found) return;
    state.selectedLeadId = leadId;
    state.selectedProjectId = found.project.id;
    state.isLeadModalOpen = true;
    fullRender();
  });

  projectCallCardEl?.addEventListener("click", (event) => {
    const unitChip = event.target.closest("[data-call-unit-id]");
    if (!unitChip) return;
    state.selectedUnitId = unitChip.getAttribute("data-call-unit-id");
    state.isProjectPanelOpen = true;
    renderProjectPanel();
  });

  tabUnitsEl?.addEventListener("click", (event) => {
    const row = event.target.closest("[data-unit-id]");
    if (!row) return;
    state.selectedUnitId = row.getAttribute("data-unit-id");
    state.isProjectPanelOpen = true;
    renderProjectPanel();
  });

  projectPanelBodyEl?.addEventListener("click", (event) => {
    const leadBtn = event.target.closest("[data-open-lead-id]");
    if (leadBtn) {
      state.selectedLeadId = leadBtn.getAttribute("data-open-lead-id");
      state.isLeadModalOpen = true;
      fullRender();
      return;
    }
    const unitBtn = event.target.closest("[data-panel-unit-id]");
    if (unitBtn) {
      state.selectedUnitId = unitBtn.getAttribute("data-panel-unit-id");
      renderProjectPanel();
    }
  });

  leadModalBodyEl?.addEventListener("input", (event) => {
    const profileField = event.target.getAttribute("data-profile-field");
    if (profileField) {
      updateLeadField(state.selectedLeadId, (lead) => {
        setNestedField(lead.profile, profileField, event.target.value);
      });
      renderCustomerDetail();
      renderPipeline();
      renderDashboard();
      return;
    }

    const protocolField = event.target.getAttribute("data-protocol-field");
    if (protocolField) {
      updateLeadField(state.selectedLeadId, (lead) => {
        lead.callProtocol[protocolField] = event.target.value;
        if (protocolField === "nextStep") lead.nextStep = event.target.value || lead.nextStep;
        if (protocolField === "nextStepDate") lead.nextStepDate = event.target.value || lead.nextStepDate;
      });
      renderPipeline();
      renderDashboard();
      return;
    }

    const financeIndex = event.target.getAttribute("data-finance-index");
    const financeField = event.target.getAttribute("data-finance-field");
    if (financeIndex !== null && financeField) {
      updateLeadField(state.selectedLeadId, (lead) => {
        const step = lead.financingTracker[Number(financeIndex)];
        if (!step) return;
        if (financeField === "completed") {
          step.completed = event.target.checked;
          if (event.target.checked && !step.date) step.date = todayIso();
        } else {
          step[financeField] = event.target.value;
        }
      });
      renderLeadModal();
      renderDashboard();
    }
  });

  leadModalBodyEl?.addEventListener("change", (event) => {
    const checkId = event.target.getAttribute("data-check-id");
    if (!checkId) return;
    updateLeadField(state.selectedLeadId, (lead) => {
      lead.checklist[checkId] = event.target.checked;
    });
    renderLeadModal();
  });

  leadModalBodyEl?.addEventListener("click", (event) => {
    const ratingBtn = event.target.closest("[data-rating]");
    if (!ratingBtn) return;
    const rating = Number(ratingBtn.getAttribute("data-rating"));
    updateLeadField(state.selectedLeadId, (lead) => {
      lead.callProtocol.rating = rating;
    });
    renderLeadModal();
  });

  projectPanelCloseEl?.addEventListener("click", () => {
    state.isProjectPanelOpen = false;
    renderProjectPanel();
  });

  leadModalCloseEl?.addEventListener("click", () => {
    state.isLeadModalOpen = false;
    renderLeadModal();
  });

  projectPanelEl?.addEventListener("click", (event) => {
    if (event.target === projectPanelEl) {
      state.isProjectPanelOpen = false;
      renderProjectPanel();
    }
  });

  leadModalEl?.addEventListener("click", (event) => {
    if (event.target === leadModalEl) {
      state.isLeadModalOpen = false;
      renderLeadModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (state.isLeadModalOpen) {
      state.isLeadModalOpen = false;
      renderLeadModal();
    }
    if (state.isProjectPanelOpen) {
      state.isProjectPanelOpen = false;
      renderProjectPanel();
    }
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.getAttribute("data-tab"));
    });
  });

  [sizeMinEl, sizeMaxEl, priceMaxEl, afaTypeEl].forEach((input) => {
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

  ["#calcPrice", "#calcEquity", "#calcSize", "#calcRentPsm", "#calcInterest", "#calcRepayment", "#calcMaintenance"].forEach(
    (selector) => {
      document.querySelector(selector)?.addEventListener("input", updateCalculator);
    },
  );

  langDeBtn?.addEventListener("click", () => {
    state.calcLanguage = "de";
    applyCalculatorLanguage();
    renderProjectDetail();
    saveToStorage();
  });

  langEnBtn?.addEventListener("click", () => {
    state.calcLanguage = "en";
    applyCalculatorLanguage();
    renderProjectDetail();
    saveToStorage();
  });
}

function fullRender() {
  const projectStillVisible = filteredProjects().some((project) => project.id === state.selectedProjectId);
  if (!projectStillVisible) {
    state.selectedProjectId = filteredProjects()[0]?.id || projects[0].id;
  }
  const leads = allLeads();
  if (!leads.some((lead) => lead.leadId === state.selectedLeadId)) {
    state.selectedLeadId = leads[0]?.leadId || null;
  }

  updateHeaderKpis();
  renderDashboard();
  renderObjectionLibrary();
  renderProjectList();
  renderPipeline();
  renderCustomerDetail();
  renderProjectDetail();
  renderMap();
  renderProjectPanel();
  renderLeadModal();
  applyCalculatorLanguage();
  primeCalculator(getProjectById(state.selectedProjectId));
}

function init() {
  loadFromStorage();
  normalizeData();
  saveToStorage();
  initMap();
  bindEvents();
  fullRender();
}

init();
