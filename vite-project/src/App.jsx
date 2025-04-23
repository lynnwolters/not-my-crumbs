// IMPORTS //
import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";

// COMPONENT //
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <TaskList />
      </Main>
    </>
  );
}

export default App;
