export default function handler(req, res) {

    const userID = req.query.id
    
    if (req.method === 'PUT' || req.method === 'PATCH') {
        res.status(200).json({
            name: 'UPDATE user: #' + userID
        })
    }

    if (req.method === 'GET') {
        res.status(200).json({
            name: 'Get user: #' + userID
        })
    }

    if (req.method === 'DELETE') {
        res.status(200).json({
            name: 'Delete user: #' + userID
        })
    }

}