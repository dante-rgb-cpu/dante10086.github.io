document.addEventListener('DOMContentLoaded', function() {
    const chineseIdiom = '成语'; // 这里替换成具体的成语
    const pinyin = 'Pinyin'; // 这里替换成语的拼音
    const explanation = 'Explanation'; // 这里替换成语的解释

    document.getElementById('chineseIdiom').textContent = chineseIdiom;
    document.getElementById('chineseIdiom').setAttribute('data-pinyin', pinyin);

    const details = document.getElementById('idiomDetails');
    details.innerHTML = `
        <li>拼音: ${pinyin}</li>
        <li>解释: ${explanation}</li>
    `;

    // 这里需要一个函数来生成成语生图的图片
    // 假设我们有一个API可以调用，生成成语的图片
    const imageUrl = `API_URL?idiom=${encodeURIComponent(chineseIdiom)}`;
    document.getElementById('idiomImage').src = imageUrl;
});