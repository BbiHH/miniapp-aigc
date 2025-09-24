Page({
  data: {
    originFiles: [],
    gridConfig: { column: 1, width: 600, height: 340 }, // 视频展示区域
    desc: '',
    title: '',
    voiceOptions: ['女声-温柔', '男声-浑厚', '标准女声'],
    selectedVoice: '',
    tags: ['黑白风格', '彩色风格', '卡通风格'],
  },

  // 上传视频成功
  handleVideoSuccess(e) {
    this.setData({ originFiles: e.detail.files });
    console.log('视频上传成功', e.detail.files);
  },

  // 移除视频
  handleVideoRemove(e) {
    this.setData({ originFiles: [] });
    console.log('视频移除', e.detail);
  },

  // 描述输入
  onDescInput(e) {
    this.setData({ desc: e.detail.value });
  },

  // 标题输入
  onTitleInput(e) {
    this.setData({ title: e.detail.value });
  },

  // 选择语音
  onVoiceSelect(e) {
    const index = e.detail.value;
    this.setData({ selectedVoice: this.data.voiceOptions[index] });
  },

  // 生成按钮
  onGenerate() {
    if (!this.data.originFiles.length) {
      wx.showToast({ title: '请先上传视频', icon: 'none' });
      return;
    }

    wx.showLoading({ title: '生成中...' });

    // 模拟生成逻辑
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '生成完成', icon: 'success' });
      wx.navigateBack();
    }, 2000);
  },
});
