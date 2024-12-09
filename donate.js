//  noakhali donate calculate
document.getElementById('noakhali-donate-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const name = "Noakhali"
    const campaign = "Flood Noakhali"
    const donateInput = document.getElementById('noakhali-donate-input')
    const donateAmount = parseInt(donateInput.value)

    const getDonatedAmount = document.getElementById('noakhali-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)

    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)



    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('please enter valid number')

    }
    else {

        if (remainingBalance < donateAmount) {
            alert('Your balance is low to donate')
        }
        else {
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('noakhali-donated-balance-show').innerText = newDonatedAmount

            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance

            alert(`congrats, you successfully donated`)


            const clickDate = new Date()
            const singleTransaction = document.createElement('div')
            singleTransaction.innerHTML = `

            <div class="card bg-base-100 w-full mb-5 shadow-xl">
            <div class="card-body">
             <h2 class="card-title">${donateAmount} Taka is Donated for ${campaign} in ${name}, Bangladesh</h2>
    <p>${clickDate}</p>
    </div>
  </div>
</div>      
             `

            document.getElementById('history-section').appendChild(singleTransaction)
        }




    }

    donateInput.value = ''



})

//  feni donate calculate
document.getElementById('feni-donate-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const name = "Feni"
    const campaign = "Flood Feni"
    const donateInput = document.getElementById('feni-donate-input')
    const donateAmount = parseInt(donateInput.value)

    const getDonatedAmount = document.getElementById('feni-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)

    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)



    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('please enter valid number')

    }
    else {

        if (remainingBalance < donateAmount) {
            alert('Your balance is low to donate')
        }
        else {
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('feni-donated-balance-show').innerText = newDonatedAmount

            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance

            alert(`congrats, you successfully donated`)

            const clickDate = new Date()
            const singleTransaction = document.createElement('div')
            singleTransaction.innerHTML = `

            <div class="card bg-base-100 w-full mb-5 shadow-xl">
            <div class="card-body">
             <h2 class="card-title">${donateAmount} Taka is Donated for ${campaign} in ${name}, Bangladesh</h2>
    <p>${clickDate}</p>
    </div>
  </div>
</div>      
             `

            document.getElementById('history-section').appendChild(singleTransaction)
        }




    }

    donateInput.value = ''



})


//  injured donate calculate
document.getElementById('injured-donate-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const name = "Quota Movement"
    const campaign = "Injured"
    const donateInput = document.getElementById('injured-donate-input')
    const donateAmount = parseInt(donateInput.value)

    const getDonatedAmount = document.getElementById('injured-donated-balance-show').innerText
    const donatedAmount = parseInt(getDonatedAmount)

    const getRemainingBalance = document.getElementById('cash-balance-show').innerText
    const remainingBalance = parseInt(getRemainingBalance)



    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('please enter valid number')

    }
    else {

        if (remainingBalance < donateAmount) {
            alert('Your balance is low to donate')
        }
        else {
            const newDonatedAmount = donatedAmount + donateAmount
            document.getElementById('injured-donated-balance-show').innerText = newDonatedAmount

            const newRemainingBalance = remainingBalance - donateAmount
            document.getElementById('cash-balance-show').innerText = newRemainingBalance

            alert(`congrats, you successfully donated`)

            const clickDate = new Date()
            const singleTransaction = document.createElement('div')
            singleTransaction.innerHTML = `

            <div class="card bg-base-100 w-full mb-5 shadow-xl">
            <div class="card-body">
             <h2 class="card-title">${donateAmount} Taka is Donated for ${campaign} in the ${name}, Bangladesh</h2>
    <p>${clickDate}</p>
    </div>
  </div>
</div>      
             `

            document.getElementById('history-section').appendChild(singleTransaction)
        }




    }

    donateInput.value = ''



})