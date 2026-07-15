"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_constants_data-test_ts-shared_hooks_useBoolean_ts-shared_hooks_usePerspective_tsx-webp-d91a85"],{

/***/ "./shared/constants/data-test.ts"
/*!***************************************!*\
  !*** ./shared/constants/data-test.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Classes: () => (/* binding */ Classes),
/* harmony export */   DataTestIDs: () => (/* binding */ DataTestIDs),
/* harmony export */   FilterOUIAIDs: () => (/* binding */ FilterOUIAIDs),
/* harmony export */   IDs: () => (/* binding */ IDs),
/* harmony export */   LegacyDashboardPageTestIDs: () => (/* binding */ LegacyDashboardPageTestIDs),
/* harmony export */   LegacyTestIDs: () => (/* binding */ LegacyTestIDs),
/* harmony export */   editPersesDashboardsAddDatasource: () => (/* binding */ editPersesDashboardsAddDatasource),
/* harmony export */   editPersesDashboardsAddPanel: () => (/* binding */ editPersesDashboardsAddPanel),
/* harmony export */   editPersesDashboardsAddVariable: () => (/* binding */ editPersesDashboardsAddVariable),
/* harmony export */   listPersesDashboardsDataTestIDs: () => (/* binding */ listPersesDashboardsDataTestIDs),
/* harmony export */   listPersesDashboardsOUIAIDs: () => (/* binding */ listPersesDashboardsOUIAIDs),
/* harmony export */   persesAriaLabels: () => (/* binding */ persesAriaLabels),
/* harmony export */   persesDashboardDataTestIDs: () => (/* binding */ persesDashboardDataTestIDs),
/* harmony export */   persesMUIDataTestIDs: () => (/* binding */ persesMUIDataTestIDs)
/* harmony export */ });
const DataTestIDs = {
    AlertCluster: 'alert-cluster',
    AlertResourceIcon: 'alert-resource-icon',
    AlertResourceLink: 'alert-resource-link',
    AlertNamespace: 'alert-namespace',
    AlertState: 'alert-state',
    AlertSource: 'alert-source',
    AlertingRuleArrow: 'alerting-rule-arrow',
    AlertingRuleResourceIcon: 'alerting-rule-resource-icon',
    AlertingRuleResourceLink: 'alerting-rule-resource-link',
    AlertingRuleSeverityBadge: 'alerting-rule-severity-badge',
    AlertingRuleStateBadge: 'alerting-rule-state-badge',
    AlertingRuleTotalAlertsBadge: 'alerting-rule-total-alerts-badge',
    AlertingRuleCluster: 'alerting-rule-cluster',
    LabelSuggestion: 'suggestion-line',
    CancelButton: 'cancel-button',
    Breadcrumb: 'breadcrumb',
    DownloadCSVButton: 'download-csv-button',
    EmptyBoxBody: 'empty-box-body',
    ExpireSilenceButton: 'expire-silence-button',
    ExpireXSilencesButton: 'expire-x-silences-button',
    Expression: 'expression',
    FavoriteStarButton: 'favorite-button',
    KebabDropdownButton: 'kebab-dropdown-button',
    MastHeadHelpIcon: 'help-dropdown-toggle',
    MastHeadApplicationItem: 'application-launcher-item',
    MetricGraph: 'metric-graph',
    MetricGraphNoDatapointsFound: 'datapoints-msg',
    MetricGraphTimespanDropdown: 'graph-timespan-dropdown',
    MetricGraphTimespanInput: 'graph-timespan-input',
    MetricDisconnectedCheckbox: 'disconnected-checkbox',
    MetricDropdownPollInterval: 'dropdown-poll-interval',
    MetricGraphUnitsDropDown: 'graph-units-dropdown',
    MetricHideShowGraphButton: 'hide-show-graph-button',
    MetricResetZoomButton: 'reset-zoom-button',
    MetricStackedCheckbox: 'stacked-checkbox',
    MetricsPageActionsDropdownButton: 'actions-dropdown-button',
    MetricsPageAddQueryButton: 'add-query-button',
    MetricsPageAddQueryDropdownItem: 'add-query-dropdown-item',
    MetricsPageDeleteAllQueriesDropdownItem: 'delete-all-queries-dropdown-item',
    MetricsPageDeleteQueryDropdownItem: 'delete-query-dropdown-item',
    MetricsPageDisableEnableQuerySwitch: 'disable-enable-query-switch',
    MetricsPageDuplicateQueryDropdownItem: 'duplicate-query-dropdown-item',
    MetricsPageDisableEnableQueryDropdownItem: 'disable-enable-query-dropdown-item',
    MetricsPageExpandCollapseRowButton: 'expand-collapse-row-button',
    //div
    MetricsPageExpandCollapseAllDropdownItem: 'expand-collapse-all-dropdown-item',
    MetricsPageExportCsvDropdownItem: 'export-csv-dropdown-item',
    MetricsPageHideShowAllSeriesDropdownItem: 'hide-show-all-series-dropdown-item',
    MetricsPageInsertExampleQueryButton: 'insert-example-query-button',
    MetricsPageNoQueryEnteredTitle: 'no-query-entered-title',
    MetricsPageNoQueryEntered: 'no-query-entered',
    MetricsPageQueryTable: 'query-table',
    MetricsPageRunQueriesButton: 'run-queries-button',
    MetricsPageSelectAllUnselectAllButton: 'select-all-unselect-all-button',
    MetricsPageSeriesButton: 'series-button',
    MetricsPageYellowNoDatapointsFound: 'yellow-no-datapoints-found',
    NameInput: 'name-filter-input',
    NameLabelDropdown: 'console-select-menu-toggle',
    NamespaceDropdownMenuLink: 'dropdown-menu-item-link',
    NameLabelDropdownOptions: 'console-select-item',
    NamespaceDropdownShowSwitch: 'showSystemSwitch',
    NamespaceDropdownTextFilter: 'dropdown-text-filter',
    PersesDashboardDropdown: 'dashboard-dropdown',
    PersesCreateDashboardButton: 'create-dashboard-button-list-page',
    SeverityBadgeHeader: 'severity-badge-header',
    SeverityBadge: 'severity-badge',
    SilenceAlertDropdownItem: 'silence-alert-dropdown-item',
    ViewAIInvestigationDropdownItem: 'view-ai-investigation-dropdown-item',
    SilenceButton: 'silence-button',
    SilenceEditDropdownItem: 'silence-edit-dropdown-item',
    SilenceExpireDropdownItem: 'silence-expire-dropdown-item',
    SilenceRecreateDropdownItem: 'silence-recreate-dropdown-item',
    SilenceResourceIcon: 'silence-resource-icon',
    SilenceResourceLink: 'silence-resource-link',
    SilencesPageFormTestIDs: {
        AddLabel: 'add-label',
        AlertLabelsDescription: 'alert-labels-description',
        Comment: 'comment',
        Creator: 'creator',
        Description: 'description-header',
        LabelName: 'label-name',
        LabelValue: 'label-value',
        NegativeMatcherCheckbox: 'negative-matcher-checkbox',
        Regex: 'regex-checkbox',
        RemoveLabel: 'remove-label',
        SilenceFrom: 'silence-from',
        SilenceFor: 'silence-for',
        SilenceForToggle: 'silence-for-toggle',
        SilenceUntil: 'silence-until',
        StartImmediately: 'start-immediately'
    },
    TypeaheadSelectInput: 'query-select-typeahead-input',
    Table: 'OUIA-Generated-Table',
    //table ouiaid - ID to be used with byOUIAID(DataTestIDs.Table)
    MetricsGraphAlertDanger: 'OUIA-Generated-Alert-danger',
    //ID to be used with byOUIAID(DataTestIDs.MetricsGraphAlertDanger)
    // Incidents Page Test IDs
    IncidentsPage: {
        Toolbar: 'incidents-toolbar',
        DaysSelect: 'incidents-days-select',
        DaysSelectToggle: 'incidents-days-select-toggle',
        DaysSelectList: 'incidents-days-select-list',
        DaysSelectOption: 'incidents-days-select-option',
        FiltersSelect: 'incidents-filters-select',
        FiltersSelectToggle: 'incidents-filters-select-toggle',
        FiltersSelectList: 'incidents-filters-select-list',
        FiltersSelectOption: 'incidents-filters-select-option',
        FilterChip: 'incidents-filter-chip',
        FilterChipRemove: 'incidents-filter-chip-remove',
        ClearAllFiltersButton: 'incidents-clear-all-filters',
        ToggleChartsButton: 'incidents-toggle-charts',
        LoadingSpinner: 'incidents-loading-spinner'
    },
    // Incidents Chart Test IDs
    IncidentsChart: {
        Card: 'incidents-chart-card',
        Title: 'incidents-chart-title',
        ChartContainer: 'incidents-chart-container',
        LoadingSpinner: 'incidents-chart-loading-spinner',
        ChartBars: 'incidents-chart-bars',
        ChartBar: 'incidents-chart-bar'
    },
    // Alerts Chart Test IDs
    AlertsChart: {
        Card: 'alerts-chart-card',
        Title: 'alerts-chart-title',
        EmptyState: 'alerts-chart-empty-state',
        ChartContainer: 'alerts-chart-container',
        ChartBar: 'alerts-chart-bar'
    },
    // Incidents Table Test IDs
    IncidentsTable: {
        Table: 'incidents-alerts-table',
        ExpandButton: 'incidents-table-expand-button',
        Row: 'incidents-table-row',
        ComponentCell: 'incidents-table-component-cell',
        SeverityCell: 'incidents-table-severity-cell',
        StateCell: 'incidents-table-state-cell'
    },
    // Incidents Details Row Table Test IDs
    IncidentsDetailsTable: {
        Table: 'incidents-details-table',
        LoadingSpinner: 'incidents-details-loading-spinner',
        Row: 'incidents-details-row',
        AlertRuleCell: 'incidents-details-alert-rule-cell',
        NamespaceCell: 'incidents-details-namespace-cell',
        SeverityCell: 'incidents-details-severity-cell',
        StateCell: 'incidents-details-state-cell',
        StartCell: 'incidents-details-start-cell',
        EndCell: 'incidents-details-end-cell',
        AlertRuleLink: 'incidents-details-alert-rule-link'
    }
};
const FilterOUIAIDs = {
    AlertNameFilter: 'AlertNameFilter',
    AlertStateFilter: 'AlertStateFilter',
    AlertSeverityFilter: 'AlertSeverityFilter',
    AlertSourceFilter: 'AlertSourceFilter',
    AlertClusterFilter: 'AlertClusterFilter',
    SilenceNameFilter: 'SilenceNameFilter',
    SilenceStateFilter: 'SilenceStateFilter',
    SilenceClusterFilter: 'SilenceClusterFilter',
    RuleNameFilter: 'RuleNameFilter',
    RuleStateFilter: 'RuleStateFilter',
    RuleSeverityFilter: 'RuleSeverityFilter',
    RuleSourceFilter: 'RuleSourceFilter',
    TargetTextFilter: 'TargetTextFilter',
    TargetStatusFilter: 'TargetStatusFilter',
    TargetSourceFilter: 'TargetSourceFilter'
};
const LegacyDashboardPageTestIDs = {
    TimeRangeDropdown: 'time-range-dropdown',
    //div
    TimeRangeDropdownOptions: 'time-range-dropdown-options',
    PollIntervalDropdown: 'poll-interval-dropdown',
    //div
    PollIntervalDropdownOptions: 'poll-interval-dropdown-options',
    Inspect: 'inspect',
    ExportAsCsv: 'export-as-csv',
    DashboardDropdown: 'dashboard-dropdown',
    //div
    DashboardTimeRangeDropdownMenu: 'monitoring-time-range-dropdown',
    //div using get('#'+LegacyDashboardPageTestIDs.DashboardTimeRangeDropdownMenu)
    DashboardRefreshIntervalDropdownMenu: 'refresh-interval-dropdown',
    //div using get('#'+LegacyDashboardPageTestIDs.DashboardRefreshIntervalDropdownMenu)
    Graph: 'graph'
};
const LegacyTestIDs = {
    ItemFilter: 'item-filter',
    SelectAllSilencesCheckbox: 'select-all-silences-checkbox',
    PersesDashboardSection: 'dashboard',
    NamespaceBarDropdown: 'namespace-bar-dropdown',
    ApplicationLauncher: 'application-launcher'
};
const IDs = {
    ChartAxis0ChartLabel: 'chart-axis-0-ChartLabel',
    //id^=IDs.ChartAxis0ChartLabel AxisX
    ChartAxis1ChartLabel: 'chart-axis-1-ChartLabel',
    //id^=IDs.ChartAxis1ChartLabel AxisY
    persesDashboardCount: 'options-menu-bottom-toggle',
    persesDashboardDownloadButton: 'download-dashboard-button',
    persesDashboardActionMenuModal: 'action-menu',
    persesDashboardEditVariablesModalBuiltinButton: 'builtin',
    persesDashboardAddPanelGroupForm: 'panel-group-editor-form',
    persesDashboardAddPanelForm: 'panel-editor-form',
    persesDashboardDiscardChangesDialog: 'discard-dialog',
    persesDashboardCreateDashboardName: 'create-modal-dashboard-name-form-group-text-input',
    persesDashboardRenameDashboardName: 'rename-modal-text-input',
    persesDashboardDuplicateDashboardName: 'duplicate-modal-dashboard-name-form-group-text-input',
    persesDashboardImportDashboardUploadFileInput: 'import-dashboard-file-filename',
    persesDashboardRefreshIntervalDropdown: 'refreshInterval'
};
const Classes = {
    ExpandedRow: 'button[class="pf-v6-c-button pf-m-plain pf-m-expanded"]',
    ToExpandRow: 'button[class="pf-v6-c-button pf-m-plain"]',
    FilterDropdown: '.pf-v6-c-menu-toggle, .pf-v5-c-menu-toggle',
    FilterDropdownExpanded: '.pf-v6-c-menu-toggle.pf-m-expanded, .pf-v5-c-menu-toggle.pf-m-expanded',
    FilterDropdownOption: '.pf-v6-c-menu__item, .pf-c-select__menu-item',
    GraphCardInlineInfo: '.pf-v6-c-alert.pf-m-inline.pf-m-plain.pf-m-info, .pf-v5-c-alert.pf-m-inline.pf-m-plain.pf-m-info.query-browser__reduced-resolution',
    HorizontalNav: '.pf-v6-c-tabs__item, .co-m-horizontal-nav__menu-item',
    IndividualTag: '.pf-v6-c-label__text, .pf-v5-c-chip__text',
    LabelTag: '.pf-v6-c-label__text, .pf-v5-c-label__text',
    MainTag: '.pf-v6-c-label-group__label, .pf-v5-c-chip-group__label',
    MenuItem: '.pf-v6-c-menu__item, .pf-c-dropdown__menu-item',
    MenuItemDisabled: '.pf-v6-c-menu__list-item.pf-m-aria-disabled',
    MenuToggle: '.pf-v6-c-menu-toggle, .pf-c-dropdown__toggle',
    MetricsPagePredefinedQueriesMenuItem: '.pf-v6-c-menu__item, .pf-v5-c-select__menu-item',
    MetricsPageRows: '.pf-v6-c-data-list.pf-m-grid-md',
    MetricsPageExpandedRowIcon: '.pf-v6-c-data-list__item.pf-m-expanded',
    //li
    MetricsPageCollapsedRowIcon: '.pf-v6-c-data-list__item',
    //li
    MetricsPageQueryInput: '.cm-content.cm-lineWrapping',
    MetricsPageUngraphableResults: '.pf-v6-c-title.pf-m-md',
    MetricsPageUngraphableResultsDescription: '.pf-v6-c-empty-state__body',
    MetricsPageQueryAutocomplete: '.cm-tooltip-autocomplete.cm-tooltip.cm-tooltip-below',
    MoreLessTag: '.pf-v6-c-label-group__label, .pf-v5-c-chip-group__label',
    NamespaceDropdown: '.pf-v6-c-menu-toggle.co-namespace-dropdown__menu-toggle',
    NamespaceDropdownExpanded: '.pf-v6-c-menu-toggle.pf-m-expanded.co-namespace-dropdown__menu-toggle',
    PersesCreateDashboardProjectDropdown: 'button[class="pf-v6-c-menu-toggle__button"]',
    PersesCreateDashboardDashboardNameError: '.pf-v6-c-helper-text__item-text',
    PersesDuplicateDashboardNameError: '.pf-v6-c-alert__title',
    PersesListDashboardCount: '.pf-v6-c-menu-toggle__text',
    SectionHeader: '.pf-v6-c-title.pf-m-h2, .co-section-heading',
    TableHeaderColumn: '.pf-v6-c-table__button, .pf-c-table__button',
    SilenceAlertTitle: '.pf-v6-c-alert__title, .pf-v5-c-alert__title',
    SilenceAlertDescription: '.pf-v6-c-alert__description, .pf-v5-c-alert__description',
    SilenceCommentWithoutError: '.pf-v6-c-form-control.pf-m-textarea.pf-m-resize-both',
    SilenceCommentWithError: '.pf-v6-c-form-control.pf-m-textarea.pf-m-resize-both.pf-m-error',
    SilenceCreatorWithError: '.pf-v6-c-form-control.pf-m-error',
    SilenceHelpText: '.pf-v6-c-helper-text__item-text, .pf-v5-c-helper-text__item-text',
    SilenceKebabDropdown: '.pf-v6-c-menu-toggle.pf-m-plain, .pf-v5-c-dropdown__toggle.pf-m-plain',
    SilenceLabelRow: '.pf-v6-l-grid.pf-m-all-12-col-on-sm.pf-m-all-4-col-on-md.pf-m-gutter, .row',
    SilenceState: '.pf-v6-l-stack__item, .co-break-word',
    ImportDashboardTextArea: '.view-lines.monaco-mouse-cursor-text'
};
const persesAriaLabels = {
    TimeRangeDropdown: 'Select time range. Currently set to [object Object]',
    RefreshButton: 'Refresh',
    ZoomInButton: 'Zoom in',
    ZoomOutButton: 'Zoom out',
    ViewJSONButton: 'View JSON',
    EditJSONButton: 'Edit JSON',
    EditVariablesButton: 'Edit variables',
    EditDatasourcesButton: 'Edit datasources',
    AddPanelButton: 'Add panel',
    AddGroupButton: 'Add panel group',
    OpenGroupButtonPrefix: 'expand group ',
    CollapseGroupButtonPrefix: 'collapse group ',
    //PanelGroup toolbar buttons
    AddPanelToGroupPrefix: 'add panel to group ',
    EditPanelGroupPrefix: 'edit group ',
    DeletePanelGroupPrefix: 'delete group ',
    MovePanelGroupPrefix: 'move group ',
    MovePanelGroupDownSuffix: ' down',
    MovePanelGroupUpSuffix: ' up',
    EditDashboardVariablesTable: 'table of variables',
    EditDashboardDatasourcesTable: 'table of datasources',
    //Panel toolbar buttons
    EditPanelActionMenuButtonPrefix: 'show panel actions for ',
    EditPanelExpandCollapseButtonPrefix: 'toggle panel ',
    EditPanelExpandCollapseButtonSuffix: ' view mode',
    EditPanelPrefix: 'edit panel ',
    EditPanelDuplicateButtonPrefix: 'duplicate panel ',
    EditPanelDeleteButtonPrefix: 'delete panel ',
    EditPanelMovePanelButtonPrefix: 'move panel ',
    PanelExportTimeSeriesDataAsCSV: 'Export time series data as CSV',
    //Add Panel tabs
    AddPanelTabs: 'Panel configuration tabs',
    //List Page
    persesDashboardKebabIcon: 'Kebab toggle',
    //dialogProjectDropdown
    dialogProjectInput: 'Type to filter',
    //Import Dashboard
    dashboardActionsMenu: 'Dashboard actions',
    importDashboardProjectInputButton: 'Typeahead menu toggle',
    importDashboardDuplicatedDashboardError: 'Danger alert:document already exists',
    traceTablePanel_TraceTable: 'Trace name column menu'
};
//data-testid from MUI components
const persesMUIDataTestIDs = {
    variableDropdown: 'variable',
    panelGroup: 'panel-group',
    panelGroupHeader: 'panel-group-header',
    panelHeader: 'panel',
    editDashboardVariablesModal: 'variable-editor',
    editDashboardDatasourcesModal: 'datasource-editor',
    editDashboardAddVariableRunQueryButton: 'run_query_button',
    editDashboardAddVariablePreviewValuesCopy: 'ClipboardOutlineIcon',
    editDashboardEditVariableMoveDownButton: 'ArrowDownIcon',
    editDashboardEditVariableMoveUpButton: 'ArrowUpIcon',
    editDashboardEditVariableDatasourceEditButton: 'PencilIcon',
    editDashboardEditVariableDatasourceDeleteButton: 'TrashCanIcon',
    addPanelGroupFormName: 'panel-group-editor-name',
    logsTableContainer: 'log-row-container-0',
    scatterChartPanel_ScatterPlot: 'ScatterChartPanel_ScatterPlot'
};
const persesDashboardDataTestIDs = {
    createDashboardButtonToolbar: 'create-dashboard-button-list-page',
    importDashboardButtonToolbar: 'import-dashboard-button-list-page',
    editDashboardButtonToolbar: 'edit-dashboard-button-toolbar',
    cancelButtonToolbar: 'cancel-button-toolbar'
};
const listPersesDashboardsDataTestIDs = {
    PersesBreadcrumbDashboardItem: 'perses-dashboards-breadcrumb-dashboard-item',
    PersesBreadcrumbDashboardNameItem: 'perses-dashboards-breadcrumb-dashboard-name-item',
    NameFilter: 'name-filter',
    ProjectFilter: 'project-filter',
    EmptyStateTitle: 'empty-state-title',
    EmptyStateBody: 'empty-state-body',
    ClearAllFiltersButton: 'clear-all-filters-button',
    DashboardLinkPrefix: 'perseslistpage-'
};
const listPersesDashboardsOUIAIDs = {
    PageHeaderSubtitle: 'PageHeader-subtitle',
    PersesBreadcrumb: 'perses-dashboards-breadcrumb',
    PersesDashListDataViewTable: 'PersesDashList-DataViewTable',
    persesListDataViewHeaderClearAllFiltersButton: 'PersesDashList-DataViewHeader-clear-all-filters',
    persesListDataViewFilters: 'DataViewFilters',
    persesListDataViewHeaderSortButton: 'PersesDashList-DataViewTable-th',
    persesListDataViewTableDashboardNameTD: 'PersesDashList-DataViewTable-td-'
};
//name attribute from MUI components
const editPersesDashboardsAddVariable = {
    inputName: 'spec.name',
    inputDisplayLabel: 'spec.display.name',
    inputDescription: 'spec.display.description',
    //type='Text'
    inputValue: 'spec.value',
    inputConstant: 'spec.constant',
    //type='List'
    inputCapturingRegexp: 'spec.capturingRegexp',
    inputAllowMultiple: 'spec.allowMultiple',
    inputAllowAllValue: 'spec.allowAllValue',
    inputCustomAllValue: 'spec.customAllValue'
};
//name attribute from MUI components
const editPersesDashboardsAddDatasource = {
    inputName: 'name',
    inputDefaultDatasource: 'spec.default',
    inputDisplayLabel: 'title',
    inputDescription: 'description'
};
const editPersesDashboardsAddPanel = {
    inputName: 'panelDefinition.spec.display.name',
    inputDescription: 'panelDefinition.spec.display.description'
};


