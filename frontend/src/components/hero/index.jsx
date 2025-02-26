import styles from "./index.module.css";
import BigNews from "./../bigNews";
import deepseek from "./../../assets/deepseek.jpg";
import rtx from "./../../assets/rtx.jpg";

export default function Hero() {
    const news = [
        {
            url: deepseek,
            title: "A DeepSeek é a nova empresa de tecnologia do momento",
            description: "A DeepSeek é uma empresa de tecnologia que está crescendo muito rápido. A empresa foi fundada por um grupo de jovens empreendedores e já está sendo considerada uma das startups mais promissoras do ano."
        },
        {
            url: rtx,
            title: "Nvidia anuncia nova série placa de vídeo RTX 50",
            description: "A Nvidia anunciou hoje a nova série de placas de vídeo RTX 50. A nova série promete ser a mais poderosa do mercado, com um desempenho até 50% maior do que a série anterior. A nova série de placas de vídeo RTX 50 já está disponível para compra em todo o mundo."
        }
    ];

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroTextWrapper}>
                <div className={styles.heroBackground}>
                    <span>110101111111111100010</span>
                    <span>101000100101010100001010100</span>
                    <span>10100010010101010000101</span>
                    <span>1010001001010101000010101</span>
                    <span>110101111111111100010</span>
                    <span>101000100101010100001010100</span>
                    <span>10100010010101010000101</span>
                    <span>1010001001010101000010</span>
                    <span>110101011110110101010</span>
                    <span>101010101010101001110001010</span>
                    <span>101011110010101001010010</span>
                    <span>110110101010001010101011</span>
                    </div>
                <h1>Byte News</h1>
                <p>Sua dose diária de notícias techs</p>
            </div>
            <div className={styles.heroBigNews}>
                <BigNews 
                    url={news[0].url} 
                    title={news[0].title} 
                    description={news[0].description} 
                />
                <BigNews 
                    url={news[1].url} 
                    title={news[1].title} 
                    description={news[1].description} 
                />
            </div>
        </section>
    );
}