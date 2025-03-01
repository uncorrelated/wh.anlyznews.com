// 画像表示部分のDIVのIDを指定
var DivId = "div070106";
// 画像タグのIDを指定
var ImgId = "img070106";
// 背景色を指定
var BgColor = "#F0F0F0";
// 枠の色を指定
var FrameColor = "#101010";
// フォント色を指定
var Color = "#110011"
// 画像などを表示するDIV要素
var ImgDiv = null;
// 透過コントロール用のDIV要素
var OpacityDiv = null;
// 透過の程度
var OpacityDegree = 25;
// DIV要素内マージン
var DivMargin = 4;

// 画像ファイルの位置あわせと表示
// Onloadイベントで呼ばれる
function setImage(evnt)
{
  // BODY 要素を検索
  var body = document.getElementsByTagName("body").item(0);
  // BODY 要素の縦横サイズと、スクロール位置
  var width, height, top, left;
  // 画像オブジェクト
  var img;
  // ブラウザータイプで分岐
  if(is_ie6up){
    // IEはDoctype無しなどの後方互換モードで座標関数の挙動が変わるため修正
    if("BackCompat" == document.compatMode){
      // ウィンドウのサイズを取得
      width = document.body.clientWidth;
      height = document.body.clientHeight;
      // スクロール位置を取得
      top = document.body.scrollTop;
      left = document.body.scrollLeft;
    } else {
      // ウィンドウのサイズを取得
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
      // スクロール位置を取得
      top = document.documentElement.scrollTop;
      left = document.documentElement.scrollLeft;
    }
    // 画像オブジェクトを取得
    img = document.all[ImgId];
  } else {
    // ウィンドウのサイズを取得
    width = window.innerWidth;
    height = window.innerHeight;
    // スクロール位置を取得
    top = window.pageYOffset;
    left = window.pageXOffset;
    // 画像オブジェクトを取得
    img = document.getElementById(ImgId);
  }

  // Chromeがimgタグ追加前にonloadイベントを発生させるため、
  // 画像オブジェクトが取得できない場合があるので、waitを入れる
  if(!img){
    setTimeout("setImage(null);", 100);
    return;
  }

  // 縦横サイズ0で表示を行う。
  // ページの縦サイズ取得に、ImgDivの初期座標を使うため
  ImgDiv.style.left = "0px";
  ImgDiv.style.top = "0px";
  ImgDiv.style.display = "block";

  // 背景を暗くする（Operaは除外）
  if(is_gecko || is_ie6up || is_safari1_3up || is_konqueror){
    // ページの一番下の座標
    var bottom = ImgDiv.offsetTop
     + body.style.padding
     + body.style.border;
    // DIV要素の初期位置を取得し、画像の高さを加え、ページ下座標を取得。
    if(height > bottom)
      bottom = height;
    // 背景透過用のDIV要素作成
    OpacityDiv = setupOpacity(OpacityDegree, bottom);
    // BODY 要素の子ノードとして、背景用 DIV 要素を追加
    body.appendChild(OpacityDiv);
  }
//
// 2回目のアクセス時、Chromeでこれ以降が暴走
//
  // 画像のサイズを取得
  var img_w = img.width;
  var img_h = img.height;
  var font_height = 20;
// alert("(" + img_w + "x" + img_h);
  img.style.margin = DivMargin + "px";
  // 横幅と高さを計算
  var id_w = img_w + 2*DivMargin;
  var id_h = img_h + 2*DivMargin;
  // 画像の表示位置を計算
  var x = (width - id_w)/2 + left;
  if(x<0)
    x = 0;
  var y = (height - id_h)/2 + top;
  if(y<0)
    y = 0;
  // 画像の表示位置などを設定
  ImgDiv.style.position = "absolute";
  ImgDiv.style.left = x +"px";
  ImgDiv.style.top = y + "px";
  ImgDiv.style.width = id_w + "px";
  ImgDiv.style.height = id_h + "px";
  ImgDiv.style.zIndex = 1;
  ImgDiv.style.visibility = "visible";
}

// DIV内のStyleの設定
function setupImgDiv()
{
  // DIV 要素を作成
  var div = document.createElement("div");
  // 表示を消す
  if(!is_opera)
    div.style.display = "none";
  // DIV 要素にIDを設定
  div.setAttribute("Id", DivId);
  // DIV 要素に、クリック時のイベントを設定
//  div.addEventListener("click", hideImage, false);
// IE互換のためにaddEventListenerを使わない
  div.onclick = hideImage;
  // DIV 要素に、Styleを設定
  div.style.backgroundColor = BgColor;
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px';
  div.style.borderColor = FrameColor;
  div.style.fontSize = "95%";
  div.style.color = Color;
  div.style.fontFamily = "MS UI Gothic";
  div.style.textAlign = "center";
  div.style.visibility = "hidden";
  div.style.cursor = "pointer";
  return div;
}

