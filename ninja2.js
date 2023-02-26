// Q01
$(function() {
    //alert('横幅は'+$(".box1").width()+'です！');
});
//A01
// $(function(){
//     alert('横幅は' + $('.box').width() + 'です！');
// });

// width(), height()　取得する値：コンテンツ
// innerWidth(), innerHeight()　取得する値：コンテンツ + padding
// outerWidth(), outerHeight()　取得する値：コンテンツ + padding + border
// outerWidth(true), outerHeight(true)　取得する値：コンテンツ + padding + border + margin

// Q02
//input要素を変数へ格納
const inputColor2 = window.document.getElementById('color-change2');
//色を変更する要素を変数に格納
const elem2 = window.document.querySelector('.title2');
//イベントハンドラに"input"を指定し、input要素の値が変更されたことをトリガーとする
inputColor2.addEventListener('input', function(e) {
//インプット要素で指定した色を対象の要素に反映する
    elem2.style.color = e.target.value;
});
//※e.target…イベントが発生した要素
//※対象要素.addEventListener( イベント種類, 関数, false )
    //イベント種類一例
    // load	Webページの読み込みが完了した時に発動（画像などのリソースすべて含む）
    // DOMContentLoaded	Webページが読み込みが完了した時に発動（画像などのリソースは含まない）
    // click	マウスボタンをクリックした時に発動
    // mousedown	マウスボタンを押している時に発動
    // mouseup	マウスボタンを離したときに発動
    // mousemove	マウスカーソルが移動した時に発動
    // keydown	キーボードのキーを押したときに発動
    // keyup	キーボードのキーを離したときに発動
    // keypress	キーボードのキーを押している時に発動
    // change	フォーム部品の状態が変更された時に発動
    // submit	フォームのsubmitボタンを押したときに発動
    // scroll	画面がスクロールした時に発動

//A02
// $(function(){
//     $('#color-change').on("change", function(){
//     let select_color = $(this).val();
//     $('.title').css('color', select_color);
//     });
// });
//※対象要素.on( イベント種類, セレクタ, データ ,関数 )
    //「セレクタ」は、対象要素内でさらに指定したセレクタ（タグの種類）からのイベントだけを確認するように設定できる。
    //「データ」は、任意のデータを渡したい時に値を設定することができる。
    //イベント種類一例
    // change	フォーム部品の状態に何らかの変化があった時に発動
    // click	要素がクリックされた時に発動
    // blur / focus	要素にフォーカスが当たったとき(focus)、外れたとき(blur)に発動
    // load	ドキュメントが読み込まれたあとに発動
    // resize	ウィンドウサイズが変化した時に発動
    // scroll	画面がスクロールした時に発動
    // keyup / keypress	キーボードのキーが押された時(keypress)、離された時(keyup)に発動
    // mouseup / mousedown	マウスのボタンが押された時(mousedown)、離された時(mouseup)に発動
    // mousemove	指定の要素内でマウスが動いている時に発動
    // submit	フォームが送信された時に発動
    // error	何らかのJavaScriptエラーが発生した時に発動

// Q03
var hList3=new Array();
//各ボックスの高さを取得して配列に保存しておく
$(".list3 li").each(function(i){
	//高さを追加
	hList3[i]=$(this).outerHeight();
});
var maxH3 = Math.max.apply(null,hList3);
$(".list3 li").css("height",maxH3+"px");
// ※Math.max(値1,値2,値3,・・・・) 与えられた引数の中で最大値を返す
// ※関数名.apply(関数の処理の対象となる要素(＝htmlで変化させたい要素),関数で使う引数(＝配列のみ) );
// ※apply…定義した関数を呼び出すメソッド。呼び出した関数で使う引数(applyの第２引数)は配列のみが使える。

//applyの代用=「...」 スプレッド構文（スプレッド構文であれば、複数配列を1度に指定できる）
// const data1 = [ 1 , 20 , 3 , 40 , 5 ];
// const data2 = [ 10 , 200 , 30 , 400 , 50 ];
// const maxValue = Math.max( null , ...data1 , ...data2 );

// console.log(maxValue); // 結果: 400

//A03
// $(function(){
//     let max_li = 0;
//     $('li').each(function(index, el) {
//         if( max_li < $(el).height() ){
//         max_li = $(el).height();
//         }
//     });
//     $('li').height(max_li);
// });
//※function 関数名(引数1, 引数2, ...){
//     実行される処理1;
//     実行される処理2;
//     return 戻り値;
// }；
//※「１番大きい」や「１番小さい」を取得する時は、ループの処理が必要になる。

