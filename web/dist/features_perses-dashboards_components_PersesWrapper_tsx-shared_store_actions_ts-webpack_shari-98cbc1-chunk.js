(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_perses-dashboards_components_PersesWrapper_tsx-shared_store_actions_ts-webpack_shari-98cbc1"],{

/***/ "./features/perses-dashboards/components/PersesWrapper.tsx"
/*!*****************************************************************!*\
  !*** ./features/perses-dashboards/components/PersesWrapper.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersesPrometheusDatasourceWrapper: () => (/* binding */ PersesPrometheusDatasourceWrapper),
/* harmony export */   PersesWrapper: () => (/* binding */ PersesWrapper),
/* harmony export */   useRemotePluginLoader: () => (/* binding */ useRemotePluginLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils_perses_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/perses-config */ "./features/perses-dashboards/utils/perses-config.ts");
/* harmony import */ var _utils_perses_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_perses_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartTheme/ChartThemeColor.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartUtils/chart-theme.js");
/* harmony import */ var _perses_dev_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perses-dev/components */ "../node_modules/@perses-dev/components/dist/index.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/context/VariableProvider/VariableProvider.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/context/DatasourceStoreProvider.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/context/DashboardProvider/DashboardProvider.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/keyboard-shortcuts/PanelFocusProvider.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/components/PluginRegistry/PluginRegistry.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/context/ValidationProvider.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/DataQueriesProvider/DataQueriesProvider.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/TimeRangeProvider/TimeRangeProviders.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/plugin-registry.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/TimeRangeProvider/query-params.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/RouterProvider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/hooks/usePatternflyTheme */ "./shared/hooks/usePatternflyTheme.ts");
/* harmony import */ var _utils_datasource_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/datasource-api */ "./features/perses-dashboards/utils/datasource-api.ts");
/* harmony import */ var _utils_perses_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/perses-client */ "./features/perses-dashboards/utils/perses-client.ts");
/* harmony import */ var _utils_perses_datasource_cache_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/perses/datasource-cache-api */ "./features/perses-dashboards/utils/perses/datasource-cache-api.ts");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_color_gray_95.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_color_white.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_background_color_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_background_color_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_500.js");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/remote/remotePluginLoader.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_35__);



















