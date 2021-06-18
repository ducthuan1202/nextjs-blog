import { useState } from "react"

const useUser = () => {
    const [user, setUser] = useState({
        id: 1,
        email: 'ducthuan1202@gmail.com',
    })
    return [user, setUser];
}