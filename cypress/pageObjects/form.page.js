import { BasePage } from "./base.page.js";

export class FormPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get firstNameInput() {
        return cy.get("#firstName");
    }

    static get lastNameInput() {
        return cy.get("#lastName");
    }

    static get emailInput() {
        return cy.get("#userEmail");
    }

    static findGenderBtnByName(name) {
        return cy.get("#genterWrapper").contains(name);
    }

    static get mobileInput() {
        return cy.get("#userNumber");
    }

    static get birthdateInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get birthMonthSelect() {
        return cy.get(".react-datepicker-popper").find("select[class='react-datepicker__month-select']");
    }

    static get birthYearSelect() {
        return cy.get(".react-datepicker-popper").find("select[class='react-datepicker__year-select']");
    }

    static findDayBtnFor(day) {
        return cy.get(".react-datepicker-popper")
        .find(".react-datepicker__day")
        .not(".react-datepicker__day--outside-month")
        .contains(day);
    }

    static get subjectsInput() {
        return cy.get("#subjectsContainer");
    }

    static get topSubjectOption() {
        return this.subjectsInput.find(".subjects-auto-complete__menu");
    }

    static findHobbyBtnByName(name) {
        return cy.get("#hobbiesWrapper").contains(name);
    }

    static get pictureChoose() {
        return cy.get("input[id='uploadPicture']");
    }

    static get addressField() {
        return cy.get("#currentAddress");
    }

    static get stateSelect() {
        return cy.get("#state")
    }

    static findStateInSelect(state) {
        return this.stateSelect.find("div").contains(state);
    }

    static get citySelect() {
        return cy.get("#city")
    }

    static findCityInSelect(city) {
        return this.citySelect.find("div").contains(city);
    }

    static get submitBtn() {
        return cy.get("#submit");
    }

    static get dataTable() {
        return cy.get(".table-responsive");
    }

    static tableValueOf(label) {
        return this.dataTable.find("td").contains(label).siblings();
    }
}