// Override eChart defaults with PatternFly colors.
const patternflyBlue100 = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__.chart_color_blue_100.value;
const patternflyBlue300 = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__.chart_color_blue_300.value;
const patternflyBlue400 = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__.chart_color_blue_400.value;
const patternflyBlue500 = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__.chart_color_blue_500.value;
const patternflyBlue600 = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__.chart_color_blue_100.value;
const defaultPaletteColors = [
    patternflyBlue400,
    patternflyBlue500,
    patternflyBlue600
];
const chartColorScale = (0,_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__.getThemeColors)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__.ChartThemeColor.multiUnordered).chart.colorScale;
const patternflyChartsMultiUnorderedPalette = Array.isArray(chartColorScale) ? chartColorScale.flatMap((cssColor)=>{
    // colors stored as 'var(--pf-chart-theme--multi-color-unordered--ColorScale--3400, #73c5c5)'
    // need to extract the hex value, because fillStyle() of <canvas> does not support CSS vars
    const match = cssColor.match(/#[a-fA-F0-9]+/);
    return match ? [
        match[0]
    ] : [];
}) : [];
const mapPatterflyThemeToMUI = (theme)=>{
    const isDark = theme === 'dark';
    const primaryTextColor = isDark ? _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_color_white.value : _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_color_gray_95.value;
    const primaryBackgroundColor = isDark ? _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__.t_global_background_color_400.value : _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_global_background_color_100.value;
    return {
        typography: {
            ..._perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.typography,
            fontFamily: 'var(--pf-t--global--font--family--body)',
            subtitle1: {
                // Card Heading
                fontFamily: 'var(--pf-t--global--font--family--heading)',
                fontWeight: 'var(--pf-t--global--font--weight--heading--default)',
                lineHeight: 'var(--pf-v6-c-card__title-text--LineHeight)',
                fontSize: 'var(--pf-t--global--font--size--heading--sm)'
            },
            h2: {
                // Panel Group Heading
                fontWeight: 'var(--pf-t--global--font--weight--body--default)',
                fontSize: 'var(--pf-t--global--font--size--600)'
            }
        },
        palette: {
            mode: isDark ? 'dark' : 'light',
            // Help CodeMirror detect theme mode
            primary: {
                light: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__.chart_color_blue_100.value,
                main: patternflyBlue300,
                dark: patternflyBlue500,
                contrastText: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_color_white.value
            },
            secondary: {
                main: primaryTextColor,
                light: primaryTextColor,
                dark: primaryTextColor
            },
            background: {
                default: primaryBackgroundColor,
                paper: primaryBackgroundColor,
                navigation: primaryBackgroundColor,
                code: primaryBackgroundColor,
                tooltip: primaryBackgroundColor,
                lighter: primaryBackgroundColor,
                border: primaryBackgroundColor
            },
            text: {
                primary: primaryTextColor,
                secondary: primaryTextColor,
                disabled: primaryTextColor,
                navigation: primaryTextColor,
                accent: primaryTextColor,
                link: primaryTextColor,
                linkHover: primaryTextColor
            }
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        // Custom Time Range Selector
                        '&.MuiClock-meridiemText': {
                            color: primaryTextColor
                        }
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 'var(--pf-t--global--border--radius--medium)',
                        borderColor: 'var(--pf-t--global--border--color--default)'
                    }
                }
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        '&.MuiCardHeader-root': {
                            borderBottom: 'none',
                            paddingBlockEnd: 'var(--pf-t--global--spacer--md)',
                            paddingBlockStart: 'var(--pf-t--global--spacer--md)',
                            paddingLeft: 'var(--pf-t--global--spacer--md)',
                            paddingRight: 'var(--pf-t--global--spacer--md)'
                        }
                    }
                }
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        '&.MuiCardContent-root': {
                            borderTop: 'none',
                            '&:last-child': {
                                paddingBottom: 'var(--pf-t--global--spacer--md)',
                                paddingLeft: 'var(--pf-t--global--spacer--sm)',
                                paddingRight: 'var(--pf-t--global--spacer--md)'
                            }
                        }
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--pf-t--global--border--color--default)'
                    },
                    root: {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--pf-t--global--border--color--default)'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--pf-t--global--border--color--default)'
                        }
                    },
                    input: {
                        // Dashboard Variables >> Text Variable
                        padding: '8.5px 14px'
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    icon: {
                        color: primaryTextColor
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&.MuiButton-colorPrimary': {
                            borderRadius: 'var(--pf-t--global--border--radius--pill)',
                            borderColor: 'var(--pf-t--global--border--color--default)',
                            color: isDark ? patternflyBlue100 : patternflyBlue300
                        },
                        // Buttons with colored backgrounds should have white text
                        '&.MuiButton-contained.MuiButton-colorPrimary': {
                            color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_color_white.value
                        }
                    }
                }
            },
            MuiButtonGroup: {
                styleOverrides: {
                    root: {
                        // Remove border-radius from button groups to prevent pill shape
                        '& .MuiButton-root': {
                            borderRadius: 'var(--pf-t--global--border--radius--tiny) !important'
                        }
                    },
                    grouped: {
                        borderRadius: 'var(--pf-t--global--border--radius--tiny)  !important'
                    },
                    firstButton: {
                        borderRadius: 'var(--pf-t--global--border--radius--tiny)  !important'
                    },
                    lastButton: {
                        borderRadius: 'var(--pf-t--global--border--radius--tiny)  !important'
                    },
                    middleButton: {
                        borderRadius: 'var(--pf-t--global--border--radius--tiny)  !important'
                    }
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        // Align placeholder text in Editing Panel
                        '&.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-sizeMedium.MuiInputLabel-outlined.MuiFormLabel-colorPrimary[data-shrink="false"]': {
                            top: '-7px'
                        }
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        // Selected tab color
                        '&.MuiButtonBase-root.MuiTab-root.Mui-selected': {
                            color: isDark ? patternflyBlue100 : patternflyBlue300
                        }
                    }
                }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        // Tab indicator should match color of selected MuiTab
                        '&.MuiTabs-indicator': {
                            backgroundColor: isDark ? patternflyBlue100 : patternflyBlue300
                        }
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        // Editing Variables Panel
                        '&.MuiDrawer-paper.MuiDrawer-paperAnchorRight': {
                            borderTopLeftRadius: 'var(--pf-t--global--border--radius--medium) !important',
                            borderBottomLeftRadius: 'var(--pf-t--global--border--radius--medium) !important',
                            borderTopRightRadius: '0 !important',
                            borderBottomRightRadius: '0 !important'
                        },
                        '&.MuiDrawer-paper.MuiDrawer-paperAnchorLeft': {
                            borderTopRightRadius: 'var(--pf-t--global--border--radius--medium) !important',
                            borderBottomRightRadius: 'var(--pf-t--global--border--radius--medium) !important',
                            borderTopLeftRadius: '0 !important',
                            borderBottomLeftRadius: '0 !important'
                        },
                        // Editing Variable Panel - drawer cancel button
                        '& .MuiButton-colorSecondary': {
                            borderRadius: 'var(--pf-t--global--border--radius--pill) !important'
                        }
                    }
                }
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        // Editing Variables Panel
                        borderRadius: 'var(--pf-t--global--border--radius--medium) !important',
                        '&.MuiAccordion-root': {
                            borderRadius: 'var(--pf-t--global--border--radius--medium) !important'
                        },
                        // Hide the separator line above accordion
                        '&::before': {
                            opacity: '0 !important'
                        },
                        backgroundColor: 'var(--pf-t--global--background--color--action--plain--default) !important'
                    }
                }
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        // Editing Variables Panel - accordion header
                        borderRadius: 'var(--pf-t--global--border--radius--medium) !important',
                        backgroundColor: 'var(--pf-t--global--background--color--floating--default) !important',
                        '&.Mui-expanded': {
                            borderBottomLeftRadius: '0 !important',
                            borderBottomRightRadius: '0 !important',
                            borderTopLeftRadius: 'var(--pf-t--global--border--radius--medium) !important',
                            borderTopRightRadius: 'var(--pf-t--global--border--radius--medium) !important'
                        }
                    }
                }
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {
                        // Editing Variables Panel - accordion contents
                        backgroundColor: 'var(--pf-t--global--background--color--floating--default) !important',
                        borderBottomLeftRadius: 'var(--pf-t--global--border--radius--medium) !important',
                        borderBottomRightRadius: 'var(--pf-t--global--border--radius--medium) !important',
                        borderTopLeftRadius: '0 !important',
                        borderTopRightRadius: '0 !important'
                    }
                }
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        // Uniform font weight in all table cells
                        fontWeight: 'var(--pf-t--global--font--weight--body--default) !important'
                    }
                }
            }
        }
    };
};
function useRemotePluginLoader() {
    const pluginLoader = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>(0,_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_34__.remotePluginLoader)({
            baseURL: window.PERSES_PLUGIN_ASSETS_PATH,
            apiPrefix: window.PERSES_PLUGIN_ASSETS_PATH
        }), []);
    return pluginLoader;
}
function PersesWrapper({ children, project }) {
    const { theme } = (0,_shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_18__.usePatternFlyTheme)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_35__.useNavigate)();
    const muiTheme = (0,_perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.getTheme)(theme, {
        shape: {
            borderRadius: 6
        },
        ...mapPatterflyThemeToMUI(theme)
    });
    const chartsTheme = (0,_perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.generateChartsTheme)(muiTheme, {
        echartsTheme: {
            color: patternflyChartsMultiUnorderedPalette
        },
        thresholds: {
            defaultColor: patternflyBlue300,
            palette: defaultPaletteColors
        }
    });
    const pluginLoader = useRemotePluginLoader();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        theme: muiTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_16__.RouterProvider, {
            RouterComponent: react_router__WEBPACK_IMPORTED_MODULE_35__.Link,
            navigate: navigate,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.ChartsProvider, {
                chartsTheme: chartsTheme,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.SnackbarProvider, {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    variant: "default",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_10__.PluginRegistry, {
                        pluginLoader: pluginLoader,
                        children: !project ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: children
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerWrapper, {
                            project: project,
                            children: children
                        })
                    })
                })
            })
        })
    });
}
function InnerWrapper({ children, project }) {
    const [dashboardName] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_31__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__.QueryParams.Dashboard, use_query_params__WEBPACK_IMPORTED_MODULE_31__.StringParam);
    const { data } = (0,_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_14__.usePluginBuiltinVariableDefinitions)();
    const { persesDashboard, persesDashboardLoading } = (0,_utils_perses_client__WEBPACK_IMPORTED_MODULE_20__.useFetchPersesDashboard)(project, dashboardName);
    const DEFAULT_DASHBOARD_DURATION = '30m';
    const DEFAULT_REFRESH_INTERVAL = '0s';
    const dashboardDuration = persesDashboard?.spec?.duration;
    const dashboardTimeInterval = persesDashboard?.spec?.refreshInterval;
    const effectiveDuration = dashboardDuration || DEFAULT_DASHBOARD_DURATION;
    const effectiveRefreshInterval = dashboardTimeInterval || DEFAULT_REFRESH_INTERVAL;
    const initialTimeRange = (0,_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_15__.useInitialTimeRange)(effectiveDuration);
    const initialRefreshInterval = (0,_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_15__.useInitialRefreshInterval)(effectiveRefreshInterval);
    const builtinVariables = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>{
        const result = [
            {
                kind: 'BuiltinVariable',
                spec: {
                    name: '__dashboard',
                    value: ()=>dashboardName,
                    source: 'Dashboard',
                    display: {
                        name: '__dashboard',
                        description: 'The name of the current dashboard',
                        hidden: true
                    }
                }
            },
            {
                kind: 'BuiltinVariable',
                spec: {
                    name: '__project',
                    value: ()=>project,
                    source: 'Dashboard',
                    display: {
                        name: '__project',
                        description: 'The name of the current dashboard project',
                        hidden: true
                    }
                }
            }
        ];
        if (data) {
            data.forEach((def)=>result.push(def));
        }
        return result;
    }, [
        data,
        project,
        dashboardName
    ]);
    if (persesDashboardLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_33__.LoadingBox, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_13__.TimeRangeProviderWithQueryParams, {
        initialTimeRange: initialTimeRange,
        initialRefreshInterval: initialRefreshInterval,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_6__.VariableProviderWithQueryParams, {
            builtinVariableDefinitions: builtinVariables,
            initialVariableDefinitions: persesDashboard?.spec?.variables,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PersesPrometheusDatasourceWrapper, {
                queries: [],
                dashboardResource: persesDashboard,
                children: persesDashboard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_8__.DashboardProvider, {
                    initialState: {
                        dashboardResource: persesDashboard
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_11__.ValidationProvider, {
                        children: children
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: children
                })
            })
        }, persesDashboard?.metadata.name)
    });
}
function PersesPrometheusDatasourceWrapper({ queries, children, dashboardResource }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_32__.useTranslation)("plugin__monitoring-plugin");
    const datasourceApi = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>{
        return new _utils_perses_datasource_cache_api__WEBPACK_IMPORTED_MODULE_21__.CachedDatasourceAPI(new _utils_datasource_api__WEBPACK_IMPORTED_MODULE_19__.OcpDatasourceApi(t, _utils_perses_client__WEBPACK_IMPORTED_MODULE_20__.PERSES_PROXY_BASE_PATH));
    }, [
        t
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_9__.PanelFocusProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_7__.DatasourceStoreProvider, {
            dashboardResource: dashboardResource,
            datasourceApi: datasourceApi,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_12__.DataQueriesProvider, {
                definitions: queries,
                children: children
            })
        })
    });
}


