import styled from 'styled-components';

import Canvas from './containers/canvas';
import Lsidebar from './containers/l-sidebar';
import Rsidebar from './containers/r-sidebar';
import Logbar from './containers/logbar';

const Styles = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;

  .d-col {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
  }
`

function App() {
  return (
    <Styles>
      <Lsidebar/>
      <div className="d-col">
        <Canvas/>
        <Logbar/>
      </div>
      <Rsidebar/>
    </Styles>
  );
}

export default App;
