import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: "",
  selectedCity: "",
  selectedUniversity: "",
  selectedHousing: "",
  cityOptions: [{ value: "", text: "Выберите город" }],
  housingOptions: [{ value: "", text: "Выберите вариант проживания" }],
  universityOptions: [{ value: "", text: "Выберите ВУЗ" }],
  isSelected: false,
  isFormValid: false,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setSelectedUniversity(state, action) {
      state.selectedUniversity = action.payload;
    },
    setSelectedHousing(state, action) {
      state.selectedHousing = action.payload;
    },
    setCityOptions(state, action) {
      state.cityOptions = action.payload;
    },
    setHousingOptions(state, action) {
      state.housingOptions = action.payload;
    },
    setUniversityOptions(state, action) {
      state.universityOptions = action.payload;
    },
    setIsSelected(state, action) {
      state.isSelected = action.payload;
    },
    setIsFormValid(state, action) {
      state.isFormValid = action.payload;
    },
    resetSelection(state) {
      state.selectedCountry = "";
      state.selectedCity = "";
      state.selectedUniversity = "";
      state.selectedHousing = "";
      state.cityOptions = [{ value: "", text: "Выберите город" }];
      state.housingOptions = [
        { value: "", text: "Выберите вариант проживания" },
      ];
      state.universityOptions = [{ value: "", text: "Выберите ВУЗ" }];
      state.isSelected = false;
      state.isFormValid = false;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedCity,
  setSelectedUniversity,
  setSelectedHousing,
  setCityOptions,
  setHousingOptions,
  setUniversityOptions,
  setIsSelected,
  setIsFormValid,
  resetSelection,
} = selectionSlice.actions;

export default selectionSlice.reducer;
