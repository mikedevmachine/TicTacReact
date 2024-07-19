export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER</h2>
      {<p>{winner} Won!!!</p>}
      {!winner && <p>Its a draw!!!</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
}
