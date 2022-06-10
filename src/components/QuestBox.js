import { useState } from 'react';

const QuestBox = () => {

    const [showNot, setShowNot] = useState(true);

    return (
        <section>
            <div>
                <h3>Why is React great</h3>
                <button onClick={() => setShowNot(!showNot)}> + </button>
            </div>
            <div>
                <h3 style={{ display: showNot ? "none" : "block" }}>Fast Learning Curve</h3>
            </div>
        </section>
    );
}

export default QuestBox;