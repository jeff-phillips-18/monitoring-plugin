"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_perses-dashboards_components_dashboard-header_tsx-features_perses-dashboards_compone-9c1565"],{

/***/ "./features/perses-dashboards/components/ToastProvider.tsx"
/*!*****************************************************************!*\
  !*** ./features/perses-dashboards/components/ToastProvider.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastProvider: () => (/* binding */ ToastProvider),
/* harmony export */   useToast: () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");







const ToastContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const useToast = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ToastContext);
    if (!context) {
        throw new Error(t('useToast must be used within ToastProvider'));
    }
    return context;
};
const ToastProvider = ({ children })=>{
    const [alerts, setAlerts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const addAlert = (title, variant)=>{
        const key = new Date().getTime().toString();
        setAlerts((prevAlerts)=>[
                {
                    title,
                    variant,
                    key
                },
                ...prevAlerts
            ]);
    };
    const removeAlert = (key)=>{
        setAlerts((prevAlerts)=>prevAlerts.filter((alert)=>alert.key !== key));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToastContext.Provider, {
        value: {
            addAlert,
            removeAlert,
            alerts
        },
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertGroup, {
                hasAnimations: true,
                isToast: true,
                isLiveRegion: true,
                children: alerts.map(({ key, variant, title })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.Alert, {
                        variant: _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant[variant],
                        title: title,
                        actionClose: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertActionCloseButton, {
                            title: title,
                            variantLabel: `${variant} alert`,
                            onClose: ()=>removeAlert(key)
                        })
                    }, key))
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-action-modals.tsx"
/*!***************************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-action-modals.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteActionModal: () => (/* binding */ DeleteActionModal),
/* harmony export */   DuplicateActionModal: () => (/* binding */ DuplicateActionModal),
/* harmony export */   LabelSpacer: () => (/* binding */ LabelSpacer),
/* harmony export */   RenameActionModal: () => (/* binding */ RenameActionModal),
/* harmony export */   formGroupStyle: () => (/* binding */ formGroupStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/constants */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/constants/@patternfly/react-core/dist/dynamic/helpers/constants");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var _patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-templates/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-templates/dist/dynamic/components/Select/@patternfly/react-templates/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_dashboard_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/dashboard-api */ "./features/perses-dashboards/utils/dashboard-api.ts");
/* harmony import */ var _utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/dashboard-action-validations */ "./features/perses-dashboards/utils/dashboard-action-validations.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hookform/resolvers/zod */ "../node_modules/@hookform/resolvers/zod/dist/zod.mjs");
/* harmony import */ var _perses_dev_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @perses-dev/core */ "../node_modules/@perses-dev/core/dist/utils/text.js");
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ToastProvider */ "./features/perses-dashboards/components/ToastProvider.tsx");
/* harmony import */ var _utils_dashboard_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/dashboard-utils */ "./features/perses-dashboards/utils/dashboard-utils.ts");
/* harmony import */ var _hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../hooks/useEditableProjects */ "./features/perses-dashboards/hooks/useEditableProjects.ts");
/* harmony import */ var _hooks_usePerses__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../hooks/usePerses */ "./features/perses-dashboards/hooks/usePerses.ts");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_weight_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_200.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");


































const formGroupStyle = {
    fontWeight: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_global_font_weight_200.value
};
const LabelSpacer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            paddingBottom: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_global_spacer_200.value
        }
    });
};
const RenameActionModal = ({ dashboard, isOpen, onClose })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__.useToast)();
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_16__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__.zodResolver)((0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_15__.renameDashboardDialogValidationSchema)(t)),
        mode: 'onBlur',
        defaultValues: {
            dashboardName: ''
        }
    });
    const updateDashboardMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_14__.useUpdateDashboardMutation)();
    if (!dashboard) {
        return null;
    }
    const processForm = (data)=>{
        if (dashboard.spec?.display) {
            dashboard.spec.display.name = data.dashboardName;
        } else {
            dashboard.spec.display = {
                name: data.dashboardName
            };
        }
        updateDashboardMutation.mutate(dashboard, {
            onSuccess: (updatedDashboard)=>{
                const msg = t(`Dashboard ${(0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_18__.getResourceExtendedDisplayName)(updatedDashboard)} has been successfully updated`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.success);
                handleClose();
            },
            onError: (err)=>{
                const msg = t(`Could not rename dashboard. ${err}`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.danger);
                throw err;
            }
        });
    };
    const handleClose = ()=>{
        onClose();
        form.reset({
            dashboardName: ''
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.small,
        isOpen: isOpen,
        onClose: handleClose,
        ouiaId: "RenameModal",
        "aria-labelledby": "rename-modal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                title: t('Rename Dashboard'),
                labelId: "rename-modal-title"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__.FormProvider, {
                ...form,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: form.handleSubmit(processForm),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                            id: "rename-modal-box",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__.Controller, {
                                control: form.control,
                                name: "dashboardName",
                                render: ({ field, fieldState })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                                        label: t('Dashboard name'),
                                        isRequired: true,
                                        fieldId: "rename-modal-form-group",
                                        style: formGroupStyle,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelSpacer, {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_4__.TextInput, {
                                                ...field,
                                                isRequired: true,
                                                type: "text",
                                                id: "rename-modal-text-input",
                                                name: "rename-modal-text-input",
                                                validated: fieldState.error ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.ValidatedOptions.error : _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.ValidatedOptions.default
                                            }),
                                            fieldState.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperText, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItem, {
                                                        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_11__.ExclamationCircleIcon, {}),
                                                        variant: _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItemVariant.error,
                                                        children: fieldState.error.message
                                                    })
                                                })
                                            })
                                        ]
                                    })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "primary",
                                    type: "submit",
                                    isDisabled: // eslint-disable-next-line react-hooks/incompatible-library
                                    !(form.watch('dashboardName') || '')?.trim() || updateDashboardMutation.isPending,
                                    isLoading: updateDashboardMutation.isPending,
                                    children: updateDashboardMutation.isPending ? t('Renaming...') : t('Rename')
                                }, "rename-modal-btn-rename"),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "link",
                                    onClick: handleClose,
                                    children: t('Cancel')
                                }, "rename-modal-btn-cancel")
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const DuplicateActionModal = ({ dashboard, isOpen, onClose })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__.useToast)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_25__.useNavigate)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__.usePerspective)();
    const { editableProjects, allProjects, hasEditableProject, permissionsLoading, permissionsError } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_21__.useEditableProjects)();
    const { persesProjects } = (0,_hooks_usePerses__WEBPACK_IMPORTED_MODULE_22__.usePerses)();
    const createProjectMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_14__.useCreateProjectMutation)();
    const defaultProject = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>{
        if (!dashboard) return '';
        if (dashboard.metadata.project && editableProjects.includes(dashboard.metadata.project)) {
            return dashboard.metadata.project;
        }
        return allProjects[0] || '';
    }, [
        dashboard,
        editableProjects,
        allProjects
    ]);
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_16__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__.zodResolver)((0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_15__.createDashboardDialogValidationSchema)(t)),
        mode: 'onBlur',
        defaultValues: {
            projectName: defaultProject,
            dashboardName: ''
        }
    });
    // eslint-disable-next-line react-hooks/incompatible-library
    const selectedProjectName = form.watch('projectName');
    const dashboardName = form.watch('dashboardName');
    const { schema: dynamicValidationSchema, isSchemaLoading } = (0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_15__.useDashboardValidationSchema)(t, selectedProjectName);
    const projectOptions = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>{
        if (!editableProjects) {
            return [];
        }
        return editableProjects.map((project)=>({
                content: project,
                value: project,
                selected: project === selectedProjectName
            }));
    }, [
        editableProjects,
        selectedProjectName
    ]);
    const createDashboardMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_14__.useCreateDashboardMutation)();
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        const isPerseProject = persesProjects?.some((project)=>project.metadata?.name === selectedProjectName);
        if (dynamicValidationSchema && selectedProjectName && !isSchemaLoading && isPerseProject) {
            const currentValues = form.getValues();
            const result = dynamicValidationSchema.safeParse(currentValues);
            if (!result.success) {
                const hasDashboardIssue = result.error.issues.some((issue)=>issue.path[0] === 'dashboardName');
                if (hasDashboardIssue) {
                    result.error.issues.forEach((issue)=>{
                        if (issue.path[0] === 'dashboardName') {
                            form.setError('dashboardName', {
                                type: 'validate',
                                message: issue.message
                            });
                        }
                    });
                } else {
                    form.clearErrors('dashboardName');
                }
            } else {
                form.clearErrors('dashboardName');
            }
        } else if (!isPerseProject && selectedProjectName) {
            // Clear any existing validation errors for non-Perses projects
            form.clearErrors('dashboardName');
        }
    }, [
        selectedProjectName,
        dynamicValidationSchema,
        form,
        dashboardName,
        isSchemaLoading,
        persesProjects
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (isOpen && dashboard && editableProjects?.length > 0 && defaultProject) {
            form.reset({
                projectName: defaultProject,
                dashboardName: ''
            });
        }
    }, [
        isOpen,
        dashboard,
        defaultProject,
        editableProjects?.length,
        form
    ]);
    if (!dashboard) {
        return null;
    }
    const processForm = async (data)=>{
        // Check if project exists, create it if it doesn't
        const projectExists = persesProjects?.some((project)=>project.metadata.name === data.projectName);
        if (!projectExists) {
            try {
                await createProjectMutation.mutateAsync(data.projectName);
                addAlert(t('Project "{{project}}" created successfully', {
                    project: data.projectName
                }), 'success');
            } catch (projectError) {
                const errorMessage = projectError?.message || t('Failed to create project "{{project}}". Please try again.', {
                    project: data.projectName
                });
                addAlert(t('Error creating project: {{error}}', {
                    error: errorMessage
                }), 'danger');
                return;
            }
        }
        const newDashboard = {
            ...dashboard,
            metadata: {
                ...dashboard.metadata,
                name: (0,_utils_dashboard_utils__WEBPACK_IMPORTED_MODULE_20__.generateMetadataName)(data.dashboardName),
                project: data.projectName
            },
            spec: {
                ...dashboard.spec,
                display: {
                    ...dashboard.spec.display,
                    name: data.dashboardName
                }
            }
        };
        createDashboardMutation.mutate(newDashboard, {
            onSuccess: (createdDashboard)=>{
                const msg = t(`Dashboard ${(0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_18__.getResourceExtendedDisplayName)(createdDashboard)} has been successfully created`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.success);
                handleClose();
                const dashboardUrl = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__.getDashboardUrl)(perspective);
                const dashboardParam = `dashboard=${createdDashboard.metadata.name}`;
                const projectParam = `project=${createdDashboard.metadata.project}`;
                const editModeParam = `edit=true`;
                navigate(`${dashboardUrl}?${dashboardParam}&${projectParam}&${editModeParam}`);
            },
            onError: (err)=>{
                const msg = t(`Could not duplicate dashboard. ${err}`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.danger);
            }
        });
    };
    const handleClose = ()=>{
        onClose();
        form.reset({
            dashboardName: ''
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onProjectSelect = (_event, selection)=>{
        form.setValue('projectName', selection);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.small,
        isOpen: isOpen,
        onClose: handleClose,
        ouiaId: "DuplicateModal",
        "aria-labelledby": "duplicate-modal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                title: t('Duplicate Dashboard'),
                labelId: "duplicate-modal-title"
            }),
            permissionsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                style: {
                    textAlign: 'center',
                    padding: '2rem'
                },
                children: [
                    t('Loading...'),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_9__.Spinner, {
                        "aria-label": "Duplicate Dashboard Modal Loading"
                    })
                ]
            }) : permissionsError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                style: {
                    textAlign: 'center',
                    padding: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_11__.ExclamationCircleIcon, {}),
                    t('Failed to load project permissions. Please refresh the page and try again.')
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__.FormProvider, {
                ...form,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: form.handleSubmit(processForm),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__.Controller, {
                                            control: form.control,
                                            name: "dashboardName",
                                            render: ({ field, fieldState })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                                                    label: t('Dashboard name'),
                                                    isRequired: true,
                                                    fieldId: "duplicate-modal-dashboard-name-form-group",
                                                    style: formGroupStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelSpacer, {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_4__.TextInput, {
                                                            ...field,
                                                            isRequired: true,
                                                            type: "text",
                                                            id: "duplicate-modal-dashboard-name-form-group-text-input",
                                                            validated: fieldState.error ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.ValidatedOptions.error : _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.ValidatedOptions.default
                                                        }),
                                                        fieldState.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItem, {
                                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_11__.ExclamationCircleIcon, {}),
                                                                    variant: _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItemVariant.error,
                                                                    children: fieldState.error.message
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_16__.Controller, {
                                            control: form.control,
                                            name: "projectName",
                                            render: ({ fieldState })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                                                    label: t('Select namespace'),
                                                    isRequired: true,
                                                    fieldId: "duplicate-modal-select-namespace-form-group",
                                                    style: formGroupStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelSpacer, {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_10__.TypeaheadSelect, {
                                                            initialOptions: projectOptions,
                                                            placeholder: t('Select namespace'),
                                                            noOptionsFoundMessage: (filter)=>t('No namespace found for "{{filter}}"', {
                                                                    filter
                                                                }),
                                                            onClearSelection: ()=>{
                                                                form.setValue('projectName', '');
                                                            },
                                                            onSelect: onProjectSelect,
                                                            isCreatable: false,
                                                            maxMenuHeight: "200px"
                                                        }, selectedProjectName || 'no-selection'),
                                                        fieldState.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItem, {
                                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_11__.ExclamationCircleIcon, {}),
                                                                    variant: _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_5__.HelperTextItemVariant.error,
                                                                    children: fieldState.error.message
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "primary",
                                    type: "submit",
                                    isDisabled: !(form.watch('dashboardName') || '')?.trim() || !(form.watch('projectName') || '')?.trim() || !hasEditableProject || isSchemaLoading || createDashboardMutation.isPending,
                                    isLoading: createDashboardMutation.isPending || isSchemaLoading,
                                    children: t('Duplicate')
                                }, "duplicate-modal-btn-duplicate"),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "link",
                                    onClick: handleClose,
                                    children: t('Cancel')
                                }, "duplicate-modal-btn-cancel")
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const DeleteActionModal = ({ dashboard, isOpen, onClose })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__.useToast)();
    const deleteDashboardMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_14__.useDeleteDashboardMutation)();
    const dashboardName = dashboard?.spec?.display?.name ?? t('this dashboard');
    const handleDeleteConfirm = async ()=>{
        if (!dashboard) return;
        deleteDashboardMutation.mutate(dashboard, {
            onSuccess: (deletedDashboard)=>{
                const msg = t(`Dashboard ${(0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_18__.getResourceExtendedDisplayName)(deletedDashboard)} has been successfully deleted`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.success);
                onClose();
            },
            onError: (err)=>{
                const msg = t(`Could not delete dashboard. ${err}`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.AlertVariant.danger);
                throw err;
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.small,
        isOpen: isOpen,
        onClose: onClose,
        ouiaId: "DeleteModal",
        "aria-labelledby": "delete-modal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                titleIconVariant: "warning",
                title: t('Permanently delete dashboard?'),
                labelId: "delete-modal-title"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                id: "delete-modal-box-body",
                children: [
                    t('Are you sure you want to delete '),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                        children: dashboardName
                    }),
                    t('? This action can not be undone.')
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: handleDeleteConfirm,
                        isDisabled: !dashboard || deleteDashboardMutation.isPending,
                        isLoading: deleteDashboardMutation.isPending,
                        children: deleteDashboardMutation.isPending ? t('Deleting...') : t('Delete')
                    }, "delete-modal-btn-delete"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "link",
                        onClick: onClose,
                        children: t('Cancel')
                    }, "delete-modal-btn-cancel")
                ]
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-actions-menu.tsx"
/*!**************************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-actions-menu.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardActionsMenu: () => (/* binding */ DashboardActionsMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useEditableProjects */ "./features/perses-dashboards/hooks/useEditableProjects.ts");
/* harmony import */ var _dashboard_create_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-create-dialog */ "./features/perses-dashboards/components/dashboard-create-dialog.tsx");
/* harmony import */ var _dashboard_import_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-import-dialog */ "./features/perses-dashboards/components/dashboard-import-dialog.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");