/***/ },

/***/ "./features/perses-dashboards/utils/datasource-api.ts"
/*!************************************************************!*\
  !*** ./features/perses-dashboards/utils/datasource-api.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcpDatasourceApi: () => (/* binding */ OcpDatasourceApi)
/* harmony export */ });
/* harmony import */ var _perses_datasource_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perses/datasource-client */ "./features/perses-dashboards/utils/perses/datasource-client.ts");
/* harmony import */ var _perses_global_datasource_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perses/global-datasource-client */ "./features/perses-dashboards/utils/perses/global-datasource-client.ts");
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


class OcpDatasourceApi {
    /**
   * Helper function for getting a proxy URL from separate input parameters.
   * Give the following output according to the definition or not of the input.
   * - /proxy/globaldatasources/{name}
   * - /proxy/projects/{project}/datasources/{name}
   * - /proxy/projects/{project}/dashboards/{dashboard}/{name}
   *
   * NB: despite the fact it's possible, it is useless to give a dashboard without a project as
   * the url will for sure correspond to nothing.
   * @param name
   * @param dashboard
   * @param project
   */ buildProxyUrl({ project, dashboard, name }) {
        let url = `${!project && !dashboard ? 'globaldatasources' : 'datasources'}/${encodeURIComponent(name)}`;
        if (dashboard) {
            throw new Error('Dashboard level datasources are not supported in OpenShift, please use a project or global level datasource');
        }
        if (project) {
            url = `projects/${encodeURIComponent(project)}/${url}`;
        }
        return `${this.basePath}/proxy/${url}`;
    }
    listDatasources(project, pluginKind) {
        return (0,_perses_datasource_client__WEBPACK_IMPORTED_MODULE_0__.fetchDatasourceList)(project, pluginKind);
    }
    listGlobalDatasources(pluginKind) {
        return (0,_perses_global_datasource_client__WEBPACK_IMPORTED_MODULE_1__.fetchGlobalDatasourceList)(pluginKind);
    }
    constructor(t, basePath){
        _define_property(this, "t", void 0);
        _define_property(this, "basePath", void 0);
        _define_property(this, "getDatasource", void 0);
        _define_property(this, "getGlobalDatasource", void 0);
        this.t = t;
        this.basePath = basePath;
        this.getDatasource = async (project, selector)=>{
            return (0,_perses_datasource_client__WEBPACK_IMPORTED_MODULE_0__.fetchDatasourceList)(project, selector.kind, selector.name ? undefined : true, selector.name).then((list)=>{
                if (!Array.isArray(list) || list.length === 0) {
                    // eslint-disable-next-line no-console
                    console.warn('No matching local datasource found');
                    return undefined;
                }
                const datasource = list[0];
                return datasource;
            });
        };
        this.getGlobalDatasource = async (selector)=>{
            return (0,_perses_global_datasource_client__WEBPACK_IMPORTED_MODULE_1__.fetchGlobalDatasourceList)(selector.kind, selector.name ? undefined : true, selector.name).then((list)=>{
                if (!Array.isArray(list) || list.length === 0) {
                    // eslint-disable-next-line no-console
                    console.warn('No matching global datasource found');
                    return undefined;
                }
                const datasource = list[0];
                return datasource;
            });
        };
    }
}


