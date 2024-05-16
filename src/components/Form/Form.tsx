import { ChangeEvent, useEffect, useState } from "react";
import {
  country,
  RussiaCity,
  BelorussiaCity,
  university,
  RussiaHousing,
  BelorussiaHousing,
} from "../../data";
import { Selector } from "../Selector/Selector";
import styles from "./Form.module.css";
export const Form = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");
  const [selectedHousing, setSelectedHousing] = useState<string>("");

  const [cityOptions, setCityOptions] = useState<Record<string, string>[]>([
    { value: "", text: "Выберите город" },
  ]);
  const [housingOptions, setHousingOptions] = useState<
    Record<string, string>[]
  >([{ value: "", text: "Выберите вариант проживания" }]);
  const [universityOptions, setUniversityOptions] = useState<
    Record<string, string>[]
  >([{ value: "", text: "Выберите ВУЗ" }]);

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const selectedValue = e.target.value;
    setState(selectedValue);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    if (selectedCountry === "Выберите страну") {
      setIsSelected(false);
    }
    if (selectedCountry === "РФ") {
      setCityOptions(RussiaCity);
      setHousingOptions(RussiaHousing);
      setUniversityOptions(university);
      setIsSelected(true);
    } else if (selectedCountry === "РБ") {
      setCityOptions(BelorussiaCity);
      setHousingOptions(BelorussiaHousing);
      setUniversityOptions(university);
      setIsSelected(true);
    } else {
      setCityOptions([{ value: "", text: "Выберите город" }]);
      setHousingOptions([{ value: "", text: "Выберите вариант проживания" }]);
      setUniversityOptions([{ value: "", text: "Выберите ВУЗ" }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedUniversity("");
    setSelectedHousing("");
    setIsSelected(false);
  };

  useEffect(() => {
    if (
      selectedCountry &&
      selectedCity &&
      selectedHousing &&
      selectedUniversity
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [selectedCountry, selectedCity, selectedHousing, selectedUniversity]);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Selector
        name="country"
        options={country}
        value={selectedCountry}
        change={handleCountryChange}
      />
      <Selector
        name="city"
        options={cityOptions}
        disablet={!isSelected}
        value={selectedCity}
        change={(e) => handleSelectChange(e, setSelectedCity)}
      />
      <Selector
        name="university"
        options={universityOptions}
        value={selectedUniversity}
        disablet={!isSelected}
        change={(e) => handleSelectChange(e, setSelectedUniversity)}
      />
      <Selector
        name="housing"
        options={housingOptions}
        value={selectedHousing}
        disablet={!isSelected}
        change={(e) => handleSelectChange(e, setSelectedHousing)}
      />
      <button className={styles.btn} disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};