const DashboardActionsMenu = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("plugin__monitoring-plugin");
    const { hasEditableProject, permissionsLoading } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_6__.useEditableProjects)();
    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isImportModalOpen, setIsImportModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const disabled = permissionsLoading || !hasEditableProject;
    const handleCreateClick = ()=>{
        setIsCreateModalOpen(true);
        setIsDropdownOpen(false);
    };
    const handleImportClick = ()=>{
        setIsImportModalOpen(true);
        setIsDropdownOpen(false);
    };
    const onToggleClick = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };
    const onSelect = ()=>{
        setIsDropdownOpen(false);
    };
    const splitButton = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        isOpen: isDropdownOpen,
        onSelect: onSelect,
        onOpenChange: (open)=>setIsDropdownOpen(open),
        toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggle, {
                ref: toggleRef,
                variant: "primary",
                splitButtonItems: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggleAction, {
                        onClick: handleCreateClick,
                        isDisabled: disabled,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_9__.persesDashboardDataTestIDs.createDashboardButtonToolbar,
                        children: permissionsLoading ? t('Checking permissions...') : t('Create')
                    }, "create-action")
                ],
                onClick: onToggleClick,
                isExpanded: isDropdownOpen,
                isDisabled: disabled,
                "aria-label": t('Dashboard actions')
            }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownList, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, {
                onClick: handleImportClick,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_9__.persesDashboardDataTestIDs.importDashboardButtonToolbar,
                children: t('Import')
            }, "import")
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !permissionsLoading && !hasEditableProject ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                content: t('To create dashboards, contact your cluster administrator for permission.'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        cursor: 'not-allowed'
                    },
                    children: splitButton
                })
            }) : splitButton,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_create_dialog__WEBPACK_IMPORTED_MODULE_7__.DashboardCreateDialog, {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_import_dialog__WEBPACK_IMPORTED_MODULE_8__.DashboardImportDialog, {
                isOpen: isImportModalOpen,
                onClose: ()=>setIsImportModalOpen(false)
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-create-dialog.tsx"
/*!***************************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-create-dialog.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardCreateDialog: () => (/* binding */ DashboardCreateDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/constants */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/constants/@patternfly/react-core/dist/dynamic/helpers/constants");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_dashboard_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/dashboard-api */ "./features/perses-dashboards/utils/dashboard-api.ts");
/* harmony import */ var _utils_dashboard_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/dashboard-utils */ "./features/perses-dashboards/utils/dashboard-utils.ts");
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ToastProvider */ "./features/perses-dashboards/components/ToastProvider.tsx");
/* harmony import */ var _utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/dashboard-action-validations */ "./features/perses-dashboards/utils/dashboard-action-validations.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-dialog-helpers */ "./features/perses-dashboards/components/dashboard-dialog-helpers.tsx");
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hookform/resolvers/zod */ "../node_modules/@hookform/resolvers/zod/dist/zod.mjs");
/* harmony import */ var _dashboard_action_modals__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-action-modals */ "./features/perses-dashboards/components/dashboard-action-modals.tsx");


























const DashboardCreateDialog = ({ isOpen, onClose })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_13__.useToast)();
    const { editableProjects, hasEditableProject, permissionsLoading, permissionsError, persesProjects, defaultProject, projectOptions } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__.useDashboardProjects)();
    const { ensureProjectExists, isCreatingProject } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__.useProjectCreation)();
    const { navigateToDashboard } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__.useDashboardNavigation)();
    const createDashboardMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_11__.useCreateDashboardMutation)();
    const { schema: validationSchema } = (0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_14__.useDashboardValidationSchema)(t, defaultProject);
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_15__.useForm)({
        resolver: validationSchema ? (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__.zodResolver)(validationSchema) : (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_17__.zodResolver)((0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_14__.createDashboardDialogValidationSchema)(t)),
        mode: 'onBlur',
        defaultValues: {
            projectName: defaultProject,
            dashboardName: ''
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen && editableProjects?.length > 0 && defaultProject) {
            form.reset({
                projectName: defaultProject,
                dashboardName: ''
            });
        }
    }, [
        isOpen,
        defaultProject,
        editableProjects?.length,
        form
    ]);
    const processForm = async (data)=>{
        try {
            await ensureProjectExists(data.projectName, persesProjects || []);
        } catch  {
            return;
        }
        const newDashboard = (0,_utils_dashboard_utils__WEBPACK_IMPORTED_MODULE_12__.createNewDashboard)(data.dashboardName.trim(), data.projectName);
        createDashboardMutation.mutate(newDashboard, {
            onSuccess: (createdDashboard)=>{
                const msg = t(`Dashboard "${data.dashboardName}" created successfully`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_8__.AlertVariant.success);
                handleClose();
                navigateToDashboard(createdDashboard, true);
            },
            onError: (err)=>{
                const msg = t(`Could not create dashboard. ${err}`);
                addAlert(msg, _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_8__.AlertVariant.danger);
            }
        });
    };
    const handleClose = ()=>{
        onClose();
        form.reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__.ModalVariant.small,
        isOpen: isOpen,
        onClose: handleClose,
        ouiaId: "CreateModal",
        "aria-labelledby": "create-modal-title",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {
                title: t('Create Dashboard'),
                labelId: "create-modal-title"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__.PermissionStateWrapper, {
                    permissionsLoading: permissionsLoading,
                    permissionsError: permissionsError,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.FormProvider, {
                        ...form,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                            onSubmit: form.handleSubmit(processForm),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_15__.Controller, {
                                            control: form.control,
                                            name: "dashboardName",
                                            render: ({ field, fieldState })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_4__.FormGroup, {
                                                    label: t('Dashboard name'),
                                                    isRequired: true,
                                                    fieldId: "create-modal-dashboard-name-form-group",
                                                    style: _dashboard_action_modals__WEBPACK_IMPORTED_MODULE_18__.formGroupStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_18__.LabelSpacer, {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
                                                            ...field,
                                                            isRequired: true,
                                                            type: "text",
                                                            id: "create-modal-dashboard-name-form-group-text-input",
                                                            placeholder: t('my-new-dashboard'),
                                                            validated: fieldState.error ? _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_7__.ValidatedOptions.error : _patternfly_react_core_dist_dynamic_helpers_constants__WEBPACK_IMPORTED_MODULE_7__.ValidatedOptions.default
                                                        }),
                                                        fieldState.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_4__.FormHelperText, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_6__.HelperText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_6__.HelperTextItem, {
                                                                    variant: "error",
                                                                    children: fieldState.error.message
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_16__.ProjectSelectFormGroup, {
                                            control: form.control,
                                            projectOptions: projectOptions,
                                            defaultValue: defaultProject,
                                            label: t('Select project')
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "primary",
                        isDisabled: // eslint-disable-next-line react-hooks/incompatible-library
                        !(form.watch('dashboardName') || '')?.trim() || !(form.watch('projectName') || '')?.trim() || !hasEditableProject,
                        isLoading: createDashboardMutation.isPending || isCreatingProject,
                        onClick: form.handleSubmit(processForm),
                        children: t('Create')
                    }, "create-modal-btn-create"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "link",
                        onClick: handleClose,
                        children: t('Cancel')
                    }, "create-modal-btn-cancel")
                ]
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-dialog-helpers.tsx"
/*!****************************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-dialog-helpers.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionStateWrapper: () => (/* binding */ PermissionStateWrapper),
/* harmony export */   ProjectSelectFormGroup: () => (/* binding */ ProjectSelectFormGroup),
/* harmony export */   useDashboardNavigation: () => (/* binding */ useDashboardNavigation),
/* harmony export */   useDashboardProjects: () => (/* binding */ useDashboardProjects),
/* harmony export */   useProjectCreation: () => (/* binding */ useProjectCreation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var _patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-templates/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-templates/dist/dynamic/components/Select/@patternfly/react-templates/dist/dynamic/components/Select");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _dashboard_action_modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-action-modals */ "./features/perses-dashboards/components/dashboard-action-modals.tsx");
/* harmony import */ var _utils_dashboard_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/dashboard-api */ "./features/perses-dashboards/utils/dashboard-api.ts");
/* harmony import */ var _hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useEditableProjects */ "./features/perses-dashboards/hooks/useEditableProjects.ts");
/* harmony import */ var _hooks_usePerses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/usePerses */ "./features/perses-dashboards/hooks/usePerses.ts");
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ToastProvider */ "./features/perses-dashboards/components/ToastProvider.tsx");

















