  const qchatInit = document.createElement('script');
  qchatInit.src = "https://webchat.qontak.com/qchatInitialize.js";
  const qchatWidget = document.createElement('script');
  qchatWidget.src = "https://webchat.qontak.com/js/app.js";
  document.head.prepend(qchatInit);
  document.head.prepend(qchatWidget);
  qchatInit.onload = function() { qchatInitialize({
    id: "46562728-a22d-40d6-8aae-c59bac9daa70", 
    code: "IWJVWTwh6duEZzr0YvWyWg"  
  })};