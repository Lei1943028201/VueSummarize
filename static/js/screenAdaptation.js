/**
 * Created by huayu on 2018/4/16.
 */
let dpr = window.devicePixelRatio || 1;
//比例
let scale = 1/dpr;
//获取宽度
let width = document.documentElement.clientWidth;
let meta = document.querySelector('meta[name="viewport"]');
meta.setAttribute('content','initial-scale='+scale);
//rem * 2
let styleN = document.createElement('style');
styleN.innerHTML = 'html{font-size: '+ (width/160*dpr) +'px !important;}'
document.head.appendChild(styleN);