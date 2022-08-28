import { useState } from 'react';
import Poster from './components/Poster';
import DomScreenCapper from './components/DomScreenCapper';
import './App.scss';

function App() {
  const [isUseMosaic, setUseMosaic] = useState(false);
  const [readonly, setReadonly] = useState(false);

  function handleChangeUseMosaic(e) {
    setUseMosaic(e.target.checked);
  }

  function handleChangeReadonly(e) {
    setReadonly(e.target.checked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td>
              <input type="checkbox" name="useMosaic" onChange={handleChangeUseMosaic} />
              <label for="useMosaic">use Mosaic</label>
            </td>
            <td>
              <input type="checkbox" name="readonly" onChange={handleChangeReadonly} />
              <label for="useMosaic">Preview</label>
            </td>
          </tr>
        </table>

        <DomScreenCapper
          beforeSave={() => setReadonly(true)}
          afterSave={() => setReadonly(false)}
        >
          <Poster type={isUseMosaic ? "mosaic" : "normal"} readonly={readonly} />
        </DomScreenCapper>
      </header>
    </div>
  );
}

export default App;
