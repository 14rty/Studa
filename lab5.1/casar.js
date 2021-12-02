function cesar(str, shift, action){
    if(action == 'зашифровать'){
        let alphabet = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я" ]
        let pStr = [];
        for(let i = 0; i < str.length; i++){
            pStr.push(str[i].toLowerCase());
        }

        for(let i = 0; i < str.length; i++){
            pStr[i] = alphabet[(alphabet.indexOf(pStr[i]) + shift) % 35 ];
        }    
        let stro = "";
        for(let i = 0; i < str.length; i++){
            stro += pStr[i];
        }
        alert(stro);
        
    }else{
        let alphabet = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я" ]
        let pStr = [];
        for(let i = 0; i < str.length; i++){
            pStr.push(str[i].toLowerCase());
        }

        for(let i = 0; i < str.length; i++){
            pStr[i] = alphabet[Math.abs(alphabet.indexOf(pStr[i]) - shift) ];
        }    
        let stro = "";
        for(let i = 0; i < str.length; i++){
            stro += pStr[i];
        }
        alert(stro);
    }
}
let text = "арбуз";
cesar(text, 5, 'зашифровать');



        // let out = '';
        // for(let i = 0; i < str.lenght; i++){
        //     let code = str.charCodeAt(i);
        //     code = code + shift;
        //     out += String.fromCharCode(code);
        // }
        // alert(out);
