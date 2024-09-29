/**
 * @author: Paper Coding
 * @link: https://www.algoexpert.io/questions/tournament-winner
 * Difficulty: Easy
 * Description:
 * - Given an array of pairs representing the teams that have competed against each other
 * - and an array containing the results of each competition.
 * - Return the winner of the tournament.
 * - The input arrays are named competitions and results, respectively.
 * - The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team.
 * - The results array contains information about the winner of each corresponding competition in the competitions array.
 * - Specifically, results[i] denotes the winner of competitions[i],
 * - where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.
 * Sample Input:
 * competitions = [ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ]
 * results = [0, 0, 1]
 * Sample Output: "Python" // Python has the highest score
 * -------------------------------------------------------------------------------------------
 * SOLUTION:
 * - Create a map to store the team scores.
 * - Iterate through the competitions array.
 * - For each competition, get the home and away teams.
 * - Get the winner based on the results array.
 * - If the winner is in the map, increment the score by 3.
 * - Otherwise, set the score to 3.
 * - If the current team has a higher score than the top team, update the top team.
 * - Return the top team.
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 * -------------------------------------------------------------------------------------------
 * KEY TAKEAWAYS:
 * - Use a map to store the scores of each team.
 * - Iterate through the competitions array and update the scores.
 * - Keep track of the top team while iterating through the competitions array.
 * - Return the top team.
 *
 */

function tournamentWinner(competitions: string[][], results: number[]): string {
  // Write your code here.
  const teamScores = new Map<string, number>();
  let topTeam = null;

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];
    const winner = results[i] > 0 ? home : away;
    if (teamScores.has(winner)) {
      teamScores.set(winner, teamScores.get(winner)! + 3);
    } else {
      teamScores.set(winner, 3);
    }
    if (
      topTeam === null ||
      teamScores.get(winner)! > teamScores.get(topTeam)!
    ) {
      topTeam = winner;
    }
  }

  return topTeam!;
}

export { tournamentWinner };
