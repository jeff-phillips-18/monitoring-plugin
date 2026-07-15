(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_components_table_TableFilters_tsx-shared_components_table_TableToolbar_tsx-shared_comp-3f8c42"],{

/***/ "./shared/components/table/TableCheckboxFilter.tsx"
/*!*********************************************************!*\
  !*** ./shared/components/table/TableCheckboxFilter.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableCheckboxFilter: () => (/* binding */ TableCheckboxFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Badge */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Badge/@patternfly/react-core/dist/dynamic/components/Badge");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Menu */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Menu/@patternfly/react-core/dist/dynamic/components/Menu");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/Popper/Popper */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");










const isToolbarLabel = (label)=>typeof label === 'object' && 'key' in label;
// Don't allow options to be a string[]
const TableCheckboxFilter = ({ filterId, title, value = [], onChange, placeholder, options = [], showToolbarItem, ouiaId = 'DataViewCheckboxFilter', ...props })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleToggleClick = (event)=>{
        event.stopPropagation();
        setTimeout(()=>{
            const firstElement = menuRef.current?.querySelector('li > button:not(:disabled)');
            firstElement?.focus();
        }, 0);
        setIsOpen((prev)=>!prev);
    };
    const handleSelect = (event, itemId)=>{
        const activeItem = String(itemId);
        const isSelected = value.includes(activeItem);
        onChange?.(event, isSelected ? value.filter((item)=>item !== activeItem) : [
            activeItem,
            ...value
        ]);
    };
    const handleClickOutside = (event)=>isOpen && menuRef.current && toggleRef.current && !menuRef.current.contains(event.target) && !toggleRef.current.contains(event.target) && setIsOpen(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener('click', handleClickOutside);
        return ()=>{
            window.removeEventListener('click', handleClickOutside);
        };
    }, [
        isOpen
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarFilter, {
        "data-ouia-component-id": ouiaId,
        labels: value.map((item)=>options.find((option)=>option.value === item)).filter(Boolean).map((activeOption)=>({
                key: activeOption.value,
                node: activeOption.label
            })),
        deleteLabel: (_, label)=>onChange?.(undefined, value.filter((item)=>item !== (isToolbarLabel(label) ? label.key : label))),
        categoryName: title,
        showToolbarItem: showToolbarItem,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_5__.Popper, {
            trigger: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_4__.MenuToggle, {
                ouiaId: `${ouiaId}-toggle`,
                ref: toggleRef,
                onClick: handleToggleClick,
                isExpanded: isOpen,
                badge: value.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Badge__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                    "data-ouia-component-id": `${ouiaId}-badge`,
                    isRead: true,
                    children: value.length
                }) : undefined,
                style: {
                    width: '200px'
                },
                children: placeholder ?? title
            }),
            triggerRef: toggleRef,
            popper: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                ref: menuRef,
                ouiaId: `${ouiaId}-menu`,
                onSelect: handleSelect,
                selected: value,
                ...props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_3__.MenuContent, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_3__.MenuList, {
                        children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                "data-ouia-component-id": `${ouiaId}-filter-item-${option.value}`,
                                itemId: option.value,
                                isSelected: value.includes(option.value),
                                hasCheckbox: true,
                                children: option.label
                            }, option.value))
                    })
                })
            }),
            popperRef: menuRef,
            /*eslint-disable-next-line react-hooks/refs */ appendTo: containerRef.current || undefined,
            "aria-label": `${title ?? filterId} filter`,
            isVisible: isOpen
        })
    }, ouiaId);
};


/***/ },

/***/ "./shared/components/table/TableFilters.tsx"
/*!**************************************************!*\
  !*** ./shared/components/table/TableFilters.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableFilter: () => (/* binding */ TableFilter),
/* harmony export */   TableFilterOption: () => (/* binding */ TableFilterOption),
/* harmony export */   TableFilters: () => (/* binding */ TableFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Menu */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Menu/@patternfly/react-core/dist/dynamic/components/Menu");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/Popper/Popper */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/filter-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/filter-icon/@patternfly/react-icons/dist/dynamic/icons/filter-icon");
/* harmony import */ var _TableLabelFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableLabelFilter */ "./shared/components/table/TableLabelFilter.tsx");
/* harmony import */ var _TableTextFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableTextFilter */ "./shared/components/table/TableTextFilter.tsx");
/* harmony import */ var _TableCheckboxFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableCheckboxFilter */ "./shared/components/table/TableCheckboxFilter.tsx");














