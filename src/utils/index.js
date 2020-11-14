/**
 * Transforms given object to classnames
 * @example
 * let classObj = {
 *  'message-box': true,
 *  'message-box--left': true
 * }
 * 
 * a sample result is like below
 * <div className="message-box message-box--left">SomeText</span>
 * 
*/
export const classnames = classObj => {
    let str = '';

    for (const [key, value] of Object.entries(classObj)) {
        str = value ? (str === '' ? key : str + ' ' + key) : str
    }
    
    return str;
};

/**
 * Returns hours and minutes info from given date
 * @example
 * 
 * const time = hoursFormatter(newDate(), 12);
 * time = 01:30PM
 * 
 * const time = hoursFormatter(newDate(), 24);
 * time = 13:30
*/

export const hoursFormatter = (date, type) => {
    let hours = date.getHours() % type;
    let minutes = date.getMinutes();

    let finalHours = `${hours > 10 ? hours : `0${hours}`}:${minutes > 10 ? minutes : `0${minutes}`}`;
    let isAM = date.getHours() < 12;

    return type === 12 ? `${finalHours} ${isAM ? 'AM' : 'PM'}` : finalHours;
};
