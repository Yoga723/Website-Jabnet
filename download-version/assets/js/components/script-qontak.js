const qchatInit = document.createElement("script");
qchatInit.src = "https://webchat.qontak.com/qchatInitialize.js";
const qchatWidget = document.createElement("script");
qchatWidget.src = "https://webchat.qontak.com/js/app.js";
document.head.prepend(qchatInit);
document.head.prepend(qchatWidget);
qchatInit.onload = function () {
  qchatInitialize({
    id: "098635d4-8373-412f-927c-83a9af5b9f22",
    code: "wgCbG3k7Fb2lIvhHdS1oiA",
  });
};
