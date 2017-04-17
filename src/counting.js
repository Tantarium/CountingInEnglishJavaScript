function numberToEnglish(n) {
    var english = "", negative = false;
    if (n == null) {english = "zero";}
    if (n < 0) {negative = true;}
    n = Math.abs(n)
    if (n == Infinity) {
        if (negative) {english = "negative " + english;}
        english = english + "infinity";
        return english;
    }
    if (n < 10) {english = english + ones(parseInt(n));}
    else if (n < 100) {english = english + tens(parseInt(n));}
    else if (n < 1000) {english = english + hundreds(parseInt(n));}
    var degree = 0, degreeChecker = n;
    while (degreeChecker >= 1000) {
        degree++;
        degreeChecker = parseInt(degreeChecker / 1000);
    }
    if (n >= 1000) {
        english = english + degreesAboveHundreds(degree, parseInt(n));
    }
    if (n % 1 != 0) {
        var decimal = n.toString().split(".")[1];
        if (decimal.toString().length > 5) {decimal = decimal.toString().substring(0, 5);}
        english = english + " point ";
        for (var i = 0; i < decimal.length; i++) {
            english = english + ones(parseInt(decimal.split("")[i])) + " ";
        }
        english = english.trim();
    }
    if (negative) {english = "negative " + english;}
    return english;
}

function degreesAboveHundreds(degree, n) {
    var en = "";
    var current = n.toString().substring(0, n.toString().length - (degree * 3));
    switch (current.length) {
        case 3:
            en = en + hundreds(parseInt(current)) + " ";
            break;
        case 2:
            en = en + tens(parseInt(current)) + " ";
            break;
        case 1:
            en = en + ones(parseInt(current)) + " ";
            break;
    }
    en = en + degreeValue(degree) + " ";
    
    n = n - (current * Math.pow(10, 3 * (degree)));
    var degreeChecker = n, newDegree = 0;
    while (degreeChecker >= 1000) {
        newDegree++;
        degreeChecker = parseInt(degreeChecker / 1000);
    }
    if (degree > newDegree + 1) {degree--;}
    else if (n < 100 && n > 1) {en = en + "and ";}
    if (n == 0 ) {return en.trim();}
    degree--;
    if (degree > 0) {return en + degreesAboveHundreds(degree, n);}
    else {
        switch (n.toString().length) {
            case 1:
                if (n == 0) {return en.trim();}
                return en + "and " + ones(n);
                break;
            case 2:
                if (n == 0) {return en.trim();}
                return en + tens(n);
                break;
            case 3:
                if (n == 0) {return en.trim();}
                return en + hundreds(n);
                break;
        }
    }
}

function degreeValue(degree) {
    var name = "";
    switch (degree) {
        case 1:
            name = "thousand";
            break;
        case 2:
            name = "million";
            break;
        case 3:
            name = "billion";
            break;
        case 4:
            name = "trillion";
            break;
        case 5:
            name = "quadrillion";
            break;
    }
    return name;
}

function hundreds(n) {
    var en = "";
    var first = parseInt(n.toString().split("")[0]);
    var second = parseInt(n.toString().split("")[1]);
    var third = parseInt(n.toString().split("")[2]);
    en = en + ones(first) + " hundred";
    if (second > 0) {
        en = en + " and " + tens(parseInt(second.toString() + third.toString()));
    }
    else if (third > 0) {
        en = en + " and " + ones(third);
    }
    return en;
}

function tens(n) {
    var en = ""
    var first = parseInt(n.toString().split("")[0]);
    var second = parseInt(n.toString().split("")[1]);
    switch (first) {
        case 9:
            en = en + "ninety";
            break;
        case 8:
            en = en + "eighty";
            break;
        case 7:
            en = en + "seventy";
            break;
        case 6:
            en = en + "sixty";
            break;
        case 5:
            en = en + "fifty";
            break;
        case 4:
            en = en + "forty";
            break;
        case 3:
            en = en + "thirty";
            break;
        case 2:
            en = en + "twenty";
            break;
        case 1:
            en = en + teens(second);
            break
    }
    if (second > 0 && first > 1) {en = en + "-" + ones(second);}
    return en;
}

function teens(n) {
    var en = "";
    switch (n) {
        case 0:
            en = "ten";
            break;
        case 1:
            en = "eleven";
            break;
        case 2:
            en = "twelve";
            break;
        case 3:
            en = "thirteen";
            break;
        case 4:
            en = "fourteen";
            break;
        case 5:
            en = "fifteen";
            break;
        case 6:
            en = "sixteen";
            break;
        case 7:
            en = "seventeen";
            break;
        case 8:
            en = "eighteen";
            break;
        case 9:
            en = "nineteen";
            break;
    }
    return en;
}

function ones(n) {
    var en = "";
    switch (n) {
        case 0:
            en = en + "zero";
            break;
        case 1:
            en = en + "one";
            break;
        case 2:
            en = en + "two";
            break;
        case 3:
            en = en + "three";
            break;
        case 4:
            en = en + "four";
            break;
        case 5:
            en = en + "five";
            break;
        case 6:
            en = en + "six";
            break;
        case 7:
            en = en + "seven";
            break;
        case 8:
            en = en + "eight";
            break;
        case 9:
            en = en + "nine";
            break;
    }
    return en;
}