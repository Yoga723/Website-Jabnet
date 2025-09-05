window.chatwootSettings = { position: "right", type: "standard", launcherTitle: "Chat with us" };
(function (d, t) {
  var BASE_URL = "https://omni.jabnet.id";
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: "17hRXiA2xifGmf3XYYWNWEyj",
      baseUrl: BASE_URL,
    });
  };
})(document, "script");