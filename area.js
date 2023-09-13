document.getElementById('btn-triangle').addEventListener('click',function(){
    
    const input1 = getValues('triangle-base');
    const input2 = getValues('triangle-height');
    if( !input1 || !input2 )
        alert("Empty field!");
    else
    {
        const triangleArea = (0.5 * input1 * input2).toFixed(1);
        display(triangleArea,'Triangle');
    }
})
document.getElementById('btn-rectangle').addEventListener('click',function(){
    
    const input1 = getValues('rectangle-length');
    const input2 = getValues('rectangle-width');
    if( !input1 || !input2)
        alert("Empty field!");
    else
    {
        const triangleArea = (input1 * input2).toFixed(1);
        display(triangleArea,'Rectangle');
    }
})
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    
    const input1 = getValues('parallelogram-base');
    const input2 = getValues('parallelogram-height');
    if( !input1 || !input2)
        alert("Empty field!");
    else
    {
        const triangleArea = ( input1 * input2).toFixed(1);
        display(triangleArea,'Parallelogram');
    }
})
document.getElementById('btn-ellipse').addEventListener('click',function(){
    
    const input1 = getValues('ellipse-a');
    const input2 = getValues('ellipse-b');
    if( !input1 || !input2)
        alert("Empty field!");
    else
    {
        const triangleArea = (3.14 * input1 * input2).toFixed(1);
        display(triangleArea,'Ellipse');
    }
})
document.getElementById('btn-rhombus').addEventListener('click',function(){
    
    const input1 = getValues('rhombus-d1');
    const input2 = getValues('rhombus-d2');
    if( !input1 || !input2)
        alert("Empty field!");
    else
    {
        const triangleArea = (0.5 * input1 * input2).toFixed(1);
        display(triangleArea,'Rhombus');
    }
})
document.getElementById('btn-pentagon').addEventListener('click',function(){
    
    const input1 = getValues('pentagon-p');
    const input2 = getValues('pentagon-b');
    if( !input1 || !input2)
        alert("Empty field!");
    else
    {
        const triangleArea = (0.5 * input1 * input2).toFixed(1);
        display(triangleArea,'Pentagon');
    }
})

document.getElementById('btn-main').addEventListener('click',function(){
    window.location.href = "www.index.html";
})

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = "blog.html";
})

// const displayArea = document.getElementById('display-area');
//     const div = document.createElement('div');
//     const p1 = document.createElement('p');
//     p1.innerText ="1. Triangle";
//     const p2 = document.createElement('p');
//     p2.innerText = triangleArea + " cm^2";
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