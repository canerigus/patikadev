
document.addEventListener("DOMContentLoaded", () => {
  main();
  document.querySelector("#liveToastBtn").onclick = () => {
    let yenitask = document.createElement('li');
    yenitask.innerHTML = document.querySelector('#task').value;

    if (yenitask.innerHTML == "" || yenitask.innerHTML.charAt(0) == " ") {
      $('.error').toast('show')
      document.querySelector('#task').value = "";
    } 
    else {
      document.querySelector('#list').append(yenitask);
      document.querySelector('#task').value = "";
      $('.success').toast('show')
      let yenibutton = document.createElement('button')
      yenitask.appendChild(yenibutton);
      yenibutton.classList.add('buttonn')
      yenibutton.innerText = "Sil"
      main();
    }
  }
});

function checkTask() {
    this.classList.toggle("checked");
}

function deleteTask() {
  this.parentElement.remove();
}

function main() {
  let li = document.getElementsByTagName('li');
  document.querySelectorAll(".buttonn").forEach(el => el.remove());
  for (let i = 0; i < li.length; i++){
    let button = document.createElement('button')
    button.classList.add('buttonn')
    button.innerText = "Sil"
    li[i].appendChild(button);
    li[i].onclick = checkTask;
    button.onclick = deleteTask;
  }
}
