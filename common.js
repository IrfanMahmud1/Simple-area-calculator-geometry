function getValues(id)
{
    const input = document.getElementById(id);
    const inputValue = parseFloat(input.value);
    return inputValue;
}
let count = 1;
function display(area,id)
{
    
    const displayArea = document.getElementById('display-area');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText = count + id;
    count++;
    const p2 = document.createElement('p');
    p2.innerText = area + " cm^2";
    const button = document.createElement('button');
    button.innerText = "Convert to m^2";
    button.style.color = 'white';
    button.style.padding = '3px';
    button.style.backgroundColor = 'blue';
    button.style.borderRadius = '5px';
    div.style.display = 'flex';
    div.style.gap = '3';
    div.style.justifyContent = 'space-between';
    div.style.paddingTop = '5px';
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);
    displayArea.appendChild(div);
    
}


// function display(area,id)
// {
//     const displayArea = document.getElementById('display-area');
//     const div = document.createElement('div');
//     const p1 = document.createElement('p');
//     // const span = document.createElement('span');
//     // // span.innerText= "$.";
   
//     // const listNo = displayArea.querySelector('span');
    
//     // if(listNo)
//     // {
        
//     //     span.innerText=parseInt(listNo.innerText)+1;
      
//     // }
//     // else
//     // {
//     //     span.innerText = "1";
//     // }
//     // p1.appendChild(span);
//     p1.innerText = id;
    
    
//     const p2 = document.createElement('p');
//     p2.innerText = area + " cm^2";
//     const button = document.createElement('button');
//     button.innerText = "Convert to m^2";
//     button.style.color = 'white';
//     button.style.padding = '3px';
//     button.style.backgroundColor = 'blue';
//     button.style.borderRadius = '5px';
//     div.style.display = 'flex';
//     div.style.justifyContent = 'space-between';
//     div.style.paddingTop = '5px';
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(button);
//     displayArea.appendChild(div);
// }