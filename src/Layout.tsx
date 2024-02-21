import { useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"


const names: any = {
    '/' : 'Главная',
    '/auth': 'Авторизация',
}

function Layout() {

    const location = useLocation();

    useEffect(() => {
        document.title = names[location.pathname];
    }, [location])

    return (
        <div>
            <header>
                <Link to={`/`}>Main</Link> | 
                <Link to={`/profile`}>Profile</Link> | 
                <Link to={`/auth`}>Auth</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout