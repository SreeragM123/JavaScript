const quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Well done is better than well said. -Benjamin Franklin"
]

const usedIndexes= new Set()
const quoteElement=document.getElementById("quote")
function generate(){
    if(usedIndexes.size>=quotes.length){
        usedIndexes.clear()
    }
    while(true){
        const random=Math.floor(Math.random()*quotes.length)
        if (usedIndexes.has(random)) continue

        const quote=quotes[random]
        quoteElement.innerHTML=quote
        usedIndexes.add(random)
        break
    }
    
}