const TableFilters = ({ children, ouiaId = 'DataViewFilters', activeAttributeMenu, setActiveAttributeMenu, filterItems, ...props })=>{
    const [isAttributeMenuOpen, setIsAttributeMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const attributeToggleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const attributeMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const attributeContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClickOutside = (event)=>isAttributeMenuOpen && !attributeMenuRef.current?.contains(event.target) && !attributeToggleRef.current?.contains(event.target) && setIsAttributeMenuOpen(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener('click', handleClickOutside);
        return ()=>{
            window.removeEventListener('click', handleClickOutside);
        };
    }, [
        isAttributeMenuOpen
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    const attributeToggle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggle, {
        ref: attributeToggleRef,
        onClick: ()=>setIsAttributeMenuOpen(!isAttributeMenuOpen),
        isExpanded: isAttributeMenuOpen,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, {}),
        children: activeAttributeMenu
    });
    const attributeMenu = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        ref: attributeMenuRef,
        onSelect: (_ev, itemId)=>{
            const selectedItem = filterItems.find((item)=>item.filterId === itemId);
            if (selectedItem) {
                setActiveAttributeMenu(selectedItem.title);
            }
            setIsAttributeMenuOpen(false);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_2__.MenuContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                children: filterItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        itemId: item.filterId,
                        children: item.title
                    }, item.filterId))
            })
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarToggleGroup, {
        "data-ouia-component-id": ouiaId,
        toggleIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_filter_icon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, {}),
        breakpoint: 'xl',
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, {
            variant: "filter-group",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    ref: attributeContainerRef,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_4__.Popper, {
                        trigger: attributeToggle,
                        triggerRef: attributeToggleRef,
                        popper: attributeMenu,
                        popperRef: attributeMenuRef,
                        /*eslint-disable-next-line react-hooks/refs */ appendTo: attributeContainerRef.current || undefined,
                        isVisible: isAttributeMenuOpen
                    })
                }),
                children
            ]
        })
    });
};
var TableFilterOption = /*#__PURE__*/ function(TableFilterOption) {
    TableFilterOption["CHECKBOX"] = "checkbox";
    TableFilterOption["TEXT"] = "text";
    TableFilterOption["LABEL"] = "label";
    return TableFilterOption;
}({});
const TableFilter = ({ ...props })=>{
    switch(props.type){
        case "text":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TableTextFilter__WEBPACK_IMPORTED_MODULE_8__.TableTextFilter, {
                ...props
            });
        case "checkbox":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TableCheckboxFilter__WEBPACK_IMPORTED_MODULE_9__.TableCheckboxFilter, {
                ...props
            });
        case "label":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TableLabelFilter__WEBPACK_IMPORTED_MODULE_7__.TableLabelFilter, {
                ...props
            });
    }
};


/***/ },

/***/ "./shared/components/table/TableLabelFilter.tsx"
/*!******************************************************!*\
  !*** ./shared/components/table/TableLabelFilter.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableLabelFilter: () => (/* binding */ TableLabelFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_public_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../console/public/components/autocomplete */ "./shared/console/public/components/autocomplete.tsx");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");





const TableLabelFilter = ({ data, title, filterId, onChange, showToolbarItem, labelPath, value, placeholder })=>{
    const [labelInputText, setLabelInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const labelSelection = value?.split(',').filter(Boolean).map((filter)=>{
        return {
            key: filter,
            node: filter
        };
    }) ?? [];
    const applyLabelFilters = (values)=>{
        setLabelInputText('');
        onChange?.(filterId, values.join(','));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_4__.ToolbarFilter, {
        categoryName: title,
        labels: labelSelection,
        showToolbarItem: showToolbarItem,
        deleteLabel: (_category, label)=>{
            setLabelInputText('');
            applyLabelFilters(labelSelection.filter((selectedLabel)=>selectedLabel.key !== label.key).map((selectedLabel)=>selectedLabel.key));
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "pf-v6-c-input-group",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_console_public_components_autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
                color: "purple",
                onSuggestionSelect: (selected)=>{
                    applyLabelFilters(lodash__WEBPACK_IMPORTED_MODULE_2__.uniq([
                        ...labelSelection.map((label)=>label.key),
                        selected
                    ]));
                },
                showSuggestions: true,
                textValue: labelInputText,
                setTextValue: setLabelInputText,
                placeholder: placeholder,
                data: data,
                labelPath: labelPath
            })
        })
    });
};


