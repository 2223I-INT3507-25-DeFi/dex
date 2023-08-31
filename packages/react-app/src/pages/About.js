import styles from "../styles";
import Button from '@mui/material/Button';
import SourceIcon from '@mui/icons-material/Source';
import NavBar from '../components/NavBar';

const About = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <header className={styles.header}>
                    {/* <Header /> */}
                    <NavBar/>
                </header>

                <h1 className={styles.headTitle}>CoinSwap Exchange</h1>
                <div className={styles.member}>
                    <h2> 20020410 - Nguyễn Phúc Hoàng </h2>
                    <h2> 20020412 - Tạ Đức Hoàng</h2>
                    <h2 >20020438 - Đinh Duy Mạnh</h2>
                </div>

                <p className={styles.subTitle}>Project for INT3507 25 about Decentralized Exchange</p>
                
                <Button rel="noopener noreferrer" href="https://docs.google.com/document/d/1Ab0FKkBFyH8NEQzMC6eLE3j_zBwX5OFcaqvkelISd5c/edit?usp=sharing" target="_blank" variant="contained" ><SourceIcon />  Get Source</Button>
                <div></div>


            </div>
        </div>
    )
}
export default About