/***/ },

/***/ "./features/perses-dashboards/utils/perses-config.ts"
/*!***********************************************************!*\
  !*** ./features/perses-dashboards/utils/perses-config.ts ***!
  \***********************************************************/
() {

/**
 * Perses Plugin Configuration
 *
 * This module configures global variables needed for Perses plugins to load assets
 * through the OpenShift Console monitoring plugin proxy. The proxy path is injected
 * at build time via webpack DefinePlugin.
 */ // Build-time injected proxy URL for Perses plugins
// Configuration object for Perses app compatibility
const PERSES_APP_CONFIG = {
    api_prefix: "/api/proxy/plugin/monitoring-console-plugin/perses"
};
// Set up window globals for plugin system compatibility
// These are needed for plugins that use getPublicPath() in their Module Federation configs
window.PERSES_APP_CONFIG = PERSES_APP_CONFIG;
window.PERSES_PLUGIN_ASSETS_PATH = "/api/proxy/plugin/monitoring-console-plugin/perses";


/***/ },

/***/ "./features/perses-dashboards/utils/perses/datasource-cache-api.ts"
/*!*************************************************************************!*\
  !*** ./features/perses-dashboards/utils/perses/datasource-cache-api.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachedDatasourceAPI: () => (/* binding */ CachedDatasourceAPI)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk-internal */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk-internal");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "../node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
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
// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


