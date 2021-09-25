"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
var ListAllUsersController = /** @class */ (function () {
    function ListAllUsersController(listAllUsersUseCase) {
        this.listAllUsersUseCase = listAllUsersUseCase;
    }
    ListAllUsersController.prototype.handle = function (request, response) {
        var user_id = request.headers.user_id;
        user_id = Array.isArray(user_id) ? user_id[0] : user_id;
        try {
            var users = this.listAllUsersUseCase.execute({ user_id: user_id });
            return response.json(users);
        }
        catch (error) {
            return response.status(400).json({
                error: error.message,
            });
        }
    };
    return ListAllUsersController;
}());
exports.ListAllUsersController = ListAllUsersController;
