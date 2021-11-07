findPrime(1,2,3,4,5,8,87,45,34) //madde 1
isFriendNumbers(1184,1210) //madde 2
findAllPerfectNumbers(1000) //madde 3
findAllPrimeNumbers(1000) //madde 4


//istenilen kadar sayının asal ya da değil kontrolünü yapan function
//1.madde
function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
       if(isPrime(numbers[i]))
       console.log(numbers[i] + " is a prime number")
       else
       console.log(numbers[i] + " is not prime number")      
    }
}

//gönderilen sayının asal olup olmadığını belirten function
function isPrime(number){
    let counter = 0
    for (let i = 2; i < number; i++) {
        if(number == 1 || number == 2){            
            return true
        }
        else if (number%i == 0)
            counter ++
    }
    if (counter == 0) {
        return true
    }
    else 
        return false
}

// gönderilen iki sayının arkadaş sayılar olup olmadığını kontrol eden function
//2.madde
function isFriendNumbers(number1,number2) {
    if (sumPositiveDivisor(number1)==number2 && sumPositiveDivisor(number2)==number1)
    {console.log(number1+ " and "+ number2+" are friendnumbers")}
    else  
    {console.log(number1+ " and "+ number2+" are not friendnumbers")} 
}

//gönderilen sayının kendisi hariç pozitif bölenlerinin toplamını döndüren function
function sumPositiveDivisor(number){
    let total=0
    for (let i = 1; i < number; i++) {
        if (number%i == 0)
        total= total+i
    }
    //console.log(total)
    return total
}

// gönderilen değere kadar olan sayılardan asal sayı olanları listeler
//4.madde
function findAllPrimeNumbers(value) {
    for (let i = 1; i <= value; i++) {
        if (isPrime(i)) {
            console.log(i+" is a prime number")
        }        
    }
    
}
// gönderilen sayı mükemmel sayı mı değil mi kontrolü yapar
function  isPerfectNumber(number) {
    if (number == sumPositiveDivisor(number)) {
        return true
    }
    else 
        return false
}
//gönderilen değere kadar olan sayılardan mükemmel sayı olanları listeler
//4.madde
function findAllPerfectNumbers(value) {
    for (let i = 1; i <= value; i++) {
        if (isPerfectNumber(i)) {
            console.log(i+" is a perfect number")
        }        
    }
}


//sumPositiveDivisor(1184)
//sumPositiveDivisor(1210)