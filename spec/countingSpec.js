
describe("Turning base ten numbers into English.", function() {

    it("1 to be 'one'.", function() {
        expect("one").toEqual(numberToEnglish(1));
    });

    it("10 to be 'ten'.", function() {
        expect("ten").toEqual(numberToEnglish(10));
    });

    it("5 to be 'five'.", function() {
        expect("five").toEqual(numberToEnglish(5));
    });

    it("99 to be 'ninety-nine'.", function() {
        expect("ninety-nine").toEqual(numberToEnglish(99));
    });

    it("0 to be 'zero'.", function() {
        expect("zero").toEqual(numberToEnglish(0));
    });

    it("3.14159 to be 'three point one four one five nine'.", function() {
        expect("three point one four one five nine").toEqual(numberToEnglish(3.14159));
    });

    it("123 to be 'one hundred and twenty-three'.", function() {
        expect("one hundred and twenty-three").toEqual(numberToEnglish(123));
    });
    
    it("1234567899 to be 'one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine'.", function() {
        expect("one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine").toEqual(numberToEnglish(1234567899));
    });

    it("-50 to be 'negative fifty'.", function() {
        expect("negative fifty").toEqual(numberToEnglish(-50));
    });

});
