"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminController = void 0;
var TurnUserAdminController = /** @class */ (function () {
    function TurnUserAdminController(turnUserAdminUseCase) {
        this.turnUserAdminUseCase = turnUserAdminUseCase;
    }
    TurnUserAdminController.prototype.handle = function (request, response) {
        var user_id = request.params.user_id;
        try {
            var user = this.turnUserAdminUseCase.execute({ user_id: user_id });
            return response.json(user);
        }
        catch (error) {
            return response.status(404).json({
                error: error.message,
            });
        }
    };
    return TurnUserAdminController;
}());
exports.TurnUserAdminController = TurnUserAdminController;
