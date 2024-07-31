import { Request, Response } from 'express';

const getMap = async (req: any, res: Response) => {
    const url = `https://maps.googleapis.com/maps/api/${req.params[0]}?key=${process.env.GOOGLE_MAPS_API_KEY}&${new URLSearchParams(req.query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send('Error occurred while fetching data from Google Maps API');
    }
};

export {getMap}