/***/ },

/***/ "./shared/components/table/TableTextFilter.tsx"
/*!*****************************************************!*\
  !*** ./shared/components/table/TableTextFilter.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableTextFilter: () => (/* binding */ TableTextFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/SearchInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/SearchInput/@patternfly/react-core/dist/dynamic/components/SearchInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");




const TableTextFilter = ({ filterId, title, value = '', onChange, onClear = ()=>onChange?.(undefined, ''), showToolbarItem, trimValue = true, ouiaId = 'DataViewTextFilter', ...props })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            // Only handle "/" key when not typing in an input, textarea, or contenteditable element
            if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey) {
                const target = event.target;
                const isInputElement = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
                // Only focus if the filter is visible and we're not already in an input field
                if (showToolbarItem && !isInputElement) {
                    // Find the input element by its ID (searchInputId prop)
                    const inputElement = document.getElementById(filterId);
                    if (inputElement) {
                        event.preventDefault();
                        inputElement.focus();
                    }
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        showToolbarItem,
        filterId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__.ToolbarFilter, {
        "data-ouia-component-id": ouiaId,
        labels: value.length > 0 ? [
            {
                key: title,
                node: value
            }
        ] : [],
        deleteLabel: ()=>onChange?.(undefined, ''),
        categoryName: title,
        showToolbarItem: showToolbarItem,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {
            searchInputId: filterId,
            value: value,
            onChange: (e, inputValue)=>onChange?.(e, trimValue ? inputValue.trim() : inputValue),
            onClear: onClear,
            placeholder: `Filter by ${title}`,
            "aria-label": `${title ?? filterId} filter`,
            "data-ouia-component-id": `${ouiaId}-input`,
            ...props
        })
    }, ouiaId);
};


/***/ },

/***/ "./shared/components/table/TableToolbar.tsx"
/*!**************************************************!*\
  !*** ./shared/components/table/TableToolbar.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableToolbar: () => (/* binding */ TableToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);








/** extends ToolbarProps */ /** Custom OUIA ID */ /** React node to display bulk select */ /** React node to display pagination */ /** React node to display actions */ /** React node to display filters */ const TableToolbar = ({ ouiaId = 'DataViewToolbar', bulkSelect, actions, pagination, filters, clearAllFilters, children, ...props })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    const defaultClearFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                ouiaId: `${ouiaId}-clear-all-filters`,
                variant: "link",
                onClick: clearAllFilters,
                isInline: true,
                children: t('Clear all filters')
            })
        }), [
        ouiaId,
        clearAllFilters,
        t
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {
        ouiaId: ouiaId,
        customLabelGroupContent: defaultClearFilters,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarContent, {
            children: [
                bulkSelect && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
                    "data-ouia-component-id": `${ouiaId}-bulk-select`,
                    children: bulkSelect
                }),
                filters && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
                    children: filters
                }),
                actions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
                    children: actions
                }),
                pagination && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
                    variant: _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_2__.ToolbarItemVariant.pagination,
                    "data-ouia-component-id": `${ouiaId}-pagination`,
                    children: pagination
                }),
                children
            ]
        })
    });
};


/***/ },

/***/ "./shared/components/table/sort-utils.ts"
/*!***********************************************!*\
  !*** ./shared/components/table/sort-utils.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   directedSort: () => (/* binding */ directedSort),
/* harmony export */   localeCompareSort: () => (/* binding */ localeCompareSort)
/* harmony export */ });
const localeCompareSort = (a, b, direction)=>(a ?? '').localeCompare(b ?? '', undefined, {
        sensitivity: 'base'
    }) * (direction === 'asc' ? 1 : -1) || 0;
const directedSort = (comparatorResult, direction)=>comparatorResult * (direction === 'asc' ? 1 : -1) || 0;


/***/ },

/***/ "./shared/components/table/table-pagination.tsx"
/*!******************************************************!*\
  !*** ./shared/components/table/table-pagination.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITEMS_PER_PAGE: () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   TablePagination: () => (/* binding */ TablePagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);




const ITEMS_PER_PAGE = [
    10,
    20,
    50,
    100,
    200,
    500
];
const defaultPerPageOptions = ITEMS_PER_PAGE.map((n)=>({
        title: n.toString(),
        value: n
    }));
