"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      picture: [
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg" },
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg" },
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg" },
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg" },
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onPreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.picture.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.picture, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onPreviewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/A学习/uni-app小程序项目实战/uni-app-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
