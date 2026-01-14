import styles from './CartSummery.module.css'

function CartSummery({ totalSum, count }) {
    return (
        <div className={styles.summer}>
            <p className={styles.count}>Number of goods: <span>{count}</span></p>
            <p className={styles["total-price"]}>Total sum: <span>$ {totalSum}</span></p>
        </div>
    );
}

export default CartSummery;