let Cache = class Cache {
    setDatasources(list) {
        for (const dts of list){
            this.setDatasource(dts);
        }
    }
    setDatasource(dts) {
        const kind = dts.spec.plugin.kind;
        const project = dts.metadata.project;
        if (dts.spec.default) {
            // in case it's the default datasource for the given kind, we store it twice
            // because we might get the datasource with the name or because we want the default one.
            this.datasources.set(this.generateKey({
                kind: kind
            }, project), dts);
        }
        this.datasources.set(this.generateKey({
            kind: kind,
            name: dts.metadata.name
        }, project), dts);
    }
    setUndefinedDatasource(project, selector) {
        this.emptyDatasources.set(this.generateKey(selector, project), true);
    }
    getDatasource(project, selector) {
        const key = this.generateKey(selector, project);
        const resource = this.datasources.get(this.generateKey(selector, project));
        let keyExists = true;
        if (resource === undefined) {
            keyExists = this.emptyDatasources.has(key);
        }
        return {
            resource: resource,
            keyExist: keyExists
        };
    }
    setGlobalDatasources(list) {
        for (const dts of list){
            this.setGlobalDatasource(dts);
        }
    }
    setGlobalDatasource(dts) {
        const kind = dts.spec.plugin.kind;
        if (dts.spec.default) {
            // in case it's the default datasource for the given kind, we store it twice
            // because we might get the datasource with the name or because we want the default one.
            this.globalDatasources.set(this.generateKey({
                kind: kind
            }), dts);
        }
        this.globalDatasources.set(this.generateKey({
            kind: kind,
            name: dts.metadata.name
        }), dts);
    }
    setUndefinedGlobalDatasource(selector) {
        this.emptyDatasources.set(this.generateKey(selector), true);
    }
    getGlobalDatasource(selector) {
        const key = this.generateKey(selector);
        const resource = this.globalDatasources.get(this.generateKey(selector));
        let keyExists = true;
        if (resource === undefined) {
            keyExists = this.emptyDatasources.has(key);
        }
        return {
            resource: resource,
            keyExist: keyExists
        };
    }
    generateKey(selector, project) {
        let key = selector.kind;
        if (selector.name !== undefined) {
            key += `-${selector.name}`;
        }
        if (project !== undefined) {
            key += `-${project}`;
        }
        return key;
    }
    constructor(){
        _define_property(this, "datasources", void 0);
        _define_property(this, "emptyDatasources", void 0);
        _define_property(this, "globalDatasources", void 0);
        // We want to have a cache expiration set to 5min and removed automatically the old values.
        // The option below is setting that.
        // Note: TTL (Time To Leave) is in millisecond.
        const option = {
            ttl: 5 * 60 * 1000,
            ttlAutopurge: true
        };
        this.globalDatasources = new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())(option);
        this.datasources = new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())(option);
        this.emptyDatasources = new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())(option);
    }
};
//TODO: Move to tanstack query for caching
class CachedDatasourceAPI {
    getDatasource(project, selector) {
        const { resource, keyExist } = this.cache.getDatasource(project, selector);
        if (resource) {
            return Promise.resolve(addCsrfToken(resource));
        }
        if (keyExist) {
            // in case the keyExist, then it means we already did the query,
            // but the datasource doesn't exist. So we can safely return an undefined Promise.
            return Promise.resolve(undefined);
        }
        return this.client.getDatasource(project, selector).then((result)=>{
            if (result === undefined) {
                // in case the result is undefined, we should then notify
                // that the datasource doesn't exist for the given selector.
                // Like that, next time another panel ask for the exact same
                // datasource (with the same selector), then we won't query the server to try it again.
                // It's ok to do it as the cache has an expiration of 5min.
                // We have the same logic for the globalDatasources.
                this.cache.setUndefinedDatasource(project, selector);
            } else {
                this.cache.setDatasource(result);
            }
            return addCsrfToken(result);
        });
    }
    getGlobalDatasource(selector) {
        const { resource, keyExist } = this.cache.getGlobalDatasource(selector);
        if (resource) {
            return Promise.resolve(addCsrfToken(resource));
        }
        if (keyExist) {
            return Promise.resolve(undefined);
        }
        return this.client.getGlobalDatasource(selector).then((result)=>{
            if (result === undefined) {
                this.cache.setUndefinedGlobalDatasource(selector);
            } else {
                this.cache.setGlobalDatasource(result);
            }
            return addCsrfToken(result);
        });
    }
    listDatasources(project, pluginKind) {
        return this.client.listDatasources(project, pluginKind).then((list)=>{
            this.cache.setDatasources(list);
            return list;
        });
    }
    listGlobalDatasources(pluginKind) {
        return this.client.listGlobalDatasources(pluginKind).then((list)=>{
            this.cache.setGlobalDatasources(list);
            return list;
        });
    }
    constructor(client){
        _define_property(this, "client", void 0);
        _define_property(this, "cache", void 0);
        _define_property(this, "buildProxyUrl", void 0);
        this.client = client;
        this.cache = new Cache();
        this.buildProxyUrl = this.client.buildProxyUrl?.bind(this.client);
    }
}
// Perses panels use @perses-dev/core fetch internally, this is a workaround to add the
// CSRF token needed in the OpenShift console.
// TODO: Remove once Perses supports overriding the internal fetch function.
const addCsrfToken = (datasource)=>{
    if (!datasource?.spec?.plugin?.spec) {
        return datasource;
    }
    const pluginSpec = datasource.spec.plugin.spec;
    const proxySpec = pluginSpec.proxy?.spec;
    const existingHeaders = proxySpec?.headers ?? {};
    datasource.spec.plugin.spec = {
        ...pluginSpec,
        proxy: {
            spec: {
                ...proxySpec,
                headers: {
                    ...existingHeaders,
                    'X-CSRFToken': (0,_openshift_console_dynamic_plugin_sdk_internal__WEBPACK_IMPORTED_MODULE_0__.getCSRFToken)(),
                    'Sec-Fetch-Site': 'same-origin'
                }
            }
        }
    };
    return datasource;
};


