import styles from "./ProductDetail.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function ProductDetail() {

    const { id } = useParams();

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setList(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header2}>
                <div className={styles.logo}> BEAUTY </div>
                <div className={styles.sign2}>
                    <div className={styles.signButton}>로그인</div>
                    <div className={styles.signButton}>회원가입</div>
                    <div className={styles.signButton}>KOR</div>
                </div>
            </div>
            <div className={styles.imgZone}>
                {list.images.map(item => {
                    return (
                        <img key={list.id} src={item} alt={list.title} className={styles.images} />
                    );
                })}
            </div>
            <div className={styles.main}>
                <div>
                    <div className={styles.ProductCategory}>
                        <div className={styles.productCopy}>{list.category}</div>·
                        <div className={styles.productCopy}>{list.brand}</div>
                    </div>
                    <div className={styles.ProductName}>{list.title}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
