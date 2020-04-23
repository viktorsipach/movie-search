
const getWords = async(page, group) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

const getTranslation = async(word) => {
    const FIRST_ELEMENT = 0;
    const key = 'trnsl.1.1.20200423T163026Z.a63bf4146a5c5674.60216300ebdbdbbbc5172f0c4180563fd7a91840'
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text= ${word} &lang=en-ru`;
    const res = await fetch(url);
    const data = await res.json();
    const translate = data.text[FIRST_ELEMENT].toLowerCase();
    return translate;
  }

export {
    getWords, getTranslation
}