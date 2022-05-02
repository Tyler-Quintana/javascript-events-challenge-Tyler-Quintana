function clicked () {
    console.log("I've been clicked")
    let paragraph1 = document.getElementById('paragraph1')
    console.log(paragraph1.style.color)

    paragraph1.style.color = 'red'
}

function mouseOver (){
    console.log("You are over me")
    let paragraph2 = document.getElementById('paragraph2')
    console.log(paragraph2.style.fontFamily)
    paragraph2.style.fontFamily = 'Brush Script MT'

}

function highlight(text) {
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        console.log("Highlight a word")
        inputText.innerHTML = innerHTML;
        console.log(highlight())
    }
}



const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log("Adding key inputs")
    log.textContent += ` ${e.code}`;
    log.textContent += ` ${e.code}`;
}

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has('bar'));
// expected result: false


    function toRegExp(text) {
        return new RegExp(text, 'g');
    }

    function toSpan(text, className) {
        return '<span class="' + className + '">' + text + '</span>';
    }

    const input = document.querySelector('#input-text');
    const text = document.querySelector('#text');
    const content = text.textContent;

    input.addEventListener('input', e => {
        text.textContent = content;
        let string = e.target.value;

        if (string.length > 0) {
            text.innerHTML = text.textContent.replace(toRegExp(string), toSpan(string, 'highlight'));
        }
    })

