var roundToFixed = function(decimalsNum) {
    return function(num) {
        var powerOfTen = Math.pow(10.0, decimalsNum);
        return Math.round(num * powerOfTen) / powerOfTen;
    };
};

var roundToFiveDecimals = roundToFixed(5);

roundToFiveDecimals(5.5464373528453843);

var numbersWithFixedDecimals = function() {
    return {
        toDecimals: function(decimalsNum) {
            return {
                round: function(num) {
                    var powerOfTen = Math.pow(10.0, decimalsNum);
                    return Math.round(num * powerOfTen) / powerOfTen;
                }
            };
        }
    };
};

var toFiveDecimals = numbersWithFixedDecimals().toDecimals(5);

toFiveDecimals.round(5.5464373528453843);

var roundToFiveDecimals = numbersWithFixedDecimals().toDecimals(5).round;

roundToFiveDecimals(5.5464373528453843);

var leftPadWith = function(element) {
    return function(num) {
        return function(data) {
            var strData = data.toString();
            if (strData.length < num) {
                return Array(num - strData.length + 1).join(element.toString()) + strData;
            }
            return strData;
        }
    };
};

leftPadWith("*")(5)("ko");

var leftPadWithFiveAsterisks = leftPadWith("*")(5);

var leftPad = function() {
    return {
        using: function(element) {
            return {
                until: function(num) {
                    return function(data) {
                        var strData = data.toString();
                        if (strData.length < num) {
                            return Array(num - strData.length + 1).join(element.toString()) + strData;
                        }
                        return strData;
                    }
                }
            };
        }
    };
}

leftPad().using("*").until(5)("ko");

var leftPadWithFiveAsterisks = leftPad().using("*").until(5);

leftPadWithFiveAsterisks(8);