import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

function ProductDetail() {
    const { id } = useParams();

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [qtt, setQtt] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setList(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!list) return <div>상품 정보를 불러오지 못했습니다.</div>;

    const totalPrice = (list.price * qtt).toFixed(2);

    const tagMaker = list.tags.map((tag, index) => {
        return <div key={index}># {tag}</div>;
    });

    const handleQuantity = delta => {
        setQtt(prev => {
            if (prev + delta < 1) return prev;
            return prev + delta;
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header2}>
                <Link to={"/"} className={styles.logo}>
                    {" "}
                    BEAUTY{" "}
                </Link>
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
                <div className={styles.ProductCategory}>
                    <div className={styles.productCopy}>{list.category}</div>·
                    <div className={styles.productCopy}>{list.brand}</div>
                </div>
                <div className={styles.ProductName}>{list.title}</div>
                <div className={styles.price}>{totalPrice} $</div>
                <div className={styles.buyUi}>
                    <button className={styles.buyButton}>Buy</button>
                    <button className={styles.quantityButton} onClick={() => handleQuantity(1)}>
                        +
                    </button>
                    <div>{qtt}</div>
                    <button className={styles.quantityButton} onClick={() => handleQuantity(-1)}>
                        -
                    </button>
                </div>
                <div className={styles.tags}>{tagMaker}</div>
                <div className={styles.description}>{list.description}</div>
                <div className={styles.hrLine}></div>
                <div></div>
            </div>
        </div>
    );
}

export default ProductDetail;
