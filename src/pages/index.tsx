import styles from "../../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <span>LandlordStudio recruitment test</span>
        </h1>

        <p className={styles.description}>
          <br></br>
          Get started by editing{" "}
          <code className={styles.code}>~/src/pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/LandlordStudio-Recruitment/ls-recruitment-front-end-only"
            className={styles.card}
          >
            <h2>Test Requirements &rarr;</h2>
            <p>Requirements for the test can be found here.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs/"
            className={styles.card}
          >
            <h2>Learn about TypeScript &rarr;</h2>
            <p>Unfamiliar with TypeScript? You can learn about it here.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
