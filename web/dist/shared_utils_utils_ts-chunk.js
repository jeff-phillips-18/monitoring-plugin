"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_utils_utils_ts"],{

/***/ "./shared/constants/query-params.ts"
/*!******************************************!*\
  !*** ./shared/constants/query-params.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryParams: () => (/* binding */ QueryParams)
/* harmony export */ });
var QueryParams = /*#__PURE__*/ function(QueryParams) {
    QueryParams["Dashboard"] = "dashboard";
    QueryParams["RefreshInterval"] = "refreshInterval";
    QueryParams["TimeRange"] = "timeRange";
    QueryParams["EndTime"] = "endTime";
    QueryParams["Datasource"] = "datasource";
    QueryParams["Project"] = "project";
    QueryParams["Namespace"] = "namespace";
    QueryParams["Units"] = "units";
    // Use openshift-namespace query parameter for dashboards page since grafana variables cannot have
    // a `-` character in their name
    QueryParams["OpenshiftProject"] = "project-dropdown-value";
    QueryParams["Refresh"] = "refresh";
    QueryParams["Start"] = "start";
    QueryParams["Edit"] = "edit";
    return QueryParams;
}({});


/***/ },

/***/ "./shared/types/types.ts"
/*!*******************************!*\
  !*** ./shared/types/types.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertSource: () => (/* binding */ AlertSource)
/* harmony export */ });
var AlertSource = /*#__PURE__*/ function(AlertSource) {
    AlertSource["Platform"] = "platform";
    AlertSource["User"] = "user";
    return AlertSource;
}({});


/***/ },

/***/ "./shared/utils/utils.ts"
/*!*******************************!*\
  !*** ./shared/utils/utils.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALERTMANAGER_BASE_PATH: () => (/* binding */ ALERTMANAGER_BASE_PATH),
/* harmony export */   ALERTMANAGER_PROXY_PATH: () => (/* binding */ ALERTMANAGER_PROXY_PATH),
/* harmony export */   ALERTMANAGER_TENANCY_BASE_PATH: () => (/* binding */ ALERTMANAGER_TENANCY_BASE_PATH),
/* harmony export */   ALL_NAMESPACES_KEY: () => (/* binding */ ALL_NAMESPACES_KEY),
/* harmony export */   AlertResource: () => (/* binding */ AlertResource),
/* harmony export */   PROMETHEUS_BASE_PATH: () => (/* binding */ PROMETHEUS_BASE_PATH),
/* harmony export */   QUERY_CHUNK_SIZE: () => (/* binding */ QUERY_CHUNK_SIZE),
/* harmony export */   RuleResource: () => (/* binding */ RuleResource),
/* harmony export */   SilenceResource: () => (/* binding */ SilenceResource),
/* harmony export */   alertDescription: () => (/* binding */ alertDescription),
/* harmony export */   alertState: () => (/* binding */ alertState),
/* harmony export */   alertingRuleStateSort: () => (/* binding */ alertingRuleStateSort),
/* harmony export */   buildPrometheusUrl: () => (/* binding */ buildPrometheusUrl),
/* harmony export */   fuzzyCaseInsensitive: () => (/* binding */ fuzzyCaseInsensitive),
/* harmony export */   getAlertingContextId: () => (/* binding */ getAlertingContextId),
/* harmony export */   getAlertmanagerSilencesUrl: () => (/* binding */ getAlertmanagerSilencesUrl),
/* harmony export */   getAlertsAndRules: () => (/* binding */ getAlertsAndRules),
/* harmony export */   getPrometheusBasePath: () => (/* binding */ getPrometheusBasePath),
/* harmony export */   getSilenceName: () => (/* binding */ getSilenceName),
/* harmony export */   getTimeRanges: () => (/* binding */ getTimeRanges),
/* harmony export */   isTimeoutError: () => (/* binding */ isTimeoutError),
/* harmony export */   labelsToParams: () => (/* binding */ labelsToParams),
/* harmony export */   severitySort: () => (/* binding */ severitySort),
/* harmony export */   silenceCluster: () => (/* binding */ silenceCluster),
/* harmony export */   silenceMatcherEqualitySymbol: () => (/* binding */ silenceMatcherEqualitySymbol),
/* harmony export */   silenceState: () => (/* binding */ silenceState),
/* harmony export */   targetSource: () => (/* binding */ targetSource)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "../node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/countBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/filter.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/toLower.js");
/* harmony import */ var murmurhash_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! murmurhash-js */ "../node_modules/murmurhash-js/index.js");
/* harmony import */ var murmurhash_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(murmurhash_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants_query_params__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types/types */ "./shared/types/types.ts");






