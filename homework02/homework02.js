const getMoment = () => {
    //moment
    const watch = document.querySelector('#watch');
    setInterval(() => {
        
        const curTime = moment().format('YYYY-MM-DD HH:mm:ss');
        watch.innerHTML = `<p>${curTime}</p>`;
        
    }, 1000);
    
    const hour = Number(moment().format('HH'));

    return hour;
}


document.addEventListener("DOMContentLoaded", function(){

    const radios = document.getElementsByName('discount');
    const hour = getMoment();
    
    if (hour >= 18) {  
        radios.forEach(radio => {
            radio.disabled = true;
        });
        
    } else {
        radios.forEach(radio => {
            radio.disabled = false;
        });
    }
    
});


const calculation = () => {
    // 입장인원
    const adultNum = document.querySelector('#adultNum');
    const childNum = document.querySelector('#childNum');

    const aNum = Number(adultNum.value);
    const cNum = Number(childNum.value);

    // 입장료
    const adultPrice = document.querySelector('#adultPrice');
    const childPrice = document.querySelector('#childPrice');


    const aPrice = Number(adultPrice.value);
    const cPrice = Number(childPrice.value);


    if (isNaN(aNum) || isNaN(cNum)) {
        alert('숫자가 아닙니다. 다시 입력해주세요.');
        return;
    }

    //할인 계산 조건
    const totalNum = aNum + cNum;

    let noDiscount = aPrice*aNum + cPrice*cNum;
    
    let discount = noDiscount * 8 / 10;
    const radios = document.getElementsByName('discount');
    const selected = Array.from(radios).find(elem => elem.checked);

  
 
     //야간할인
     const adultNightPrice = document.querySelector('#adultNightPrice');
     const childNightPrice = document.querySelector('#childNightPrice');
 
     const aNPrice = Number(adultNightPrice.value);
     const cNPrice = Number(childNightPrice.value);

     const hour = getMoment();

 
     let nightPrice = aNPrice*aNum + cNPrice*cNum; 

     if (hour >= 18)  {
        document.querySelector('#totalPrice').value = nightPrice.toLocaleString();
     } else {
         if (totalNum >= 5 && selected.value == 'yes') {
        //discount.toLocaleString() = document.querySelector('#totalPrice').value;
        document.querySelector('#totalPrice').value = discount.toLocaleString();
        icon.src = "images/smile.png";
    } else if (totalNum < 5 && selected.value == 'no') {
        // noDiscount = document.querySelector('#totalPrice');
        document.querySelector('#totalPrice').value = noDiscount.toLocaleString();
        icon.src = "images/cry.png";
    } else if(totalNum >= 5 && selected.value == 'no') {
        document.querySelector('#totalPrice').value = noDiscount.toLocaleString();
        icon.src = "images/cry.png";
    } else if (totalNum < 5 && selected.value == 'yes') {
        alert('인원 수 파악을 제대로 하고, 할인 선택 해주세요!!');
    } 
}
    
}

const random = () => {
    let random = [];

    const ranNum = Number(document.querySelector('#totalPerson').value);

    for (let i=0; i<6; i++) {

        let rNum= Math.floor(Math.random() * ranNum) + 1;
        
        for(let j in random) {
            while(rNum == random[j]) {

                rNum = Math.floor(Math.random() * ranNum) + 1;

            }
        }

        random.push(rNum);
        
    }

    const output1 = document.querySelector('#output1');
    const output2 = document.querySelector('#output2');
    const output3 = document.querySelector('#output3');
    const output4 = document.querySelector('#output4');
    const output5 = document.querySelector('#output5');
    const output6 = document.querySelector('#output6');

  
    output1.innerText = random[0];
    output2.innerText = random[1];
    output3.innerText = random[2];
    output4.innerText = random[3];
    output5.innerText = random[4];
    output6.innerText = random[5];


}












