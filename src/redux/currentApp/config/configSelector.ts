import { RootState } from "@/store"
import { createSelector } from "@reduxjs/toolkit"

export const isOpenLeftPanel = (state: RootState) => {
  return state.currentApp.config.openLeftPanel
}

export const isOpenBottomPanel = (state: RootState) => {
  return state.currentApp.config.openBottomPanel
}

export const isOpenRightPanel = (state: RootState) => {
  return state.currentApp.config.openRightPanel
}

export const isShowDot = (state: RootState) => {
  return state.currentApp.config.showDot
}

export const getScale = (state: RootState) => {
  return state.currentApp.config.scale
}

export const getSelectedComponents = (state: RootState) => {
  return state.currentApp.config.selectedComponents
}

export const getSelectedAction = (state: RootState) => {
  return state.currentApp.config.selectedAction
}

export const isSelected = (state: RootState, displayName: string) => {
  return (
    state.currentApp.config.selectedComponents.findIndex((value) => {
      return value.displayName == displayName
    }) != -1
  )
}

export const getSelectedComponentsDisplayName = createSelector(
  [getSelectedComponents],
  (selectedComponents) => {
    return selectedComponents.map((component) => component.displayName)
  },
)