/***/ },

/***/ "./shared/hooks/useBoolean.ts"
/*!************************************!*\
  !*** ./shared/hooks/useBoolean.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBoolean: () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useBoolean = (initialValue)=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setValue((v)=>!v), []);
    const setTrue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setValue(true), []);
    const setFalse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setValue(false), []);
    return [
        value,
        toggle,
        setTrue,
        setFalse
    ];
};


/***/ },

/***/ "./shared/hooks/usePerspective.tsx"
/*!*****************************************!*\
  !*** ./shared/hooks/usePerspective.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertRulesUrl: () => (/* binding */ getAlertRulesUrl),
/* harmony export */   getAlertUrl: () => (/* binding */ getAlertUrl),
/* harmony export */   getAlertsUrl: () => (/* binding */ getAlertsUrl),
/* harmony export */   getDashboardUrl: () => (/* binding */ getDashboardUrl),
/* harmony export */   getDashboardsListUrl: () => (/* binding */ getDashboardsListUrl),
/* harmony export */   getEditSilenceAlertUrl: () => (/* binding */ getEditSilenceAlertUrl),
/* harmony export */   getFetchSilenceUrl: () => (/* binding */ getFetchSilenceUrl),
/* harmony export */   getLegacyDashboardsUrl: () => (/* binding */ getLegacyDashboardsUrl),
/* harmony export */   getMutlipleQueryBrowserUrl: () => (/* binding */ getMutlipleQueryBrowserUrl),
/* harmony export */   getNewSilenceAlertUrl: () => (/* binding */ getNewSilenceAlertUrl),
/* harmony export */   getNewSilenceUrl: () => (/* binding */ getNewSilenceUrl),
/* harmony export */   getObserveState: () => (/* binding */ getObserveState),
/* harmony export */   getQueryBrowserUrl: () => (/* binding */ getQueryBrowserUrl),
/* harmony export */   getRuleUrl: () => (/* binding */ getRuleUrl),
/* harmony export */   getSilenceAlertUrl: () => (/* binding */ getSilenceAlertUrl),
/* harmony export */   getSilencesUrl: () => (/* binding */ getSilencesUrl),
/* harmony export */   usePerspective: () => (/* binding */ usePerspective)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ "./shared/types/types.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _constants_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/query-params */ "./shared/constants/query-params.ts");





