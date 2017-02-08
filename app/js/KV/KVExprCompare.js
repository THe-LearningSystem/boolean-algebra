/**
 * Created by Sergej on 18.01.2017.
 */
var KVExprCompare = function(expression){
    this.expression = expression;
    this.setExpression = function(expr) {
        this.expression = expr;
    };
    this.getText = function () {
        return this.expression.text;
    };

    this.equals = function(compare){
        if (!compare) return false;
        if (compare.getText() == this.getText()) return true;

        /* Generiere Wahrheitstabelle für beide KVExprCompare Objekte*/
        var compTable = compare.expression.generateTable();
        compTable.updateView();
        var thisTable = this.expression.generateTable();
        thisTable.updateView();

        /* Prüfe auf Äquivalenz der Tabellen */
        if (compTable.bits.length != thisTable.bits.length) return false;
        var bits = compTable.bits.length > thisTable.bits.length ? compTable.bits : thisTable.bits;
        for (var i = 0; i < bits.length; i++) {
            var bitLine = bits[i];
            var resultA = this.expression.getResult(bitLine.param);
            var resultB = compare.expression.getResult(bitLine.param);

            if (resultA != resultB) return false;
        }

        return true;
    };
};
/* Fetch alle Klammern raus */
KVExprCompare.getClips = function (text) {
    var re = BAExpression.regex.clips;

    var count = 0;
    var result = [];
    while ( (match = re.exec(text)) !== null) {
        if (count++ >= 99999) {
            return false;
        }

        var m = match[0];
        result.push(m);
    }
    return result;
};
/* Formüberprüfung auf KNF */
KVExprCompare.isKNF = function (text) {
    var clips = KVExprCompare.getClips(text);

    /* Schau ob Klammern vorhanden sind */
    if (clips.length == 0) {
        return true;
    }

    /* Ist innerhalb der Klammern ein UND? */
    for (var i = 0; i < clips.length; i++) {
        var clip = clips[i];
        if (clip.indexOf(SYMBOL_AND) > -1) return false;
        text = text.replace(clip, "K");
    }
    /* Befinden sich außerhalb der Klammern ODER? */
    return (text.indexOf(SYMBOL_OR) <= -1);
};
/* Formüberprüfung auf KNF */
KVExprCompare.isDNF = function (text) {
    var clips = KVExprCompare.getClips(text);

    /* Schau ob Klammern vorhanden sind */
    if (clips.length == 0) {
        return true;
    }

    /* Ist innerhalb der Klammern ein ODER? */
    for (var i = 0; i < clips.length; i++) {
        var clip = clips[i];
        if (clip.indexOf(SYMBOL_OR) > -1) return false;
        text = text.replace(clip, "K");
    }
    /* Befinden sich außerhalb der Klammern UND? */
    return (text.indexOf(SYMBOL_AND) <= -1);
};