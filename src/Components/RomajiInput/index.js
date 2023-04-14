import {useState} from "react";

function RomajiInput({randomLetter, currentRoundCount, onAnswer, lettersInRound}) {
    const [inputState, setInputState] = useState({state: null});

    const onKeyDown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const answer = event.target.value === randomLetter.romaji ? 'correct' : 'incorrect';
            setInputState({state: answer});
            onAnswer(event.target.value, answer === 'correct');

            event.target.value = '';
        }
    }

    return (
        <div className="mb-3">
            <label htmlFor="romaji-input" className="form-label">Romaji</label>
            <div className="d-flex align-items-baseline">
                <input autoComplete="off" type="text" className={'form-control' + (inputState.state === 'correct' ? ' is-valid' : inputState.state === 'incorrect' ? ' is-invalid' : '')} id="romaji-input" aria-describedby="emailHelp" onKeyDown={onKeyDown}/>
                <div style={{width: '20%', textAlign: 'center'}}><span>{currentRoundCount}</span> / <span>{lettersInRound}</span></div>
            </div>
        </div>
    );
}

export default RomajiInput;