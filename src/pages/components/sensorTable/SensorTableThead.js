import { useState } from 'react';

function SensoTableThead(sensorTable) {
  const [connAt, setConnAt] = useState();
  function ConnAtClick() {
    connAt = connAt.sort();
    setConnAt(connAt);
  }

  console.log(JSON.stringify(sensorTable));

  return (
    <thead>
      <tr className="tableRow">
        <th>#</th>
        <th>thingName</th>
        <th>Bat.(%)</th>
        <th onClick={ConnAtClick}>Connected at</th>
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
  );
}

export default SensoTableThead;
