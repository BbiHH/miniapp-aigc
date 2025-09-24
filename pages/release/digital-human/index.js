Page({
  data: {
    originFiles: [],
    durationOptions: ['15秒', '30秒', '60秒'],
    selectedDuration: '',
    voiceOptions: ['男声', '女声', '电子音'],
    selectedVoice: ''
  },
  onDurationChange(e) {
    const { content } = e.detail; // 选中的 tag 内容
    this.setData({ selectedDuration: content });
  },
  onVoiceSelect(e) {
    const index = e.detail.value;
    this.setData({ selectedVoice: this.data.voiceOptions[index] });
  },
  handleSuccess(e) {
    this.setData({ originFiles: e.detail.files });
  },
  handleRemove(e) {
    this.setData({ originFiles: e.detail.files });
  },
  saveDraft() {
    wx.showToast({ title: '已存草稿', icon: 'success' });
  },
  release() {
    wx.showToast({ title: '已发布', icon: 'success' });
  }
});
