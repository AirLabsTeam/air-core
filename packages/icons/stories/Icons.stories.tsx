import { ElementType, SVGProps, useCallback, useEffect, useState } from 'react';
import { noop } from 'lodash';
import { Story } from '@storybook/react';
import { Box, Text, Input } from '@air/zephyr';
import { Formik, Form, useField } from 'formik';
import { InfoFilled, Air } from '@air/icons';
import { useTheme } from 'styled-components';
import { iconList } from './iconList';
/*
 * We don't want to import the src modules lest we need to maintain a development environment via a
 * custom webpack configuration for Storybook. This will more closely emulate the manner with which
 * our consumers will use our components, also.
 */

type ImportedIcon = {
  iconName: string;
  Icon: ElementType;
};

export default {
  title: 'Icons/All Icons',
  component: Air,
  parameters: {
    docs: {
      description: {
        component:
          'Icon svgs can now be imported directly inside a React component\
          `import { Air as AirIcon } from \'@air/icons\';`\
          Then you can use the icon as a component and its stroke and fill color should match the current color of the element or container.\
          `<AirIcon width="65" color={theme.colors.jay500} />`  ',
      },
    },
  },
};

export const GridOfAllIcons: Story<SVGProps<SVGElement>> = (args) => {
  const [allIcons, setAllIcons] = useState<ImportedIcon[]>([]);
  const theme = useTheme();
  const colorOptions = Object.keys(theme.colors).map((colorName) => {
    // @ts-ignore indexer should be fine
    const color = theme.colors[colorName];
    return {
      label: colorName,
      value: color,
      leftAdornment: () => (
        <InfoFilled width="16px" height="16px" style={{ marginRight: '8px', color }} />
      ),
    };
  });
  const importIcons = useCallback(() => {
    const promises = iconList.map(
      (iconName) =>
        new Promise((resolve) => {
          import(/* webpackChunkName: "@air/icons" */ `../src/svgComponents/${iconName}.tsx`).then(
            (imported) => {
              const Icon = imported[iconName] as ElementType;
              resolve({
                iconName,
                Icon,
              });
            },
          );
        }),
    );
    Promise.all(promises).then((newIcons) => {
      setAllIcons(newIcons as ImportedIcon[]);
    });
  }, []);
  useEffect(() => {
    if (!allIcons.length) {
      importIcons();
    }
  }, [importIcons, allIcons]);

  //this is a temporary solution while there is no prebuilt Select component
  const FormikSelect = ({
    label,
    name,
    options,
  }: {
    label: string;
    name: string;
    options: any[];
  }) => {
    const [field] = useField(name);

    const mappedOptions = options.map((option) => {
      return (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      );
    });

    return (
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <Text variant={`text-ui-12`} tx={{ color: 'pigeon600', fontWeight: 'semibold', mb: 6 }}>
          {label}
        </Text>
        <select
          {...field}
          style={{
            height: 40,
            borderRadius: 4,
            border: '1px solid #C1C1C1',
          }}
        >
          {mappedOptions}
        </select>
      </label>
    );
  };

  return (
    <Formik
      initialValues={{ iconFilter: '', iconSize: '40', iconColor: '', backgroundColor: '' }}
      onSubmit={noop}
    >
      {({ values }) => {
        const filteredIcons = allIcons.filter((icon) =>
          icon.iconName.toLowerCase().includes(values.iconFilter.toLowerCase()),
        );
        return (
          <>
            <Box
              as={Form}
              tx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              <Input required={false} name="iconFilter" label="Name Filter" />
              <FormikSelect name="iconColor" label="Color" options={colorOptions} />
              <Input required={false} name="iconSize" label="Size" type="number" />
              <FormikSelect
                name="backgroundColor"
                label="Background Color"
                options={colorOptions}
              />
            </Box>
            <Box
              tx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '3rem 0.5rem',
                margin: '40px 0 40px 0',
                textAlign: 'center',
              }}
            >
              {filteredIcons.map((icon) => {
                return (
                  <Box
                    key={icon.iconName}
                    tx={{
                      backgroundColor: values.backgroundColor,
                      pt: 24,
                      pb: 12,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      variant="text-ui-12"
                      tx={{ mb: 20, fontWeight: 'bold', color: values.iconColor }}
                    >
                      {icon.iconName}
                    </Text>
                    {icon.Icon && (
                      <icon.Icon {...args} width={values.iconSize} color={values.iconColor} />
                    )}
                  </Box>
                );
              })}
            </Box>
          </>
        );
      }}
    </Formik>
  );
};
