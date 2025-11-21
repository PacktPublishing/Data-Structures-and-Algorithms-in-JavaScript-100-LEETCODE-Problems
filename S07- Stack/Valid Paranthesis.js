/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch === '(' || ch === '{' || ch === '[') {
            st.push(ch);
        }
        else {
            if (st.length === 0) {
                return false;
            }
            else {
                let lch = st[st.length - 1];
                if ((lch === '(' && ch === ')') || (lch === '{' && ch === '}') || (lch === '[' && ch === ']')) {
                    st.pop();
                }
                else {
                    return false;
                }   
            }
        }
    }
    if (st.length === 0) {
        return true;
    }
    else {
        return false;
    }
};