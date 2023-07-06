import styled from "styled-components";
import expensetracker4 from "./img/expensetracker4.jpg";
import { MainLayout } from "./styles/layouts";
import Orb from "./components/orb/orb";
import Navigation from "./components/navigation/navigation";
import { useState, useMemo } from "react";
import Dashboard from "./components/Dashboard/dashboard";
import Income from "./components/Income/income";
import Expenses from "./components/Expenses/expenses";
import { useGlobalContext } from "./context/globalcontext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bimg={expensetracker4} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100%;
  background-image: url(${(props) => props.bimg});
  background-size: cover;
  position: relative;

  main{
    flex: 1;
    backround: rgba(252, 246, 249, 0.78)
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    
    &::-webkit-scrollbar{
      width: 0;
    }

  }
`;

export default App;
