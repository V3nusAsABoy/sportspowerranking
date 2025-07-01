const Results = ({teams}) => {
    return (
        <>
        <div>
        <h1>Final Ranking</h1>
        <ol>
        {teams.map((t, index) => {
          return (
            <>
              <li>{` ${teams[index].name}`}</li>
              <img src={`${teams[index].logo}`} />
              <hr />
            </>
          )})
        }
        <br />
        </ol>
        </div>
        <br />
      </>
    )
}

export default Results;