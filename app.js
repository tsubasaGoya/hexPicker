var btn = document.querySelector('#theBtn'),
    checkBox = document.getElementById('checkbox'),
    body = document.body,
    hex = document.getElementById('theHex');
    colorList = ['red','green','blue','yellow'],
    defaultColor = 'white',
    theColor = '';

function getRandomColor() {
    return Math.floor(Math.random() * colorList.length);
}
checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        alert('A session started');
        btn.removeAttribute('disabled');
        // console.log(colorList.length);
    } else {
        alert('You end the session. Goodbye');
        var dis = document.createAttribute('disabled');
        btn.setAttributeNode(dis);
        body.style.backgroundColor = defaultColor;
        hex.textContent = null;
    }
})

btn.addEventListener('click', function() {
    console.log(getRandomColor());
    theColor = colorList[getRandomColor()];
    body.style.backgroundColor = theColor;
    hex.textContent = theColor;
})