const useDashboardProjects = ()=>{
    const { editableProjects, allProjects, hasEditableProject, permissionsLoading, permissionsError } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_12__.useEditableProjects)();
    const { persesProjects } = (0,_hooks_usePerses__WEBPACK_IMPORTED_MODULE_13__.usePerses)();
    const defaultProject = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return allProjects?.[0] || '';
    }, [
        allProjects
    ]);
    const projectOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!editableProjects) {
            return [];
        }
        return editableProjects.map((project)=>({
                name: project,
                value: project,
                content: project,
                children: project
            }));
    }, [
        editableProjects
    ]);
    return {
        editableProjects,
        allProjects,
        hasEditableProject,
        permissionsLoading,
        permissionsError,
        persesProjects,
        defaultProject,
        projectOptions
    };
};
const useProjectCreation = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__.useToast)();
    const createProjectMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_11__.useCreateProjectMutation)();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ensureProjectExists = async (projectName, persesProjects)=>{
        const projectExists = persesProjects?.some((project)=>project.metadata.name === projectName);
        if (!projectExists) {
            try {
                await createProjectMutation.mutateAsync(projectName);
                addAlert(t('Project "{{project}}" created successfully', {
                    project: projectName
                }), 'success');
            } catch (projectError) {
                const errorMessage = (()=>{
                    if (projectError instanceof Error) return projectError.message;
                    if (typeof projectError === 'object' && projectError !== null && 'message' in projectError) {
                        return String(projectError.message);
                    }
                    return typeof projectError === 'string' ? projectError : undefined;
                })() || t('Failed to create project "{{project}}". Please try again.', {
                    project: projectName
                });
                addAlert(t('Error creating project: {{error}}', {
                    error: errorMessage
                }), 'danger');
                throw projectError;
            }
        }
    };
    // Re-throw to stop the calling operation
    return {
        ensureProjectExists,
        isCreatingProject: createProjectMutation.isPending
    };
};
const useDashboardNavigation = ()=>{
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_9__.usePerspective)();
    const navigateToDashboard = (dashboard, editMode = true)=>{
        const dashboardUrl = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_9__.getDashboardUrl)(perspective);
        const dashboardParam = `dashboard=${dashboard.metadata.name}`;
        const projectParam = `project=${dashboard.metadata.project}`;
        const editModeParam = editMode ? `edit=true` : '';
        const queryParams = [
            dashboardParam,
            projectParam,
            editModeParam
        ].filter(Boolean).join('&');
        navigate(`${dashboardUrl}?${queryParams}`);
    };
    return {
        navigateToDashboard
    };
};
const PermissionStateWrapper = ({ permissionsLoading, permissionsError, children })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("plugin__monitoring-plugin");
    if (permissionsLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                textAlign: 'center',
                padding: '2rem'
            },
            children: [
                t('Loading...'),
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
                    "aria-label": "Dashboard Modal Loading"
                })
            ]
        });
    }
    if (permissionsError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            style: {
                textAlign: 'center',
                padding: '2rem'
            },
            children: t('Failed to load project permissions. Please refresh the page and try again.')
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectSelectFormGroup = ({ control, projectOptions, defaultValue, label, required = true, maxHeight = '200px' })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
        control: control,
        name: "projectName",
        render: ({ field, fieldState })=>{
            const currentValue = field.value || defaultValue;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {
                label: label || t('Select project'),
                isRequired: required,
                fieldId: "project-select-form-group",
                style: _dashboard_action_modals__WEBPACK_IMPORTED_MODULE_10__.formGroupStyle,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_action_modals__WEBPACK_IMPORTED_MODULE_10__.LabelSpacer, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_4__.TypeaheadSelect, {
                        initialOptions: projectOptions.map((op)=>({
                                content: op.value,
                                value: op.value,
                                selected: op.value === currentValue
                            })),
                        placeholder: t('Select project'),
                        noOptionsFoundMessage: (filter)=>t('No namespace found for "{{filter}}"', {
                                filter
                            }),
                        onSelect: (_e, project)=>{
                            field.onChange(project);
                        },
                        isCreatable: false,
                        maxMenuHeight: maxHeight
                    }, currentValue || 'no-selection'),
                    fieldState.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_1__.FormHelperText, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_2__.HelperText, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_2__.HelperTextItem, {
                                variant: "error",
                                children: fieldState.error.message
                            })
                        })
                    })
                ]
            });
        }
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-header.tsx"
/*!********************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-header.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardHeader: () => (/* binding */ DashboardHeader),
/* harmony export */   DashboardListHeader: () => (/* binding */ DashboardListHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Breadcrumb */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Breadcrumb/@patternfly/react-core/dist/dynamic/components/Breadcrumb");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_md.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_xl.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_color_blue_300.js");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/hooks/usePatternflyTheme */ "./shared/hooks/usePatternflyTheme.ts");
/* harmony import */ var _dashboard_actions_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-actions-menu */ "./features/perses-dashboards/components/dashboard-actions-menu.tsx");
/* harmony import */ var _pages_dashboard_page_dashboard_page_padding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/dashboard-page/dashboard-page-padding */ "./features/perses-dashboards/pages/dashboard-page/dashboard-page-padding.tsx");
















const DASHBOARD_VIEW_PATH = 'v2/dashboards/view';
const shouldHideFavoriteButton = ()=>{
    const currentUrl = window.location.href;
    return currentUrl.includes(DASHBOARD_VIEW_PATH);
};
const DashboardBreadCrumb = ({ dashboardDisplayName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__.usePerspective)();
    const { theme } = (0,_shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_14__.usePatternFlyTheme)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    const handleDashboardsClick = ()=>{
        navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getDashboardsListUrl)(perspective));
    };
    const lightThemeColor = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_11__.chart_color_blue_100.value;
    const darkThemeColor = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_12__.chart_color_blue_300.value;
    const linkColor = theme == 'dark' ? lightThemeColor : darkThemeColor;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__.Breadcrumb, {
        ouiaId: "perses-dashboards-breadcrumb",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, {
                onClick: handleDashboardsClick,
                style: {
                    cursor: 'pointer',
                    color: linkColor,
                    textDecoration: 'underline',
                    paddingLeft: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__.t_global_spacer_md.value
                },
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_13__.listPersesDashboardsDataTestIDs.PersesBreadcrumbDashboardItem,
                children: t('Dashboards')
            }),
            dashboardDisplayName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, {
                isActive: true,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_13__.listPersesDashboardsDataTestIDs.PersesBreadcrumbDashboardNameItem,
                children: dashboardDisplayName
            })
        ]
    });
};
const DashboardPageHeader = ({ dashboardDisplayName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const hideFavBtn = shouldHideFavoriteButton();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_4__.StackItem, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardBreadCrumb, {
                        dashboardDisplayName: dashboardDisplayName
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__.ListPageHeader, {
                        title: t('Dashboards'),
                        helpText: t('View and manage dashboards.'),
                        hideFavoriteButton: hideFavBtn
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_4__.StackItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                    inset: {
                        default: 'insetMd'
                    }
                })
            })
        ]
    });
};
const DashboardListPageHeader = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const hideFavBtn = shouldHideFavoriteButton();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__.ListPageHeader, {
        title: t('Dashboards'),
        helpText: t('View and manage dashboards.'),
        hideFavoriteButton: hideFavBtn,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_actions_menu__WEBPACK_IMPORTED_MODULE_15__.DashboardActionsMenu, {})
    });
};
const DashboardHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children, dashboardDisplayName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__.DocumentTitle, {
                children: t('Metrics dashboards')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_dashboard_page_dashboard_page_padding__WEBPACK_IMPORTED_MODULE_16__.PagePadding, {
                top: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__.t_global_spacer_md.value,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardPageHeader, {
                    dashboardDisplayName: dashboardDisplayName
                })
            }),
            children
        ]
    });
});
DashboardHeader.displayName = 'DashboardHeader';
const DashboardListHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__.DocumentTitle, {
                children: t('Metrics dashboards')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_dashboard_page_dashboard_page_padding__WEBPACK_IMPORTED_MODULE_16__.PagePadding, {
                right: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_10__.t_global_spacer_xl.value,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardListPageHeader, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                inset: {
                    default: 'insetMd'
                }
            }),
            children
        ]
    });
});
DashboardListHeader.displayName = 'DashboardListHeader';


/***/ },

/***/ "./features/perses-dashboards/components/dashboard-import-dialog.tsx"
/*!***************************************************************************!*\
  !*** ./features/perses-dashboards/components/dashboard-import-dialog.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardImportDialog: () => (/* binding */ DashboardImportDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/zod */ "../node_modules/@hookform/resolvers/zod/dist/zod.mjs");
/* harmony import */ var _patternfly_react_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-code-editor */ "../node_modules/@patternfly/react-code-editor/dist/esm/components/CodeEditor/CodeEditor.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_FileUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/FileUpload */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/FileUpload/@patternfly/react-core/dist/dynamic/components/FileUpload");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/HelperText */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/HelperText/@patternfly/react-core/dist/dynamic/components/HelperText");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon/@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-yaml */ "../node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "../node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-dialog-helpers */ "./features/perses-dashboards/components/dashboard-dialog-helpers.tsx");
/* harmony import */ var _shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/hooks/usePatternflyTheme */ "./shared/hooks/usePatternflyTheme.ts");
/* harmony import */ var _utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/dashboard-action-validations */ "./features/perses-dashboards/utils/dashboard-action-validations.ts");
/* harmony import */ var _utils_dashboard_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/dashboard-api */ "./features/perses-dashboards/utils/dashboard-api.ts");
/* harmony import */ var _utils_migrate_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/migrate-api */ "./features/perses-dashboards/utils/migrate-api.ts");
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ToastProvider */ "./features/perses-dashboards/components/ToastProvider.tsx");




























