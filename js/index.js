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
    value=value+"ASAPで"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('konsensas').addEventListener('click', function(){
    value=value+"コンセンサス"
    console.log(value)
    document.getElementById('textareas').value=value
  });

  document.getElementById('topdown').addEventListener('click', function(){
    value=value+"トップダウンで"
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

  function logsend()
  {
    mail = "メールアドレス"
    title = "メール件名"
    text = document.getElementById('textareas').value
    window.open().location.href = "mailto:" + mail + "?subject=" + title + "&body=" + text;
   }