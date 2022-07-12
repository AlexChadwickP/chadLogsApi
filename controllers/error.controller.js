import {getAllErrorsFromDatabase, getErrorFromDatabase, logErrorToDatabase} from "../services/error.services.js";

export async function postError(req, res) {
    const { type, stack } = req.body;

    if (!type || !stack) {
        return res.sendStatus(400);
    }

    const result = await logErrorToDatabase(type, stack);

    console.log(result);

    return res.status(200).json(result);
}

export async function getError(req, res) {
    const { errorObjectId } = req.query;

    try {
        if (!errorObjectId) {
            return res.status(200).json(await getAllErrorsFromDatabase());
        }

        return res.status(200).json(await getErrorFromDatabase(errorObjectId));
    } catch (err) {
        return res.status(500).json(err);
    }
}
