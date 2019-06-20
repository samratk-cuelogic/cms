const config = require('../config/config');
const jwt = require('jsonwebtoken');
import logger from '../lib/logger';

class Authentication {

    constructor() {
        this.jwtSecret = config.jwt.SECRET_KEY;
    }

    getToken = (user) => {
        try {

            logger.info(`middleware : Authentication : getToken` + JSON.stringify(user));

            const accessToken = jwt.sign({ id: user.id }, this.jwtSecret, {
                expiresIn: 3600
            });

            logger.debug(`middleware : Authentication : accessToken ` + accessToken);
            return accessToken;
        } catch (error) {
            logger.error(`middleware : Authentication : error ` + error);
        }

    }

    verifyToken = async (token) => {
        try {
            logger.info(`middleware : Authentication : verifyToken`);
            return new Promise(async (resolve, reject) => {

                try {

                    let decoded = await jwt.verify(token, this.jwtSecret);
                    logger.info(`middleware : Authentication : decoded`, JSON.stringify(decoded));
                    resolve({ status: true, message: "Authenticated token .", decoded: decoded });

                } catch (err) {
                    reject(err)
                }


            });

        } catch (error) {
            logger.error(`middleware : Authentication : error ` + error);

            res.status(500).send("Something went wrong!");
        }

    }

    authenticate = async (req, res, next) => {

        try {

            logger.info(`middleware : Authentication : authenticate`);

            let token = req.headers['x-access-token'];

            if (!token) res.status(401).send({ auth: false, message: 'No token provided.' });

            try {
                let verifyRes = await this.verifyToken(token);
                logger.info(`middleware : Authentication : verifyRes ` + verifyRes);
                res.status(401).send(verifyRes);
            } catch (JsonWebTokenError) {
                res.status(401).send({ status: 401, ...JsonWebTokenError });
            }

        } catch (error) {
            logger.error(`middleware : Authentication :  authenticate error ` + error);
            res.status(500).send("Something went wrong!!");
        }


    }

}

export default new Authentication();