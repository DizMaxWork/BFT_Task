import styles from "./App.module.css";
import { Selector } from "./components/Selector/Selector";
import {
  countryOptions,
  cityOptions,
  universityOptions,
  housingOptions,
} from "./data";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Выбор</h1>
      <form className={styles.form}>
        <Selector name="country" options={countryOptions} />
        <Selector name="city" options={cityOptions} />
        <Selector name="university" options={universityOptions} />
        <Selector name="housing" options={housingOptions} />
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}

export default App;
