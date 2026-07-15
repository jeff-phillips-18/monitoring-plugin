"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_alerts_components_SilenceForm_tsx-shared_console_console-shared_src_components_loadi-325f74"],{

/***/ "./features/alerts/components/SilenceForm.tsx"
/*!****************************************************!*\
  !*** ./features/alerts/components/SilenceForm.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilenceForm: () => (/* binding */ SilenceForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Checkbox */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Checkbox/@patternfly/react-core/dist/dynamic/components/Checkbox");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DescriptionList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DescriptionList/@patternfly/react-core/dist/dynamic/components/DescriptionList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextArea */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextArea/@patternfly/react-core/dist/dynamic/components/TextArea");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/constants */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/constants/@patternfly/react-core/dist/dynamic/helpers/constants");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_minus_circle_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/minus-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/minus-circle-icon/@patternfly/react-icons/dist/dynamic/icons/minus-circle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/plus-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/plus-circle-icon/@patternfly/react-icons/dist/dynamic/icons/plus-circle-icon");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_sm.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/clone.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/cloneDeep.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/set.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/trim.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/datetime/prometheus */ "./shared/console/console-shared/src/datetime/prometheus.ts");
/* harmony import */ var _shared_console_utils_link__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/console/utils/link */ "./shared/console/utils/link.tsx");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");















