const MAX_FILE_SIZE = 5 * 1024 * 1024;
// 5MB
const ALLOWED_MIME_TYPES = [
    'application/json',
    'application/yaml',
    'text/yaml',
    'application/x-yaml',
    'text/x-yaml'
];
const getErrorMessage = (error)=>{
    if (error instanceof Error) return error.message;
    if (typeof error === 'object' && error !== null && 'message' in error) {
        return String(error.message);
    }
    return typeof error === 'string' ? error : undefined;
};
// Sanitize dashboard name to prevent XSS when displaying in alerts/UI
const sanitizeDashboardName = (name)=>{
    if (!name) return 'Untitled';
    // Remove potentially dangerous characters and limit length
    return name.replace(/[<>"'&]/g, '').substring(0, 100);
};
const DashboardImportDialog = ({ isOpen, onClose })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)("plugin__monitoring-plugin");
    const { addAlert } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_20__.useToast)();
    const { editableProjects, permissionsLoading, permissionsError, persesProjects, defaultProject, projectOptions } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__.useDashboardProjects)();
    const { ensureProjectExists, isCreatingProject } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__.useProjectCreation)();
    const { navigateToDashboard } = (0,_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__.useDashboardNavigation)();
    const { theme } = (0,_shared_hooks_usePatternflyTheme__WEBPACK_IMPORTED_MODULE_16__.usePatternFlyTheme)();
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)((0,_utils_dashboard_action_validations__WEBPACK_IMPORTED_MODULE_17__.importDashboardDialogValidationSchema)()),
        mode: 'onBlur',
        defaultValues: {
            projectName: defaultProject
        }
    });
    const [dashboardInput, setDashboardInput] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
    const [parsedDashboard, setParsedDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const [parseError, setParseError] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
    const [filename, setFilename] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
    const [isUploadingFile, setIsUploadingFile] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const createDashboardMutation = (0,_utils_dashboard_api__WEBPACK_IMPORTED_MODULE_18__.useCreateDashboardMutation)();
    const migrateMutation = (0,_utils_migrate_api__WEBPACK_IMPORTED_MODULE_19__.useMigrateDashboard)();
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (isOpen && editableProjects?.length > 0 && defaultProject) {
            form.reset({
                projectName: defaultProject
            });
        }
    }, [
        isOpen,
        defaultProject,
        editableProjects?.length,
        form
    ]);
    const getDashboardType = (dashboard)=>{
        if ('kind' in dashboard && dashboard.kind === 'Dashboard') {
            return 'perses';
        }
        if ('panels' in dashboard || 'templating' in dashboard || 'annotations' in dashboard) {
            return 'grafana';
        }
        return undefined;
    };
    const detectInputFormat = (input)=>{
        const trimmed = input.trim();
        if (trimmed.startsWith('{')) {
            return 'json';
        }
        return 'yaml';
    };
    const parseDashboardInput = (input)=>{
        if (!input.trim()) {
            setParsedDashboard(undefined);
            setParseError('');
            setDashboardInput('');
            return;
        }
        // Remove BOM (Byte Order Mark)
        const cleanedInput = input.replace(/\uFEFF/g, '');
        const detectedFormat = detectInputFormat(cleanedInput);
        try {
            let parsed;
            if (detectedFormat === 'json') {
                parsed = JSON.parse(cleanedInput);
            } else {
                const loaded = js_yaml__WEBPACK_IMPORTED_MODULE_11__["default"].load(cleanedInput);
                if (typeof loaded !== 'object' || loaded === null || Array.isArray(loaded)) {
                    throw new Error('Dashboard must be a valid object');
                }
                parsed = loaded;
            }
            const type = getDashboardType(parsed);
            if (type) {
                setParsedDashboard({
                    kind: type,
                    data: parsed
                });
                setParseError('');
            } else {
                setParsedDashboard(undefined);
                setParseError(t('Unable to detect dashboard format. Please provide a valid Perses or Grafana dashboard.'));
            }
        } catch (error) {
            setParsedDashboard(undefined);
            const errorMessage = error instanceof Error ? error.message : String(error);
            setParseError(t('Invalid {{format}}: {{error}}', {
                format: detectedFormat.toUpperCase(),
                error: errorMessage
            }));
        }
        setDashboardInput(cleanedInput);
    };
    const handleDashboardInputChange = (value)=>{
        parseDashboardInput(value);
    };
    const handleFileUpload = async (_event, file)=>{
        if (file) {
            if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
                setParseError(t('Invalid file type. Please upload a JSON or YAML file (.json, .yaml, .yml)'));
                return;
            }
            if (file.size > MAX_FILE_SIZE) {
                setParseError(t('File size exceeds maximum allowed size of 5MB'));
                return;
            }
            setIsUploadingFile(true);
            try {
                setFilename(file.name);
                const text = await file.text();
                parseDashboardInput(text);
            } finally{
                setIsUploadingFile(false);
            }
        }
    };
    const handleClearFile = ()=>{
        setFilename('');
        parseDashboardInput('');
    };
    const isImporting = createDashboardMutation.isPending || isCreatingProject || migrateMutation.isPending;
    const importDashboard = async (dashboard, projectName)=>{
        dashboard.metadata.project = projectName;
        const createdDashboard = await createDashboardMutation.mutateAsync(dashboard);
        const displayName = sanitizeDashboardName(createdDashboard.spec?.display?.name || createdDashboard.metadata.name);
        addAlert(t('Dashboard "{{name}}" imported successfully', {
            name: displayName
        }), _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant.success);
        handleClose();
        navigateToDashboard(createdDashboard, true);
    };
    const processForm = async (data)=>{
        if (isImporting) {
            return;
        }
        if (!parsedDashboard) {
            addAlert(t('A valid dashboard is required'), _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant.danger);
            return;
        }
        const currentProject = data.projectName;
        const currentParsedDashboard = parsedDashboard;
        try {
            await ensureProjectExists(currentProject, persesProjects || []);
        } catch  {
            return;
        }
        try {
            if (currentParsedDashboard.kind === 'grafana') {
                // Migrate Grafana dashboard first, then import
                migrateMutation.mutate({
                    grafanaDashboard: currentParsedDashboard.data,
                    useDefaultDatasource: true
                }, {
                    onSuccess: async (migratedDashboard)=>{
                        try {
                            await importDashboard(migratedDashboard, currentProject);
                        } catch (error) {
                            const errorMessage = getErrorMessage(error) || t('Failed to import dashboard. Please try again.');
                            addAlert(t('Error importing dashboard: {{error}}', {
                                error: errorMessage
                            }), _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant.danger);
                        }
                    },
                    onError: (error)=>{
                        const errorMessage = getErrorMessage(error) || t('Migration failed. Please try again.');
                        addAlert(t('Error migrating dashboard: {{error}}', {
                            error: errorMessage
                        }), _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant.danger);
                    }
                });
            } else {
                // Direct import for Perses dashboard
                await importDashboard(currentParsedDashboard.data, currentProject);
            }
        } catch (error) {
            const errorMessage = getErrorMessage(error) || t('Failed to import dashboard. Please try again.');
            addAlert(t('Error importing dashboard: {{error}}', {
                error: errorMessage
            }), _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_3__.AlertVariant.danger);
        }
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const resetForm = ()=>{
        parseDashboardInput('');
        setFilename('');
        form.reset();
    };
    const projectNameValue = form.watch('projectName');
    const canImport = parsedDashboard && projectNameValue && !isImporting && !parseError;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__.Modal, {
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__.ModalVariant.large,
        isOpen: isOpen,
        onClose: handleClose,
        onEscapePress: handleClose,
        "aria-labelledby": "import-dashboard-modal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__.ModalHeader, {
                title: t('Import Dashboard'),
                labelId: "import-dashboard-modal"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__.ModalBody, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__.PermissionStateWrapper, {
                    permissionsLoading: permissionsLoading,
                    permissionsError: permissionsError,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.FormProvider, {
                        ...form,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                            onSubmit: form.handleSubmit(processForm),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_6__.FormGroup, {
                                            label: t('1. Provide a dashboard (JSON or YAML)'),
                                            fieldId: "import-dashboard-input",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperText, {
                                                    style: {
                                                        marginBottom: '8px'
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperTextItem, {
                                                        children: t('Upload a dashboard file or paste the dashboard definition directly in the editor below.')
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                                                    hasGutter: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_FileUpload__WEBPACK_IMPORTED_MODULE_5__.FileUpload, {
                                                                id: "import-dashboard-file",
                                                                type: "text",
                                                                value: dashboardInput,
                                                                filename: filename,
                                                                filenamePlaceholder: t('Drag and drop a file or upload one'),
                                                                browseButtonText: t('Upload'),
                                                                clearButtonText: t('Clear'),
                                                                onFileInputChange: handleFileUpload,
                                                                onClearClick: handleClearFile,
                                                                hideDefaultPreview: true,
                                                                isLoading: isUploadingFile
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_code_editor__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
                                                                id: "import-dashboard-code-editor",
                                                                code: dashboardInput,
                                                                onChange: handleDashboardInputChange,
                                                                height: "300px",
                                                                isLineNumbersVisible: true,
                                                                isDarkTheme: theme === 'dark'
                                                            })
                                                        })
                                                    ]
                                                }),
                                                parseError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_6__.FormHelperText, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperText, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperTextItem, {
                                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_10__.ExclamationCircleIcon, {}),
                                                            variant: "error",
                                                            children: parseError
                                                        })
                                                    })
                                                }),
                                                parsedDashboard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_6__.FormHelperText, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperText, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_HelperText__WEBPACK_IMPORTED_MODULE_7__.HelperTextItem, {
                                                            variant: "success",
                                                            children: parsedDashboard.kind === 'grafana' ? t('Grafana dashboard detected. It will be automatically migrated to Perses format. Note: migration may be partial as not all Grafana features are supported.') : t('Perses dashboard detected.')
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    parsedDashboard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_dialog_helpers__WEBPACK_IMPORTED_MODULE_15__.ProjectSelectFormGroup, {
                                            control: form.control,
                                            projectOptions: projectOptions,
                                            defaultValue: projectNameValue || defaultProject,
                                            label: t('2. Select project'),
                                            maxHeight: "200px"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_8__.ModalFooter, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        variant: "primary",
                        onClick: form.handleSubmit(processForm),
                        isDisabled: !canImport,
                        isLoading: isImporting,
                        children: isImporting ? t('Importing...') : t('Import')
                    }, "import"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        variant: "link",
                        onClick: handleClose,
                        children: t('Cancel')
                    }, "cancel")
                ]
            })
        ]
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/project/ProjectBar.tsx"
/*!**********************************************************************!*\
  !*** ./features/perses-dashboards/components/project/ProjectBar.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectBar: () => (/* binding */ ProjectBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./features/perses-dashboards/components/project/utils.ts");
/* harmony import */ var _ProjectDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDropdown */ "./features/perses-dashboards/components/project/ProjectDropdown.tsx");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/query-params */ "./shared/constants/query-params.ts");






