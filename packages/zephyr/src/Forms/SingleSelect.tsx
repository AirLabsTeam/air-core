import * as React from 'react';
import { useField } from 'formik';
import ReactSelect, {
  components as defaultReactSelectComponents,
  IndicatorProps,
  OptionProps,
  SelectComponentsConfig,
  Styles,
} from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectAsyncCreatable from 'react-select/async-creatable';
import ReactSelectCreatable from 'react-select/creatable';
import { AsyncProps as ReactSelectAsyncProps } from 'react-select/src/Async';
import { CreatableProps as ReactSelectCreatableProps } from 'react-select/src/Creatable';
import { NamedProps as ReactSelectProps } from 'react-select/src/Select';
import { capitalize, isNull } from 'lodash';
import VisuallyHidden from '@reach/visually-hidden';
import { Check, TriangleDown } from '@air/icons';
import invariant from 'tiny-invariant';
import { rgba } from 'polished';
import { DefaultTheme, useTheme } from 'styled-components';
import { Box, BoxStylingProps } from '../Box';
import { Text } from '../Text';
import { Label } from './Label';

export type SelectOption = {
  label: string;
  value: string;
  leftAdornment?: React.ReactNode;
  description?: string;
};

type CanHaveMultipleSelections = false;

/**
 * We don't want all of the props that react-select provides. Firstly, wee don't want form control props since those come
 * from the Formik hooks. Other props, like `isClearable` are not an option we want to allow in our design system for this
 * component.
 */
type DesiredReactSelectProps =
  | 'className'
  | 'classNamePrefix'
  | 'closeMenuOnScroll'
  | 'components'
  | 'controlShouldRenderValue'
  | 'delimiter'
  | 'escapeClearsValue'
  | 'filterOption'
  | 'formatGroupLabel'
  | 'formatOptionLabel'
  | 'getOptionLabel'
  | 'getOptionValue'
  | 'id'
  | 'inputId'
  | 'instanceId'
  | 'isOptionDisabled'
  | 'isOptionSelected'
  | 'isSearchable'
  | 'minMenuHeight'
  | 'maxMenuHeight'
  | 'menuIsOpen'
  | 'menuPlacement'
  | 'menuPosition'
  | 'menuShouldBlockScroll'
  | 'menuShouldScrollIntoView'
  | 'onMenuOpen'
  | 'onMenuClose'
  | 'onMenuScrollToTop'
  | 'onMenuScrollToBottom'
  | 'placeholder'
  | 'styles'
  | 'theme';

export interface SingleSelectProps
  extends Pick<ReactSelectProps<SelectOption, CanHaveMultipleSelections>, DesiredReactSelectProps>,
    Pick<BoxStylingProps, 'tx'> {
  /**
   * TODO: Not yet best to allow, given limited functionality.
   * @see https://github.com/JedWatson/react-select/issues/1397
   */
  // autoComplete?: string;

  /**
   * The content of the label. No need for * when required - it's added automatically.
   */
  label: string;

  /**
   * An input must always have a label, but design may want it visually hidden.
   */
  isLabelHidden?: boolean;

  /**
   * Used to offer a "subtitle" to a label, where you can expand on an input's needs. You can also use this to provide
   * helpful context to people using screen readers.
   */
  description?: {
    isHidden: boolean;
    component: React.ReactNode;
  };

  /**
   * Should match the relevant key name inside the Formik schema.
   */
  name: string;

  /**
   * The items rendered in the menu list
   */
  options?: SelectOption[];

  /**
   * We want developers to be conscious of many things when dealing with initially asynchronously loaded options. It's
   * not as simple as: "is it loading?". For example, the component is not wholly in a loading state when leveraging a
   * searchable, [async react-select](https://react-select.com/async) because the field should not be disabled and options
   * may already be renderable.
   */
  initialLoadingState?: {
    isLoading: boolean;
    optionsListLoadingText: string;
  };

  /**
   * Leverages a ["CreatableSelect"](https://react-select.com/creatable) from [`react-select`](https://react-select.com/)
   * if defined. `onCreateOption` is a required key if the object is defined, but other, optional properties are outlined
   * [here](https://react-select.com/props#creatable-props). Note: If both `creatableConfig` and `asyncConfig` are defined,
   * `react-select/AsyncCreatable` will be used.
   */
  creatableConfig?: {
    onCreateOption: NonNullable<
      ReactSelectCreatableProps<SelectOption, CanHaveMultipleSelections>['onCreateOption']
    >;
  } & Omit<ReactSelectCreatableProps<SelectOption, CanHaveMultipleSelections>, 'onCreateOption'>;

  /**
   * Leverages an ["AsyncSelect"](https://react-select.com/async) from [`react-select`](https://react-select.com/)
   * if defined. The optional properties for async react-select components are banned in favor of universal defaults.
   * Note: If both `creatableConfig` and `loadOptions` are defined, `react-select/AsyncCreatable` will be used. Regardless
   * of the initial set of options being asynchronously defined, this prop is NOT required if the available options remain
   * static over one use (for example, a SingleSelect whose options are defined via a CMS).
   */
  loadOptions?: ReactSelectAsyncProps<SelectOption>['loadOptions'];

  /**
   * This will eventually be an optional parameter, but must be required until [this Formik issue](https://github.com/formium/formik/issues/2092#issuecomment-738606844)
   * is resolved.
   */
  required: boolean;

  /**
   * `react-select` calls this prop "isDisabled", but we're going to maintain consistency across form controls for this.
   */
  disabled?: boolean;

  readOnly?: boolean;
  'data-testid'?: string;
}

