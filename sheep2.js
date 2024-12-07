document.addEventListener('DOMContentLoaded', function() {
    const chineseIdiom = '顺手牵羊'; // 这里替换成具体的成语
    const pinyin = 'shunshouqianyang'; // 这里替换成语的拼音
    const explanation = '顺手牵羊是一个汉语成语，最早出自《三十六计》。该成语的意思是顺便拿走别人的东西'; // 这里替换成语的解释
    const imageFileName = '顺手牵羊.png';

    document.getElementById('chineseIdiom').textContent = chineseIdiom;
    document.getElementById('chineseIdiom').setAttribute('data-pinyin', pinyin);

    const details = document.getElementById('idiomDetails');
    details.innerHTML = `
        <li>拼音: ${pinyin}</li>
        <li>解释: ${explanation}</li>
    `;

    // 直接设置图片路径
    const imageUrl = `https://github.com/dante-rgb-cpu/dante10086.github.io/blob/5a8bb0b1db6d0080c8a64d592f491965cfb8f9cd/%E9%A1%BA%E6%89%8B%E7%89%B5%E7%BE%8A.png/${imageFileName}`;
    document.getElementById('idiomImage').src = imageUrl;
});
