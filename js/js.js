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


console.log(`${a} * ${randomB} = ${a * randomB}`);


// const script = document.createElement('div');
//     div `${a} * ${randomB} = ${a * randomB}`;
// document.body.appendChild(script);



function destroyBoxes() {
  let aaa = refs.primer.
    insertAdjacentHTML('afterbegin',
    `
<p style = ' font-size: 200px; color: white; margin: 90px;'>
${a} x ${randomB} = 
</p>
`
  
  
  );
    // refs.inputControls.value = "";
}
destroyBoxes();

refs.otvet.addEventListener('focusout', e => {
    // let length = textInput.value.trim().length
    if (a * randomB === Number(refs.otvet.value)) {
        refs.otvet.classList.add('valid');
        // refs.otvet.classList.remove('invalid');
    } else {
        refs.otvet.classList.add('invalid');
        // refs.otvet.classList.remove('valid');
    }

    console.log(a * randomB);
    console.log(refs.otvet.value);
});


refs.btnReload.addEventListener('click', clickResalt);
function clickResalt() {
 location. reload() 
}