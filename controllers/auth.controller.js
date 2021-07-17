const authService = require('../services/auth/auth.service');

class AuthController {
    async register(req, resp) {
        const { email, password } = req.body;

        // TODO: validation
        const user = await authService.register(email, password);
        resp.send(user);
    }
}


module.exports = new AuthController();
