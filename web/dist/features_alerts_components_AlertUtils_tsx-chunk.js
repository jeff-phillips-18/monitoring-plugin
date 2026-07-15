"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_alerts_components_AlertUtils_tsx"],{

/***/ "./features/alerts/components/AlertUtils.tsx"
/*!***************************************************!*\
  !*** ./features/alerts/components/AlertUtils.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertState: () => (/* binding */ AlertState),
/* harmony export */   AlertStateDescription: () => (/* binding */ AlertStateDescription),
/* harmony export */   AlertStateIcon: () => (/* binding */ AlertStateIcon),
/* harmony export */   Graph: () => (/* binding */ Graph),
/* harmony export */   NamespaceGroupVersionKind: () => (/* binding */ NamespaceGroupVersionKind),
/* harmony export */   PopoverField: () => (/* binding */ PopoverField),
/* harmony export */   SeverityBadge: () => (/* binding */ SeverityBadge),
/* harmony export */   SeverityCounts: () => (/* binding */ SeverityCounts),
/* harmony export */   SeverityHelp: () => (/* binding */ SeverityHelp),
/* harmony export */   SeverityIcon: () => (/* binding */ SeverityIcon),
/* harmony export */   SilencesNotLoadedWarning: () => (/* binding */ SilencesNotLoadedWarning),
/* harmony export */   SourceHelp: () => (/* binding */ SourceHelp),
/* harmony export */   StateTimestamp: () => (/* binding */ StateTimestamp),
/* harmony export */   alertCluster: () => (/* binding */ alertCluster),
/* harmony export */   alertSource: () => (/* binding */ alertSource),
/* harmony export */   alertingRuleSource: () => (/* binding */ alertingRuleSource),
/* harmony export */   applySilences: () => (/* binding */ applySilences),
/* harmony export */   getAdditionalSources: () => (/* binding */ getAdditionalSources),
/* harmony export */   getAlertStateKey: () => (/* binding */ getAlertStateKey),
/* harmony export */   getSourceKey: () => (/* binding */ getSourceKey),
/* harmony export */   isActionWithCallback: () => (/* binding */ isActionWithCallback),
/* harmony export */   isActionWithHref: () => (/* binding */ isActionWithHref),
/* harmony export */   isRuleSilenced: () => (/* binding */ isRuleSilenced),
/* harmony export */   rowFilter: () => (/* binding */ rowFilter),
/* harmony export */   severityRowFilter: () => (/* binding */ severityRowFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DescriptionList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DescriptionList/@patternfly/react-core/dist/dynamic/components/DescriptionList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Popover */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Popover/@patternfly/react-core/dist/dynamic/components/Popover");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bell_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/bell-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/bell-icon/@patternfly/react-icons/dist/dynamic/icons/bell-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/bell-slash-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/bell-slash-icon/@patternfly/react-icons/dist/dynamic/icons/bell-slash-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-triangle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-triangle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-triangle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/info-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/info-circle-icon/@patternfly/react-icons/dist/dynamic/icons/info-circle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_outlined_bell_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/outlined-bell-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/outlined-bell-icon/@patternfly/react-icons/dist/dynamic/icons/outlined-bell-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_severity_undefined_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/severity-undefined-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/severity-undefined-icon/@patternfly/react-icons/dist/dynamic/icons/severity-undefined-icon");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_danger_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_info_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_warning_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_disabled.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_severity_undefined_default.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_disabled.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_subtle.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_border_color_status_info_default.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/countBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/max.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/startCase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/console/models */ "./shared/console/models/index.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/components/query-browser/query-browser */ "./shared/components/query-browser/query-browser.tsx");
/* harmony import */ var _shared_types_types__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/types/types */ "./shared/types/types.ts");




























