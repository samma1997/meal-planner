import { Meal, DayPlan, WeekPlan } from './types';

// ─── COLAZIONI ────────────────────────────────────────────────────────────────

const colazioni: Meal[] = [
  {
    id: 'col-1',
    tipo: 'colazione',
    nome: 'Pancake di albumi con banana e burro d\'arachidi',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Banana matura', quantity: '1 media (120g)' },
      { name: 'Burro d\'arachidi', quantity: '15g' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 375, proteine: 27, carboidrati: 50, grassi: 10 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Taglia la banana a rondelle',
      'Appoggia le rondelle di banana sui pancake caldi',
      'Aggiungi il burro d\'arachidi sopra e servi subito',
    ],
  },
  {
    id: 'col-2',
    tipo: 'colazione',
    nome: 'Pancake di albumi con fragole e miele',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Fragole', quantity: '150g' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 355, proteine: 25, carboidrati: 52, grassi: 5 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Lava le fragole e tagliale a metà o a fettine',
      'Distribuisci le fragole sui pancake caldi',
      'Versaci sopra il miele a filo e servi',
    ],
  },
  {
    id: 'col-3',
    tipo: 'colazione',
    nome: 'Pancake di albumi con mirtilli e crema di mandorle',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Mirtilli', quantity: '100g' },
      { name: 'Crema di mandorle', quantity: '15g' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 370, proteine: 26, carboidrati: 48, grassi: 9 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Lava i mirtilli e asciugali',
      'Distribuisci i mirtilli sopra i pancake caldi',
      'Aggiungi la crema di mandorle a cucchiaino sopra i mirtilli e servi',
    ],
  },
  {
    id: 'col-4',
    tipo: 'colazione',
    nome: 'Pancake di albumi con mela, cannella e miele',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Mela', quantity: '1 media (150g)' },
      { name: 'Cannella', quantity: '1 cucchiaino' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 360, proteine: 25, carboidrati: 53, grassi: 4 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Taglia la mela a fettine sottili (puoi lasciarle crude o scaldarle in padella 2 minuti)',
      'Disponi le fettine di mela sopra i pancake',
      'Spolverizza con la cannella e versaci il miele sopra a filo',
    ],
  },
  {
    id: 'col-5',
    tipo: 'colazione',
    nome: 'Pancake di albumi con banana, cacao e burro d\'arachidi',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Banana matura', quantity: '1 media (120g)' },
      { name: 'Cacao amaro in polvere', quantity: '1 cucchiaino (5g)' },
      { name: 'Burro d\'arachidi', quantity: '15g' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 385, proteine: 28, carboidrati: 50, grassi: 11 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena e 1 cucchiaino di cacao amaro fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Taglia la banana a rondelle',
      'Appoggia le rondelle di banana sui pancake al cacao',
      'Aggiungi il burro d\'arachidi sopra e servi subito',
    ],
  },
  {
    id: 'col-6',
    tipo: 'colazione',
    nome: 'Pancake di albumi con kiwi e miele',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Kiwi', quantity: '2 medi (160g)' },
      { name: 'Miele', quantity: '1 cucchiaino (10g)' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 350, proteine: 25, carboidrati: 51, grassi: 4 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Sbuccia i kiwi e tagliali a rondelle',
      'Disponi le rondelle di kiwi sopra i pancake caldi',
      'Versaci il miele sopra a filo e servi',
    ],
  },
  {
    id: 'col-7',
    tipo: 'colazione',
    nome: 'Pancake di albumi con pera, crema di nocciole e cannella',
    emoji: '🥞',
    ingredienti: [
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Farina d\'avena', quantity: '50g' },
      { name: 'Pera matura', quantity: '1 media (150g)' },
      { name: 'Crema di nocciole (poca)', quantity: '10g' },
      { name: 'Cannella', quantity: '½ cucchiaino' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 15,
    macros: { kcal: 365, proteine: 25, carboidrati: 52, grassi: 8 },
    ricetta: [
      'Mescola 3 albumi con 50g di farina d\'avena fino a ottenere una pastella liscia',
      'Cuoci in padella antiaderente senza olio (o friggitrice ad aria 180°C 5 min per lato)',
      'Taglia la pera a fettine sottili',
      'Disponi le fettine di pera sui pancake, spolverizza con la cannella',
      'Aggiungi la crema di nocciole a cucchiaino sopra e servi',
    ],
  },
];

// ─── PRANZI ───────────────────────────────────────────────────────────────────