/**
 * From Kyle, with love:
 * Styling is defined in many places, and I am sorry for that. Most of the styles are defined in this exportable method
 * which can be used to define the `style` prop in combination with custom stylings at an implementation level. There are
 * two areas where stylings are not defined in this manner.
 *
 * 1. If a component is wholly custom, the styles are defined there.
 * 2. Top-level `:hover` styles didn't work 🤷‍♂️, so they've been applied to the <Box> which wraps <ReactSelect />
 */
export const getBaseSelectStylesWithTheme = ({
  theme,
  hasError,
}: {
  theme: DefaultTheme;
  hasError: boolean;
}): Partial<Styles> => ({
  container: (base, props) => ({
    ...base,
    color: props.isDisabled ? theme.colors.pigeon200 : theme.colors.pigeon700,
    fontFamily: theme.fonts.copy,
    fontSize: 14,
    letterSpacing: '-0.015em',
    lineHeight: 1.5,
  }),
  control: (base, props) => {
    let border: string;
    let boxShadow: string;

    if (hasError) {
      border = `1px solid ${theme.colors.flamingo600}`;
      boxShadow = `${theme.colors.flamingo600} 0 0 0 1px`;
    } else if (props.isDisabled) {
      border = `1px solid ${theme.colors.pigeon100}`;
      boxShadow = 'none';
    } else if (props.isFocused) {
      border = `1px solid ${theme.colors.macaw200}`;
      boxShadow = `${theme.colors.macaw200} 0 0 0 1px`;
    } else {
      border = `1px solid ${theme.colors.pigeon200}`;
      boxShadow = 'none';
    }

    return {
      ...base,
      backgroundColor: theme.colors.transparent,
      border,
      borderRadius: 4,
      boxShadow,
      cursor: 'text',
      outline: 'none',
      padding: '1px 12px', // react-select has 4px py on some other element
      width: '100%',
      zIndex: 1,
      '&:hover': {
        borderColor: hasError || props.isFocused ? undefined : theme.colors.pigeon400,
      },
    };
  },
  group: (base) => ({
    ...base,
    paddingTop: 0,
    paddingBottom: 0,
    '&:not(:last-child)': { marginBottom: 12 },
    '&:not(:first-of-type)': { marginTop: 12 },
  }),
  groupHeading: (base) => ({
    ...base,
    color: theme.colors.pigeon200,
    textTransform: 'none',
  }),
  indicatorSeparator: (base) => ({ ...base, display: 'none' }),
  input: (base) => ({ ...base, backgroundColor: theme.colors.white, margin: 0 }),
  loadingIndicator: (base) => ({ ...base, marginRight: '-4px', color: theme.colors.pigeon300 }),
  loadingMessage: (base) => ({
    ...base,
    color: theme.colors.pigeon300,
    '&:hover': {
      cursor: 'progress',
    },
  }),
  menu: (base) => ({
    ...base,
    border: 'none',
    borderRadius: 4,
    // prettier-ignore
    boxShadow: `${rgba(theme.colors.black, 0.15)} 0px 1px 3px, ${rgba(theme.colors.black, 0.25)} 0px 0px 2px, ${rgba(theme.colors.black, 0.2)} 0px 2px 8px`,
    padding: 6,
    '& > div': {
      padding: 0,
    },
  }),
  menuList: (base) => ({
    ...base,
    '&:hover': {
      cursor: 'pointer', // we dont want cursor to change between items in the menu
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: theme.colors.pigeon300,
    margin: 0,
  }),
  singleValue: (base) => ({
    ...base,
    margin: 0,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
});

const sharedBottomTextStyles: BoxStylingProps['tx'] = {
  position: 'absolute',
  bottom: -24, // text is 18px high + 6px space between bottom select border and top of text
};

const AirReactSelectDropdownIndicator = (
  props: IndicatorProps<SelectOption, CanHaveMultipleSelections>,
) => {
  const theme = useTheme();

  return (
    <defaultReactSelectComponents.DropdownIndicator
      {...props}
      getStyles={() => ({
        color: props.isDisabled ? 'currentColor' : theme.colors.pigeon500,
        marginBottom: '-3px', // needed to align vertically
        '&:hover': {
          color: props.isDisabled ? 'currentColor' : theme.colors.pigeon500,
        },
      })}
    >
      <Box
        as={TriangleDown}
        tx={{
          width: 16,
          '& path': {
            fill: 'currentColor',
            shapeRendering: 'crispEdges',
          },
        }}
      />
    </defaultReactSelectComponents.DropdownIndicator>
  );
};

const AirReactSelectOption = ({
  children,
  ...props
}: Omit<OptionProps<SelectOption, CanHaveMultipleSelections>, 'data'> & {
  data: SelectOption;
}) => {
  const { leftAdornment: LeftAdornment, description } = props.data;

  const propsWithoutStyleFn = {
    ...props,
    getStyles: (_base: any, _props: any) => ({ '&:not(:last-child)': { marginBottom: 8 } }),
  };

  return (
    <defaultReactSelectComponents.Option {...propsWithoutStyleFn}>
      <Box
        tx={{
          bg: props.isFocused ? 'pigeon050' : 'inherit',
          borderRadius: 2,
          color: props.isSelected ? 'pigeon700' : 'pigeon500',
          cursor: 'pointer',
          p: 6,
          mb: 8,
          '&:active': { bg: 'pigeon100' },
          '&:last-of-type': { marginBottom: 0 },
        }}
      >
        <Box
          tx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: props.isSelected ? 'medium' : 'regular',
            width: '100%',
          }}
        >
          {LeftAdornment && (
            <Box
              as={LeftAdornment as any}
              tx={{ color: 'pigeon500', width: 16, minWidth: '16px', mr: 8 }}
            />
          )}

          <Text
            variant="text-ui-14"
            tx={{
              color: 'pigeon700',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {children}
          </Text>

          {props.isSelected && (
            <Box as={Check} tx={{ color: 'pigeon600', width: 16, minWidth: '16px', ml: 'auto' }} />
          )}
        </Box>

        {description && (
          <Text
            variant="text-ui-14"
            tx={{
              color: 'pigeon500',
              display: 'flex',
              ml: LeftAdornment ? 24 : 0,
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Text>
        )}
      </Box>
    </defaultReactSelectComponents.Option>
  );
};

export const AirReactSelectComponents: SelectComponentsConfig<
  SelectOption,
  CanHaveMultipleSelections
> = {
  DropdownIndicator: AirReactSelectDropdownIndicator,
  Option: AirReactSelectOption,
};

export const SingleSelect = ({
  className,
  components,
  creatableConfig,
  description,
  disabled = false,
  id,
  isLabelHidden = false,
  isSearchable = true,
  label,
  loadOptions,
  initialLoadingState,
  name,
  options,
  placeholder = 'Select...',
  readOnly = false,
  required,
  styles,
  tx,
  'data-testid': topLevelTestID,
  ...restOfProps
}: SingleSelectProps) => {
  const [field, meta, helpers] = useField<string>(name);
  const theme = useTheme();
  const selectID = id ?? name;
  const errorID = `${selectID}_error`;
  const descriptionID = `${selectID}_description`;
  const hasError = meta.touched && !!meta.error;
  const isLoading = initialLoadingState?.isLoading ?? false;
  const isDisabled = disabled || readOnly || isLoading;

  const testID = React.useMemo(() => {
    const prefix = `select_${name}`;

    if (!meta.touched) return `${prefix}_untouched`;
    if (hasError) return `${prefix}_invalid`;
    return `${prefix}_valid`;
  }, [name, meta, hasError]);

  const value = React.useMemo(() => {
    if (isLoading) return undefined;

    invariant(
      (!loadOptions && options) || (loadOptions && !options),
      `On <Select name="${field.name}">: You failed to pass any options.`,
    );

    invariant(
      (options && !options.some(({ label }) => label === '')) || !options,
      `On <Select name="${field.name}">: One of the passed options has an empty string label. We have a requirement in our design system that disallows this. Please confer with your designer on an acceptable replacement before moving forward.`,
    );

    const matchingOption = options?.find(({ value }) => value === field.value);
    return matchingOption;
  }, [field, isLoading, loadOptions, options]);

  const onBlur = React.useCallback(() => helpers.setTouched(true), [helpers]);
  const onChange = React.useCallback(
    (option) => {
      return isNull(option)
        ? // @ts-ignore - undefined is a valid argument for `helpers.setValue`
          helpers.setValue(undefined)
        : helpers.setValue(option.value);
    },
    [helpers],
  );

  const props = {
    'aria-describedby': !!description ? `${descriptionID} ${errorID}` : errorID,
    'aria-invalid': hasError,
    components: { ...AirReactSelectComponents, ...components },
    'data-testid': testID,
    defaultOptions: true,
    id: selectID,
    instanceId: `${selectID}_instance`,
    isClearable: false,
    isDisabled,
    isLoading,
    isSearchable: isSearchable,
    loadingMessage: () => initialLoadingState?.optionsListLoadingText ?? null,
    name: field.name,
    onBlur: onBlur,
    onChange: onChange,
    options,
    placeholder: placeholder,
    styles: { ...getBaseSelectStylesWithTheme({ theme, hasError }), ...styles },
    value: value,
    ...restOfProps,
  };

  return (
    <Box
      className={className}
      tx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '256px',
        position: 'relative',
        ...tx,
      }}
      data-testid={topLevelTestID}
    >
      <Label
        for={selectID}
        isFieldRequired={required}
        isVisuallyHidden={isLabelHidden}
        tx={isLabelHidden ? undefined : { mb: 6 }}
      >
        {label}
      </Label>

      <Box
        tx={{
          position: 'relative',
          width: '100%',

          // Couldn't get top-level stylings
          '&:hover': {
            cursor: isLoading
              ? 'progress'
              : isDisabled
              ? 'not-allowed'
              : isSearchable
              ? 'text'
              : 'pointer',
          },
        }}
      >
        {creatableConfig && loadOptions ? (
          <ReactSelectAsyncCreatable {...props} {...creatableConfig} loadOptions={loadOptions} />
        ) : loadOptions && !creatableConfig ? (
          <ReactSelectAsync {...props} loadOptions={loadOptions} />
        ) : creatableConfig && !loadOptions ? (
          <ReactSelectCreatable {...props} {...creatableConfig} />
        ) : (
          <ReactSelect {...props} />
        )}
      </Box>

      {/* Only render description while no error for field exists. */}
      <Text
        as="span"
        id={descriptionID}
        variant="text-ui-12"
        tx={{
          ...sharedBottomTextStyles,
          display: hasError ? 'none' : 'block',
          color: 'pigeon500',
        }}
      >
        {description?.isHidden ? (
          <VisuallyHidden>{description.component}</VisuallyHidden>
        ) : (
          description?.component
        )}
      </Text>

      <Text
        as="span"
        id={errorID}
        role="alert"
        variant="text-ui-12"
        tx={{
          ...sharedBottomTextStyles,
          display: hasError ? 'block' : 'none',
          fontWeight: 'semibold',
          color: 'flamingo600',
        }}
      >
        {/* For screen reader users, provide context as to which field is erroring */}
        {meta.error && <VisuallyHidden>{`Error on ${label} input: `}</VisuallyHidden>}

        {capitalize(meta.error)}
      </Text>
    </Box>
  );
};

SingleSelect.displayName = 'SingleSelect';