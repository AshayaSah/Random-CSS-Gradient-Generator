    let btn1 = document.querySelector(".myButton1");
    let btn2 = document.querySelector(".myButton2");
    let gradientCode = document.querySelector(".gradientCode")
    let arrows = document.querySelector(".arrow");
    let slider = document.querySelector(".slider");

    let rgb1 = '#107cf6';
    let rgb2 = '#ffffff';
    let deg = '90deg';
    let sliderValue=5;
    let leftFade = 0;
    let rightFade = 100;

    //Function to only generate the random hex code for the color
    const hexGenerator = () => {
        
        let hexValues = "0123456789abcdef";

        let hexBth1 = "#";

        for(let i = 0; i<6; i++){
            let randGenerator = hexValues[Math.floor(Math.random()*16)];
            hexBth1 = hexBth1 + randGenerator;
        }
        return hexBth1;
    }

    //Function to update the left button
    const handleBtn1 = () => {
        rgb1 = hexGenerator();
        // console.log(rgb1);

        btn1.textContent=rgb1;
        document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
        gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
    }

    //function to update the right button
    const handleBtn2 = () => {
        rgb2 = hexGenerator();
        // console.log(rgb2);

        btn2.textContent=rgb2;
        document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
        gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
    }

    //Adding the event listener for buttons
    btn1.addEventListener('click',handleBtn1);
    btn2.addEventListener('click',handleBtn2);

    //adding the event listener for rotational images
    arrows.addEventListener('click', (event)=>{
        // console.log(event.target.getAttribute("title"));
        let arrowSelection = event.target.getAttribute("title")
        switch(arrowSelection){
            case ('45deg'):
                deg = '45deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('90deg'):
                deg = '0deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('135deg'):
                deg = '315deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('180deg'):
                deg = '270deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('225deg'):
                deg = '225deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('270deg'):
                deg = '180deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('315deg'):
                deg = '135deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            case ('0deg'):
                deg = '90deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                break;
            default:
                deg = '90deg';
                document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
                gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
        }
    });

    slider.addEventListener('input', () => {
        sliderValue = slider.value;
        leftFade = 50 - (sliderValue)*10;
        // console.log(leftFade);
        rightFade = 50 + (sliderValue)*10;
        // console.log(rightFade);

        document.body.style.background=`linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
        gradientCode.textContent=`background: linear-gradient(${deg}, ${rgb1} ${leftFade}%, ${rgb2} ${rightFade}%)`;
    });



    gradientCode.addEventListener('click', () => {
        navigator.clipboard.writeText(gradientCode.innerHTML);
        alert(`Copied:${gradientCode.innerHTML}`);
    });