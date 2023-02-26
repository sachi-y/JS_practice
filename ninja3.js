let wList1 = new Array();
$('.ul1 li').each(function(i) {
    wList1[i] = $(this).width();
});
let sum1 = wList1.reduce(function(a,b) {
    return a+b;
});
$('.answer1').text(sum1);
//reduceメソッドは配列の先頭から末尾に向かって要素を1つずつ取り出して計算する。配列が終わるまで繰り返す。
//reduceメソッドは引き算、掛け算、割り算も可能。

//A1
// $(function(){
//     let li_total = 0;
//     $('li').each(function(index, el) {
//         if(index !== 2){
//         li_total += $(el).width();
//         $('.answer').text(li_total);
//         }
//     });
// });
//※加算代入演算子(+=)…[x+=y]=[x=x+y]答え(値)そのものとして認識される
//※li_total = 0…初めの値
//※(index !== 2)…残りのインデックス数1になるまで計算を続ける。
//※最後の合計値(x=x+y)がli_totalとして出力される。

//Q2
let ninja2 =[2,34,561,14];

let futaketa2 = ninja2.filter(function(f) {
    return f>=10 && f<=99;
});
//alert(futaketa2);

//A2
// const ninja = [2,34,561,5,14];
// const futaketa = ninja.filter((item) => {
//     return String(item).length == 2;
// });
// alert(futaketa);
//※String[文字列]コンストラクター…文字列として値を変換する。ex.var s=String(num);
//配列から何かしらの条件で絞った配列を作る場合にはfilterを使う。条件は文字列として絞るが、返す値は数値。

//Q3
let ninja3 =['5',6,'3'];
$(function() {
    if(isNaN(ninja3)) {
        //alert("false");
    }else {
        //alert("true");
    };
});

//A3
// const ninja = ["5", 6, "3"];
// const judge = ninja.every((item) => {
//     return typeof item == "number";
// });
// alert(judge);
//every()…配列が条件をすべて満たす場合にtrueを返す。
//※every((element(対象要素), index, array) => {} )
//some()…配列が条件を一つでも満たしていればtrueを返す。
//※typeof 値…対象となる値のデータ型を表す文字列を返す演算子
//数値'number',文字列'string',論理値'boolean'

//Q4
function ninja4(str) {
    //alert(str.length>=5);
};
ninja4("忍者CODE");
//if分制御…ブーリアン型(Boolean)※アラートの中にそのまま入れて結果として扱える。
// 演算子	         記号
// 等しい            ==
// より大きい	      >
// より大きいか等しい   >=
// 等しくない	      !=
// より小さい	      <
// より小さいか等しい  <=
// 論理 AND	         &&
// 論理 NOT	         !
// 論理 OR	         ||

//A4
// function ninja( str ) {
//     return str.length >= 5 ? true : false;
// }
// alert(ninja("忍者CODE"));
//省略形のif文…(条件式)?合致した場合の処理:(条件式B)?合致した場合の処理:それ以外の時の処理
//if(条件式)⇄(条件式)?、else if(条件式)⇄:(条件式)?、else⇄:

//Q5
let fruits5 = ["りんご","みかん","バナナ"];
function judge5(str) {
    //alert(fruits5.includes(str));
};
judge5("みかん");

//A5
// const fruits = ["りんご", "みかん", "バナナ"];
// function judge( str ){
// 	return fruits.indexOf(str) >= 0 ? true : false;
// }
// alert(judge("りんご"));
//.indexOf()メソッド…配列に含まれているかどうかを判断
//含む場合「>=0(対象の要素番号)」,含まない場合「-1」

//Q6
let my_array6 =["忍者","CO","DE"];
function judge(my_array6) {
    if(my_array6.every((item) => {
        return typeof item == "string";
    })){
        let result = my_array6.join("");
        alert(result);
    }else if(my_array6.every((item) => {
        return typeof item == "number";
    })){
        let total = my_array6.reduce(function(sum,element) {
            return sum + element; },0);
            alert(total);
    };
};
//judge(my_array6);
//judge([2,3,4]);
//judge(["2",3,4]);

//A6
// const my_array = ["忍者", "CO", "DE"];
// function ninja( my_array ){
//     let res = null;
//     const array_string = my_array.every((item) => {
//         return typeof item == "string";
//     });
//     if(array_string){
//         res = my_array.join('');
//     }else{
//         res = my_array.reduce(function(p, c) {
// 		return p + c;});
//     };
// };