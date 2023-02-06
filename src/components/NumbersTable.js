import "./NumbersTable.css"
function NumbersTable({limit}) {

     let limiteNumbers = []
    

  for (let i = 1; i <= limit; i++) {
    limiteNumbers.push(i);
  }

     return (
        <div className="square">
          {limiteNumbers.map((number) => (
            <div
              className="squares"
              key={number}
              style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
            >
              <p>
                <b>{number}</b>
              </p>
            </div>
          ))}
        </div>
      );
  
}

export default NumbersTable