// 透過度の設定
function setupOpacity(opacity, bottom)
{
  var div = document.createElement("div");
  div.style.position = "absolute";
  var width, left;
  if(is_ie6up){
    left = document.body.scrollLeft;
    width = document.body.offsetWidth;
  } else if(is_gecko || is_opera5up) {
    left = window.pageXOffset;
    width = window.innerWidth;
  }
  div.style.top = 0;
  div.style.left = left + "px";
  div.style.width = width + "px";
  div.style.height = bottom + "px";
  div.style.backgroundColor = "black";
  div.style.opacity = opacity / 100;
  div.style.mozOpacity = opacity / 100;
  div.style.filter = "alpha(opacity=" + opacity + ")";
  return div;
}

// DOM にタグ要素を追加
function showImage(title,fname){
  // 既に表示処理中なら、そのまま終了
  if(ImgDiv)
    return false;

  // ブラウザータイプで分岐
  if(is_gecko || is_opera5up || is_safari1_3up
   || is_konqueror || is_ie6up) {

    // DIV 要素を作成・初期化
    ImgDiv = setupImgDiv();
    // 画像タグなどを配置
    // Onloadで画像ファイルのロード後にsetImageを呼び出す
    ImgDiv.innerHTML = '<div><img alt="' 
     + title + '" border="0" id="' 
     + ImgId + '" src="' 
     + fname + '" title="' 
     + (null!=title ? title : "") + '" type="image" onload="setImage();"/></div>';
    ImgDiv.style.visibility = "hidden";
  } else {
    window.open(fname,"_self");
    return false;
  }

  // BODY 要素を検索
  var body = document.getElementsByTagName("body").item(0);

  // BODY 要素の子ノードとして、DIV 要素を追加
  body.appendChild(ImgDiv);

  return false;
}

// DOM にタグ要素を消去
function hideImage(){
  // BODY 要素を検索
  var body = document.getElementsByTagName("body").item(0);
  // 画像が表示されているか判別
  if(body.hasChildNodes() && null!=ImgDiv){
    // 背景透過用のDIV要素削除
    body.removeChild(ImgDiv);
    // 背景透過用のDIV要素削除
    if(null!=OpacityDiv){
      body.removeChild(OpacityDiv);
      OpacityDiv = null;
    }
    // 表示していたレイヤーを開放
    ImgDiv = null;
  }
  return false;
}

// ファイル名の拡張子を複数パターン同時にチェック
function chkEndsWith(){
  if(arguments.length < 2)
    return null;
  var string = arguments[0];

  // 拡張子を抜き出す
  var index = string.lastIndexOf("?");
  if(0<=index)
    string = string.substring(0, index);
  index = string.lastIndexOf(".");
  if(0>index)
    return false;
  string = string.substr(index + 1);
  if(null==string)
    return false;
  string = string.toLowerCase();

  // 第2引数以降を拡張子と見なして比較
  for(var c=1; c<arguments.length; c++){
    if(string == arguments[c])
      return true;
  }
  return false;
}

// 記事領域の中のaタグに、画像表示javascriptを利用するように変更を加える。
function applyImgFrame(targetDiv){
// 稼動ブラウザーを限定
  if(!is_gecko && !is_opera5up && !is_safari1_3up && !is_konqueror && !is_ie6up)
    return;
// ID:contentの下のDivタグを取得
  var entries = document.getElementsByTagName("div");
  for(var i=0;i<entries.length;i++){
    var entry = entries[i];
// Class:entryのDivタグの下のaタグの一覧を取得
    if(targetDiv == entry.className){
      var tags = entry.getElementsByTagName("a");
      for(var c=0; c<tags.length; c++){
        var tag = tags[c];
        var link = tag.getAttribute("href");
        if(null===link)
          continue;
// リンク先が画像ファイルのaタグの中身を書き換え
        if(link && (chkEndsWith(link, "jpg", "jpeg", "gif", "png")) || !link.indexOf("https://blogger.googleusercontent.com/img/")){
          var imgs = tag.getElementsByTagName("img");
          var ihtml = '';
          if(0<imgs.length){
            var alt = imgs[0].getAttribute("alt");
            if(!alt)
              ihtml = "";
            else if(0<=alt.length)
              ihtml = alt;
            var title = imgs[0].getAttribute("title");
            if(!title)
              ihtml = "Click this to close.";
            else
              ihtml = title;
          } else {
            ihtml = tag.innerHTML;
            ihtml = ihtml.replace(/<\/?[^>]*>/g,"");
          }
          var onclick = "showImage('" + ihtml + "','" + link + "');"
          tag.setAttribute("href", "javascript:void(0);");
// ここもIE6との互換性問題。
          if(is_ie6up) {
            tag.setAttribute("href", "javascript:" + onclick + "void(0);");
          } else
            tag.setAttribute("onclick", "return " + onclick);
        }
      }
    }
  }
}

window.onload = function(){
  applyImgFrame('post-body entry-content');
};