const usePerspective = ()=>{
    const [perspective] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useActivePerspective)();
    switch(perspective){
        case 'dev':
            return {
                perspective: 'dev',
                urlRoot: "dev-monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.User
                ]
            };
        case 'admin':
            return {
                perspective: 'admin',
                urlRoot: "monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.Platform
                ]
            };
        case 'virtualization-perspective':
            return {
                perspective: 'virtualization-perspective',
                urlRoot: "virt-monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.Platform
                ]
            };
        default:
            return {
                perspective: 'acm',
                urlRoot: "multicloud/monitoring",
                defaultAlertTenant: []
            };
    }
};
const getAlertsUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alerts`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url;
    }
};
const getAlertRulesUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alertrules`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url;
    }
};
const getSilencesUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url;
    }
};
const getNewSilenceAlertUrl = (perspective, alert, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
    }
};
const getNewSilenceUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/~new`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/~new`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new`;
    }
};
const getRuleUrl = (perspective, rule, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}/${lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](rule, 'id')}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/rules/${rule?.id}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.virtUrl}/${rule?.id}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}/${lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](rule, 'id')}`;
    }
};
const getSilenceAlertUrl = (perspective, id, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/${id}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/${id}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}`;
    }
};
const getEditSilenceAlertUrl = (perspective, id, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}/edit`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/${id}/edit`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/${id}/edit`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}/edit`;
    }
};
const getAlertUrl = (perspective, alert, ruleID, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alerts/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.virtUrl}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
    }
};
const getFetchSilenceUrl = (perspective, silenceID, namespace)=>{
    switch(perspective){
        case 'acm':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_PROXY_PATH}/api/v2/silence/${silenceID}`;
        case 'dev':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_TENANCY_BASE_PATH}/api/v2/silence/${silenceID}?namespace=${namespace}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_BASE_PATH}/api/v2/silence/${silenceID}`;
        default:
        case 'admin':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_BASE_PATH}/api/v2/silence/${silenceID}`;
    }
};
// Redux state defined in the openshift/console repo
const getObserveState = (plugin, state)=>{
    switch(plugin){
        case 'monitoring-console-plugin':
            return state.plugins?.mcp;
        case 'monitoring-plugin':
        default:
            return state.plugins?.mp;
    }
};
const getQueryBrowserUrl = ({ perspective, query, namespace, units })=>{
    const unitsQueryParam = units ? `&${_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Units}=${units}` : '';
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/metrics?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/query-browser?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
        case 'admin':
        default:
            return `/monitoring/query-browser?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
    }
};
const getMutlipleQueryBrowserUrl = (perspective, params, namespace)=>{
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/metrics?${params.toString()}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/query-browser?${params.toString()}`;
        case 'admin':
        default:
            return `/monitoring/query-browser?${params.toString()}`;
    }
};
const getLegacyDashboardsUrl = (perspective, boardName, namespace)=>{
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/dashboards` + (boardName ? `/${boardName}` : '');
        case 'admin':
        default:
            return `/monitoring/dashboards` + (boardName ? `/${boardName}` : '');
    }
};
const getDashboardUrl = (perspective)=>{
    switch(perspective){
        case 'virtualization-perspective':
            return `/virt-monitoring/v2/dashboards/view`;
        case 'admin':
            return `/monitoring/v2/dashboards/view`;
        case 'acm':
            return `/multicloud/monitoring/v2/dashboards/view`;
        default:
            return '';
    }
};
const getDashboardsListUrl = (perspective)=>{
    switch(perspective){
        case 'virtualization-perspective':
            return `/virt-monitoring/v2/dashboards`;
        case 'admin':
            return `/monitoring/v2/dashboards`;
        case 'acm':
            return `/multicloud/monitoring/v2/dashboards`;
        default:
            return '';
    }
};


/***/ }

}]);
//# sourceMappingURL=shared_constants_data-test_ts-shared_hooks_useBoolean_ts-shared_hooks_usePerspective_tsx-webp-d91a85-chunk.js.map