import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router";

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

    const renderedCards = list.map(item => (
        <div key={item.id} className={styles.cards}>
            <Link to={`/products/${item.id}`} className={styles.cardLink}>
                <div className={styles.itemCategory}>{item.category}</div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemPrice}>${item.price}</div>
            </Link>
        </div>
    ));

    return (
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
            <div className={styles.cardZone}>{renderedCards}</div>
        </div>
    );
}

export default ProductList;