// Q04
$(function() {
    $('.list4 li').click(function() {
        let index4 = $(this).index()+1;
        //alert('クリックした要素は'+index4+'番目です！');
    });
});
//click()イベントのブロック内で「jQuery(this).index()」を実行することでli要素のインデックスを取得することができる。

//A04
// $(function(){
//     $('li').on('click',function(){
//         let click_li_num = $('li').index(this);
//         alert('あなたは' + (click_li_num + 1) + '番目を押しました！');
//     });
// });
//※「変数 ＝ $('li').index(this);」はよく使うので覚えておく。

//Q05
function formatDate (date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth())).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
};

//input要素を変数へ格納
const inputDate5 = window.document.getElementById('birthday');
//イベントハンドラに"input"を指定し、input要素の値が変更されたことをトリガーとする
inputDate5.addEventListener('input', function(e) {
    let myBirth = new Date(1990,1,25);
    let myBirthA = formatDate(myBirth,'yyyy-MM-dd');
    if(e.target.value == myBirthA){
        $('.q05h').css('display','block');
    }else {
        $('.q05h').css('display','none');
    }
});

//A05
// $(function(){
//     const birthday = '1990-01-25'; //ここはご自分の誕生日にする
//     $('#birthday').on("change", function(){
//         if( $(this).val() == birthday){
//             $('h1').fadeIn();
//         }
//     });
// });
//※$('#birthday').on("change", function(){　〜〜
// とすることでinputの値に変更があった場合の検知ができる。
// 検知後、「$(this).val()」で値を取得して判別。

// Q06
function q06(answer06) {
    //alert('なるほど！'+answer06+'なんですね！');
};
q06('テレビ');

//A06
// function naruhodo(text) {
//     return 'なるほど！' + text + 'なんですね！';
// }
// alert(naruhodo('テレビ'));

// Q07
$(function(){
    $('.ul07 li').on('click',function(){
        $(this).css('background-color','rgb(0,0,255)')
    });
});

//A07
// $(function(){
//     $('li').on('click',function(){
//         if($(this).css('background-color') == 'rgb(255, 0, 0)'){
//         $(this).css('background-color', 'rgb(0, 0, 255)');
//         }
//     });
// });

// Q08
function ninja08(target) {
    if(Number.isInteger(target)) {
        //alert('整数です！');
    };
};
ninja08(3);

// A08
// function ninja ( target ) {
//     if( Number.isInteger(target) ){
//         alert('これは整数です');
//     }
// }
// ninja(2);

// Q09
let ninja09 = '忍者CODE';
//alert(ninja09.length);

// A09
// const ninja = "忍者CODE";
// alert(ninja.length);

// Q10
let nowDate = new Date();
let nowMonth = nowDate.getMonth()+1;
console.log(nowMonth);
function month_judge(month) {
    if(nowMonth == month) {
        //alert('今月の月です！')
    }else {
        //alert('今月の月ではありません')
    }
};
month_judge(2);

//A10
// const now   = new Date();
// const now_month = now.getMonth() + 1;    //月

// function month_judge( month ){
//     if( now_month == month ){
//         alert("今月の月です！");
//     }else{
//         alert("今月の月ではありません！");
//     }
// };
//month_judge(3);
//※new Date()を使うのがポイント。プログラミングは0から始まるため「+1」をする。

// Q11
let ninja11 = [1,3,5,7];
ninja11.pop();
//alert(ninja11);

//A11
// let ninja = [1,3,5,7];
// ninja.pop();
// alert(ninja);
//※popメソッドを使うことで配列の最後の要素を削除することができる。他のプログラミング言語でもpopは共通して使える。

// Q12
let target_str12 = "忍者CODE";
function ninja_judge12(str) {
    let result = str.includes(target_str12)
    if(result == true) {
        //alert('含む！')
    };
};
ninja_judge12("おはよう忍者CODE");
ninja_judge12("忍者");
//配列名.includes(検索する値, 開始インデックス番号);
//※結果…true/false

// A12
// const target_str = "忍者CODE";
// function ninja_judge( str ){
//     if( str.indexOf(target_str) != -1 ){
//         alert("含む");
//     }
// };
//ninja_judge("おはよう忍者CODE");
//※配列名.indexOf(検索する値, 開始インデックス番号);
//結果：指定した値がある場合…どの位置(インデックス番号)か返す.なかった場合…−1を返す。

// Q13
let ninja13 = "28";
let result13 = parseInt(ninja13);
//alert(typeof result13);

//A13
//let ninja = "28";
// ninja = Number(ninja);
// alert(typeof ninja);  //typeof で型を判別。
//Number()…数字以外を含む文字列を引数に指定するとNaNを返す。ex.Number('123'); // 123, Number('123a');// NaN
//parseInt()…文字列を整数に変換。実数の場合は小数点以下を切り捨て。第2引数で変換時の基数を指定できる。省略した場合は10進数。数字以外の文字は無視。ex.parseInt('2.8', 10);  // 2 , parseInt('123a', 10); // 123
//parseFloat()…文字列を実数に変換。数字以外の文字は無視。ex.parseFloat('123a');// 123（数字以外は無視）

// Q14
let ninja14 = [2,4,52,9,38];
const third14 = ninja14.splice(3, 1);
//alert(third14);
//※array.splice(index, howMany, [element1][, ..., elementN]);
//配列名.splice(取り出す要素のインデックス,指定インデックスから取り除く要素数,新しく挿入する要素の指定)

//A14
// const ninja = [2,4,52,9,38];
// alert(ninja[3]);

// Q15
function my_uppercase(str15) {
    let result15 = str15.toUpperCase();
    //alert(result15);
};
my_uppercase("ninjacode");

//function my_uppercase( str ){
//    alert( str.toUpperCase() );
//}
//my_uppercase( "ninjacode" );
//※文字列.toUpperCase

// Q16
let my_array16 = [2,19,59,203,5];
//alert(Math.max.apply(null,my_array16));

//apply()
//console.log(Math.min(...array));
// console.log(Math.max(...array));
//スプレッド構文
// console.log(Math.min.apply(null, array));
// console.log(Math.max.apply(null, array));

//A16
// const my_array = [2,19,59,203,5];
// alert(Math.max(...my_array));

// Q17
//「clone17」の要素を取得
let cloneBtn = document.querySelector(".clone17");
//ボタンをクリックしたときに実行(イベントリスナー使用：ie9は以上で動作)
cloneBtn.addEventListener("click", function(){
 //「ul17」の要素を取得
    let ul17 = document.querySelector(".ul17");
 //「ul17」の要素の先頭にある子要素を複製（コピー）
    let clone17 = ul17.firstElementChild.cloneNode(true);
 //「ul17」の要素の最後尾に複製した要素を追加
    ul17.appendChild(clone17);
});
//cloneNode()メソッド…指定した要素を複製。引数（true:子孫要素も複製、false:子孫要素を複製しない）
//let 親要素 = document.getElementById('xxx');
//let 追加する要素 = document.createElement('div');
//親要素.prepend(追加する子要素);　//子ノードの先頭に追加
//親要素.appennd(追加する子要素);  //子ノードの最後に追加
//※既存のタグ子要素(getElementByIdなどで取得)を別の親要素の中に追加すると、既存の親要素からは削除される。

//A17
// $(function(){
//     $('.clone').on('click', function(){
//         let li_clone = $('li').eq(0).clone();
//         $('ul').append(li_clone);
//     });
// });
//「eq()」は、複数のHTML要素の中からインデックス番号を指定することで特定の要素だけを取得。

// Q18
let text18 = document.querySelector('.text18');
text18.addEventListener('focus',(e) => {
    document.querySelector('.answer18').innerHTML = e.target.value;
});
//focusin:要素がフォーカスされている時に発生するイベント（<=>focusout）
//focus:バブリングがないfocusイベント（バブリング…子要素のイベント(クリックアラート)が発生すると、親要素のイベントも次々実行されること）

//A18
// $(function(){
//     $('input').focus(function() {
//         $('.answer').text($(this).val())
//     });
// });
//※フォーカスを判別するにはfocusが使える。

// Q19
$('.x-scroll19').scroll(function () {
    let x19 =$(this).scrollLeft();
    $('.scroll-val19').text(x19);
});
//対象要素.scroll(function())…スクロール中にイベントを発火させる
//対象要素.scrollLeft()…横スクロールの位置を取得するメソッド

//A19
// $(function(){
//     $('.x-scroll').on('scroll', function(){
//         let scroll_val = $(this).scrollLeft();
//         $('.scroll-val').text(scroll_val);
//     });
// });

