"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_metrics_components_promql-expression-input_tsx"],{

/***/ "./features/metrics/components/promql-expression-input.tsx"
/*!*****************************************************************!*\
  !*** ./features/metrics/components/promql-expression-input.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromQLExpressionInput: () => (/* binding */ PromQLExpressionInput),
/* harmony export */   promqlHighlighter: () => (/* binding */ promqlHighlighter),
/* harmony export */   selectAutocompleteOnHoverPlugin: () => (/* binding */ selectAutocompleteOnHoverPlugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codemirror/autocomplete */ "../node_modules/@codemirror/autocomplete/dist/index.js");
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codemirror/commands */ "../node_modules/@codemirror/commands/dist/index.js");
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codemirror/language */ "../node_modules/@codemirror/language/dist/index.js");
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codemirror/lint */ "../node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _codemirror_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/search */ "../node_modules/@codemirror/search/dist/index.js");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/state */ "../node_modules/@codemirror/state/dist/index.js");
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/view */ "../node_modules/@codemirror/view/dist/index.js");
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lezer/highlight */ "../node_modules/@lezer/highlight/dist/index.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInputGroup */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInputGroup/@patternfly/react-core/dist/dynamic/components/TextInputGroup");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/constants */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/constants/@patternfly/react-core/dist/dynamic/helpers/constants");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_close_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/close-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/close-icon/@patternfly/react-icons/dist/dynamic/icons/close-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon");
/* harmony import */ var _prometheus_io_codemirror_promql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @prometheus-io/codemirror-promql */ "../node_modules/@prometheus-io/codemirror-promql/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_family_mono.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_size_sm.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_weight_body_bold.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_xs.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_brand_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_nonstatus_purple_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_nonstatus_yellow_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_custom_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_danger_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_success_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_warning_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_disabled.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_regular.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_subtle.js");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var _shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/hooks/usePatternflyTheme */ "./shared/hooks/usePatternflyTheme.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





























const box_shadow = `
    var(--pf-t--global--box-shadow--X--md--default)
    var(--pf-t--global--box-shadow--Y--md--default)
    var(--pf-t--global--box-shadow--blur--md)
    var(--pf-t--global--box-shadow--spread--md--default)
    var(--pf-t--global--box-shadow--color--md--default)
`;
const promqlExtension = new _prometheus_io_codemirror_promql__WEBPACK_IMPORTED_MODULE_17__.PromQLExtension();
const theme = (darkTheme)=>_codemirror_view__WEBPACK_IMPORTED_MODULE_7__.EditorView.theme({
        '.cm-scroller': {
            fontFamily: 'inherit'
        },
        '.cm-content': {
            caretColor: 'auto'
        },
        '&.cm-focused.cm-editor': {
            outline: 'none'
        },
        '.cm-tooltip.cm-completionInfo': {
            backgroundColor: 'var(--pf-t--global--background--color--floating--default)',
            boxShadow: box_shadow,
            marginTop: '-11px',
            padding: '10px'
        },
        '.cm-completionInfo-right': {
            '&:before': {
                content: "' '",
                height: '0',
                position: 'absolute',
                width: '0',
                left: '-20px',
                borderWidth: '10px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderRightColor: 'var(--pf-t--global--background--color--floating--default)'
            },
            marginLeft: '12px'
        },
        '.cm-completionInfo-left': {
            '&:before': {
                content: "' '",
                height: '0',
                position: 'absolute',
                width: '0',
                right: '-20px',
                borderWidth: '10px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderLeftColor: 'var(--pf-t--global--background--color--floating--default)'
            },
            marginRight: '12px'
        },
        '.cm-completionIcon': {
            fontFamily: 'codicon',
            width: '1.5em',
            verticalAlign: 'middle'
        },
        '.cm-selectionMatch': {
            backgroundColor: 'var(--pf-t--global--background--color--floating--hover)'
        },
        '.cm-completionDetail': {
            float: 'right',
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_34__.t_global_text_color_subtle.var
        },
        '.cm-tooltip': {
            backgroundColor: 'var(--pf-t--global--background--color--floating--default)',
            borderRadius: 'var(--pf-t--global--border--radius--small)',
            borderStyle: 'solid',
            borderWidth: '0px',
            borderColor: 'transparent',
            boxShadow: box_shadow,
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__.t_global_text_color_regular.var
        },
        '.cm-tooltip.cm-tooltip-autocomplete': {
            '& > ul': {
                fontFamily: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__.t_global_font_family_mono.var,
                fontSize: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_global_font_size_sm.var
            },
            '& > ul > li[aria-selected]': {
                backgroundColor: 'var(--pf-t--global--background--color--floating--hover)',
                color: 'unset',
                '&:first-child': {
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: 'transparent'
                },
                '&:last-child': {
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: 'transparent'
                }
            },
            '& > ul > li': {
                padding: '2px 1em 2px 3px',
                '&:first-child': {
                    marginTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_global_spacer_xs.var
                },
                '&:last-child': {
                    marginBottom: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_global_spacer_xs.var
                }
            }
        },
        '.cm-completionMatchedText': {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__.t_global_color_brand_default.var
        },
        '.cm-completionIcon-function, .cm-completionIcon-method': {
            '&:after': {
                content: "'\\ea8c'"
            },
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__.t_global_color_nonstatus_purple_default.var
        },
        '.cm-completionIcon-class': {
            '&:after': {
                content: "'○'"
            }
        },
        '.cm-completionIcon-interface': {
            '&:after': {
                content: "'◌'"
            }
        },
        '.cm-completionIcon-variable': {
            '&:after': {
                content: "'𝑥'"
            }
        },
        '.cm-completionIcon-constant': {
            '&:after': {
                content: "'\\eb5f'"
            },
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__.t_global_color_brand_default.var
        },
        '.cm-completionIcon-type': {
            '&:after': {
                content: "'𝑡'"
            }
        },
        '.cm-completionIcon-enum': {
            '&:after': {
                content: "'∪'"
            }
        },
        '.cm-completionIcon-property': {
            '&:after': {
                content: "'□'"
            }
        },
        '.cm-completionIcon-keyword': {
            '&:after': {
                content: "'\\eb62'"
            },
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__.t_global_text_color_regular.var
        },
        '.cm-completionIcon-namespace': {
            '&:after': {
                content: "'▢'"
            }
        },
        '.cm-completionIcon-text': {
            '&:after': {
                content: "'\\ea95'"
            },
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__.t_global_color_nonstatus_yellow_default.var
        }
    }, {
        dark: darkTheme
    });
