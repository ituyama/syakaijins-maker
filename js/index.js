var value=""

document.getElementById('otukare').addEventListener('click', function(){
    value=value+"お疲れ様です。"
    console.log(value)
    document.getElementById('textareas').value=value
  });
  document.getElementById('yorosiku').addEventListener('click', function(){
    value=value+"よろしくお願いいたします。"
    console.log(value)
    document.getElementById('textareas').value=value
  });
  document.getElementById('mousi').addEventListener('click', function(){
    value=value+"申し訳ありません。"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('kongotomo').addEventListener('click', function(){
    value=value+"今後ともよろしくお願いいたします。"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('keigu').addEventListener('click', function(){
    value=value+"敬具"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('asapde').addEventListener('click', function(){
    value=value+"ASAP"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('konsensas').addEventListener('click', function(){
    value=value+"コンセンサス"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('topdown').addEventListener('click', function(){
    value=value+"トップダウン"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('saihatu').addEventListener('click', function(){
    value=value+"再発防止策"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('heisya').addEventListener('click', function(){
    value=value+"弊社では"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('zehitomo').addEventListener('click', function(){
    value=value+"ぜひとも"
    console.log(value)
    document.getElementById('textareas').value=value
  });


  document.getElementById('siawase').addEventListener('click', function(){
    value=value+"世界の幸せ"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('kongo').addEventListener('click', function(){
    value=value+"今後とも"
    console.log(value)
    document.getElementById('textareas').value=value
  });
  document.getElementById('syouti').addEventListener('click', function(){
    value=value+"承知いたしました。"
    console.log(value)
    document.getElementById('textareas').value=value
  });
  document.getElementById('puraio').addEventListener('click', function(){
    value=value+"プライオリティ"
    console.log(value)
    document.getElementById('textareas').value=value
  });
  document.getElementById('toten').addEventListener('click', function(){
    value=value+"、"
    console.log(value)
    document.getElementById('textareas').value=value
  });

document.getElementById('takame').addEventListener('click', function(){
  value=value+"高め"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('de').addEventListener('click', function(){
  value=value+"で"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('sdg').addEventListener('click', function(){
  value=value+"SDGs"
  console.log(value)
  document.getElementById('textareas').value=value
});

document.getElementById('tenpu').addEventListener('click', function(){
  value=value+"添付ファイル"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('no').addEventListener('click', function(){
  value=value+"の"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('tame').addEventListener('click', function(){
  value=value+"ための"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('makoto').addEventListener('click', function(){
  value=value+"誠に"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('gomennasai').addEventListener('click', function(){
  value=value+"ごめんなさい。"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('niyotte').addEventListener('click', function(){
  value=value+"によって"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('tikoku').addEventListener('click', function(){
  value=value+"遅刻"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('techs').addEventListener('click', function(){
  value=value+"技術的"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('possible').addEventListener('click', function(){
  value=value+"可能"
  console.log(value)
  document.getElementById('textareas').value=value
});
document.getElementById('niha').addEventListener('click', function(){
  value=value+"には"
  console.log(value)
  document.getElementById('textareas').value=value
});









  function logsend()
  {
    mail = "メールアドレス"
    title = "メール件名"
    to=document.getElementById('to').value
    from=document.getElementById('from').value
    text = document.getElementById('textareas').value
    window.open().location.href = "mailto:" + mail + "?subject=" + title + "&body=" + to+"\n"+text+"\n"+from;
   }
function   values(){
     return value
   }



document.getElementById("twitter-share-button").onclick = function() {
    // 出力結果を取得

    to=document.getElementById('to').value+"\n"
    from=document.getElementById('from').value+"\n"
    text = document.getElementById('textareas').value+"\n"

    // オプションパラメータを設定
    let hashtags = "社会人メールメーカー";
    let url = encodeURIComponent(location.href)  // location.hrefは今いるURL

    // URLを生成して遷移
    window.open("https://twitter.com/share?text=" + to+text+from + "&hashtags=" + hashtags + "&url=" + url);
}