const getAdditionalSources = (data, itemSource)=>{
    if (data) {
        const additionalSources = new Set();
        data.forEach((item)=>{
            const source = itemSource(item);
            if (source !== _shared_types_types__WEBPACK_IMPORTED_MODULE_36__.AlertSource.Platform && source !== _shared_types_types__WEBPACK_IMPORTED_MODULE_36__.AlertSource.User) {
                additionalSources.add(source);
            }
        });
        return Array.from(additionalSources).map((item)=>({
                value: item,
                label: lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](item)
            }));
    }
    return [];
};
const alertingRuleSource = (rule)=>{
    if (rule.sourceId === undefined || rule.sourceId === 'prometheus') {
        return rule.labels?.prometheus === 'openshift-monitoring/k8s' ? _shared_types_types__WEBPACK_IMPORTED_MODULE_36__.AlertSource.Platform : _shared_types_types__WEBPACK_IMPORTED_MODULE_36__.AlertSource.User;
    }
    return rule.sourceId;
};
const alertSource = (alert)=>alertingRuleSource(alert.rule);
const alertCluster = (alert)=>alert.labels?.cluster ?? '';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SilencesNotLoadedWarning = ({ silencesLoadError })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_5__.Alert, {
        isInline: true,
        title: t('Error loading silences from Alertmanager. Some of the alerts below may actually be silenced.'),
        variant: "warning",
        children: silencesLoadError.json?.error || silencesLoadError.message
    });
};
const isActionWithHref = (action)=>'href' in action.cta;
const isActionWithCallback = (action)=>typeof action.cta === 'function';
const getSeverityKey = (severity, t)=>{
    switch(severity){
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical:
            return t('Critical');
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info:
            return t('Info');
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning:
            return t('Warning');
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None:
            return t('None');
        default:
            return severity;
    }
};
const SeverityIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(({ severity })=>{
    switch(severity){
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_10__.ExclamationCircleIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__.t_global_color_status_danger_default.var
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11__.ExclamationTriangleIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__.t_global_color_status_warning_default.var
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_info_circle_icon__WEBPACK_IMPORTED_MODULE_12__.InfoCircleIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_16__.t_global_color_status_info_default.var
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_severity_undefined_icon__WEBPACK_IMPORTED_MODULE_14__.SeverityUndefinedIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_19__.t_global_icon_color_severity_undefined_default.var
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_bell_icon__WEBPACK_IMPORTED_MODULE_8__.BellIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_global_border_color_status_info_default.var
            });
    }
});
SeverityIcon.displayName = 'SeverityIcon';
const AlertState = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(({ state })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    const icon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertStateIcon, {
        state: state
    });
    return icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        style: {
            color: state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced ? _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_20__.t_global_text_color_disabled.var : undefined
        },
        children: [
            icon,
            " ",
            getAlertStateKey(state, t)
        ]
    }) : null;
});
AlertState.displayName = 'AlertState';
const AlertStateIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(({ state })=>{
    switch(state){
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_bell_icon__WEBPACK_IMPORTED_MODULE_8__.BellIcon, {});
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Pending:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_outlined_bell_icon__WEBPACK_IMPORTED_MODULE_13__.OutlinedBellIcon, {});
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_9__.BellSlashIcon, {
                color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_18__.t_global_icon_color_disabled.var
            });
        default:
            return null;
    }
});
AlertStateIcon.displayName = 'AlertStateIcon';
const getAlertStateKey = (state, t)=>{
    switch(state){
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing:
            return t('Firing');
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Pending:
            return t('Pending');
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced:
            return t('Silenced');
        default:
            return t('Not Firing');
    }
};
const AlertStateDescription = ({ alert })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    if (alert && !lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](alert.silencedBy)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateTimestamp, {
            text: t('Ends'),
            timestamp: lodash_es__WEBPACK_IMPORTED_MODULE_27__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](alert.silencedBy, 'endsAt'))
        });
    }
    if (alert && alert.activeAt) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateTimestamp, {
            text: t('Since'),
            timestamp: alert.activeAt
        });
    }
    return null;
};
const StateTimestamp = ({ text, timestamp })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__.t_global_text_color_subtle.var
        },
        children: [
            text,
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.Timestamp, {
                timestamp: timestamp,
                className: "pf-v6-u-display-inline"
            })
        ]
    });
const SeverityBadge = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_29__.memo)(({ severity, count })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    if (lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](severity)) return null;
    const labelText = count ? count : getSeverityKey(severity, t);
    switch(severity){
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                status: "danger",
                children: labelText
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                status: "warning",
                children: labelText
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                status: "info",
                children: labelText
            });
        case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                variant: "outline",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_severity_undefined_icon__WEBPACK_IMPORTED_MODULE_14__.SeverityUndefinedIcon, {
                        color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_19__.t_global_icon_color_severity_undefined_default.var
                    }),
                    " ",
                    labelText
                ]
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                status: "custom",
                children: labelText
            });
    }
});
SeverityBadge.displayName = 'SeverityBadge';
const PopoverField = ({ bodyContent, label })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_6__.Popover, {
        headerContent: label,
        bodyContent: bodyContent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
            icon: label,
            variant: "plain"
        })
    });
const Graph = ({ filterLabels = undefined, formatSeriesTitle, query, ruleDuration })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_33__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_34__.useMonitoringNamespace)();
    // 3 times the rule's duration, but not less than 30 minutes
    const timespan = Math.max(3 * ruleDuration, 30 * 60) * 1000;
    const GraphLink = ()=>query && perspective !== 'acm' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_31__.Link, {
            "aria-label": t('Inspect'),
            to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_33__.getQueryBrowserUrl)({
                perspective,
                query,
                namespace
            }),
            children: t('Inspect')
        }) : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_35__.QueryBrowser, {
        defaultTimespan: timespan,
        filterLabels: filterLabels,
        formatSeriesTitle: formatSeriesTitle,
        GraphLink: GraphLink,
        pollInterval: Math.round(timespan / 120),
        queries: [
            query
        ]
    });
};
const SeverityHelp = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionList, {
        isCompact: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                            severity: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('The condition that triggered the alert could have a critical impact. The alert requires immediate attention when fired and is typically paged to an individual or to a critical response team.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                            severity: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('The alert provides a warning notification about something that might require attention in order to prevent a problem from occurring. Warnings are typically routed to a ticketing system for non-immediate review.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                            severity: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('The alert is provided for informational purposes only.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                            severity: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('The alert has no defined severity.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                            severity: "Custom"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('You can also create custom severity definitions for user workload alerts.')
                    })
                ]
            })
        ]
    });
};
const SourceHelp = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_30__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionList, {
        isCompact: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                            children: t('Platform: ')
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('Platform-level alerts relate only to OpenShift namespaces. OpenShift namespaces provide core OpenShift functionality.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListTerm, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                            children: t('User: ')
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_3__.DescriptionListDescription, {
                        children: t('User workload alerts relate to user-defined namespaces. These alerts are user-created and are customizable. User workload monitoring can be enabled post-installation to provide observability into your own services.')
                    })
                ]
            })
        ]
    });
};
const getSourceKey = (source, t)=>{
    switch(source){
        case 'Platform':
            return t('Platform');
        case 'User':
            return t('User');
        default:
            return source;
    }
};
const SeverityCounts = ({ alerts })=>{
    if (lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](alerts)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "-"
        });
    }
    const counts = lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](alerts, (a)=>{
        const { severity } = a.labels;
        return severity === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical || severity === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning ? severity : _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info;
    });
    const severities = [
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info
    ].filter((s)=>counts[s] > 0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: severities.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                content: `${counts[s]} ${s ? s[0].toUpperCase() + s.slice(1) : 'Unknown'} Alerts`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeverityBadge, {
                    severity: s,
                    count: counts[s]
                })
            }, s))
    });
};
const severityRowFilter = (t)=>({
        filter: (filter, alert)=>filter.selected?.includes(alert.labels?.severity) || lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](filter.selected),
        filterGroupName: t('Severity'),
        items: [
            {
                id: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical,
                title: t('Critical')
            },
            {
                id: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning,
                title: t('Warning')
            },
            {
                id: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info,
                title: t('Info')
            },
            {
                id: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None,
                title: t('None')
            }
        ],
        reducer: ({ labels })=>labels?.severity,
        type: 'alert-severity'
    });
const NamespaceGroupVersionKind = {
    group: 'core',
    kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_32__.NamespaceModel.kind,
    version: null
};
// This function looks to take a alerts and rules and then apply a set of silences to them
// This function mutates the arrays in place and then returns them
const applySilences = ({ alerts, silences, rules })=>{
    // We only need to check alerts that are either firing or silenced for if they are still silenced
    const firingAlerts = alerts.filter(isAlertFiring);
    applySilencesToAlerts({
        firingAlerts,
        silences
    });
    // Only check rules that are firing, silenced or pending to see if they are still silenced
    const firingRules = rules.filter(isRuleFiring);
    applySilencesToRules({
        firingRules,
        silences
    });
    // Add each alert that is being effected by a silence to the firingAlerts list on the silence
    const appliedSilences = silences.map((silence)=>{
        silence.firingAlerts = firingAlerts.filter((firingAlert)=>isAlertSilenced(firingAlert, silence));
        return silence;
    });
    return {
        alerts,
        silences: appliedSilences,
        rules
    };
};
// This fucntion mutates the firingAlerts parameter in place to set silence fields on each alert
const applySilencesToAlerts = ({ firingAlerts, silences })=>{
    // For each firing alert, store a list of the Silences that are silencing it
    // and set its state to show it is silenced
    firingAlerts.forEach((firingAlert)=>{
        firingAlert.silencedBy = silences.filter((silence)=>silence.status?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active && isAlertSilenced(firingAlert, silence));
        if (firingAlert.silencedBy.length) {
            firingAlert.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced;
            // Also set the state of Alerts in `rule.alerts`
            firingAlert.rule.alerts.forEach((ruleAlert)=>{
                if (firingAlert.silencedBy?.some((silence)=>isAlertSilenced(ruleAlert, silence))) {
                    ruleAlert.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced;
                }
            });
            if (firingAlert.rule.alerts.length !== 0 && firingAlert.rule.alerts.every((alert)=>alert.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced)) {
                firingAlert.rule.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Silenced;
                firingAlert.rule.silencedBy = silences.filter((silence)=>silence.status?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active && firingAlert.rule.alerts.some((alert)=>isAlertSilenced(alert, silence)));
            }
        }
    });
    return firingAlerts;
};
// This fucntion mutates the firingRules parameter in place to set silence fields on each rule
const applySilencesToRules = ({ firingRules, silences })=>{
    // For each firing alert, store a list of the Silences that are silencing it
    // and set its state to show it is silenced
    firingRules.forEach((firingRule)=>{
        firingRule.silencedBy = silences.filter((silence)=>silence.status?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active && isRuleSilenced(firingRule, silence));
        if (firingRule.silencedBy.length) {
            firingRule.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Silenced;
            firingRule.alerts.forEach((ruleAlert)=>{
                if (firingRule.silencedBy?.some((silence)=>isAlertSilenced(ruleAlert, silence))) {
                    ruleAlert.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced;
                }
            });
            if (firingRule.alerts.length !== 0 && firingRule.alerts.every((alert)=>alert.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced)) {
                firingRule.state = _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Silenced;
                firingRule.silencedBy = silences.filter((silence)=>silence.status?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active && firingRule.alerts.some((alert)=>isAlertSilenced(alert, silence)));
            }
        }
    });
    return firingRules;
};
const isAlertFiring = (alert)=>alert?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing || alert?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced;
const isRuleFiring = (rule)=>rule?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Firing || rule?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Silenced || rule?.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RuleStates.Pending;
// Determine if an Alert is silenced by a Silence (if all of the Silence's matchers match one of the
// Alert's labels)
const isAlertSilenced = (alert, silence)=>{
    return isAlertFiring(alert) && silence.matchers.every((matcher)=>{
        const alertValue = alert.labels[matcher.name] ?? '';
        const isMatch = matcher.isRegex ? new RegExp(`^${matcher.value}$`).test(alertValue) : alertValue === matcher.value;
        return matcher.isEqual === false && alertValue ? !isMatch : isMatch;
    });
};
// Determine if an Rule is silenced by a Silence (if all alerts for a rule are silenced)
const isRuleSilenced = (rule, silence)=>{
    return isRuleFiring(rule) && rule.alerts.every((alert)=>isAlertSilenced(alert, silence));
};
/**
 * Add 'rowFilter-' to a column key
 */ const rowFilter = (key)=>{
    return `row-filter-${key}`;
};


