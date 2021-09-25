"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
var User_1 = require("../../model/User");
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.getInstance = function () {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    };
    UsersRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        var user = new User_1.User();
        Object.assign(user, {
            name: name,
            email: email,
            created_at: new Date(),
            updated_at: new Date(),
        });
        this.users.push(user);
        return user;
    };
    UsersRepository.prototype.findById = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        return user;
    };
    UsersRepository.prototype.findByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email === email; });
        return user;
    };
    UsersRepository.prototype.turnAdmin = function (receivedUser) {
        var index = this.users.indexOf(receivedUser);
        var user = __assign(__assign({}, receivedUser), { admin: true, updated_at: new Date() });
        this.users[index] = user;
        return user;
    };
    UsersRepository.prototype.list = function () {
        return this.users;
    };
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
