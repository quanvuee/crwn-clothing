import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
