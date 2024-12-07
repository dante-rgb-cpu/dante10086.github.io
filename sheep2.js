document.addEventListener('DOMContentLoaded', function() {
    // 初始化成语信息
    const chineseIdiom = '顺手牵羊'; // 这里替换成具体的成语
    const pinyin = 'shunshouqianyang'; // 这里替换成语的拼音
    const explanation = '顺手牵羊是一个汉语成语，最早出自《三十六计》。 该成语的意思是顺便拿走别人的东西'; // 这里替换成语的解释
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
    const imageUrl = 'sheep.png';
    const imageElement = document.getElementById('idiomImage');
    imageElement.src = imageUrl;
    imageElement.style.display = 'block';

    // 获取视频元素
    const videoPlayer = document.getElementById('videoPlayer');

    // 显示视频的函数
    function showVideo() {
        // 隐藏图片
        imageElement.style.display = 'none';
        // 显示视频
        videoPlayer.style.display = 'block';
        // 播放视频
        videoPlayer.play();
    }

    // 为显示视频按钮添加事件监听
    const showVideoButton = document.getElementById('showVideoButton');
    showVideoButton.onclick = showVideo;
});
