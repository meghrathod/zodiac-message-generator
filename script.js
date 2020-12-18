
let messages = {
    sunsign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    luck: ['poor', 'fine', 'good', 'excellent'],
    time: ['rusty', 'okayish', 'great', 'amazing'],
};

function generateRandNum(num){
    return (Math.floor(Math.random()*num))
}

function generateRandMessage(){

    let zodiac = messages.sunsign[generateRandNum(messages.sunsign.length-1)]
    let preInd = generateRandNum(messages.luck.length-1)
    let prediction = messages.luck[preInd] 
    var passing = messages.time[preInd+(Math.floor(Math.random()*3)-1)]
    if(prediction === 'poor'){
        passing = 'rusty'
    }


    console.log(`Hello there human! Your zodiac sign, ${zodiac}, shows that your luck today is ${prediction} and you would still end up with a ${passing} day. Good Luck!`)


}

generateRandMessage()