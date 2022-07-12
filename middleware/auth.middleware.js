export default function MW(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    if (!bearerHeader) {
        return res.sendStatus(401);
    }

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    if (!bearerToken || process.env.API_KEY !== bearerToken) {
        return res.sendStatus(401);
    }

    next();
}
