import { UserProgress } from './types';
import { BADGES, DEFAULT_PROGRESS } from './badges';

const STORAGE_KEY = 'giusy-progress';

/**
 * Loads the user progress from localStorage.
 * Returns DEFAULT_PROGRESS if nothing is saved yet or if called server-side.
 */
export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...DEFAULT_PROGRESS };
  try {
    return JSON.parse(saved) as UserProgress;
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

/**
 * Persists the user progress to localStorage.
 */
export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/**
 * Resets progress to defaults and persists it.
 */
export function resetProgress(): UserProgress {
  const fresh = { ...DEFAULT_PROGRESS };
  saveProgress(fresh);
  return fresh;
}

/**
 * Records a single completed meal.
 * Increments pastiCompletati by 1 and checks for newly unlocked badges.
 */
export function completaPasto(progress: UserProgress): UserProgress {
  const updated: UserProgress = {
    ...progress,
    pastiCompletati: progress.pastiCompletati + 1,
  };
  return updated;
}

/**
 * Marks a full day as complete.
 * Updates giorniCompletati, giorniConsecutivi (streak), and ultimoGiorno.
 * dateKey must be in YYYY-MM-DD format.
 */
export function completaGiorno(progress: UserProgress, dateKey: string): UserProgress {
  // Avoid double-counting the same day
  if (progress.ultimoGiorno === dateKey) {
    return progress;
  }

  const yesterday = getPreviousDayKey(dateKey);
  const isConsecutive = progress.ultimoGiorno === yesterday;

  const nuoviGiorniConsecutivi = isConsecutive
    ? progress.giorniConsecutivi + 1
    : 1;

  const updated: UserProgress = {
    ...progress,
    giorniCompletati: progress.giorniCompletati + 1,
    giorniConsecutivi: nuoviGiorniConsecutivi,
    ultimoGiorno: dateKey,
  };

  return updated;
}

/**
 * Records a completed shopping list.
 * Increments listeSpesaComplete by 1.
 */
export function completaSpesa(progress: UserProgress): UserProgress {
  const updated: UserProgress = {
    ...progress,
    listeSpesaComplete: progress.listeSpesaComplete + 1,
  };
  return updated;
}

/**
 * Records a completed week (all meals in a week done).
 * Increments settimaneComplete by 1.
 */
export function completaSettimana(progress: UserProgress): UserProgress {
  const updated: UserProgress = {
    ...progress,
    settimaneComplete: progress.settimaneComplete + 1,
  };
  return updated;
}

/**
 * Checks the current progress against all badge conditions and returns
 * an array of badge IDs that are newly unlocked (not previously in badgeSbloccati).
 * Does NOT mutate the progress object — call applyBadges to persist new unlocks.
 */
export function checkBadges(progress: UserProgress): string[] {
  const newlyUnlocked: string[] = [];

  for (const badge of BADGES) {
    // Skip already unlocked badges
    if (progress.badgeSbloccati.includes(badge.id)) continue;

    let unlocked = false;

    switch (badge.condizione) {
      case 'giorni_consecutivi':
        unlocked = progress.giorniConsecutivi >= badge.valore;
        break;
      case 'pasti_completati':
        unlocked = progress.pastiCompletati >= badge.valore;
        break;
      case 'settimane_complete':
        unlocked = progress.settimaneComplete >= badge.valore;
        break;
      case 'lista_spesa':
        unlocked = progress.listeSpesaComplete >= badge.valore;
        break;
      case 'speciale':
        // Special badges are handled case by case
        if (badge.id === 'mamma-settimana') {
          // Unlocked when at least one full week is completed
          unlocked = progress.settimaneComplete >= 1;
        } else if (badge.id === 'friggitrice-master') {
          // Unlocked when at least 20 meals total are done
          // (proxy: we track all meals, air fryer dishes are a subset)
          unlocked = progress.pastiCompletati >= badge.valore;
        }
        break;
    }

    if (unlocked) {
      newlyUnlocked.push(badge.id);
    }
  }

  return newlyUnlocked;
}

/**
 * Applies newly unlocked badges to the progress object and returns the updated version.
 * Call this after checkBadges to commit the unlocks.
 */
export function applyBadges(progress: UserProgress, newBadgeIds: string[]): UserProgress {
  if (newBadgeIds.length === 0) return progress;
  return {
    ...progress,
    badgeSbloccati: [...progress.badgeSbloccati, ...newBadgeIds],
  };
}

/**
 * Convenience function: completes a meal, then checks and applies any newly unlocked badges.
 * Returns the updated progress ready to be saved.
 */
export function registraPasto(progress: UserProgress): UserProgress {
  const afterMeal = completaPasto(progress);
  const newBadges = checkBadges(afterMeal);
  const withBadges = applyBadges(afterMeal, newBadges);
  saveProgress(withBadges);
  return withBadges;
}

/**
 * Convenience function: completes a day, then checks and applies any newly unlocked badges.
 * Returns the updated progress ready to be saved.
 */
export function registraGiorno(progress: UserProgress, dateKey: string): UserProgress {
  const afterDay = completaGiorno(progress, dateKey);
  const newBadges = checkBadges(afterDay);
  const withBadges = applyBadges(afterDay, newBadges);
  saveProgress(withBadges);
  return withBadges;
}

/**
 * Convenience function: completes a shopping list, checks and applies badges.
 */
export function registraSpesa(progress: UserProgress): UserProgress {
  const afterSpesa = completaSpesa(progress);
  const newBadges = checkBadges(afterSpesa);
  const withBadges = applyBadges(afterSpesa, newBadges);
  saveProgress(withBadges);
  return withBadges;
}

/**
 * Convenience function: completes a week, checks and applies badges.
 */
export function registraSettimana(progress: UserProgress): UserProgress {
  const afterSettimana = completaSettimana(progress);
  const newBadges = checkBadges(afterSettimana);
  const withBadges = applyBadges(afterSettimana, newBadges);
  saveProgress(withBadges);
  return withBadges;
}

/**
 * Returns the full Badge objects for all unlocked badges in the progress.
 */
export function getBadgeSbloccati(progress: UserProgress) {
  return BADGES.filter(b => progress.badgeSbloccati.includes(b.id));
}

/**
 * Returns the full Badge objects for all badges not yet unlocked.
 */
export function getBadgeDaSbloccare(progress: UserProgress) {
  return BADGES.filter(b => !progress.badgeSbloccati.includes(b.id));
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/**
 * Given a YYYY-MM-DD string, returns the key for the previous calendar day.
 */
function getPreviousDayKey(dateKey: string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() - 1);
  const py = date.getFullYear();
  const pm = String(date.getMonth() + 1).padStart(2, '0');
  const pd = String(date.getDate()).padStart(2, '0');
  return `${py}-${pm}-${pd}`;
}
