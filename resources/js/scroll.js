$(document).on(function() {
  console.log('OK')
  $('.jscroll').jscroll({
    // 無限に追加する要素は、どこに入れる？
    contentSelector: '.jscroll', 
    // 次のページにいくためのリンクの場所は？ ＞aタグの指定
    nextSelector: '.more-link',
    // 読み込み中の表示はどうする？
    loadingHtml: '読み込み中'
  });
});