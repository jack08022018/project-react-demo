import { Space } from 'antd';
import EditableRow from './components/table/EditableRow';

export default function HomePage() {

  return (
    <Space direction="vertical" size="small">
      about!
      <EditableRow />
    </Space>
  );
}
