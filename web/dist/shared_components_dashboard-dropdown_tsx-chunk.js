"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_components_dashboard-dropdown_tsx"],{

/***/ "./shared/components/dashboard-dropdown.tsx"
/*!**************************************************!*\
  !*** ./shared/components/dashboard-dropdown.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDropdown: () => (/* binding */ DashboardDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/indexOf.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/uniq.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Level */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Level/@patternfly/react-core/dist/dynamic/layouts/Level");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _console_utils_single_typeahead_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../console/utils/single-typeahead-dropdown */ "./shared/console/utils/single-typeahead-dropdown.tsx");












const tagColors = [
    'red',
    'purple',
    'blue',
    'green',
    'teal',
    'orange'
];
const Tag = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_9__.memo)(({ color, text })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_5__.Label, {
        isCompact: true,
        color: color,
        children: text
    }));
Tag.displayName = 'Tag';
const DashboardDropdown = ({ items, onChange, selectedKey })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("plugin__monitoring-plugin");
    const allTags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](items, 'tags');
    const uniqueTags = lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](allTags);
    const OptionComponent = ({ value, isSelected, ...rest })=>{
        const matchedValue = items.find((item)=>{
            return item.name === value;
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_7__.SelectOption, {
            value: value,
            isSelected: isSelected || false,
            ...rest,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_6__.Level, {
                hasGutter: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_6__.LevelItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            children: matchedValue?.title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_6__.LevelItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_5__.LabelGroup, {
                            children: matchedValue?.tags?.map((tag, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag, {
                                    color: tagColors[lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](uniqueTags, tag) % tagColors.length],
                                    text: tag
                                }, i))
                        })
                    })
                ]
            })
        });
    };
    const selectItems = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](items, (item)=>({
            value: item.name,
            children: item.title
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (items.filter((item)=>item.name === selectedKey).length === 0) {
            onChange(items.at(0)?.name);
        }
    }, [
        items,
        selectedKey,
        onChange
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, {
        "data-test": "dashboard-dropdown",
        className: "pf-v6-u-mb-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                    htmlFor: "monitoring-board-dropdown",
                    children: t('Dashboard')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                isFilled: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_console_utils_single_typeahead_dropdown__WEBPACK_IMPORTED_MODULE_11__.SingleTypeaheadDropdown, {
                    items: selectItems,
                    onChange: onChange,
                    OptionComponent: OptionComponent,
                    selectedKey: selectedKey,
                    hideClearButton: true,
                    resizeToFit: true
                })
            })
        ]
    });
};


/***/ },

/***/ "./shared/console/utils/single-typeahead-dropdown.tsx"
/*!************************************************************!*\
  !*** ./shared/console/utils/single-typeahead-dropdown.tsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleTypeaheadDropdown: () => (/* binding */ SingleTypeaheadDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInputGroup */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInputGroup/@patternfly/react-core/dist/dynamic/components/TextInputGroup");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/differenceBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/uniqueId.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/xorWith.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_times_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/times-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/times-icon/@patternfly/react-icons/dist/dynamic/icons/times-icon");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_control_horizontal_default.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);

/**
 * File copied from https://github.com/openshift/console/blob/097bb6537f157a1bd285c919a3b03e7f8bf7c111/frontend/public/components/utils/single-typeahead-dropdown.tsx
 */ 












