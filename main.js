//Chuck Norris Joke Randomizer
var form = document.getElementById('searchCN')
var jokeOutput = document.getElementsByClassName('jokeOutputCN')[0]
var pTag = document.createElement('p')
var imgTag = document.createElement('img')
form.addEventListener('submit', function(event) {
  event.preventDefault();
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then(function(response) {
      return response.json()
        .then(function(jokeData) {
          addData(jokeData)
        })
    })
})
function addData(jokeData) {
  pTag.innerText = (jokeData.value)
  imgTag.setAttribute('src', jokeData.icon_url)
  imgTag.setAttribute('alt', 'Icon with cartoon photo of Chuck Norris')
  jokeOutput.append(pTag, imgTag)
}
//Dad Joke Randomizer
var formDJ = document.getElementById('searchDJ')
var jokeOutputDJ = document.getElementsByClassName('jokeOutputDJ')[0]
var pTagDJ = document.createElement('p')
formDJ.addEventListener('submit', function(event2) {
  event2.preventDefault();
  fetch(`https://icanhazdadjoke.com/slack`)
    .then(function(response) {
      return response.json()
        .then(function(jokeDataDJ) {
          addDataDJ(jokeDataDJ)
        })
    })
})
function addDataDJ(jokeDataDJ) {
  pTagDJ.innerText = (jokeDataDJ.attachments[0].text)
  jokeOutputDJ.append(pTagDJ)
}
//Inspiration Quote Randomizer
var formIQ = document.getElementById('searchIQ')
var jokeOutputIQ = document.getElementsByClassName('jokeOutputIQ')[0]
var pTagIQ = document.createElement('p')
formIQ.addEventListener('submit', function(event3) {
  event3.preventDefault();
  fetch('https://talaikis.com/api/quotes/random/')
    .then(function(response) {
      return response.json()
        .then(function(jokeDataIQ) {
          addDataIQ(jokeDataIQ)
        })
    })
})
function addDataIQ(jokeDataIQ) {
  pTagIQ.innerText = (jokeDataIQ.quote + " - " + jokeDataIQ.author)
  jokeOutputIQ.append(pTagIQ)
}
