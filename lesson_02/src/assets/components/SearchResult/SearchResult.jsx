import { useEffect } from "react";
import searchList from "../../data/searchList";
import styles from "./SearchResult.module.css"

function SearchResult() {
    //  Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)

    return (
        <div className={styles.search}>
            <div className={styles.list} >
                {
                    searchList.map(item => (
                        <div className={styles.item} key={item.id}>
                            <a className={styles['link-block']} target="_blank" href={item.link}>
                                <div className={styles.wrapper}>
                                    <div className={styles["image-wrap"]}>
                                        <img className={styles.image} src={item.img} alt="Image" />
                                    </div>
                                    <div className={styles.label}>{item.label}</div>
                                    <div className={styles.link}>{item.link}</div>
                                </div>
                                <h2 className={styles.title}>{item.title}</h2>
                            </a>
                            <div className={styles.description}>{item.description}</div>
                        </div>
                    ))
                }
            </div >
        </div >
    );
}

export default SearchResult;