const TablePagination = ({ itemCount, page, perPage, perPageOptions = defaultPerPageOptions, setPage, setPerPage, variant = _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationVariant.bottom, onSetPage, onPerPageSelect })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
        itemCount: itemCount,
        onPerPageSelect: onPerPageSelect ? onPerPageSelect : (e, v)=>{
            // When changing the number of results per page,
            // keep the start row approximately the same
            const firstRow = (page - 1) * perPage;
            setPage(Math.floor(firstRow / v) + 1);
            setPerPage(v);
        },
        onSetPage: onSetPage ? onSetPage : (e, v)=>setPage(v),
        page: page,
        perPage: perPage,
        perPageOptions: perPageOptions,
        variant: variant,
        titles: {
            items: '',
            page: '',
            itemsPerPage: t('Items per page'),
            perPageSuffix: t('per page'),
            toFirstPageAriaLabel: t('Go to first page'),
            toPreviousPageAriaLabel: t('Go to previous page'),
            toLastPageAriaLabel: t('Go to last page'),
            toNextPageAriaLabel: t('Go to next page'),
            optionsToggleAriaLabel: t('Items per page'),
            currPageAriaLabel: t('Current page'),
            paginationAriaLabel: t('Pagination'),
            ofWord: t('of')
        }
    });
};


/***/ },

/***/ "./shared/components/table/useTableColumns.ts"
/*!****************************************************!*\
  !*** ./shared/components/table/useTableColumns.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTableColumns: () => (/* binding */ useTableColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useTableColumns = (columnKeys, sortBy, direction, onSort, nonSortableIndices)=>{
    const sortByIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>columnKeys.findIndex((item)=>item.key === sortBy), [
        sortBy,
        columnKeys
    ]);
    const getSortParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((columnIndex)=>{
        if (nonSortableIndices?.includes(columnIndex)) {
            return undefined;
        }
        return {
            sortBy: {
                index: sortByIndex,
                direction,
                defaultDirection: 'asc'
            },
            onSort: (_event, index, direction)=>onSort(_event, columnKeys[index].key, direction),
            columnIndex
        };
    }, [
        columnKeys,
        direction,
        onSort,
        sortByIndex,
        nonSortableIndices
    ]);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>columnKeys.map((column, index)=>({
                cell: column.label,
                props: {
                    sort: getSortParams(index),
                    ...column.props
                }
            })), [
        getSortParams,
        columnKeys
    ]);
    return columns;
};


/***/ },

/***/ "./shared/components/table/useTableFilters.ts"
/*!****************************************************!*\
  !*** ./shared/components/table/useTableFilters.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTableFilters: () => (/* binding */ useTableFilters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
// Close to https://github.com/patternfly/react-data-view/blob/main/packages/module/src/Hooks/filters.ts
// but with changes to add/remove filter sets based on changing initialFilters, a bug fix for
// array filters, and changed to always sync URL


const useTableFilters = ({ initialFilters = {} })=>{
    const [searchParams, setSearchParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        const filters = Object.keys(initialFilters).reduce((loadedFilters, key)=>{
            const isArrayFilter = Array.isArray(initialFilters[key]);
            let urlValue = isArrayFilter ? searchParams?.getAll(key) : searchParams?.get(key);
            if (Array.isArray(urlValue) && urlValue.length === 0) {
                urlValue = null;
            }
            loadedFilters[key] = urlValue ? isArrayFilter && !Array.isArray(urlValue) ? [
                urlValue
            ] : urlValue : initialFilters[key];
            return loadedFilters;
        }, {
            ...initialFilters
        });
        return filters;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setSearchParams?.((prev)=>{
            const params = new URLSearchParams(prev);
            Object.entries(filters).forEach(([key, value])=>{
                params.delete(key);
                (Array.isArray(value) ? value : [
                    value
                ]).forEach((val)=>val && params.append(key, val));
            });
            return params;
        });
    }, [
        filters,
        setSearchParams
    ]);
    const onSetFilters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newFilters)=>{
        setFilters((prevFilters)=>({
                ...prevFilters,
                ...newFilters
            }));
    }, []);
    // helper function to reset filters
    const resetFilterValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((filters)=>Object.entries(filters).reduce((acc, [key, value])=>{
            if (Array.isArray(value)) {
                acc[key] = [];
            } else {
                acc[key] = '';
            }
            return acc;
        }, {}), []);
    const onDeleteFilters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((filtersToDelete)=>{
        setFilters((prevFilters)=>{
            const updatedFilters = {
                ...prevFilters,
                ...resetFilterValues(filtersToDelete)
            };
            return updatedFilters;
        });
    }, [
        resetFilterValues
    ]);
    const deleteFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((filterToDelete)=>{
        setFilters((prevFilters)=>{
            return {
                ...prevFilters,
                ...resetFilterValues({
                    [filterToDelete]: prevFilters[filterToDelete]
                })
            };
        });
    }, [
        resetFilterValues
    ]);
    const clearAllFilters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setFilters((prevFilters)=>{
            const clearedFilters = resetFilterValues(prevFilters);
            return clearedFilters;
        });
    }, [
        resetFilterValues
    ]);
    return {
        filters,
        onSetFilters,
        onDeleteFilters,
        clearAllFilters,
        deleteFilter
    };
};


