export function inlineThemeScript() {
  return `(function(){try{var k='fpj-theme';var e=localStorage.getItem(k);var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=e?e:(m?'dark':'light');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(_){} })();`;
}
