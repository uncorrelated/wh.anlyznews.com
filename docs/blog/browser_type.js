//<!--
// 究極の JavaScript クライアント判別 バージョン 3.03
// (C) Netscape Communications 1999-2001.  再利用と変更を認めます。
// 修正 17 May 99 :  is_nav5up と is_ie5up を追加(後述).
// 修正 20 Dec 00 :  is_gecko を追加、 is_nav5up を is_nav6up に変更
//                   IE5.5 Opera4&5 HotJava3 AOLTV のサポートも追加
// 修正 22 Feb 01 :  IE 5.x, Opera 4, の JavaScript 判断を修正
//                   Opera 5 の判断を修正
//                   winME と win2k のサポートを追加
//                   browser-type-oo.js と同期
//           [訳註]  非オブジェクト指向バージョンを修正していったあと最後にオブジェクト指向バージョン
//                   にも変更点を纏めて一気に反映させた、ということではないかと予想します。(^^;
// 修正 26 Mar 01 :  Opera の判断を修正
// 修正 02 Oct 01 :  IE6 の判断を追加
// 修正 09 Jan 08 :  Safari の判断を追加（by uncorrelated）
// 修正 10 Jan 08 :  Konqueror の判断を追加（by uncorrelated）

// JavaScript クライアントについて知りたいがなかなか聞けないもの全て。
// 生成する "is_" 変数が示すのは以下の通り:
// (1) ブラウザベンダ:
//     is_nav, is_ie, is_opera, is_hotjava, is_webtv, is_TVNavigator, is_AOLTV
// (2) ブラウザージョン番号:
//     is_major (integer indicating major version number: 2, 3, 4 ...)
//     is_minor (float   indicating full  version number: 2.02, 3.01, 4.04 ...)
// (3) ブラウザベンダとメジャーバージョン
//     is_nav2, is_nav3, is_nav4, is_nav4up, is_nav6, is_nav6up, is_gecko, is_ie3,
//     is_ie4, is_ie4up, is_ie5, is_ie5up, is_ie5_5, is_ie5_5up, is_ie6, is_ie6up, is_hotjava3, is_hotjava3up,
//     is_opera2, is_opera3, is_opera4, is_opera5, is_opera5up
// (4) JavaScript バージョン番号:
//     is_js (float indicating full JavaScript version number: 1, 1.1, 1.2 ...)
// (5) OS プラットフォームとバージョン:
//     is_win, is_win16, is_win32, is_win31, is_win95, is_winnt, is_win98, is_winme, is_win2k
//     is_os2
//     is_mac, is_mac68k, is_macppc
//     is_unix
//     is_sun, is_sun4, is_sun5, is_suni86
//     is_irix, is_irix5, is_irix6
//     is_hpux, is_hpux9, is_hpux10
//     is_aix, is_aix1, is_aix2, is_aix3, is_aix4
//     is_linux, is_sco, is_unixware, is_mpras, is_reliant
//     is_dec, is_sinix, is_freebsd, is_bsd
//     is_vms
//
// ユーザエージェント文字列の詳細については次を参照してください。
// http://www.it97.de/JavaScript/JS_tutorial/bstat/navobj.html
// http://www.it97.de/JavaScript/JS_tutorial/bstat/Browseraol.html
//
// 注: 新しいブラウザがリリースされてもNav4 や IE4 のコードを"首"に
// したりはしたくないでしょうから、条件分岐する際、将来のバージョン
// でも動作して欲しいコードでは、is_ie5 や is_opera5 ではなく
// is_ie5up (IE5以降)や is_opera5up (Opera5.0 以降) を使用してください。

    // テストを簡単にするために全文字列を小文字に変換
    var agt=navigator.userAgent.toLowerCase();

    // *** ブラウザージョン ***
    // 注: IE5 ではこの値で 4 が返されるので IE5 の判断には is_ie5up を使用する。
    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    // 注: Opera と WebTV は Navigator のマネをしますが、厳密に判断します。
    // マネをするのを認めるなら、opera と webtv のコードを除外してください。
    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && (is_major >= 4));
    var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );
    var is_nav6 = (is_nav && (is_major == 5));
    var is_nav6up = (is_nav && (is_major >= 5));
    var is_gecko = (agt.indexOf('gecko') != -1);

    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
    var is_ie4up  = (is_ie && (is_major >= 4));
    var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
    var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
    var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
    var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
    var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

// Safari判別開始 by uncorrelated

function ver_applewebkit(agt)
{
  // Apple Web Kitの判別
  var sign = "applewebkit/";
  var bv_indx = agt.indexOf(sign);
  if(bv_indx == -1)
    return null;
  var bv_indx_r = agt.indexOf(".",bv_indx + sign.length);
  if(bv_indx_r == -1)
    bv_indx_r = agt.indexOf(" ",bv_indx + sign.length);
  var rev = (-1==bv_indx_r) ? agt.substr((bv_indx + sign.length)) : agt.substring((bv_indx + sign.length), bv_indx_r);
  var revs = new Array(100, 1, 125, 1.1, 312, 1.2, 400, 1.3, 523, 2, 600, 3);
  for(var c=0;c<revs.length;c+=2){
    if(rev < revs[c])
      return revs[c + 1];
  }
  return 4;
}

var ver_awk = ver_applewebkit(agt);
var is_safari = (ver_awk);
var is_safari1 = (is_safari && ver_awk == 1);
var is_safari2 = (is_safari && ver_awk == 2);
var is_safari3 = (is_safari && ver_awk == 3);
var is_safari1_3up = (is_safari && (ver_awk >= 1.3));
var is_safari3up = (is_safari && (ver_awk >= 3));

