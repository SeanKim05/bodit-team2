import { useState, useRef, useEffect } from 'react';

function SensorTableTbody(sensorTable) {
  const [statOK, setStatOk] = useState(false);
  const [hover, setHover] = useState(false);

  const mouseHandler = e => (e === hover ? setHover(false) : setHover(e));

  const batRef = useRef([]);

  useEffect(() => {
    const batValue = batRef.current;
    for (let i = 0; i < batValue.length; i++) {
      const result = parseFloat(batValue[i].innerHTML);
      console.log(result);
      if (result === Number) {
        setStatOk(true);
      }
    }
  });

  return (
    <tbody>
      {sensorTable.sensorTableBody.data.map((item, index) => (
        <tr
          key={item.thingName}
          className={hover === index ? 'onHover' : 'onLeave'}
          onMouseEnter={() => {
            mouseHandler(index);
          }}
        >
          <td className="itemIndex">{index}</td>
          <td>{item.thingName}</td>
          <td
            className={statOK ? 'bat_lvl_stat' : 'bat_lvl_stat_low'}
            ref={item => batRef.current.push(item)}

            // ref={element => (batRef.current[index] = element)}
          >
            {item.shadow.batLvl}
          </td>
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
  );
}

export default SensorTableTbody;
