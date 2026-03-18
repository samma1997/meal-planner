import { DayPlan, Macros, Meal, ShoppingItem } from './types';
import { weekPlans, colazioni, pranzi, spuntini, cene, allMeals } from './meals';

/**
 * Given a JS Date, returns which of the 4 plan-weeks (1-4) to use.
 * The cycle starts from a known Monday (2024-01-01 is a Monday).
 */
export function getWeekNumberForDate(date: Date): number {
  const epoch = new Date('2024-01-01'); // Known Monday
  const msPerDay = 86400000;
  const daysDiff = Math.floor((date.getTime() - epoch.getTime()) / msPerDay);
  const weeksDiff = Math.floor(daysDiff / 7);
  return ((weeksDiff % 4) + 4) % 4 + 1; // 1-4
}

/**
 * Given a JS Date, returns the day-of-week index (0=Lunedi, 6=Domenica).
 */
export function getDayOfWeek(date: Date): number {
  const jsDay = date.getDay(); // 0=Sunday in JS
  return jsDay === 0 ? 6 : jsDay - 1; // Convert to 0=Monday
}

/**
 * Given a JS Date, returns the DayPlan for that date.
 */
export function getDayPlan(date: Date): DayPlan {
  const weekNum = getWeekNumberForDate(date);
  const dayOfWeek = getDayOfWeek(date);
  const week = weekPlans.find(w => w.settimana === weekNum);
  if (!week) return weekPlans[0].giorni[0];
  const day = week.giorni.find(d => d.weekDay === dayOfWeek);
  return day || week.giorni[0];
}

/**
 * Returns the current week plan for a given date's week.
 */
export function getWeekPlan(date: Date) {
  const weekNum = getWeekNumberForDate(date);
  return weekPlans.find(w => w.settimana === weekNum) || weekPlans[0];
}

/**
 * Returns the Monday of the week containing the given date.
 */
export function getMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Formats a date as YYYY-MM-DD (local timezone).
 */
export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Parses a YYYY-MM-DD string to a local Date object.
 */
export function parseDateKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Sum macros from an array of DayPlans.
 */
export function sumMacros(plans: DayPlan[]): Macros {
  return plans.reduce(
    (acc, day) => {
      const meals = [day.colazione, day.pranzo, day.spuntino, day.cena];
      meals.forEach(meal => {
        acc.kcal += meal.macros.kcal;
        acc.proteine += meal.macros.proteine;
        acc.carboidrati += meal.macros.carboidrati;
        acc.grassi += meal.macros.grassi;
      });
      return acc;
    },
    { kcal: 0, proteine: 0, carboidrati: 0, grassi: 0 }
  );
}

/**
 * Calculates total macros for a single day plan.
 */
export function getDayMacros(plan: DayPlan): Macros {
  const meals = [plan.colazione, plan.pranzo, plan.spuntino, plan.cena];
  return meals.reduce(
    (acc, meal) => ({
      kcal: acc.kcal + meal.macros.kcal,
      proteine: acc.proteine + meal.macros.proteine,
      carboidrati: acc.carboidrati + meal.macros.carboidrati,
      grassi: acc.grassi + meal.macros.grassi,
    }),
    { kcal: 0, proteine: 0, carboidrati: 0, grassi: 0 }
  );
}

/**
 * Italian day names (short).
 */
export const GIORNI_SETTIMANA = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
export const GIORNI_SETTIMANA_FULL = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

/**
 * Italian month names.
 */
export const MESI = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
];

/**
 * Format date in Italian: "Lunedì 15 Marzo 2024"
 */
