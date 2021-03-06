"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        var email = _a.email, name = _a.name;
        var emailIsTaken = this.usersRepository.findByEmail(email);
        if (emailIsTaken)
            throw new Error("Email is already taken!");
        var user = this.usersRepository.create({ name: name, email: email });
        return user;
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
