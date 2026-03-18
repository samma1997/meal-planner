import { Meal, DayPlan, WeekPlan } from './types';

// ─── COLAZIONI ────────────────────────────────────────────────────────────────

const col1: Meal = {
  id: 'col-1',
  tipo: 'colazione',
  nome: 'Pancake di albumi + crema proteica + frutti di bosco',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Crema proteica', quantity: '1 cucchiaio (20g)' },
    { name: 'Frutti di bosco', quantity: '80g' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 350, proteine: 28, carboidrati: 40, grassi: 8 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la crema proteica e i frutti di bosco sopra e servi',
  ],
};

const col2: Meal = {
  id: 'col-2',
  tipo: 'colazione',
  nome: 'Pancake di albumi + miele + banana a fette',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Miele', quantity: '1 cucchiaino (15g)' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 355, proteine: 26, carboidrati: 48, grassi: 6 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la banana a fette e il miele sopra e servi',
  ],
};

const col3: Meal = {
  id: 'col-3',
  tipo: 'colazione',
  nome: 'Pancake di albumi + crema proteica + banana',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Crema proteica', quantity: '1 cucchiaio (20g)' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 355, proteine: 29, carboidrati: 42, grassi: 8 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la crema proteica e la banana a fette sopra e servi',
  ],
};

const col4: Meal = {
  id: 'col-4',
  tipo: 'colazione',
  nome: 'Pancake di albumi + miele + frutti di bosco',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Miele', quantity: '1 cucchiaino (15g)' },
    { name: 'Frutti di bosco', quantity: '80g' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 345, proteine: 26, carboidrati: 45, grassi: 6 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi i frutti di bosco e il miele sopra e servi',
  ],
};

const col5: Meal = {
  id: 'col-5',
  tipo: 'colazione',
  nome: 'Pancake di albumi + burro d\'arachidi + banana',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Burro d\'arachidi', quantity: '15g' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 370, proteine: 28, carboidrati: 42, grassi: 11 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi il burro d\'arachidi e la banana a fette sopra e servi',
  ],
};

const col6: Meal = {
  id: 'col-6',
  tipo: 'colazione',
  nome: 'Pancake di albumi + crema proteica + frutti di bosco + miele',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Crema proteica', quantity: '1 cucchiaio (20g)' },
    { name: 'Frutti di bosco', quantity: '80g' },
    { name: 'Miele', quantity: '1 cucchiaino (10g)' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 360, proteine: 29, carboidrati: 43, grassi: 8 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la crema proteica, i frutti di bosco e il miele sopra e servi',
  ],
};

const col7: Meal = {
  id: 'col-7',
  tipo: 'colazione',
  nome: 'Pancake di albumi + miele + banana + cannella',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Miele', quantity: '1 cucchiaino (15g)' },
    { name: 'Banana', quantity: '1' },
    { name: 'Cannella', quantity: 'un pizzico' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 350, proteine: 26, carboidrati: 47, grassi: 6 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la banana a fette, il miele e un pizzico di cannella sopra e servi',
  ],
};

