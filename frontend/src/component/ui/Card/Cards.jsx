import styles from "./Cards.module.css";

function Cards({ image, title, description, price, tag }) {
  return (
    <div className={`card ${styles.customCard}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className="card-img-top" />
        {tag && (
          <span className={`${styles.tag} ${styles[tag.type]}`}>
            {tag.text}
          </span>
        )}
      </div>
      <div className="card-body">
        <h5 className={styles.title}>
          {title}
        </h5>
        <p className={styles.description}>
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className={styles.price}>
            ${price}
          </span>
          <button className={styles.addBtn}> + </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;