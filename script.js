const romajiHiragana = {
    "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
    "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
    "kka": "っか", "kki": "っき", "kku": "っく", "kke": "っけ", "kko": "っこ",
    "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
    "ssa": "っさ", "sshi": "っし", "ssu": "っす", "sse": "っせ", "sso": "っそ",
    "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
    "tta": "った", "cchi": "っち", "ttsu": "っつ", "tte": "って", "tto": "っと",
    "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
    "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
    "hha": "っは", "hhi": "っひ", "ffu": "っふ", "hhe": "っへ", "hho": "っほ",
    "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
    "mma": "っま", "mmi": "っみ", "mmu": "っむ", "mme": "っめ", "mmo": "っも",
    "ya": "や", "yu": "ゆ", "yo": "よ",
    "yya": "っや", "yyu": "っゆ", "yyo": "っよ",
    "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
    "rra": "っら", "rri": "っり", "rru": "っる", "rre": "っれ", "rro": "っろ",
    "wa": "わ", "wo": "を",
    "wwa": "っわ", "nn": "ん",
    "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
    "gga": "っが", "ggi": "っぎ", "ggu": "っぐ", "gge": "っげ", "ggo": "っご",
    "za": "ざ", "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "zza": "っざ", "jji": "っじ", "zzu": "っず", "zze": "っぜ", "zzo": "っぞ",
    "da": "だ", "de": "で", "do": "ど",
    "dda": "っだ", "dde": "っで", "ddo": "っど",
    "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
    "bba": "っば", "bbi": "っび", "bbu": "っぶ", "bbe": "っべ", "bbo": "っぼ",
    "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",
    "ppa": "っぱ", "ppi": "っぴ", "ppu": "っぷ", "ppe": "っぺ", "ppo": "っぽ",
    "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
    "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
    "sha": "しゃ", "shu": "しゅ", "sho": "しょ",
    "jya": "じゃ", "jyu": "じゅ", "jyo": "じょ",
    "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ",
    "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
    "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
    "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
    "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ",
    "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
    "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
    "ti": "ち", "tu": "つ", "di": "ぢ", "du": "づ"
};

let buffer = "";
let japaneseString ="";

const inpt = document.getElementById("text_field");

function convert_input(){
    if(romajiHiragana[buffer]){
        japaneseString = romajiHiragana[buffer];
        console.log(inpt.value);
        inpt.value = inpt.value.replace(buffer, "");
        buffer = "";
        inpt.value += japaneseString;
    }
    else if(buffer.length > 2){
        buffer = buffer.slice(1);
    }
}

inpt.addEventListener("keydown", (e) => {
    let letter = e.key.toLowerCase();
    if(/^[a-z]$/.test(letter)){
        buffer = buffer.concat(letter);
    }
})
inpt.addEventListener("keyup", (e) => {
        convert_input();
})