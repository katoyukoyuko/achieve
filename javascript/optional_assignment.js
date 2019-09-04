//所持金
let money_in_hand = 7450;

//購入する合計金額
let sum = 7000;

//持っている割引券の枚数 1000円,500円,100円の順
let coupon = [1,2,3];

//割引券の金額を定義
let coupon_price = [1000,500,100];

//割引券を使える金額
let max_price = 5000;


//クーポンが使えるか判定する関数
function coupon_can_used() {
  if(sum <= max_price){ //購入する商品の合計が5000円(max_price)以下の場合、「割引券は使えません！」と表示
    console.log("割引券は使えません！");
    return false;
  } else {
    return true;
  }
};

//クーポンを1枚ずつ使って行って、ゼロ円になったら最後に引いたクーポン分を足して計算終了
function coupon_judge(sum,coupon) {

  for(let j = 0; j < coupon.length; j++){
    for(let i = 0; i < coupon[j]; i++){
      //支払金額 = 購入する商品 合計金額 - 利用する割引券 合計金額
      sum -= coupon_price[j];
      if(sum < 0){
        sum += coupon_price[j];
      }
    }
  }
  return sum;
};


//一番初めの所持金を表示

console.log(`あなたの所持金は${money_in_hand}円です`);
console.log(`購入する合計金額は${sum}円です`);

//クーポンが使えるか判定する関数を呼び出す
if(coupon_can_used() === true) {
  //クーポンをどれだけ持っているか表示
  for(let i = 0; i < coupon.length; i++){
  console.log(`あなたは現在、${coupon_price[i]}円のクーポンを${coupon[i]}枚持っています`);
  }

  sum = coupon_judge(7000,[1,2,3]);
  console.log(`クーポンを使うと${sum}円で購入できます！`);
  money_in_hand -= sum;
  console.log(`あなたの現在の所持金は${money_in_hand}円です`);
}
