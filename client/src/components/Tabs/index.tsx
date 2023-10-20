import {
  ReactNode,
  PropsWithChildren,
  ElementType,
  ComponentPropsWithoutRef,
  useState,
} from "react";
import { Container } from "react-bootstrap";

export type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

type TabHeaderProps = PropsWithChildren & {
  active: boolean;
  onClick: () => void;
};

function Header({ children }: PropsWithChildren) {
  return <h3 className="mb-2">{children}</h3>;
}

export function Tab({ active, children, onClick }: TabHeaderProps) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${active ? "active" : ""}`}
        type="button"
        role="tab"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

type ContentProps<T extends ElementType> = PropsWithChildren & {
  As?: T;
} & ComponentPropsWithoutRef<T>;

function Content<T extends ElementType>({
  children,
  As,
  ...rest
}: ContentProps<T>) {
  const Component = As ?? "div";

  return (
    <Component
      className="d-flex flex-column gap-3 py-3"
      role="tabpanel"
      {...rest}
    >
      {children}
    </Component>
  );
}

Tab.Header = Header;
Tab.Content = Content;

export function Tabs({ tabs }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <Container className="mt-4">
      <ul className="m-0 nav nav-tabs" role="tablist">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            active={index === activeTabIndex}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </ul>
      {tabs[activeTabIndex].content}
    </Container>
  );
}
