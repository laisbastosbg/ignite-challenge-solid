"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, email = _a.email, name = _a.name;
        try {
            var user = this.createUserUseCase.execute({ email: email, name: name });
            return response.status(201).json(user);
        }
        catch (error) {
            return response.status(400).json({
                error: error.message,
            });
        }
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
