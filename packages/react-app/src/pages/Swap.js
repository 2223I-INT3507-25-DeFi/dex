import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "../styles";
import { usePools } from "../hooks";
import { Exchange, Loader } from "../components";
import NavBar from "../components/NavBar";

const Swap = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          {/* <Header /> */}
          <NavBar/>
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>CoinSwap Exchange</h1>
          <p className={styles.subTitle}>Simple decentralized exchange !!</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
