import { describe, it, expect } from 'vitest';
import { tournamentWinner } from '../tournament-winner';

describe('tournamentWinner', () => {
  it('should return the winner of the tournament', () => {
    const competitions = [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ];
    const results = [0, 0, 1];

    const winner = tournamentWinner(competitions, results);
    expect(winner).toBe('Python');
  });
});
