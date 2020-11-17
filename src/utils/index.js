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
 * Returns hours and minutes info from time object
 * @example
 * 
 * const time = hoursFormatter({ hours: 13, minutes: 30 }, 12);
 * time = 01:30 PM
 * 
 * const time = hoursFormatter({ hours: 13, minutes: 30 }, 24);
 * time = 13:30
*/

export const hoursFormatter = (time = {}, type) => {
    const hours = time.hours % type;
    const minutes = time.minutes;

    let finalHours = `${hours > 10 ? hours : `0${hours}`}:${minutes > 10 ? minutes : `0${minutes}`}`;
    let isAM = hours > 12;

    return type === 12 ? `${finalHours} ${isAM ? 'AM' : 'PM'}` : finalHours;
};

/**
 * Returns true if the given link has an image.
 * @param {string} url 
 */
export const checkURLContainsImage = (url = '') => {
    return url.includes('http') && (url.includes('png') || url.includes('jpeg') || url.includes('gif') || url.includes('jpg'));
};
