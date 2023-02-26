// //Q01
// alert (innerWidth);
// // window.outerHeight：ブラウザ全体(開いたブラウザ外郭)の高さ
// // window.outerWidth
// // window.innerHeight：コンテンツ表示領域(バーの長さを抜いた)の高さ※スクロールバーが既表示の場合は含める
// // window.innerWidth
// // document.documentElement.clientHeight：スクロールバーを除いた高さ
// // document.documentElement.clientWidth

// //A01
// // const win_width = window.innerWidth;
// // alert(win_width);

// //Q02
// let num1=5
// let num2=8
// alert (num1 + num2);

// //Q03
// let text1="リンゴ・バナナ"
// let text2="レモン"
// let total=text1+text2
// let result=total.replace("バナナ","")
// alert (result);
// // let name= 'あいうえおか'; 　　　　　　　　　　　　　　　　　：スライスによる削除方法
// //        ０/１２/３４５
// // let result = name.slice(1, 3);　→いう
// // let name= 'あかいかうかえおか';　　　　　　　　　　　　　　：「か」を検索し、全削除　※//gを使用しない場合、最初の検索文字のみ削除
// // let result = name.replace(/か/g, '')　→あいうえお
// // let name= 'あい*6Fa7pJ~うD/6wg8V,えお';　　　　　　　　　：「あいうえお」以外を全削除
// // let result = name.replace(/[^あいうえお]/g, '');
// // let name= '　あ　い　う　え　お　か　';　　　　　　　　　　：/sで空白削除し＋/gを後につけることで、全空白文字を削除
// // let result = name.replace(/\s+/g, '');

// //A03
// // let text1 = 'リンゴ・バナナ';
// // let text2 = 'レモン';
// // let my_fruits = (text1 + text2).replace('バナナ', '');　：バナナの文字列を空白に変換
// // alert(my_fruits);

// //Q04
// $('li').click(function() {
//     let class_name=$(this).attr('class');
//     alert(class_name);
// });
// //attr()…【対象要素.attr(属性,(変更する値)】　　　　　　　　　：属性を取得し、変更するメソッド
// /* <p id="sample">こんにちは</p>
// const result = $('p').attr('id', 'text'); 　→<p id="text">こんにちは</p> */

// //A04
// // $(function(){
// //    $('li').on('click',function(){
// //        alert($(this).attr('class'));
// //    });
// // });

// //Q05
// window.setTimeout(function(){
//     alert();
// }, 2000);

// //A05
// // setTimeout(function() {
// //     alert('2秒経ちました！');
// // }, 2000);

// //Q06
// let fruits = ['リンゴ', 'メロン', 'バナナ'];
// alert(fruits[1]);

// //A06
// //const fruits = ["リンゴ", "メロン", "バナナ"];
// //alert(fruits[1]);　　　　　　　　　　　　　　　　　　　　　　：要素に格納されている値を参照

// // let pref = ['Tokyo', 'Osaka', 'Aichi', 'Kyoto'];
// // pref[1] = 'Nara';
// // >> ["Tokyo", "Nara", "Aichi", "Kyoto"]　　　　　　　　　：要素に新しい値を代入する

// //Q07
// let count7 = $(".list2 li").length;
// alert("liタグの数は"+count7+"個です！")

// //A07
// //$(function(){
// //    alert('liタグの数は' + $('li').length + '個です！');
// //});

// //Q08
// $(".p").addClass("is-active");

// //A08
// // $(function() {
// //     $('p').addClass('is-active');
// // })

// //Q09
// $(".p2").addClass("is-active");
// $(".p2").removeClass("blue");

// //A09
// // $(function() {
// //     $('p').removeClass('blue');
// // })

//Q10
$('.p3').click(function() {
    $(".p3").toggleClass("is-active");
});

//A10
// $(function() {
//     $('p').click(function() {
//         $(this).toggleClass('is-active');
//     });
// })

//Q11
$('.target').prepend('<p>ダミーテキストA</p>');

//A11
// $(function() {
//     $('.target').prepend('<p>ダミーテキストA</p>');
// })
//javascriptVer.
// const pTop = document.getElementById('text') //divのtextを取得しpTopに代入
// const newP = document.createElement('p') //新しい要素newPを作成
// newP.textContent = '<p>ダミーテキストA</p>' //newPにテキストを追加
// pTop.before(newP) //.beforeメソッドを使用しpTop(指定した要素の前)にnewPを追加//

//Q12
$(() => {
    $(".target").append("<p>ダミーテキストG</p>");
});

//A12
// $(function() {
//     $('.target').append('<p>ダミーテキストG</p>');
// })

//Q13
//A13
$(function() {
    $('.target').after(
    '<div class="target">' +
    '<p>ダミーテキストF</p>' +
    '<p>ダミーテキストG</p>' +
    '<p>ダミーテキストH</p>' +
    '<p>ダミーテキストI</p>' +
    '<p>ダミーテキストJ</p>' +
    '</div>'
    );
})
//Q14
$(function() {
    $('.trigger14').click(function(){
        $('.target14').css('display', 'block');
    });
});

//A14
// $(function() {
//     $('.trigger14').click(function() {
//     $('.target14').show();
//     });
// }) ※display:noneが付与されている要素の表出は、show()を使用。
//show('slow','normal','fast',1000(m秒))で表示スピードを調整できる。

//Q15
$(function() {
    $('.trigger15').click(function(){
        $('.target15').hide();
    });
});

//A15
// $(function() {
//     $('.trigger15').click(function() {
//     $('.target15').hide();
//     });
// })

//Q16
$(function() {
    $('.trigger16').click(function(){
        $('.target16').fadeIn(3000);
    });
});

//A16
// $(function() {
//     $('.trigger16').click(function() {
//         $('.target16').fadeIn("slow");
//     });
// })

//Q17
$(function() {
    $('.trigger17').click(function(){
        $('.target17').fadeOut('slow');
    });
});

//A17
// $(function() {
//     $('.trigger17').click(function() {
//         $('.target17').fadeOut("slow");
//     });
// })

// $('button').click(function() {
//     $('h1').fadeToggle();
// }) ※フェードイン・アウトを繰り返す。

//Q18
alert('jqueryを使っているよ！');

//A18
// $(function(){
//     alert("jqueryを使っているよ！");
// });

//１時間半くらい？？