// Codemirror plugin to select an autosuggest option using the mouse
const selectAutocompleteOnHoverPlugin = _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.ViewPlugin.fromClass(class SelectAutocompleteOnHoverPlugin {
    update(update) {
        this.optionsLength = (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.currentCompletions)(update.state).length;
    }
    findHoveredOptionIndex(dom) {
        let listItem = null;
        while(dom && dom !== this.view.dom){
            if (dom.nodeName === 'LI') {
                listItem = dom;
                break;
            }
            dom = dom.parentElement;
        }
        if (!listItem || !listItem.parentNode) {
            return -1;
        }
        return Array.from(listItem.parentNode.children).indexOf(listItem);
    }
    onMouseMove(e) {
        const element = e.target;
        const index = this.findHoveredOptionIndex(element);
        if (index >= 0 && this.lastIndex !== index) {
            this.lastIndex = index;
            this.view.dispatch({
                effects: (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.setSelectedCompletion)(index)
            });
        }
    }
    destroy() {
        this.view.dom.removeEventListener('mousemove', this.onMouseMove);
    }
    constructor(view){
        _define_property(this, "view", void 0);
        _define_property(this, "optionsLength", void 0);
        _define_property(this, "lastIndex", void 0);
        this.view = view;
        this.optionsLength = 0;
        this.lastIndex = -1;
        this.view.dom.addEventListener('mousemove', this.onMouseMove = this.onMouseMove.bind(this));
    }
});
const promqlHighlighter = _codemirror_language__WEBPACK_IMPORTED_MODULE_3__.HighlightStyle.define([
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.name,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__.t_global_text_color_regular.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.number,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_30__.t_global_color_status_success_default.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.string,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__.t_global_color_status_danger_default.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.keyword,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__.t_global_color_status_custom_default.var,
        fontWeight: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_global_font_weight_body_bold.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.function(_lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.variableName),
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__.t_global_color_status_custom_default.var,
        fontWeight: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_global_font_weight_body_bold.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.labelName,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_31__.t_global_color_status_warning_default.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.operator
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.modifier,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__.t_global_color_status_custom_default.var,
        fontWeight: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_global_font_weight_body_bold.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.paren
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.squareBracket
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.brace
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.invalid,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__.t_global_color_status_danger_default.var
    },
    {
        tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_8__.tags.comment,
        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__.t_global_text_color_disabled.var,
        fontStyle: 'italic'
    }
]);
const PromQLExpressionInput = ({ value, onExecuteQuery, onValueChange, onSelectionChange })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_19__.useTranslation)("plugin__monitoring-plugin");
    const [namespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__.useActiveNamespace)();
    const { prometheus, accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_35__.useMonitoring)();
    const { theme: pfTheme } = (0,_shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_36__.usePatternFlyTheme)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_18__.useRef)(null);
    const viewRef = (0,react__WEBPACK_IMPORTED_MODULE_18__.useRef)(null);
    const [metricNames, setMetricNames] = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]);
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)();
    const placeholder = t('Expression (press Shift+Enter for newlines)');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_18__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_20__.useSafeFetch)(), []);
    (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(()=>{
        if (accessCheckLoading) {
            return;
        }
        // If we are using the tenancy path, then add the namespace as a query parameter at the end of
        // the url
        const namespaceQueryParam = useMetricsTenancy ? `?namespace=${namespace}` : '';
        const url = `${(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.getPrometheusBasePath)({
            useTenancyPath: useMetricsTenancy,
            prometheus
        })}/${_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__.PrometheusEndpoint.LABEL}/__name__/values${namespaceQueryParam}`;
        safeFetch(url).then((response)=>{
            const metrics = response?.data;
            setMetricNames(metrics);
            setErrorMessage(undefined);
        }).catch((err)=>{
            if (err.name !== 'AbortError') {
                const message = err?.response?.status === 403 ? t('Access restricted.') : t('Failed to load metrics list.');
                setErrorMessage(message);
            }
        });
    }, [
        safeFetch,
        t,
        namespace,
        prometheus,
        accessCheckLoading,
        useMetricsTenancy
    ]);
    const onClear = ()=>{
        if (viewRef.current !== null) {
            const length = viewRef.current.state.doc.toString().length;
            viewRef.current.dispatch({
                changes: {
                    from: 0,
                    to: length
                }
            });
        }
        onValueChange('');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(()=>{
        if (viewRef.current !== null) {
            const currentExpression = viewRef.current.state.doc.toString();
            if (currentExpression !== value) {
                viewRef.current.dispatch({
                    changes: {
                        from: 0,
                        to: currentExpression.length,
                        insert: value
                    }
                });
            }
        }
    }, [
        value
    ]);
    const target = (0,react__WEBPACK_IMPORTED_MODULE_18__.useMemo)(()=>({
            focus: ()=>viewRef.current.focus(),
            setSelectionRange: (from, to)=>{
                viewRef.current.dispatch({
                    selection: {
                        anchor: from,
                        head: to
                    }
                });
            }
        }), []);
    (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(()=>{
        promqlExtension.setComplete({
            remote: {
                url: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.PROMETHEUS_BASE_PATH,
                httpMethod: 'GET',
                cache: {
                    initialMetricList: metricNames
                }
            }
        });
        if (viewRef.current === null) {
            if (!containerRef.current) {
                throw new Error('expected CodeMirror container element to exist');
            }
            const startState = _codemirror_state__WEBPACK_IMPORTED_MODULE_6__.EditorState.create({
                doc: value,
                extensions: [
                    theme(pfTheme === 'dark'),
                    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_7__.highlightSpecialChars)(),
                    (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_2__.history)(),
                    _codemirror_state__WEBPACK_IMPORTED_MODULE_6__.EditorState.allowMultipleSelections.of(true),
                    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentOnInput)(),
                    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.bracketMatching)(),
                    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.closeBrackets)(),
                    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.autocompletion)(),
                    selectAutocompleteOnHoverPlugin,
                    (0,_codemirror_search__WEBPACK_IMPORTED_MODULE_5__.highlightSelectionMatches)(),
                    _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.EditorView.lineWrapping,
                    _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.EditorView.contentAttributes.of({
                        'aria-label': placeholder
                    }),
                    _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.keymap.of([
                        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.closeBracketsKeymap,
                        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_2__.defaultKeymap,
                        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_2__.historyKeymap,
                        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.completionKeymap,
                        ..._codemirror_lint__WEBPACK_IMPORTED_MODULE_4__.lintKeymap
                    ]),
                    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_7__.placeholder)(placeholder),
                    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.syntaxHighlighting)(promqlHighlighter),
                    promqlExtension.asExtension(),
                    _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.keymap.of([
                        {
                            key: 'Escape',
                            run: (v)=>{
                                v.contentDOM.blur();
                                return false;
                            }
                        }
                    ]),
                    _codemirror_state__WEBPACK_IMPORTED_MODULE_6__.Prec.highest(_codemirror_view__WEBPACK_IMPORTED_MODULE_7__.keymap.of([
                        {
                            key: 'Enter',
                            run: ()=>{
                                onExecuteQuery?.();
                                return true;
                            }
                        },
                        {
                            key: 'Shift-Enter',
                            run: _codemirror_commands__WEBPACK_IMPORTED_MODULE_2__.insertNewlineAndIndent
                        }
                    ])),
                    _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.EditorView.updateListener.of((update)=>{
                        const { from, to } = update.state.selection.main;
                        onSelectionChange?.(target, from, to);
                        const expressionValue = update.state.doc.toString();
                        onValueChange(expressionValue);
                    })
                ]
            });
            const view = new _codemirror_view__WEBPACK_IMPORTED_MODULE_7__.EditorView({
                state: startState,
                parent: containerRef.current
            });
            viewRef.current = view;
            view.focus();
        }
    }, [
        metricNames,
        onValueChange,
        onExecuteQuery,
        placeholder,
        value,
        onSelectionChange,
        target,
        pfTheme
    ]);
    const handleBlur = ()=>{
        if (viewRef.current !== null) {
            (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.closeCompletion)(viewRef.current);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_11__.Form, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_11__.FormGroup, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_13__.TextInputGroup, {
                    validated: errorMessage ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_14__.ValidatedOptions.error : undefined,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                                gap: '0.5rem'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                ref: containerRef,
                                onBlur: handleBlur,
                                style: {
                                    width: '100%',
                                    marginTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_global_spacer_xs.var
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_13__.TextInputGroupUtilities, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                variant: "plain",
                                onClick: onClear,
                                "aria-label": t('Clear query'),
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_close_icon__WEBPACK_IMPORTED_MODULE_15__.CloseIcon, {})
                            })
                        })
                    ]
                }),
                errorMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_11__.FormHelperText, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_12__.HelperText, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_12__.HelperTextItem, {
                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_16__.ExclamationCircleIcon, {}),
                            variant: _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_14__.ValidatedOptions.error,
                            children: errorMessage
                        })
                    })
                })
            ]
        })
    });
};


