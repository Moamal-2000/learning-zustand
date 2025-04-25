import s from "./Home.module.scss";
import TodoInput from "./TodoInput/TodoInput";
import Todos from "./Todos/Todos";

const Home = () => {
  return (
    <main className={s.home}>
      <TodoInput />
      <Todos />
    </main>
  );
};
export default Home;