const ProjectBar = ({ activeProject })=>{
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "co-namespace-bar",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "co-namespace-bar__items",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProjectDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                onSelect: (event, newProject)=>{
                    const params = new URLSearchParams();
                    params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_5__.QueryParams.Project, newProject);
                    const url = `${(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__.getDashboardsListUrl)(perspective)}?${params.toString()}`;
                    navigate(url);
                },
                selected: activeProject || '',
                shortCut: _utils__WEBPACK_IMPORTED_MODULE_1__.KEYBOARD_SHORTCUTS.focusNamespaceDropdown
            })
        })
    });
};


/***/ },

/***/ "./features/perses-dashboards/components/project/ProjectDropdown.tsx"
/*!***************************************************************************!*\
  !*** ./features/perses-dashboards/components/project/ProjectDropdown.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   NoResults: () => (/* binding */ NoResults),
/* harmony export */   ProjectGroup: () => (/* binding */ ProjectGroup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Menu */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Menu/@patternfly/react-core/dist/dynamic/components/Menu");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fuzzysearch */ "../node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProjectMenuToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectMenuToggle */ "./features/perses-dashboards/components/project/ProjectMenuToggle.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./features/perses-dashboards/components/project/utils.ts");
/* harmony import */ var _hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useEditableProjects */ "./features/perses-dashboards/hooks/useEditableProjects.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
























const NoResults = ({ onClear })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState, {
                headingLevel: "h4",
                titleText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: t('No projects found')
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyStateBody, {
                        children: t('No results match the filter criteria.')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyStateFooter, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyStateActions, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "link",
                                onClick: onClear,
                                children: t('Clear filters')
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* ****************************************** */ const Filter = // eslint-disable-next-line @typescript-eslint/no-explicit-any
({ filterText, filterRef, onFilterChange })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuSearch, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuSearchInput, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
                "data-test": "dropdown-text-filter",
                autoFocus: true,
                value: filterText,
                "aria-label": t('Select project...'),
                type: "search",
                placeholder: t('Select project...'),
                onChange: (_, value)=>onFilterChange(value),
                ref: filterRef
            })
        })
    });
};
/* ****************************************** */ const ProjectGroup = ({ options, selectedKey })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("plugin__monitoring-plugin");
    return options.length === 0 ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, {
                label: t('Projects'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuList, {
                    children: options.map((option)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                            itemId: option.key,
                            isSelected: selectedKey === option.key,
                            "data-test": "dropdown-menu-item-link",
                            children: option.title
                        }, option.key);
                    })
                })
            })
        ]
    });
};
/* ****************************************** */ const ProjectMenu = ({ setOpen, onSelect, selected, menuRef })=>{
    const filterRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("plugin__monitoring-plugin");
    const [filterText, setFilterText] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('');
    const { allProjects } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_11__.useEditableProjects)();
    const optionItems = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>{
        const items = allProjects?.map((projectName)=>{
            return {
                title: projectName,
                key: projectName
            };
        }) || [];
        items.sort((a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_10__.alphanumericCompare)(a.title, b.title));
        items.unshift({
            title: t('All Projects'),
            key: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__.ALL_NAMESPACES_KEY
        });
        if (selected && !items.some((option)=>option.key === selected)) {
            items.unshift({
                title: selected,
                key: selected
            });
        }
        // Add current project if it isn't included
        return items;
    }, [
        allProjects,
        selected,
        t
    ]);
    const isOptionShown = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((option)=>{
        return fuzzysearch__WEBPACK_IMPORTED_MODULE_7___default()(filterText.toLowerCase(), option.title.toLowerCase());
    }, [
        filterText
    ]);
    const { filteredOptions } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>optionItems.reduce((filtered, option)=>{
            if (isOptionShown(option)) {
                filtered.filteredOptions.push(option);
            }
            return filtered;
        }, {
            filteredOptions: []
        }), [
        isOptionShown,
        optionItems
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {
        ref: menuRef,
        className: "co-namespace-dropdown__menu",
        onSelect: (event, itemId)=>{
            setOpen(false);
            onSelect(event, itemId);
        },
        activeItemId: selected,
        "data-test": "project-dropdown-menu",
        isScrollable: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuContent, {
            maxMenuHeight: "60vh",
            className: "co-namespace-dropdown__menu-content",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Filter, {
                    filterRef: filterRef,
                    onFilterChange: setFilterText,
                    filterText: filterText
                }),
                filteredOptions.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoResults, {
                    onClear: (event)=>{
                        event.preventDefault();
                        event.stopPropagation();
                        setFilterText('');
                        filterRef.current?.focus();
                    }
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProjectGroup, {
                    options: filteredOptions,
                    selectedKey: selected
                })
            ]
        })
    });
};
/* ****************************************** */ const ProjectDropdown = ({ disabled, onSelect, selected, shortCut })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("plugin__monitoring-plugin");
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const { allProjects, permissionsLoading, permissionsError } = (0,_hooks_useEditableProjects__WEBPACK_IMPORTED_MODULE_11__.useEditableProjects)();
    const menuProps = {
        setOpen,
        onSelect,
        selected,
        menuRef
    };
    let title = t('All Projects');
    // While loading permissions, or if there is a permission error fallback to the "selected" value
    // 'All Projects' is the user friendly ALL_NAMESPACES_KEY
    if (selected && (allProjects?.includes(selected) || permissionsLoading || !!permissionsError) && selected !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__.ALL_NAMESPACES_KEY) {
        title = selected;
    }
    const toggle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProjectMenuToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disabled: disabled || permissionsLoading || !!permissionsError,
        menu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProjectMenu, {
            ...menuProps
        }),
        menuRef: menuRef,
        isOpen: isOpen,
        title: `${t('Project')}: ${title}`,
        onToggle: (menuState)=>{
            setOpen(menuState);
        },
        shortCut: shortCut
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "co-namespace-dropdown",
        children: permissionsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
            content: t('Checking permissions...'),
            position: _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipPosition.bottom,
            children: toggle
        }) : permissionsError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
            content: t('Failed to load project permissions. Please refresh the page and try again.'),
            position: _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipPosition.bottom,
            children: toggle
        }) : toggle
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDropdown);


/***/ },

/***/ "./features/perses-dashboards/components/project/ProjectMenuToggle.tsx"
/*!*****************************************************************************!*\
  !*** ./features/perses-dashboards/components/project/ProjectMenuToggle.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/helpers/Popper/Popper */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper/@patternfly/react-core/dist/dynamic/helpers/Popper/Popper");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const ProjectMenuToggle = (props)=>{
    const { menu, isOpen, shortCut, title, onToggle, disabled, menuRef, className } = props;
    const toggleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleMenuKeys = (event)=>{
        if (shortCut && event.key === shortCut && event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'TEXTAREA' && event.target.role !== 'textbox' && event.target.role !== 'code') {
            onToggle(true);
            event.stopPropagation();
            event.preventDefault();
        }
        if (menuRef.current) {
            if (event.key === 'Escape') {
                onToggle(false);
                toggleRef.current.focus();
            }
            if (!menuRef.current?.contains(event.target) && event.key === 'Tab') {
                onToggle(false);
            }
        }
    };
    const handleMenuClick = (event)=>{
        if (menuRef.current && !menuRef.current?.contains(event.target) && // Checking to see if user clicked on a favorite icon.  This is needed because
        // if unfavoriting a item, PF removes the item from the DOM before
        // the click event is registered
        !event.target.closest?.('.pf-m-favorite') && !toggleRef.current.contains(event.target)) {
            onToggle(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener('keyup', handleMenuKeys);
        window.addEventListener('click', handleMenuClick);
        return ()=>{
            window.removeEventListener('keyup', handleMenuKeys);
            window.removeEventListener('click', handleMenuClick);
        };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // This needs to be run only on component mount/unmount
    const toggle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, {
        ref: toggleRef,
        onClick: ()=>onToggle(!isOpen),
        isExpanded: isOpen,
        disabled: disabled,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('co-namespace-dropdown__menu-toggle', className),
        children: title
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: containerRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_helpers_Popper_Popper__WEBPACK_IMPORTED_MODULE_3__.Popper, {
            trigger: toggle,
            popper: menu,
            direction: "down",
            position: "left",
            appendTo: containerRef.current,
            isVisible: isOpen,
            enableFlip: false
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectMenuToggle);


/***/ },

/***/ "./features/perses-dashboards/components/project/useActiveProject.tsx"
/*!****************************************************************************!*\
  !*** ./features/perses-dashboards/components/project/useActiveProject.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useActiveProject: () => (/* binding */ useActiveProject)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/console/models */ "./shared/console/models/index.ts");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");






const useActiveProject = ()=>{
    const [activeNamespace, setActiveNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useActiveNamespace)();
    const [projectFromUrl, setProject] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_4__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__.QueryParams.Project, use_query_params__WEBPACK_IMPORTED_MODULE_4__.StringParam);
    const [namespaces, namespacesLoaded] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useK8sWatchResource)({
        isList: true,
        kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_2__.ProjectModel.kind,
        optional: true
    });
    // Sync the activeProject and activeNamespace changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!namespacesLoaded || projectFromUrl === activeNamespace) {
            return;
        }
        if (!projectFromUrl) {
            setProject(activeNamespace);
            return;
        }
        // If the project name exists as a namespace, set the active namespace
        if (namespaces.some((namespace)=>namespace.metadata.name === projectFromUrl) || projectFromUrl === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__.ALL_NAMESPACES_KEY) {
            setActiveNamespace(projectFromUrl);
        }
    }, [
        activeNamespace,
        setActiveNamespace,
        namespaces,
        namespacesLoaded,
        projectFromUrl,
        setProject
    ]);
    return {
        activeProject: projectFromUrl,
        setActiveProject: setProject
    };
};


/***/ },

/***/ "./features/perses-dashboards/components/project/utils.ts"
/*!****************************************************************!*\
  !*** ./features/perses-dashboards/components/project/utils.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_SHORTCUTS: () => (/* binding */ KEYBOARD_SHORTCUTS),
/* harmony export */   alphanumericCompare: () => (/* binding */ alphanumericCompare)
/* harmony export */ });
const alphanumericCompare = (a, b)=>{
    const safeA = a || '';
    const safeB = b || '';
    return safeA.localeCompare(safeB, undefined, {
        numeric: true,
        sensitivity: 'base'
    });
};
// Common shortcuts than span pages.
const KEYBOARD_SHORTCUTS = Object.freeze({
    focusNamespaceDropdown: 'n'
});


/***/ },

/***/ "./features/perses-dashboards/hooks/useDashboardsData.ts"
/*!***************************************************************!*\
  !*** ./features/perses-dashboards/hooks/useDashboardsData.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDashboardsData: () => (/* binding */ useDashboardsData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _components_project_useActiveProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project/useActiveProject */ "./features/perses-dashboards/components/project/useActiveProject.tsx");
/* harmony import */ var _usePerses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usePerses */ "./features/perses-dashboards/hooks/usePerses.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* eslint-disable react-hooks/refs */ 








