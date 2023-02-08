const input = document.querySelector('#input')
const btnSubmit = document.querySelector('#submit')
const iconLoading = document.querySelector('.loading')
const form = document.querySelector('#form')

function buildHtml(data){
  form.innerHTML = data
}

function response(promise){
  return new Promise(function(resolve, reject){
    resolve(promise)
  })
}

btnSubmit.onclick = function start(){
  btnSubmit.classList.add('submitNone')
  iconLoading.classList.add('loadingVisible')
  setInterval(() => {
    iconLoading.classList.remove('loadingVisible')
    response(input.value).then(buildHtml)
  }, 10000);
}  