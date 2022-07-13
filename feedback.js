console.log('connected')
const star=document.getElementsByClassName('reaction_star');
console.log(star);
for(let i=0;i<star.length;i++){
    star[i].addEventListener('click',()=>{
        console.log(i);
        for(let j=0;j<star.length;j++){
            if(j>=i){
                star[j].style.color='red';
            }
            else{
                star[j].style.color='gold';
            }
        }
    })
}

const reactions=document.getElementsByClassName('emoji');
for(let i=0;i<reactions.length;i++){
    let curr_location;
    reactions[i].addEventListener('click',()=>{
        curr_location=i;
        for(let j=0;j<5;j++){
            if(j===curr_location){
                reactions[curr_location].style.opacity='1';
            }
            else{
                reactions[j].style.opacity='0.6';
            }
        }
    })
}