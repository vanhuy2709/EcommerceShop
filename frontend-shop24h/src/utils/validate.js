export const validateEmail = (inputEmail) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

export const validatePhone = (inputPhone) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  if (inputPhone.match(regexPhoneNumber)) {
    return true;
  } else {
    return false;
  }
}