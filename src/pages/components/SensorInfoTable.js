import { TableContainer } from './SensorInfoStyled';
import SensorTableThead from './sensorTable/SensorTableThead';
import SensorTableTbody from './sensorTable/SensorTableTbody';

function SensorInfoTable(sensorData) {
  return (
    <TableContainer>
      <table className="sensorInfoTable">
        <SensorTableThead
          setSensorData={sensorData.setSensorData}
          originalSensorData={sensorData.originalSensorData}
          sensorTableThead={sensorData.data}
          setSensorTableThead={sensorData.setData}
        />
        <SensorTableTbody sensorTableBody={sensorData} />
      </table>
    </TableContainer>
  );
}

export default SensorInfoTable;
