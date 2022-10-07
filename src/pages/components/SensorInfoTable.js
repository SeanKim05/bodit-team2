import { TableContainer } from './SensorInfoStyled';
import SensorTableThead from './sensorTable/SensorTableThead';
import SensorTableTbody from './sensorTable/SensorTableTbody';

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
