function generateCaptcha(){
    const captchaContainer = document.getElementById("captcha")
    const captchaInput = document.getElementById("captchaInput")
    const checkButton = document.getElementById("checkButton")

    const captchaCode = generateRandomCode();
    captchaContainer.textContent = captchaCode;
    captchaInput.value = ""
    checkButton.textContent = "Verify"
    checkButton.className = ""
}

function checkCaptcha(){
    const captchaContainer = document.getElementById("captcha")
    const captchaInput = document.getElementById("captchaInput")
    const checkButton = document.getElementById("checkButton")

    const generateCaptcha = captchaContainer.textContent.trim();
    const enteredCaptcha = captchaInput.value.trim();

    if(generateCaptcha === enteredCaptcha){
        checkButton.textContent = "correct"
        checkButton.className = "correct"
    }else{
        checkButton.textContent = "Try Again"
        checkButton.className = "try-again"
        captchaInput.value = ""
    }
}

function generateRandomCode(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let captchacode = ""
    for(let i = 0;i < 6;i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        captchacode += characters.charAt(randomIndex);
    }
    return captchacode;
}

generateCaptcha();