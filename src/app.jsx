import './app.css';
import Routine from './components/routine';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faPlusCircle, faMinusCircle, faTrash);

function App() {
  return <Routine />;
}

export default App;
