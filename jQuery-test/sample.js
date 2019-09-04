$(document).ready(function() { //①HTML=DOMの読み込みが終わったらfunction()の中の処理(=なにかしらの処理)を実行するという意味
  let average; //グローバル変数として定義
  let subject_number; //入力した点数を保持する配列をグローバル変数として定義
  let judge;
  let rank;
  let sum = 0;

  function score_indicate(){
    //⑤Number取ってきた文字列をNumber()で数値に変換
    //数値に変換したものをsubject_number配列に代入
    subject_number = [Number($('#national_language').val()), //④国語フォームに入力された内容を取得
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    //５教科のいずれかの点数が変更された場合、５教科の合計点と平均点を出力
    for(let i = 0; i < subject_number.length; i++){
      console.log(`subject_number ${i}`);
      console.log(`配列の中身 ${subject_number[i]}`);
      sum += subject_number[i];
      console.log(`プラスの後のsum ${sum}`);
    }

    //let sum = subject_number.reduce((a,x) => a+=x,0); //合計点を計算
    $('#sum_indicate').text(sum); //⑥id="sum_indicate"の次にsum出力

    average = sum / subject_number.length; //平均点を計算
    $('#average_indicate').text(average); //id="saverage_indicate"の次にaverage出力
    return average; //ランク関数にaverageを渡したいのでreturnする
  };

  function get_achievement(sum) { //「ランク」ボタンを押すと、５つの教科の平均点が80点以上なら”A”、60点以上なら”B”、40点以上なら”C”、それ以下なら”D”の文字を出力する
    if(sum >= 80){
      rank = "A";
      return rank;
    } else if (sum >= 60) {
      rank = "B";
      return rank;
    } else if (sum >= 40) {
      rank = "C";
      return rank;
    } else {
      rank = "D";
      return rank;
    }
  };

  function get_pass_or_failure(subject_number) {
    if(subject_number[0] >= 60 && subject_number[1] >= 60 && subject_number[2] >= 60 && subject_number[3] >= 60 && subject_number[4] >= 60){
      judge = "合格";
      return judge;
    } else {
      judge = "不合格";
      return judge;
    }
  };

  function judgement() {
    $('#alart-sum_indicate').remove();
    $('#declaration').append(`<lavel id="alart-sum_indicate" class="alert alert-info">あなたの成績は ${rank} です。 ${judge}です。`)
  }; //⑦id="declaration"の末尾に指定の文字列を追加する

  $('#national_language, #english, #mathematics, #science, #society').change(function() { //③id="各科目"の点数が切り替わった時の処理
    average = score_indicate(); //get_achievement()に平均点agerageを渡したいので返ってきた値をグローバル変数として定義したaverageに代入しておく
  });

  $('#btn-evaluation').click(function() { //②id="btn-evaluation"がつくランクボタンをクリック時の処理
    rank = get_achievement(average); //↑で代入したaverageを使ってランク判定をする
    $('#evaluation').text(rank);
  });

  $('#btn-judge').click(function() { //「判定」ボタンを押すと、全ての教科が60点以上なら”合格”の文字列、一つでも60点未満の教科があったら”不合格”の文字列を出す
    judge = get_pass_or_failure(subject_number); //入力した点数配列を渡して、合否判定
    $('#judge').text(judge);
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