/***/ },

/***/ "./shared/console/models/index.ts"
/*!****************************************!*\
  !*** ./shared/console/models/index.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgenticRunModel: () => (/* binding */ AgenticRunModel),
/* harmony export */   ContainerModel: () => (/* binding */ ContainerModel),
/* harmony export */   DaemonSetModel: () => (/* binding */ DaemonSetModel),
/* harmony export */   DeploymentModel: () => (/* binding */ DeploymentModel),
/* harmony export */   JobModel: () => (/* binding */ JobModel),
/* harmony export */   NamespaceModel: () => (/* binding */ NamespaceModel),
/* harmony export */   NodeModel: () => (/* binding */ NodeModel),
/* harmony export */   PodModel: () => (/* binding */ PodModel),
/* harmony export */   PodMonitorModel: () => (/* binding */ PodMonitorModel),
/* harmony export */   ProjectModel: () => (/* binding */ ProjectModel),
/* harmony export */   ServiceModel: () => (/* binding */ ServiceModel),
/* harmony export */   ServiceMonitorModel: () => (/* binding */ ServiceMonitorModel),
/* harmony export */   StatefulSetModel: () => (/* binding */ StatefulSetModel)
/* harmony export */ });
const ServiceMonitorModel = {
    kind: 'ServiceMonitor',
    label: 'ServiceMonitor',
    labelKey: 'ServiceMonitor',
    labelPlural: 'ServiceMonitors',
    labelPluralKey: 'ServiceMonitors',
    apiGroup: 'monitoring.coreos.com',
    apiVersion: 'v1',
    abbr: 'SM',
    namespaced: true,
    crd: true,
    plural: 'servicemonitors',
    propagationPolicy: 'Foreground'
};
const PodMonitorModel = {
    kind: 'PodMonitor',
    label: 'PodMonitor',
    labelKey: 'PodMonitor',
    labelPlural: 'PodMonitors',
    labelPluralKey: 'PodMonitors',
    apiGroup: 'monitoring.coreos.com',
    apiVersion: 'v1',
    abbr: 'PM',
    namespaced: true,
    crd: true,
    plural: 'podmonitors',
    propagationPolicy: 'Foreground'
};
const ServiceModel = {
    kind: 'Service'
};
const PodModel = {
    namespaced: true,
    kind: 'Pod'
};
const ContainerModel = {
    kind: 'Container'
};
const DaemonSetModel = {
    namespaced: true,
    kind: 'DaemonSet'
};
const DeploymentModel = {
    namespaced: true,
    kind: 'Deployment'
};
const JobModel = {
    namespaced: true,
    kind: 'Job'
};
const NodeModel = {
    kind: 'Node'
};
const NamespaceModel = {
    apiVersion: 'v1',
    label: 'Namespace',
    labelKey: `${"plugin__monitoring-plugin"}~Namespace`,
    plural: 'namespaces',
    abbr: 'NS',
    kind: 'Namespace',
    id: 'namespace',
    labelPlural: 'Namespaces',
    labelPluralKey: 'Namespaces'
};
const ProjectModel = {
    apiVersion: 'v1',
    apiGroup: 'project.openshift.io',
    label: 'Project',
    labelKey: `${"plugin__monitoring-plugin"}~Project`,
    plural: 'projects',
    abbr: 'PR',
    kind: 'Project',
    id: 'project',
    labelPlural: 'Projects',
    labelPluralKey: 'Projects'
};
const StatefulSetModel = {
    namespaced: true,
    kind: 'StatefulSet'
};
const AgenticRunModel = {
    kind: 'AgenticRun',
    label: 'AgenticRun',
    labelKey: 'AgenticRun',
    labelPlural: 'AgenticRuns',
    labelPluralKey: 'AgenticRuns',
    apiGroup: 'agentic.openshift.io',
    apiVersion: 'v1alpha1',
    abbr: 'AGR',
    namespaced: true,
    crd: true,
    plural: 'agenticruns'
};


/***/ }

}]);
//# sourceMappingURL=features_alerts_components_AlertUtils_tsx-chunk.js.map