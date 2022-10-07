import { TableContainer } from './SensorInfoStyled';

function SensorInfoTable(sensorData) {
  console.log('??? = ' + JSON.stringify(sensorData));

  return (
    <TableContainer>
      <table className="sensorInfoTable">
        <thead>
          <tr className="tableRow">
            <th>#</th>
            <th>thingName</th>
            <th>Bat.(%)</th>
            <th>Connected at</th>
            <th>Disconnected at</th>
            <th>Reason</th>
            <th>Card No.</th>
            <th>Gateway</th>
            <th>Raw sent</th>
            <th>Remain</th>
            <th>RSSI</th>
            <th>F/W ver.</th>
            <th>H/W ver.</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.data.map((item, index) => (
            <tr key={item.thingName}>
              <td className="itemIndex">{index}</td>
              <td>{item.thingName}</td>
              <td>{item.shadow.batLvl}</td>
              <td>{item.shadow.connectionTime}</td>
              <td>{item.shadow.disconnectionTime}</td>
              <td>{item.shadow.disconnReason}</td>
              <td>{item.shadow.connCardNum}</td>
              <td>{item.shadow.connectedGateway}</td>
              <td>{item.shadow.rawSentCnt}</td>
              <td>{item.shadow.remainData}</td>
              <td>{item.shadow.rssi}</td>
              <td>{item.shadow.fwVer}</td>
              <td>{item.shadow.hwVer}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>{/* <td>tfoot</td> */}</tr>
        </tfoot>
      </table>
    </TableContainer>
  );
}

export default SensorInfoTable;
