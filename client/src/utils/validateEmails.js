const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default(emails) => {

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegEx.test(email) === false);

  if (!invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`
  }

  return;

};