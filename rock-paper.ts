export enum Move {
  paper,
  rock,
  scissor,
}

export enum Outcomes {
  playerWins,
  playerLosses,
  tie,
}

interface RockPaperSccissors {
  play(playerMove: Move, opponentMove: Move): Outcomes;
}

export function createRockPaperScissors(): RockPaperSccissors {
  const scenarios = [
    {
      playerMove: Move.paper,
      opponentMove: Move.scissor,
      outcome: Outcomes.playerLosses,
    },
    {
      playerMove: Move.rock,
      opponentMove: Move.paper,
      outcome: Outcomes.playerLosses,
    },
    {
      playerMove: Move.scissor,
      opponentMove: Move.rock,
      outcome: Outcomes.playerLosses,
    },
  ];

  return {
    play(playerMove: Move, opponentMove: Move) {
      if (playerMove === opponentMove) {
        return Outcomes.tie;
      }
      const result = scenarios.find(
        (s) => s.playerMove === playerMove && s.opponentMove === opponentMove
      );

      return result ? result.outcome : Outcomes.playerWins;
    },
  };
}
