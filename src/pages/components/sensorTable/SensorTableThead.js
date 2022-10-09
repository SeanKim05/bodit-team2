function SensoTableThead(sensorTable) {
  return (
    <thead>
      <tr className="tableRow">
        <th>#</th>
        <th id="thingName" onClick={e => sensorTable.setSensorTableThead(e)}>
          thingName
        </th>
        <th>
          Bat.(%)
          <img
            src={process.env.PUBLIC_URL + '/sort.png'}
            id="batLvl"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
        <th id="connAt" onClick={e => sensorTable.setSensorTableThead(e)}>
          Connected at
        </th>
        <th id="disconnAt" onClick={e => sensorTable.setSensorTableThead(e)}>
          Disconnected at
        </th>
        <th
          id="disconnReason"
          onClick={e => sensorTable.setSensorTableThead(e)}
        >
          Reason
        </th>
        <th>
          Card No.
          <img
            src={process.env.PUBLIC_URL + '/sort.png'}
            id="connCardNum"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
        <th id="connGW" onClick={e => sensorTable.setSensorTableThead(e)}>
          Gateway
        </th>
        <th id="rawSentCnt" onClick={e => sensorTable.setSensorTableThead(e)}>
          Raw sent
        </th>
        <th id="remainData" onClick={e => sensorTable.setSensorTableThead(e)}>
          Remain
        </th>
        <th id="rssi" onClick={e => sensorTable.setSensorTableThead(e)}>
          RSSI
        </th>
        <th>
          F/W ver.
          <img
            src={process.env.PUBLIC_URL + '/sort.png'}
            id="fwVer"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
        <th>
          H/W ver.
          <img
            src={process.env.PUBLIC_URL + '/sort.png'}
            id="hwVer"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
      </tr>
    </thead>
  );
}

export default SensoTableThead;
