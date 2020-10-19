import DOMPurify from 'dompurify';

const validateLoginInput = (user, pass) => {
    let validate = {}
    
    if (user) {
        validate.username = {};
        const cleanUser = DOMPurify.sanitize(user);
        validate.username.valid = (cleanUser.length > 3) ? true : false;
        validate.username.msg = (cleanUser.length <= 3) ? 'The Username is too short...' : '';
    }
    
    if (pass){
        validate.pass = {};
        const cleanPass = DOMPurify.sanitize(pass);
        validate.pass.valid = (cleanPass.length > 3) ? true : false;
        validate.pass.msg = (cleanPass.length <= 3) ? 'The Password is too short...' : '';
    }

    return validate;
}
export default validateLoginInput;