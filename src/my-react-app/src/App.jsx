import { useState } from "react";
import "./App.css";

const EmojiVotingApp = () => {
    const emojis = ["😊", "😂", "❤️", "👍", "🎉"];
    const [votes, setVotes] = useState(emojis.map(() => 0));
    const [winner, setWinner] = useState(null);

    const handleVote = (index) => {
        const updatedVotes = [...votes];
        updatedVotes[index] += 1;
        setVotes(updatedVotes);
    };

    const showResults = () => {
        const maxVotes = Math.max(...votes);
        const winnerIndex = votes.indexOf(maxVotes);
        setWinner(emojis[winnerIndex]);
    };

    return (
        <div className="voting-container">
            <h1>Який смайлик найкращий?</h1>
            <ul className="emoji-list">
                {emojis.map((emoji, index) => (
                    <li key={index} className="emoji-item">
                        <button onClick={() => handleVote(index)} className="emoji-button">
                            {emoji} — {votes[index]} голосів
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={showResults} className="results-button">
                Show Results
            </button>
            {winner && <div className="winner">Переможець: {winner} </div>}
        </div>
    );
};

export default EmojiVotingApp;
