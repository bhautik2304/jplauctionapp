import React from 'react'
import { useSelector } from 'react-redux'
import "../Style/index.css"
function LiveAuction() {
  const { team } = useSelector(state => state.team)
  return (
    <>
      <div class="table-responsive">
        <table>
          <tbody>
            {generateTable(team)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LiveAuction


const generateTable = (data) => {
  const owners = data.map((team) => team.owner_name);
  const teamNames = data.map((team) => team.team_name);
  const rows = [];

  for (let i = 1; i <= 12; i++) {
    const rowData = [];
    rowData.push(<td key={`row-${i}-name`}>{i}</td>);

    data.forEach((team) => {
      team.soldplayer.forEach((player) => {
        if (player.players_no === i) {
          rowData.push(<td key={`row-${i}-${team.id}-id`}>{player.players_id}</td>);
          rowData.push(<td key={`row-${i}-${team.id}-price`}>{player.sold ? player.sold : 'N/A'}</td>);
        }
      });
    });

    rows.push(<tr key={`row-${i}`}>{rowData}</tr>);
  }

  return (
    <table className='table bckgrnd'>
      <tbody id="data">
        <tr>
          <td rowSpan="2">NAME</td>
          {teamNames.map((name, index) => (
            <td key={`team-name-${index}`} colSpan="2">
              {name}
            </td>
          ))}
        </tr>
        <tr>
          {owners.map((owner, index) => (
            <td key={`owner-name-${index}`} colSpan="2">
              {owner}
            </td>
          ))}
        </tr>
        <tr>
          <td>BAL</td>
          {data.map((team, index) => (
            <React.Fragment key={`bal-${index}`}>
              <td colSpan="2">{team.totale_points}</td>
              {/* <td>5000000</td> */}
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <td>MAX BID</td>
          {data.map((team, index) => (
            <React.Fragment key={`max-bid-${index}`}>
              <td colSpan="2">{team.max_bid_points}</td>
              {/* <td>4000000</td> */}
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <td></td>
          {data.map((team, index) => (
            <React.Fragment key={`empty-${index}`}>
              <td>ID</td>
              <td>Price</td>
            </React.Fragment>
          ))}
        </tr>
        {rows}
      </tbody>
    </table>
  );
};