function FindProxyForURL(url, host) {
  var proxy = "PROXY 94.159.100.41:8000";

  if (shExpMatch(host, "*.youtube.*") ||
      shExpMatch(host, "*instagram.*") ||
      shExpMatch(host, "*pathofexile.*") ||
      shExpMatch(host, "chatgpt.com") ||
      shExpMatch(url, "*://*.googlevideo.com/*") ||
      shExpMatch(host, "gemini.google.com")) { // Добавлены строки
    return proxy;
  }

  return "DIRECT";
}
