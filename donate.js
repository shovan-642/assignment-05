//  noakhali donate calculate
 document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault()    
    const donateInput = document.getElementById('noakhali-donate-input')
    const donateAmount = parseInt(donateInput.value )

    const getDonatedAmount = document.getElementById('noakhali-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)
    
    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)
    
    

    if(isNaN(donateAmount) || donateAmount<=0){
        alert('please enter valid number')
        
    }
    else{

        if(remainingBalance < donateAmount){
            alert('Your balance is low to donate')
        }
        else{
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('noakhali-donated-balance-show').innerText = newDonatedAmount
    
            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance
        }


        

    }

    donateInput.value = ''



})

//  feni donate calculate
document.getElementById('feni-donate-btn').addEventListener('click',function(event){
    event.preventDefault()    
    const donateInput = document.getElementById('feni-donate-input')
    const donateAmount = parseInt(donateInput.value )

    const getDonatedAmount = document.getElementById('feni-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)
    
    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)
    
    

    if(isNaN(donateAmount) || donateAmount<=0){
        alert('please enter valid number')
        
    }
    else{

        if(remainingBalance < donateAmount){
            alert('Your balance is low to donate')
        }
        else{
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('feni-donated-balance-show').innerText = newDonatedAmount
    
            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance
        }


        

    }

    donateInput.value = ''



})


//  injured donate calculate
document.getElementById('injured-donate-btn').addEventListener('click',function(event){
    event.preventDefault()    
    const donateInput = document.getElementById('injured-donate-input')
    const donateAmount = parseInt(donateInput.value )

    const getDonatedAmount = document.getElementById('injured-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)
    
    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)
    
    

    if(isNaN(donateAmount) || donateAmount<=0){
        alert('please enter valid number')
        
    }
    else{

        if(remainingBalance < donateAmount){
            alert('Your balance is low to donate')
        }
        else{
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('injured-donated-balance-show').innerText = newDonatedAmount
    
            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance
        }


        

    }

    donateInput.value = ''



})