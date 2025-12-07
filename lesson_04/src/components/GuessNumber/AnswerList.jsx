import Answer from "./Answer";

function AnswerList({ answers }) {
    return (
        <>
            {answers && answers.length > 0 ? (
                <div className="answer__list">
                    <h4>The numbers that were used:</h4>
                    {answers.map((answer, index) => (
                        <Answer key={index} value={answer} />
                    ))}
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default AnswerList;