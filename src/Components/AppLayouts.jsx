import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { appRoutes } from '../Constants'

function AppLayouts() {
    const { team } = useSelector(state => state.team)
    return (
        <>
            <div className="d-block d-lg-none d-md-none">
                <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'transparent !important' }} >
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            {team.map(e =>
                                <>
                                    <li class="nav-item">
                                        <Link to={`${appRoutes.team}/${e.id}`} class="nav-link text-success">{e.team_name}</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="container-fluid bckgrnd">
                <div class="head">
                    <div class="logo"><img src="https://electrozevents.in/jpl.png" /></div>
                    <h1>JPL 5 LIVE AUCTION WINDOW</h1>
                </div>
                <div class="headerbar d-none d-md-block">
                    <h2> <span><Link to={appRoutes.home}>MAIN</Link></span> | {team.map(e => {
                        return (<><span><Link to={`${appRoutes.team}/${e.id}`}>{e.team_name}</Link></span> |</>)
                    })} <Link to={`${appRoutes.team}/all`} class="buttonnew">All Players</Link></h2>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default AppLayouts