import { Logo } from "./elements/components/Logo";
import {LeftModule} from './elements/organism/LeftModule';

const Head = () => {
  return (
    <div className="head">
      <Logo width="80" />
    </div>
  );
};



function App() {
  return (
    <>
    <div className="App">
      <Head />
      <LeftModule className="left"/>
    </div>
    </>
  );
}

export default App;
