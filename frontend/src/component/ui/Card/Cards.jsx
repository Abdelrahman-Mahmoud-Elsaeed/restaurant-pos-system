import styles from "./Cards.module.css";

export default function Cards({ image, title, description, price, tag, onAdd }) {
  return (
    <div className={`card ${styles.customCard}`}>
      
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImg} />
        
        {tag && (
          <span className={`${styles.tag} ${styles[tag.type] || ""}`}>
            {tag.text}
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column p-3 p-md-4">
        <h5 className={styles.title}>
          {title}
        </h5>
        
        <p className={styles.description}>
          {description}
        </p>
        
        <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
          <span className={styles.price}>
            ${Number(price).toFixed(2)}
          </span>
          
          <button className={styles.addBtn} onClick={onAdd}>
            +
          </button>
        </div>
      </div>
      
    </div>
  );
}