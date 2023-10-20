import { Form, Spinner, Table } from "react-bootstrap";
import { Tab, Feedback } from "../components";
import {
  useMessage,
  useOriginalHashQuery,
  useModifiedHashQuery,
} from "../hooks";
import { useHashAlgorithm } from "../context/useAlgorithm";

export function ReadFiles() {
  const { query: messageQuery } = useMessage();
  const originalHashQuery = useOriginalHashQuery();
  const modifiedHashQuery = useModifiedHashQuery();
  const { hashAlgorithm } = useHashAlgorithm();

  return (
    <Tab.Content As={Form}>
      <Tab.Header>Вміст файлів</Tab.Header>
      <Table>
        <thead>
          <tr>
            <th>Повідомлення</th>
            <th>Оригінальний хеш (алгоритм {hashAlgorithm.toUpperCase()})</th>
            <th>Модифікований хеш (алгоритм {hashAlgorithm.toUpperCase()})</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {messageQuery.isLoading ? (
                <Spinner size="sm" />
              ) : (
                messageQuery.data || "Немає"
              )}
            </td>
            <td>
              {originalHashQuery.isLoading ? (
                <Spinner size="sm" />
              ) : (
                originalHashQuery.data || "Немає"
              )}
            </td>
            <td>
              {modifiedHashQuery.isLoading ? (
                <Spinner size="sm" />
              ) : (
                modifiedHashQuery.data || "Немає"
              )}
            </td>
          </tr>
        </tbody>
      </Table>
      <Feedback on={messageQuery} label="Повідомлення" hideSuccess />
      <Feedback on={originalHashQuery} label="Оригінальний хеш" hideSuccess />
      <Feedback on={modifiedHashQuery} label="Модифікований хеш" hideSuccess />
    </Tab.Content>
  );
}