/***/ },

/***/ "./shared/components/table/useTablePagination.ts"
/*!*******************************************************!*\
  !*** ./shared/components/table/useTablePagination.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTablePagination: () => (/* binding */ useTablePagination)
/* harmony export */ });
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);



const parsePositiveInt = (value, fallback)=>{
    const parsed = Number.parseInt(value ?? '', 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};
const useTablePagination = ({ page = 1, perPage = 20, pageParam = _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE, perPageParam = _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PER_PAGE })=>{
    const [searchParams, setSearchParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        page: parsePositiveInt(searchParams?.get(pageParam), page),
        perPage: parsePositiveInt(searchParams?.get(perPageParam), perPage)
    });
    const updateSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((page, perPage)=>{
        setSearchParams?.((prev)=>{
            const prevParams = new URLSearchParams(prev);
            prevParams.set(pageParam, `${page}`);
            prevParams.set(perPageParam, `${perPage}`);
            // Only update if there is a change in parameters to avoid unnecessary re-renders
            if (prev.toString() !== prevParams.toString()) {
                return prevParams;
            }
            return prev;
        });
    }, [
        setSearchParams,
        pageParam,
        perPageParam
    ]);
    const onPerPageSelect = (_event, newPerPage)=>{
        if (newPerPage !== state.perPage) {
            updateSearchParams(1, newPerPage);
            setState({
                perPage: newPerPage,
                page: 1
            });
        }
    };
    const onSetPage = (_event, newPage)=>{
        if (newPage !== state.page) {
            updateSearchParams(newPage, state.perPage);
            setState((prev)=>({
                    ...prev,
                    page: newPage
                }));
        }
    };
    return {
        ...state,
        onPerPageSelect,
        onSetPage
    };
};


/***/ },

/***/ "./shared/console/console-shared/constants/common.ts"
/*!***********************************************************!*\
  !*** ./shared/console/console-shared/constants/common.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_SHORTCUTS: () => (/* binding */ KEYBOARD_SHORTCUTS)
/* harmony export */ });
const KEYBOARD_SHORTCUTS = Object.freeze({
    focusFilterInput: '/',
    blurFilterInput: 'Escape',
    focusNamespaceDropdown: 'n'
});


/***/ },

/***/ "./shared/console/console-shared/hooks/useDocumentListener.ts"
/*!********************************************************************!*\
  !*** ./shared/console/console-shared/hooks/useDocumentListener.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyEventModes: () => (/* binding */ KeyEventModes),
/* harmony export */   useDocumentListener: () => (/* binding */ useDocumentListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/common */ "./shared/console/console-shared/constants/common.ts");