// This hook syncs with mutliple external API's, redux, and URL state. Its a lot, but needs to all
// be in a single location
const useDashboardsData = ()=>{
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__.usePerspective)();
    const { activeProject, setActiveProject } = (0,_components_project_useActiveProject__WEBPACK_IMPORTED_MODULE_5__.useActiveProject)();
    const [queryParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useSearchParams)();
    // track initial page load to prevent a full page loading state when swapping dashboards
    // or projects
    const [initialPageLoad, , , setInitialPageLoadFalse] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(true);
    // Retrieve perses dashboard information
    const { persesProjects, persesProjectsLoading, persesDashboards, persesDashboardsLoading } = (0,_usePerses__WEBPACK_IMPORTED_MODULE_6__.usePerses)();
    const persesAvailable = !persesProjectsLoading && persesProjects;
    const [dashboardName] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_1__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Dashboard, use_query_params__WEBPACK_IMPORTED_MODULE_1__.StringParam);
    // Determine when to stop having the full page loader be used
    const combinedInitialLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!initialPageLoad) {
            return false;
        }
        if (!(persesProjectsLoading || persesDashboardsLoading)) {
            setInitialPageLoadFalse();
            return false;
        }
        return true;
    }, [
        persesProjectsLoading,
        persesDashboardsLoading,
        initialPageLoad,
        setInitialPageLoadFalse
    ]);
    const prevDashboardsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const prevMetadataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    // Homogenize data needed for dashboards dropdown between legacy and perses dashboards
    // to enable both to use the same component
    const combinedDashboardsMetadata = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (combinedInitialLoad) {
            return [];
        }
        // Check if dashboards data has actually changed to avoid recreation
        const dashboardsChanged = persesDashboards.length !== prevDashboardsRef.current.length || persesDashboards.some((dashboard, i)=>{
            const prevDashboard = prevDashboardsRef.current[i];
            return dashboard?.metadata?.name !== prevDashboard?.metadata?.name || dashboard?.spec?.display?.name !== prevDashboard?.spec?.display?.name || dashboard?.metadata?.project !== prevDashboard?.metadata?.project;
        });
        if (!dashboardsChanged && prevMetadataRef.current.length > 0) {
            return prevMetadataRef.current;
        }
        const newMetadata = persesDashboards.map((persesDashboard)=>{
            const name = persesDashboard?.metadata?.name;
            const displayName = persesDashboard?.spec?.display?.name || name;
            return {
                name,
                project: persesDashboard?.metadata?.project,
                tags: [
                    'perses'
                ],
                title: displayName,
                persesDashboard
            };
        });
        prevDashboardsRef.current = persesDashboards;
        prevMetadataRef.current = newMetadata;
        return newMetadata;
    }, [
        persesDashboards,
        combinedInitialLoad
    ]);
    // Retrieve dashboard metadata for the currently selected project
    const activeProjectDashboardsMetadata = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (activeProject === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.ALL_NAMESPACES_KEY) {
            return combinedDashboardsMetadata;
        }
        return combinedDashboardsMetadata.filter((combinedDashboardMetadata)=>{
            return combinedDashboardMetadata.project === activeProject;
        });
    }, [
        combinedDashboardsMetadata,
        activeProject
    ]);
    const changeBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newBoard)=>{
        if (!newBoard) {
            // If the board is being cleared then don't do anything
            return;
        }
        const params = new URLSearchParams(queryParams);
        params.delete(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Edit);
        const dashboard = combinedDashboardsMetadata.find((item)=>item.name === newBoard);
        const projectToUse = activeProject === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.ALL_NAMESPACES_KEY ? dashboard?.project : activeProject;
        if (projectToUse) {
            params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Project, projectToUse);
        }
        params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Dashboard, newBoard);
        if (dashboard?.persesDashboard?.spec?.duration) {
            params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Start, dashboard.persesDashboard.spec.duration);
        }
        if (dashboard?.persesDashboard?.spec?.refreshInterval) {
            params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Refresh, dashboard.persesDashboard.spec.refreshInterval);
        }
        let url = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__.getDashboardUrl)(perspective);
        url = `${url}?${params.toString()}`;
        if (newBoard !== dashboardName) {
            navigate(url, {
                replace: true
            });
        }
    }, [
        perspective,
        dashboardName,
        navigate,
        activeProject,
        combinedDashboardsMetadata,
        queryParams
    ]);
    return {
        persesAvailable,
        persesProjectsLoading,
        persesDashboards,
        dashboardName,
        changeBoard,
        activeProjectDashboardsMetadata,
        combinedInitialLoad,
        setActiveProject,
        activeProject
    };
};


/***/ },

/***/ "./features/perses-dashboards/hooks/useEditableProjects.ts"
/*!*****************************************************************!*\
  !*** ./features/perses-dashboards/hooks/useEditableProjects.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEditableProjects: () => (/* binding */ useEditableProjects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_perses_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/perses-client */ "./features/perses-dashboards/utils/perses-client.ts");
/* harmony import */ var _useOcpProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOcpProjects */ "./features/perses-dashboards/hooks/useOcpProjects.ts");




const useUsername = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getUser = (state)=>state.sdkCore?.user;
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(getUser);
    return user?.metadata?.name || user?.username;
};
const combinePersesAndOcpProjects = (persesUserPermissions, ocpProjects)=>{
    const persesProjectNames = Object.keys(persesUserPermissions).filter((name)=>name !== '*');
    const allAvailableProjects = new Set([
        ...persesProjectNames
    ]);
    ocpProjects.forEach((project)=>{
        if (project.metadata?.name) {
            allAvailableProjects.add(project.metadata.name);
        }
    });
    return Array.from(allAvailableProjects);
};
const getEditableProjects = (persesUserPermissions, allAvailableProjects)=>{
    const editableProjectNames = new Set();
    Object.entries(persesUserPermissions).forEach(([projectName, permissions])=>{
        const hasDashboardPermissions = permissions.some((permission)=>{
            const allActions = permission.actions.includes('*');
            const individualActions = permission.actions.includes('create') && permission.actions.includes('update') && permission.actions.includes('delete');
            const hasPermission = permission.scopes.includes('Dashboard') && (individualActions || allActions);
            return hasPermission;
        });
        if (hasDashboardPermissions) {
            if (projectName === '*') {
                allAvailableProjects.forEach((p)=>editableProjectNames.add(p));
            } else {
                editableProjectNames.add(projectName);
            }
        }
    });
    return Array.from(editableProjectNames);
};
const useEditableProjects = ()=>{
    const username = useUsername();
    const { ocpProjects } = (0,_useOcpProjects__WEBPACK_IMPORTED_MODULE_3__.useOcpProjects)();
    const { persesUserPermissions, persesPermissionsLoading, persesPermissionsError } = (0,_utils_perses_client__WEBPACK_IMPORTED_MODULE_2__.useFetchPersesPermissions)(username);
    const { editableProjects, allProjects } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (persesPermissionsLoading) {
            return {
                editableProjects: undefined,
                allProjects: undefined
            };
        }
        if (!persesUserPermissions) {
            return {
                editableProjects: undefined,
                allProjects: undefined
            };
        }
        if (persesPermissionsError) {
            return {
                editableProjects: undefined,
                allProjects: undefined
            };
        }
        const allAvailableProjects = combinePersesAndOcpProjects(persesUserPermissions, ocpProjects);
        const editableProjectNames = getEditableProjects(persesUserPermissions, allAvailableProjects);
        // Sort projects alphabetically
        const sortedEditableProjects = editableProjectNames.sort((a, b)=>a.localeCompare(b));
        const sortedProjects = allAvailableProjects.sort((a, b)=>a.localeCompare(b));
        return {
            editableProjects: sortedEditableProjects,
            allProjects: sortedProjects
        };
    }, [
        persesPermissionsLoading,
        persesUserPermissions,
        persesPermissionsError,
        ocpProjects
    ]);
    const hasEditableProject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return editableProjects ? editableProjects.length > 0 : false;
    }, [
        editableProjects
    ]);
    return {
        editableProjects,
        allProjects,
        hasEditableProject,
        permissionsLoading: persesPermissionsLoading,
        permissionsError: persesPermissionsError
    };
};


/***/ },

/***/ "./features/perses-dashboards/hooks/useOcpProjects.ts"
/*!************************************************************!*\
  !*** ./features/perses-dashboards/hooks/useOcpProjects.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOcpProjects: () => (/* binding */ useOcpProjects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/console/models */ "./shared/console/models/index.ts");



const useOcpProjects = ()=>{
    const [ocpProjects, ocpProjectsLoaded] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        isList: true,
        kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_2__.ProjectModel.kind,
        optional: true
    });
    const memoizedOcpProjects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return ocpProjects || [];
    }, [
        ocpProjects
    ]);
    const result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            ocpProjects: memoizedOcpProjects,
            ocpProjectsLoaded
        }), [
        memoizedOcpProjects,
        ocpProjectsLoaded
    ]);
    return result;
};


/***/ },

/***/ "./features/perses-dashboards/hooks/usePerses.ts"
/*!*******************************************************!*\
  !*** ./features/perses-dashboards/hooks/usePerses.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePerses: () => (/* binding */ usePerses)
/* harmony export */ });
/* harmony import */ var _utils_perses_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/perses-client */ "./features/perses-dashboards/utils/perses-client.ts");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);





const usePerses = (project)=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    const [refreshInterval] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__.QueryParams.RefreshInterval, use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam);
    const { isLoading: persesProjectsLoading, error: persesProjectsError, data: persesProjects } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'projects'
        ],
        queryFn: _utils_perses_client__WEBPACK_IMPORTED_MODULE_0__.fetchPersesProjects,
        enabled: true,
        refetchInterval: refreshInterval
    });
    const { isLoading: persesDashboardsLoading, error: persesDashboardsError, data: persesDashboards } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'dashboards'
        ],
        queryFn: _utils_perses_client__WEBPACK_IMPORTED_MODULE_0__.fetchPersesDashboardsMetadata,
        enabled: !project,
        // Only fetch all dashboards when no specific project is requested
        refetchInterval: refreshInterval
    });
    const { isLoading: persesProjectDashboardsLoading, error: persesProjectDashboardsError, data: persesProjectDashboards } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'dashboards',
            'project',
            project
        ],
        queryFn: ()=>{
            if (project === undefined || project === null) {
                throw new Error(t('Project is required for fetching project dashboards'));
            }
            return (0,_utils_perses_client__WEBPACK_IMPORTED_MODULE_0__.fetchPersesDashboardsByProject)(String(project));
        },
        enabled: !!project,
        refetchInterval: refreshInterval
    });
    return {
        // All Dashboards - fallback to project dashboards when all dashboards query is disabled
        persesDashboards: persesDashboards ?? persesProjectDashboards ?? [],
        persesDashboardsError: persesDashboardsError ?? persesProjectDashboardsError,
        persesDashboardsLoading: persesDashboardsLoading || !!project && persesProjectDashboardsLoading,
        // All Projects
        persesProjectsLoading,
        persesProjects: persesProjects ?? [],
        persesProjectsError,
        // Dashboards of a given project
        persesProjectDashboards: persesProjectDashboards ?? [],
        persesProjectDashboardsError,
        persesProjectDashboardsLoading
    };
};


/***/ },

/***/ "./features/perses-dashboards/pages/dashboard-page/dashboard-page-padding.tsx"
/*!************************************************************************************!*\
  !*** ./features/perses-dashboards/pages/dashboard-page/dashboard-page-padding.tsx ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePadding: () => (/* binding */ PagePadding)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_sm.js");


const PagePadding = ({ children, top = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_1__.t_global_spacer_sm.value, bottom = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_1__.t_global_spacer_sm.value, left = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_1__.t_global_spacer_sm.value, right = _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_1__.t_global_spacer_sm.value })=>{
    const style = {
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: style,
        children: children
    });
};


/***/ },

