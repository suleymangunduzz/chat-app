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
        str = value ? (str + ' ' + key) : str
    }
    
    return str;
};