const isModalOpen = ()=>document.body.classList.contains('ReactModal__Body--open');
/**
 * Use this hook for components that require visibility only
 * when the user is actively interacting with the document.
 */ var KeyEventModes = /*#__PURE__*/ function(KeyEventModes) {
    KeyEventModes["HIDE"] = "HIDE";
    KeyEventModes["FOCUS"] = "FOCUS";
    return KeyEventModes;
}({});
const textInputKeyHandler = {
    [_constants_common__WEBPACK_IMPORTED_MODULE_1__.KEYBOARD_SHORTCUTS.blurFilterInput]: "HIDE",
    [_constants_common__WEBPACK_IMPORTED_MODULE_1__.KEYBOARD_SHORTCUTS.focusFilterInput]: "FOCUS"
};
const useDocumentListener = (keyEventMap = textInputKeyHandler)=>{
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const handleEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (!ref?.current?.contains(e.target)) {
            setVisible(false);
        }
    }, []);
    const handleKeyEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Don't steal focus from a modal open on top of the page.
        if (isModalOpen()) {
            return;
        }
        const { nodeName } = e.target;
        switch(keyEventMap[e.key]){
            case "HIDE":
                setVisible(false);
                ref.current?.blur();
                break;
            case "FOCUS":
                if (ref.current && document.activeElement !== ref.current && // Don't steal focus if the user types the focus shortcut in another text input.
                nodeName !== 'INPUT' && nodeName !== 'TEXTAREA') {
                    ref.current?.focus();
                    e.preventDefault();
                }
                break;
            default:
                break;
        }
    }, [
        keyEventMap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.addEventListener('click', handleEvent, true);
        document.addEventListener('keydown', handleKeyEvents, true);
        return ()=>{
            document.removeEventListener('click', handleEvent, true);
            document.removeEventListener('keydown', handleKeyEvents, true);
        };
    }, [
        handleEvent,
        handleKeyEvents
    ]);
    return {
        visible,
        setVisible,
        ref
    };
};


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx"
/*!****************************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleEmptyState: () => (/* binding */ ConsoleEmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");






const ConsoleEmptyState = ({ children, Icon, primaryActions, secondaryActions, title, ...props })=>{
    const dataTest = props['data-test'] || 'console-empty-state';
    const variant = props.variant || _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.xs;
    const body = children && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, {
        "data-test": `${dataTest}-body`,
        children: children
    });
    const footer = (primaryActions || secondaryActions) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateFooter, {
        "data-test": `${dataTest}-footer`,
        children: [
            primaryActions?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateActions, {
                "data-test": `${dataTest}-primary-actions`,
                children: primaryActions
            }),
            secondaryActions?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateActions, {
                "data-test": `${dataTest}-secondary-actions`,
                children: secondaryActions
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
        variant: variant,
        "data-test": dataTest,
        icon: Icon,
        titleText: title,
        ...props,
        children: [
            body,
            footer
        ]
    });
};
ConsoleEmptyState.displayName = 'ConsoleEmptyState';


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx"
/*!*******************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyBox: () => (/* binding */ EmptyBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleEmptyState */ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx");



const EmptyBox = ({ label, customMessage })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__.ConsoleEmptyState, {
        "data-test": "empty-box",
        children: customMessage ? customMessage : label ? t('No {{label}} found', {
            label
        }) : t('Not found')
    });
};
EmptyBox.displayName = 'EmptyBox';


/***/ },

/***/ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx"
/*!*****************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/LoadingBox.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingBox: () => (/* binding */ LoadingBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./shared/console/console-shared/src/components/loading/Loading.tsx");
/* harmony import */ var _empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty-state/ConsoleEmptyState */ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx");



const LoadingBox = ({ children })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__.ConsoleEmptyState, {
        "data-test": "loading-box",
        isFullHeight: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_1__.Loading, {}),
            children
        ]
    });
LoadingBox.displayName = 'LoadingBox';


/***/ },

/***/ "./shared/console/public/components/autocomplete.tsx"
/*!***********************************************************!*\
  !*** ./shared/console/public/components/autocomplete.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-styles */ "../node_modules/@patternfly/react-styles/dist/esm/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var _factory_text_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory/text-filter */ "./shared/console/public/components/factory/text-filter.tsx");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _console_shared_hooks_useDocumentListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../console-shared/hooks/useDocumentListener */ "./shared/console/console-shared/hooks/useDocumentListener.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_utils_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/utils/k8s */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/utils */ "./shared/utils/utils.ts");










