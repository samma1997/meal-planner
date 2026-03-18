import { Badge, UserProgress } from './types';

export const BADGES: Badge[] = [
  // Primi passi
  { id: 'primo-giorno', nome: 'Primo Giorno!', emoji: '⭐', descrizione: 'Hai iniziato il viaggio!', condizione: 'giorni_consecutivi', valore: 1 },
  { id: 'tre-giorni', nome: 'Tre di Fila!', emoji: '🔥', descrizione: '3 giorni consecutivi completati', condizione: 'giorni_consecutivi', valore: 3 },
  { id: 'prima-settimana', nome: 'Prima Settimana!', emoji: '🏆', descrizione: 'Una settimana intera completata!', condizione: 'giorni_consecutivi', valore: 7 },
  { id: 'due-settimane', nome: 'Super Mamma!', emoji: '💪', descrizione: '14 giorni di fila — sei fortissima!', condizione: 'giorni_consecutivi', valore: 14 },
  { id: 'un-mese', nome: 'Mamma del Mese', emoji: '👑', descrizione: '30 giorni! Sei la regina della cucina!', condizione: 'giorni_consecutivi', valore: 30 },
  { id: 'due-mesi', nome: 'Inarrestabile!', emoji: '🚀', descrizione: '60 giorni consecutivi — incredibile!', condizione: 'giorni_consecutivi', valore: 60 },
  { id: 'tre-mesi', nome: 'Leggenda', emoji: '🌟', descrizione: '90 giorni! Sei una leggenda, Giusy!', condizione: 'giorni_consecutivi', valore: 90 },

  // Pasti completati
  { id: 'dieci-pasti', nome: 'Cuoca Provetta', emoji: '👩‍🍳', descrizione: '10 pasti preparati', condizione: 'pasti_completati', valore: 10 },
  { id: 'cinquanta-pasti', nome: 'Chef Giusy', emoji: '🍽️', descrizione: '50 pasti preparati!', condizione: 'pasti_completati', valore: 50 },
  { id: 'cento-pasti', nome: 'Masterchef Mamma', emoji: '🎖️', descrizione: '100 pasti — sei un vero chef!', condizione: 'pasti_completati', valore: 100 },
  { id: 'duecento-pasti', nome: 'Mamma Stellata', emoji: '⭐⭐', descrizione: '200 pasti — meriti le stelle Michelin!', condizione: 'pasti_completati', valore: 200 },

  // Settimane complete
  { id: 'prima-settimana-comp', nome: 'Settimana Perfetta', emoji: '✅', descrizione: 'Prima settimana di spesa completata', condizione: 'settimane_complete', valore: 1 },
  { id: 'quattro-settimane', nome: 'Mamma Organizzata', emoji: '📋', descrizione: '4 settimane di spesa fatte!', condizione: 'settimane_complete', valore: 4 },

  // Lista spesa
  { id: 'prima-spesa', nome: 'Prima Spesa!', emoji: '🛒', descrizione: 'Prima lista della spesa completata', condizione: 'lista_spesa', valore: 1 },
  { id: 'dieci-spese', nome: 'Spesa Expert', emoji: '🛍️', descrizione: '10 liste della spesa completate', condizione: 'lista_spesa', valore: 10 },

  // Speciali
  { id: 'mamma-settimana', nome: 'Mamma della Settimana', emoji: '🏅', descrizione: 'Completato tutti i pasti di una settimana intera!', condizione: 'speciale', valore: 1 },
  { id: 'friggitrice-master', nome: 'Regina della Friggitrice', emoji: '🌀', descrizione: 'Hai preparato 20 piatti con la friggitrice ad aria!', condizione: 'speciale', valore: 20 },
];

export const DEFAULT_PROGRESS: UserProgress = {
  giorniCompletati: 0,
  pastiCompletati: 0,
  settimaneComplete: 0,
  listeSpesaComplete: 0,
  giorniConsecutivi: 0,
  ultimoGiorno: '',
  badgeSbloccati: [],
};
