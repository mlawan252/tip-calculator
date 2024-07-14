
export default function Service({children, onInput, percentage}){
    
    return(
        <div>
            <span>{children}</span>
            <select onChange={(e)=>onInput(+(e.target.value))} value={percentage}>
                <option value= {0}>Dissatisfy (0%)</option>
                <option value={5}>It was ok (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely Amazing! (20%)</option>
            </select>
            
        </div>
    )
}