const pranzi: Meal[] = [
  {
    id: 'pra-1',
    tipo: 'pranzo',
    nome: 'Riso basmati con petto di pollo e verdure miste surgelate',
    emoji: '🍗',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Petto di pollo a fette', quantity: '150g' },
      { name: 'Verdure miste surgelate', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Sale, pepe, aglio in polvere', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 750, proteine: 48, carboidrati: 82, grassi: 16 },
    note: 'Riso sul fornello, pollo in friggitrice, verdure in padella. Riscaldare al microonde.',
    ricetta: [
      'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
      'Condisci il petto di pollo con olio, sale, pepe e aglio in polvere',
      'Cuoci il pollo in friggitrice ad aria a 190°C per 12 minuti, girandolo a metà cottura',
      'Cuoci le verdure surgelate in padella con un filo d\'acqua per 5 minuti, aggiusta di sale',
      'Servi il riso con il pollo a fette e le verdure sopra',
    ],
  },
  {
    id: 'pra-2',
    tipo: 'pranzo',
    nome: 'Pasta con ragù di tacchino e zucchine surgelate',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta (penne o rigatoni)', quantity: '80g (cruda)' },
      { name: 'Macinato di tacchino', quantity: '130g' },
      { name: 'Passata di pomodoro', quantity: '150ml' },
      { name: 'Zucchine surgelate', quantity: '150g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Cipolla, aglio, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 755, proteine: 46, carboidrati: 87, grassi: 17 },
    note: 'Ragù preparabile in anticipo. Riscaldare al microonde.',
    ricetta: [
      'In una padella scalda l\'olio con aglio e cipolla tritata per 2 minuti a fuoco medio',
      'Aggiungi il macinato di tacchino e rosolalo bene — deve dorare, non bollire',
      'Aggiungi le zucchine surgelate e cuoci 5 minuti, poi versa la passata di pomodoro',
      'Aggiusta di sale e cuoci 15 minuti a fuoco basso con il coperchio',
      'Scola la pasta al dente e condisci con il ragù di tacchino',
    ],
  },
  {
    id: 'pra-3',
    tipo: 'pranzo',
    nome: 'Gnocchi con sugo di pomodoro e pollo a cubetti',
    emoji: '🥟',
    ingredienti: [
      { name: 'Gnocchi di patate', quantity: '200g' },
      { name: 'Petto di pollo a dadini', quantity: '120g' },
      { name: 'Passata di pomodoro', quantity: '150ml' },
      { name: 'Basilico', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Sale, pepe', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 44, carboidrati: 91, grassi: 16 },
    note: 'Riscaldare al microonde con un cucchiaio d\'acqua.',
    ricetta: [
      'Taglia il pollo a dadini piccoli e rosolali in padella con un filo d\'olio per 5 minuti finché dorati',
      'Aggiungi la passata di pomodoro, sale e pepe — cuoci altri 10 minuti a fuoco medio',
      'Porta a ebollizione abbondante acqua salata',
      'Butta gli gnocchi: appena vengono a galla (circa 2 minuti) scolali con una schiumarola',
      'Aggiungi gli gnocchi nel sugo con il pollo, mescola con il basilico e servi',
    ],
  },
  {
    id: 'pra-4',
    tipo: 'pranzo',
    nome: 'Riso basmati con salmone e fagiolini surgelati',
    emoji: '🐟',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Filetto di salmone', quantity: '150g' },
      { name: 'Fagiolini surgelati', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Limone, sale, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 755, proteine: 48, carboidrati: 80, grassi: 20 },
    note: 'Salmone in friggitrice a 180°C. Riscaldare al microonde.',
    ricetta: [
      'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
      'Condisci il filetto di salmone con olio, sale, succo di limone ed erbe aromatiche',
      'Cuoci il salmone in friggitrice ad aria a 180°C per 12 minuti',
      'Cuoci i fagiolini surgelati in padella con un filo d\'acqua e sale per 5 minuti',
      'Servi il riso con il salmone spezzettato e i fagiolini sopra — un filo di limone finale',
    ],
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
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Basilico, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 15,
    macros: { kcal: 740, proteine: 46, carboidrati: 85, grassi: 17 },
    note: 'Si può mangiare anche a temperatura ambiente.',
    ricetta: [
      'Cuoci la pasta integrale in abbondante acqua salata (circa 10-11 minuti)',
      'Taglia i pomodorini a metà e falli saltare in padella con olio e sale per 3 minuti',
      'Aggiungi il tonno sgocciolato ai pomodorini, mescola e spegni il fuoco',
      'Scola la pasta al dente e versala nella padella con il condimento',
      'Aggiungi il basilico fresco spezzettato, mescola bene e servi',
    ],
  },
  {
    id: 'pra-6',
    tipo: 'pranzo',
    nome: 'Riso basmati con polpette di pollo e peperoni surgelati',
    emoji: '🍗',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Macinato di pollo', quantity: '140g' },
      { name: 'Peperoni surgelati', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Aglio, prezzemolo, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 745, proteine: 46, carboidrati: 84, grassi: 16 },
    note: 'Polpette in friggitrice a 190°C per 12 minuti. Riscaldare al microonde.',
    ricetta: [
      'In una ciotola lavora il macinato di pollo con aglio tritato, prezzemolo, sale e un filo d\'olio',
      'Forma delle polpettine grandi come noci (circa 8-10 pezzi) e mettile nel cestello della friggitrice',
      'Cuoci le polpette in friggitrice ad aria a 190°C per 12 minuti, girandole a metà cottura',
      'Cuoci il riso in acqua salata per 12 minuti. Cuoci i peperoni surgelati in padella 5 minuti',
      'Servi le polpette e i peperoni sopra il riso',
    ],
  },
  {
    id: 'pra-7',
    tipo: 'pranzo',
    nome: 'Pasta con pollo a dadini e broccoli surgelati',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta (fusilli o penne)', quantity: '80g (cruda)' },
      { name: 'Petto di pollo a dadini', quantity: '150g' },
      { name: 'Broccoli surgelati', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Aglio, sale, pepe', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 48, carboidrati: 85, grassi: 16 },
    note: 'Riscaldare al microonde con un cucchiaio d\'acqua.',
    ricetta: [
      'Cuoci la pasta in acqua salata. Taglia il pollo a dadini piccoli',
      'In una padella scalda l\'olio con aglio, aggiungi il pollo e rosola 6-7 minuti finché dorato',
      'Cuoci i broccoli surgelati in padella con un po\' d\'acqua per 5 minuti',
      'Scola la pasta al dente e versala nella padella con pollo e broccoli',
      'Mescola bene, aggiusta di sale e pepe e servi',
    ],
  },
  {
    id: 'pra-8',
    tipo: 'pranzo',
    nome: 'Gnocchi con pesto leggero e petto di pollo grigliato',
    emoji: '🥟',
    ingredienti: [
      { name: 'Gnocchi di patate', quantity: '200g' },
      { name: 'Petto di pollo', quantity: '130g' },
      { name: 'Pesto leggero (basilico, noci, parmigiano)', quantity: '25g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Sale, pepe', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 20,
    macros: { kcal: 760, proteine: 46, carboidrati: 88, grassi: 21 },
    note: 'Pollo in friggitrice. Gnocchi bolliti e conditi col pesto. Riscaldare al microonde.',
    ricetta: [
      'Condisci il petto di pollo con olio, sale e pepe',
      'Cuoci il pollo in friggitrice ad aria a 190°C per 14 minuti, girandolo a metà cottura',
      'Cuoci gli gnocchi in acqua bollente salata — appena vengono a galla (circa 2 min) scolali',
      'Metti gli gnocchi in una ciotola, aggiungi il pesto e mescola delicatamente',
      'Taglia il pollo a striscioline e servilo sopra gli gnocchi al pesto',
    ],
  },
  {
    id: 'pra-9',
    tipo: 'pranzo',
    nome: 'Riso basmati con tonno e verdure miste surgelate con soia',
    emoji: '🍚',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Tonno al naturale', quantity: '160g (2 scatolette)' },
      { name: 'Verdure miste surgelate', quantity: '200g' },
      { name: 'Salsa di soia', quantity: '1 cucchiaino' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 20,
    macros: { kcal: 745, proteine: 46, carboidrati: 87, grassi: 15 },
    note: 'Verdure surgelate in padella. Riscaldare al microonde.',
    ricetta: [
      'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
      'Cuoci le verdure surgelate in padella con un filo d\'olio e un po\' d\'acqua per 5 minuti',
      'Aggiungi il tonno sgocciolato alle verdure, mescola e aggiungi la salsa di soia',
      'Cuoci ancora 2 minuti per insaporire tutto',
      'Servi il riso con il composto di tonno e verdure sopra',
    ],
  },
  {
    id: 'pra-10',
    tipo: 'pranzo',
    nome: 'Pasta integrale con salmone e zucchine surgelate',
    emoji: '🐟',
    ingredienti: [
      { name: 'Pasta integrale (farfalle o penne)', quantity: '80g (cruda)' },
      { name: 'Filetto di salmone', quantity: '130g' },
      { name: 'Zucchine surgelate', quantity: '150g' },
      { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
      { name: 'Succo di limone, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 20,
    macros: { kcal: 750, proteine: 45, carboidrati: 84, grassi: 20 },
    note: 'Salmone in friggitrice a 180°C. Zucchine in padella. Riscaldare al microonde.',
    ricetta: [
      'Cuoci la pasta integrale in acqua salata seguendo i tempi sulla confezione',
      'Condisci il salmone con olio, sale e succo di limone',
      'Cuoci il salmone in friggitrice ad aria a 180°C per 12 minuti',
      'Cuoci le zucchine surgelate in padella con un filo d\'olio per 5 minuti',
      'Scola la pasta, unisci le zucchine e il salmone spezzettato, mescola con erbe aromatiche e servi',
    ],
  },
];

// ─── SPUNTINI ─────────────────────────────────────────────────────────────────

const spuntini: Meal[] = [
  {
    id: 'spu-1',
    tipo: 'spuntino',
    nome: 'Pane integrale con formaggio spalmabile light',
    emoji: '🧀',
    ingredienti: [
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
      { name: 'Formaggio spalmabile light', quantity: '30g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 210, proteine: 10, carboidrati: 22, grassi: 7 },
    ricetta: [
      'Tosta la fetta di pane integrale nel tostapane o in friggitrice per 2 minuti',
      'Spalma il formaggio light sul pane ancora caldo',
      'Servi subito — spuntino pronto in 2 minuti!',
    ],
  },
  {
    id: 'spu-2',
    tipo: 'spuntino',
    nome: 'Pane integrale con tonno',
    emoji: '🥪',
    ingredienti: [
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
      { name: 'Tonno al naturale', quantity: '80g (1 scatoletta)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 220, proteine: 26, carboidrati: 18, grassi: 4 },
    ricetta: [
      'Tosta la fetta di pane integrale nel tostapane per 2 minuti',
      'Apri la scatoletta di tonno e sgocciolala bene',
      'Distribuisci il tonno sul pane tostato — velocissimo e proteico!',
    ],
  },
  {
    id: 'spu-3',
    tipo: 'spuntino',
    nome: 'Proteine in polvere con acqua e banana',
    emoji: '🥤',
    ingredienti: [
      { name: 'Proteine in polvere (whey o vegetali)', quantity: '30g (1 misurino)' },
      { name: 'Acqua', quantity: '250ml' },
      { name: 'Banana', quantity: '1 piccola (100g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 245, proteine: 28, carboidrati: 26, grassi: 3 },
    ricetta: [
      'Versa 250ml di acqua fredda in un agitatore o bicchiere',
      'Aggiungi 30g di proteine in polvere e agita bene finché si sciolgono',
      'Pela la banana e mangiatela affiancata al frullato proteico',
      'Bevi subito — spuntino proteico e saziante!',
    ],
  },
  {
    id: 'spu-4',
    tipo: 'spuntino',
    nome: 'Fiocchi di latte con pane integrale',
    emoji: '🧀',
    ingredienti: [
      { name: 'Formaggio fiocchi di latte', quantity: '150g' },
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 235, proteine: 28, carboidrati: 20, grassi: 5 },
    ricetta: [
      'Tosta la fetta di pane integrale nel tostapane per 2 minuti',
      'Versa i fiocchi di latte in una ciotolina a parte',
      'Mangia i fiocchi di latte assieme al pane tostato — puoi usare il pane per raccoglierli',
    ],
  },
  {
    id: 'spu-5',
    tipo: 'spuntino',
    nome: 'Pane integrale con fesa di tacchino e formaggio light',
    emoji: '🥪',
    ingredienti: [
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
      { name: 'Fesa di tacchino', quantity: '60g' },
      { name: 'Formaggio spalmabile light', quantity: '20g' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 230, proteine: 26, carboidrati: 18, grassi: 6 },
    ricetta: [
      'Tosta la fetta di pane integrale nel tostapane per 2 minuti',
      'Spalma il formaggio light sul pane caldo',
      'Appoggia le fette di fesa di tacchino sopra il formaggio — pronto!',
    ],
  },
  {
    id: 'spu-6',
    tipo: 'spuntino',
    nome: 'Proteine in polvere con acqua e mela',
    emoji: '🥤',
    ingredienti: [
      { name: 'Proteine in polvere (whey o vegetali)', quantity: '30g (1 misurino)' },
      { name: 'Acqua', quantity: '250ml' },
      { name: 'Mela', quantity: '1 media (150g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 3,
    macros: { kcal: 235, proteine: 28, carboidrati: 24, grassi: 3 },
    ricetta: [
      'Versa 250ml di acqua fredda in un agitatore o bicchiere',
      'Aggiungi 30g di proteine in polvere e agita bene finché si sciolgono',
      'Lava la mela e mangiala affiancata al frullato proteico',
      'Bevi subito — spuntino proteico e leggero!',
    ],
  },
  {
    id: 'spu-7',
    tipo: 'spuntino',
    nome: 'Frutta secca con pane integrale',
    emoji: '🥜',
    ingredienti: [
      { name: 'Frutta secca mista (mandorle, noci, anacardi)', quantity: '30g' },
      { name: 'Pane integrale', quantity: '1 fetta (30g)' },
    ],
    metodo: 'nessuna',
    tempoPreparazione: 2,
    macros: { kcal: 240, proteine: 8, carboidrati: 20, grassi: 13 },
    ricetta: [
      'Tosta la fetta di pane integrale nel tostapane per 2 minuti',
      'Pesa 30g di frutta secca mista in una ciotolina',
      'Mangia la frutta secca insieme al pane tostato — spuntino veloce e saziante!',
    ],
  },
];

// ─── CENE ─────────────────────────────────────────────────────────────────────

const cene: Meal[] = [
  {
    id: 'cen-1',
    tipo: 'cena',
    nome: 'Pasta con tonno e pomodorini freschi',
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
    macros: { kcal: 715, proteine: 50, carboidrati: 83, grassi: 17 },
    ricetta: [
      'Metti l\'acqua a bollire. In una padella scalda l\'olio con uno spicchio d\'aglio per 1 minuto',
      'Aggiungi i pomodorini tagliati a metà, schiaccia con un cucchiaio e cuoci 8 minuti a fuoco medio',
      'Aggiungi il tonno sgocciolato ai pomodorini, mescola e spegni il fuoco',
      'Cuoci la pasta in acqua salata, scola al dente e versala nella padella con il condimento',
      'Aggiungi abbondante basilico fresco spezzettato, mescola e porta in tavola',
    ],
  },
  {
    id: 'cen-2',
    tipo: 'cena',
    nome: 'Salmone in friggitrice con patate a spicchi e insalata',
    emoji: '🐟',
    ingredienti: [
      { name: 'Filetto di salmone', quantity: '150g' },
      { name: 'Patate', quantity: '250g' },
      { name: 'Insalata mista', quantity: '100g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Limone, sale, rosmarino', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 30,
    macros: { kcal: 700, proteine: 46, carboidrati: 68, grassi: 22 },
    note: 'Patate a 190°C 20 min, salmone a 180°C 12 min.',
    ricetta: [
      'Taglia le patate a spicchi e condiscile con olio, sale e rosmarino',
      'Cuoci le patate in friggitrice ad aria a 190°C per 20 minuti, scuotendo il cestello a metà',
      'Condisci il filetto di salmone con olio, sale e succo di limone',
      'Cuoci il salmone in friggitrice a 180°C per 12 minuti',
      'Prepara l\'insalata con un filo d\'olio e sale. Servi tutto insieme',
    ],
  },
  {
    id: 'cen-3',
    tipo: 'cena',
    nome: 'Petto di pollo in friggitrice con patate a spicchi e verdure surgelate',
    emoji: '🍗',
    ingredienti: [
      { name: 'Petto di pollo', quantity: '200g' },
      { name: 'Patate', quantity: '250g' },
      { name: 'Verdure miste surgelate', quantity: '150g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Rosmarino, aglio, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 30,
    macros: { kcal: 700, proteine: 52, carboidrati: 68, grassi: 18 },
    note: 'Patate 20 min a 190°C, pollo 18 min a 190°C in friggitrice.',
    ricetta: [
      'Taglia le patate a spicchi e condiscile con olio, sale, rosmarino e aglio in polvere',
      'Cuoci le patate in friggitrice ad aria a 190°C per 20 minuti, scuotendo il cestello a metà cottura',
      'Condisci il petto di pollo con olio, sale e rosmarino e aggiungilo in friggitrice negli ultimi 18 minuti',
      'Cuoci le verdure surgelate in padella con un filo d\'acqua per 5 minuti',
      'Porta tutto in tavola insieme',
    ],
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
      { name: 'Cipolla, aglio', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 30,
    macros: { kcal: 725, proteine: 48, carboidrati: 92, grassi: 18 },
    ricetta: [
      'In una padella scalda l\'olio con cipolla e aglio tritati fini — falli appassire 3 minuti',
      'Aggiungi il macinato di tacchino e rosolalo bene finché cambia colore — rompi i grumi con il cucchiaio',
      'Versa la passata di pomodoro, aggiusta di sale e cuoci a fuoco basso per 20 minuti mescolando ogni tanto',
      'Cuoci gli gnocchi in acqua bollente salata, scolali appena vengono a galla',
      'Condisci gli gnocchi con il ragù caldo e servi',
    ],
  },
  {
    id: 'cen-5',
    tipo: 'cena',
    nome: 'Pasta integrale con pollo a dadini e broccoli surgelati',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta integrale (penne)', quantity: '80g (cruda)' },
      { name: 'Petto di pollo a dadini', quantity: '160g' },
      { name: 'Broccoli surgelati', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Aglio, peperoncino, sale', quantity: 'q.b.' },
    ],
    metodo: 'fornelli',
    tempoPreparazione: 25,
    macros: { kcal: 720, proteine: 52, carboidrati: 84, grassi: 18 },
    ricetta: [
      'Porta l\'acqua a ebollizione con sale. Taglia il pollo a dadini',
      'In una padella scalda l\'olio con aglio e peperoncino, aggiungi il pollo e rosola 6-7 minuti finché è dorato',
      'Cuoci i broccoli surgelati in padella con un po\' d\'acqua per 5 minuti, poi uniscili al pollo',
      'Scola la pasta al dente e versala nella padella con pollo e broccoli',
      'Mescola bene aggiungendo un cucchiaio di acqua di cottura se serve, e servi',
    ],
  },
  {
    id: 'cen-6',
    tipo: 'cena',
    nome: 'Riso basmati con salmone e verdure miste surgelate',
    emoji: '🐟',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Filetto di salmone', quantity: '150g' },
      { name: 'Verdure miste surgelate', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Limone, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 705, proteine: 46, carboidrati: 82, grassi: 20 },
    note: 'Salmone in friggitrice a 180°C per 12 minuti.',
    ricetta: [
      'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
      'Condisci il filetto di salmone con olio, sale e succo di limone',
      'Cuoci il salmone in friggitrice ad aria a 180°C per 12 minuti',
      'Cuoci le verdure surgelate in padella con un filo d\'acqua e sale per 5 minuti',
      'Servi il riso con il salmone spezzettato e le verdure sopra',
    ],
  },
  {
    id: 'cen-7',
    tipo: 'cena',
    nome: 'Pasta con polpette di pollo in friggitrice e sugo',
    emoji: '🍝',
    ingredienti: [
      { name: 'Pasta (rigatoni)', quantity: '80g (cruda)' },
      { name: 'Macinato di pollo', quantity: '150g' },
      { name: 'Passata di pomodoro', quantity: '200ml' },
      { name: 'Cipolla, aglio, basilico', quantity: 'q.b.' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Prezzemolo, sale', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 720, proteine: 50, carboidrati: 85, grassi: 18 },
    note: 'Polpette di pollo in friggitrice a 190°C per 10 minuti. Sugo in padella.',
    ricetta: [
      'Lavora il macinato di pollo con aglio, prezzemolo, sale e un filo d\'olio — forma 8-10 polpettine',
      'Cuoci le polpette in friggitrice ad aria a 190°C per 10 minuti, girandole a metà cottura',
      'In una padella fai appassire la cipolla con olio, aggiungi la passata e cuoci 10 minuti a fuoco basso',
      'Aggiungi le polpette cotte al sugo e falle insaporire 5 minuti insieme',
      'Scola i rigatoni al dente e condisci con il sugo e le polpette — aggiungi basilico fresco',
    ],
  },
  {
    id: 'cen-8',
    tipo: 'cena',
    nome: 'Riso basmati con frittata di albumi e verdure surgelate',
    emoji: '🍳',
    ingredienti: [
      { name: 'Riso basmati', quantity: '80g (crudo)' },
      { name: 'Albumi', quantity: '3 (circa 90g)' },
      { name: 'Uovo intero', quantity: '1 uovo' },
      { name: 'Verdure miste surgelate', quantity: '200g' },
      { name: 'Olio EVO', quantity: '1 cucchiaio (10ml)' },
      { name: 'Sale, pepe, erbe aromatiche', quantity: 'q.b.' },
    ],
    metodo: 'friggitrice',
    tempoPreparazione: 25,
    macros: { kcal: 680, proteine: 40, carboidrati: 82, grassi: 18 },
    note: 'Frittata in friggitrice a 180°C per 8 min in stampino.',
    ricetta: [
      'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
      'Sbatti insieme i 3 albumi e l\'uovo intero con sale, pepe ed erbe aromatiche',
      'Versa il composto in uno stampino da friggitrice (con carta forno) e cuoci a 180°C per 8 minuti',
      'Cuoci le verdure surgelate in padella con un filo d\'acqua e sale per 5 minuti',
      'Servi il riso con la frittata tagliata a spicchi e le verdure a lato',
    ],
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
    { name: 'Uovo', quantity: '1 uovo' },
    { name: 'Latte', quantity: '150ml' },
    { name: 'Nutella', quantity: '30g' },
    { name: 'Banana', quantity: '1 media (120g)' },
    { name: 'Burro per la padella', quantity: 'q.b.' },
  ],
  metodo: 'fornelli',
  tempoPreparazione: 20,
  macros: { kcal: 620, proteine: 15, carboidrati: 92, grassi: 22 },
  note: 'Giorno libero — goditi ogni boccone!',
  ricetta: [
    'In una ciotola mescola la farina con l\'uovo e il latte fino a ottenere un impasto liscio senza grumi',
    'Scalda una padella antiaderente con una noce di burro a fuoco medio',
    'Versa un mestolino di impasto e cuoci 2 minuti per lato finché si formano le bollicine sopra — poi gira',
    'Ripeti fino a finire l\'impasto (vengono circa 6-8 pancake)',
    'Impila i pancake nel piatto, spalma la Nutella tra uno strato e l\'altro e decora con la banana a rondelle',
  ],
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
    ricetta: [
      'Taglia il guanciale a listarelle e fallo rosolare in padella senza olio a fuoco medio finché è croccante — tienilo da parte',
      'In una ciotola sbatti i 2 tuorli e l\'uovo intero con il pecorino grattugiato e abbondante pepe nero macinato fresco',
      'Cuoci gli spaghetti in acqua salata, scolali al dente tenendo un mestolo di acqua di cottura',
      'Togli la padella dal fuoco, versa gli spaghetti nel guanciale, aggiungi il composto di uova e mescola velocemente',
      'Aggiungi acqua di cottura a cucchiai fino a ottenere una crema liscia — non deve rapprendere, la carbonara vuole la crema!',
    ],
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
    ricetta: [
      'Taglia il guanciale a listarelle e fallo rosolare in padella senza olio a fuoco medio per 4-5 minuti',
      'Aggiungi il peperoncino e sfuma con un goccio di vino bianco se vuoi, poi versa i pomodori pelati schiacciati con le mani',
      'Cuoci il sugo a fuoco medio per 15 minuti finché si addensa — aggiusta di sale con parsimonia perché il guanciale è già saporito',
      'Cuoci i bucatini in abbondante acqua salata, scolali al dente',
      'Condisci la pasta con l\'amatriciana e finisci con abbondante pecorino grattugiato sopra',
    ],
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
    ricetta: [
      'Se usi lasagne surgelate, toglile dal freezer 10 minuti prima',
      'Preriscalda il forno a 180°C in modalità statica',
      'Metti la teglia di lasagne in forno e cuoci per i tempi indicati sulla confezione (di solito 35-40 minuti)',
      'Negli ultimi 5 minuti aggiungi il parmigiano extra sopra e alza a 200°C per gratinare la superficie',
      'Fai riposare 5 minuti fuori dal forno prima di servire — così non si sfascia nel piatto!',
    ],
  },
];

const spuntinoCheat: Meal = {
  id: 'spu-cheat',
  tipo: 'spuntino',
  nome: 'Spuntino libero',
  emoji: '🍿',
  ingredienti: [
    { name: 'A scelta libera', quantity: 'q.b.' },
  ],
  metodo: 'nessuna',
  tempoPreparazione: 0,
  macros: { kcal: 300, proteine: 5, carboidrati: 40, grassi: 12 },
  note: 'Giorno libero — mangia quello che ti va!',
  ricetta: [
    'Oggi è giorno libero — scegli quello che ti fa più gola!',
    'Un cioccolatino, una brioche, dei biscotti con il caffè — tutto va bene',
    'Goditi lo spuntino senza pensieri, te lo sei guadagnato!',
  ],
};

const cenaCheatOptions: Meal[] = [
  {
    id: 'cen-cheat-1',
    tipo: 'cena',
    nome: 'Hamburger con patatine',
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
    ricetta: [
      'Scalda una padella in ghisa o antiaderente a fuoco alto finché è bollente',
      'Sala generosamente l\'hamburger su entrambi i lati e cuocilo 3 minuti per lato per una cottura media',
      'Nell\'ultimo minuto metti la fetta di cheddar sopra e copri con un coperchio per farlo sciogliere',
      'Tosta il panino brioche in padella per 1 minuto con la parte interna verso il basso',
      'Componi il burger: panino, lattuga, pomodoro, hamburger con cheddar, cipolla e le tue salse preferite — servi con le patatine!',
    ],
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
    ricetta: [
      'Stasera si va al ristorante — niente cucina!',
      'Ordina quello che ti piace di più: nigiri, maki, roll speciali, edamame',
      'Usa la salsa di soia con parsimonia per sentire meglio il sapore del pesce',
      'Goditi la serata fuori — te la sei guadagnato!',
    ],
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
    ricetta: [
      'Stasera si ordina il kebab — niente fornelli!',
      'Scegli il tuo kebab preferito: nel pane pita, in piatto o con le patatine',
      'Aggiungi tutte le salse che vuoi — tzatziki, piccante, yogurt',
      'Goditi la cena fuori senza sensi di colpa — il sabato è fatto apposta!',
    ],
  },
];

const pranzoLeggero: Meal = {
  id: 'pra-domenica',
  tipo: 'pranzo',
  nome: 'Riso leggero con pollo e verdure surgelate',
  emoji: '🍚',
  ingredienti: [
    { name: 'Riso basmati', quantity: '70g (crudo)' },
    { name: 'Petto di pollo', quantity: '130g' },
    { name: 'Verdure miste surgelate', quantity: '200g' },
    { name: 'Olio EVO', quantity: '1 cucchiaino (5ml)' },
    { name: 'Sale, erbe aromatiche', quantity: 'q.b.' },
  ],
  metodo: 'friggitrice',
  tempoPreparazione: 25,
  macros: { kcal: 575, proteine: 42, carboidrati: 70, grassi: 11 },
  note: 'Pranzo leggero prima della pizza della sera.',
  ricetta: [
    'Cuoci il riso basmati in acqua salata per 12 minuti, poi scola',
    'Condisci il petto di pollo con un filo d\'olio, sale ed erbe aromatiche',
    'Cuoci il pollo in friggitrice ad aria a 190°C per 15 minuti',
    'Cuoci le verdure surgelate in padella con un filo d\'acqua e sale per 5 minuti',
    'Servi il riso con pollo e verdure sopra — pranzo leggero così stasera ti godi la pizza al massimo!',
  ],
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
  ricetta: [
    'Se la ordini: scegli la pizzeria preferita e goditi la serata — niente da spiegare!',
    'Se la fai in casa: preriscalda il forno al massimo (250°C) con la leccarda dentro per almeno 20 minuti',
    'Stendi l\'impasto sulla carta forno, spalma il pomodoro San Marzano schiacciato con le mani',
    'Aggiungi la mozzarella fior di latte strappata a pezzi (non tagliata, si scioglie meglio)',
    'Cuoci 10-12 minuti finché i bordi sono gonfi e dorati — all\'uscita dal forno aggiungi basilico fresco e un filo d\'olio a crudo',
  ],
};

// ─── COSTRUZIONE DELLE 4 SETTIMANE ───────────────────────────────────────────

// ─── SETTIMANA 1 ──────────────────────────────────────────────────────────────
// Lunedì: col-1, pra-1, spu-1, cen-1
// Martedì: col-2, pra-2, spu-2, cen-2
// Mercoledì: col-3, pra-3, spu-3, cen-3
// Giovedì: col-4, pra-4, spu-4, cen-4
// Venerdì: col-5, pra-5, spu-5, cen-5
// Sabato: cheat
// Domenica: col-6, domenica, spu-6, pizza

const settimana1: WeekPlan = {
  settimana: 1,
  giorni: [
    {
      weekDay: 0, weekNumber: 1,
      colazione: colazioni[0], // Pancake banana + burro arachidi
      pranzo: pranzi[0],       // Riso pollo verdure miste
      spuntino: spuntini[0],   // Pane + formaggio spalmabile
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 8.5,
    },
    {
      weekDay: 1, weekNumber: 1,
      colazione: colazioni[1], // Pancake fragole + miele
      pranzo: pranzi[1],       // Pasta ragù tacchino zucchine
      spuntino: spuntini[1],   // Pane + tonno
      cena: cene[1],           // Salmone patate insalata
      costoStimato: 9.5,
    },
    {
      weekDay: 2, weekNumber: 1,
      colazione: colazioni[2], // Pancake mirtilli + crema mandorle
      pranzo: pranzi[2],       // Gnocchi sugo pollo
      spuntino: spuntini[2],   // Proteine + banana
      cena: cene[2],           // Pollo patate verdure surgelate
      costoStimato: 9.0,
    },
    {
      weekDay: 3, weekNumber: 1,
      colazione: colazioni[3], // Pancake mela cannella miele
      pranzo: pranzi[3],       // Riso salmone fagiolini
      spuntino: spuntini[3],   // Fiocchi latte + pane
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 10.0,
    },
    {
      weekDay: 4, weekNumber: 1,
      colazione: colazioni[4], // Pancake banana cacao burro arachidi
      pranzo: pranzi[4],       // Pasta integrale tonno pomodorini
      spuntino: spuntini[4],   // Pane + tacchino + formaggio
      cena: cene[4],           // Pasta integrale pollo broccoli
      costoStimato: 8.0,
    },
    {
      weekDay: 5, weekNumber: 1,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[0],   // Carbonara
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[0],       // Hamburger
      costoStimato: 16.0,
    },
    {
      weekDay: 6, weekNumber: 1,
      isPizzaDay: true,
      colazione: colazioni[5], // Pancake kiwi + miele
      pranzo: pranzoLeggero,
      spuntino: spuntini[5],   // Proteine + mela
      cena: cenaPizza,
      costoStimato: 12.0,
    },
  ],
};

// ─── SETTIMANA 2 ──────────────────────────────────────────────────────────────
// Ruotiamo colazioni e pranzi/cene per varietà

const settimana2: WeekPlan = {
  settimana: 2,
  giorni: [
    {
      weekDay: 0, weekNumber: 2,
      colazione: colazioni[5], // Pancake kiwi + miele
      pranzo: pranzi[5],       // Riso polpette pollo peperoni
      spuntino: spuntini[5],   // Proteine + mela
      cena: cene[5],           // Riso salmone verdure miste
      costoStimato: 9.0,
    },
    {
      weekDay: 1, weekNumber: 2,
      colazione: colazioni[6], // Pancake pera nocciole cannella
      pranzo: pranzi[6],       // Pasta pollo broccoli
      spuntino: spuntini[6],   // Frutta secca + pane
      cena: cene[6],           // Pasta polpette pollo sugo
      costoStimato: 8.5,
    },
    {
      weekDay: 2, weekNumber: 2,
      colazione: colazioni[0], // Pancake banana + burro arachidi
      pranzo: pranzi[7],       // Gnocchi pesto pollo grigliato
      spuntino: spuntini[0],   // Pane + formaggio spalmabile
      cena: cene[7],           // Riso frittata albumi verdure
      costoStimato: 8.5,
    },
    {
      weekDay: 3, weekNumber: 2,
      colazione: colazioni[1], // Pancake fragole + miele
      pranzo: pranzi[8],       // Riso tonno verdure soia
      spuntino: spuntini[1],   // Pane + tonno
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 8.0,
    },
    {
      weekDay: 4, weekNumber: 2,
      colazione: colazioni[2], // Pancake mirtilli + crema mandorle
      pranzo: pranzi[9],       // Pasta integrale salmone zucchine
      spuntino: spuntini[2],   // Proteine + banana
      cena: cene[1],           // Salmone patate insalata
      costoStimato: 10.0,
    },
    {
      weekDay: 5, weekNumber: 2,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[1],   // Amatriciana
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[1],       // Sushi
      costoStimato: 18.0,
    },
    {
      weekDay: 6, weekNumber: 2,
      isPizzaDay: true,
      colazione: colazioni[3], // Pancake mela cannella miele
      pranzo: pranzoLeggero,
      spuntino: spuntini[3],   // Fiocchi latte + pane
      cena: cenaPizza,
      costoStimato: 12.0,
    },
  ],
};

// ─── SETTIMANA 3 ──────────────────────────────────────────────────────────────

const settimana3: WeekPlan = {
  settimana: 3,
  giorni: [
    {
      weekDay: 0, weekNumber: 3,
      colazione: colazioni[3], // Pancake mela cannella miele
      pranzo: pranzi[2],       // Gnocchi sugo pollo
      spuntino: spuntini[4],   // Pane + tacchino + formaggio
      cena: cene[2],           // Pollo patate verdure surgelate
      costoStimato: 8.5,
    },
    {
      weekDay: 1, weekNumber: 3,
      colazione: colazioni[4], // Pancake banana cacao burro arachidi
      pranzo: pranzi[0],       // Riso pollo verdure miste
      spuntino: spuntini[6],   // Frutta secca + pane
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 8.5,
    },
    {
      weekDay: 2, weekNumber: 3,
      colazione: colazioni[6], // Pancake pera nocciole cannella
      pranzo: pranzi[4],       // Pasta integrale tonno pomodorini
      spuntino: spuntini[5],   // Proteine + mela
      cena: cene[4],           // Pasta integrale pollo broccoli
      costoStimato: 8.0,
    },
    {
      weekDay: 3, weekNumber: 3,
      colazione: colazioni[0], // Pancake banana + burro arachidi
      pranzo: pranzi[3],       // Riso salmone fagiolini
      spuntino: spuntini[0],   // Pane + formaggio spalmabile
      cena: cene[5],           // Riso salmone verdure miste
      costoStimato: 10.0,
    },
    {
      weekDay: 4, weekNumber: 3,
      colazione: colazioni[1], // Pancake fragole + miele
      pranzo: pranzi[6],       // Pasta pollo broccoli
      spuntino: spuntini[3],   // Fiocchi latte + pane
      cena: cene[6],           // Pasta polpette pollo sugo
      costoStimato: 8.5,
    },
    {
      weekDay: 5, weekNumber: 3,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[2],   // Lasagna
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[2],       // Kebab
      costoStimato: 16.0,
    },
    {
      weekDay: 6, weekNumber: 3,
      isPizzaDay: true,
      colazione: colazioni[2], // Pancake mirtilli + crema mandorle
      pranzo: pranzoLeggero,
      spuntino: spuntini[2],   // Proteine + banana
      cena: cenaPizza,
      costoStimato: 12.0,
    },
  ],
};

// ─── SETTIMANA 4 ──────────────────────────────────────────────────────────────

const settimana4: WeekPlan = {
  settimana: 4,
  giorni: [
    {
      weekDay: 0, weekNumber: 4,
      colazione: colazioni[5], // Pancake kiwi + miele
      pranzo: pranzi[9],       // Pasta integrale salmone zucchine
      spuntino: spuntini[2],   // Proteine + banana
      cena: cene[7],           // Riso frittata albumi verdure
      costoStimato: 9.0,
    },
    {
      weekDay: 1, weekNumber: 4,
      colazione: colazioni[6], // Pancake pera nocciole cannella
      pranzo: pranzi[5],       // Riso polpette pollo peperoni
      spuntino: spuntini[0],   // Pane + formaggio spalmabile
      cena: cene[1],           // Salmone patate insalata
      costoStimato: 9.5,
    },
    {
      weekDay: 2, weekNumber: 4,
      colazione: colazioni[4], // Pancake banana cacao burro arachidi
      pranzo: pranzi[1],       // Pasta ragù tacchino zucchine
      spuntino: spuntini[4],   // Pane + tacchino + formaggio
      cena: cene[0],           // Pasta tonno pomodorini
      costoStimato: 8.0,
    },
    {
      weekDay: 3, weekNumber: 4,
      colazione: colazioni[2], // Pancake mirtilli + crema mandorle
      pranzo: pranzi[8],       // Riso tonno verdure soia
      spuntino: spuntini[1],   // Pane + tonno
      cena: cene[5],           // Riso salmone verdure miste
      costoStimato: 8.5,
    },
    {
      weekDay: 4, weekNumber: 4,
      colazione: colazioni[0], // Pancake banana + burro arachidi
      pranzo: pranzi[7],       // Gnocchi pesto pollo grigliato
      spuntino: spuntini[6],   // Frutta secca + pane
      cena: cene[3],           // Gnocchi ragù tacchino
      costoStimato: 9.5,
    },
    {
      weekDay: 5, weekNumber: 4,
      isCheatDay: true,
      colazione: colazioneCheat,
      pranzo: pranzoCheatOptions[0],   // Carbonara
      spuntino: spuntinoCheat,
      cena: cenaCheatOptions[0],       // Hamburger
      costoStimato: 17.0,
    },
    {
      weekDay: 6, weekNumber: 4,
      isPizzaDay: true,
      colazione: colazioni[1], // Pancake fragole + miele
      pranzo: pranzoLeggero,
      spuntino: spuntini[5],   // Proteine + mela
      cena: cenaPizza,
      costoStimato: 12.0,
    },
  ],
};

export const weeklyPlans: WeekPlan[] = [settimana1, settimana2, settimana3, settimana4];

export { colazioni, pranzi, spuntini, cene, colazioneCheat, pranzoCheatOptions, spuntinoCheat, cenaCheatOptions, pranzoLeggero, cenaPizza };