const durationOff = '-';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// TODO: These will be available in future versions of the plugin SDK
const getUser = (state)=>state.sdkCore?.user;
const pad = (i)=>i < 10 ? `0${i}` : String(i);
const formatDate = (d)=>`${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const DatetimeTextInput = (props)=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_31__.useTranslation)("plugin__monitoring-plugin");
    const pattern = '\\d{4}/(0?[1-9]|1[012])/(0?[1-9]|[12]\\d|3[01]) (0?\\d|1\\d|2[0-3]):[0-5]\\d(:[0-5]\\d)?';
    const isValid = new RegExp(`^${pattern}$`).test(String(props.value));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, {
        content: props.tooltip ? props.tooltip : isValid ? formatDate(new Date(props.value)) : t('Invalid date / time'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
            ...props,
            "aria-label": t('Datetime'),
            "data-test-id": "silence-datetime",
            validated: isValid || !!props.isDisabled ? 'default' : 'error',
            pattern: pattern,
            placeholder: "YYYY/MM/DD hh:mm:ss"
        })
    });
};
const NegativeMatcherHelp = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_31__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_6__.DescriptionList, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_6__.DescriptionListDescription, {
                children: t('Select the negative matcher option to update the label value to a not equals matcher.')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_6__.DescriptionListDescription, {
                children: t('If both the RegEx and negative matcher options are selected, the label value must not match the regular expression.')
            })
        ]
    });
};
const SilenceForm_ = ({ defaults, Info, title, isNamespaced })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_31__.useTranslation)("plugin__monitoring-plugin");
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_39__.useMonitoringNamespace)();
    const { prometheus } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_43__.useMonitoring)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_33__.useNavigate)();
    const isPageNamespaceLocked = isNamespaced && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__.ALL_NAMESPACES_KEY;
    const durations = (0,react__WEBPACK_IMPORTED_MODULE_30__.useMemo)(()=>{
        return {
            [durationOff]: durationOff,
            '30m': t('30m'),
            '1h': t('1h'),
            '2h': t('2h'),
            '6h': t('6h'),
            '12h': t('12h'),
            '1d': t('1d'),
            '2d': t('2d'),
            '1w': t('1w')
        };
    }, [
        t
    ]);
    const now = new Date();
    // Default to starting now if we have no default start time or if the default start time is in the
    // past (because Alertmanager will change a time in the past to the current time on save anyway)
    const defaultIsStartNow = lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](defaults.startsAt) || new Date(defaults.startsAt) < now;
    let defaultDuration = lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](defaults.endsAt) ? '2h' : durationOff;
    // If we have both a default start and end time and the difference between them exactly matches
    // one of the duration options, automatically select that option in the duration menu
    if (!defaultIsStartNow && defaults.startsAt && defaults.endsAt) {
        const durationFromDefaults = (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_35__.formatPrometheusDuration)(Date.parse(defaults.endsAt) - Date.parse(defaults.startsAt));
        if (Object.keys(durations).includes(durationFromDefaults)) {
            defaultDuration = durationFromDefaults;
        }
    }
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_38__.usePerspective)();
    const [isOpen, setIsOpen, , setClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_37__.useBoolean)(false);
    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaults.comment ?? '');
    const [createdBy, setCreatedBy] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaults.createdBy ?? '');
    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaultDuration);
    const [endsAt, setEndsAt] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaults.endsAt ?? formatDate(new Date(new Date(now).setHours(now.getHours() + 2))));
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)();
    const [inProgress, setInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false);
    const [isStartNow, setIsStartNow] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaultIsStartNow);
    // Since the namespace matcher MUST be the same as the namespace the request is being
    // made in, we remove the namespace value here and re-add it before sending the request
    const [matchers, setMatchers] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)((isPageNamespaceLocked ? defaults.matchers?.filter((matcher)=>matcher.name !== 'namespace') : defaults.matchers) ?? [
        {
            isRegex: false,
            isEqual: true,
            name: '',
            value: ''
        }
    ]);
    const [startsAt, setStartsAt] = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(defaults.startsAt ?? formatDate(now));
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_32__.useSelector)(getUser);
    const { trigger: refetchSilencesAndAlerts } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_42__.useAlerts)();
    (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(()=>{
        if (!createdBy && user) {
            setCreatedBy(user.metadata?.name || user.username);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        user
    ]);
    const getEndsAtValue = ()=>{
        const startsAtDate = Date.parse(startsAt);
        return startsAtDate ? formatDate(new Date(startsAtDate + (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_35__.parsePrometheusDuration)(duration))) : '-';
    };
    const setMatcherField = (i, field, v)=>{
        const newMatchers = lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](matchers);
        lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](newMatchers, [
            i,
            field
        ], v);
        setMatchers(newMatchers);
    };
    const addMatcher = ()=>{
        setMatchers([
            ...matchers,
            {
                isRegex: false,
                isEqual: false,
                name: '',
                value: ''
            }
        ]);
    };
    const removeMatcher = (i)=>{
        const newMatchers = lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](matchers);
        newMatchers.splice(i, 1);
        // If all matchers have been removed, add back a single blank matcher
        setMatchers(lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](newMatchers) ? [
            {
                isRegex: false,
                isEqual: false,
                name: '',
                value: ''
            }
        ] : newMatchers);
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        // Don't allow comments to only contain whitespace
        if (lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](comment) === '') {
            setError(t('Comment is required.'));
            return;
        }
        const url = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__.getAlertmanagerSilencesUrl)({
            prometheus,
            namespace,
            useTenancyPath: isPageNamespaceLocked
        });
        if (!url) {
            setError(t('Alertmanager URL not set'));
            return;
        }
        setInProgress(true);
        const saveStartsAt = isStartNow ? new Date() : new Date(startsAt);
        const saveEndsAt = duration === durationOff ? new Date(endsAt) : new Date(saveStartsAt.getTime() + (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_35__.parsePrometheusDuration)(duration));
        const body = {
            comment,
            createdBy,
            endsAt: saveEndsAt.toISOString(),
            id: defaults.id,
            matchers: isPageNamespaceLocked ? matchers.concat({
                name: 'namespace',
                value: namespace,
                isRegex: false,
                isEqual: true
            }) : matchers,
            startsAt: saveStartsAt.toISOString()
        };
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON.post((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__.getAlertmanagerSilencesUrl)({
            prometheus,
            namespace,
            useTenancyPath: isPageNamespaceLocked
        }), body).then(({ silenceID })=>{
            setError(undefined);
            refetchSilencesAndAlerts();
            navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_38__.getSilenceAlertUrl)(perspective, silenceID, namespace));
        }).catch((err)=>{
            let errorMessage = typeof lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](err, 'json') === 'string' ? lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](err, 'json') : err.message || t('Error saving Silence');
            if (errorMessage === 'Forbidden') {
                errorMessage = t('Forbidden: Missing permissions for silences');
            }
            setError(errorMessage);
            setInProgress(false);
        });
    };
    const selectOptions = lodash_es__WEBPACK_IMPORTED_MODULE_27__["default"](durations, (displayText, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_13__.SelectOption, {
            value: key,
            children: displayText
        }, key));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_12__.PageSection, {
                hasBodyWrapper: false,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_16__.Title, {
                        headingLevel: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperText, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItem, {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.Description,
                            children: t('Silences temporarily mute alerts based on a set of label selectors that you define. Notifications will not be sent for alerts that match all the listed values or regular expressions.')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_7__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_12__.PageSection, {
                hasBodyWrapper: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    onSubmit: onSubmit,
                    maxWidth: "950px",
                    children: [
                        Info && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Info, {}),
                        error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.Alert, {
                            variant: "danger",
                            isInline: true,
                            title: error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_16__.Title, {
                            headingLevel: "h2",
                            children: t('Duration')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                            hasGutter: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    sm: 4,
                                    md: 5,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        label: t('Silence alert from...'),
                                        children: isStartNow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatetimeTextInput, {
                                            isDisabled: true,
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceFrom,
                                            value: t('Now'),
                                            tooltip: formatDate(new Date())
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatetimeTextInput, {
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceFrom,
                                            isRequired: true,
                                            onChange: (_event, value)=>setStartsAt(value),
                                            value: startsAt
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    sm: 4,
                                    md: 2,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        label: t('For...'),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_13__.Select, {
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceFor,
                                            isOpen: isOpen,
                                            onSelect: (_event, value)=>{
                                                setDuration(value);
                                                setClosed();
                                            },
                                            toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_11__.MenuToggle, {
                                                    ref: toggleRef,
                                                    onClick: setIsOpen,
                                                    isExpanded: isOpen,
                                                    isFullWidth: true,
                                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceForToggle,
                                                    children: t(duration)
                                                }),
                                            onOpenChange: setIsOpen,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_13__.SelectList, {
                                                children: selectOptions
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    sm: 4,
                                    md: 5,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        label: t('Until...'),
                                        children: duration === durationOff ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatetimeTextInput, {
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceUntil,
                                            isRequired: true,
                                            onChange: (_event, value)=>setEndsAt(value),
                                            value: endsAt
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatetimeTextInput, {
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.SilenceUntil,
                                            isDisabled: true,
                                            value: isStartNow ? t('{{duration}} from now', {
                                                duration: durations[duration]
                                            }) : getEndsAtValue(),
                                            tooltip: isStartNow ? getEndsAtValue() : undefined
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                            role: "group",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                id: "start-immediately",
                                label: t('Start immediately'),
                                isChecked: isStartNow,
                                onChange: (e)=>setIsStartNow(e.currentTarget.checked),
                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.StartImmediately
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_16__.Title, {
                            headingLevel: "h2",
                            children: t('Alert labels')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperText, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItem, {
                                    variant: "indeterminate",
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.AlertLabelsDescription,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_i18next__WEBPACK_IMPORTED_MODULE_31__.Trans, {
                                        t: t,
                                        children: [
                                            "Alerts with labels that match these selectors will be silenced instead of firing. Label values can be matched exactly or with a",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_link__WEBPACK_IMPORTED_MODULE_36__.ExternalLink, {
                                                href: "https://github.com/google/re2/wiki/Syntax",
                                                text: t('regular expression')
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        isPageNamespaceLocked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                            sm: 12,
                            md: 4,
                            hasGutter: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        label: t('Label name'),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
                                            "aria-label": t('Label name'),
                                            isRequired: true,
                                            placeholder: t('Name'),
                                            value: 'namespace',
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.LabelName,
                                            isDisabled: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        label: t('Label value'),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
                                            "aria-label": t('Label value'),
                                            isRequired: true,
                                            placeholder: t('Value'),
                                            value: namespace,
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.LabelValue,
                                            isDisabled: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                        isInline: true,
                                        label: t('Select all that apply:'),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                                role: "group",
                                                isInline: true,
                                                style: {
                                                    marginTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_global_spacer_sm.var
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                        id: `regex-namespace`,
                                                        label: t('RegEx'),
                                                        isChecked: false,
                                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.Regex,
                                                        isDisabled: true
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, {
                                                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NegativeMatcherHelp, {}),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                            id: `negative-matcher-namespace`,
                                                            label: t('Negative matcher'),
                                                            isChecked: false,
                                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.NegativeMatcherCheckbox,
                                                            isDisabled: true
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, {
                                                content: t('Remove'),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_minus_circle_icon__WEBPACK_IMPORTED_MODULE_20__.MinusCircleIcon, {}),
                                                    type: "button",
                                                    "aria-label": t('Remove'),
                                                    variant: "plain",
                                                    isInline: true,
                                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.RemoveLabel,
                                                    isDisabled: true
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, 'namespace'),
                        lodash_es__WEBPACK_IMPORTED_MODULE_27__["default"](matchers, (matcher, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                sm: 12,
                                md: 4,
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                            label: t('Label name'),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
                                                "aria-label": t('Label name'),
                                                isRequired: true,
                                                onChange: (_e, v)=>typeof _e === 'string' ? setMatcherField(i, 'name', _e) : setMatcherField(i, 'name', v),
                                                placeholder: t('Name'),
                                                value: matcher.name,
                                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.LabelName
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                            label: t('Label value'),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
                                                "aria-label": t('Label value'),
                                                isRequired: true,
                                                onChange: (_e, v)=>typeof _e === 'string' ? setMatcherField(i, 'value', _e) : setMatcherField(i, 'value', v),
                                                placeholder: t('Value'),
                                                value: matcher.value,
                                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.LabelValue
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                            isInline: true,
                                            label: t('Select all that apply:'),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                                                    role: "group",
                                                    isInline: true,
                                                    style: {
                                                        marginTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_global_spacer_sm.var
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                            id: `regex-${i}`,
                                                            label: t('RegEx'),
                                                            isChecked: matcher.isRegex,
                                                            onChange: (e)=>setMatcherField(i, 'isRegex', e.currentTarget.checked),
                                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.Regex
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, {
                                                            content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NegativeMatcherHelp, {}),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                                id: `negative-matcher-${i}`,
                                                                label: t('Negative matcher'),
                                                                isChecked: matcher.isEqual === false,
                                                                onChange: (e)=>setMatcherField(i, 'isEqual', !e.currentTarget.checked),
                                                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.NegativeMatcherCheckbox
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, {
                                                    content: t('Remove'),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_minus_circle_icon__WEBPACK_IMPORTED_MODULE_20__.MinusCircleIcon, {}),
                                                        type: "button",
                                                        onClick: ()=>removeMatcher(i),
                                                        "aria-label": t('Remove'),
                                                        variant: "plain",
                                                        isInline: true,
                                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.RemoveLabel
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, i)),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_10__.Icon, {
                                    isInline: true,
                                    size: "lg",
                                    iconSize: "md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_21__.PlusCircleIcon, {})
                                }),
                                onClick: addMatcher,
                                type: "button",
                                variant: "link",
                                isInline: true,
                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.AddLabel,
                                children: t('Add label')
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_16__.Title, {
                            headingLevel: "h2",
                            children: t('Info')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                            label: t('Creator'),
                            isRequired: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_15__.TextInput, {
                                    "aria-label": t('Creator'),
                                    isRequired: true,
                                    onChange: (_e, v)=>typeof _e === 'string' ? setCreatedBy(_e) : setCreatedBy(v),
                                    value: createdBy,
                                    validated: error && !createdBy ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_18__.ValidatedOptions.error : _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_18__.ValidatedOptions.default,
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.Creator
                                }),
                                error && !createdBy && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperText, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItem, {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_19__.ExclamationCircleIcon, {}),
                                            variant: _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItemVariant.error,
                                            children: t('Required')
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                            label: t('Comment'),
                            isRequired: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextArea__WEBPACK_IMPORTED_MODULE_14__.TextArea, {
                                    "aria-label": t('Comment'),
                                    isRequired: true,
                                    onChange: (_e, v)=>typeof _e === 'string' ? setComment(_e) : setComment(v),
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilencesPageFormTestIDs.Comment,
                                    value: comment,
                                    validated: error && !comment ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_18__.ValidatedOptions.error : _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_18__.ValidatedOptions.default
                                }),
                                error && !comment && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperText, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItem, {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_19__.ExclamationCircleIcon, {}),
                                            variant: _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_9__.HelperTextItemVariant.error,
                                            children: t('Required')
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_2__.ActionGroup, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    type: "submit",
                                    variant: "primary",
                                    isDisabled: inProgress,
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.SilenceButton,
                                    children: t('Silence')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    onClick: ()=>navigate(-1),
                                    variant: "secondary",
                                    isDisabled: inProgress,
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_40__.DataTestIDs.CancelButton,
                                    children: t('Cancel')
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const SilenceForm = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_34__["default"])(SilenceForm_);


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx"
/*!****************************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx"
/*!*****************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/LoadingBox.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./shared/console/utils/link.tsx"
/*!***************************************!*\
  !*** ./shared/console/utils/link.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalLink: () => (/* binding */ ExternalLink),
/* harmony export */   LinkifyExternal: () => (/* binding */ LinkifyExternal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-linkify */ "../node_modules/react-linkify/dist/Linkify.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon");





const ExternalLink = ({ children, href, text, additionalClassName = '', dataTestID, stopPropagation })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "link",
        component: "a",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            size: "sm",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_4__.ExternalLinkAltIcon, {})
        }),
        className: additionalClassName,
        href: href,
        target: "_blank",
        iconPosition: "end",
        rel: "noopener noreferrer",
        "data-test-id": dataTestID,
        ...stopPropagation ? {
            onClick: (e)=>e.stopPropagation()
        } : {},
        isInline: true,
        children: children || text
    });
// Open links in a new window and set noopener/noreferrer.
const LinkifyExternal = ({ children })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_linkify__WEBPACK_IMPORTED_MODULE_1__["default"], {
        properties: {
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        children: children
    });
LinkifyExternal.displayName = 'LinkifyExternal';


/***/ },

/***/ "./shared/hooks/useAlerts.ts"
/*!***********************************!*\
  !*** ./shared/hooks/useAlerts.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAlerts: () => (/* binding */ useAlerts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/thunks */ "./shared/store/thunks.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _useMonitoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/alerts/components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _usePerspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");










const POLLING_INTERVAL_MS = 15 * 1000;
// 15 seconds
const useAlerts = (props)=>{
    // Retrieve external information which dictates which alerts to load and use
    const { plugin } = (0,_useMonitoring__WEBPACK_IMPORTED_MODULE_6__.useMonitoring)();
    const { namespace } = (0,_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__.useMonitoringNamespace)();
    const { prometheus, useAlertsTenancy, accessCheckLoading } = (0,_useMonitoring__WEBPACK_IMPORTED_MODULE_6__.useMonitoring)();
    const overriddenNamespace = props?.dontUseTenancy || !useAlertsTenancy ? _utils_utils__WEBPACK_IMPORTED_MODULE_4__.ALL_NAMESPACES_KEY : namespace;
    // Start polling for alerts, rules, and silences
    const { trigger } = useAlertsPoller({
        namespace: overriddenNamespace,
        prometheus,
        useAlertsTenancy,
        accessCheckLoading
    });
    // Retrieve alerts, rules and silences from the store, which is populated in the poller
    const alerts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.alerts);
    const rulesAlertLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]);
    const silences = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.silences);
    const rules = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.rules);
    // Find all labels needed within our list pages
    const additionalAlertSourceLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.getAdditionalSources)(alerts, _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.alertSource), [
        alerts
    ]);
    const additionalRuleSourceLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.getAdditionalSources)(rules, _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.alertingRuleSource), [
        rules
    ]);
    const alertClusterLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const clusterSet = new Set();
        alerts?.forEach((alert)=>{
            const clusterName = alert.labels?.cluster;
            if (clusterName) {
                clusterSet.add(clusterName);
            }
        });
        const clusterArray = Array.from(clusterSet);
        return clusterArray.sort();
    }, [
        alerts
    ]);
    const silenceClusterLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const clusterSet = new Set();
        silences?.data?.forEach((silence)=>{
            const clusterName = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.silenceCluster)(silence);
            if (clusterName) {
                clusterSet.add(clusterName);
            }
        });
        const clusterArray = Array.from(clusterSet);
        return clusterArray.sort();
    }, [
        silences
    ]);
    return {
        trigger,
        additionalAlertSourceLabels,
        additionalRuleSourceLabels,
        alertClusterLabels,
        silenceClusterLabels,
        rulesAlertLoading,
        rules,
        silences,
        alerts
    };
};
const useAlertsPoller = ({ namespace, prometheus, useAlertsTenancy, accessCheckLoading })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const [customExtensions] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.isAlertingRulesSource);
    const alertsSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>customExtensions.filter((extension)=>extension.properties.contextId === (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getAlertingContextId)({
                prometheus,
                namespace
            })).map((extension)=>extension.properties), [
        customExtensions,
        prometheus,
        namespace
    ]);
    const rulesUrl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.buildPrometheusUrl)({
        prometheusUrlProps: {
            endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.PrometheusEndpoint.RULES,
            namespace
        },
        basePath: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getPrometheusBasePath)({
            prometheus,
            useTenancyPath: useAlertsTenancy
        })
    });
    const silencesUrl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getAlertmanagerSilencesUrl)({
        prometheus,
        namespace,
        useTenancyPath: useAlertsTenancy
    });
    const fetchDispatch = ()=>dispatch((0,_store_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchAlertingData)(prometheus, namespace, rulesUrl, alertsSource, silencesUrl, !accessCheckLoading));
    // Wait to poll until we know which endpoint to use
    const dependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            namespace,
            rulesUrl,
            silencesUrl,
            useAlertsTenancy,
            accessCheckLoading,
            alertsSource
        ], [
        namespace,
        rulesUrl,
        silencesUrl,
        useAlertsTenancy,
        accessCheckLoading,
        alertsSource
    ]);
    (0,_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_5__.usePoll)(fetchDispatch, POLLING_INTERVAL_MS, dependencies);
    return {
        trigger: fetchDispatch
    };
};


/***/ },

/***/ "./shared/store/fetch-alerts.tsx"
/*!***************************************!*\
  !*** ./shared/store/fetch-alerts.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAlerts: () => (/* binding */ fetchAlerts)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);

// Disable client-side timeout (-1) to let the backend control query timeouts
const NO_TIMEOUT = -1;
// Merges Prometheus monitoring alerts with external sources
const fetchAlerts = async (prometheusURL, externalAlertsFetch, namespace)=>{
    if (!externalAlertsFetch || externalAlertsFetch.length === 0) {
        return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT);
    }
    const resolvedExternalAlertsSources = externalAlertsFetch.map((extensionProperties)=>({
            id: extensionProperties.id,
            fetch: extensionProperties.getAlertingRules
        }));
    const sourceIds = [
        'prometheus',
        ...resolvedExternalAlertsSources.map((source)=>source.id)
    ];
    try {
        const groups = await Promise.allSettled([
            (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT),
            ...resolvedExternalAlertsSources.map((source)=>source.fetch(namespace))
        ]).then((results)=>results.map((result, i)=>({
                    sourceId: sourceIds[i],
                    alerts: result
                })).flatMap((result)=>result.alerts.status === 'fulfilled' && result.alerts.value?.data?.groups ? result.alerts.value.data.groups.map((group)=>({
                        ...group,
                        rules: [
                            ...group.rules.map((rule)=>({
                                    ...rule,
                                    sourceId: result.sourceId
                                }))
                        ]
                    })) : []));
        return {
            data: {
                groups
            },
            status: 'success'
        };
    } catch  {
        return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT);
    }
};


/***/ },

/***/ "./shared/store/thunks.ts"
/*!********************************!*\
  !*** ./shared/store/thunks.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAlertingData: () => (/* binding */ fetchAlertingData)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/store/actions.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _fetch_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-alerts */ "./shared/store/fetch-alerts.tsx");




const fetchAlertingData = (prometheus, namespace, rulesUrl, // eslint-disable-next-line @typescript-eslint/no-explicit-any
alertsSource, silencesUrl, active)=>// eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (dispatch, getState)=>{
        if (!active) {
            return;
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetLoading)(prometheus, namespace));
        const [rulesResponse, silencesResponse] = await Promise.allSettled([
            (0,_fetch_alerts__WEBPACK_IMPORTED_MODULE_3__.fetchAlerts)(rulesUrl, alertsSource, namespace),
            (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(silencesUrl, 'get')
        ]);
        if (rulesResponse.status === 'rejected') {
            if (rulesResponse.reason?.response) {
                // Set the error message to be the RBAC denial reason
                const responseText = await rulesResponse.reason?.response?.text();
                if (responseText) {
                    rulesResponse.reason.message = responseText;
                }
            }
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetErrored)(prometheus, namespace, rulesResponse.reason));
        } else {
            const { alerts, rules } = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getAlertsAndRules)(rulesResponse.value.data);
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetRulesLoaded)(prometheus, namespace, rules, alerts));
        }
        if (silencesResponse.status === 'rejected') {
            if (silencesResponse.reason?.response) {
                // Set the error message to be the RBAC denial reason
                const responseText = await silencesResponse.reason?.response?.text();
                if (responseText) {
                    silencesResponse.reason.message = responseText;
                }
            }
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetSilencesErrored)(prometheus, namespace, silencesResponse.reason));
        } else {
            const silences = silencesResponse.value.map((silence)=>({
                    ...silence,
                    name: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getSilenceName)(silence)
                }));
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetSilencesLoaded)(prometheus, namespace, silences));
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingApplySilences)(prometheus, namespace));
    };


/***/ }

}]);
//# sourceMappingURL=features_alerts_components_SilenceForm_tsx-shared_console_console-shared_src_components_loadi-325f74-chunk.js.map