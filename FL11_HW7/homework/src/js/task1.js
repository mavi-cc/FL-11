const minEmailLen = 6;
const minPassLen = 5;

let email = prompt('Enter email address:');

if (!email) {
  alert('Canceled.')
} else if (email.length < minEmailLen) {
  alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  let pass = prompt('Enter password:');

  if (!pass) {
    alert('Canceled.')
  } else if (email === 'user@gmail.com' && pass === 'UserPass' ||
    email === 'admin@gmail.com' && pass === 'AdminPass') {
    let passConfirm = confirm('Do you want to change your password?');

    if (!passConfirm) {
      alert('You have failed the change.')
    } else {
      let pass = prompt('Enter old password.');

      if (!pass) {
        alert('Canceled.')
      } else if (email === 'user@gmail.com' && pass === 'UserPass' ||
        email === 'admin@gmail.com' && pass === 'AdminPass') {
        let newPass1 = prompt('Enter new password:');

        if (newPass1.length < minPassLen) {
          alert('It\'s too short password. Sorry.');
        } else {
          let newPass2 = prompt('Enter new password again.');

          if (newPass1 === newPass2) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password.')
      }
    }
  } else {
    alert('Wrong password.');
  }
} else {
  alert('I don\'t know you')
}
