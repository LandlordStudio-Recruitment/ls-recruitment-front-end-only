import { useEffect, useState } from "react";
import styles from "../../styles/Index.module.css";
import { Payment } from "./data/Payment";

export default function Index() {
  const { payments, error } = useFetchPayments();

  const elPaymentsData = payments ? (
    <code className={styles.code}>
      {JSON.stringify(payments, undefined, 4)}
    </code>
  ) : error ? (
    <span>{`Error fetching payments: ${error.message}`}</span>
  ) : (
    <span>Fetching payments...</span>
  );

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

          <a
            href="https://www.typescriptlang.org/docs/"
            className={styles.card}
          >
            <h2>Learn about TypeScript &rarr;</h2>
            <p>Unfamiliar with TypeScript? You can learn about it here.</p>
          </a>
        </div>
        <h2>Raw payment data is below</h2>
        {elPaymentsData}
      </main>
    </div>
  );
}

const useFetchPayments = () => {
  const [status, setStatus] = useState<{
    error?: Error;
    payments?: Payment[];
  }>({});

  const fetchPayments = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/payments");

      if (res.status >= 200 && res.status < 300) {
        setStatus({ payments: await res.json() });
      } else {
        setStatus({
          error: Error(
            `Call to fetch payments failed with status ${res.status}`
          ),
        });
      }
    } catch (error: any) {
      setStatus({ error: error });
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return status;
};
