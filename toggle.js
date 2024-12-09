document.getElementById('history-section-btn').addEventListener('click', function(){
    
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('history-section-btn').classList.add('bg-color-01')

    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('donate-section-btn').classList.remove('bg-color-01')
})


document.getElementById('donate-section-btn').addEventListener('click', function(){
    
    document.getElementById('donate-section').classList.remove('hidden')
    document.getElementById('donate-section-btn').classList.add('bg-color-01')

    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('history-section-btn').classList.remove('bg-color-01')
})