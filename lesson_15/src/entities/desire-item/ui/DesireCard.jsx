import { Fragment } from "react";
import ParseServerDate from "@/shared/components/ParseServerDate/ParseServerDate";
import styles from './DesireCard.module.css'

function DesireCard({ item, actions }) {
    return (
        <article className={styles.card}>
            <div className={styles.body}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.date}>Desire achievement date: <ParseServerDate isoStringDate={item.date} />
                </div>
                <div className={styles.friend}>Friend:
                    <span className={styles.pink}>{item.friend}</span>
                </div>
            </div>
            {!!actions && <div className={styles.action}>
                {actions.map((action, index) => (
                    <Fragment key={index}>
                        {action}
                    </Fragment>
                ))}
            </div>
            }
        </article>
    );
}

export default DesireCard;