import React, { ReactElement, ReactNode, useState } from 'react';
import { Button } from '../Button';

export type ModalTabsProps = {
  /**
   * The children are an array of `ModalTab`s.
   */

  children: ReactElement<ModalTabProps>[];
  /*
    Set an initially opened tab, by default its the first one in the list
  */
  initialTabIndex?: number;
};

export const ModalTabs = ({ children, initialTabIndex }: ModalTabsProps) => {
  const [openIndex, setOpenIndex] = useState(initialTabIndex ?? 0);
  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          padding: 0,
          margin: 0,
          flexWrap: 'wrap',
        }}
      >
        {/* the order never changes, using index is fine */}
        {React.Children.map(children, (child, index) => (
          <li
            key={index}
            style={{
              marginRight: 12,
              marginTop: 10,
            }}
          >
            <Button
              variant="button-ghost-grey"
              onClick={() => setOpenIndex(index)}
              tx={
                openIndex === index
                  ? {
                      p: 0,
                      pb: 8,
                      borderBottomWidth: 2,
                      borderBottomColor: 'jay500',
                      borderBottomStyle: 'solid',
                      borderRadius: 0,
                      height: 22,
                      color: 'pigeon500',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }
                  : {
                      p: 0,
                      pb: 8,
                      borderRadius: 0,
                      color: 'pigeon300',
                      height: 22,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }
              }
            >
              {child.props.title}
            </Button>
          </li>
        ))}
      </ul>

      <div>{children[openIndex]}</div>
    </>
  );
};

type ModalTabProps = {
  /*
   Tab content, rendered when the tab is selected
  */
  children: ReactNode;
  /*
    This shows in the tab list, can be a custom component if needed
  */
  title: ReactNode;
};

export const ModalTab = ({ children }: ModalTabProps) => {
  return <>{children}</>;
};