/***/ },

/***/ "./features/perses-dashboards/utils/perses/datasource-client.ts"
/*!**********************************************************************!*\
  !*** ./features/perses-dashboards/utils/perses/datasource-client.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDatasourceQueryParameters: () => (/* binding */ buildDatasourceQueryParameters),
/* harmony export */   fetchDatasourceList: () => (/* binding */ fetchDatasourceList),
/* harmony export */   resource: () => (/* binding */ resource)
/* harmony export */ });
/* harmony import */ var _url_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-builder */ "./features/perses-dashboards/utils/perses/url-builder.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const resource = 'datasources';
function buildDatasourceQueryParameters(kind, defaultDatasource, name) {
    const q = new URLSearchParams();
    if (kind !== undefined) {
        q.append('kind', kind);
    }
    if (defaultDatasource !== undefined) {
        q.append('default', String(defaultDatasource));
    }
    if (name !== undefined) {
        q.append('name', name);
    }
    return q;
}
function fetchDatasourceList(project, kind, defaultDatasource, name) {
    const url = (0,_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: resource,
        project: project,
        queryParams: buildDatasourceQueryParameters(kind, defaultDatasource, name)
    });
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON)(url);
}


/***/ },

/***/ "./features/perses-dashboards/utils/perses/global-datasource-client.ts"
/*!*****************************************************************************!*\
  !*** ./features/perses-dashboards/utils/perses/global-datasource-client.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchGlobalDatasourceList: () => (/* binding */ fetchGlobalDatasourceList)
/* harmony export */ });
/* harmony import */ var _url_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-builder */ "./features/perses-dashboards/utils/perses/url-builder.ts");
/* harmony import */ var _datasource_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource-client */ "./features/perses-dashboards/utils/perses/datasource-client.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



const globalDatasourceResource = 'globaldatasources';
function fetchGlobalDatasourceList(kind, defaultDatasource, name) {
    const url = (0,_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: globalDatasourceResource,
        queryParams: (0,_datasource_client__WEBPACK_IMPORTED_MODULE_1__.buildDatasourceQueryParameters)(kind, defaultDatasource, name)
    });
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.consoleFetchJSON)(url);
}


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

/***/ "./shared/console/console-shared/src/components/loading/Loading.tsx"
/*!**************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/Loading.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");


const Loading = ({ className })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: className,
        "data-test": "loading-indicator",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            size: "lg"
        })
    });
Loading.displayName = 'Loading';


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

/***/ "./shared/store/actions.ts"
/*!*********************************!*\
  !*** ./shared/store/actions.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   alertingApplySilences: () => (/* binding */ alertingApplySilences),
