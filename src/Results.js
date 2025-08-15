import React, { useState} from 'react';

const Results = ({teams}) => {

    const [copied, setCopied] = useState(false);

    async function copy() {
      try {
        const list = teams.map((t, index) => `${index + 1}: ${t.name}\n`);
        await navigator.clipboard.writeText(list.join(""));
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }


    return (
        <>
        <div id = "results">
        <h1>Final Ranking</h1>
        <ol>
        {teams.map((t, index) => {
          return (
            <>
              <li>{` ${teams[index].name}`}<img src={`${teams[index].logo}`} /></li>
            </>
          )})
        }
        <br />
        </ol>
        <div id ="copy">
          <button onClick={copy}>Copy</button>
          <p style = {{ visibility: copied ? 'visible' : 'hidden'}}>Copied to clipboard</p>
        </div>
        </div>
        <br />
      </>
    )
}

export default Results;