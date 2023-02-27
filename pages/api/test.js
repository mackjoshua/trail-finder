export default function handler(req, res) {
    const { method, query } = req;
    console.log("method: ", method, query);

    switch(method) {
        case 'GET':
            res.status(200).json({pageName: "Dash Two"})
            break;
        
        case 'POST':
            res.status(200).json({response: 'POST successful'})
            break;
        
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

    res.status(200).json({ pageName: "Dashboard Two page API"});
}