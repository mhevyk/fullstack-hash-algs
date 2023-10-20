import { useRef } from "react";
import { Form } from "react-bootstrap";
import { Button, Feedback, Tab } from "../components";
import { useMessage } from "../hooks";

export function UpdateMessage() {
  const messageInputRef = useRef<HTMLInputElement | null>(null);
  const { query, mutation } = useMessage();

  function handleUpdate() {
    const message = messageInputRef.current?.value;
    if (message?.trim()) {
      mutation.mutate(message);
    }
  }

  return (
    <Tab.Content As={Form}>
      <Tab.Header>Зміна повідомлення</Tab.Header>
      <Form.Control
        type="text"
        defaultValue={query.data || ""}
        placeholder="Введіть нове повідомлення..."
        ref={messageInputRef}
      />
      <Form.Group>
        <Button
          variant="primary"
          onClick={handleUpdate}
          isLoading={mutation.isLoading}
        >
          Вхідний файл (повідомлення)
        </Button>
      </Form.Group>
      <Feedback on={mutation} />
    </Tab.Content>
  );
}
