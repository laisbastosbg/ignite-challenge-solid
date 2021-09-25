"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersUseCase = void 0;
var ListAllUsersUseCase = /** @class */ (function () {
    function ListAllUsersUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ListAllUsersUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var user = this.usersRepository.findById(user_id);
        if (!user)
            throw new Error("User not found");
        if (!user.admin)
            throw new Error("Only admins can access this functionality");
        var users = this.usersRepository.list();
        return users;
    };
    return ListAllUsersUseCase;
}());
exports.ListAllUsersUseCase = ListAllUsersUseCase;
