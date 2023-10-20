import { Container } from "react-bootstrap";
import { Tab, Tabs } from "../components";
import { HashAlgorithmProvider } from "../context/HashAlgorithmContext";
import { AvalancheEffect } from "../pages/AvalancheEffect";
import { EditConfig } from "../pages/EditConfig";
import { ReadFiles } from "../pages/ReadFiles";
import { UpdateMessage } from "../pages/UpdateMessage";

const tabs: Tab[] = [
  {
    label: "Вміст файлів",
    content: <ReadFiles />,
  },
  {
    label: "Зміна повідомлення",
    content: <UpdateMessage />,
  },
  {
    label: "Лавинний ефект",
    content: <AvalancheEffect />,
  },
  {
    label: "Налаштування",
    content: <EditConfig />,
  },
];

export function RootTabLayout() {
  return (
    <HashAlgorithmProvider>
      <Container className="mt-5" style={{ marginBottom: 35 }}>
        <h1 className="text-uppercase ">Лабораторна робота 4, 5, 6</h1>
        <p>Безпека програм та даних</p>
      </Container>
      <Tabs tabs={tabs} />
    </HashAlgorithmProvider>
  );
}
