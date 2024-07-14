
export default function Result({amount, selectedInput, friendInput}){
    if(!amount)return

    function calculateTip(a,b,c){
        const avg = Math.round((b+c)/2);

        return(
            `You pay $${(a + Number(avg)) } ($${a} + $${avg})`
        )
    }
    return(
        <div>
           <h4>{friendInput !== null && calculateTip(amount,selectedInput,friendInput)}</h4> 
        </div>
    )
}