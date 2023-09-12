document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = parseFloat(triangleBase.value);
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = parseFloat(triangleHeight.value);

    const area = (0.5 * triangleBaseValue * triangleHeightValue).toFixed(1);

    // triangleBase.value ='';
    // triangleHeight.value ='';

    const displayArea = document.getElementById('display-area');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerText ="1. Triangle";
    const p2 = document.createElement('p');
    p2.innerText = area + " cm^2";
    const button = document.createElement('button');
    button.innerText = "Convert to m^2";
    button.style.color = 'white';
    button.style.padding = '3px';
    button.style.backgroundColor = 'blue';
    button.style.borderRadius = '5px';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.paddingTop = '5px';
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);
    displayArea.appendChild(div);
})