/* harmony export */   alertingClearSelectorData: () => (/* binding */ alertingClearSelectorData),
/* harmony export */   alertingSetErrored: () => (/* binding */ alertingSetErrored),
/* harmony export */   alertingSetLoading: () => (/* binding */ alertingSetLoading),
/* harmony export */   alertingSetRulesLoaded: () => (/* binding */ alertingSetRulesLoaded),
/* harmony export */   alertingSetSilencesErrored: () => (/* binding */ alertingSetSilencesErrored),
/* harmony export */   alertingSetSilencesLoaded: () => (/* binding */ alertingSetSilencesLoaded),
/* harmony export */   dashboardsAddPersesPanelExternally: () => (/* binding */ dashboardsAddPersesPanelExternally),
/* harmony export */   dashboardsOpened: () => (/* binding */ dashboardsOpened),
/* harmony export */   dashboardsPatchAllVariables: () => (/* binding */ dashboardsPatchAllVariables),
/* harmony export */   dashboardsPatchVariable: () => (/* binding */ dashboardsPatchVariable),
/* harmony export */   dashboardsPersesPanelExternallyAdded: () => (/* binding */ dashboardsPersesPanelExternallyAdded),
/* harmony export */   dashboardsVariableOptionsLoaded: () => (/* binding */ dashboardsVariableOptionsLoaded),
/* harmony export */   queryBrowserAddQuery: () => (/* binding */ queryBrowserAddQuery),
/* harmony export */   queryBrowserDeleteAllQueries: () => (/* binding */ queryBrowserDeleteAllQueries),
/* harmony export */   queryBrowserDeleteAllSeries: () => (/* binding */ queryBrowserDeleteAllSeries),
/* harmony export */   queryBrowserDeleteQuery: () => (/* binding */ queryBrowserDeleteQuery),
/* harmony export */   queryBrowserDismissNamespaceAlert: () => (/* binding */ queryBrowserDismissNamespaceAlert),
/* harmony export */   queryBrowserDuplicateQuery: () => (/* binding */ queryBrowserDuplicateQuery),
/* harmony export */   queryBrowserPatchQuery: () => (/* binding */ queryBrowserPatchQuery),
/* harmony export */   queryBrowserRunQueries: () => (/* binding */ queryBrowserRunQueries),
/* harmony export */   queryBrowserSetAllExpanded: () => (/* binding */ queryBrowserSetAllExpanded),
/* harmony export */   queryBrowserSetMetrics: () => (/* binding */ queryBrowserSetMetrics),
/* harmony export */   queryBrowserSetPollInterval: () => (/* binding */ queryBrowserSetPollInterval),
/* harmony export */   queryBrowserSetTimespan: () => (/* binding */ queryBrowserSetTimespan),
/* harmony export */   queryBrowserToggleAllSeries: () => (/* binding */ queryBrowserToggleAllSeries),
/* harmony export */   queryBrowserToggleIsEnabled: () => (/* binding */ queryBrowserToggleIsEnabled),
/* harmony export */   queryBrowserToggleSeries: () => (/* binding */ queryBrowserToggleSeries),
/* harmony export */   setAlertCount: () => (/* binding */ setAlertCount),
/* harmony export */   setAlertsAreLoading: () => (/* binding */ setAlertsAreLoading),
/* harmony export */   setAlertsData: () => (/* binding */ setAlertsData),
/* harmony export */   setAlertsTableData: () => (/* binding */ setAlertsTableData),
/* harmony export */   setFilteredIncidentsData: () => (/* binding */ setFilteredIncidentsData),
/* harmony export */   setIncidentPageFilterType: () => (/* binding */ setIncidentPageFilterType),
/* harmony export */   setIncidents: () => (/* binding */ setIncidents),
/* harmony export */   setIncidentsActiveFilters: () => (/* binding */ setIncidentsActiveFilters),
/* harmony export */   setIncidentsChartSelection: () => (/* binding */ setIncidentsChartSelection),
/* harmony export */   setIncidentsLastRefreshTime: () => (/* binding */ setIncidentsLastRefreshTime),
/* harmony export */   showGraphs: () => (/* binding */ showGraphs),
/* harmony export */   toggleGraphs: () => (/* binding */ toggleGraphs)
/* harmony export */ });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

var ActionType = /*#__PURE__*/ function(ActionType) {
    ActionType["AlertingSetLoading"] = "v2/AlertingSetLoading";
    ActionType["AlertingSetRulesLoaded"] = "v2/AlertingSetRulesLoaded";
    ActionType["AlertingSetSilencesLoaded"] = "v2/AlertingSetSilencesLoaded";
    ActionType["AlertingApplySilences"] = "v2/AlertingApplySilences";
    ActionType["AlertingSetErrored"] = "v2/AlertingSetErrored";
    ActionType["AlertingSetSilencesErrored"] = "v2/AlertingSetSilencesErrored";
    ActionType["AlertingClearSelectorData"] = "v2/AlertingClearSelectorData";
    ActionType["DashboardsPatchAllVariables"] = "v3/dashboardsPatchAllVariables";
    ActionType["DashboardsPatchVariable"] = "v3/dashboardsPatchVariable";
    ActionType["DashboardsVariableOptionsLoaded"] = "v3/dashboardsVariableOptionsLoaded";
    ActionType["DashboardsOpened"] = "dashboardsPersesDashboardsOpened";
    ActionType["DashboardsAddPersesPanelExternally"] = "dashboardsAddPersesPanelExternally";
    ActionType["DashboardsPersesPanelExternallyAdded"] = "dashboardsPersesPanelExternallyAdded";
    ActionType["QueryBrowserAddQuery"] = "queryBrowserAddQuery";
    ActionType["QueryBrowserDuplicateQuery"] = "queryBrowserDuplicateQuery";
    ActionType["QueryBrowserDeleteAllQueries"] = "queryBrowserDeleteAllQueries";
    ActionType["QueryBrowserDeleteAllSeries"] = "queryBrowserDeleteAllSeries";
    ActionType["QueryBrowserDeleteQuery"] = "queryBrowserDeleteQuery";
    ActionType["QueryBrowserDismissNamespaceAlert"] = "queryBrowserDismissNamespaceAlert";
    ActionType["QueryBrowserPatchQuery"] = "queryBrowserPatchQuery";
    ActionType["QueryBrowserRunQueries"] = "queryBrowserRunQueries";
    ActionType["QueryBrowserSetAllExpanded"] = "queryBrowserSetAllExpanded";
    ActionType["QueryBrowserSetMetrics"] = "queryBrowserSetMetrics";
    ActionType["QueryBrowserSetPollInterval"] = "queryBrowserSetPollInterval";
    ActionType["QueryBrowserSetTimespan"] = "queryBrowserSetTimespan";
    ActionType["QueryBrowserToggleIsEnabled"] = "queryBrowserToggleIsEnabled";
    ActionType["QueryBrowserToggleSeries"] = "queryBrowserToggleSeries";
    ActionType["QueryBrowserToggleAllSeries"] = "queryBrowserToggleAllSeries";
    ActionType["SetAlertCount"] = "v2/SetAlertCount";
    ActionType["ToggleGraphs"] = "toggleGraphs";
    ActionType["ShowGraphs"] = "v2/ShowGraphs";
    ActionType["SetIncidents"] = "setIncidents";
    ActionType["SetIncidentsActiveFilters"] = "setIncidentsActiveFilters";
    ActionType["SetAlertsData"] = "setAlertsData";
    ActionType["SetAlertsTableData"] = "setAlertsTableData";
    ActionType["SetAlertsAreLoading"] = "setAlertsAreLoading";
    ActionType["SetIncidentsChartSelection"] = "setIncidentsChartSelection";
    ActionType["SetFilteredIncidentsData"] = "setFilteredIncidentsData";
    ActionType["SetIncidentPageFilterType"] = "setIncidentPageFilterType";
    ActionType["SetIncidentsLastRefreshTime"] = "setIncidentsLastRefreshTime";
    return ActionType;
}({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboardsPatchVariable = (dashboardName, key, patch)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsPatchVariable", {
        dashboardName,
        key,
        patch
    });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboardsPatchAllVariables = (dashboardName, variables)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsPatchAllVariables", {
        dashboardName,
        variables
    });
