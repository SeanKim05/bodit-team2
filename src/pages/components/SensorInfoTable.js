import { TableContainer } from './SensorInfoStyled';
import SensorTableThead from './sensorTable/sensorTableThead';
import SensorTableTbody from './sensorTable/sensorTableTbody';

function SensorInfoTable(sensorData) {
  return (
    <TableContainer>
      <table className="sensorInfoTable">
        <SensorTableThead />
        <SensorTableTbody sensorTableBody={sensorData} />
      </table>
    </TableContainer>
  );
}

export default SensorInfoTable;
