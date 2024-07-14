import express from 'express';
import morgan from 'morgan';
import gplay from 'google-play-scraper';

const memoizedCustom = gplay.memoized({maxAge: 1000 * 60 * 60, max: 100});

const PORT_NUMBER = process.env.PORT_NUMBER || 3005;
const SUCCESS = "Success";
const FAILURE = "Failure";
const NIL = "Nil";
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

/**
 * Create a Response object.
 * @param {string} message - The message of the response.
 * @param {Object} result - The result object of the response.
 * @param {number} code - The status code of the response.
 * @param {string} [error=''] - The error message, if any.
 * @returns {Response} The response object.
 */
function createResponse(message, result, code, error = '') {
    return {
        message,
        result,
        code,
        error
    };
}


app.get('/', (req, res) => {
    res.json(createResponse(SUCCESS, null, 200, NIL)).status(200)
});

app.get('/app/:id', async (req, res) => {
    const appId = req.params.id;
    try {
        const data = await memoizedCustom.app({appId});
        res.json(createResponse(SUCCESS, data, 200, NIL)).status(200);
    } catch (err) {
        res.json(createResponse(FAILURE, null, 400, err.message)).status(400);
    }
});

app.get('/developer/:id', async (req, res) => {
    const devId = req.params.id;
    try {
        const data = await memoizedCustom.developer({devId: devId});
        res.json(createResponse(SUCCESS, data, 200, NIL)).status(200);
    } catch (err) {
        res.json(createResponse(FAILURE, null, 400, err.message)).status(400);
    }
});

app.get('/reviews/:id', async (req, res) => {
    const appId = req.params.id;
    try {
        const data = await memoizedCustom.reviews({
            appId: appId,
            sort: gplay.sort.RATING,
            paginate: true,
            nextPaginationToken: null
        });
        res.json(createResponse(SUCCESS, data, 200, NIL)).status(200);
    } catch (err) {
        res.json(createResponse(FAILURE, null, 400, err.message)).status(400);
    }
});

app.listen(PORT_NUMBER, () => {
    console.log(`Listening on port ${PORT_NUMBER}`);
})