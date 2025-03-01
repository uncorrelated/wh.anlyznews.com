#!/usr/bin/python
# -*- coding: utf-8 -*-
# 使うモジュールをインポート
import cookielib, urllib, urllib2, re, os.path, sys, datetime
# Cookieの設定を行う
cj = cookielib.CookieJar()
# httpリクエストを行うインスタンスを作成。Cookieを引数で設定。
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
# ユーザーエージェントを偽装
opener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20100101 Firefox/15.0.1')]

# 日付指定でCSVファイルたちをダウンロードできるようにする
# 市場が休みの日はCSVファイルへのリンクが無いので、ディレクトリ生成以外は何もしない
def downloadCSVs (year, month, day):
	# 日付文字列を作成
	dateString = '%04d%02d%02d' % (year, month, day)
	# パラメーターを指定。
	params1 = urllib.urlencode({'s010.dateKensaku': dateString})
	# opener#open()は引数をつけるとPOSTリクエストにしてくれる模様。
	res1 = opener.open("https://www.seisen.maff.go.jp/seisen/bs04b040md001/BS04B040UC020SC001-Evt002.do", params1)
	# レスポンスからHTML部分を取り出す。
	html = res1.read()
	# HTMLの一部を切り出す正規表現
	# 1.CSVファイルのダウンロード元（もしくは帳票管理番号）の特定用
	ptrn1 = re.compile('<a[ \t]*href="javascript:chohyoSubmit\(\'form003\',\'([0-9]+)\'\);?"[ \t]*>[ \t]*CSV</a>', re.MULTILINE)
	# 2.都市名の特定用
	ptrn2 = re.compile('<td class="kubun_td3_norb_left">[ \t\n\r]*([^0-9< \t\n\r]+)[ \t\n\r]*</td>', re.MULTILINE)
	# ファイル保存ディレクトリ名を指定
	csvdir = "./csv"
	# ディレクトリを作っておく
	if not os.path.isdir(csvdir):
		os.mkdir(csvdir)
	# カレント・ディレクトリを移動
	os.chdir(csvdir)
	# findall()でグループを指定している。つまり、帳票管理番号/都市名のみがリストされるのに注意。
	csvNumbers = ptrn1.findall(html)
	cityNames = ptrn2.findall(html)
	# HTMLの構造上、野菜と果実のデータが交互に来る
	type = ["野菜", "果実"]
	# 種別や都市名を定めるためにカウンターを用意する
	counter = 0
	# 帳票管理番号のリストでループ
	for num in csvNumbers:
		# パラメーターをセット
		params2 = urllib.urlencode({'s004.chohyoKanriNo': num})
		# CSVデータを読み出す
		res2 = opener.open("https://www.seisen.maff.go.jp/seisen/bs04b040md001/BS04B040UC020SC001-Evt005.do", params2)
		# 出力ファイル名を設定
		output = '%s_%s_%s.csv' % (dateString, type[counter%2], cityNames[counter/2])
		# ファイル・オープンはエラー処理もつけておく
		try:
			stream = open(output, 'w')
		except IOError:
			print >> sys.stderr, "Couldn't open the file: %s" % output
			sys.exit(1)
		# 読み込んだHTMLをそのまま書き出す
		stream.write(res2.read())
		# ファイル・クローズは忘れずに
		stream.close();
		# カウンターを回す
		counter = counter + 1
	# カレント・ディレクトリを元に移動
	os.chdir("..")

# ここでは2012年1月1日から開始
# 境界処理（9月30日 + 1日 → 10月1日）のために日付型を使う
date = datetime.date(2012, 9, 1)
# 30日間ループ
for i in range(30):
	print '%04d年%02d月%02d日分をダウンロード開始' % (date.year, date.month, date.day)
	downloadCSVs(date.year, date.month, date.day)
	date = date + datetime.timedelta(days=+1)
print '終了'

