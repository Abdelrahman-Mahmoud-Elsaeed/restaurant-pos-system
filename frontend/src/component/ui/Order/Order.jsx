import style from "./Order.module.css"
export default function Order({quantity=1,main="",sub=[""]}){
    return (
       <div>


            <hr />
            <div className={`${style.order} p-3`}>
        <h3>{quantity}x {main}</h3>
        <div className={`${style.sub} d-flex`}>
                    {sub?.length > 0 && sub.some(item => item !== "") && (
                        <hr className={style.hrvr} />
                    )}
            <ul>
                {sub.map((item, index) => (
                    item !== "" ? (
                        <li key={index}>{item}</li>
                    ) : null
                ))}
            </ul>
        </div>
        </div>
       </div>
    
    )
}