/***/ "./features/perses-dashboards/pages/dashboard-page/dashboard-toolbar.tsx"
/*!*******************************************************************************!*\
  !*** ./features/perses-dashboards/pages/dashboard-page/dashboard-toolbar.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditButton: () => (/* binding */ EditButton),
/* harmony export */   OCPDashboardToolbar: () => (/* binding */ OCPDashboardToolbar),
/* harmony export */   usePersesEditPermissions: () => (/* binding */ usePersesEditPermissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/useMediaQuery/index.js");
/* harmony import */ var _perses_dev_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perses-dev/components */ "../node_modules/@perses-dev/components/dist/index.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/Datasources/EditDatasourcesButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/AddPanelButton/AddPanelButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/AddGroupButton/AddGroupButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/SaveDashboardButton/SaveDashboardButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/DashboardStickyToolbar/DashboardStickyToolbar.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/DownloadButton/DownloadButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/EditJsonButton/EditJsonButton.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/context/DashboardProvider/dashboard-provider-api.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/Variables/EditVariablesButton.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/components/TimeRangeControls/TimeRangeControls.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/TimeRangeProvider/query-params.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var mdi_material_ui_PencilOutline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mdi-material-ui/PencilOutline */ "../node_modules/mdi-material-ui/PencilOutline.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _shared_components_dashboard_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/components/dashboard-dropdown */ "./shared/components/dashboard-dropdown.tsx");
/* harmony import */ var _hooks_useDashboardsData__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../hooks/useDashboardsData */ "./features/perses-dashboards/hooks/useDashboardsData.ts");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");














/**
   * The label used inside the button.
   */ /**
   * Handler that puts the dashboard into editing mode.
   */ /**
   * Whether the button is disabled.
   */ /**
   * Tooltip text to show when button is disabled.
   */ /**
   * Whether permissions are still loading.
   */ /**
   * The active project/namespace for permissions check.
   */ const EditButton = ({ onClick, activeProject })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_25__.useTranslation)("plugin__monitoring-plugin");
    const { canEdit, loading } = usePersesEditPermissions(activeProject);
    const disabled = !canEdit;
    const button = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: onClick,
        startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(mdi_material_ui_PencilOutline__WEBPACK_IMPORTED_MODULE_24__["default"], {}),
        variant: "outlined",
        color: "secondary",
        disabled: disabled || loading,
        sx: {
            whiteSpace: 'nowrap',
            minWidth: 'auto'
        },
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_28__.persesDashboardDataTestIDs.editDashboardButtonToolbar,
        children: loading ? t('Loading...') : t('Edit')
    });
    if (disabled && !loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: t("You don't have permission to edit this dashboard"),
            arrow: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: button
            })
        });
    }
    return button;
};
const usePersesEditPermissions = (namespace = null)=>{
    const [canCreate, createLoading] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21__.useAccessReview)({
        group: 'perses.dev',
        resource: 'persesdashboards',
        verb: 'create',
        namespace
    });
    const [canUpdate, updateLoading] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21__.useAccessReview)({
        group: 'perses.dev',
        resource: 'persesdashboards',
        verb: 'update',
        namespace
    });
    const [canDelete, deleteLoading] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_21__.useAccessReview)({
        group: 'perses.dev',
        resource: 'persesdashboards',
        verb: 'delete',
        namespace
    });
    const loading = createLoading || updateLoading || deleteLoading;
    const canEdit = canUpdate && canCreate && canDelete;
    return {
        canEdit,
        loading
    };
};
const OCPDashboardToolbar = (props)=>{
    const { initialVariableIsSticky, isReadonly, isVariableEnabled, isDatasourceEnabled, onEditButtonClick, onCancelButtonClick, onSave } = props;
    const { isEditMode } = (0,_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_16__.useEditMode)();
    const { timeZone, setTimeZone } = (0,_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_19__.useTimeZoneParams)('local');
    const isBiggerThanSm = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])().breakpoints.up('sm'));
    const isBiggerThanMd = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])().breakpoints.up('md'));
    const testId = 'dashboard-toolbar';
    const { changeBoard, activeProjectDashboardsMetadata: boardItems, activeProject, dashboardName } = (0,_hooks_useDashboardsData__WEBPACK_IMPORTED_MODULE_27__.useDashboardsData)();
    const { setDashboard } = (0,_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_16__.useDashboardActions)();
    const onChangeBoard = (0,react__WEBPACK_IMPORTED_MODULE_20__.useCallback)((selectedDashboard)=>{
        changeBoard(selectedDashboard);
        const selectedBoard = boardItems.find((item)=>item.name.toLowerCase() === selectedDashboard.toLowerCase() && item.project?.toLowerCase() === activeProject?.toLowerCase());
        if (selectedBoard) {
            setDashboard(selectedBoard.persesDashboard);
        }
    }, [
        activeProject,
        boardItems,
        changeBoard,
        setDashboard
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        onChangeBoard(dashboardName);
    }, [
        dashboardName,
        onChangeBoard
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
            "data-testid": testId,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    px: 2,
                    py: 1.5,
                    display: "flex",
                    sx: {
                        backgroundColor: (theme)=>theme.palette.primary.main + (isEditMode ? '30' : '0'),
                        alignItems: 'center'
                    },
                    children: [
                        !lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](boardItems) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_22__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_dashboard_dropdown__WEBPACK_IMPORTED_MODULE_26__.DashboardDropdown, {
                                items: boardItems,
                                onChange: onChangeBoard,
                                selectedKey: dashboardName
                            })
                        }),
                        isEditMode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            direction: "row",
                            gap: 1,
                            ml: "auto",
                            children: [
                                isReadonly && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    severity: "warning",
                                    sx: {
                                        backgroundColor: 'transparent',
                                        padding: 0
                                    },
                                    children: "Dashboard managed via code only. Download JSON and commit changes to save."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    direction: "row",
                                    spacing: 0.5,
                                    ml: 1,
                                    whiteSpace: "nowrap",
                                    children: [
                                        isVariableEnabled && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_17__.EditVariablesButton, {}),
                                        isDatasourceEnabled && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_9__.EditDatasourcesButton, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_10__.AddPanelButton, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_11__.AddGroupButton, {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_12__.SaveDashboardButton, {
                                    onSave: onSave,
                                    isDisabled: isReadonly
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    variant: "outlined",
                                    onClick: onCancelButtonClick,
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_28__.persesDashboardDataTestIDs.cancelButtonToolbar,
                                    children: "Cancel"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: isBiggerThanSm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                direction: "row",
                                gap: 1,
                                ml: "auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditButton, {
                                    onClick: onEditButtonClick,
                                    activeProject: activeProject
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    sx: {
                        display: 'flex',
                        width: '100%',
                        alignItems: 'start',
                        padding: (theme)=>theme.spacing(1, 2, 0, 2),
                        flexDirection: isBiggerThanMd ? 'row' : 'column',
                        flexWrap: 'nowrap',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            width: "100%",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_components__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, {
                                FallbackComponent: _perses_dev_components__WEBPACK_IMPORTED_MODULE_8__.ErrorAlert,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_13__.DashboardStickyToolbar, {
                                    initialVariableIsSticky: initialVariableIsSticky,
                                    sx: {
                                        backgroundColor: ({ palette })=>palette.background.default
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            direction: "row",
                            ml: "auto",
                            flexWrap: "wrap",
                            justifyContent: "end",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                direction: "row",
                                spacing: 1,
                                mt: 1,
                                ml: 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_18__.TimeRangeControls, {
                                        timeZone: timeZone,
                                        onTimeZoneChange: (tz)=>setTimeZone(tz.value)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_14__.DownloadButton, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_15__.EditJsonButton, {
                                        isReadonly: !isEditMode
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ },

/***/ "./features/perses-dashboards/utils/dashboard-action-validations.ts"
/*!**************************************************************************!*\
  !*** ./features/perses-dashboards/utils/dashboard-action-validations.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDashboardDialogValidationSchema: () => (/* binding */ createDashboardDialogValidationSchema),
/* harmony export */   createDashboardDisplayNameValidationSchema: () => (/* binding */ createDashboardDisplayNameValidationSchema),
/* harmony export */   importDashboardDialogValidationSchema: () => (/* binding */ importDashboardDialogValidationSchema),
/* harmony export */   renameDashboardDialogValidationSchema: () => (/* binding */ renameDashboardDialogValidationSchema),
/* harmony export */   useDashboardValidationSchema: () => (/* binding */ useDashboardValidationSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "../node_modules/zod/v3/types.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _perses_dev_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perses-dev/core */ "../node_modules/@perses-dev/core/dist/schema/metadata.js");
/* harmony import */ var _dashboard_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-api */ "./features/perses-dashboards/utils/dashboard-api.ts");
/* harmony import */ var _dashboard_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-utils */ "./features/perses-dashboards/utils/dashboard-utils.ts");





const createDashboardDisplayNameValidationSchema = (t)=>zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, t('Required')).max(75, t('Must be 75 or fewer characters long'));
const createDashboardDialogValidationSchema = (t)=>zod__WEBPACK_IMPORTED_MODULE_0__.object({
        projectName: _perses_dev_core__WEBPACK_IMPORTED_MODULE_2__.nameSchema,
        dashboardName: createDashboardDisplayNameValidationSchema(t)
    });
const importDashboardDialogValidationSchema = ()=>zod__WEBPACK_IMPORTED_MODULE_0__.object({
        projectName: _perses_dev_core__WEBPACK_IMPORTED_MODULE_2__.nameSchema
    });
const renameDashboardDialogValidationSchema = (t)=>zod__WEBPACK_IMPORTED_MODULE_0__.object({
        dashboardName: createDashboardDisplayNameValidationSchema(t)
    });
// Validate dashboard name and check if it doesn't already exist
function useDashboardValidationSchema(t, projectName) {
    const { data: dashboards, isLoading: isDashboardsLoading, isError } = (0,_dashboard_api__WEBPACK_IMPORTED_MODULE_3__.useDashboardList)({
        project: projectName
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isDashboardsLoading) {
            return {
                schema: undefined,
                isSchemaLoading: true,
                hasSchemaError: false
            };
        }
        if (isError) {
            return {
                hasSchemaError: true,
                isSchemaLoading: false,
                schema: undefined
            };
        }
        if (!dashboards?.length) {
            return {
                schema: createDashboardDialogValidationSchema(t),
                isSchemaLoading: false,
                hasSchemaError: false
            };
        }
        const refinedSchema = createDashboardDialogValidationSchema(t).refine((schema)=>{
            return !(dashboards ?? []).some((dashboard)=>{
                return dashboard.metadata.project.toLowerCase() === schema.projectName.toLowerCase() && dashboard.metadata.name.toLowerCase() === (0,_dashboard_utils__WEBPACK_IMPORTED_MODULE_4__.generateMetadataName)(schema.dashboardName).toLowerCase();
            });
        }, (schema)=>({
                message: t(`Dashboard name '{{dashboardName}}' already exists in '{{projectName}}' project!`, {
                    dashboardName: schema.dashboardName,
                    projectName: schema.projectName
                }),
                path: [
                    'dashboardName'
                ]
            }));
        return {
            schema: refinedSchema,
            isSchemaLoading: false,
            hasSchemaError: false
        };
    }, [
        dashboards,
        isDashboardsLoading,
        isError,
        t
    ]);
}


/***/ },

/***/ "./features/perses-dashboards/utils/dashboard-api.ts"
/*!***********************************************************!*\
  !*** ./features/perses-dashboards/utils/dashboard-api.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPersesProject: () => (/* binding */ createPersesProject),
/* harmony export */   getDashboards: () => (/* binding */ getDashboards),
/* harmony export */   useCreateDashboardMutation: () => (/* binding */ useCreateDashboardMutation),
/* harmony export */   useCreateProjectMutation: () => (/* binding */ useCreateProjectMutation),
/* harmony export */   useDashboardList: () => (/* binding */ useDashboardList),
/* harmony export */   useDeleteDashboardMutation: () => (/* binding */ useDeleteDashboardMutation),
/* harmony export */   useUpdateDashboardMutation: () => (/* binding */ useUpdateDashboardMutation)
/* harmony export */ });
/* harmony import */ var _perses_url_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perses/url-builder */ "./features/perses-dashboards/utils/perses/url-builder.ts");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _perses_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perses-client */ "./features/perses-dashboards/utils/perses-client.ts");





