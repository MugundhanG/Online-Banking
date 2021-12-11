'use strict';
import { users as usersInfo } from './users.js';

export const loginFirstPageHtml = `<nav class="nav-bar">
<ul class="nav-list">
    <div class="nav-list-item"><button class='nav-btn' id='acc-info'>Account Info</button></div>
    <div class="nav-list-item"><button class='nav-btn' id='check-book'>Cheque Books</button></div>
    <div class="nav-list-item"><button class='nav-btn' id='manage-users'>Manage Users</button></div>
    <div class="nav-list-item"><button class='nav-btn' id='logout'>LogOut</button></div>
</ul>
</nav>`;

export const mainPageAccNumberHtml = `<main class="main-page">
<h2 class="page-header">Accounts Info</h2>
<ul class="acc-numbers-list">
    <li class="acc-number-list-item"><button class='nav-btn' id='create-acc'>Create New Account</button></li>
    <li class="acc-number-list-item"><button class='nav-btn' id='update-acc'>Update Accounts</button></li>
    <li class="acc-number-list-item"><button class='nav-btn' id='view-acc'>View Accounts</button></li>
</ul>
</main>`;

export const mainPageCheckBookReqHtml = `<main class="main-page">
<div class="check-book-req">
    <h2 class='check-book-page-header'>Cheque Book Requests</h2>
    <h2 class='check-book-header'>The following Users are requesting for Cheque Books:</h2>
    <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${usersInfo.john.firstName}</td>
            <td>${usersInfo.john.lastName}</td>
            <td>${usersInfo.john.email}</td>
            <td>${usersInfo.john.accountNumber}</td>
          </tr>
          <tr>
            <td>${usersInfo.mary.firstName}</td>
            <td>${usersInfo.mary.lastName}</td>
            <td>${usersInfo.mary.email}</td>
            <td>${usersInfo.mary.accountNumber}</td>
          </tr>
          <tr>
            <td>${usersInfo.july.firstName}</td>
            <td>${usersInfo.july.lastName}</td>
            <td>${usersInfo.july.email}</td>
            <td>${usersInfo.july.accountNumber}</td>
          </tr>
        </tbody>
      </table>
</div>
</main>`;

export const createAccountHtml = `<div class="create-form was-validated">
<div class="input mb-3 mt-5">
    <label for="fname" class="form-label">First Name:</label>
    <input type="text" class="f-name form-control" id="fname" placeholder="Enter first name" name="fname" required>

  </div>
  <div class="input mb-3">
    <label for="lname" class="form-label">Last Name:</label>
    <input type="text" class="l-name form-control" id="lname" placeholder="Enter last name" name="lname" required>

  </div>
<div class="input mb-3">
  <label for="new-username" class="form-label">Username:</label>
  <input type="text" class="new-username form-control" id="new-username" placeholder="Enter username" name="username" required>

</div>
<div class="input mb-3">
    <label for="new-email" class="form-label">Email:</label>
    <input type="email" class="new-email form-control" id="new-email" placeholder="Enter Email" name="email" required>

  </div>
<div class="input mb-3">
  <label for="new-password" class="form-label">Create Password:</label>
  <input type="password" class="new-password form-control" id="new-password" placeholder="Enter password" name="pswd" required>

</div>
<div class="input mb-3">
    <label for="dob" class="form-label">Date of Birth:</label>
    <input type="date" class="dob form-control" id="dob" placeholder="Enter DOB" name="dob" required>

</div>
<div class="input mb-3">
    <label for="age" class="form-label">Age:</label>
    <input type="number" class="age form-control" id="age" placeholder="Enter Age" name="age" min='18' max='65' required>

</div>
<div class="input mb-3">
    <label for="pwd" class="form-label">Full Address:</label>
    <input type="text" class="full-address form-control" id="address" placeholder="Enter Address" name="address" required>
</div>
<button type="submit" class="btn btn-success btn-submit" id='create-submit-btn'>Submit & Create Account</button>
</div>
<div class="modal fade" id="myModal">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">

    <div class="modal-body">
      Account Created Successfully!
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-danger" id='btn-close-modal' data-bs-dismiss="modal">Close</button>
    </div>

  </div>
</div>
</div>`;

export const cancelBtnHtml = `<button class="btn btn-secondary cancel-btn" id="cancel-btn">Cancel</button>`;

export const loadingIcon = `<lord-icon
src="https://cdn.lordicon.com/dpinvufc.json"
trigger="loop"
colors="primary:#121331,secondary:#8cbb1f"
stroke="80"
style="width:250px;height:250px">
</lord-icon>`;

export const userHtmlPageOne = `<div class="container mb-3 users" id='users'>
<h2>Users:</h2>
<table class="table table-dark table-hover">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Account Number</th>
      <th>Account Balance</th>
    </tr>
  </thead>
  <tbody id='table-body'>
    <tr>
      <td>${usersInfo.john.firstName}</td>
      <td>${usersInfo.john.lastName}</td>
      <td>${usersInfo.john.email}</td>
      <td>${usersInfo.john.accountNumber}</td>
      <td>INR ${usersInfo.john.accountBalance} </td>
    </tr>
    <tr>
      <td>${usersInfo.mary.firstName}</td>
      <td>${usersInfo.mary.lastName}</td>
      <td>${usersInfo.mary.email}</td>
      <td>${usersInfo.mary.accountNumber}</td>
      <td>INR ${usersInfo.mary.accountBalance}</td>
    </tr>
    <tr>
      <td>${usersInfo.july.firstName}</td>
      <td>${usersInfo.july.lastName}</td>
      <td>${usersInfo.july.email}</td>
      <td>${usersInfo.july.accountNumber}</td>
      <td>INR ${usersInfo.july.accountBalance}</td>
    </tr>
    <tr>
        <td>${usersInfo.teresa.firstName}</td>
        <td>${usersInfo.teresa.lastName}</td>
        <td>${usersInfo.teresa.email}</td>
        <td>${usersInfo.teresa.accountNumber}</td>
        <td>INR ${usersInfo.teresa.accountBalance}</td>
      </tr>
      <tr>
        <td>${usersInfo.ashley.firstName}</td>
        <td>${usersInfo.ashley.lastName}</td>
        <td>${usersInfo.ashley.email}</td>
        <td>${usersInfo.ashley.accountNumber}</td>
        <td>INR ${usersInfo.ashley.accountBalance}</td>
      </tr>
  </tbody>
</table>`;

