import styles from "../styles";
import CoinsTable from "../components/CoinsTable";
import NavBar from "../components/NavBar";

const Tokens = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainerSearch}>
                <div className={styles.header}>
                    {/* <Header /> */}
                    <NavBar/>
                </div>
                <div>
                    <div>
                        <CoinsTable />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Tokens