const colCheat: Meal = {
  id: 'col-cheat',
  tipo: 'colazione',
  nome: 'Pancake di albumi + Nutella + banana',
  emoji: '🥞',
  ingredienti: [
    { name: 'Albumi', quantity: '3' },
    { name: 'Farina d\'avena', quantity: '50g' },
    { name: 'Nutella', quantity: '20g' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 10,
  macros: { kcal: 420, proteine: 26, carboidrati: 58, grassi: 12 },
  ricetta: [
    'Mescola 3 albumi con 50g di farina d\'avena',
    'Cuoci in padella antiaderente o friggitrice ad aria 180°C per 5 minuti per lato',
    'Aggiungi la Nutella e la banana a fette sopra e servi',
  ],
};

// ─── PRANZI ───────────────────────────────────────────────────────────────────

const pran1: Meal = {
  id: 'pran-1',
  tipo: 'pranzo',
  nome: 'Pasta al pomodoro + Pollo alla piastra + Zucchine',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Zucchine surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 580, proteine: 48, carboidrati: 70, grassi: 10 },
  ricetta: [
    'Cuoci la pasta e condisci con la passata di pomodoro',
    'Cuoci il petto di pollo in friggitrice ad aria 180°C per 12 min',
    'Scalda le zucchine surgelate in padella per 5 min',
  ],
};

const pran2: Meal = {
  id: 'pran-2',
  tipo: 'pranzo',
  nome: 'Riso in bianco + Tonno + Piselli',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Tonno in scatola', quantity: '120g' },
    { name: 'Piselli surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 15,
  macros: { kcal: 560, proteine: 45, carboidrati: 72, grassi: 8 },
  ricetta: [
    'Cuoci il riso in acqua bollente per 12 min',
    'Scola il tonno dalla scatola',
    'Scalda i piselli surgelati in padella per 5 min',
  ],
};

const pran3: Meal = {
  id: 'pran-3',
  tipo: 'pranzo',
  nome: 'Pasta al pesto + Pollo alla piastra + Insalata',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Pesto', quantity: '1 cucchiaio' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Insalata mista', quantity: 'q.b.' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 600, proteine: 48, carboidrati: 68, grassi: 14 },
  ricetta: [
    'Cuoci la pasta e condisci con il pesto',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Condisci l\'insalata con un filo d\'olio',
  ],
};

const pran4: Meal = {
  id: 'pran-4',
  tipo: 'pranzo',
  nome: 'Riso giallo + Verdure miste + Pollo',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Curcuma', quantity: 'un pizzico' },
    { name: 'Verdure miste surgelate', quantity: '150g' },
    { name: 'Petto di pollo', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 570, proteine: 47, carboidrati: 70, grassi: 10 },
  ricetta: [
    'Cuoci il riso con un pizzico di curcuma',
    'Scalda le verdure surgelate in padella per 5 min',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
  ],
};

const pran5: Meal = {
  id: 'pran-5',
  tipo: 'pranzo',
  nome: 'Gnocchi al pomodoro + Fesa di tacchino + Fagiolini',
  emoji: '🥟',
  ingredienti: [
    { name: 'Gnocchi', quantity: '200g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Fesa di tacchino (affettato)', quantity: '100g' },
    { name: 'Fagiolini surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 15,
  macros: { kcal: 560, proteine: 40, carboidrati: 78, grassi: 9 },
  ricetta: [
    'Cuoci gli gnocchi e condisci con la passata di pomodoro',
    'La fesa di tacchino è già pronta, servila così',
    'Scalda i fagiolini surgelati in padella per 5 min',
  ],
};

const pran6: Meal = {
  id: 'pran-6',
  tipo: 'pranzo',
  nome: 'Pasta al pomodoro + Tonno + Broccoli',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Tonno in scatola', quantity: '120g' },
    { name: 'Broccoli surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 555, proteine: 44, carboidrati: 72, grassi: 8 },
  ricetta: [
    'Cuoci la pasta e condisci con la passata di pomodoro',
    'Scola il tonno dalla scatola',
    'Scalda i broccoli surgelati in padella per 5 min',
  ],
};

const pran7: Meal = {
  id: 'pran-7',
  tipo: 'pranzo',
  nome: 'Riso in bianco + Salmone + Zucchine',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Salmone', quantity: '150g' },
    { name: 'Zucchine surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 590, proteine: 46, carboidrati: 68, grassi: 14 },
  ricetta: [
    'Cuoci il riso in acqua bollente per 12 min',
    'Cuoci il salmone in friggitrice ad aria 180°C per 10 min',
    'Scalda le zucchine surgelate in padella per 5 min',
  ],
};

const pran8: Meal = {
  id: 'pran-8',
  tipo: 'pranzo',
  nome: 'Pasta al pesto + Uova strapazzate + Piselli',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Pesto', quantity: '1 cucchiaio' },
    { name: 'Uova', quantity: '2 + 1 albume' },
    { name: 'Piselli surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 15,
  macros: { kcal: 580, proteine: 38, carboidrati: 70, grassi: 16 },
  ricetta: [
    'Cuoci la pasta e condisci con il pesto',
    'Strapazza le uova in padella antiaderente per 3 min',
    'Scalda i piselli surgelati in padella per 5 min',
  ],
};

const pran9: Meal = {
  id: 'pran-9',
  tipo: 'pranzo',
  nome: 'Gnocchi al pesto + Pollo alla piastra + Verdure miste',
  emoji: '🥟',
  ingredienti: [
    { name: 'Gnocchi', quantity: '200g' },
    { name: 'Pesto', quantity: '1 cucchiaio' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Verdure miste surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 600, proteine: 48, carboidrati: 76, grassi: 14 },
  ricetta: [
    'Cuoci gli gnocchi e condisci con il pesto',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Scalda le verdure surgelate in padella per 5 min',
  ],
};

const pran10: Meal = {
  id: 'pran-10',
  tipo: 'pranzo',
  nome: 'Pasta al pomodoro + Salmone + Fagiolini',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Salmone', quantity: '150g' },
    { name: 'Fagiolini surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 595, proteine: 46, carboidrati: 70, grassi: 14 },
  ricetta: [
    'Cuoci la pasta e condisci con la passata di pomodoro',
    'Cuoci il salmone in friggitrice ad aria 180°C per 10 min',
    'Scalda i fagiolini surgelati in padella per 5 min',
  ],
};

const pranCheat: Meal = {
  id: 'pran-cheat',
  tipo: 'pranzo',
  nome: 'Carbonara / Amatriciana / Lasagna',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta o lasagna (già pronta o da fare)', quantity: '1 porzione' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 850, proteine: 35, carboidrati: 95, grassi: 35 },
  ricetta: [
    'Prepara o scalda il piatto che preferisci',
    'Servi e goditi il giorno libero',
  ],
};

const pranSunday: Meal = {
  id: 'pran-sunday',
  tipo: 'pranzo',
  nome: 'Riso in bianco + Pollo + Verdure miste',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Verdure miste surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 570, proteine: 47, carboidrati: 68, grassi: 10 },
  ricetta: [
    'Cuoci il riso in acqua bollente per 12 min',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Scalda le verdure surgelate in padella per 5 min',
  ],
};

// ─── SPUNTINI ─────────────────────────────────────────────────────────────────

const spun1: Meal = {
  id: 'spun-1',
  tipo: 'spuntino',
  nome: 'Banana + Proteine in polvere',
  emoji: '🍌',
  ingredienti: [
    { name: 'Banana', quantity: '1' },
    { name: 'Proteine in polvere', quantity: '30g' },
    { name: 'Acqua', quantity: '200ml' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 210, proteine: 26, carboidrati: 24, grassi: 3 },
  ricetta: [
    'Mescola le proteine in polvere con 200ml di acqua',
    'Sbuccia la banana e mangia insieme al frullato',
  ],
};

const spun2: Meal = {
  id: 'spun-2',
  tipo: 'spuntino',
  nome: 'Pane integrale + Fesa di tacchino',
  emoji: '🥪',
  ingredienti: [
    { name: 'Pane integrale', quantity: '2 fette' },
    { name: 'Fesa di tacchino', quantity: '60g' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 200, proteine: 18, carboidrati: 26, grassi: 3 },
  ricetta: [
    'Metti la fesa di tacchino tra le due fette di pane',
    'Servi così',
  ],
};

const spun3: Meal = {
  id: 'spun-3',
  tipo: 'spuntino',
  nome: 'Banana',
  emoji: '🍌',
  ingredienti: [
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 1,
  macros: { kcal: 100, proteine: 1, carboidrati: 25, grassi: 0 },
  ricetta: [
    'Sbuccia la banana e mangia',
  ],
};

const spun4: Meal = {
  id: 'spun-4',
  tipo: 'spuntino',
  nome: 'Pane integrale + Formaggio spalmabile',
  emoji: '🧀',
  ingredienti: [
    { name: 'Pane integrale', quantity: '1 fetta' },
    { name: 'Formaggio spalmabile light', quantity: '30g' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 175, proteine: 8, carboidrati: 20, grassi: 6 },
  ricetta: [
    'Spalma il formaggio sulla fetta di pane',
    'Servi così',
  ],
};

const spun5: Meal = {
  id: 'spun-5',
  tipo: 'spuntino',
  nome: 'Proteine in polvere + Banana',
  emoji: '🥤',
  ingredienti: [
    { name: 'Proteine in polvere', quantity: '30g' },
    { name: 'Acqua', quantity: '200ml' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 210, proteine: 26, carboidrati: 24, grassi: 3 },
  ricetta: [
    'Mescola le proteine in polvere con 200ml di acqua',
    'Sbuccia la banana e mangia insieme al frullato',
  ],
};

const spun6: Meal = {
  id: 'spun-6',
  tipo: 'spuntino',
  nome: 'Pane integrale + Tonno',
  emoji: '🥪',
  ingredienti: [
    { name: 'Pane integrale', quantity: '1 fetta' },
    { name: 'Tonno in scatola', quantity: '80g' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 190, proteine: 22, carboidrati: 18, grassi: 3 },
  ricetta: [
    'Scola il tonno dalla scatola',
    'Metti il tonno sulla fetta di pane e servi',
  ],
};

const spun7: Meal = {
  id: 'spun-7',
  tipo: 'spuntino',
  nome: 'Frutta mista',
  emoji: '🍎',
  ingredienti: [
    { name: 'Mela', quantity: '1' },
    { name: 'Banana', quantity: '1' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 2,
  macros: { kcal: 185, proteine: 2, carboidrati: 46, grassi: 1 },
  ricetta: [
    'Lava e taglia la mela',
    'Sbuccia la banana e mangia insieme alla mela',
  ],
};

const spunCheat: Meal = {
  id: 'spun-cheat',
  tipo: 'spuntino',
  nome: 'Spuntino libero',
  emoji: '🍿',
  ingredienti: [
    { name: 'Quello che preferisci', quantity: 'q.b.' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 5,
  macros: { kcal: 250, proteine: 5, carboidrati: 35, grassi: 10 },
  ricetta: [
    'Scegli quello che vuoi',
    'Goditi il giorno libero',
  ],
};

// ─── CENE ─────────────────────────────────────────────────────────────────────

const cena1: Meal = {
  id: 'cena-1',
  tipo: 'cena',
  nome: 'Pasta al pomodoro + Pollo alla piastra + Insalata',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Insalata mista', quantity: 'q.b.' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 575, proteine: 48, carboidrati: 68, grassi: 10 },
  ricetta: [
    'Cuoci la pasta e condisci con la passata di pomodoro',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Condisci l\'insalata con un filo d\'olio',
  ],
};

const cena2: Meal = {
  id: 'cena-2',
  tipo: 'cena',
  nome: 'Riso in bianco + Salmone + Piselli',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Salmone', quantity: '150g' },
    { name: 'Piselli surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 590, proteine: 46, carboidrati: 68, grassi: 14 },
  ricetta: [
    'Cuoci il riso in acqua bollente per 12 min',
    'Cuoci il salmone in friggitrice ad aria 180°C per 10 min',
    'Scalda i piselli surgelati in padella per 5 min',
  ],
};

const cena3: Meal = {
  id: 'cena-3',
  tipo: 'cena',
  nome: 'Pasta al pesto + Tonno + Zucchine',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Pesto', quantity: '1 cucchiaio' },
    { name: 'Tonno in scatola', quantity: '120g' },
    { name: 'Zucchine surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 580, proteine: 44, carboidrati: 68, grassi: 14 },
  ricetta: [
    'Cuoci la pasta e condisci con il pesto',
    'Scola il tonno dalla scatola',
    'Scalda le zucchine surgelate in padella per 5 min',
  ],
};

const cena4: Meal = {
  id: 'cena-4',
  tipo: 'cena',
  nome: 'Gnocchi al pomodoro + Pollo alla piastra + Fagiolini',
  emoji: '🥟',
  ingredienti: [
    { name: 'Gnocchi', quantity: '200g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Fagiolini surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 590, proteine: 48, carboidrati: 76, grassi: 10 },
  ricetta: [
    'Cuoci gli gnocchi e condisci con la passata di pomodoro',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Scalda i fagiolini surgelati in padella per 5 min',
  ],
};

const cena5: Meal = {
  id: 'cena-5',
  tipo: 'cena',
  nome: 'Riso giallo + Uova strapazzate + Verdure miste',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Curcuma', quantity: 'un pizzico' },
    { name: 'Uova', quantity: '2 + 1 albume' },
    { name: 'Verdure miste surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 15,
  macros: { kcal: 560, proteine: 32, carboidrati: 72, grassi: 14 },
  ricetta: [
    'Cuoci il riso con un pizzico di curcuma',
    'Strapazza le uova in padella antiaderente per 3 min',
    'Scalda le verdure surgelate in padella per 5 min',
  ],
};

const cena6: Meal = {
  id: 'cena-6',
  tipo: 'cena',
  nome: 'Pasta al pomodoro + Salmone + Broccoli',
  emoji: '🍝',
  ingredienti: [
    { name: 'Pasta', quantity: '80g' },
    { name: 'Passata di pomodoro', quantity: 'q.b.' },
    { name: 'Salmone', quantity: '150g' },
    { name: 'Broccoli surgelati', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 595, proteine: 46, carboidrati: 70, grassi: 14 },
  ricetta: [
    'Cuoci la pasta e condisci con la passata di pomodoro',
    'Cuoci il salmone in friggitrice ad aria 180°C per 10 min',
    'Scalda i broccoli surgelati in padella per 5 min',
  ],
};

const cena7: Meal = {
  id: 'cena-7',
  tipo: 'cena',
  nome: 'Riso in bianco + Pollo alla piastra + Zucchine',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '80g' },
    { name: 'Petto di pollo', quantity: '150g' },
    { name: 'Zucchine surgelate', quantity: '150g' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 565, proteine: 47, carboidrati: 68, grassi: 10 },
  ricetta: [
    'Cuoci il riso in acqua bollente per 12 min',
    'Cuoci il pollo in friggitrice ad aria 180°C per 12 min',
    'Scalda le zucchine surgelate in padella per 5 min',
  ],
};

const cena8: Meal = {
  id: 'cena-8',
  tipo: 'cena',
  nome: 'Gnocchi al pesto + Fesa di tacchino + Insalata',
  emoji: '🥟',
  ingredienti: [
    { name: 'Gnocchi', quantity: '200g' },
    { name: 'Pesto', quantity: '1 cucchiaio' },
    { name: 'Fesa di tacchino (affettato)', quantity: '100g' },
    { name: 'Insalata mista', quantity: 'q.b.' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 15,
  macros: { kcal: 570, proteine: 40, carboidrati: 76, grassi: 14 },
  ricetta: [
    'Cuoci gli gnocchi e condisci con il pesto',
    'La fesa di tacchino è già pronta, servila così',
    'Condisci l\'insalata con un filo d\'olio',
  ],
};

const cenaCheat: Meal = {
  id: 'cena-cheat',
  tipo: 'cena',
  nome: 'Hamburger / Sushi / Kebab',
  emoji: '🍔',
  ingredienti: [
    { name: 'Quello che preferisci', quantity: '1 porzione' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 0,
  macros: { kcal: 900, proteine: 40, carboidrati: 80, grassi: 40 },
  ricetta: [
    'Ordina o prepara quello che preferisci',
    'Goditi il giorno libero',
  ],
};

const cenaPizza: Meal = {
  id: 'cena-pizza',
  tipo: 'cena',
  nome: 'Pizza',
  emoji: '🍕',
  ingredienti: [
    { name: 'Pizza (da asporto o surgelata)', quantity: '1 porzione' },
  ],
  metodo: 'forno',
  tempoPreparazione: 20,
  macros: { kcal: 750, proteine: 28, carboidrati: 90, grassi: 28 },
  ricetta: [
    'Ordina la pizza o scalda quella surgelata in forno',
    'Servi e goditi la domenica',
  ],
};

// ─── WEEK PLANS ───────────────────────────────────────────────────────────────
// weekDay: 0=lunedi, 1=martedi, 2=mercoledi, 3=giovedi, 4=venerdi, 5=sabato(cheat), 6=domenica(pizza)

export const weekPlans: WeekPlan[] = [
  // ── SETTIMANA 1 ──────────────────────────────────────────────────────────────
  {
    settimana: 1,
    giorni: [
      {
        weekDay: 0,
        weekNumber: 1,
        colazione: col1,
        pranzo: pran1,
        spuntino: spun1,
        cena: cena2,
        costoStimato: 8,
      },
      {
        weekDay: 1,
        weekNumber: 1,
        colazione: col2,
        pranzo: pran3,
        spuntino: spun2,
        cena: cena5,
        costoStimato: 8,
      },
      {
        weekDay: 2,
        weekNumber: 1,
        colazione: col3,
        pranzo: pran6,
        spuntino: spun3,
        cena: cena4,
        costoStimato: 7,
      },
      {
        weekDay: 3,
        weekNumber: 1,
        colazione: col4,
        pranzo: pran2,
        spuntino: spun4,
        cena: cena6,
        costoStimato: 8,
      },
      {
        weekDay: 4,
        weekNumber: 1,
        colazione: col5,
        pranzo: pran8,
        spuntino: spun5,
        cena: cena3,
        costoStimato: 9,
      },
      {
        weekDay: 5,
        weekNumber: 1,
        isCheatDay: true,
        colazione: colCheat,
        pranzo: pranCheat,
        spuntino: spunCheat,
        cena: cenaCheat,
        costoStimato: 16,
      },
      {
        weekDay: 6,
        weekNumber: 1,
        isPizzaDay: true,
        colazione: col1,
        pranzo: pranSunday,
        spuntino: spun7,
        cena: cenaPizza,
        costoStimato: 12,
      },
    ],
  },

  // ── SETTIMANA 2 ──────────────────────────────────────────────────────────────
  {
    settimana: 2,
    giorni: [
      {
        weekDay: 0,
        weekNumber: 2,
        colazione: col6,
        pranzo: pran4,
        spuntino: spun6,
        cena: cena1,
        costoStimato: 8,
      },
      {
        weekDay: 1,
        weekNumber: 2,
        colazione: col7,
        pranzo: pran7,
        spuntino: spun1,
        cena: cena8,
        costoStimato: 9,
      },
      {
        weekDay: 2,
        weekNumber: 2,
        colazione: col2,
        pranzo: pran10,
        spuntino: spun2,
        cena: cena7,
        costoStimato: 9,
      },
      {
        weekDay: 3,
        weekNumber: 2,
        colazione: col3,
        pranzo: pran5,
        spuntino: spun3,
        cena: cena3,
        costoStimato: 7,
      },
      {
        weekDay: 4,
        weekNumber: 2,
        colazione: col4,
        pranzo: pran9,
        spuntino: spun4,
        cena: cena5,
        costoStimato: 8,
      },
      {
        weekDay: 5,
        weekNumber: 2,
        isCheatDay: true,
        colazione: colCheat,
        pranzo: pranCheat,
        spuntino: spunCheat,
        cena: cenaCheat,
        costoStimato: 16,
      },
      {
        weekDay: 6,
        weekNumber: 2,
        isPizzaDay: true,
        colazione: col5,
        pranzo: pranSunday,
        spuntino: spun7,
        cena: cenaPizza,
        costoStimato: 12,
      },
    ],
  },

  // ── SETTIMANA 3 ──────────────────────────────────────────────────────────────
  {
    settimana: 3,
    giorni: [
      {
        weekDay: 0,
        weekNumber: 3,
        colazione: col5,
        pranzo: pran2,
        spuntino: spun5,
        cena: cena4,
        costoStimato: 7,
      },
      {
        weekDay: 1,
        weekNumber: 3,
        colazione: col1,
        pranzo: pran6,
        spuntino: spun6,
        cena: cena7,
        costoStimato: 8,
      },
      {
        weekDay: 2,
        weekNumber: 3,
        colazione: col6,
        pranzo: pran3,
        spuntino: spun1,
        cena: cena2,
        costoStimato: 9,
      },
      {
        weekDay: 3,
        weekNumber: 3,
        colazione: col7,
        pranzo: pran9,
        spuntino: spun2,
        cena: cena6,
        costoStimato: 9,
      },
      {
        weekDay: 4,
        weekNumber: 3,
        colazione: col2,
        pranzo: pran5,
        spuntino: spun7,
        cena: cena1,
        costoStimato: 7,
      },
      {
        weekDay: 5,
        weekNumber: 3,
        isCheatDay: true,
        colazione: colCheat,
        pranzo: pranCheat,
        spuntino: spunCheat,
        cena: cenaCheat,
        costoStimato: 17,
      },
      {
        weekDay: 6,
        weekNumber: 3,
        isPizzaDay: true,
        colazione: col3,
        pranzo: pranSunday,
        spuntino: spun7,
        cena: cenaPizza,
        costoStimato: 11,
      },
    ],
  },

  // ── SETTIMANA 4 ──────────────────────────────────────────────────────────────
  {
    settimana: 4,
    giorni: [
      {
        weekDay: 0,
        weekNumber: 4,
        colazione: col3,
        pranzo: pran7,
        spuntino: spun3,
        cena: cena8,
        costoStimato: 9,
      },
      {
        weekDay: 1,
        weekNumber: 4,
        colazione: col4,
        pranzo: pran1,
        spuntino: spun4,
        cena: cena5,
        costoStimato: 8,
      },
      {
        weekDay: 2,
        weekNumber: 4,
        colazione: col7,
        pranzo: pran10,
        spuntino: spun5,
        cena: cena8,
        costoStimato: 9,
      },
      {
        weekDay: 3,
        weekNumber: 4,
        colazione: col1,
        pranzo: pran4,
        spuntino: spun6,
        cena: cena7,
        costoStimato: 8,
      },
      {
        weekDay: 4,
        weekNumber: 4,
        colazione: col6,
        pranzo: pran8,
        spuntino: spun1,
        cena: cena4,
        costoStimato: 8,
      },
      {
        weekDay: 5,
        weekNumber: 4,
        isCheatDay: true,
        colazione: colCheat,
        pranzo: pranCheat,
        spuntino: spunCheat,
        cena: cenaCheat,
        costoStimato: 15,
      },
      {
        weekDay: 6,
        weekNumber: 4,
        isPizzaDay: true,
        colazione: col2,
        pranzo: pranSunday,
        spuntino: spun7,
        cena: cenaPizza,
        costoStimato: 11,
      },
    ],
  },
];
