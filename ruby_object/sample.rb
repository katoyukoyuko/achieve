class Player
  def hand
    # コンソールを入力待ち状態にし、プレイヤーがコンソールから打ち込んだ値を出力する処理のメソッドの処理をこの中に作成する
      puts "数字を入力してください。"
      puts "0: グー"
      puts "1: チョキ"
      puts "2: パー"

      my_hand = gets.to_i
      return my_hand
  end
end

class Enemy
  def hand
    # グー、チョキ、パーの値をランダムに出力するメソッドの処理をこの中に作成する
    computer_hand = rand(3)
    return computer_hand
  end
end

class Janken
  def pon(player_hand, enemy_hand)
    # プレイヤーが打ち込んだ値と、Enemyがランダムに出した値でじゃんけんをさせ、その結果をコンソール上に出力するメソッドをこの中に作成する
    # その際、あいこもしくはグー、チョキ、パー以外の値入力時には、もう一度ジャンケンをする
    # 相手がグー、チョキ、パーのうち、何を出したのかも表示させる

    difference_rest = (player_hand - enemy_hand) % 3

    janken_array = ["グー", "チョキ", "パー"]

    if((player_hand < 0) || (player_hand > 2))
      puts "0~2の数字を入力してください"
      player = Player.new
      enemy = Enemy.new
      pon(player.hand, enemy.hand)

    elsif difference_rest == 0
      puts "あなたは#{janken_array[player_hand]}を出しました"
      puts "相手は#{janken_array[enemy_hand]}を出しました"
      puts "あいこです"
      player = Player.new
      enemy = Enemy.new
      pon(player.hand, enemy.hand)

    elsif difference_rest == 2
      puts "あなたは#{janken_array[player_hand]}を出しました"
      puts "相手は#{janken_array[enemy_hand]}を出しました"
      puts "あなたの勝ちです"

    elsif difference_rest == 1
      puts "あなたは#{janken_array[player_hand]}を出しました"
      puts "相手は#{janken_array[enemy_hand]}を出しました"
      puts "相手の勝ちです"
    end
  end
end

# ①Playerクラスを新しく生成し、playerに代入する
# ②Playerはクラスの名前、playerは作成したクラスを代入する変数名
player = Player.new
enemy = Enemy.new
janken = Janken.new

# 下記の記述で、ジャンケンメソッドが起動される
janken.pon(player.hand, enemy.hand)



# ---------------------------
# ↓オブジェクトを無視して書いたコード

# def jankenpon
#   while true
#
#     puts "数字を入力してください。"
#     puts "0: グー 1: チョキ 2: パー"
#
#     # janken = [{hand: 0 ,hand_str: "グー"},{hand: 1 ,hand_str: "チョキ"},{hand: 2 ,hand_str: "パー"}]
#
#     my_hand = gets.to_i
#     computer_hand = rand(3)
#
#    if my_hand == 0 || my_hand == 1 || my_hand == 2
#
#    puts "あなたは#{my_hand}を出しました"
#    puts "コンピューターは#{computer_hand}を出しました"
#
#    difference_rest = (my_hand - computer_hand) % 3
#
#       if difference_rest == 0
#       puts "あいこです"
#       elsif difference_rest == 2
#       puts "あなたの勝ちです"
#       break
#       elsif difference_rest == 1
#       puts "コンピューターの勝ちです"
#       break
#       end
#     else
#       puts "0~2の数字を入力してください"
#     end
#   end
# end
#
# jankenpon()