// Safari判別終了

// Konqueror判別開始 by uncorrelated

function ver_konqueror(agt)
{
  var sign = "konqueror/";
  var bv_indx = agt.indexOf(sign);
  if(bv_indx == -1)
    return null;
  var bv_indx_r1 = agt.indexOf(";", bv_indx + sign.length);
  var bv_indx_r2 = agt.indexOf(" ", bv_indx + sign.length);
  var bv_indx_r;
  if(bv_indx_r1>0 && bv_indx_r2>0){
    bv_indx_r = bv_indx_r1 < bv_indx_r2 ? bv_indx_r1 : bv_indx_r2;
  } else if(bv_indx_r1>0){
    bv_indx_r = bv_indx_r1;
  } else if(bv_indx_r2>0){
    bv_indx_r = bv_indx_r2;
  } else{
    bv_indx_r = -1;
  }
  var ver = (-1==bv_indx_r) ? agt.substr((bv_indx + sign.length))
   : agt.substring((bv_indx + sign.length), bv_indx_r);
  return ver;
}

var ver_knqrr = ver_konqueror(agt);
var is_konqueror = (ver_knqrr);

// Konqueror判別終了


    // 既知のバグ: AOL4 では IE3 が組み込まれている場合や最初に開かれたブラウザ
    // ウィンドウである場合には false を返します。であるから、is_aol, is_aol3,
    // is_aol4 は 100% 信頼できるものではありません。
    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);
    var is_aol5  = (agt.indexOf("aol 5") != -1);
    var is_aol6  = (agt.indexOf("aol 6") != -1);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

    var is_webtv = (agt.indexOf("webtv") != -1); 

    var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1)); 
    var is_AOLTV = is_TVNavigator;

    var is_hotjava = (agt.indexOf("hotjava") != -1);
    var is_hotjava3 = (is_hotjava && (is_major == 3));
    var is_hotjava3up = (is_hotjava && (is_major >= 3));

    // *** JAVASCRIPT バージョン ***
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0;
    else if (is_nav3) is_js = 1.1;
    else if (is_opera5up) is_js = 1.3;
    else if (is_opera) is_js = 1.1;
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2;
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3;
    else if (is_hotjava3up) is_js = 1.4;
    else if (is_nav6 || is_gecko) is_js = 1.5;
    // 注: 将来的には、新しいバージョンのJSが出たらこのコードを更新します。
    // 今のところ、将来のバージョンの Nav や IE が"少なくとも" JS 1.x 互換
    // であることを示します。JS バージョン互換のチェックには常に > や >=
    // を使用するようにしてください。
    else if (is_nav6up) is_js = 1.5;
    // 注: マックでの ie5up は 1.4
    else if (is_ie5up) is_js = 1.3

// SafariとKonquerorの分を追加。version 2以前は適当 by uncrrelated
else if (is_safari)
  is_js = 1.3;
else if (is_safari3up)
  is_js = 1.7;
else if (is_konqueror)
  js_js = 1.3;
// SafariとKonquerorの分を終了

    // HACK: 他のブラウザは分かりません。JS バージョンチェックは > や>= で。
    else is_js = 0.0;

    // *** プラットフォーム ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // 注: Opera 3.0 では Win32 環境全てでユーザエージェント文字列に "Windows 95/NT4"
    // が含まれており、Win95 と WinNT の区別が出来ません。
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // 16 bit バージョンと思われる。
    var is_win16 = ((agt.indexOf("win16")!=-1) || 
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || 
               (agt.indexOf("windows 16-bit")!=-1) );  

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
    var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));

    // 注: Win98 の信頼できる判断法は存在しないようです。次のようだから:
    //      - Nav4.x 以前ではユーザエージェントで "Windows" だけしか得られない。
    //      - Win98 上の Mercury では 32 bit バージョンは "Win98" を返すが、
    //        16 bit バージョンは "Win95" を返す。
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 || 
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) || 
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||   
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    // hack: マックでの ie5 の JavaScript バージョン
    if (is_mac && is_ie5up) is_js = 1.4;
    var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || 
                               (agt.indexOf("68000")!=-1)));
    var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || 
                                (agt.indexOf("powerpc")!=-1)));

    var is_sun   = (agt.indexOf("sunos")!=-1);
    var is_sun4  = (agt.indexOf("sunos 4")!=-1);
    var is_sun5  = (agt.indexOf("sunos 5")!=-1);
    var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
    var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
    var is_irix5 = (agt.indexOf("irix 5") !=-1);
    var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
    var is_hpux  = (agt.indexOf("hp-ux")!=-1);
    var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
    var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
    var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
    var is_aix1  = (agt.indexOf("aix 1") !=-1);    
    var is_aix2  = (agt.indexOf("aix 2") !=-1);    
    var is_aix3  = (agt.indexOf("aix 3") !=-1);    
    var is_aix4  = (agt.indexOf("aix 4") !=-1);    
    var is_linux = (agt.indexOf("inux")!=-1);
    var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
    var is_unixware = (agt.indexOf("unix_system_v")!=-1); 
    var is_mpras    = (agt.indexOf("ncr")!=-1); 
    var is_reliant  = (agt.indexOf("reliantunix")!=-1);
    var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) || 
           (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) || 
           (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1)); 
    var is_sinix = (agt.indexOf("sinix")!=-1);
    var is_freebsd = (agt.indexOf("freebsd")!=-1);
    var is_bsd = (agt.indexOf("bsd")!=-1);
    var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux || 
                 is_sco ||is_unixware || is_mpras || is_reliant || 
                 is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

    var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));

// JavaScript隠蔽終了 -->