/***/ },

/***/ "./shared/hooks/usePatternflyTheme.ts"
/*!********************************************!*\
  !*** ./shared/hooks/usePatternflyTheme.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePatternFlyTheme: () => (/* binding */ usePatternFlyTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PF_THEME_DARK_CLASS_V6 = 'pf-v6-theme-dark';
const PF_THEME_DARK_CLASS_V5 = 'pf-v5-theme-dark';
const PF_THEME_DARK_CLASS_V4 = 'pf-theme-dark';
/**
 * The @openshift-console/dynamic-plugin-sdk package does not expose the
 * theme setting of the user preferences, therefore check if the root
 * <html> element has the PatternFly css class set for the dark theme.
 */ function getTheme() {
    const classList = document.documentElement.classList;
    if (classList.contains(PF_THEME_DARK_CLASS_V4) || classList.contains(PF_THEME_DARK_CLASS_V5) || classList.contains(PF_THEME_DARK_CLASS_V6)) {
        return 'dark';
    }
    return 'light';
}
/**
 * In case the user sets "system default" theme in the user preferences,
 * update the theme if the system theme changes.
 */ function usePatternFlyTheme() {
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getTheme());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const reloadTheme = ()=>setTheme(getTheme());
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener('change', reloadTheme);
        return ()=>mq.removeEventListener('change', reloadTheme);
    }, [
        setTheme
    ]);
    return {
        theme
    };
}


/***/ }

}]);
//# sourceMappingURL=features_metrics_components_promql-expression-input_tsx-chunk.js.map