const QUERY_CHUNK_SIZE = 24 * 60 * 60 * 1000;
const PROMETHEUS_BASE_PATH = window.SERVER_FLAGS.prometheusBaseURL;
const PROMETHEUS_TENANCY_BASE_PATH = window.SERVER_FLAGS.prometheusTenancyBaseURL;
const PROMETHEUS_PROXY_PATH = '/api/proxy/plugin/monitoring-console-plugin/thanos-proxy';
const ALERTMANAGER_BASE_PATH = window.SERVER_FLAGS.alertManagerBaseURL;
const ALERTMANAGER_TENANCY_BASE_PATH = '/api/alertmanager-tenancy';
// remove it once it get added to SERVER_FLAGS
const ALERTMANAGER_PROXY_PATH = '/api/proxy/plugin/monitoring-console-plugin/alertmanager-proxy';
const AlertResource = {
    group: 'monitoring.coreos.com',
    resource: 'alertingrules',
    kind: 'Alert',
    label: 'Alert',
    url: '/monitoring/alerts',
    virtUrl: '/virt-monitoring/alerts',
    abbr: 'AL'
};
const RuleResource = {
    group: 'monitoring.coreos.com',
    resource: 'alertingrules',
    kind: 'AlertRule',
    label: 'Alerting Rule',
    url: '/monitoring/alertrules',
    virtUrl: '/virt-monitoring/alertrules',
    abbr: 'AR'
};
const SilenceResource = {
    group: 'monitoring.coreos.com',
    resource: 'alertmanagers',
    kind: 'Silence',
    label: 'Silence',
    url: '/monitoring/silences',
    virtUrl: '/virt-monitoring/silences',
    abbr: 'SL'
};
const fuzzyCaseInsensitive = (a, b)=>fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default()(lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](a), lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](b));
const labelsToParams = (labels)=>lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](labels, (v, k)=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
const getAlertsAndRules = (data)=>{
    // Flatten the rules data to make it easier to work with, discard non-alerting rules since those
    // are the only ones we will be using and add a unique ID to each rule.
    const groups = lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](data, 'groups');
    const rules = lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](groups, (g)=>{
        const addID = (r)=>{
            const key = [
                g.file,
                g.name,
                r.name,
                r.duration,
                r.query,
                ...lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](r.labels, (k, v)=>`${k}=${v}`)
            ].join(',');
            return {
                ...r,
                id: String((0,murmurhash_js__WEBPACK_IMPORTED_MODULE_10__.murmur3)(key, 'monitoring-salt'))
            };
        };
        return lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](g.rules, {
            type: 'alerting'
        }).map(addID);
    });
    // The console codebase and developer perspective actions don't expect the external labels to be
    // included on the alerts
    // Add external labels to all `rules[].alerts[].labels`
    rules.forEach((rule)=>{
        rule.alerts.forEach((alert)=>alert.labels = {
                ...rule.labels,
                ...alert.labels
            });
    });
    // Add `rule` object to each alert
    const alerts = lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](rules, (rule)=>rule.alerts.map((a)=>({
                rule,
                ...a
            })));
    return {
        alerts,
        rules
    };
};
const alertState = (a)=>a?.state;
const silenceState = (s)=>s?.status?.state;
const silenceCluster = (s)=>s?.matchers.find((label)=>label.name === 'cluster')?.value ?? '';
const silenceMatcherEqualitySymbol = (isEqual, isRegex)=>{
    if (isRegex) {
        return isEqual ? '=~' : '!~';
    }
    return isEqual ? '=' : '!=';
};
const getSilenceName = (silence)=>{
    const name = lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](silence.matchers, {
        name: 'alertname'
    }), 'value');
    return name ? name : // No alertname, so fall back to displaying the other matchers
    silence.matchers.map((m)=>`${m.name}${silenceMatcherEqualitySymbol(m.isEqual, m.isRegex)}${m.value}`).join(', ');
};
const alertDescription = (alert)=>alert.annotations?.description || alert.annotations?.message || alert.labels?.alertname;
const alertingRuleStateSort = (a, b)=>{
    const countsA = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](a.alerts, 'state');
    const countsB = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](b.alerts, 'state');
    for (const state of [
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertStates.Firing,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertStates.Pending,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertStates.Silenced
    ]){
        const diff = (countsB[state] ?? 0) - (countsA[state] ?? 0);
        if (diff !== 0) return diff;
    }
    return 0;
};
const severitySort = (a, b)=>{
    const severityA = (('severity' in a ? a.severity : a.labels?.severity) ?? '').toLowerCase();
    const severityB = (('severity' in b ? b.severity : b.labels?.severity) ?? '').toLowerCase();
    const rank = new Map([
        [
            _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertSeverity.None,
            0
        ],
        [
            _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertSeverity.Info,
            1
        ],
        [
            _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertSeverity.Warning,
            2
        ],
        [
            _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertSeverity.Critical,
            3
        ]
    ]);
    const rankA = rank.get(severityA) ?? -1;
    const rankB = rank.get(severityB) ?? -1;
    if (rankA !== rankB) return rankB - rankA;
    return severityA.localeCompare(severityB, undefined, {
        sensitivity: 'base'
    });
};
const targetSource = (target)=>target.labels?.prometheus === 'openshift-monitoring/k8s' ? _types_types__WEBPACK_IMPORTED_MODULE_12__.AlertSource.Platform : _types_types__WEBPACK_IMPORTED_MODULE_12__.AlertSource.User;
const isTimeoutError = (err)=>err.name === 'TimeoutError' || err.message.includes('timed out');
/**
 * This function is used to get the parameters needed to break a long time period down into smaller
 * chunks which won't timeout
 *
 * @param timespan Total length of time to cover
 */ const getTimeRanges = (timespan, maxEndTime = Date.now())=>{
    if (timespan < QUERY_CHUNK_SIZE * 7) {
        // If the query is smaller than a week, leave the the query the same since it won't timeout
        return [
            {
                endTime: maxEndTime,
                duration: timespan
            }
        ];
    }
    const startTime = maxEndTime - timespan;
    const timeRanges = [
        {
            endTime: startTime + QUERY_CHUNK_SIZE,
            duration: QUERY_CHUNK_SIZE
        }
    ];
    while(timeRanges.at(-1).endTime < maxEndTime){
        const nextEndTime = timeRanges.at(-1).endTime + QUERY_CHUNK_SIZE;
        timeRanges.push({
            endTime: nextEndTime,
            duration: QUERY_CHUNK_SIZE
        });
    }
    return timeRanges;
};
const ALL_NAMESPACES_KEY = '#ALL_NS#';
const DEFAULT_PROMETHEUS_SAMPLES = 60;
const DEFAULT_PROMETHEUS_TIMESPAN = 60 * 60 * 1000;
// Range vector queries require end, start, and step search params
const getRangeVectorSearchParams = (endTime = Date.now(), samples = DEFAULT_PROMETHEUS_SAMPLES, timespan = DEFAULT_PROMETHEUS_TIMESPAN)=>{
    const params = new URLSearchParams();
    params.append('start', `${(endTime - timespan) / 1000}`);
    params.append('end', `${endTime / 1000}`);
    params.append('step', `${Math.ceil(timespan / samples / 1000)}`);
    return params;
};
const getSearchParams = ({ endpoint, endTime, timespan, samples, ...params })=>{
    const searchParams = endpoint === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.PrometheusEndpoint.QUERY_RANGE ? getRangeVectorSearchParams(endTime, samples, timespan) : new URLSearchParams();
    lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](params, (value, key)=>value && searchParams.append(key, value.toString()));
    if (searchParams.get(_constants_query_params__WEBPACK_IMPORTED_MODULE_11__.QueryParams.Namespace) === ALL_NAMESPACES_KEY) {
        searchParams.delete(_constants_query_params__WEBPACK_IMPORTED_MODULE_11__.QueryParams.Namespace);
    }
    return searchParams;
};
const getPrometheusBasePath = ({ prometheus, useTenancyPath, basePathOverride })=>{
    if (basePathOverride) {
        return basePathOverride;
    }
    if (prometheus === 'acm') {
        return PROMETHEUS_PROXY_PATH;
    } else if (useTenancyPath) {
        return PROMETHEUS_TENANCY_BASE_PATH;
    } else {
        return PROMETHEUS_BASE_PATH;
    }
};
const buildPrometheusUrl = ({ prometheusUrlProps, basePath })=>{
    if (basePath !== PROMETHEUS_TENANCY_BASE_PATH || prometheusUrlProps.namespace === ALL_NAMESPACES_KEY) {
        prometheusUrlProps.namespace = undefined;
    }
    if (prometheusUrlProps.endpoint !== _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.PrometheusEndpoint.RULES && !prometheusUrlProps.query) {
        // Empty query provided, skipping API call
        return null;
    }
    const params = getSearchParams(prometheusUrlProps);
    return `${basePath}/${prometheusUrlProps.endpoint}${params.size > 0 ? '?' + params.toString() : ''}`;
};
const getAlertmanagerSilencesUrl = ({ prometheus, useTenancyPath, namespace })=>{
    if (prometheus === 'acm') {
        return `${ALERTMANAGER_PROXY_PATH}/api/v2/silences`;
    } else if (useTenancyPath && namespace && namespace !== ALL_NAMESPACES_KEY) {
        return `${ALERTMANAGER_TENANCY_BASE_PATH}/api/v2/silences?namespace=${namespace}`;
    } else {
        return `${ALERTMANAGER_BASE_PATH}/api/v2/silences`;
    }
};
const getAlertingContextId = ({ prometheus, namespace })=>{
    if (prometheus === 'acm') {
        return 'acm-observe-alerting';
    } else if (namespace && namespace !== ALL_NAMESPACES_KEY) {
        return 'dev-observe-alerting';
    } else {
        return 'observe-alerting';
    }
};


/***/ }

}]);
//# sourceMappingURL=shared_utils_utils_ts-chunk.js.map