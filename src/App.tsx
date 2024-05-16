import styles from "./App.module.css";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Выбор</h1>
      <Form />
    </div>
  );
}

export default App;
