export type CookingMethod = 'fornelli' | 'friggitrice' | 'microonde' | 'nessuna' | 'forno';

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Macros {
  kcal: number;
  proteine: number;
  carboidrati: number;
  grassi: number;
}

export interface Meal {
  id: string;
  tipo: 'colazione' | 'pranzo' | 'spuntino' | 'cena';
  nome: string;
  emoji: string;
  ingredienti: Ingredient[];
  metodo: CookingMethod;
  tempoPreparazione: number; // minuti
  macros: Macros;
  note?: string;
  ricetta: string[]; // Array of step-by-step instructions, brief and clear
}

export interface Badge {
  id: string;
  nome: string;
  emoji: string;
  descrizione: string;
  condizione: 'giorni_consecutivi' | 'pasti_completati' | 'settimane_complete' | 'lista_spesa' | 'speciale';
  valore: number; // threshold to unlock
  sbloccato?: boolean;
}

export interface UserProgress {
  giorniCompletati: number;
  pastiCompletati: number;
  settimaneComplete: number;
  listeSpesaComplete: number;
  giorniConsecutivi: number;
  ultimoGiorno: string; // YYYY-MM-DD
  badgeSbloccati: string[]; // badge IDs
}

export interface DayPlan {
  weekDay: number; // 0=lunedi, 6=domenica
  weekNumber: number; // 1-4
  isCheatDay?: boolean;
  isPizzaDay?: boolean;
  colazione: Meal;
  pranzo: Meal;
  spuntino: Meal;
  cena: Meal;
  costoStimato: number; // euro
}

export interface WeekPlan {
  settimana: number; // 1-4
  giorni: DayPlan[];
}

export interface ShoppingItem {
  name: string;
  categoria: 'Proteine' | 'Carboidrati' | 'Verdure' | 'Latticini' | 'Altro';
  quantita: string;
  costoStimato: number;
}
