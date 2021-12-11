'use strict';

import {
  loginFirstPageHtml,
  mainPageAccNumberHtml,
  mainPageCheckBookReqHtml,
  createAccountHtml,
  cancelBtnHtml,
  loadingIcon,
  userHtmlPageOne,
  userHtmlPageTwo,
  paginationHtml,
  updateAccountHtml,
  updateAccountModalHtml,
} from './content.js';

import { adminLogin, userLogin } from './login.js';

import { users } from './users.js';

// LOGIN PAGE VALIDATION START //

const main = document.getElementById('main');
const userName = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const resetBtn = document.getElementById('reset-btn');
const createBtn = document.getElementById('create-btn');

function alertForValidUserName() {
  if (!userName.value) {
    alert('Please Enter User Name!');
  } else if (
    userName.value !== adminLogin.username &&
    userName.value !== userLogin.username
  ) {
    alert('User name does not exist. Please Enter the Valid User Name!');
    userName.value = '';
  }
}

function alertForValidPassword() {
  if (!passwordInput.value) {
    alert('Please Enter Password!');
  } else if (
    passwordInput.value !== adminLogin.password &&
    passwordInput.value !== userLogin.password
  ) {
    alert('Entered Password is wrong. Please Enter the Valid Password!');
    passwordInput.value = '';
  }
}

loginBtn.addEventListener('click', () => {
  if (
    userName.value === adminLogin.username ||
    userName.value === userLogin.username
  ) {
    if (
      passwordInput.value === adminLogin.password ||
      passwordInput.value === userLogin.password
    ) {
      loginFirstPage();
      userName.value = '';
    } else {
      alertForValidPassword();
    }
  } else {
    alertForValidUserName();
  }
});

resetBtn.addEventListener('click', () => {
  userName.value = '';
  passwordInput.value = '';
});

// LOGIN PAGE VALIDATION END //

// CREATE ACCOUNT VALIDATION START //

function validatingSubmitForm() {
  const createAccountBtn = document.getElementById('create-submit-btn');
  const inputFields = document.querySelectorAll('.form-control');

  createAccountBtn.addEventListener('click', () => {
    for (let i = 0; i < !inputFields.value; i++) {
      if (inputFields[i].value == '') {
        alert('Please Fill All the Fields!');
      } else {
        createAccountBtn.setAttribute('data-bs-toggle', 'modal');
        createAccountBtn.setAttribute('data-bs-target', '#myModal');
        closeModalFunc();
      }
    }
  });
}

function validatingSubmitFormByAdmin() {
  const createAccountBtn = document.getElementById('create-submit-btn');
  const inputFields = document.querySelectorAll('.form-control');

  createAccountBtn.addEventListener('click', () => {
    for (let i = 0; i < !inputFields.value; i++) {
      if (inputFields[i].value == '') {
        alert('Please Fill All the Fields!');
      } else {
        createAccountBtn.setAttribute('data-bs-toggle', 'modal');
        createAccountBtn.setAttribute('data-bs-target', '#myModal');
        closeModalFuncByAdmin();
      }
    }
  });
}

function closeModalFunc() {
  const closeModal = document.getElementById('btn-close-modal');
  closeModal.addEventListener('click', () => {
    location.reload();
  });
}

// CREATE ACCOUNT VALIDATION END //

function closeModalFuncByAdmin() {
  const closeModal = document.getElementById('btn-close-modal');
  closeModal.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${mainPageAccNumberHtml}`;
    accountInfoActive();
    viewAccounts();
    adminUserCreateAccount();
    showCheckBookReq();
    showAccountInfo();
    logOutAdmin();
  });
}

function loginFirstPage() {
  main.innerHTML = loadingIcon;
  setTimeout(() => {
    showAccountInfo();
    logOutAdmin();
    adminUserCreateAccount();
  }, 1000);
}

function showAccountInfo() {
  main.innerHTML = `${loginFirstPageHtml}${mainPageAccNumberHtml}`;
  accountInfoActive();

  showCheckBookReq();
  showUpdateAccounts();
  viewAccounts();
  logOutAdmin();
}

function showAccountInfoByClick() {
  const accInfo = document.getElementById('acc-info');
  accInfo.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${mainPageAccNumberHtml}`;
    accountInfoActive();
    adminUserCreateAccount();
    viewAccounts();
    showCheckBookReq();
    logOutAdmin();
  });
}

// ACTIVE NAV LINKS FUNCTIONS START //

function accountInfoActive() {
  const accNumber = document.getElementById('acc-info');
  accNumber.classList.add('active');
}

function checkBookActive() {
  const checkBook = document.getElementById('check-book');
  checkBook.classList.add('active');
}

function managerUsersActive() {
  const manageUsers = document.getElementById('manage-users');
  manageUsers.classList.add('active');
}

// ACTIVE NAV LINKS FUNCTIONS END //

