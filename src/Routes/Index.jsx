import React from 'react'
import { appRoutes } from '../Constants'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { AppLayout } from '../Components';
import { LiveAuction, Player, Team } from '../Pages';

export default function Routess() {

  return (
    <>
    {/* <h1>Hello</h1> */}
      <BrowserRouter>
      {/* <Switch></Switch> */}
        <Routes>
          <Route path={appRoutes.home} element={<AppLayout />}>
            <Route path={appRoutes.home} element={<LiveAuction />} />
            <Route path={`${appRoutes.team}/:id`} element={<Team />} />
            <Route path={`${appRoutes.team}/all`} element={<Player />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}
