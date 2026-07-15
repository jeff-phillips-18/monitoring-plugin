"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-DashboardListPage"],{

/***/ "./features/perses-dashboards/pages/dashboard-list-page/DashboardListPage.tsx"
/*!************************************************************************************!*\
  !*** ./features/perses-dashboards/pages/dashboard-list-page/DashboardListPage.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _dashboard_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-list */ "./features/perses-dashboards/pages/dashboard-list-page/dashboard-list.tsx");
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ToastProvider */ "./features/perses-dashboards/components/ToastProvider.tsx");
/* harmony import */ var _shared_utils_react_router_7_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/utils/react-router-7-adapter */ "./shared/utils/react-router-7-adapter.ts");






const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            keepPreviousData: true
        }
    }
});
const DashboardListPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(use_query_params__WEBPACK_IMPORTED_MODULE_3__.QueryParamProvider, {
        adapter: _shared_utils_react_router_7_adapter__WEBPACK_IMPORTED_MODULE_6__.ReactRouter7Adapter,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__.ToastProvider, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_list__WEBPACK_IMPORTED_MODULE_4__.DashboardList, {})
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardListPage);


/***/ },

/***/ "./features/perses-dashboards/pages/dashboard-list-page/dashboard-list-frame.tsx"
/*!***************************************************************************************!*\
  !*** ./features/perses-dashboards/pages/dashboard-list-page/dashboard-list-frame.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardListFrame: () => (/* binding */ DashboardListFrame)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_dashboard_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard-header */ "./features/perses-dashboards/components/dashboard-header.tsx");
/* harmony import */ var _components_project_ProjectBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/project/ProjectBar */ "./features/perses-dashboards/components/project/ProjectBar.tsx");



const DashboardListFrame = ({ activeProject, activeProjectDashboardsMetadata, changeBoard, dashboardName, children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_project_ProjectBar__WEBPACK_IMPORTED_MODULE_2__.ProjectBar, {
                activeProject: activeProject
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dashboard_header__WEBPACK_IMPORTED_MODULE_1__.DashboardListHeader, {
                boardItems: activeProjectDashboardsMetadata,
                changeBoard: changeBoard,
                dashboardDisplayName: dashboardName,
                activeProject: activeProject,
                children: children
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/pages/dashboard-list-page/dashboard-list.tsx"
/*!*********************************************************************************!*\
  !*** ./features/perses-dashboards/pages/dashboard-list-page/dashboard-list.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardList: () => (/* binding */ DashboardList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useDashboardsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useDashboardsData */ "./features/perses-dashboards/hooks/useDashboardsData.ts");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataView */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataView/@patternfly/react-data-view/dist/dynamic/DataView");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewFilters */ "../node_modules/@patternfly/react-data-view/dist/esm/DataViewFilters/index.js");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTable */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTable/@patternfly/react-data-view/dist/dynamic/DataViewTable");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTextFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTextFilter */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTextFilter/@patternfly/react-data-view/dist/dynamic/DataViewTextFilter");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewToolbar */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewToolbar/@patternfly/react-data-view/dist/dynamic/DataViewToolbar");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _dashboard_list_frame__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard-list-frame */ "./features/perses-dashboards/pages/dashboard-list-page/dashboard-list-frame.tsx");
/* harmony import */ var _dashboard_page_dashboard_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../dashboard-page/dashboard-toolbar */ "./features/perses-dashboards/pages/dashboard-page/dashboard-toolbar.tsx");
/* harmony import */ var _components_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/dashboard-action-modals */ "./features/perses-dashboards/components/dashboard-action-modals.tsx");
/* harmony import */ var _hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/useEditableProjects */ "./features/perses-dashboards/hooks/useEditableProjects.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");



























