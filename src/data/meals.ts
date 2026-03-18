import { Meal, DayPlan, WeekPlan } from './types';

// ─── COLAZIONI ────────────────────────────────────────────────────────────────

const colazioni: Meal[] = [
  {
    id: 'col-1',
    tipo: 'colazione',
    nome: 'Porridge con banana e miele',
    emoji: '🥣',
    ingredienti: [
      { name: 'Fiocchi d\'avena', quantity: '60g' },
      { name: 'Latte parzialmente scremato', quantity: '200ml' },
      { name: 'Banana', quantity: '1 media (120g)' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
      { name: 'Burro d\'arachidi', quantity: '10g' },
    ],
    metodo: 'microonde',
    tempoPreparazione: 5,
    macros: { kcal: 415, proteine: 14, carboidrati: 62, grassi: 11 },
  },
  {
    id: 'col-2',
    tipo: 'colazione',
    nome: 'Yogurt greco con avena e banana',
    emoji: '🥛',
    ingredienti: [
      { name: 'Yogurt greco 0%', quantity: '200g' },
      { name: 'Fiocchi d\'avena', quantity: '40g' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
      { name: 'Banana', quantity: '1 piccola (100g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 400, proteine: 27, carboidrati: 55, grassi: 6 },
  },
  {
    id: 'col-3',
    tipo: 'colazione',
    nome: 'Pane tostato con frittata e frutta',
    emoji: '🍳',
    ingredienti: [
      { name: 'Pane integrale', quantity: '2 fette (60g)' },
      { name: 'Uova intere', quantity: '1 uovo' },
      { name: 'Albumi', quantity: '2 albumi (60g)' },
      { name: 'Mela', quantity: '1 media (150g)' },
      { name: 'Sale e pepe', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 10,
    macros: { kcal: 390, proteine: 26, carboidrati: 50, grassi: 9 },
  },
  {
    id: 'col-4',
    tipo: 'colazione',
    nome: 'Overnight oats con mela',
    emoji: '🥣',
    ingredienti: [
      { name: 'Fiocchi d\'avena', quantity: '60g' },
      { name: 'Yogurt greco 0%', quantity: '150g' },
      { name: 'Latte parzialmente scremato', quantity: '100ml' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
      { name: 'Mela', quantity: '½ media (75g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 5,
    macros: { kcal: 405, proteine: 22, carboidrati: 58, grassi: 7 },
    note: 'Preparare la sera prima in frigo',
  },
  {
    id: 'col-5',
    tipo: 'colazione',
    nome: 'Pancake proteici con banana',
    emoji: '🥞',
    ingredienti: [
      { name: 'Fiocchi d\'avena frullati', quantity: '50g' },
      { name: 'Uova intere', quantity: '1 uovo' },
      { name: 'Albumi', quantity: '2 albumi (60g)' },
      { name: 'Banana matura schiacciata', quantity: '1 piccola (100g)' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 410, proteine: 26, carboidrati: 55, grassi: 10 },
    note: 'Friggitrice ad aria a 180°C per 8 minuti',
  },
  {
    id: 'col-6',
    tipo: 'colazione',
    nome: 'Pane integrale con ricotta e miele',
    emoji: '🍞',
    ingredienti: [
      { name: 'Pane integrale', quantity: '2 fette (60g)' },
      { name: 'Ricotta light', quantity: '100g' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
      { name: 'Noci', quantity: '15g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 5,
    macros: { kcal: 395, proteine: 20, carboidrati: 45, grassi: 14 },
  },
  {
    id: 'col-7',
    tipo: 'colazione',
    nome: 'Smoothie proteico al cacao',
    emoji: '🥤',
    ingredienti: [
      { name: 'Latte parzialmente scremato', quantity: '250ml' },
      { name: 'Banana', quantity: '1 media (120g)' },
      { name: 'Fiocchi d\'avena', quantity: '40g' },
      { name: 'Burro d\'arachidi', quantity: '10g' },
      { name: 'Cacao amaro in polvere', quantity: '1 cucchiaino (5g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 5,
    macros: { kcal: 420, proteine: 16, carboidrati: 58, grassi: 12 },
    note: 'Frullare tutto con un frullatore a immersione',
  },
];

// ─── PRANZI ───────────────────────────────────────────────────────────────────

const pranzi: Meal[] = [
  {
    id: 'pra-1',
    tipo: 'pranzo',
    nome: 'Riso con pollo e zucchine grigliate',
    emoji: '🍗',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Petto di pollo', quantity: '150g' },
      { name: 'Zucchine', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, pepe, aglio', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 745, proteine: 47, carboidrati: 82, grassi: 17 },
    note: 'Riso sul fornello, pollo e zucchine in friggitrice. Riscaldare al microonde.',
  },
  {
    id: 'pra-2',
    tipo: 'pranzo',
    nome: 'Pasta con ragù di tacchino e broccoli',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta (penne o rigatoni)', quantity: '80g (cruda)' },
      { name: 'Macinato di tacchino', quantity: '130g' },
      { name: 'Passata di pomodoro', quantity: '150ml' },
      { name: 'Broccoli', quantity: '150g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Cipolla, aglio, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 760, proteine: 46, carboidrati: 88, grassi: 18 },
    note: 'Ragù preparabile in anticipo. Riscaldare al microonde.',
  },
  {
    id: 'pra-3',
    tipo: 'pranzo',
    nome: 'Gnocchi con sugo e pollo a cubetti',
    emoji: '🥟',
    ingredienti: [
      { name: 'Gnocchi di patate', quantity: '200g' },
      { name: 'Petto di pollo a dadini', quantity: '120g' },
      { name: 'Passata di pomodoro', quantity: '150ml' },
      { name: 'Basilico fresco', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, pepe', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 44, carboidrati: 90, grassi: 17 },
    note: 'Riscaldare al microonde con un cucchiaio d\'acqua.',
  },
  {
    id: 'pra-4',
    tipo: 'pranzo',
    nome: 'Riso con salmone e fagiolini',
    emoji: '🐟',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Filetto di salmone', quantity: '150g' },
      { name: 'Fagiolini', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Limone, sale, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 755, proteine: 48, carboidrati: 80, grassi: 21 },
    note: 'Salmone e fagiolini in friggitrice a 180°C. Riscaldare al microonde.',
  },
  {
    id: 'pra-5',
    tipo: 'pranzo',
    nome: 'Pasta integrale con tonno e pomodorini',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta integrale', quantity: '80g (cruda)' },
      { name: 'Tonno al naturale', quantity: '160g (2 scatolette)' },
      { name: 'Pomodorini', quantity: '150g' },
      { name: 'Olive nere snocciolate', quantity: '20g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Basilico, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 15,
    macros: { kcal: 740, proteine: 46, carboidrati: 84, grassi: 18 },
    note: 'Si può mangiare anche a temperatura ambiente.',
  },
  {
    id: 'pra-6',
    tipo: 'pranzo',
    nome: 'Riso con polpette di tacchino e peperoni',
    emoji: '🧆',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Macinato di tacchino', quantity: '140g' },
      { name: 'Peperoni gialli e rossi', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Aglio, prezzemolo, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 745, proteine: 45, carboidrati: 85, grassi: 17 },
    note: 'Polpette in friggitrice a 190°C per 12 minuti. Riscaldare al microonde.',
  },
  {
    id: 'pra-7',
    tipo: 'pranzo',
    nome: 'Pasta con frittata sbriciolata e spinaci',
    emoji: '🍳',
    ingredienti: [
      { name: 'Pasta (spaghetti o fusilli)', quantity: '80g (cruda)' },
      { name: 'Uova intere', quantity: '2 uova' },
      { name: 'Spinaci freschi', quantity: '150g' },
      { name: 'Parmigiano grattugiato', quantity: '15g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, pepe, noce moscata', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 755, proteine: 35, carboidrati: 88, grassi: 22 },
    note: 'Riscaldare al microonde aggiungendo un cucchiaio d\'acqua.',
  },
  {
    id: 'pra-8',
    tipo: 'pranzo',
    nome: 'Gnocchi al pesto con pollo grigliato',
    emoji: '🥟',
    ingredienti: [
      { name: 'Gnocchi di patate', quantity: '200g' },
      { name: 'Petto di pollo', quantity: '130g' },
      { name: 'Pesto leggero (basilico, noci, parmigiano)', quantity: '25g' },
      { name: 'Parmigiano grattugiato', quantity: '10g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 20,
    macros: { kcal: 760, proteine: 46, carboidrati: 88, grassi: 22 },
    note: 'Pollo in friggitrice. Gnocchi bolliti e conditi freddi. Riscaldare al microonde.',
  },
  {
    id: 'pra-9',
    tipo: 'pranzo',
    nome: 'Riso con uova strapazzate e verdure miste',
    emoji: '🍚',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Uova intere', quantity: '1 uovo' },
      { name: 'Albumi', quantity: '3 albumi (90g)' },
      { name: 'Peperoni misti', quantity: '100g' },
      { name: 'Zucchine', quantity: '100g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, curcuma, pepe', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 35, carboidrati: 88, grassi: 18 },
    note: 'Tutto in padella antiaderente. Riscaldare al microonde.',
  },
  {
    id: 'pra-10',
    tipo: 'pranzo',
    nome: 'Pasta integrale con salmone e zucchine',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta integrale (farfalle o penne)', quantity: '80g (cruda)' },
      { name: 'Filetto di salmone', quantity: '130g' },
      { name: 'Zucchine', quantity: '150g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Succo di limone, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 44, carboidrati: 84, grassi: 22 },
    note: 'Salmone rosolato in padella con zucchine. Riscaldare al microonde.',
  },
];

// ─── SPUNTINI ─────────────────────────────────────────────────────────────────

const spuntini: Meal[] = [
  {
    id: 'spu-1',
    tipo: 'spuntino',
    nome: 'Yogurt greco con mandorle',
    emoji: '🥛',
    ingredienti: [
      { name: 'Yogurt greco 0%', quantity: '200g' },
      { name: 'Mandorle', quantity: '15g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 240, proteine: 24, carboidrati: 9, grassi: 10 },
  },
  {
    id: 'spu-2',
    tipo: 'spuntino',
    nome: 'Pane integrale con tonno',
    emoji: '🥪',
    ingredienti: [
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
      { name: 'Tonno al naturale', quantity: '80g (1 scatoletta)' },
      { name: 'Pomodoro a fette', quantity: '½ pomodoro' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 250, proteine: 26, carboidrati: 22, grassi: 5 },
  },
  {
    id: 'spu-3',
    tipo: 'spuntino',
    nome: 'Banana con burro d\'arachidi',
    emoji: '🍌',
    ingredienti: [
      { name: 'Banana', quantity: '1 media (120g)' },
      { name: 'Burro d\'arachidi', quantity: '15g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 255, proteine: 6, carboidrati: 36, grassi: 9 },
  },
  {
    id: 'spu-4',
    tipo: 'spuntino',
    nome: 'Yogurt greco con miele e avena',
    emoji: '🥛',
    ingredienti: [
      { name: 'Yogurt greco 0%', quantity: '170g' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
      { name: 'Fiocchi d\'avena', quantity: '20g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 250, proteine: 20, carboidrati: 30, grassi: 4 },
  },
  {
    id: 'spu-5',
    tipo: 'spuntino',
    nome: 'Frullato banana e avena',
    emoji: '🥤',
    ingredienti: [
      { name: 'Latte parzialmente scremato', quantity: '200ml' },
      { name: 'Banana', quantity: '1 piccola (100g)' },
      { name: 'Fiocchi d\'avena', quantity: '30g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 260, proteine: 11, carboidrati: 43, grassi: 5 },
    note: 'Frullare tutto con un frullatore a immersione.',
  },
  {
    id: 'spu-6',
    tipo: 'spuntino',
    nome: 'Mela con mandorle',
    emoji: '🍎',
    ingredienti: [
      { name: 'Mela', quantity: '1 media (150g)' },
      { name: 'Mandorle', quantity: '20g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 1,
    macros: { kcal: 245, proteine: 5, carboidrati: 28, grassi: 12 },
  },
  {
    id: 'spu-7',
    tipo: 'spuntino',
    nome: 'Uova sode',
    emoji: '🥚',
    ingredienti: [
      { name: 'Uova', quantity: '2 uova grandi' },
      { name: 'Sale e pepe', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 12,
    macros: { kcal: 155, proteine: 13, carboidrati: 1, grassi: 11 },
    note: 'Bollire per 9 minuti per uova sode. Preparabili in anticipo.',
  },
];

// ─── CENE ─────────────────────────────────────────────────────────────────────

const cene: Meal[] = [
  {
    id: 'cen-1',
    tipo: 'cena',
    nome: 'Pasta tonno e pomodorini freschi',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta (spaghetti o linguine)', quantity: '80g (cruda)' },
      { name: 'Tonno al naturale', quantity: '160g (2 scatolette)' },
      { name: 'Pomodorini ciliegino', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Aglio, basilico fresco', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 710, proteine: 50, carboidrati: 83, grassi: 17 },
  },
  {
    id: 'cen-2',
    tipo: 'cena',
    nome: 'Salmone in friggitrice con insalata e pane',
    emoji: '🐟',
    ingredienti: [
      { name: 'Filetto di salmone', quantity: '180g' },
      { name: 'Insalata mista', quantity: '150g' },
      { name: 'Pomodorini', quantity: '100g' },
      { name: 'Pane integrale', quantity: '50g (1-2 fette)' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Limone, sale, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 20,
    macros: { kcal: 700, proteine: 50, carboidrati: 38, grassi: 34 },
    note: 'Salmone in friggitrice a 180°C per 12 minuti.',
  },
  {
    id: 'cen-3',
    tipo: 'cena',
    nome: 'Petto di pollo con patate a spicchi e insalata',
    emoji: '🍗',
    ingredienti: [
      { name: 'Petto di pollo', quantity: '200g' },
      { name: 'Patate', quantity: '250g' },
      { name: 'Insalata mista', quantity: '100g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Rosmarino, aglio, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 30,
    macros: { kcal: 695, proteine: 52, carboidrati: 68, grassi: 18 },
    note: 'Pollo e patate in friggitrice a 190°C. Patate 20 min, pollo 18 min.',
  },
  {
    id: 'cen-4',
    tipo: 'cena',
    nome: 'Gnocchi con ragù di tacchino',
    emoji: '🥟',
    ingredienti: [
      { name: 'Gnocchi di patate', quantity: '200g' },
      { name: 'Macinato di tacchino', quantity: '150g' },
      { name: 'Passata di pomodoro', quantity: '150ml' },
      { name: 'Cipolla, aglio, sedano', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Vino bianco, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 30,
    macros: { kcal: 720, proteine: 48, carboidrati: 92, grassi: 18 },
  },
  {
    id: 'cen-5',
    tipo: 'cena',
    nome: 'Frittata con patate in friggitrice e insalata',
    emoji: '🍳',
    ingredienti: [
      { name: 'Uova intere', quantity: '2 uova' },
      { name: 'Albumi', quantity: '3 albumi (90g)' },
      { name: 'Patate', quantity: '200g' },
      { name: 'Insalata mista', quantity: '100g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, pepe, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 680, proteine: 40, carboidrati: 64, grassi: 25 },
    note: 'Patate a cubetti in friggitrice per 15 min. Frittata in friggitrice a 180°C per 8 min.',
  },
  {
    id: 'cen-6',
    tipo: 'cena',
    nome: 'Pasta integrale con pollo e broccoli',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta integrale (penne)', quantity: '80g (cruda)' },
      { name: 'Petto di pollo a dadini', quantity: '160g' },
      { name: 'Broccoli', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Aglio, peperoncino, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 720, proteine: 52, carboidrati: 84, grassi: 18 },
  },
  {
    id: 'cen-7',
    tipo: 'cena',
    nome: 'Riso con salmone e verdure cotte',
    emoji: '🐟',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Filetto di salmone', quantity: '150g' },
      { name: 'Zucchine', quantity: '100g' },
      { name: 'Fagiolini', quantity: '100g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Limone, erbe fresche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 700, proteine: 46, carboidrati: 82, grassi: 20 },
    note: 'Salmone e verdure in friggitrice a 180°C.',
  },
  {
    id: 'cen-8',
    tipo: 'cena',
    nome: 'Pasta con sugo fresco e polpette di tacchino',
    emoji: '🧆',
    ingredienti: [
      { name: 'Pasta (rigatoni)', quantity: '80g (cruda)' },
      { name: 'Macinato di tacchino', quantity: '150g' },
      { name: 'Pomodori pelati', quantity: '200g' },
      { name: 'Cipolla, aglio, basilico', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Prezzemolo, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 715, proteine: 50, carboidrati: 85, grassi: 18 },
    note: 'Polpette di tacchino in friggitrice a 190°C per 10 minuti. Sugo in padella.',
  },
];

// ─── PASTI SPECIALI ───────────────────────────────────────────────────────────

const colazioneCheat: Meal = {
  id: 'col-cheat',
  tipo: 'colazione',
  nome: 'Pancake con Nutella e banana',
  emoji: '🥞',
  ingredienti: [
    { name: 'Farina 00 o mix per pancake', quantity: '150g' },
    { name: 'Uova', quantity: '1 uovo' },
    { name: 'Latte', quantity: '150ml' },
    { name: 'Nutella', quantity: '30g' },
    { name: 'Banana', quantity: '1 media (120g)' },
    { name: 'Burro per la padella', quantity: 'q.b.' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 620, proteine: 15, carboidrati: 92, grassi: 22 },
  note: 'Giorno libero — goditi ogni boccone!',
};

const pranzoCheatOptions: Meal[] = [
  {
    id: 'pra-cheat-1',
    tipo: 'pranzo',
    nome: 'Pasta alla Carbonara',
    emoji: '🍝',
    ingredienti: [
      { name: 'Spaghetti', quantity: '100g' },
      { name: 'Guanciale', quantity: '80g' },
      { name: 'Uova (tuorli)', quantity: '2 tuorli + 1 intero' },
      { name: 'Pecorino romano grattugiato', quantity: '40g' },
      { name: 'Pepe nero', quantity: 'abbondante' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 780, proteine: 38, carboidrati: 80, grassi: 32 },
    note: 'Sabato — giorno libero!',
  },
  {
    id: 'pra-cheat-2',
    tipo: 'pranzo',
    nome: 'Pasta all\'Amatriciana',
    emoji: '🍝',
    ingredienti: [
      { name: 'Bucatini o rigatoni', quantity: '100g' },
      { name: 'Guanciale', quantity: '80g' },
      { name: 'Pomodori pelati', quantity: '200g' },
      { name: 'Pecorino romano', quantity: '30g' },
      { name: 'Peperoncino', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 740, proteine: 30, carboidrati: 84, grassi: 28 },
    note: 'Sabato — giorno libero!',
  },
  {
    id: 'pra-cheat-3',
    tipo: 'pranzo',
    nome: 'Lasagna al ragù',
    emoji: '🍝',
    ingredienti: [
      { name: 'Lasagne pronte o surgelate', quantity: '350g (porzione)' },
      { name: 'Parmigiano grattugiato extra', quantity: '20g' },
    ],
    metodo: 'forno',
    tempoPreparazione: 40,
    macros: { kcal: 800, proteine: 35, carboidrati: 78, grassi: 35 },
    note: 'Sabato — giorno libero!',
  },
];

const spuntinoCheat: Meal = {
  id: 'spu-cheat',
  tipo: 'spuntino',
  nome: 'Spuntino libero',
  emoji: '🍫',
  ingredienti: [
    { name: 'A scelta libera', quantity: 'q.b.' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 0,
  macros: { kcal: 300, proteine: 5, carboidrati: 40, grassi: 12 },
  note: 'Giorno libero — mangia quello che ti va!',
};

const cenaCheatOptions: Meal[] = [
  {
    id: 'cen-cheat-1',
    tipo: 'cena',
    nome: 'Hamburger gourmet',
    emoji: '🍔',
    ingredienti: [
      { name: 'Panino brioche per burger', quantity: '1 (80g)' },
      { name: 'Hamburger di manzo 200g', quantity: '1 burger' },
      { name: 'Cheddar', quantity: '1 fetta (20g)' },
      { name: 'Lattuga, pomodoro, cipolla', quantity: 'q.b.' },
      { name: 'Salse a piacere', quantity: 'q.b.' },
      { name: 'Patatine fritte', quantity: '150g' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 900, proteine: 45, carboidrati: 85, grassi: 40 },
    note: 'Sabato — goditi la serata!',
  },
  {
    id: 'cen-cheat-2',
    tipo: 'cena',
    nome: 'Sushi all-you-can-eat',
    emoji: '🍣',
    ingredienti: [
      { name: 'Sushi misto (nigiri, maki, roll)', quantity: 'porzione da ristorante' },
      { name: 'Edamame', quantity: 'q.b.' },
      { name: 'Salsa di soia', quantity: 'q.b.' },
      { name: 'Wasabi, zenzero', quantity: 'q.b.' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 0,
    macros: { kcal: 850, proteine: 40, carboidrati: 110, grassi: 20 },
    note: 'Sabato — fuori a cena!',
  },
  {
    id: 'cen-cheat-3',
    tipo: 'cena',
    nome: 'Kebab con patatine',
    emoji: '🥙',
    ingredienti: [
      { name: 'Pane pita', quantity: '1 grande (80g)' },
      { name: 'Carne di kebab mista', quantity: '200g' },
      { name: 'Insalata, pomodoro, cipolla', quantity: 'q.b.' },
      { name: 'Salse (tzatziki, piccante)', quantity: 'q.b.' },
      { name: 'Patatine fritte', quantity: '150g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 0,
    macros: { kcal: 950, proteine: 42, carboidrati: 95, grassi: 42 },
    note: 'Sabato — goditi la cena fuori!',
  },
];

const pranzoLeggero: Meal = {
  id: 'pra-domenica',
  tipo: 'pranzo',
  nome: 'Riso leggero con pollo e verdure',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '70g (crudo)' },
    { name: 'Petto di pollo', quantity: '130g' },
    { name: 'Verdure miste (zucchine, broccoli)', quantity: '200g' },
    { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
    { name: 'Sale, erbe aromatiche', quantity: 'q.b.' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 25,
  macros: { kcal: 580, proteine: 42, carboidrati: 70, grassi: 12 },
  note: 'Pranzo leggero prima della pizza della sera.',
};

const cenaPizza: Meal = {
  id: 'cen-pizza',
  tipo: 'cena',
  nome: 'Pizza (tradizione domenicale!)',
  emoji: '🍕',
  ingredienti: [
    { name: 'Pizza Margherita o a scelta', quantity: '1 pizza intera (300-350g)' },
    { name: 'Mozzarella fior di latte', quantity: 'inclusa' },
    { name: 'Pomodoro San Marzano', quantity: 'incluso' },
    { name: 'Basilico fresco', quantity: 'q.b.' },
    { name: 'Olio EVO a crudo', quantity: 'q.b.' },
  ],
  metodo: 'forno',
  tempoPreparazione: 60,
  macros: { kcal: 850, proteine: 35, carboidrati: 110, grassi: 30 },
  note: 'La domenica è sacra — sempre pizza! Ordina o fai in casa.',
};

// ─── COSTRUZIONE DELLE 4 SETTIMANE ───────────────────────────────────────────

// Helper function to create standard weekday plans
function createWeekdays(
  week: number,
  colazioniOrder: number[],
  pranziOrder: number[],
  spuntiniOrder: number[],
  ceneOrder: number[],
  costiGiorni: number[]
): DayPlan[] {
  return [0, 1, 2, 3, 4].map((dayIdx): DayPlan => ({
    weekDay: dayIdx,
    weekNumber: week,
    colazione: colazioni[colazioniOrder[dayIdx] - 1],
    pranzo: pranzi[pranziOrder[dayIdx] - 1],
    spuntino: spuntini[spuntiniOrder[dayIdx] - 1],
    cena: cene[ceneOrder[dayIdx] - 1],
    costoStimato: costiGiorni[dayIdx],
  }));
}

// ─── SETTIMANA 1 ──────────────────────────────────────────────────────────────

const settimana1: WeekPlan = {
  settimana: 1,
  giorni: [
    // Lunedì
    {
      weekDay: 0, weekNumber: 1,
      colazione: colazioni[0], // Porridge banana miele
      pranzo: pranzi[0],       // Riso pollo zucchine
      spuntino: spuntini[0],   // Yogurt mandorle
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 9.5,
    },
    // Martedì
    {
      weekDay: 1, weekNumber: 1,
      colazione: colazioni[1], // Yogurt greco banana
      pranzo: pranzi[1],       // Pasta ragù tacchino
      spuntino: spuntini[1],   // Pane tonno
      cena: cene[1],           // Salmone friggitrice insalata
      costoStimato: 11.0,
    },
    // Mercoledì
    {
      weekDay: 2, weekNumber: 1,
      colazione: colazioni[2], // Pane frittata frutta
      pranzo: pranzi[2],       // Gnocchi sugo pollo
      spuntino: spuntini[2],   // Banana burro arachidi
      cena: cene[2],           // Pollo patate insalata
      costoStimato: 10.5,
    },
    // Giovedì
    {
      weekDay: 3, weekNumber: 1,
      colazione: colazioni[3], // Overnight oats mela
      pranzo: pranzi[3],       // Riso salmone fagiolini
      spuntino: spuntini[3],   // Yogurt miele avena
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 12.0,
    },
    // Venerdì
    {
      weekDay: 4, weekNumber: 1,
      colazione: colazioni[4], // Pancake proteici
      pranzo: pranzi[4],       // Pasta integrale tonno olive
      spuntino: spuntini[4],   // Frullato banana avena
      cena: cene[4],           // Frittata patate insalata
      costoStimato: 9.0,
    },
    // Sabato – Cheat Day
    {
      weekDay: 5, weekNumber: 1,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[0],   // Carbonara
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[0],       // Hamburger
      costoStimato: 18.0,
    },
    // Domenica – Pizza
    {
      weekDay: 6, weekNumber: 1,
      isPizzaDay: true,
      colazione: colazioni[5], // Pane ricotta miele
      pranzo: pranzoLeggero,
      spuntino: spuntini[5],   // Mela mandorle
      cena: cenaPizza,
      costoStimato: 13.5,
    },
  ],
};

// ─── SETTIMANA 2 ──────────────────────────────────────────────────────────────

const settimana2: WeekPlan = {
  settimana: 2,
  giorni: [
    // Lunedì
    {
      weekDay: 0, weekNumber: 2,
      colazione: colazioni[5], // Pane ricotta miele
      pranzo: pranzi[5],       // Riso polpette tacchino peperoni
      spuntino: spuntini[5],   // Mela mandorle
      cena: cene[5],           // Pasta integrale pollo broccoli
      costoStimato: 10.0,
    },
    // Martedì
    {
      weekDay: 1, weekNumber: 2,
      colazione: colazioni[6], // Smoothie cacao
      pranzo: pranzi[6],       // Pasta frittata sbriciolata spinaci
      spuntino: spuntini[6],   // Uova sode
      cena: cene[6],           // Riso salmone verdure cotte
      costoStimato: 11.5,
    },
    // Mercoledì
    {
      weekDay: 2, weekNumber: 2,
      colazione: colazioni[0], // Porridge banana miele
      pranzo: pranzi[7],       // Gnocchi pesto pollo grigliato
      spuntino: spuntini[0],   // Yogurt mandorle
      cena: cene[7],           // Pasta polpette tacchino sugo fresco
      costoStimato: 11.0,
    },
    // Giovedì
    {
      weekDay: 3, weekNumber: 2,
      colazione: colazioni[1], // Yogurt greco banana
      pranzo: pranzi[8],       // Riso uova strapazzate verdure
      spuntino: spuntini[1],   // Pane tonno
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 9.5,
    },
    // Venerdì
    {
      weekDay: 4, weekNumber: 2,
      colazione: colazioni[2], // Pane frittata frutta
      pranzo: pranzi[9],       // Pasta integrale salmone zucchine
      spuntino: spuntini[2],   // Banana burro arachidi
      cena: cene[1],           // Salmone friggitrice insalata
      costoStimato: 12.5,
    },
    // Sabato – Cheat Day
    {
      weekDay: 5, weekNumber: 2,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[1],   // Amatriciana
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[1],       // Sushi
      costoStimato: 20.0,
    },
    // Domenica – Pizza
    {
      weekDay: 6, weekNumber: 2,
      isPizzaDay: true,
      colazione: colazioni[3], // Overnight oats mela
      pranzo: pranzoLeggero,
      spuntino: spuntini[3],   // Yogurt miele avena
      cena: cenaPizza,
      costoStimato: 13.0,
    },
  ],
};

// ─── SETTIMANA 3 ──────────────────────────────────────────────────────────────

const settimana3: WeekPlan = {
  settimana: 3,
  giorni: [
    // Lunedì
    {
      weekDay: 0, weekNumber: 3,
      colazione: colazioni[3], // Overnight oats mela
      pranzo: pranzi[2],       // Gnocchi sugo pollo
      spuntino: spuntini[4],   // Frullato banana avena
      cena: cene[2],           // Pollo patate insalata
      costoStimato: 10.5,
    },
    // Martedì
    {
      weekDay: 1, weekNumber: 3,
      colazione: colazioni[4], // Pancake proteici
      pranzo: pranzi[0],       // Riso pollo zucchine
      spuntino: spuntini[6],   // Uova sode
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 10.0,
    },
    // Mercoledì
    {
      weekDay: 2, weekNumber: 3,
      colazione: colazioni[6], // Smoothie cacao
      pranzo: pranzi[4],       // Pasta integrale tonno olive
      spuntino: spuntini[5],   // Mela mandorle
      cena: cene[4],           // Frittata patate insalata
      costoStimato: 8.5,
    },
    // Giovedì
    {
      weekDay: 3, weekNumber: 3,
      colazione: colazioni[0], // Porridge banana miele
      pranzo: pranzi[3],       // Riso salmone fagiolini
      spuntino: spuntini[0],   // Yogurt mandorle
      cena: cene[5],           // Pasta integrale pollo broccoli
      costoStimato: 11.5,
    },
    // Venerdì
    {
      weekDay: 4, weekNumber: 3,
      colazione: colazioni[1], // Yogurt greco banana
      pranzo: pranzi[6],       // Pasta frittata sbriciolata spinaci
      spuntino: spuntini[3],   // Yogurt miele avena
      cena: cene[6],           // Riso salmone verdure cotte
      costoStimato: 11.0,
    },
    // Sabato – Cheat Day
    {
      weekDay: 5, weekNumber: 3,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[2],   // Lasagna
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[2],       // Kebab
      costoStimato: 17.5,
    },
    // Domenica – Pizza
    {
      weekDay: 6, weekNumber: 3,
      isPizzaDay: true,
      colazione: colazioni[2], // Pane frittata frutta
      pranzo: pranzoLeggero,
      spuntino: spuntini[2],   // Banana burro arachidi
      cena: cenaPizza,
      costoStimato: 13.0,
    },
  ],
};

// ─── SETTIMANA 4 ──────────────────────────────────────────────────────────────

const settimana4: WeekPlan = {
  settimana: 4,
  giorni: [
    // Lunedì
    {
      weekDay: 0, weekNumber: 4,
      colazione: colazioni[5], // Pane ricotta miele
      pranzo: pranzi[9],       // Pasta integrale salmone zucchine
      spuntino: spuntini[2],   // Banana burro arachidi
      cena: cene[7],           // Pasta polpette tacchino sugo fresco
      costoStimato: 11.5,
    },
    // Martedì
    {
      weekDay: 1, weekNumber: 4,
      colazione: colazioni[6], // Smoothie cacao
      pranzo: pranzi[5],       // Riso polpette tacchino peperoni
      spuntino: spuntini[0],   // Yogurt mandorle
      cena: cene[1],           // Salmone friggitrice insalata
      costoStimato: 12.0,
    },
    // Mercoledì
    {
      weekDay: 2, weekNumber: 4,
      colazione: colazioni[4], // Pancake proteici
      pranzo: pranzi[1],       // Pasta ragù tacchino broccoli
      spuntino: spuntini[4],   // Frullato banana avena
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 9.0,
    },
    // Giovedì
    {
      weekDay: 3, weekNumber: 4,
      colazione: colazioni[2], // Pane frittata frutta
      pranzo: pranzi[8],       // Riso uova strapazzate verdure
      spuntino: spuntini[1],   // Pane tonno
      cena: cene[5],           // Pasta integrale pollo broccoli
      costoStimato: 9.5,
    },
    // Venerdì
    {
      weekDay: 4, weekNumber: 4,
      colazione: colazioni[0], // Porridge banana miele
      pranzo: pranzi[7],       // Gnocchi pesto pollo grigliato
      spuntino: spuntini[6],   // Uova sode
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 10.5,
    },
    // Sabato – Cheat Day
    {
      weekDay: 5, weekNumber: 4,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[0],   // Carbonara
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[0],       // Hamburger
      costoStimato: 19.0,
    },
    // Domenica – Pizza
    {
      weekDay: 6, weekNumber: 4,
      isPizzaDay: true,
      colazione: colazioni[1], // Yogurt greco banana
      pranzo: pranzoLeggero,
      spuntino: spuntini[5],   // Mela mandorle
      cena: cenaPizza,
      costoStimato: 13.5,
    },
  ],
};

export const weeklyPlans: WeekPlan[] = [settimana1, settimana2, settimana3, settimana4];

export { colazioni, pranzi, spuntini, cene, colazioneCheat, pranzoCheatOptions, spuntinoCheat, cenaCheatOptions, pranzoLeggero, cenaPizza };