const mapLabelsToStrings = (labels)=>{
    const requirements = (0,_openshift_console_dynamic_plugin_sdk_lib_utils_k8s__WEBPACK_IMPORTED_MODULE_10__.toRequirements)(labels);
    return lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](requirements, _openshift_console_dynamic_plugin_sdk_lib_utils_k8s__WEBPACK_IMPORTED_MODULE_10__.requirementToString);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLabelsAsString = (obj, path = 'metadata.labels')=>{
    const labels = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](obj, path);
    return lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](labels) ? mapLabelsToStrings(labels) : [];
};
const MAX_SUGGESTIONS = 5;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelParser = (resources = [], labelPath = 'metadata.labels')=>{
    const safeResources = Array.isArray(resources) ? resources : [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return safeResources.reduce((acc, resource)=>{
        getLabelsAsString(resource, labelPath).forEach((label)=>acc.add(label));
        return acc;
    }, new Set());
};
const suggestionBoxKeyHandler = {
    Escape: _console_shared_hooks_useDocumentListener__WEBPACK_IMPORTED_MODULE_9__.KeyEventModes.HIDE
};
const SuggestionLine = ({ suggestion, onClick, color })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_7__.Label, {
            variant: "outline",
            onClick: ()=>onClick(suggestion),
            "data-test": "suggestion-line",
            color: color,
            children: suggestion
        })
    });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AutocompleteInput = (props)=>{
    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { visible, setVisible, ref } = (0,_console_shared_hooks_useDocumentListener__WEBPACK_IMPORTED_MODULE_9__.useDocumentListener)(suggestionBoxKeyHandler);
    const { textValue, setTextValue, onSuggestionSelect, placeholder, suggestionCount, showSuggestions, data, color, labelPath } = props;
    const onSelect = (value)=>{
        onSuggestionSelect(value);
        if (visible) {
            setVisible(false);
        }
    };
    const activate = ()=>{
        if (textValue.trim()) {
            setVisible(true);
        }
    };
    const handleInput = (event, input)=>{
        if (input) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        setTextValue(input);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (textValue && visible && showSuggestions) {
            const processed = labelParser(data, labelPath);
            // User input without whitespace
            const processedText = textValue.trim().replace(/\s*=\s*/, '=');
            const maxSuggestions = suggestionCount ?? MAX_SUGGESTIONS;
            const filtered = [
                ...processed
            ].filter((item)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__.fuzzyCaseInsensitive)(processedText, item)).slice(0, maxSuggestions);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSuggestions(filtered);
        }
    }, [
        visible,
        textValue,
        showSuggestions,
        data,
        labelPath,
        suggestionCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "co-suggestion-box",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_factory_text_filter__WEBPACK_IMPORTED_MODULE_6__.TextFilter, {
                value: textValue,
                onChange: handleInput,
                placeholder: placeholder,
                onFocus: activate
            }),
            showSuggestions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_8__.SelectList, {
                className: (0,_patternfly_react_styles__WEBPACK_IMPORTED_MODULE_2__.css)('co-suggestion-box__suggestions', {
                    'co-suggestion-box__suggestions--shadowed': visible && suggestions?.length > 0
                }),
                children: visible && suggestions?.map((elem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SuggestionLine, {
                        suggestion: elem,
                        onClick: onSelect,
                        color: color
                    }, elem))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutocompleteInput);


/***/ },

/***/ "./shared/console/public/components/factory/text-filter.tsx"
/*!******************************************************************!*\
  !*** ./shared/console/public/components/factory/text-filter.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextFilter: () => (/* binding */ TextFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_shared_constants_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../console-shared/constants/common */ "./shared/console/console-shared/constants/common.ts");
/* harmony import */ var _console_shared_hooks_useDocumentListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../console-shared/hooks/useDocumentListener */ "./shared/console/console-shared/hooks/useDocumentListener.ts");





const TextFilter = (props)=>{
    const { label, placeholder, autoFocus = false, ...otherInputProps } = props;
    const { ref } = (0,_console_shared_hooks_useDocumentListener__WEBPACK_IMPORTED_MODULE_4__.useDocumentListener)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const placeholderText = placeholder ?? t('Filter {{label}}...', {
        label
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "co-text-filter",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                ...otherInputProps,
                className: "co-text-filter__text-input",
                "data-test-id": "item-filter",
                "aria-label": placeholderText,
                placeholder: placeholderText,
                ref: ref,
                autoFocus: autoFocus,
                tabIndex: 0,
                type: "text"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "co-text-filter__feedback",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", {
                    className: "co-kbd co-kbd__filter-input",
                    children: _console_shared_constants_common__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_SHORTCUTS.focusFilterInput
                })
            })
        ]
    });
};
TextFilter.displayName = 'TextFilter';


/***/ },

/***/ "?9969"
/*!*********************************************************!*\
  !*** @console/shared/src/utils/console-fetch (ignored) ***!
  \*********************************************************/
() {

/* (ignored) */

/***/ },

/***/ "?5cc5"
/*!******************************************!*\
  !*** @console/internal/models (ignored) ***!
  \******************************************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=shared_components_table_TableFilters_tsx-shared_components_table_TableToolbar_tsx-shared_comp-3f8c42-chunk.js.map