function adminUserCreateAccount() {
  const createAccountBtn = document.getElementById('create-acc');

  createAccountBtn.addEventListener('click', function () {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    accountInfoActive();
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${createAccountHtml}`;
      accountInfoActive();
      const createForm = document.querySelector('.create-form');
      createForm.style.marginTop = '15rem';
      const createFormEl = document.querySelector('.create-form');
      createFormEl.insertAdjacentHTML('afterbegin', cancelBtnHtml);
      createFormEl.style.transform = 'translateY(-20%)';
      cancelCreateAccountByAdmin();
      validatingSubmitFormByAdmin();
    }, 100);
  });
}

function cancelCreateAccountByAdmin() {
  const cancelBtn = document.getElementById('cancel-btn');
  cancelBtn.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    setTimeout(() => {
      showAccountInfo();
      logOutAdmin();
      adminUserCreateAccount();
      viewAccounts();
      logOutAdmin();
    }, 300);
  });
}

function showCheckBookReq() {
  const checkBook = document.getElementById('check-book');
  checkBook.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${mainPageCheckBookReqHtml}`;
    checkBookActive();
    showAccountInfoByClick();
    logOutAdmin();
  });
}

function createAccount() {
  main.innerHTML = `${createAccountHtml}`;
  const createFormEl = document.querySelector('.create-form');
  createFormEl.insertAdjacentHTML('afterbegin', cancelBtnHtml);
  cancelAccountCreate();
}

createBtn.addEventListener('click', () => {
  main.innerHTML = loadingIcon;
  setTimeout(() => {
    createAccount();
    validatingSubmitForm();
  }, 1500);
});

function cancelAccountCreate() {
  const cancelBtn = document.getElementById('cancel-btn');
  cancelBtn.addEventListener('click', () => {
    location.reload();
  });
}

function logOutAdmin() {
  const logOutBtn = document.getElementById('logout');

  logOutBtn.addEventListener('click', () => {
    location.reload();
  });
}

function viewAccounts() {
  const viewAccount = document.getElementById('view-acc');

  viewAccount.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    accountInfoActive();

    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${userHtmlPageOne}${paginationHtml}`;
      accountInfoActive();
      showUserPageTwo();
      showAccountInfoByClick();
      showCheckBookReq();
    }, 1000);
  });
}

function showUserPageOne() {
  const pageOne = document.getElementById('page-1');

  pageOne.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    accountInfoActive();
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${userHtmlPageOne}${paginationHtml}`;
      accountInfoActive();
      showAccountInfoByClick();
      showCheckBookReq();
      showUserPageTwo();
      showNextPage();
      logOutAdmin();
    }, 300);
  });
}

function showUserPageTwo() {
  const pageTwo = document.getElementById('page-2');

  pageTwo.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;

    accountInfoActive();
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${userHtmlPageTwo}${paginationHtml}`;
      accountInfoActive();
      const paginationStyle = document.querySelector('.pagination.users');
      paginationStyle.style.left = '48%';
      showUserPageOne();
      showPreviousPage();
      showAccountInfoByClick();
      showCheckBookReq();
      logOutAdmin();
    }, 300);
  });
}

function showPreviousPage() {
  const previousPage = document.getElementById('previous-page');
  previousPage.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    accountInfoActive();
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${userHtmlPageOne}${paginationHtml}`;
      accountInfoActive();
      showAccountInfoByClick();
      showCheckBookReq();
      showUserPageTwo();
      showNextPage();
      logOutAdmin();
    }, 300);
  });
}

function showNextPage() {
  const nextPage = document.getElementById('next-page');
  nextPage.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    accountInfoActive();
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${userHtmlPageTwo}${paginationHtml}`;
      accountInfoActive();
      const paginationStyle = document.querySelector('.pagination.users');
      paginationStyle.style.left = '48%';
      showAccountInfoByClick();
      showCheckBookReq();
      showUserPageOne();
      showPreviousPage();
      logOutAdmin();
    }, 300);
  });
}

function showUpdateAccounts() {
  const updateAccountBtn = document.getElementById('update-acc');
  updateAccountBtn.addEventListener('click', () => {
    main.innerHTML = `${loginFirstPageHtml}${loadingIcon}`;
    setTimeout(() => {
      main.innerHTML = `${loginFirstPageHtml}${updateAccountHtml}${updateAccountModalHtml}`;
      editAccounts();
    }, 300);
  });
  function editAccounts() {
    const editFirstName = document.getElementById('edit-fname');
    const editLastName = document.getElementById('edit-lname');
    const editEmail = document.getElementById('edit-email');
    const editAccountNumber = document.getElementById('edit-acc-number');
    const editAccountBalance = document.getElementById('edit-acc-balance');
    const editAccountBtn = document.querySelectorAll('.edit-account');

    editAccountBtn.forEach(editBtn => {
      editBtn.addEventListener('click', e => {
        const getUserData = e.target.closest('tr').firstElementChild.innerHTML;
        const getUserName = getUserData.toLowerCase();
        if (Object.keys(users).includes(getUserName)) {
          const indexOfUser = Object.keys(users).indexOf(getUserName);
          const userData = Object.keys(users);
          console.log(userData[indexOfUser]);
        }
      });
    });
  }
}
