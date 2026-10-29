import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router";

const BANNER_IMAGES = [
    "https://images.unsplash.com/photo-1790547787960-a5c4ee242d61?q=80&w=782&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1772987714654-2df39af2c658?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1633793566063-52465a148cc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1636740599648-ae84f705fc2e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1635796332668-78830169097d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

function ProductList() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scapeNumber, setScapeNumber] = useState(0);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(res => res.json()) // string을 객체 / 배열 상태로 가공
            .then(json => {
                setList(json.products);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>데이터를 로드 중입니다...</div>;
    }

    const renderedCards = list.map(item => (
        <div
            key={item.id}
            className={styles.cards}
            style={{ backgroundImage: `url("${item.thumbnail}")` }}>
            <Link to={`/products/${item.id}`} className={styles.cardLink}>
                <div className={styles.itemCategory}>{item.category}</div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemPrice}>${item.price}</div>
            </Link>
        </div>
    ));

    const handlePrev = () => {
        setScapeNumber(prev => (prev === 0 ? BANNER_IMAGES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setScapeNumber(prev => (prev === BANNER_IMAGES.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.photoZone}>
                <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${scapeNumber * 100}%)` }}>
                    {BANNER_IMAGES.map((url, index) => (
                        <div
                            key={index}
                            className={styles.slideItem}
                            style={{ backgroundImage: `url("${url}")` }}
                        />
                    ))}
                </div>
                <div className={styles.header}>
                    <div className={styles.logo}> BEAUTY </div>
                    <div className={styles.sign}>
                        <div className={styles.signButton}>로그인</div>
                        <div className={styles.signButton}>회원가입</div>
                        <div className={styles.signButton}>KOR</div>
                    </div>
                </div>
                <div className={styles.photoZoneUi}>
                    <button
                        type="button"
                        className={`${styles.pzButton} ${styles.ButtonLeft}`}
                        onClick={handlePrev}></button>
                    <div className={styles.dotGroup}>
                        {BANNER_IMAGES.map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                className={`${styles.dot} ${scapeNumber === index ? styles.activeDot : ""}`}
                                onClick={() => setScapeNumber(index)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className={`${styles.pzButton} ${styles.ButtonRight}`}
                        onClick={handleNext}></button>
                </div>
            </div>
            <div className={styles.cardZone}>{renderedCards}</div>
        </div>
    );
}

export default ProductList;
