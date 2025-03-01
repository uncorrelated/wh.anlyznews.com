//<!--
// ���ɂ� JavaScript �N���C�A���g���� �o�[�W���� 3.03
// (C) Netscape Communications 1999-2001.  �ė��p�ƕύX��F�߂܂��B
// �C�� 17 May 99 :  is_nav5up �� is_ie5up ��ǉ�(��q).
// �C�� 20 Dec 00 :  is_gecko ��ǉ��A is_nav5up �� is_nav6up �ɕύX
//                   IE5.5 Opera4&5 HotJava3 AOLTV �̃T�|�[�g���ǉ�
// �C�� 22 Feb 01 :  IE 5.x, Opera 4, �� JavaScript ���f���C��
//                   Opera 5 �̔��f���C��
//                   winME �� win2k �̃T�|�[�g��ǉ�
//                   browser-type-oo.js �Ɠ���
//           [��]  ��I�u�W�F�N�g�w���o�[�W�������C�����Ă��������ƍŌ�ɃI�u�W�F�N�g�w���o�[�W����
//                   �ɂ��ύX�_��Z�߂Ĉ�C�ɔ��f�������A�Ƃ������Ƃł͂Ȃ����Ɨ\�z���܂��B(^^;
// �C�� 26 Mar 01 :  Opera �̔��f���C��
// �C�� 02 Oct 01 :  IE6 �̔��f��ǉ�
// �C�� 09 Jan 08 :  Safari �̔��f��ǉ��iby uncorrelated�j
// �C�� 10 Jan 08 :  Konqueror �̔��f��ǉ��iby uncorrelated�j

// JavaScript �N���C�A���g�ɂ��Ēm�肽�����Ȃ��Ȃ������Ȃ����̑S�āB
// �������� "is_" �ϐ��������͈̂ȉ��̒ʂ�:
// (1) �u���E�U�x���_:
//     is_nav, is_ie, is_opera, is_hotjava, is_webtv, is_TVNavigator, is_AOLTV
// (2) �u���E�U�[�W�����ԍ�:
//     is_major (integer indicating major version number: 2, 3, 4 ...)
//     is_minor (float   indicating full  version number: 2.02, 3.01, 4.04 ...)
// (3) �u���E�U�x���_�ƃ��W���[�o�[�W����
//     is_nav2, is_nav3, is_nav4, is_nav4up, is_nav6, is_nav6up, is_gecko, is_ie3,
//     is_ie4, is_ie4up, is_ie5, is_ie5up, is_ie5_5, is_ie5_5up, is_ie6, is_ie6up, is_hotjava3, is_hotjava3up,
//     is_opera2, is_opera3, is_opera4, is_opera5, is_opera5up
// (4) JavaScript �o�[�W�����ԍ�:
//     is_js (float indicating full JavaScript version number: 1, 1.1, 1.2 ...)
// (5) OS �v���b�g�t�H�[���ƃo�[�W����:
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
// ���[�U�G�[�W�F���g������̏ڍׂɂ��Ă͎����Q�Ƃ��Ă��������B
// http://www.it97.de/JavaScript/JS_tutorial/bstat/navobj.html
// http://www.it97.de/JavaScript/JS_tutorial/bstat/Browseraol.html
//
// ��: �V�����u���E�U�������[�X����Ă�Nav4 �� IE4 �̃R�[�h��"��"��
// ������͂������Ȃ��ł��傤����A�������򂷂�ہA�����̃o�[�W����
// �ł����삵�ė~�����R�[�h�ł́Ais_ie5 �� is_opera5 �ł͂Ȃ�
// is_ie5up (IE5�ȍ~)�� is_opera5up (Opera5.0 �ȍ~) ���g�p���Ă��������B

    // �e�X�g���ȒP�ɂ��邽�߂ɑS��������������ɕϊ�
    var agt=navigator.userAgent.toLowerCase();

    // *** �u���E�U�[�W���� ***
    // ��: IE5 �ł͂��̒l�� 4 ���Ԃ����̂� IE5 �̔��f�ɂ� is_ie5up ���g�p����B
    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    // ��: Opera �� WebTV �� Navigator �̃}�l�����܂����A�����ɔ��f���܂��B
    // �}�l������̂�F�߂�Ȃ�Aopera �� webtv �̃R�[�h�����O���Ă��������B
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

// Safari���ʊJ�n by uncorrelated

function ver_applewebkit(agt)
{
  // Apple Web Kit�̔���
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

// Safari���ʏI��

// Konqueror���ʊJ�n by uncorrelated

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

// Konqueror���ʏI��


    // ���m�̃o�O: AOL4 �ł� IE3 ���g�ݍ��܂�Ă���ꍇ��ŏ��ɊJ���ꂽ�u���E�U
    // �E�B���h�E�ł���ꍇ�ɂ� false ��Ԃ��܂��B�ł��邩��Ais_aol, is_aol3,
    // is_aol4 �� 100% �M���ł�����̂ł͂���܂���B
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

    // *** JAVASCRIPT �o�[�W���� ***
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0;
    else if (is_nav3) is_js = 1.1;
    else if (is_opera5up) is_js = 1.3;
    else if (is_opera) is_js = 1.1;
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2;
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3;
    else if (is_hotjava3up) is_js = 1.4;
    else if (is_nav6 || is_gecko) is_js = 1.5;
    // ��: �����I�ɂ́A�V�����o�[�W������JS���o���炱�̃R�[�h���X�V���܂��B
    // ���̂Ƃ���A�����̃o�[�W������ Nav �� IE ��"���Ȃ��Ƃ�" JS 1.x �݊�
    // �ł��邱�Ƃ������܂��BJS �o�[�W�����݊��̃`�F�b�N�ɂ͏�� > �� >=
    // ���g�p����悤�ɂ��Ă��������B
    else if (is_nav6up) is_js = 1.5;
    // ��: �}�b�N�ł� ie5up �� 1.4
    else if (is_ie5up) is_js = 1.3

// Safari��Konqueror�̕���ǉ��Bversion 2�ȑO�͓K�� by uncrrelated
else if (is_safari)
  is_js = 1.3;
else if (is_safari3up)
  is_js = 1.7;
else if (is_konqueror)
  js_js = 1.3;
// Safari��Konqueror�̕����I��

    // HACK: ���̃u���E�U�͕�����܂���BJS �o�[�W�����`�F�b�N�� > ��>= �ŁB
    else is_js = 0.0;

    // *** �v���b�g�t�H�[�� ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // ��: Opera 3.0 �ł� Win32 ���S�ĂŃ��[�U�G�[�W�F���g������� "Windows 95/NT4"
    // ���܂܂�Ă���AWin95 �� WinNT �̋�ʂ��o���܂���B
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // 16 bit �o�[�W�����Ǝv����B
    var is_win16 = ((agt.indexOf("win16")!=-1) || 
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || 
               (agt.indexOf("windows 16-bit")!=-1) );  

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
    var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));

    // ��: Win98 �̐M���ł��锻�f�@�͑��݂��Ȃ��悤�ł��B���̂悤������:
    //      - Nav4.x �ȑO�ł̓��[�U�G�[�W�F���g�� "Windows" �������������Ȃ��B
    //      - Win98 ��� Mercury �ł� 32 bit �o�[�W������ "Win98" ��Ԃ����A
    //        16 bit �o�[�W������ "Win95" ��Ԃ��B
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 || 
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) || 
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||   
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    // hack: �}�b�N�ł� ie5 �� JavaScript �o�[�W����
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

// JavaScript�B���I�� -->