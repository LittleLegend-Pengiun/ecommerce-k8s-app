import styled from 'styled-components';
import { Table} from 'antd';
const { Column} = Table;
export const WrapperTable = styled(Table)`
    .ant-table {
        margin-top: 20px;
        .ant-table-thead {
        .ant-table-cell {
            background-color:black;
            font-weight: 600;
            font-size: 18px;
            width: 25%;
            color:white
        }
        }
        .ant-table-tbody {
        .ant-table-row {
            &:hover {
            background-color:#efefef;
            }
            height: 80px;
            font-size: 16px;
        }
        }
    }
`;
export const WrapperColumn = styled(Column)`
    &.ant-table-column-title {
        font-weight: 500;
    }
`;
export const WrapperInput = styled.input`
    width: 50px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    text-align: center;
    height: 30px; 
`;