var duty;
var month;
var day;
var dayOfWeek;
var counter;
var speaker;
var theme;
var whatYouNeed;
var outline;
var type;
var contact;

$(function () {
    var clipboard = new Clipboard('.copy');
    $('#form').submit(function () {
        event.preventDefault();

        duty = $('input[name=duty]').val();
        month = $('input[name=month]').val();
        var date = new Date($('input[name=day]').val());
        month = date.getMonth() + 1;
        day = date.getDate();
        dayOfWeek = [ "日", "月", "火", "水", "木", "金", "土" ][date.getDay()]
        counter = $('input[name=counter]').val();
        speaker = $('input[name=speaker]').val();
        theme = $('input[name=theme]').val();
        var pureWhatYouNeed = $('textarea[name=whatYouNeed]').val().split(/\r\n|\r|\n/);
        whatYouNeed = createMultipleLinesContent(pureWhatYouNeed);
        var pureOutline = $('textarea[name=outline]').val().split(/\r\n|\r|\n/);
        outline = createMultipleLinesContent(pureOutline);

        type = $('input[name=type]').val();
        contact = $('input[name=contact]').val();
        $('#result_subject').val(getMailSubject());
        $('#result_content').val(getMailContent());
    })
});

function createMultipleLinesContent(content) {
    var result;
    $.each(content, function(index, val) {
        if (index != 0) {
            result = result + '\n            ' + val;
        } else {
            result = val;
        }
    });
    return result;
}

function getMailSubject() {
    return `【周知】勉強会「HR NEXT」第${counter}回開催【${month}/${day} 20:00~】`;
}

function getMailContent() {
return `皆さま

お疲れ様です。${duty}です。

${month}月${day}日(${dayOfWeek})に勉強会「HR NEXT」の第${counter}回開催を行います。

以下にアジェンダを記載いたしますので、ご確認をお願いいたします。

*****************************************************
【第${counter}回アジェンダ】
日時   :   ${month}/${day}(${dayOfWeek}) 20:00 ～ 21:00
場所   :   研修ルームB, C

    発表者 : ${speaker}
    テーマ : ${theme}
    持ち物 : ${whatYouNeed}
    説　明 : ${outline}
    形　式 : ${type}


*****************************************************

※ 参加表明などは不要なので当日開始時刻に研修ルームB, Cにお集まりください！
※ [HR NEXT]毎週水曜日開催予定です。まずは足を運んでみてください！
※ 登壇者を随時募集中です！ちょっと迷ってる方もまずは下記の『お問い合わせ先』にご連絡ください。
（お近くのブラシスメンバーに声をかけて頂いても大丈夫です！）

不明点、確認したいことがございましたら以下にお問い合わせください。
お問い合わせ先 : ${contact}

よろしくお願いいたします。

${duty}`
}