export function formatDateItalian(date: Date): string {
  const dayName = GIORNI_SETTIMANA_FULL[getDayOfWeek(date)];
  const day = date.getDate();
  const month = MESI[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName} ${day} ${month} ${year}`;
}

/**
 * Generates a shopping list for a given week plan.
 */
export function generateShoppingList(weekPlanGiorni: DayPlan[]): ShoppingItem[] {
  const items: Record<string, ShoppingItem> = {};

  const addItem = (name: string, categoria: ShoppingItem['categoria'], quantita: string, costo: number) => {
    if (items[name]) {
      items[name].costoStimato += costo;
    } else {
      items[name] = { name, categoria, quantita, costoStimato: costo };
    }
  };

  weekPlanGiorni.forEach(day => {
    [day.colazione, day.pranzo, day.spuntino, day.cena].forEach(meal => {
      meal.ingredienti.forEach(ing => {
        const lower = ing.name.toLowerCase();
        let cat: ShoppingItem['categoria'] = 'Altro';
        let costo = 0.5;

        if (lower.includes('pollo') || lower.includes('tacchino') || lower.includes('salmone') ||
            lower.includes('tonno') || lower.includes('uova') || lower.includes('albumi')) {
          cat = 'Proteine'; costo = 1.2;
        } else if (lower.includes('riso') || lower.includes('pasta') || lower.includes('gnocchi') ||
                   lower.includes('pane') || lower.includes('avena') || lower.includes('farro')) {
          cat = 'Carboidrati'; costo = 0.4;
        } else if (lower.includes('zucch') || lower.includes('brocco') || lower.includes('pepper') ||
                   lower.includes('fagiol') || lower.includes('spinaci') || lower.includes('insalata') ||
                   lower.includes('pomodor') || lower.includes('peperone')) {
          cat = 'Verdure'; costo = 0.5;
        } else if (lower.includes('yogurt') || lower.includes('latte') || lower.includes('ricotta') ||
                   lower.includes('parmigiano')) {
          cat = 'Latticini'; costo = 0.7;
        }

        addItem(ing.name, cat, ing.quantity, costo);
      });
    });
  });

  return Object.values(items).sort((a, b) => a.categoria.localeCompare(b.categoria));
}

export const TARGET_MACROS: Macros = {
  kcal: 2400,
  proteine: 150,
  carboidrati: 280,
  grassi: 65,
};

// ─── SWAP HELPERS ─────────────────────────────────────────────────────────────

const SWAPS_KEY = 'meal-swaps';

function getMealArrayForType(tipo: Meal['tipo']): Meal[] {
  switch (tipo) {
    case 'colazione': return colazioni;
    case 'pranzo':    return pranzi;
    case 'spuntino':  return spuntini;
    case 'cena':      return cene;
  }
}

/**
 * Returns a random alternative meal of the same type, different from currentMeal.
 */
export function getAlternativeMeal(currentMeal: Meal): Meal {
  const pool = getMealArrayForType(currentMeal.tipo).filter(m => m.id !== currentMeal.id);
  if (pool.length === 0) return currentMeal;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Saves a meal swap to localStorage.
 * key format: "YYYY-MM-DD:mealType" → mealId
 */
export function saveSwap(dateKey: string, mealType: string, mealId: string): void {
  if (typeof window === 'undefined') return;
  const raw = localStorage.getItem(SWAPS_KEY);
  const swaps: Record<string, string> = raw ? JSON.parse(raw) : {};
  swaps[`${dateKey}:${mealType}`] = mealId;
  localStorage.setItem(SWAPS_KEY, JSON.stringify(swaps));
}

/**
 * Retrieves a saved swap meal ID for a date + meal type, or null if none.
 */
export function getSwap(dateKey: string, mealType: string): string | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(SWAPS_KEY);
  if (!raw) return null;
  const swaps: Record<string, string> = JSON.parse(raw);
  return swaps[`${dateKey}:${mealType}`] ?? null;
}

/**
 * Returns the DayPlan for a date with any localStorage swaps applied.
 */
export function getEffectiveDayPlan(date: Date): DayPlan {
  const base = getDayPlan(date);
  const dateKey = formatDateKey(date);

  const resolve = (meal: Meal): Meal => {
    const swappedId = getSwap(dateKey, meal.tipo);
    if (!swappedId) return meal;
    const found = allMeals.find(m => m.id === swappedId);
    return found ?? meal;
  };

  return {
    ...base,
    colazione: resolve(base.colazione),
    pranzo:    resolve(base.pranzo),
    spuntino:  resolve(base.spuntino),
    cena:      resolve(base.cena),
  };
}

// ─── FRIDGE MATCHING ──────────────────────────────────────────────────────────

// Condiments that are always assumed to be available — excluded from match checks
const ALWAYS_AVAILABLE = [
  'passata di pomodoro', 'pesto', 'olio evo', 'olio', 'sale',
  'curcuma', 'miele', 'cannella', 'acqua',
];

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function isCondiment(ingredientName: string): boolean {
  const n = normalize(ingredientName);
  return ALWAYS_AVAILABLE.some(c => n.includes(c));
}

/**
 * Given a list of selected ingredient names, returns exact and near-match meals
 * from the full swappable meal pool.
 */
export function findMatchingMeals(selectedIngredients: string[]): {
  exact: Meal[];
  nearMatch: { meal: Meal; missing: string[] }[];
} {
  const normalizedSelected = selectedIngredients.map(normalize);

  const hasIngredient = (name: string): boolean => {
    const n = normalize(name);
    // Check if it's a condiment (always available)
    if (isCondiment(n)) return true;
    // Fuzzy match: selected ingredient contains the name or vice-versa
    return normalizedSelected.some(sel => sel.includes(n) || n.includes(sel));
  };

  const exact: Meal[] = [];
  const nearMatch: { meal: Meal; missing: string[] }[] = [];

  for (const meal of allMeals) {
    const requiredIngredients = meal.ingredienti.filter(ing => !isCondiment(ing.name));
    const missing = requiredIngredients
      .filter(ing => !hasIngredient(ing.name))
      .map(ing => ing.name);

    if (missing.length === 0) {
      exact.push(meal);
    } else if (missing.length === 1) {
      nearMatch.push({ meal, missing });
    }
  }

  return { exact, nearMatch };
}
