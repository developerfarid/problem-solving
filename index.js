


const cardDistribution = (array) => {
    function pad(number, length) { 
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;

}

    const result = []
    
    
    if (!(Array.isArray(array)) || (array.length == 0)) {
        console.log("ghfghf");
        return
    }
    array.map((item, index) => {
        const firstTwoDigit = item?.district.slice(0, 2).toUpperCase();
        const secondTwoDigit = item?.currentYear.toString().substr(-2);
        const thirdTwoDigit = item?.postNo.toString().slice(0, 2);
        const fourBirthDigit = item?.birthYear.toString();
        const generateNumber = pad(index + 1, 6)
        const gift = Number(generateNumber) % 2 ? "W" : "R"
        const priority= item.priority
        const cardNumber = firstTwoDigit.concat(secondTwoDigit, thirdTwoDigit, fourBirthDigit, generateNumber);
        result.push({cardNumber, gift, priority })
    })
    
    result.sort((a, b) => {
            let fa = a.cardNumber.toLowerCase(),
              fb = b.cardNumber.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;  
    })

    result.sort((a, b) => {
        return a.priority - b.priority;
    })
    console.log(result);
    return result
}

cardDistribution([
    {
        name:"Mr Rashed", birthYear:1999, currentYear:2022, district:"Dhaka", postNo:1200, priority:2
    },
    {
        name:"Mr Raju", birthYear:1995, currentYear:2022, district:"Ragshahi", postNo:1211, priority:1
    },

]);






