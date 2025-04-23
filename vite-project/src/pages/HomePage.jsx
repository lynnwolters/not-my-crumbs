// IMPORTS //
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import TaskList from "../components/TaskList/TaskList.jsx";

// COMPONENT //
function HomePage() {
  return (
    <>
      <Header title="Hey Lynn 👋🏻," span="It's your turn to clean the:" />
      <Main>
        <TaskList />
      </Main>
    </>
  );
}

export default HomePage;
