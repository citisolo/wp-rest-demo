import Image from "next/image";
import styles from "./page.module.css";
import Todo from "../../components/todos";

export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Todo />
      </div>

      <div className={styles.grid}>



      </div>
    </main>
  );
}