const dashboardsVariableOptionsLoaded = (dashboardName, key, newOptions)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsVariableOptionsLoaded", {
        dashboardName,
        key,
        newOptions
    });
const dashboardsOpened = (isOpened)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsPersesDashboardsOpened", {
        isOpened
    });
const dashboardsPersesPanelExternallyAdded = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsPersesPanelExternallyAdded", {});
const dashboardsAddPersesPanelExternally = (panelDefinition)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsAddPersesPanelExternally", {
        panelDefinition
    });
const alertingSetLoading = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetLoading", {
        datasource,
        identifier,
        data: {
            loaded: false,
            loadError: null
        }
    });
const alertingSetRulesLoaded = (datasource, identifier, rules, alerts)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetRulesLoaded", {
        datasource,
        identifier,
        rules,
        alerts
    });
const alertingSetSilencesLoaded = (datasource, identifier, silences)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetSilencesLoaded", {
        datasource,
        identifier,
        silences
    });
// New action to trigger the reducer logic
const alertingApplySilences = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingApplySilences", {
        datasource,
        identifier
    });
const alertingSetErrored = (datasource, identifier, loadError)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetErrored", {
        datasource,
        identifier,
        loadError
    });
const alertingSetSilencesErrored = (datasource, identifier, loadError)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetSilencesErrored", {
        datasource,
        identifier,
        loadError
    });
const alertingClearSelectorData = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingClearSelectorData", {
        datasource,
        identifier
    });
const toggleGraphs = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("toggleGraphs");
const showGraphs = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/ShowGraphs");
const queryBrowserAddQuery = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserAddQuery");
const queryBrowserDuplicateQuery = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDuplicateQuery", {
        index
    });
const queryBrowserDeleteAllQueries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteAllQueries");
const queryBrowserDeleteAllSeries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteAllSeries");
const queryBrowserDismissNamespaceAlert = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDismissNamespaceAlert");
const queryBrowserDeleteQuery = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteQuery", {
        index
    });
const queryBrowserPatchQuery = (index, patch)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserPatchQuery", {
        index,
        patch
    });
const queryBrowserRunQueries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserRunQueries");
const queryBrowserSetAllExpanded = (isExpanded)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetAllExpanded", {
        isExpanded
    });
const queryBrowserSetMetrics = (metrics)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetMetrics", {
        metrics
    });
const queryBrowserSetPollInterval = (pollInterval)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetPollInterval", {
        pollInterval
    });
const queryBrowserSetTimespan = (timespan)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetTimespan", {
        timespan
    });
const queryBrowserToggleAllSeries = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleAllSeries", {
        index
    });
const queryBrowserToggleIsEnabled = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleIsEnabled", {
        index
    });
const queryBrowserToggleSeries = (index, labels)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleSeries", {
        index,
        labels
    });
const setAlertCount = (datasource, identifier, alertCount)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/SetAlertCount", {
        alertCount,
        datasource,
        identifier
    });
const setIncidents = (incidents)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidents", incidents);
const setIncidentsActiveFilters = (incidentsActiveFilters)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsActiveFilters", incidentsActiveFilters);
const setAlertsData = (alertsData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsData", alertsData);
const setAlertsTableData = (alertsTableData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsTableData", alertsTableData);
const setAlertsAreLoading = (alertsAreLoading)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsAreLoading", alertsAreLoading);
const setIncidentsChartSelection = (incidentsChartSelectedId)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsChartSelection", incidentsChartSelectedId);
const setFilteredIncidentsData = (filteredIncidentsData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setFilteredIncidentsData", filteredIncidentsData);
const setIncidentPageFilterType = (filterTypeSelected)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentPageFilterType", filterTypeSelected);
const setIncidentsLastRefreshTime = (timestamp)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsLastRefreshTime", {
        timestamp
    });


/***/ },

/***/ "?d91c"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=features_perses-dashboards_components_PersesWrapper_tsx-shared_store_actions_ts-webpack_shari-98cbc1-chunk.js.map