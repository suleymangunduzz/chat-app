import { classnames, hoursFormatter, checkURLContainsImage } from './index';

it('Should return the class name with seletor', () => {
    const classNamesObj = {
        'message__box': true,
        'message__box--green': true
    };

    expect(classnames(classNamesObj)).toEqual('message__box message__box--green');
});

it('Should return time correctly with time type 24', () => {
    const timeObj = { hours: 23, minutes: 30 };
    const timeType = 24;

    expect(hoursFormatter(timeObj, timeType)).toEqual('23:30');
});

it('Should return time correctly with time type 12', () => {
    const timeObj = { hours: 17, minutes: 30 };
    const timeType = 12;

    expect(hoursFormatter(timeObj, timeType)).toEqual('05:30 PM');
});

it('Should return true', () => {
    const url = "https://getstream.io/random_png/?id=orange-sun-5&name=Orange+sun";
    
    expect(checkURLContainsImage(url)).toEqual(true);
});

it('Should return false', () => {
    const url = "https://getstream.io/random/?id=orange-sun-5&name=Orange+sun";
    
    expect(checkURLContainsImage(url)).toEqual(false);
});