export const userHtmlPageTwo = `<div class="container mb-3 users" id='users'>
<h2>Users:</h2>
<table class="table table-dark table-hover">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Account Number</th>
      <th>Account Balance</th>
    </tr>
  </thead>
  <tbody>
  <tr>
        <td>${usersInfo.alice.firstName}</td>
        <td>${usersInfo.alice.lastName}</td>
        <td>${usersInfo.alice.email}</td>
        <td>${usersInfo.alice.accountNumber}</td>
        <td>INR ${usersInfo.alice.accountBalance}</td>
      </tr>
      <tr>
        <td>${usersInfo.olive.firstName}</td>
        <td>${usersInfo.olive.lastName}</td>
        <td>${usersInfo.olive.email}</td>
        <td>${usersInfo.olive.accountNumber}</td>
        <td>INR ${usersInfo.olive.accountBalance}</td>
      </tr>
      <tr>
        <td>${usersInfo.hanna.firstName}</td>
        <td>${usersInfo.hanna.lastName}</td>
        <td>${usersInfo.hanna.email}</td>
        <td>${usersInfo.hanna.accountNumber}</td>
        <td>INR ${usersInfo.hanna.accountBalance}</td>
      </tr>
      <tr>
        <td>${usersInfo.rose.firstName}</td>
        <td>${usersInfo.rose.lastName}</td>
        <td>${usersInfo.rose.email}</td>
        <td>${usersInfo.rose.accountNumber}</td>
        <td>INR ${usersInfo.rose.accountBalance}</td>
      </tr>
      <tr>
        <td>${usersInfo.lisa.firstName}</td>
        <td>${usersInfo.lisa.lastName}</td>
        <td>${usersInfo.lisa.email}</td>
        <td>${usersInfo.lisa.accountNumber}</td>
        <td>INR ${usersInfo.lisa.accountBalance}</td>
      </tr>
      </tbody>
      </table>
      </div>
  `;

export const paginationHtml = ` <ul class="pagination users">
  <li class="page-item"><a class="page-link bg-dark text-white" id="previous-page" href="#" disabled>Previous</a></li>
  <li class="page-item"><a class="page-link bg-dark text-white" id="page-1" href="#">1</a></li>
  <li class="page-item"><a class="page-link bg-dark text-white" id="page-2" href="#">2</a></li>
  <li class="page-item"><a class="page-link bg-dark text-white" id="next-page" href="#">Next</a></li>
</ul>`;

// export const alertForAccountCreatedHtml = `<div class="alert alert-success alert-dismissible fade show">
// <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
// <strong>Account Created!</strong> You can login now by using the username and password which you have entered.
// </div>`;

export const updateAccountHtml = `<div class="container mb-5">
<h2>Update Accounts</h2>
<div class="table-responsive">
<table class="table table-dark table-hover table mt-5 justify-item-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Account Number</th>
        <th>Update Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${usersInfo.john.firstName}</td>
        <td>${usersInfo.john.lastName}</td>
        <td>${usersInfo.john.accountNumber}</td>
        <td>
        <div class="d-grid td-update-acc-info">
        <button type="button" class="btn btn-primary btn-sm update-acc-btn edit-account" data-bs-toggle="modal" data-bs-target="#edit-acc"><i class="fas fa-edit"></i></button>
        </div>
        </td>
      </tr>
      <tr>
        <td>${usersInfo.mary.firstName}</td>
        <td>${usersInfo.mary.lastName}</td>
        <td>${usersInfo.mary.accountNumber}</td>
        <td>
        <div class="d-grid td-update-acc-info">
            <button type="button" class="btn btn-primary btn-sm update-acc-btn edit-account" data-bs-toggle="modal" data-bs-target="#edit-acc"><i class="fas fa-edit"></i></button>
        </div>
        </td>
      </tr>
      <tr>
        <td>${usersInfo.july.firstName}</td>
        <td>${usersInfo.july.lastName}</td>
        <td>${usersInfo.july.accountNumber}</td>
        <td>
            <div class="d-grid td-update-acc-info">
            <button type="button" class="btn btn-primary btn-sm update-acc-btn edit-account" data-bs-toggle="modal" data-bs-target="#edit-acc"><i class="fas fa-edit"></i></button>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;

export const updateAccountModalHtml = `<div class="modal fade edit-acc" id="edit-acc">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn btn-danger btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
        <input type="text" id="edit-fname" class="edit-input" placeholder="First Name">
        <input type="text" id="edit-lname" class="edit-input" placeholder="Last Name">
        <input type="email" id="edit-email" class="edit-input" placeholder="Email">
        <input type="number" id="edit-acc-number" class="edit-input" placeholder="Account Number">
        <input type="number" id="edit-acc-balance" class="edit-input" placeholder="Account Balance">
      </div>
        <button type="button" class="btn btn-success btn-sm update-success-acc-btn" data-bs-dismiss="modal">Update</button>
    </div>
  </div>
</div>`;