const DashboardActionsCell = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ project, dashboard, onRename, onDuplicate, onDelete, emptyActions })=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const { permissionsLoading } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_22__.useEditableProjects)();
    const { canEdit } = (0,_dashboard_page_dashboard_toolbar__WEBPACK_IMPORTED_MODULE_20__.usePersesEditPermissions)(project);
    const disabled = !canEdit;
    const rowSpecificActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                title: t('Rename dashboard'),
                onClick: ()=>onRename(dashboard)
            },
            {
                title: t('Duplicate dashboard'),
                onClick: ()=>onDuplicate(dashboard)
            },
            {
                title: t('Delete dashboard'),
                onClick: ()=>onDelete(dashboard)
            }
        ], [
        dashboard,
        onRename,
        onDuplicate,
        onDelete,
        t
    ]);
    if (disabled) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
            content: t("You don't have permissions for dashboard actions"),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_14__.ActionsColumn, {
                    items: emptyActions,
                    isDisabled: true
                })
            })
        });
    }
    if (permissionsLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
            content: t('Checking permissions...'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_14__.ActionsColumn, {
                    items: emptyActions,
                    isDisabled: true
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_14__.ActionsColumn, {
        items: rowSpecificActions,
        isDisabled: false
    });
});
DashboardActionsCell.displayName = 'DashboardActionsCell';
// Raw values for sorting
// Reference to original dashboard data
const sortDashboardData = (data, sortBy, direction)=>{
    if (!sortBy || !direction) return data;
    return [
        ...data
    ].sort((a, b)=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let aValue;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let bValue;
        if (sortBy === 'name') {
            aValue = a.name.label;
            bValue = b.name.label;
        } else if (sortBy === 'created') {
            aValue = a.createdAt;
            bValue = b.createdAt;
        } else if (sortBy === 'modified') {
            aValue = a.updatedAt;
            bValue = b.updatedAt;
        } else {
            aValue = a[sortBy];
            bValue = b[sortBy];
        }
        if (direction === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
    });
};
const DashboardsTable = ({ persesDashboards, persesDashboardsLoading, activeProject })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_16__.usePerspective)();
    const dashboardBaseURL = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_16__.getDashboardUrl)(perspective);
    const [searchParams, setSearchParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useSearchParams)();
    const { sortBy, direction, onSort } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_13__.useDataViewSort)({
        searchParams,
        setSearchParams
    });
    const { filters, onSetFilters, clearAllFilters } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_13__.useDataViewFilters)({
        initialFilters: {
            name: '',
            'project-filter': ''
        },
        searchParams,
        setSearchParams
    });
    const pagination = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_13__.useDataViewPagination)({
        perPage: _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_24__.ITEMS_PER_PAGE[0]
    });
    const { page, perPage } = pagination;
    const DASHBOARD_COLUMNS = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                label: t('Dashboard'),
                key: 'name',
                index: 0
            },
            {
                label: t('Project'),
                key: 'project',
                index: 1
            },
            {
                label: t('Created on'),
                key: 'created',
                index: 2
            },
            {
                label: t('Last Modified'),
                key: 'modified',
                index: 3
            }
        ], [
        t
    ]);
    const sortByIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return DASHBOARD_COLUMNS.findIndex((item)=>item.key === sortBy);
    }, [
        DASHBOARD_COLUMNS,
        sortBy
    ]);
    const getSortParams = (columnIndex)=>({
            sortBy: {
                index: sortByIndex,
                direction,
                defaultDirection: 'asc'
            },
            onSort: (_event, index, direction)=>onSort(_event, DASHBOARD_COLUMNS[index].key, direction),
            columnIndex
        });
    const tableColumns = DASHBOARD_COLUMNS.map((column, index)=>({
            cell: t(column.label),
            props: {
                sort: getSortParams(index)
            }
        }));
    const tableRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (persesDashboardsLoading) {
            return [];
        }
        return persesDashboards.map((board)=>{
            const metadata = board?.metadata;
            const displayName = board?.spec?.display?.name || metadata?.name;
            const dashboardsParams = `?dashboard=${metadata?.name}&project=${metadata?.project}`;
            const dashboardName = {
                link: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_15__.Link, {
                    to: `${dashboardBaseURL}${dashboardsParams}`,
                    "data-test": `perseslistpage-${board?.metadata?.name}`,
                    children: displayName
                }),
                label: displayName || ''
            };
            return {
                name: dashboardName,
                project: board?.metadata?.project || '',
                created: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_17__.Timestamp, {
                    timestamp: metadata?.createdAt
                }),
                modified: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_17__.Timestamp, {
                    timestamp: metadata?.updatedAt
                }),
                createdAt: metadata?.createdAt,
                updatedAt: metadata?.updatedAt,
                dashboard: board
            };
        });
    }, [
        dashboardBaseURL,
        persesDashboards,
        persesDashboardsLoading
    ]);
    const filteredData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>tableRows.filter((item)=>(!filters.name || item.name?.label?.toLocaleLowerCase().includes(filters.name?.toLocaleLowerCase())) && (!filters['project-filter'] || item.project?.toLocaleLowerCase().includes(filters['project-filter']?.toLocaleLowerCase())) && (activeProject === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_23__.ALL_NAMESPACES_KEY || item.project === activeProject)), [
        filters,
        tableRows,
        activeProject
    ]);
    const sortedAndFilteredData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>sortDashboardData(filteredData, sortBy, direction), [
        filteredData,
        sortBy,
        direction
    ]);
    const [targetedDashboard, setTargetedDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isRenameModalOpen, setIsRenameModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDuplicateModalOpen, setIsDuplicateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleRenameModalOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((dashboard)=>{
        setTargetedDashboard(dashboard);
        setIsRenameModalOpen(true);
    }, []);
    const handleRenameModalClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsRenameModalOpen(false);
        setTargetedDashboard(undefined);
    }, []);
    const handleDuplicateModalOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((dashboard)=>{
        setTargetedDashboard(dashboard);
        setIsDuplicateModalOpen(true);
    }, []);
    const handleDuplicateModalClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsDuplicateModalOpen(false);
        setTargetedDashboard(undefined);
    }, []);
    const handleDeleteModalOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((dashboard)=>{
        setTargetedDashboard(dashboard);
        setIsDeleteModalOpen(true);
    }, []);
    const handleDeleteModalClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsDeleteModalOpen(false);
        setTargetedDashboard(undefined);
    }, []);
    const emptyRowActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                title: t("You don't have permissions for dashboard actions"),
                onClick: ()=>{}
            }
        ], [
        t
    ]);
    const pageRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return sortedAndFilteredData.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(({ name, project, created, modified, dashboard })=>[
                name.link,
                project,
                created,
                modified,
                {
                    cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardActionsCell, {
                        project: project,
                        dashboard: dashboard,
                        onRename: handleRenameModalOpen,
                        onDuplicate: handleDuplicateModalOpen,
                        onDelete: handleDeleteModalOpen,
                        emptyActions: emptyRowActions
                    }),
                    props: {
                        isActionCell: true
                    }
                }
            ]);
    }, [
        sortedAndFilteredData,
        page,
        perPage,
        emptyRowActions,
        handleRenameModalOpen,
        handleDuplicateModalOpen,
        handleDeleteModalOpen
    ]);
    const hasFiltersApplied = filters.name || filters['project-filter'];
    const hasData = sortedAndFilteredData.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_8__.DataView, {
        className: "pf-v6-u-m-lg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_12__.DataViewToolbar, {
                ouiaId: "PersesDashList-DataViewHeader",
                clearAllFilters: clearAllFilters,
                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_24__.TablePagination, {
                    itemCount: sortedAndFilteredData.length,
                    ...pagination
                }),
                filters: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataViewFilters__WEBPACK_IMPORTED_MODULE_9__.DataViewFilters, {
                    onChange: (_e, values)=>onSetFilters(values),
                    values: filters,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTextFilter__WEBPACK_IMPORTED_MODULE_11__.DataViewTextFilter, {
                            filterId: "name",
                            title: t('Name'),
                            placeholder: t('Filter by name'),
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__.listPersesDashboardsDataTestIDs.NameFilter
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTextFilter__WEBPACK_IMPORTED_MODULE_11__.DataViewTextFilter, {
                            filterId: "project-filter",
                            title: t('Project'),
                            placeholder: t('Filter by project'),
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__.listPersesDashboardsDataTestIDs.ProjectFilter
                        })
                    ]
                })
            }),
            hasData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_21__.RenameActionModal, {
                        dashboard: targetedDashboard,
                        isOpen: isRenameModalOpen,
                        onClose: handleRenameModalClose,
                        handleModalClose: handleRenameModalClose
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_21__.DuplicateActionModal, {
                        dashboard: targetedDashboard,
                        isOpen: isDuplicateModalOpen,
                        onClose: handleDuplicateModalClose,
                        handleModalClose: handleDuplicateModalClose
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_21__.DeleteActionModal, {
                        dashboard: targetedDashboard,
                        isOpen: isDeleteModalOpen,
                        onClose: handleDeleteModalClose,
                        handleModalClose: handleDeleteModalClose
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_10__.DataViewTable, {
                        "aria-label": "Perses Dashboards List",
                        ouiaId: 'PersesDashList-DataViewTable',
                        columns: tableColumns,
                        rows: pageRows
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyState, {
                variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyStateVariant.sm,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_6__.Title, {
                        headingLevel: "h4",
                        size: "lg",
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__.listPersesDashboardsDataTestIDs.EmptyStateTitle,
                        children: hasFiltersApplied ? t('No results found') : t('No dashboards found')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyStateBody, {
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__.listPersesDashboardsDataTestIDs.EmptyStateBody,
                        children: hasFiltersApplied ? t('No results match the filter criteria. Clear filters to show results.') : t('No Perses dashboards are currently available in this project.')
                    }),
                    hasFiltersApplied && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        onClick: clearAllFilters,
                        className: "pf-c-button pf-m-link",
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_18__.listPersesDashboardsDataTestIDs.ClearAllFiltersButton,
                        children: t('Clear all filters')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_12__.DataViewToolbar, {
                ouiaId: "PersesDashList-DataViewFooter",
                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_24__.TablePagination, {
                    itemCount: sortedAndFilteredData.length,
                    ...pagination
                })
            })
        ]
    });
};
const DashboardList = ()=>{
    const { activeProjectDashboardsMetadata, changeBoard, dashboardName, activeProject, persesDashboards, combinedInitialLoad } = (0,_hooks_useDashboardsData__WEBPACK_IMPORTED_MODULE_3__.useDashboardsData)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_list_frame__WEBPACK_IMPORTED_MODULE_19__.DashboardListFrame, {
        activeProject: activeProject,
        activeProjectDashboardsMetadata: activeProjectDashboardsMetadata,
        changeBoard: changeBoard,
        dashboardName: dashboardName,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardsTable, {
            persesDashboards: persesDashboards,
            persesDashboardsLoading: combinedInitialLoad,
            activeProject: activeProject
        })
    });
};


/***/ },

/***/ "./shared/components/table/table-pagination.tsx"
/*!******************************************************!*\
  !*** ./shared/components/table/table-pagination.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);
//# sourceMappingURL=exposed-DashboardListPage-chunk.js.map