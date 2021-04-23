import './app.css';
import Routines from './components/routines';
import Navbar from './components/navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle, faMinusCircle, faTrash, faTasks);

function App() {
  return (
    <>
      <Navbar />
      <Routines />
    </>
  );
}

export default App;
