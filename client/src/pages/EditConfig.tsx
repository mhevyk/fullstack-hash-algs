import { FormEvent, ChangeEvent } from "react";
import { Form, FormSelectProps } from "react-bootstrap";
import { Tab, Button, Feedback } from "../components";
import { useConfigMutation } from "../hooks";
import { useHashAlgorithm } from "../context/useAlgorithm";
import { HashAlgorithm } from "../api/types";

type HashAlgorithmFamily = {
  family: string;
  algorithms: HashAlgorithm[];
};

const hashAlgorithmSelectData: HashAlgorithmFamily[] = [
  { family: "md", algorithms: ["md5"] },
  {
    family: "sha",
    algorithms: ["sha1", "sha224", "sha256", "sha384", "sha512"],
  },
  { family: "ripemd", algorithms: ["ripemd160"] },
];

function Option({ value }: { value: string }) {
  return <option value={value}>{value.toUpperCase()}</option>;
}

function HashingAlgorithmSelect(props: FormSelectProps) {
  return (
    <Form.Select {...props}>
      {hashAlgorithmSelectData.map(({ family, algorithms }) => (
        <optgroup label={family.toUpperCase()} key={family}>
          {algorithms.map(algorithm => (
            <Option key={algorithm} value={algorithm} />
          ))}
        </optgroup>
      ))}
    </Form.Select>
  );
}

export function EditConfig() {
  const { hashAlgorithm, setHashAlgorithm } = useHashAlgorithm();
  const mutation = useConfigMutation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutation.mutate({ hash_algorithm: hashAlgorithm });
  }

  function handleHashAlgorithmChange(event: ChangeEvent<HTMLSelectElement>) {
    setHashAlgorithm(event.target.value as HashAlgorithm);
  }

  return (
    <Tab.Content As={Form} onSubmit={handleSubmit}>
      <Tab.Header>Налаштування</Tab.Header>
      <Form.Group className="d-flex flex-column" style={{ gap: 7 }}>
        <Form.Text>Алгоритм хешування</Form.Text>
        <HashingAlgorithmSelect
          value={hashAlgorithm}
          onChange={handleHashAlgorithmChange}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" isLoading={mutation.isLoading}>
          Зберегти зміни
        </Button>
      </Form.Group>
      <Feedback on={mutation} />
    </Tab.Content>
  );
}