/** The items to display in the dropdown */ /** The function to call when the selected item changes */ /** The function to call when the selected item is cleared */ /** The function to call when an item is created */ /** The function to call when the input value changes */ /** The key of the selected item */ /** The placeholder text to display in the input */ /** Whether to hide the clear button */ /** Whether to resize the dropdown to fit the selected item */ /** Whether to enable creating new items */ /** The component to use render the dropdown options */ /** Additional props to pass to MenuToggle */ /** Additional props to pass to Select */ /** Clear the current items in the dropdown when new items are added */ /**
 * Uses canvas.measureText to compute and return the width of the given text
 * of given font in pixels.
 *
 * @param text - The text to be rendered.
 * @param font - The css font descriptor that text is to be rendered with
 * (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */ const getTextWidth = (text, font)=>{
    // re-use canvas object for better performance
    const canvas = // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return Math.ceil(metrics.width);
};
/** A PF Select with typeahead filtering and single selection */ const SingleTypeaheadDropdown = ({ items, onChange, onClear, onCreate, onInputChange, selectedKey, placeholder, hideClearButton = false, resizeToFit = false, enableCreateNew = false, OptionComponent, menuToggleProps = {}, selectProps = {}, clearOnNewItems = true })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("plugin__monitoring-plugin");
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const [selectOptions, setSelectOptions] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(items);
    const selectedValue = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>selectOptions.find((i)=>i.value === selectedKey), [
        selectOptions,
        selectedKey
    ]);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(selectedValue?.children || '');
    const [filterValue, setFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('');
    const [filteredSelectOptions, setFilteredSelectOptions] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(items);
    const [focusedItemIndex, setFocusedItemIndex] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    const [activeItemId, setActiveItemId] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    const textInputRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)();
    const ID_PREFIX = lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"]('select-typeahead-');
    // for aria to work, ids have to be unique
    const NO_RESULTS = 'typeahead-dropdown__no-results';
    const CREATE_NEW = 'typeahead-dropdown__create-new';
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        // check if the incoming items are the same as those currently held in the selectOptions
        // If they are, don't setSelectOptions to prevent losing current filter
        if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](items, selectOptions, lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"]))) {
            return;
        }
        let newSelectOptions = [];
        if (clearOnNewItems) {
            newSelectOptions = [
                ...items
            ];
        } else {
            newSelectOptions = [
                ...lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](items, selectOptions, 'value'),
                ...selectOptions
            ];
        }
        setSelectOptions(newSelectOptions);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        items
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setFilteredSelectOptions(selectOptions);
    }, [
        selectOptions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        let newSelectOptions = selectOptions;
        // Filter menu items based on the text input value when one exists
        if (filterValue) {
            newSelectOptions = selectOptions.filter((menuItem)=>String(menuItem.children).toLowerCase().includes(filterValue.toLowerCase()));
            // If no option matches the filter exactly, display creation option
            if (enableCreateNew && !selectOptions.some((option)=>option.value === inputValue)) {
                newSelectOptions = [
                    ...newSelectOptions,
                    {
                        children: t('Create new option "{{option}}"', {
                            option: inputValue
                        }),
                        value: CREATE_NEW
                    }
                ];
            }
            // Open the menu when the input value changes and the new value is not empty
            if (!isOpen) {
                setIsOpen(true);
            }
        }
        setFilteredSelectOptions(newSelectOptions);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        filterValue
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createItemId = (value)=>`${ID_PREFIX}-option-${String(value).replace(' ', '-')}`;
    const setActiveAndFocusedItem = (itemIndex)=>{
        setFocusedItemIndex(itemIndex);
        const focusedItem = filteredSelectOptions[itemIndex];
        setActiveItemId(createItemId(focusedItem.value));
    };
    const resetActiveAndFocusedItem = ()=>{
        setFocusedItemIndex(null);
        setActiveItemId(null);
    };
    const closeMenu = ()=>{
        setIsOpen(false);
        resetActiveAndFocusedItem();
    };
    const onInputClick = ()=>{
        if (!isOpen) {
            setIsOpen(true);
        } else if (!inputValue) {
            closeMenu();
        }
    };
    const selectOption = (value, content)=>{
        setInputValue(String(content));
        setFilterValue('');
        onChange(String(value));
        closeMenu();
    };
    const onSelect = (_event, value)=>{
        if (enableCreateNew && value === CREATE_NEW) {
            if (!selectOptions.some((item)=>item.value === filterValue)) {
                setSelectOptions([
                    ...selectOptions,
                    {
                        value: filterValue,
                        children: filterValue
                    }
                ]);
                if (onCreate) {
                    onCreate(filterValue);
                }
            }
            selectOption(filterValue, filterValue);
            resetActiveAndFocusedItem();
        } else if (value && value !== NO_RESULTS) {
            const selectedOption = selectOptions.find((i)=>i.value === value);
            selectOption(value, selectedOption?.children ?? selectedOption?.value ?? '');
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setInputValue(selectedValue?.children ?? selectedValue?.value ?? '');
    }, [
        selectedValue
    ]);
    const onTextInputChange = (_event, value)=>{
        setInputValue(value);
        setFilterValue(value);
        if (onInputChange) {
            onInputChange(value);
        }
        resetActiveAndFocusedItem();
    };
    const handleMenuArrowKeys = (key)=>{
        let indexToFocus = 0;
        if (!isOpen) {
            setIsOpen(true);
        }
        if (filteredSelectOptions.every((option)=>option.isDisabled)) {
            return;
        }
        if (key === 'ArrowUp') {
            if (focusedItemIndex === null || focusedItemIndex === 0) {
                indexToFocus = filteredSelectOptions.length - 1;
            } else {
                indexToFocus = focusedItemIndex - 1;
            }
            // Skip disabled options
            while(filteredSelectOptions[indexToFocus].isDisabled){
                indexToFocus--;
                if (indexToFocus === -1) {
                    indexToFocus = filteredSelectOptions.length - 1;
                }
            }
        }
        if (key === 'ArrowDown') {
            if (focusedItemIndex === null || focusedItemIndex === filteredSelectOptions.length - 1) {
                indexToFocus = 0;
            } else {
                indexToFocus = focusedItemIndex + 1;
            }
            // Skip disabled options
            while(filteredSelectOptions[indexToFocus].isDisabled){
                indexToFocus++;
                if (indexToFocus === filteredSelectOptions.length) {
                    indexToFocus = 0;
                }
            }
        }
        setActiveAndFocusedItem(indexToFocus);
    };
    const onInputKeyDown = (event)=>{
        const focusedItem = focusedItemIndex !== null ? filteredSelectOptions[focusedItemIndex] : null;
        switch(event.key){
            case 'Enter':
                if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
                    onSelect(null, focusedItem.value);
                }
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                handleMenuArrowKeys(event.key);
                break;
            default:
                break;
        }
    };
    const onToggleClick = ()=>{
        setIsOpen(!isOpen);
        textInputRef?.current?.focus();
    };
    const onClearButtonClick = ()=>{
        onChange('');
        setInputValue('');
        setFilterValue('');
        resetActiveAndFocusedItem();
        textInputRef?.current?.focus();
        if (onClear) {
            onClear(selectedKey);
        }
    };
    const selectedItemWidth = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>{
        // font is hardcoded because canvas can't read the non-global CSS variables
        return resizeToFit && selectedValue && getTextWidth(String(selectedValue.children), '14px RedHatText');
    }, [
        resizeToFit,
        selectedValue
    ]);
    const toggle = (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, {
            ref: toggleRef,
            variant: "typeahead",
            onClick: onToggleClick,
            isExpanded: isOpen,
            ...menuToggleProps,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroup, {
                isPlain: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroupMain, {
                        value: inputValue,
                        onClick: onInputClick,
                        onChange: onTextInputChange,
                        onKeyDown: (ev)=>{
                            if (ev.key === 'Enter') {
                                ev.preventDefault();
                            }
                            // prevent accidental form submission
                            onInputKeyDown(ev);
                        },
                        id: `${ID_PREFIX}-input`,
                        autoComplete: "off",
                        innerRef: textInputRef,
                        placeholder: placeholder ?? t('Filter options'),
                        ...activeItemId && {
                            'aria-activedescendant': activeItemId
                        },
                        role: "combobox",
                        isExpanded: isOpen,
                        "aria-controls": `${ID_PREFIX}-listbox`,
                        style: // need to use max to account for min-width of the input element in PF
                        resizeToFit ? {
                            // eslint-disable-next-line max-len
                            width: `max(calc(${selectedItemWidth}px + ${_patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_12__.t_global_spacer_control_horizontal_default.var} * 2), 12ch)`
                        } : {}
                    }),
                    !hideClearButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroupUtilities, {
                        ...!inputValue ? {
                            style: {
                                display: 'none'
                            }
                        } : {},
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_times_icon__WEBPACK_IMPORTED_MODULE_11__.TimesIcon, {
                                "aria-hidden": true
                            }),
                            variant: "plain",
                            onClick: onClearButtonClick,
                            "aria-label": t('Clear input value')
                        })
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
        id: ID_PREFIX,
        isOpen: isOpen,
        selected: selectedKey,
        onSelect: onSelect,
        onOpenChange: (open)=>{
            if (open) {
                setIsOpen(true);
            } else {
                closeMenu();
            }
        },
        toggle: toggle,
        shouldFocusFirstItemOnOpen: false,
        ...selectProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectList, {
            id: `${ID_PREFIX}-listbox`,
            children: [
                filteredSelectOptions.map((v, k)=>{
                    const SelectOptionComponent = v.value === CREATE_NEW ? _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption : OptionComponent ?? _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectOptionComponent, {
                        isSelected: selectedKey === v.value,
                        isFocused: focusedItemIndex === k,
                        id: createItemId(k),
                        value: v.value,
                        ...v,
                        children: v.children || v.value
                    }, k);
                }),
                lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](filteredSelectOptions) && filterValue && !enableCreateNew && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, {
                    isDisabled: true,
                    isAriaDisabled: true,
                    value: NO_RESULTS,
                    children: t(`No results found`)
                })
            ]
        })
    });
};


/***/ }

}]);
//# sourceMappingURL=shared_components_dashboard-dropdown_tsx-chunk.js.map