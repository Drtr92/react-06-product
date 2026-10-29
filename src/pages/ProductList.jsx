import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

function ProductList() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}> BEAUTY </div>
                    <div className={styles.sign}>
                        <div>로그인</div>
                        <div>회원가입</div>
                        <div>KOR</div>
                    </div>
                </div>
                <div className={styles.photoZone}>사진이 들어갈 곳</div>
                <div className={styles.cardZone}>
                    <div className={styles.cards}>1</div>
                    <div className={styles.cards}>2</div>
                    <div className={styles.cards}>3</div>
                    <div className={styles.cards}>4</div>
                    <div className={styles.cards}>5</div>
                    <div className={styles.cards}>6</div>
                    <div className={styles.cards}>1</div>
                    <div className={styles.cards}>2</div>
                    <div className={styles.cards}>3</div>
                    <div className={styles.cards}>4</div>
                    <div className={styles.cards}>5</div>
                    <div className={styles.cards}>6</div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
