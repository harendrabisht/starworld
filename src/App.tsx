import 'bulma/css/bulma.min.css';
import { Planets } from './components/Planets';

function App() {
  return (
    <div
      className="container is-max-desktop is-fluid is-flex is-flex-direction-column has-background-black is-justify-content-center"
      style={{ height: '100vh' }}
    >
      <h1 className="title is-1 has-text-centered is-uppercase has-text-white">Starworld Planet</h1>
      <Planets />
    </div>
  );
}

export default App;
