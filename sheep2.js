document.addEventListener('DOMContentLoaded', function() {
    // 初始化成语信息
    const chineseIdiom = '顺手牵羊'; // 这里替换成具体的成语
    const pinyin = 'shunshouqianyang'; // 这里替换成语的拼音
    const explanation = '顺手牵羊是一个汉语成语，最早出自《三十六计》。该成语的意思是顺便拿走别人的东西。'; // 这里替换成语的解释
    const imageFileName = 'sheep.png'; // 图片文件名
    const videoFileName = 'ssheep.mp4'; // 视频文件名

    // 设置成语信息
    document.getElementById('chineseIdiom').textContent = chineseIdiom;
    const details = document.getElementById('idiomDetails');
    details.innerHTML = `
        <li>拼音: ${pinyin}</li>
        <li>解释: ${explanation}</li>
    `;

    // 设置图片路径并显示图片
    const imageUrl = imageFileName; // 直接使用文件名作为路径
    const imageElement = document.getElementById('idiomImage');
    imageElement.src = imageUrl;

    // 显示图片后，延迟一定时间自动展示视频
    setTimeout(function() {
        const videoPlayer = document.getElementById('videoPlayer');
        const videoUrl = videoFileName; // 直接使用文件名作为路径
        videoPlayer.querySelector('source').src = videoUrl; // 设置视频源路径
        videoPlayer.load(); // 重新加载视频元素以识别新的源文件
        videoPlayer.play(); // 播放视频
    }, 5000); // 5000毫秒后执行，即5秒
});
