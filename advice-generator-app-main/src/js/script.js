const adviceTitleId = document.querySelector('#random-advice')
const textSpace = document.querySelector('#advice-text')
const ChangeAdvice = document.querySelector('#change-advice-randomly')
const apiUrl = "https://api.adviceslip.com/advice"

function showAdvice(){
    try {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((adviceData) => {
            adviceTitleId.innerHTML = adviceData.slip.id
            textSpace.innerHTML = `"${adviceData.slip.advice}"`
        })
        .finally(() => {
            ChangeAdvice.style.animation = ''
        })
    } catch(error){
        console.log(error)
    } 
}
showAdvice()

ChangeAdvice.addEventListener('click', () => {
    ChangeAdvice.style.animation = 'spin 1s infinite'
    showAdvice()  
})