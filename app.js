const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>CONTADOR</h1>
      <p className={count >= 0 ? 'green' : 'red'}>{count}</p>
      <div className="buttons">
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));