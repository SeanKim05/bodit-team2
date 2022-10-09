import BatteryFilter from './BatteryFilter';
import CardFilter from './CardFilter';
import FirmwareFilter from './FirmwareFIlter';
import HardwareFilter from './HardwareFilter';
import styled from 'styled-components';

function SensorTableThead(sensorTable) {
  return (
    <StyledThead>
      <tr className="tableRow">
        <th>#</th>
        <th id="thingName" onClick={e => sensorTable.setSensorTableThead(e)}>
          thingName
        </th>
        <th>
          <BatteryFilter
            id="batLvl"
            setSensorData={sensorTable.setSensorData}
            originalSensorData={sensorTable.originalSensorData}
          />
          <img
            src={process.env.PUBLIC_URL + '/images/sort.png'}
            alt="arrow-icon"
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
          <CardFilter
            id="connCardNum"
            setSensorData={sensorTable.setSensorData}
            originalSensorData={sensorTable.originalSensorData}
          />
          <img
            src={process.env.PUBLIC_URL + '/images/sort.png'}
            alt="arrow-icon"
            id="batLvl"
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
          <FirmwareFilter
            setSensorData={sensorTable.setSensorData}
            originalSensorData={sensorTable.originalSensorData}
          />
          <img
            src={process.env.PUBLIC_URL + '/images/sort.png'}
            alt="arrow-icon"
            id="batLvl"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
        <th>
          <HardwareFilter
            setSensorData={sensorTable.setSensorData}
            originalSensorData={sensorTable.originalSensorData}
          />
          <img
            src={process.env.PUBLIC_URL + '/images/sort.png'}
            alt="arrow-icon"
            id="batLvl"
            className="sortImg"
            onClick={e => sensorTable.setSensorTableThead(e)}
          />
        </th>
      </tr>
    </StyledThead>
  );
}

export default SensorTableThead;

const StyledThead = styled.thead`
  color: #fff;
  background-color: ${({ theme }) => theme.mainBlue};
  border: none;
`;
