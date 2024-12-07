'document.addEventListener('DOMContentLoaded', function() {
    const chineseIdiom = '顺手牵羊'; // 这里替换成具体的成语
    const pinyin = 'shunshouqianyang'; // 这里替换成语的拼音
    const explanation = '顺手牵羊是一个汉语成语，最早出自《三十六计》。该成语的意思是顺便拿走别人的东西'; // 这里替换成语的解释


    document.getElementById('chineseIdiom').textContent = chineseIdiom;
    document.getElementById('chineseIdiom').setAttribute('data-pinyin', pinyin);

    const details = document.getElementById('idiomDetails');
    details.innerHTML = `
        <li>拼音: ${pinyin}</li>
        <li>解释: ${explanation}</li>
    `;

    // 直接设置图片路径
    const imageUrl ='sheep.png';
    document.getElementById('idiomImage').src = imageUrl;
});
