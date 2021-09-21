var UserAccount = /** @class */ (function () {
    function UserAccount() {
    }
    UserAccount.prototype.display = function () {
        console.log("Username:" + this.name);
        console.log("Number:" + this.id);
    };
    return UserAccount;
}());
var user = new UserAccount();
user.id = 2;
user.name = "Sathwika";
user.display();
