const refs = {
  otvet: document.querySelector(".js-otvet"),
  btnOks: document.querySelector(".btn-ok"),
  btnReload: document.querySelector(".btn-Reload"),
  primer: document.querySelector(".tab")
};

const a = 2;
// let tab2 = [];

// for (let i = 1; i <= 10; i++) {
//     tab2.push(`${a} * ${i} = ${a * i}`);
 
// }
let randomB = parseInt(Math.random() * 10);
console.log(randomB);
   
// let min = 2;
// let max = 9;

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(2, 5));
let bbb = getRandomArbitrary(2, 5)

console.log(`${bbb} * ${randomB} = ${bbb * randomB}`);


// const script = document.createElement('div');
//     div `${a} * ${randomB} = ${a * randomB}`;
// document.body.appendChild(script);



function destroyBoxes() {
  let aaa = refs.primer.
    insertAdjacentHTML('afterbegin',
    `
<p style = ' font-size: 200px; color: white; margin: 90px;'>
${bbb} x ${randomB} = 
</p>
`
  );
    // refs.inputControls.value = "";
}
destroyBoxes();

window.addEventListener('keypress', onKeypress);



refs.otvet.addEventListener('focusout', checkRezalt);
 function checkRezalt() {
    // let length = textInput.value.trim().length
    if (bbb * randomB === Number(refs.otvet.value)) {
        refs.otvet.classList.add('valid');
        refs.otvet.classList.remove('invalid');
    } else {
        refs.otvet.classList.add('invalid');
        refs.otvet.classList.remove('valid');
    }

    console.log(bbb * randomB);
  console.log(refs.otvet.value);
  

};
function onKeypress(e) {
  if (e.code === 'NumpadEnter') {
   return checkRezalt();
}
    if (e.code === 'Space') {
   return clickResalt();
    console.dir(e.code);
}
  
}

refs.btnReload.addEventListener('click', clickResalt);
function clickResalt() {
 location. reload() 
}