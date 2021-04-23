import './app.css';
import Routines from './components/routines';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare, faPlusCircle, faMinusCircle, faTrash);

function App() {
  return <Routines />;
}

export default App;
