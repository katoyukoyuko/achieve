//購入する合計金額を定義
let sum = 7450;

//持っている割引券の枚数 1000円,500円,100円の順
let coupon = [10,1,1];

//割引券の金額を定義
let coupon_price = [1000,500,100];

//割引券を使える金額
let max_price = 5000;

//クーポンが使えるか判定する関数
function coupon_can_used() {
  if(sum <= max_price){ //所持金が5000円(max_price)以下の場合、「割引券は使えません！」と表示
    console.log("割引券は使えません！");
    return false;
  } else {
    return true;
  }
};

//クーポンを1枚ずつ使って行って、ゼロ円になったら最後に引いたクーポン分を足して計算終了
function coupon_judge() {

  for(let j = 0; j < coupon.length; j++){
    for(let i = 0; i < coupon[j]; i++){
       sum -= coupon_price[j] * 1;
      // console.log(sum);
      if(sum < 0){
        sum += coupon_price[j] * 1;
      }
    }
  }
  return sum;
};


//一番初めの所持金を表示
console.log(`あなたの所持金は${sum}です`);

//クーポンが使えるか判定する関数を呼び出す
if(coupon_can_used() === true) {
  //クーポンをどれだけ持っているか表示
  for(let i = 0; i < coupon.length; i++){
  console.log(`あなたは現在、${coupon_price[i]}円のクーポンを${coupon[i]}枚持っています`);
  }

  sum = coupon_judge();
  console.log(`クーポンを使うと${sum}円で購入できます！`);
}
