import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <h1>Check browser console!</h1>;
}

export default App;