// Q20
$('.delete20').click(function() {
    let ul20LastChild = document.querySelector('.ul20').lastElementChild;
    ul20LastChild.remove();
});
//lastChild…テキストノード・コメントノード込みで最後をカウントする。ex.<li>最終要素</li>改行(←最終ノード)</ul>
//lastElementChild…テキストノード・コメントノードは無視。<li>最終要素</li>(←最終ノード)改行</ul>

//A20
// $(function(){
//     $('.delete').on('click', function(){
//         $('ul li:last-child').remove();
//     });
// });
//最後の番目を指定する方法はcssと同じようにlast-childが使える。

// Q21
$('[data-delete="id"]').click(function(){
    $('[data-delete-target]').removeAttr('id');
});
$('[data-delete="class"]').click(function(){
    $('[data-delete-target]').removeAttr('class');
});

//対象要素.removeAttribute()…javascriptを用いる時に使う
//対象要素.removeAttr()…j Queryを用いる時に使う
// 属性値を取得する(getAttribute)
// 属性値を設定する(setAttribute)
// 属性値を削除する(removeAttribute)
// 属性値があるか確認する(hasAttribute)

//カスタムデータ属性…data-⚪︎⚪︎⚪︎
//データ属性を使用して属性値を呼び出す。対象要素.dataset.⚪︎⚪︎⚪︎
//属性値を使用して、データ毎にスタイルを変更できる。ex.article[data-columns='3'] {width: 400px;},article[data-columns='4'] {width: 600px;}
// data属性（data-*）の取得	element.dataset.dataName
// data属性（data-*）の設定	element.dataset.dataName = '値';
// data属性（data-*）の更新	element.dataset.dataName = '値';

//A21
// $(function(){
//     $('[data-delete]').on('click', function(){
//         let my_attr = $(this).attr('data-delete');
//         $('[data-delete-target]').attr(my_attr, '');
//     });
// });
//let new = $('対象要素').attr('属性名'); //属性取得
//$('対象要素').attr('属性名', '属性値1 属性値2 属性3...'); //属性追加
//$('対象要素').removeAttr('属性名'); もしくは、$('対象要素').attr('属性名',''(←空にする)); //属性削除
//$('対象要素').attr({class: 'test', id: 'id2', value: 'val', checked: 'true', name: 'name'}); //複数属性まとめて追加

// Q22
window.addEventListener('scroll', function() {
	$('.scroll-val22').text(window.pageYOffset);
});
//windowオブジェクト…全ての親となるオブジェクト(<script>内では省略できる)
//window.pageYoffset:より広範囲を対象
//window.scrollY or document.body.scrollTop:対応しないブラウザあり

//A22
// $(function(){
//     $(window).on('scroll', function(){
//         $('.scroll-val22').text($(this).scrollTop());
//     });
// });
//$(this)は$(window)であり、$(this).scrollTop()となる。

// Q23
$(function() {
    $('.add23').click(function() {
        $('.val23').append($('.text23').val());
    })
});

//A23
// $(function(){
//     $('.add').on('click', function(){
//         $('.val').append($('input').val());
//     });
// });
//appendで要素の最後に追加できる。
//$('対象要素').val())は多用する為、覚えておく。
//対象要素.val()メソッド…元から設定されているものでなく、フォーム等の入力された値を取得・変更するメソッド。
//対象要素.valueプロパティ…プロパティそのもの。フォーム等の入力された値を取得する場合は、changeイベントなどを活用する。

// Q24
let btn24 =document.querySelector('.double24');
btn24.addEventListener('dblclick', function() {
    alert("ダブルclickされました！");
});

//document.getElementById("対象要素");
//$('#対象要素')[0];
//上記二つは、同等の値？？

//A24
// $(function(){
//     $('.double').on('dblclick', function(){
//         alert("ダブルclickされました！");
//     });
// });

// Q25
$('.text25').change(function() {
    $('.val25').text($(this).val());
});

//A25
// $(function(){
//     $('input').on('change', function(){
//         $('.val').text($(this).val());
//     });
// });
//changeの発火はカーソルが離れた時。

// Q26
$(window).resize(function() {
    $('.val26').text($(window).width());
});

//A26
// $(function(){
//     $(window).on('resize', function(){
//         $('.val').text($(this).width());
//     });
// });

// Q27
$('.text27').keyup(function(e) {
    $('.val27').text($(this).val());
});

//A27
// $(function(){
//     $('input').on('keyup', function(){
//         $('.val').text($(this).val());
//     });
// });
