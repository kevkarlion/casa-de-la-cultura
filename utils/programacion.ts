import type { Event } from "@/utils/eventsComplet.mock";

// Normaliza hora a formato HH:MM (con ceros adelante)
export function normalizeTime(time: string | undefined): string {
  if (!time) return "00:00";
  const [hours, minutes] = time.split(":");
  return `${hours.padStart(2, "0")}:${(minutes || "0").padStart(2, "0")}`;
}

// Fecha de hoy en formato YYYY-MM-DD (hora local, sin desfasaje de zona)
export function todayStr(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Suma/resta días a una fecha YYYY-MM-DD (parsing numérico local, evita UTC)
export function addDays(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// Ordena cronológicamente: fecha, luego hora, luego con ticketera primero
export function sortEvents(events: Event[]): Event[] {
  return [...events].sort((a, b) => {
    const dateA = a.date ?? a.startDate ?? "";
    const dateB = b.date ?? b.startDate ?? "";
    if (dateA !== dateB) return dateA.localeCompare(dateB);
    const timeA = normalizeTime(a.time);
    const timeB = normalizeTime(b.time);
    if (timeA !== timeB) return timeA.localeCompare(timeB);
    return Number(Boolean(b.ticketeraUrl)) - Number(Boolean(a.ticketeraUrl));
  });
}

// Visible hoy: el evento no terminó aún (futuros y en curso); los pasados se excluyen
export function isVisibleToday(e: Event, today: string): boolean {
  const end = e.endDate ?? e.date ?? "";
  return end >= today;
}

// Intercepta si el intervalo [start, end] del evento cruza [from, to]; to null = abierto
export function inRange(e: Event, from: string, to: string | null): boolean {
  const start = e.date ?? e.startDate ?? "";
  const end = e.endDate ?? e.date ?? "";
  if (to !== null && start > to) return false;
  return end >= from;
}

// Normalizador canónico de disciplinas para los tags observados en el mock
export const DISCIPLINES: Record<string, string> = {
  // Música
  Música: "Música",
  Tango: "Música",
  Rock: "Música",
  Jazz: "Música",
  Clásica: "Música",
  Concierto: "Música",
  Tributo: "Música",
  Cosplay: "Música",
  Karaoke: "Música",
  Indie: "Música",
  Gaming: "Música",
  // Teatro
  Teatro: "Teatro",
  Escénicas: "Teatro",
  "Teatro Musical": "Teatro",
  "Teatro de Marionetas": "Teatro",
  // Cine
  Cine: "Cine",
  Cineclub: "Cine",
  Proyección: "Cine",
  // Humor
  Humor: "Humor",
  "Stand Up": "Humor",
  Show: "Humor",
  // Infancias
  Infancias: "Infancias",
  Títeres: "Infancias",
  Circo: "Infancias",
  Clown: "Infancias",
  // Danza
  Danza: "Danza",
  Muestra: "Danza",
  // Folklore
  Folklore: "Folklore",
  Peña: "Folklore",
  // Taller
  Taller: "Taller",
  Arteterapia: "Taller",
  // Gastronomía
  Gastronomía: "Gastronomía",
  "Noche Temática": "Gastronomía",
  Degustación: "Gastronomía",
  Cocktails: "Gastronomía",
  // Deportes
  Deportes: "Deportes",
  "Pantalla gigante": "Deportes",
  Baile: "Deportes",
  // Bienestar y salud
  Bienestar: "Bienestar",
  Salud: "Bienestar",
  Yoga: "Bienestar",
  // Familia
  Familia: "Familia",
  Crianza: "Familia",
  Lactancia: "Familia",
  // Arte
  Arte: "Arte",
  Exposición: "Arte",
  Pintura: "Arte",
  // Literatura
  Literatura: "Literatura",
  Poesía: "Literatura",
  // Otros (identidad)
  Charla: "Charla",
  Comunidad: "Comunidad",
  Feria: "Feria",
  Solidario: "Solidario",
};

// Disciplinas únicas y no vacías de un evento; tags sin mapear caen a sí mismos
export function eventDisciplines(e: Event): string[] {
  const result = new Set<string>();
  for (const tag of e.tags ?? []) {
    if (!tag) continue;
    result.add(DISCIPLINES[tag] ?? tag);
  }
  return Array.from(result);
}

// Filtro por rango temporal: "all" sin filtro; "week" = próximos 7 días; "month" = próximos 30 días
export function applyRangeFilter(
  events: Event[],
  range: "all" | "week" | "month",
  today: string,
): Event[] {
  if (range === "all") return events;
  if (range === "week") {
    return events.filter((e) => inRange(e, today, addDays(today, 7)));
  }
  return events.filter((e) => inRange(e, today, addDays(today, 30)));
}

// Héroe: primer evento ordenado con ticketera y fecha de inicio dentro de los próximos 7 días
export function pickHero(events: Event[]): { hero: Event; rest: Event[] } {
  if (events.length === 0) {
    return { hero: events[0], rest: [] };
  }
  const horizon = addDays(todayStr(), 7);
  const heroIndex = events.findIndex(
    (e) => Boolean(e.ticketeraUrl) && (e.date ?? e.startDate ?? "") <= horizon,
  );
  const hero = heroIndex === -1 ? events[0] : events[heroIndex];
  const rest = events.filter((e) => e !== hero);
  return { hero, rest };
}

// "YYYY-MM" desde una fecha "YYYY-MM-DD"
export function monthKey(dateStr: string): string {
  return dateStr.slice(0, 7);
}

// Suma/resta meses a un "YYYY-MM" (parsing numérico local, evita UTC)
function shiftMonth(month: string, delta: number): string {
  const [year, m] = month.split("-").map(Number);
  const date = new Date(year, m - 1 + delta, 1);
  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, "0");
  return `${y}-${mo}`;
}

export function nextMonth(month: string): string {
  return shiftMonth(month, 1);
}

export function prevMonth(month: string): string {
  return shiftMonth(month, -1);
}

// True si el intervalo del evento [start, end] intersecta el mes.
// Eventos multi-día que cruzan el borde del mes matchean AMBOS meses.
export function inMonth(e: Event, month: string): boolean {
  const [year, m] = month.split("-").map(Number);
  const from = `${month}-01`;
  const lastDay = new Date(year, m, 0).getDate();
  const to = `${month}-${String(lastDay).padStart(2, "0")}`;
  return inRange(e, from, to);
}

// Etiqueta es-AR, p. ej. "Octubre 2026" (fecha local, sin desfasaje de zona)
export function monthLabel(month: string): string {
  const [year, m] = month.split("-").map(Number);
  const date = new Date(year, m - 1, 1);
  const label = new Intl.DateTimeFormat("es-AR", {
    month: "long",
    year: "numeric",
  }).format(date);
  const clean = label.replace(" de ", " ");
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

// Meses ascendentes y únicos que contienen eventos (cada evento aporta el mes
// de la fecha y el del fin si difiere: un evento 30/10..02/11 aporta "2026-10"
// y "2026-11").
export function monthsWithEvents(events: Event[]): string[] {
  const keys = new Set<string>();
  for (const e of events) {
    const start = e.date ?? e.startDate;
    const end = e.endDate ?? e.date;
    if (start) keys.add(monthKey(start));
    if (end && monthKey(end) !== monthKey(start ?? "")) keys.add(monthKey(end));
  }
  return Array.from(keys).sort();
}

// Agrupa en Esta semana / Próximamente / Más adelante (partición disjunta:
// cada evento cae en exactamente UN grupo, el primero cuyo rango toca).
export function groupEvents(
  events: Event[],
  today: string,
): { key: string; label: string; events: Event[] }[] {
  const weekEnd = addDays(today, 7);
  const monthEnd = addDays(today, 30);

  const matches = (e: Event, from: string, to: string | null): boolean => {
    const start = e.date ?? e.startDate ?? "";
    const end = e.endDate ?? e.date ?? "";
    if (to !== null && start >= to) return false; // right-exclusive: evita duplicados en el borde
    return end >= from;
  };

  const buckets = [
    { key: "week", label: "Esta semana", from: today, to: weekEnd },
    { key: "soon", label: "Próximamente", from: weekEnd, to: monthEnd },
    { key: "later", label: "Más adelante", from: monthEnd, to: null },
  ];

  const assigned = new Set<Event>();
  const groups: { key: string; label: string; events: Event[] }[] = [];
  for (const bucket of buckets) {
    const bucketEvents = events.filter(
      (e) => !assigned.has(e) && matches(e, bucket.from, bucket.to),
    );
    bucketEvents.forEach((e) => assigned.add(e));
    if (bucketEvents.length > 0) {
      groups.push({ key: bucket.key, label: bucket.label, events: bucketEvents });
    }
  }
  return groups;
}