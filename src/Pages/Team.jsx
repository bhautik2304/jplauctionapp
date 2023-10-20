import React from 'react'
import { useSelector } from 'react-redux'
import '../Style/table.css'
import { useParams } from 'react-router-dom'
function Team() {
  const { team } = useSelector(state => state.team)
  const { id } = useParams('id')
  const teamData = team.filter(e => e.id == id)[0]
  console.log(teamData?.soldplayer);
  return (
    <>
      <div class="table-responsive">
        <tbody id="data w-100">
          <tr>
            <td>ID </td>
            <td>NAME</td>
            <td>MOBILE NO</td>
            <td>SKILL</td>
            <td>BASE POINT</td>
            <td>PURCHASE POINT</td>
          </tr>
          {teamData?.soldplayer.map(e =>
            <>
              <tr>
                <td>{e?.players?.player_no}</td>
                <td>{e?.players?.name}</td>
                <td>{e?.players?.mobaile}</td>
                <td>{e?.players?.skill}</td>
                <td>{e?.players?.playercategurie?.points}</td>
                <td>{e?.sold}</td>
              </tr>
            </>)}
        </tbody>
      </div>
    </>
  )
}

export default Team