import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    userinfo: {},
  });
  const [input, setInput] = useState("")
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(
        (result) => {
          setState({ ...state, isLoaded: true, userinfo: result });
          
        },
        (error) => setState({ ...state, isLoaded: true, error: error })
      )  
  }, [user]);




  const handleClick = () => {
    setUser(input);
  }
console.log(state.userinfo);
  if (state.error) {
    return <div>Error: {state.error}</div>;
  } else if (!state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <h1>user search</h1>
        </div>
        <div>
            <input type="text"
              value={input}
              placeholder="Enter Git username to search"
              onChange={({ target }) => setInput(target.value)} ></input>
            <button onClick={handleClick}>Search</button>
        </div>
      </div>



    )
  }
}

export default App;
