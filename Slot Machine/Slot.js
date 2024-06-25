const prompt=require("prompt-sync")();

const COLS=3
const ROWS=3

const SYMBOL_COUNT={
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUE={
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const deposit=() =>{
    while(true){
        const userDeposit=prompt("Enter the amount to deposit: ");
        const numUserDeposit=parseFloat(userDeposit);
        
        if (isNaN(numUserDeposit) || numUserDeposit<=0){
            console.log("Invalid deposit amount,Try again")
        }else{
            return numUserDeposit
        }
    }
}

const numofLines=() =>{
    while(true){
        const Lines=prompt("Enter the Lines to bet on (1-3): ");
        const numUserLines=parseFloat(Lines);
        
        if (isNaN(numUserLines) || numUserLines<=0 || numUserLines>3){
            console.log("Invalid  Lines,Try again")
        }else{
            return numUserLines
        }
    }
}

const placeBet=(balance,Lines) =>{
    while(true){
        const bet=prompt("Enter the bet per line: ");
        const numBet=parseFloat(bet);
        
        if (isNaN(numBet) || numBet<=0 || numBet>balance/Lines){
            console.log("Invalid  bet,Try again")
        }else{
            return numBet
        }
    }
}

const spin=() =>{
    const symbols=[]
    for(const[symbol,count] of Object.entries(SYMBOL_COUNT)){
        for(let i=0;i<count;i++){
            symbols.push(symbol)
        }
    }

    const reels=[]
    for(let i=0;i<COLS;i++){
        reels.push([])
        const reelSymbol=[...symbols]
        for(let j=0;j<ROWS;j++){
            const randomIndex=Math.floor(Math.random()*reelSymbol.length)
            const selectedIndex=reelSymbol[randomIndex]
            reels[i].push(selectedIndex)
            reelSymbol.splice(randomIndex,1)
        }
    }
    return reels
}

const transpose=(reels) =>{
    const rows=[]
    for(let i=0;i<ROWS;i++){
        rows.push([])
        for(let j=0;j<COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const printRows=(rows)=>{
    for(const row of rows){
        let rowString=""
        for(const[i,symbol] of row.entries()){
            rowString+=symbol
            if(i!=row.length-1){
                rowString+=" | "
            }
        }
        console.log(rowString)
    }
}

const getWinnings=(rows,bet,Lines)=>{
    let winnings=0
    for(let row=0;row<Lines;row++){
        const symbols=rows[row]
        let allSame=true
        for(const symbol of symbols){
            if(symbol!=symbols[0]){
                allSame=false
                break
            }
        }
        if(allSame){
            winnings+=bet*SYMBOL_VALUE[symbols[0]]
        }
    }
    return winnings
}

const game=()=>{
    let balance=deposit()
    while(true){
        console.log("Your Balance is $"+balance)
        const numLines=numofLines()
        const Bet=placeBet(balance,numLines)
        balance-=Bet*numLines
        const reels=spin()
        console.log(reels)
        const rows=transpose(reels)
        console.log(rows)
        printRows(rows)
        const winnings=getWinnings(rows,Bet,numLines)
        balance+=winnings
        console.log("You Won $"+winnings)
        if(balance<=0){
            console.log("You ran out of money!")
            break
        }
        const playAgain=prompt("Do you want to continue! (y/n)")
        if(playAgain!="y"){
            break
        }
    }

}

game()