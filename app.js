const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
const i=Math.floor(Math.random()*500)+1 ;
const j=Math.floor(Math.random()*500)+1 ;

b.style.left=i+"px"
b.style.top=j+"px"


}
const a = document.querySelector('button.button--yes')
a.addEventListener("click", Click);
function Click(){
   alert('I know mabilis pero im sure what I feel right now\n So im going to take a risk for one last time and I think ito na ang oras nayun hehe\n\n I like you but im scared. ')
    window.open("webpage.html")

}
