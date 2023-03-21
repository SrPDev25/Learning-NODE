import logo from './logo.svg';
import './App.css';
import { CalendarDateRange } from './components/atom/calendarDateRange';
import {CalendarSimple} from './components/atom/calendarSimple'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalendarDateRange/>
      </header>
    </div>
  );
}

export default App;
