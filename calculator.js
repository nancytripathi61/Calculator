let inp = document.querySelector('input')

let btn = document.querySelectorAll('button')
// console.log(btn,"rrrrr");   //to check if button is select or not
for(let button of btn)
{
    button.addEventListener('click',()=>{
        let text=button.innerText

        if(text==="C")
        {
            inp.value=''
        }
        else if(text==="=")
        {
            inp.value= eval(inp.value)
        }
        else{
            inp.value=inp.value+text
        }
    })
    

}