const resource = 'dashboards';
const updateDashboard = async (entity)=>{
    const url = (0,_perses_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: resource,
        project: entity.metadata.project,
        name: entity.metadata.name
    });
    return _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.consoleFetchJSON.put(url, entity);
};
const useUpdateDashboardMutation = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationKey: [
            resource
        ],
        mutationFn: updateDashboard,
        onSuccess: ()=>{
            return queryClient.invalidateQueries({
                queryKey: [
                    resource
                ]
            });
        }
    });
};
const createDashboard = async (entity)=>{
    const url = (0,_perses_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: resource,
        project: entity.metadata.project
    });
    return _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.consoleFetchJSON.post(url, entity);
};
const useCreateDashboardMutation = (onSuccess)=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationKey: [
            resource
        ],
        mutationFn: (dashboard)=>createDashboard(dashboard),
        onSuccess: onSuccess,
        onSettled: ()=>{
            return queryClient.invalidateQueries({
                queryKey: [
                    resource
                ]
            });
        }
    });
};
const deleteDashboard = async (entity)=>{
    const url = (0,_perses_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: resource,
        project: entity.metadata.project,
        name: entity.metadata.name
    });
    await _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.consoleFetchJSON.delete(url);
};
function useDeleteDashboardMutation() {
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationKey: [
            resource
        ],
        mutationFn: (entity)=>{
            return deleteDashboard(entity).then(()=>{
                return entity;
            });
        },
        onSuccess: (dashboard)=>{
            queryClient.removeQueries({
                queryKey: [
                    resource,
                    dashboard.metadata.project,
                    dashboard.metadata.name
                ]
            });
            return queryClient.invalidateQueries({
                queryKey: [
                    resource
                ]
            });
        }
    });
}
const getDashboards = async (project, metadataOnly = false)=>{
    const queryParams = new URLSearchParams();
    if (metadataOnly) {
        queryParams.set('metadata_only', 'true');
    }
    const url = (0,_perses_url_builder__WEBPACK_IMPORTED_MODULE_0__["default"])({
        resource: resource,
        project: project,
        queryParams: queryParams
    });
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.consoleFetchJSON)(url);
};
function useDashboardList(options) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({
        queryKey: [
            resource,
            options.project,
            options.metadataOnly
        ],
        queryFn: ()=>{
            return getDashboards(options.project, options.metadataOnly);
        },
        ...options
    });
}
const createPersesProject = async (projectName)=>{
    const createProjectURL = '/api/v1/projects';
    const persesURL = `${_perses_client__WEBPACK_IMPORTED_MODULE_5__.PERSES_PROXY_BASE_PATH}${createProjectURL}`;
    const newProject = {
        kind: 'Project',
        metadata: {
            name: projectName,
            version: 0
        },
        spec: {
            display: {
                name: projectName
            }
        }
    };
    return _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.consoleFetchJSON.post(persesURL, newProject);
};
const useCreateProjectMutation = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationKey: [
            'projects'
        ],
        mutationFn: createPersesProject,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'projects'
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    resource
                ]
            });
        }
    });
};


/***/ },

/***/ "./features/perses-dashboards/utils/dashboard-utils.ts"
/*!*************************************************************!*\
  !*** ./features/perses-dashboards/utils/dashboard-utils.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewDashboard: () => (/* binding */ createNewDashboard),
/* harmony export */   generateMetadataName: () => (/* binding */ generateMetadataName)
/* harmony export */ });
/**
 * Generated a resource name valid for the API.
 * By removing accents from alpha characters and replace specials character by underscores.
 */ const generateMetadataName = (name)=>{
    return name.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-zA-Z0-9_.-]/g, '_');
};
const createNewDashboard = (dashboardName, projectName)=>{
    return {
        kind: 'Dashboard',
        metadata: {
            name: generateMetadataName(dashboardName),
            project: projectName,
            version: 0
        },
        spec: {
            display: {
                name: dashboardName
            },
            datasources: {},
            panels: {},
            layouts: [],
            variables: [],
            duration: '1h',
            refreshInterval: '30s'
        }
    };
};


/***/ },

/***/ "./features/perses-dashboards/utils/migrate-api.ts"
/*!*********************************************************!*\
  !*** ./features/perses-dashboards/utils/migrate-api.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMigrateDashboard: () => (/* binding */ useMigrateDashboard)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _perses_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perses-client */ "./features/perses-dashboards/utils/perses-client.ts");



const MIGRATE_ENDPOINT = `${_perses_client__WEBPACK_IMPORTED_MODULE_2__.PERSES_PROXY_BASE_PATH}/api/migrate`;
const migrateDashboard = async (body)=>{
    const requestBody = {
        input: body.input || {},
        grafanaDashboard: body.grafanaDashboard,
        useDefaultDatasource: !!body.useDefaultDatasource
    };
    try {
        const result = await _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON.post(MIGRATE_ENDPOINT, requestBody);
        return result;
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to migrate dashboard: ${message}`);
    }
};
function useMigrateDashboard() {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
        mutationKey: [
            'migrate'
        ],
        mutationFn: migrateDashboard
    });
}


/***/ },

/***/ "./features/perses-dashboards/utils/perses-client.ts"
/*!***********************************************************!*\
  !*** ./features/perses-dashboards/utils/perses-client.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PERSES_PROXY_BASE_PATH: () => (/* binding */ PERSES_PROXY_BASE_PATH),
/* harmony export */   fetchPersesDashboard: () => (/* binding */ fetchPersesDashboard),
/* harmony export */   fetchPersesDashboardsByProject: () => (/* binding */ fetchPersesDashboardsByProject),
/* harmony export */   fetchPersesDashboardsMetadata: () => (/* binding */ fetchPersesDashboardsMetadata),
/* harmony export */   fetchPersesProjects: () => (/* binding */ fetchPersesProjects),
/* harmony export */   fetchPersesUserPermissions: () => (/* binding */ fetchPersesUserPermissions),
/* harmony export */   useFetchPersesDashboard: () => (/* binding */ useFetchPersesDashboard),
/* harmony export */   useFetchPersesPermissions: () => (/* binding */ useFetchPersesPermissions)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");




const PERSES_PROXY_BASE_PATH = '/api/proxy/plugin/monitoring-console-plugin/perses';
const fetchPersesDashboardsMetadata = ()=>{
    const listDashboardsMetadata = '/api/v1/dashboards';
    const persesURL = `${PERSES_PROXY_BASE_PATH}${listDashboardsMetadata}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesDashboardsByProject = (project)=>{
    const dashboardsEndpoint = `${PERSES_PROXY_BASE_PATH}/api/v1/dashboards`;
    const persesURL = `${dashboardsEndpoint}?project=${encodeURIComponent(project)}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesProjects = ()=>{
    const listProjectURL = '/api/v1/projects';
    const persesURL = `${PERSES_PROXY_BASE_PATH}${listProjectURL}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesUserPermissions = (username)=>{
    const userPermissionsURL = `/api/v1/users/${encodeURIComponent(username)}/permissions`;
    const persesURL = `${PERSES_PROXY_BASE_PATH}${userPermissionsURL}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesDashboard = async (project, dashboardName)=>{
    const getDashboardURL = `/api/v1/projects/${project}/dashboards/${dashboardName}`;
    const persesURL = `${PERSES_PROXY_BASE_PATH}${getDashboardURL}`;
    return await (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const useFetchPersesDashboard = (project, dashboardName)=>{
    const [refreshInterval] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__.QueryParams.RefreshInterval, use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam);
    const { isLoading: persesDashboardLoading, error: persesDashboardError, data: persesDashboard } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'dashboards',
            project,
            dashboardName
        ],
        queryFn: ()=>fetchPersesDashboard(project, dashboardName),
        enabled: true,
        refetchInterval: refreshInterval
    });
    return {
        persesDashboard,
        persesDashboardError,
        persesDashboardLoading
    };
};
const useFetchPersesPermissions = (username)=>{
    const { isLoading: persesPermissionsLoading, error: persesPermissionsError, data: persesUserPermissions } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'perses-user-permissions',
            username
        ],
        queryFn: ()=>fetchPersesUserPermissions(username),
        enabled: !!username,
        staleTime: 5 * 60 * 1000,
        // Cache for 5 minutes
        refetchOnWindowFocus: true,
        retry: 2,
        onError: (error)=>{
            // eslint-disable-next-line no-console
            console.warn('Failed to fetch Perses user permissions:', error);
        }
    });
    return {
        persesUserPermissions,
        persesPermissionsError,
        persesPermissionsLoading
    };
};


/***/ },

/***/ "./features/perses-dashboards/utils/perses/url-builder.ts"
/*!****************************************************************!*\
  !*** ./features/perses-dashboards/utils/perses/url-builder.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInRoute: () => (/* binding */ SignInRoute),
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
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
const apiPrefix = '/api/v1';
const SignInRoute = '/sign-in';
function buildURL(params) {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // OCP Specific Code
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const basePath = '/api/proxy/plugin/monitoring-console-plugin/perses';
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // OCP Specific Code
    ////////////////////////////////////////////////////////////////////////////////////////////////
    let url = params.apiPrefix === undefined ? apiPrefix : params.apiPrefix;
    if (params.project !== undefined && params.project.length > 0) {
        url = `${url}/projects/${encodeURIComponent(params.project)}`;
    }
    url = `${url}/${params.resource}`;
    if (params.name !== undefined && params.name.length > 0) {
        url = `${url}/${encodeURIComponent(params.name)}`;
    }
    if (params.pathSuffix && params.pathSuffix.length > 0) {
        url = `${url}/${params.pathSuffix.join('/')}`;
    }
    if (params.queryParams !== undefined) {
        url = `${url}?${params.queryParams.toString()}`;
    }
    return basePath + url;
}


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


/***/ },

/***/ "./shared/utils/react-router-7-adapter.ts"
/*!************************************************!*\
  !*** ./shared/utils/react-router-7-adapter.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactRouter7Adapter: () => (/* binding */ ReactRouter7Adapter)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);

const ReactRouter7Adapter = ({ children })=>{
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
    const adapter = {
        replace (location) {
            navigate(location.search || '?', {
                replace: true,
                state: location.state
            });
        },
        push (location) {
            navigate(location.search || '?', {
                replace: false,
                state: location.state
            });
        },
        get location () {
            return location;
        }
    };
    return children(adapter);
};


/***/ }

}]);
//# sourceMappingURL=features_perses-dashboards_components_dashboard-header_tsx-features_perses-dashboards_compone-9c1565-chunk.js.map